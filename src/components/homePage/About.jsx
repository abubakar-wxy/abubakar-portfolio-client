"use client";

import React from "react";
import { Mail, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";

const About = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#0b1220] via-[#0a0f1a] to-black text-gray-300 py-24 px-6 overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Get to know more about who I am, what I do, and my
                        passion for crafting full-stack web applications.
                    </p>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full mx-auto mt-6" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column — Bio + Skills */}
                    <div className="space-y-8">
                        {/* Bio */}
                        <div className="bg-[#0e1422]/60 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                Who I Am
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                I’m{" "}
                                <span className="text-cyan-400 font-medium">
                                    Abu Bakar Muhammad Yahya
                                </span>
                                , a passionate{" "}
                                <span className="text-blue-400 font-medium">
                                    MERN Stack Web Developer
                                </span>{" "}
                                with over{" "}
                                <span className="text-purple-400 font-medium">
                                    4 years of hands-on experience
                                </span>{" "}
                                building modern, scalable, and efficient web
                                applications.
                                <br />
                                <br />
                                My expertise lies in React.js, Node.js, MongoDB,
                                and Express.js — complemented by strong frontend
                                skills using Tailwind CSS and modern UI
                                frameworks. I’m always eager to explore new
                                technologies, learn deeply, and deliver creative
                                solutions that make an impact.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="bg-[#0e1422]/60 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Technical Skills
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                                {[
                                    "HTML5",
                                    "CSS3",
                                    "Tailwind CSS",
                                    "Bootstrap",
                                    "React.js",
                                    "Node.js",
                                    "Express.js",
                                    "MongoDB",
                                    "Firebase",
                                    "WordPress",
                                    "Git & GitHub",
                                    "VPS Hosting",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/10 text-cyan-300 rounded-lg py-2 px-3 text-sm font-medium hover:bg-cyan-500/20 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Contact + Info */}
                    <div className="space-y-8">
                        <div className="bg-[#0e1422]/60 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Personal Info
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Mail className="text-cyan-400 w-5 h-5" />
                                    <span className="text-gray-300">
                                        abubakar.wxy@gmail.com
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MapPin className="text-cyan-400 w-5 h-5" />
                                    <span className="text-gray-300">
                                        Dhaka, Bangladesh
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Linkedin className="text-cyan-400 w-5 h-5" />
                                    <a
                                        href="https://www.linkedin.com/in/abubakar24/"
                                        target="_blank"
                                        className="text-blue-400 hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Github className="text-cyan-400 w-5 h-5" />
                                    <a
                                        href="https://github.com/abubakar-wxy"
                                        target="_blank"
                                        className="text-blue-400 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MessageCircle className="text-cyan-400 w-5 h-5" />
                                    <a
                                        href="https://wa.me/8801879114768"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Education & Language */}
                        <div className="bg-[#0e1422]/60 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Education & Languages
                            </h3>
                            <div className="space-y-4">
                                <p className="text-gray-300">
                                    🎓{" "}
                                    <span className="text-cyan-400 font-medium">
                                        B.A (Hons.) in Marketing
                                    </span>{" "}
                                    — Siddheswari College
                                    <br />
                                    Currently continuing studies
                                </p>
                                <p className="text-gray-300">
                                    📚 SSC: Mohanagar Ideal School (GPA 3.94){" "}
                                    <br /> HSC: Khilgaon Model College (GPA
                                    3.53)
                                </p>
                                <p className="text-gray-300">
                                    🌐{" "}
                                    <span className="text-cyan-400 font-medium">
                                        Languages:
                                    </span>{" "}
                                    English (Professional), Bangla (Native)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
