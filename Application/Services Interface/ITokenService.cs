using Domain.Database;

namespace Application.Services_Interface;

public interface ITokenService
{
    string CreateToken(User user);

}