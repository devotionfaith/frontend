import CardCarousel from '@/components/CardCarousel';
import React from 'react';

const recommendedData = [
    { id: 1, title: "Kehidupan Algoritma", speaker: "Jerome Polin", location: "Jakarta 123, 14:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, title: "Machine Learning Basics", speaker: "Jane Doe", location: "Bandung, 10:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, title: "The Future of AI", speaker: "John Smith", location: "Surabaya, 15:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, title: "Quantum Computing", speaker: "Emily Brown", location: "Jakarta 456, 13:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 5, title: "Data Science for Beginners", speaker: "Alice Johnson", location: "Yogyakarta, 09:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, title: "Blockchain Technology", speaker: "Michael Lee", location: "Bali, 11:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 7, title: "Cybersecurity Essentials", speaker: "Sarah Connor", location: "Medan, 16:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 8, title: "Cloud Computing Innovations", speaker: "David Kim", location: "Makassar, 12:00 WIB", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
];

const upcomingData = [
    { id: 9, title: "Seminar Mendatang 1", speaker: "Speaker A", location: "Location A", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 10, title: "Seminar Mendatang 2", speaker: "Speaker B", location: "Location B", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 11, title: "Seminar Mendatang 3", speaker: "Speaker C", location: "Location C", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 12, title: "Seminar Mendatang 4", speaker: "Speaker D", location: "Location D", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 13, title: "Seminar Mendatang 5", speaker: "Speaker E", location: "Location E", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 14, title: "Seminar Mendatang 6", speaker: "Speaker F", location: "Location F", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 15, title: "Seminar Mendatang 7", speaker: "Speaker G", location: "Location G", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 16, title: "Seminar Mendatang 8", speaker: "Speaker H", location: "Location H", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
];

const trendingData = [
  { id: 17, title: "Trending Seminar 1", speaker: "Speaker E", location: "Location E", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 18, title: "Trending Seminar 2", speaker: "Speaker F", location: "Location F", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 19, title: "Trending Seminar 3", speaker: "Speaker G", location: "Location G", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 20, title: "Trending Seminar 4", speaker: "Speaker H", location: "Location H", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
];

const mostLikedData = [
  { id: 21, title: "Paling Disukai 1", speaker: "Speaker I", location: "Location I", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 22, title: "Paling Disukai 2", speaker: "Speaker J", location: "Location J", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 23, title: "Paling Disukai 3", speaker: "Speaker K", location: "Location K", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 24, title: "Paling Disukai 4", speaker: "Speaker L", location: "Location L", imageUrl : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D" },
];

export default function SeminarPage() {
  return (
    <div className="min-h-screen mt-20 bg-gray-100">
            <CardCarousel title="Recommended" data={recommendedData} />
            <CardCarousel title="Mendatang" data={upcomingData} />
            <CardCarousel title="Trending" data={trendingData} />
            <CardCarousel title="Paling Disuka " data={mostLikedData} />
    </div>
  );
}