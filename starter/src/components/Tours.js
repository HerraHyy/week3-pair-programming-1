import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

const Tours = () => {
  console.log(tours)
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />
        <div className='section-center featured-center'>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
      </div>
    </section>
  );
};

export default Tours;