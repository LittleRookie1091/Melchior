using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Melchior.Models
{
    public class Profile
    {
        public string Name { get; set; }
        public int Age{ get; set; }
        public string Description { get; set; } 
        public bool IsComplete { get; set; }

        public string Secret { get; set; }
    }
}
