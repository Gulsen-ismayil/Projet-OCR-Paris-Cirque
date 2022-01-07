import './PerformanceList.css';


function PerformanceList(){
    return( 
         
            <section id='performance-section'>
            
            <div className='performance-box'>
                <div className="box-text">
                   <h3>Laugh</h3>
                   <p>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p>
                </div>

               <div className="box-image">
                   <img src='http://loan-truong.fr/wild_circus/img/img_clown.jpg' alt='laugh-img' />
               </div>
            </div>

            <div className='performance-box'>
                <div className="box-text">
                   <h3>Dream</h3>
                   <p>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</p>
                </div>

                <div className="box-image">
                    <img src='http://loan-truong.fr/wild_circus/img/img_trapezist.jpg' alt='dream-img' />
                </div>
            </div>

            <div className='performance-box'>
                <div className="box-text">
                   <h3>Marvel at</h3>
                   <p>Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.</p>
                </div>

                <div className="box-image">
                    <img src='http://loan-truong.fr/wild_circus/img/img_zebra.jpg' alt='marvel-img' />
                </div>
            </div>
            
        </section>

        );
   
};

export default PerformanceList;