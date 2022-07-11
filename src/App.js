import logo from './logo.svg';
import './App.css';
import Product from './Product';

const product1 = {
    "image" : "https://www.amazon.com/Best-Choice-Products-Electronic-Semi-Weighted/dp/B07Z1QQJTT",
    "heading": "Nord Stage 88 Keys",
    "price": "5738",
    "company": "Nord Stage",
    "location": "France"
}

const product2 = {
  "image" : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.stompbox.in%2Fuserdata%2Fpublic%2Fgfx%2F4694.jpg&imgrefurl=https%3A%2F%2Fwww.stompbox.in%2Fin%2Fp%2FLine-6-Helix-Floor-Multi-Effects-Guitar-Processor-Incl.-1-Year-Warranty-and-Bag%2F157&tbnid=djplMcI51EQEdM&vet=12ahUKEwi374yr8fD4AhVClNgFHfgODgIQMygBegUIARDqAQ..i&docid=3L8KULgdv9nQKM&w=750&h=416&q=guitar%20processor&ved=2ahUKEwi374yr8fD4AhVClNgFHfgODgIQMygBegUIARDqAQ",
  "heading": "1831.57",
  "price": "",
  "company": "Kelli",
  "location": "Australia"
}

const product3 = {
  "image" : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61UbxycifgL._SL1200_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FNord-49-Key-Modeling-Synthesizer-NORD-LEAD%2Fdp%2FB00K0M5C5Q&tbnid=9CswQ3g4DWOwMM&vet=12ahUKEwia35e68fD4AhUMj9gFHUhAAtsQMygBegUIARDYAQ..i&docid=odOeXNkORsChQM&w=1200&h=352&q=nord%20lead%20a1&ved=2ahUKEwia35e68fD4AhUMj9gFHUhAAtsQMygBegUIARDYAQ",
  "heading": "Nord Lead A1",
  "price": "1700",
  "company": "Nord Lead",
  "location": "Dullwich Hill, Australia"
}

const product4 = {
  "image" : "https://www.sweetwater.com/store/detail/Sub37--moog-subsequent-37-analog-synthesizer",
  "heading": "Moog Subsequent 37",
  "price": "1700",
  "company": "Moog",
  "location": "Boom, Belgium"
}

const product5 = {
  "image" : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdt7v1i9vyp3mf.cloudfront.net%2Fstyles%2Fnews_preview%2Fs3%2Fimagelibrary%2FM%2FMoogMinitaur_01-6iOu9_TuWWNXeFPnz82yZkzGo2QlkkAs.jpg&imgrefurl=https%3A%2F%2Fwww.soundonsound.com%2Freviews%2Fmoog-minitaur&tbnid=jpw1UpiMTRtvWM&vet=12ahUKEwjDhtXR8fD4AhUOrmMGHeR1BUMQMygCegUIARDAAQ..i&docid=sO7QZXjpBGMdAM&w=300&h=200&q=moog%20minitaur%202010&ved=2ahUKEwjDhtXR8fD4AhUOrmMGHeR1BUMQMygCegUIARDAAQ",
  "heading": "Moog Minitaur 2010",
  "price": "688.6",
  "company": "Moog",
  "location": "USA"
}

function App() {
  return (
    <div>
      <Product name={product1.heading} image={product1.image} price={product1.price} company={product1.company} location={product1.location}/>
      <Product name={product2.heading} image={product2.image} price={product2.price} company={product2.company} location={product2.location}/>
      <Product name={product3.heading} image={product3.image} price={product3.price} company={product3.company} location={product3.location}/>
      <Product name={product4.heading} image={product4.image} price={product4.price} company={product4.company} location={product4.location}/>
      <Product name={product5.heading} image={product5.image} price={product5.price} company={product5.company} location={product5.location}/>
    </div>
  );
}

export default App;
