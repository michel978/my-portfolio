import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectData = [
        { title: "物流管理システム", image: "/assets/images/logistics.jpeg", details: "物流管理システムの詳細情報。各種在庫管理や帳票の管理システムの改修や作成。" },
        { title: "ECサイト", image: "/assets/images/EC.jpeg", details: "ECサイトの詳細情報。自治体のアンテナショップを模したECサイト。" },
        { title: "自社ホームページ", image: "/assets/images/HP.jpeg", details: "自社ホームページの詳細情報。新しく立ち上げた支店のページの追加。" },
        { title: "自己紹介ページ", image: "/assets/images/portfolio.jpeg", details: "自己紹介ページの詳細情報。今回の転職を機に制作。" }
    ];

    return (
        <motion.section
            className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-6 w-full max-w-screen-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center">
                <h2 className="section-title text-4xl font-semibold mb-8">携わったプロジェクト</h2>
                <div className="flex flex-wrap justify-center">
                    {projectData.map((proj, idx) => (
                        <div key={idx} className="max-w-sm m-4 bg-white bg-opacity-10 p-4 rounded-xl shadow hover:scale-105 transition">
                            <img className="w-full mb-4" src={proj.image} alt={proj.title} />
                            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                            <p>{proj.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;
