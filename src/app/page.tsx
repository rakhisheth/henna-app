import { Login } from "./containers/Login";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Login />
      </div>
    </main>
  );
};

export default Home;
// Google oauth
// Register
// Checkout - stripe
// Dashboard
// Bookings
