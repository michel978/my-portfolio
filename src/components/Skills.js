import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart } from 'chart.js';

const Skills = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HTML', 'CSS', 'Javascript', 'Express', 'Node.js', 'Java', 'Spring', 'VB.net', 'ASP.net', 'SSMS', 'OracleDB', 'Github', 'TFS', 'AWS'],
                datasets: [{
                    label: '習熟度 (1～5)',
                    data: [2, 2, 2, 1, 1, 2, 2, 3, 1, 3, 2, 2, 3, 2],
                    backgroundColor: 'rgba(99,102,241,0.5)',
                    borderColor: 'rgba(99,102,241,1)',
                    borderWidth: 2,
                    borderRadius: 5
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        min: 0,
                        max: 5,
                        title: {
                            display: true,
                            text: '習熟度',
                            color: '#374151',
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                responsive: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0,0,0,0.7)'
                    }
                },
                animation: {
                    duration: 1000
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
    }, []);

    return (
        <motion.section
            className="min-h-screen flex items-center justify-center bg-white py-16 px-6 w-full max-w-screen-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center flex flex-col justify-center items-center h-full">
                <h2 className="section-title text-4xl font-semibold mb-8">My Skill Set</h2>
                <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
                    <canvas ref={chartRef} id="skillChart"></canvas>
                </div>
            </div>
        </motion.section>
    );
}

export default Skills;
