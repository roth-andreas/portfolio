import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Timeline = () => {
    // Data with precise months (1-based: 1=Jan, 10=Oct)
    const education = [
        {
            start: { year: 2015, month: 5 },
            end: { year: 2018, month: 8 },
            title: 'Bachelor (Informatik)',
            subtitle: 'TU Dortmund'
        },
        {
            start: { year: 2018, month: 9 },
            end: { year: 2021, month: 5 },
            title: 'Master (Informatik)',
            subtitle: 'TU Dortmund'
        },
        {
            start: { year: 2021, month: 7 },
            end: { year: 2025, month: 11 },
            title: 'Promotion (Lehrstuhl für KI)',
            subtitle: 'TU Dortmund',
            highlight: 'Summa cum laude'
        }
    ];

    const experience = [
        {
            start: { year: 2017, month: 3 },
            end: { year: 2018, month: 8 },
            title: 'Softwareentwickler',
            subtitle: 'Drigus GmbH'
        },
        {
            start: { year: 2018, month: 9 },
            end: { year: 2021, month: 5 },
            title: 'Softwareentwickler',
            subtitle: 'Fraunhofer ISST'
        },
        {
            start: { year: 2021, month: 7 },
            end: null, // Open end
            title: 'ML Researcher',
            subtitle: 'TU Dortmund',
            isPresent: true
        }
    ];

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
        if (!dateObj) return 'Heute';
        const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
        return `${months[dateObj.month - 1]} ${dateObj.year}`;
    };

    const renderItems = (items, trackType) => {
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
                            {formatDate(item.start)} – {item.isPresent ? 'Heute' : formatDate(item.end)}
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
                            <span className="axis-year" style={{ right: 0, position: 'absolute' }}>Heute</span>
                        </div>
                    </div>
                </div>

                {/* Ausbildung Track (Top) */}
                <div className="timeline-track top">
                    <div className="track-label-container">
                        <GraduationCap size={16} className="track-icon" />
                        <span className="track-name">Ausbildung</span>
                    </div>
                    <div className="track-items-container">
                        {renderItems(education, 'education')}
                    </div>
                </div>

                {/* Erfahrung Track (Bottom) */}
                <div className="timeline-track bottom">
                    <div className="track-label-container">
                        <Briefcase size={16} className="track-icon" />
                        <span className="track-name">Erfahrung</span>
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
