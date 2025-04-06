import React from 'react';
import { motion } from 'framer-motion';

const Final = () => {
    return (
        <motion.section
            className="min-h-screen flex items-center justify-center bg-white py-16 px-6 w-full max-w-screen-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="section-title text-4xl font-semibold mb-8 text-indigo-600">最後に</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    レコーディングエンジニアの道を挫折し、ITエンジニアとして働き出した時はどこか自分の中で諦めのようなものを感じていました。
                    しかし、IT業界のことを知り実務をこなすうちに日に日にITへの興味が強まり、遠回りになりましたが、この業界に入れて良かったと思いました。
                    そして様々なことを学ぶうちに、ユーザーの反応が直で感じられて面白いという点と、自分で作成したものが形として残るという点でモバイルアプリエンジニアまたはフロントエンジニアになりたいと強く思うようになりました。
                    現在ではJavaScriptの多数あるフレームワークやライブラリを学習しています（特にReact）。また、ReactNative等も学習しクロスプラットフォームでのモバイルアプリ開発にも挑戦したいです。
                    この新たな挑戦に向けてこれまでの経験と技術を活かし、さらに成長を目指していきます。
                </p>
            </div>
        </motion.section>
    );
}

export default Final;
