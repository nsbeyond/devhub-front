import { React } from 'react';
import Link from 'next/link'
import Button from '../components/Button';
import { useRouter } from 'next/router'
import { io } from "socket.io-client";

const Home = () => {
  const router = useRouter()
  const socket = io('http://localhost:5000');
  
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  
  return (
    <div>
      <Link href={`/auth`}>
        <Button
          fontSize={18}
          fontWeight="bold"
          bgColor="#fff"
          color="#000"
          hoverBgColor="#fff"
          hoverColor="#048df9"
          borderColor="#048df9"
        >
          Primary
        </Button>
      </Link>
      <Button
        fontSize={18}
        fontWeight="bold"
        bgColor="#ebcc24"
        color="#000"
        onClick={() => {
          alert('Please wait...')
        }}
      >
        Info
      </Button>
      <Button
        fontSize={18}
        fontWeight="bold"
        bgColor="#c92c04"
        color="#fff"
        onClick={() => {
          alert('Please wait...')
        }}
      >
        Danger
      </Button>
    </div>
  )
}

export default Home;