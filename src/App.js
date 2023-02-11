import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[31.25rem] h-fit bg-white rounded-md mt-10'>
          <Navbar />
          <Hero />
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
