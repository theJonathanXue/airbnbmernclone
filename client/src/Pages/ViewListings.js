import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';
import styled from 'styled-components';

const listings = [
    { location: "Brechin, Canada", lake: "Lake Simcoe", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/miso/Hosting-49563081/original/8c8fcb39-6d17-4a91-bff8-10d338066c77.jpeg?im_w=1200" },
    { location: "Innisfil, Canada", lake: "Lake Ontario", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/monet/Luxury-736940503519190941/original/8b28b5bc-ce70-43fa-a54f-2ff25823bfeb?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Erie", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/a4140371-0e56-4554-b593-4f64242d5419.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Erie", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/miso/Hosting-665067230305048526/original/7b832a56-a5d8-4554-831d-82eaede6f8a0.jpeg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Scucog", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/f3c3935b-3fc9-48d2-b575-045af0bf3f63.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Scucog", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/c3115233-fc6d-4e8a-bf51-a2f8c93a34f3.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Simcoe", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/ea5ad3e1-2148-4d04-977e-07be2d346395.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Ontario", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/miso/Hosting-50572736/original/8b81eade-cd7d-4356-a816-2fd804137e86.jpeg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Simcoe", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/miso/Hosting-691485648676762340/original/016ffeab-6a19-447d-b912-f75cc8ab2a26.jpeg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Simcoe", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/da3c5d9b-5f2c-44a3-bd87-b078173abb00.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Simcoe", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/d6f217af-1fd3-46c2-ab7c-ae35bfdf58fb.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Simcoe", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/miso/Hosting-49563081/original/8c8fcb39-6d17-4a91-bff8-10d338066c77.jpeg?im_w=1200" },
    { location: "Innisfil, Canada", lake: "Lake Ontario", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/monet/Luxury-736940503519190941/original/8b28b5bc-ce70-43fa-a54f-2ff25823bfeb?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Erie", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/a4140371-0e56-4554-b593-4f64242d5419.jpg?im_w=720" },
    { location: "Brechin, Canada", lake: "Lake Erie", date: "Jun. 1 - 6", price: "928 CAD", image: "https://a0.muscache.com/im/pictures/miso/Hosting-665067230305048526/original/7b832a56-a5d8-4554-831d-82eaede6f8a0.jpeg?im_w=720" },
];

const ViewListings = () => {
    const listingCards = listings.map((listing) => (
        <ListingCard
            location={listing.location}
            lake={listing.lake}
            date={listing.date}
            price={listing.price}
            image={listing.image}
        />
    ));

    const content = (
        <section className="public">
            <Navbar />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '20px',
                marginTop: '2rem',
                alignItems: 'center'
            }}>{listingCards}</div>

        </section>

    );
    return content;
};

export default ViewListings;