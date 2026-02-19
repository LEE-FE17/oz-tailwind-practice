export default function Content({ content }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={content.img}
        alt={content.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <span className="inline-block mb-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          모집중
        </span>

        <div className="text-lg font-semibold mb-2">
          {content.title}
        </div>

        <p className="text-gray-500 text-sm">
          {content.subtitle}
        </p>
      </div>
    </div>
  );
}
/* 카드 UI */