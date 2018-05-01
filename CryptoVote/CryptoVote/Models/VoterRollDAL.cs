using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoVote.Models
{
    public class VoterRollDAL
    {
        CryptoVoteContext db = new CryptoVoteContext();

        public IEnumerable<VoterRoll> GetAllVoters()
        {
            try
            {
                return db.VoterRoll.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new voter record   
        public int AddVoter(VoterRoll voter)
        {
            try
            {
                db.VoterRoll.Add(voter);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar voter  
        public int UpdateVoter(VoterRoll voter)
        {
            try
            {
                db.Entry(voter).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular voter  
        public VoterRoll GetVoterData(int voterId)
        {
            try
            {
                VoterRoll voter = db.VoterRoll.Find(voterId);
                return voter;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular voter  
        public int DeleteVoter(int voterId)
        {
            try
            {
                VoterRoll voter = db.VoterRoll.Find(voterId);
                db.VoterRoll.Remove(voter);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        

    }
}
