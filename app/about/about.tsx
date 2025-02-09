import React from 'react';

export default function AboutPage() {
  return (
    <div className="h-screen bg-gray-100">
      <main className="mt-24 container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-cont-primary mb-6">Siapa Kami?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SeminarKu adalah platform terkemuka yang menyediakan akses ke berbagai seminar dan acara edukatif. Kami berkomitmen untuk memberikan pengalaman belajar yang berkualitas dan inspiratif bagi semua peserta. Dengan pembicara yang ahli di bidangnya, kami memastikan setiap seminar memberikan nilai tambah bagi peserta.
          </p>

          <h3 className="text-2xl font-semibold text-cont-primary mb-4">Visi dan Misi</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Visi:</strong> Menjadi platform seminar online terbaik di Indonesia yang menghubungkan pembicara ahli dengan peserta yang haus akan pengetahuan.
            <br />
            <strong>Misi:</strong> Menyediakan seminar berkualitas tinggi dengan topik yang relevan dan pembicara yang kompeten, serta memastikan akses yang mudah dan terjangkau bagi semua kalangan.
          </p>

          <h3 className="text-2xl font-semibold text-cont-primary mb-4">Tim Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-sm text-gray-600">Head of Operations</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww0"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Emily Brown</h4>
              <p className="text-sm text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </main>



      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2023 SeminarKu. All rights reserved.</p>
          <p className="text-sm mt-2">Contact us: info@seminarku.com</p>
        </div>
      </footer> */}
    </div>
  );
}