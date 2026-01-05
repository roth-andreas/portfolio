import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

const Research = () => {
    const allPubs = [
        {
            year: '2025',
            title: 'What Can We Learn From MIMO Graph Convolutions?',
            authors: 'Andreas Roth and Thomas Liebig',
            venue: 'International Joint Conference on Artificial Intelligence (IJCAI 2025)',
            link: 'https://arxiv.org/abs/2505.11346'
        },
        {
            year: '2025',
            title: 'Expressive Pooling for Graph Neural Networks',
            authors: 'Veronica Lachi, Alice Moallemy-Oureh, Andreas Roth and Pascal Welke',
            venue: 'Transactions on Machine Learning Research (TMLR)',
            link: 'https://openreview.net/forum?id=xGADInGWMt'
        },
        {
            year: '2024',
            title: 'Preventing representational rank collapse in mpnns by splitting the computational graph',
            authors: 'Andreas Roth, Franka Bause, Nils M. Kriege and Thomas Liebig',
            venue: 'Learning on Graphs Conference (LoG 2024)',
            link: 'https://proceedings.mlr.press/v231/roth24a.html'
        },
        {
            year: '2024',
            title: 'Simplifying the Theory on Over-Smoothing',
            authors: 'Andreas Roth',
            venue: 'Lernen, Wissen, Daten, Analysen (LWDA 2024)',
            link: 'https://arxiv.org/abs/2407.11876'
        },
        {
            year: '2023',
            title: 'Rank Collapse Causes Over-Smoothing and Over-Correlation in Graph Neural Networks',
            authors: 'Andreas Roth and Thomas Liebig',
            venue: 'Learning on Graphs Conference (LoG 2023)',
            link: 'https://proceedings.mlr.press/v231/roth24a.html'
        },
        {
            year: '2023',
            title: 'Distilling Influences to Mitigate Prediction Churn in Graph Neural Networks',
            authors: 'Andreas Roth and Thomas Liebig',
            venue: 'Asian Conference on Machine Learning (ACML 2023)',
            link: 'https://proceedings.mlr.press/v222/roth24a.html'
        },
        {
            year: '2023',
            title: 'Curvature-based Pooling within Graph Neural Networks',
            authors: 'Cedric Sanders, Andreas Roth and Thomas Liebig',
            venue: 'Workshop on Mining and Learning with Graphs at ECML PKDD (MLG at ECML PKDD 2023)',
            link: 'https://arxiv.org/abs/2308.16516'
        },
        {
            year: '2022',
            title: 'Transforming PageRank into an Infinite-Depth Graph Neural Network',
            authors: 'Andreas Roth and Thomas Liebig',
            venue: 'European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML PKDD 2022 - Best Paper Award)',
            link: 'https://arxiv.org/abs/2207.00684'
        },
        {
            year: '2022',
            title: 'Forecasting Unobserved Node States with spatio-temporal Graph Neural Networks',
            authors: 'Andreas Roth and Thomas Liebig',
            venue: 'Machine Learning on Graphs Workshop at International Conference on Data Mining (MLoG at ICDM 2022)',
            link: 'https://arxiv.org/abs/2211.11596'
        },
        {
            year: '2021',
            title: 'A data-centric augmentation approach for disturbed sensor image segmentation',
            authors: 'Andreas Roth, Konstantin Wüstefeld and Frank Weichert',
            venue: 'Journal of Imaging',
            link: 'https://www.mdpi.com/2313-433X/7/10/206'
        }
    ];

    return (
        <section className="section research" id="research">
            <div className="container">
                <div className="section-header">

                    <h2 className="section-title">Veröffentlichungen</h2>
                </div>

                <div className="research-featured">
                    <motion.div
                        className="featured-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="featured-badge">Dissertation</div>
                        <h3>Towards Understanding and Avoiding Limitations of Convolutions on Graphs</h3>
                        <p className="featured-description">
                            In meiner Dissertation habe ich grundlegende Limitierungen moderner Graph Neural Networks analysiert, die ihren Einsatz in realen Anwendungen wie Empfehlungssystemen oder relationalen Daten erschweren. Aufbauend auf einer theoretischen Analyse zentraler Ursachen habe ich allgemeine Modell-Frameworks entwickelt, die diese Schwächen gezielt adressieren. Meine Arbeit verbindet fundiertes Modellverständnis mit praktikablen Prinzipien für robuste KI auf komplexen, graphstrukturierten Daten.
                        </p>
                        <div className="featured-meta">
                            <span className="meta-item">
                                <Calendar size={16} />
                                2025
                            </span>
                            <a href="https://eldorado.tu-dortmund.de/items/f448d6a5-f945-40f5-9c4c-d79958688fb8" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                                <BookOpen size={16} />
                                Arbeit ansehen
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="publications-list">
                    <h4 className="list-title">Weitere Veröffentlichungen</h4>
                    {allPubs.map((pub, index) => (
                        <motion.div
                            key={index}
                            className="publication-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="pub-year">{pub.year}</div>
                            <div className="pub-content">
                                <h5>{pub.title}</h5>
                                <p className="pub-authors">{pub.authors}</p>
                                <p className="pub-venue">{pub.venue}</p>
                            </div>
                            {pub.link && (
                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link" aria-label="Link zur Publikation">
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
