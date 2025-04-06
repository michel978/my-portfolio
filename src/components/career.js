import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
    return (
        <motion.section
            className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-6 w-full max-w-screen-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto text-center">
                <h2 className="section-title text-4xl font-semibold mb-8">経歴</h2>
                <div className="max-w-3xl mx-auto text-left text-xl">
                    <ul className="list-group">
                        <li className="list-group-item p-3 mb-3"><strong>2017年:</strong> 高校を卒業。在学期間中に友人たちとバンド活動を始める。</li>
                        <li className="list-group-item p-3 mb-3"><strong>2017年-2020年:</strong> フリーターをしながらバンド活動を継続。</li>
                        <li className="list-group-item p-3 mb-3"><strong>2020年-2024年:</strong> レコーディングエンジニアを志し専門学校に入学。また、音楽スタジオで見習いとして働くも自身の才能の限界を知り挫折。</li>
                        <li className="list-group-item p-3 mb-3"><strong>2024年 - 現在:</strong> Webアプリケーションエンジニアとして就職。物流システムやECサイトの制作。また新しくできた自社の支店のHP制作等を経験。</li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}

export default Career;
