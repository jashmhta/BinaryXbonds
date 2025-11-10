'use client';

import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Arjun Mehta",
      position: "Managing Director",
      expertise: "Investment Banking & Debt Markets",
      experience: "25+ years",
      description: "Former head of debt capital markets at a leading investment bank. Specialized in corporate bond structuring and underwriting.",
      education: "MBA Finance, IIM Ahmedabad"
    },
    {
      name: "Sneha Kapoor",
      position: "Head of Bond Trading",
      expertise: "Secondary Market Operations",
      experience: "18+ years",
      description: "Expert in secondary bond market trading with deep relationships across institutional investors and market makers.",
      education: "CFA Charterholder, CA"
    },
    {
      name: "Rahul Verma",
      position: "Chief Risk Officer",
      expertise: "Credit Analysis & Risk Management",
      experience: "20+ years",
      description: "Extensive experience in credit rating advisory and risk assessment for corporate and government securities.",
      education: "PhD Economics, Delhi School of Economics"
    },

  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Seasoned professionals with decades of combined experience in debt capital markets, credit analysis, and institutional sales.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* Profile Image Placeholder with Initials */}
              <div className="relative h-64 bg-gradient-to-br from-[hsl(var(--golden-dark))] to-[hsl(var(--golden))] flex items-center justify-center">
                <div className="text-6xl font-black text-[hsl(var(--navy))] opacity-90">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white font-black text-2xl drop-shadow-lg">{member.name}</div>
                  <div className="text-white/95 text-base font-semibold drop-shadow-lg">{member.position}</div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                {/* Expertise Badge */}
                <div className="inline-block bg-[hsl(var(--golden))]/10 text-[hsl(var(--golden))] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {member.expertise}
                </div>

                {/* Experience */}
                <div className="text-base text-gray-700 mb-3 font-medium">
                  <span className="font-bold text-[hsl(var(--navy))]">Experience:</span> {member.experience}
                </div>

                {/* Description */}
                <p className="text-gray-800 text-base leading-relaxed mb-4 font-medium">
                  {member.description}
                </p>

                {/* Education */}
                <div className="text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200 font-medium">
                  🎓 {member.education}
                </div>

                {/* Contact Icons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[hsl(var(--golden))]/10 hover:bg-[hsl(var(--golden))]/20 text-[hsl(var(--golden))] rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">Connect</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[hsl(var(--golden-dark))] to-[hsl(var(--golden))] rounded-2xl p-12" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[hsl(var(--navy))] mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-[hsl(var(--navy))]/80 mb-6 max-w-2xl mx-auto">
            We're always looking for talented professionals passionate about fixed income markets and client service excellence.
          </p>
          <button className="px-8 py-3 bg-[hsl(var(--navy))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--navy))]/90 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
