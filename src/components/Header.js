import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="min-h-screen flex flex-col justify-center items-center text-center">
            <motion.div
                className="bg-white bg-opacity-10 backdrop-blur-sm p-10 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <h1 className="text-6xl font-bold text-white">はじめまして。</h1>
                <p className="mt-5 text-2xl text-indigo-100">私の自己紹介ページです。</p>
            </motion.div>
        </header>
    );
}

export default Header;
