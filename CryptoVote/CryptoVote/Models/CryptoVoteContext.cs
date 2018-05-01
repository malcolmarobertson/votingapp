using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CryptoVote.Models
{
    public partial class CryptoVoteContext : DbContext
    {
        public virtual DbSet<VoterRoll> VoterRoll { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=Enk-sql01.swh.mweb.co.za; Database=m5699140_aWare; User ID=m5699140_sysadmin; Password=Sysadm1!; MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VoterRoll>(entity =>
            {
                entity.HasKey(e => e.VoterId);

                entity.ToTable("VoterRoll");

                entity.Property(e => e.VoterId).HasColumnName("VoterId");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

            });
        }
    }
}
