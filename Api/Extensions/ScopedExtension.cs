using DataAccess;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;

namespace Api.Extensions;

public static class ScopedExtension
{

    public static IServiceCollection AddScopedExtensions(this IServiceCollection services, IConfiguration config)
    {
        services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy", policy =>
            {
                policy
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .WithExposedHeaders("WWW-Authenticate")
                    .WithOrigins("http://localhost:3000")
                    .AllowCredentials();
            });
        });

        services.AddControllers(opt =>
        {
            AuthorizationPolicy policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
            opt.Filters.Add(new AuthorizeFilter(policy));
        });

        services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            }
        );


        return services;
    }
}