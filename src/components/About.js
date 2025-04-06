import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="min-h-screen flex items-center justify-center bg-gray-800 text-white py-16 px-6 w-full max-w-screen-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto text-center flex flex-col justify-center items-center">
                <h2 className="section-title text-4xl font-semibold mb-8">自己紹介</h2>
                <div className="max-w-3xl mx-auto text-left text-xl">
                    <p className="mb-5">初めまして。私は現在webアプリケーションエンジニアとして働いています。</p>
                    <p>長い間音楽の道を志したが、挫折を機にITエンジニアとして働いている兄の勧めもありITエンジニアとして就職。</p>
                    <p>IT業界のイロハを知り、モバイルアプリエンジニアとして働くという目標ができました。</p>
                </div>
            </div>
        </motion.section>
    );
}

export default About;
