using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class ActivityAttendee
    {
        public string? UserId { get; set; }
        public User User { get; set; }
        public string? ActivityId {get; set;}
        public Activity Activity {get; set;} = null!;
        public bool IsHost { get; set; }
        public DateTime DateJoined {get; set;} = DateTime.UtcNow;

        
    }
}