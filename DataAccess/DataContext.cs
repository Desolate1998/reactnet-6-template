using Domain.Database;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class DataContext: IdentityDbContext<User>
{
    public DataContext(DbContextOptions opt) : base(opt)
    {

    }

    public DataContext()
    {
            
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        base.OnModelCreating(modelBuilder);
    }
}