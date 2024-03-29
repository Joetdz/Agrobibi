import { GrLocation } from 'react-icons/gr';
function EventCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
      <a href="#">
        <img
          className="rounded-t-lg p-8"
          src="/agrobibi/event.png"
          alt="product image"
        />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-[#189643]text-white text-xl font-semibold tracking-tight">
            Formation en agro-industrie
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">17 mai 2023</div>
        <div className="flex items-center justify-between">
          <span className="justify-betweenspace-x-8 flex  flex-row text-xs font-bold text-gray-900">
            <GrLocation /> <h1>Kinshasa</h1>
          </span>
          <button className="rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]">
            {' '}
            S&lsquo;inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
