export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-600">
          OZ코딩스쿨
        </h2>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li className="cursor-pointer hover:text-blue-500">
            로그인
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            회원가입
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            내클래스
          </li>
        </ul>
      </div>
    </header>
  );
}
/* 상단 네비게이션 바 */