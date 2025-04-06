import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full py-8 text-center text-gray-400 text-sm">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p>© 2025 My Portfolio. All rights reserved.</p>
            </motion.div>
        </footer>
    );
}

export default Footer;
