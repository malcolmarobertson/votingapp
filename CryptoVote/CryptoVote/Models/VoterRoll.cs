using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CryptoVote.Models
{
    public partial class VoterRoll
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int VoterId { get; set; }
        public string FullName { get; set; }
    }
}
