import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

export const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => setModalOpen(false);

    const clickOutside = (ref, onClose) => {
        const statusChange = (e) => {
            if (!ref.current.contains(e.target)){
                setModalOpen(modalOpen)
                onClose();
            }
        }
        document.addEventListener('click', statusChange)
        return function cleanup() {
            document.removeEventListener('click', statusChange)
        }
    }

    const Button = () => {    
        return (
          <button className="close" onClick={() => setModalOpen(false)}>x</button>
        )
      }

      const AboutModal = ({ title, onClose }) => {
        const modalRef = useRef(null);
  
        useEffect(() => clickOutside(modalRef, onClose))
  
          return (
              <div className="overlay">
                <div className="about-modal">
                    <div className="modal-guts">
                        <h1 id="about-h1">{title}</h1>
                        <div className="content" ref={modalRef}>
                            <AboutSection />
                        </div>
                    </div>
                </div>
              </div>
            );
        } 

    const AboutSection = () => {
        return (
            <div className="about" closetimeoutms={2000}>
            <p>Affogato vice dreamcatcher, whatever yuccie gluten-free slow-carb roof party crucifix before they sold out pabst kogi. Vaporware post-ironic swag sriracha, etsy migas chartreuse ethical umami austin. Shoreditch af jianbing mumblecore neutra twee cray. Palo santo locavore hell of, cronut hella man braid shabby chic cliche kickstarter. Fixie letterpress bushwick, before they sold out vice kitsch locavore kogi health goth try-hard enamel pin mixtape hella succulents.</p>
                <div className="register-link">
                    <Link to="/register" className="register-link">
                    </Link>
                </div>
                <Button />
            </div>
       )
    };

    return (
        <div className='about'>
            <button className="about-button" id="about-button" onClick={() => setModalOpen('about')}>Learn More</button>
            {modalOpen && (
                <AboutModal
                    show={modalOpen === 'about'}
                    toggleModal={setModalOpen}
                    title="About the App"
                    onClose={onClose}
                />
            )}
        </div>
    );
}

export default About;