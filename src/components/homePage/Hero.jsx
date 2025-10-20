"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 1,
            size: Math.random() * 3 + 1,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section className="relative flex items-center justify-center min-h-[90vh] px-6 py-24 bg-gradient-to-br from-[#0a0f1c] via-[#0e1422] to-[#111a2c] overflow-hidden text-white">
            {/* === Animated Floating Particles === */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-cyan-400/30 blur-sm"
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* === Subtle Gradient Glow Overlay === */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-600/10 blur-3xl" />

            {/* === Hero Content === */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
                {/* === Right Side — Profile Card === */}
                <div className="space-y-6 text-center md:text-left">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                            Hi, I’m{" "}
                            <span className="text-cyan-400">Abu Bakar</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                MERN Stack Developer
                            </span>
                        </h1>
                        <div className="mt-3 h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        I’m a passionate{" "}
                        <span className="text-cyan-400 font-semibold">
                            MERN Stack Developer
                        </span>{" "}
                        who crafts{" "}
                        <span className="text-blue-400 font-semibold">
                            modern, scalable, and high-performance web
                            applications
                        </span>
                        . I specialize in building complete digital solutions
                        using{" "}
                        <span className="text-purple-400 font-semibold">
                            MongoDB, Express.js, React, and Node.js
                        </span>
                        .
                    </p>

                    <p className="text-gray-400 text-base leading-relaxed">
                        My mission is to design experiences that blend
                        performance, aesthetics, and innovation — solving
                        real-world problems through clean and futuristic
                        development.
                    </p>

                    {/* === Buttons === */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button className="cursor-pointer group px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.45)] transition-all duration-300 flex items-center justify-center gap-2">
                            View Projects
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="cursor-pointer px-8 py-3 border border-cyan-400/40 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                            Hire Me
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* === Contact Info === */}
                    <div className="pt-6 space-y-2 text-gray-400 text-sm">
                        <p>
                            <span className="text-cyan-400 font-semibold">
                                Email:
                            </span>{" "}
                            abubakar.wxy@gmail.com
                        </p>
                        <p>
                            <span className="text-cyan-400 font-semibold">
                                Location:
                            </span>{" "}
                            Dhaka, Bangladesh
                        </p>
                        <p>
                            <span className="text-cyan-400 font-semibold">
                                LinkedIn:
                            </span>{" "}
                            linkedin.com/in/abubakarwxy
                        </p>
                        <p>
                            <span className="text-cyan-400 font-semibold">
                                GitHub:
                            </span>{" "}
                            github.com/abubakar-wxy
                        </p>
                    </div>
                </div>

                {/* === Left Side — Text Introduction === */}
                <div className="flex justify-center">
                    <div className="relative group transition-transform duration-300 ease-out hover:scale-[1.02]">
                        {/* Outer glow border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-lg opacity-70 group-hover:opacity-90 transition-opacity" />

                        {/* Inner card */}
                        <div className="relative bg-[#0e1422] border border-cyan-400/20 rounded-3xl p-8 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                            {/* Image wrapper */}
                            <div className="rounded-2xl overflow-hidden mb-6 border border-cyan-400/20">
                                {/* 4:5 aspect ratio instead of square */}
                                <div className="w-full aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500">
                                    <Image
                                        src="/images/profile.png"
                                        alt="Abu Bakar Muhammad Yahya Profile Picture"
                                        width={384} // ✅ Actual pixel dimensions (Next.js requirement)
                                        height={384} // ✅ Matches 4:5 ratio
                                        className="rounded-lg object-cover w-full h-full"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="text-2xl font-bold text-white text-center mb-2 tracking-wide">
                                Abu Bakar Muhammad Yahya
                            </h3>

                            {/* Role */}
                            <p className="text-cyan-300 text-sm text-center font-medium mb-6">
                                MERN Stack Web Developer
                            </p>

                            {/* Decorative gradient line */}
                            <div className="flex justify-center">
                                <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* === Keyframes === */}
            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.2;
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                        opacity: 0.6;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
