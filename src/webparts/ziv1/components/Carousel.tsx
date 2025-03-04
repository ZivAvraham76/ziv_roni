import * as React from 'react';
import Card from './Card';

interface Course {
    litmosLearningPathName: string;
    pillar: string;
    productName: string;
    litmosLearningPathUrl: string;
    PercentageComplete: number;
    levelName: string;
}

// Define the props for the CourseCarousel component
interface CarouselProps {
    courses: Course[];
    selectedFilter: string;// Currently selected filter
    selectedLevel: string;// Currently selected level
}


// Main CourseCarousel component definition
const Carousel: React.FC<CarouselProps> = ({ courses, selectedFilter, selectedLevel }) => {
    // Filter courses based on the selected filter and level
    const filteredCourses = courses.filter((course) => {
        const hasPercentage = course.PercentageComplete !== undefined && course.PercentageComplete !== null;
        const matchesFilter = selectedFilter === 'All' || course.pillar === selectedFilter;// Check if course matches the selected filter based on pillar
        const matchesLevel = selectedLevel === 'All Levels' || course.levelName === selectedLevel;// Check if course matches the selected level
        // Include course only if all conditions are true
        return hasPercentage && matchesFilter && matchesLevel;
    });
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCourses.length);
    };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredCourses.length) % courses.length);
    // };

    React.useEffect(() => {
        if (currentIndex > filteredCourses.length - 4) {
            setCurrentIndex(0);
        }
    }, [currentIndex, filteredCourses]);

    return (
        <div className='relative w-full mx-auto overflow-hidden'>
            <div
                className="flex transition-transform duration-500 ease-in-out gap-[25px]"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
                {filteredCourses.map((course, index) => (
                    <div className={`relative w-1/4 flex-shrink-0 ${index === currentIndex ? 'active' : ''}`}>
                        <Card data={course} />
                    </div>
                ))}
            </div>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 hover:bg-gray-100" onClick={handleNext}>
            <svg
              className="h-4 w-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg></button>
        </div>
    )
};
export default Carousel;