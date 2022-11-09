using Domain.ApiResponseModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]"), ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class EchoController : ControllerBase
    {
        private readonly ILogger<EchoController> _logger;

        /// <summary>
        /// Default constructor
        /// </summary>
        /// <param name="logger">System logging</param>
        public EchoController(ILogger<EchoController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Echo check to see if the server is online
        /// </summary>
        /// <returns>string indicating the server is alive</returns>
        [HttpGet("Echo")]
        public ActionResult<ApiResponse<string>> Echo()
        {   _logger.LogInformation($"Received echo request on {DateTime.UtcNow}");
            return Ok(new ApiResponse<string>()
            {
                Data = "Online",
                IsSuccessful = true
            });
        }
    }
}