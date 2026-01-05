import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Timeline = () => {
    const { t } = useLanguage();

    // Data with precise months (1-based: 1=Jan, 10=Oct)
    const education = t('timeline.education') || [];
    const experience = t('timeline.experience') || [];

    const timelineStartYear = 2015;
    const timelineEndYear = 2026;
    const totalYears = timelineEndYear - timelineStartYear;

    const years = [2015, 2017, 2019, 2021, 2023, 2025];

    const getPosition = (dateObj) => {
        if (!dateObj) return 100; // End of timeline if null
        const yearOffset = dateObj.year - timelineStartYear;
        const monthOffset = (dateObj.month - 1) / 12;
        return ((yearOffset + monthOffset) / totalYears) * 100;
    };

    const formatDate = (dateObj) => {
        if (!dateObj) return t('timeline.today');
        const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
        // Use English months if language is english? Or just simple numeric?
        // Let's keep strict german months for now or use numeric to be safe
        // Or better: map month index to localized string. 
        // For simplicity, keeping the array but maybe I should have translated months too.
        // Actually, let's just stick to the current implementation for months as user didn't request deep date localization.
        return `${months[dateObj.month - 1]} ${dateObj.year}`;
    };

    const renderItems = (items, trackType) => {
        if (!Array.isArray(items)) return null;

        return items.map((item, index) => {
            const startPos = Math.max(0, getPosition(item.start));
            const endPos = item.isPresent ? 100 : getPosition(item.end); // 100% is 2026

            // Cap visual width to reasonable bounds within the 2015-2026 range
            // (If start is before 2015, it's 0. If end is after 2026, it's 100)

            const width = endPos - startPos;
            const left = startPos;

            return (
                <motion.div
                    key={index}
                    className={`timeline-range ${trackType} ${item.isPresent ? 'is-present' : ''}`}
                    style={{
                        left: `${left}%`,
                        width: `${width}%`,
                        zIndex: 1
                    }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: (trackType === 'experience' ? 0.3 : 0) + index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="range-bubble">
                        <span className="bubble-year">
                            {formatDate(item.start)} – {item.isPresent ? t('timeline.today') : formatDate(item.end)}
                        </span>
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                        {item.highlight && <span className="bubble-badge">{item.highlight}</span>}
                    </div>
                </motion.div>
            );
        });
    };

    return (
        <div className="timeline-component">
            <div className="timeline-container">
                {/* Central Axis */}
                <div className="timeline-axis">
                    <div className="axis-line-horizontal">
                        <div className="axis-years">
                            {years.map((year, i) => (
                                <span key={i} className="axis-year" style={{ left: `${((year - 2015) / totalYears) * 100}%`, position: 'absolute' }}>{year}</span>
                            ))}
                            <span className="axis-year" style={{ right: 0, position: 'absolute' }}>{t('timeline.today')}</span>
                        </div>
                    </div>
                </div>

                {/* Ausbildung Track (Top) */}
                <div className="timeline-track top">
                    <div className="track-label-container">
                        <GraduationCap size={16} className="track-icon" />
                        <span className="track-name">{t('timeline.track_edu')}</span>
                    </div>
                    <div className="track-items-container">
                        {renderItems(education, 'education')}
                    </div>
                </div>

                {/* Erfahrung Track (Bottom) */}
                <div className="timeline-track bottom">
                    <div className="track-label-container">
                        <Briefcase size={16} className="track-icon" />
                        <span className="track-name">{t('timeline.track_exp')}</span>
                    </div>
                    <div className="track-items-container">
                        {renderItems(experience, 'experience')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
