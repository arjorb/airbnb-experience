import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-[31.25rem] h-[37.5rem] bg-white rounded-md'>
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;
