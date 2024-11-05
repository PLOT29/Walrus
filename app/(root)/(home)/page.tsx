import { useMemo } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const adjustedTime = new Date(now); // Copia de `now`
  adjustedTime.setHours(adjustedTime.getHours() - 1); // Resta una hora

  const time = useMemo(() => 
    adjustedTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/New_York' // Cambia esto a tu zona horaria local si es necesario
    }), 
    [adjustedTime]
  );

  const date = useMemo(() => 
    (new Intl.DateTimeFormat('en-US', { 
      dateStyle: 'full', 
      timeZone: 'America/New_York' // Cambia esto también
    })).format(adjustedTime),
    [adjustedTime]
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Have a successful work session!
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;