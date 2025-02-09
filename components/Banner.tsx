export default function Banner() {
  return (
    <div
      className="h-96 flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl font-bold bg-black bg-opacity-50 px-4 my-auto rounded-lg">
        Selamat Datang di Ticketing Seminar
      </h2>
    </div>
  );
}
