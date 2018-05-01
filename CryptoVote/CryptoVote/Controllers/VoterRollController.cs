using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CryptoVote.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CryptoVote.Controllers
{
    [Route("api/Voter")]
    public class VoterRollController : Controller
    {

        VoterRollDAL objVoter = new VoterRollDAL();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<VoterRoll> Index()
        {
            return objVoter.GetAllVoters();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] VoterRoll voter)
        {
            return objVoter.AddVoter(voter);
        }

        [HttpGet]
        [Route("Details/{voterId}")]
        public VoterRoll Details(int voterId)
        {
            return objVoter.GetVoterData(voterId);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]VoterRoll voter)
        {
            return objVoter.UpdateVoter(voter);
        }

        [HttpDelete]
        [Route("Delete/{voterId}")]
        public int Delete(int voterId)
        {
            return objVoter.DeleteVoter(voterId);
        }

    }
}
