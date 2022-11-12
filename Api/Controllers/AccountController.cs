using Application.Services_Interface;
using Domain.APIRequestModels;
using Domain.ApiResponseModel;
using Domain.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/[controller]"), ApiController]
[Authorize(AuthenticationSchemes = "Bearer")]
public class AccountController : Controller
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly ITokenService _tokenServices;

    public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenServices)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _tokenServices = tokenServices;
    }


    [HttpPost("register"), AllowAnonymous]
    public async Task<IActionResult> Register(RegisterRequestModel request)
    {

        _ = await _userManager.CreateAsync(
            new User()
            {
                Email = request.Email,
                UserName = request.Email
            },
            request.Password
        );
        return Ok();
    }


    [HttpPost("login"), AllowAnonymous]
    public async Task<ActionResult<ApiResponse<string>>> Login([FromBody] LoginRequestModel request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user == null)
            return BadRequest("Email or Password was incorrect");

        var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password,
            false);

        if (result.Succeeded)
        {
            var token = _tokenServices.CreateToken(user);
            return Ok(new ApiResponse<string>()
            {
                Data = token,
                IsSuccessful = true
            });
        }
        else
        {
            return BadRequest(new ApiResponse<string>()
            {
                Data = null,
                IsSuccessful = false,
                Errors = new List<ResponseException>()
                {
                    new ResponseException("Email or Password was incorrect",Guid.NewGuid())
                }
            });
        }
    }
}