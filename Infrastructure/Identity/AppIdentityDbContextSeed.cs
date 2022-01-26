using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Lou",
                    Email = "lawrenceqf@gmail.com",
                    UserName = "lawrenceqf@gmail.com",
                    Address = new Address
                    {
                        FirstName = "Lou",
                        LastName = "Queiróz",
                        Street = "Ana Maria Mendonça",
                        City = "Cataguases",
                        State = "MG",
                        ZipCode = "36770536"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}