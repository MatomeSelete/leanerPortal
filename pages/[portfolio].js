import { useEffect, useState } from 'react';


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString() }
        }
    })

    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id );
    const data = await res.json();

    return {
        props: { ninja: data }
    }

}

const Details = ({ninja}) => {

    const [isDownloading, setDownloading] = useState(false);

  useEffect(() => {
    // Check if the code is running in the browser environment
    if (typeof window !== 'undefined') {
      function addScript(url, callback) {
        const script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
      }

      addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js', () => {
        // HTML2PDF script has loaded
      });
    }
  }, []); // Run this effect only once, similar to componentDidMount

  const handleDownload = () => {
    setDownloading(true);

    // Download logic here, use html2pdf or any other method

    // For example, if using html2pdf:
    const element = document.querySelector('body');
    if (element) {
      html2pdf(element);
    }

    // Set a timeout to reset the downloading state after a delay
    setTimeout(() => {
      setDownloading(false);
    }, 2000); // Adjust the delay as needed
  };
    
    return ( 
        <div>
            <h1>
                {ninja.name}
            </h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>

            <button onClick={handleDownload} disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Download PDF'}
      </button>
        </div>
     );
}
 
export default Details;