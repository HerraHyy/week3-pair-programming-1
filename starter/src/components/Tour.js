import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <section>
      <div>
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            img={tour.img}
            date={tour.date}
            title={tour.title}
            info={tour.info}
            location={tour.location}
            price={tour.price}
            duration={tour.duration}
          />
        ))}
      </div>
    </section>
  );
};
export default Tours;