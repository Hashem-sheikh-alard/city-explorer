* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  background: #e8edf5;
  color: #1c2b4a;
  line-height: 1.7;
}
header { background:#081a3a; padding:8px; position: sticky; top:0; z-index: 1000; }
ul { list-style:none; }
a { text-decoration:none; }

nav {
  max-width: 1150px;
  margin:  0 auto;
  gap: 20px;
  display: flex;
  justify-content: space-between;
}

.logo {
  color: #081a3a;
  font-size: 24px;
  font-weight: bold;
  display: block;
  border: 2px solid white;
  border-radius: 20px;
  padding: 6px 24px;
}

nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
    flex-wrap: wrap;
  gap: 20px;
  margin-left:375px;
}

nav a {
  color: #081a3a;
  padding: 12px 24px;
  border: 1px white solid;
  background: white;
  border-radius: 20px;
}

nav a:hover {
  background: transparent;
  color: white;
  transition: 0.3s ease;
}

.team-wrap {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
  display:block;
  gap: 4rem;
  align-items:center;
}

.team_info {
  flex: 1;
}
.team_info h2{
  text-align: center;
}

.team_info h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  position:relative;
  padding-bottom: 0.75rem;
}



.contact_info {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.contact_info > div {
display:flex;
flex-direction: column;
text-align: center;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: whitesmoke;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  transition: background 0.2s;
  margin:auto;
transition: transform 0.3s ease;}

.contact_info > div:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: translateY(-15px);
}

.contact_info img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* ── CONTACT FORM ── */
.contact_form {
  flex: 1.2;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact-form label {
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.8;
  margin-top: 0.6rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: #000000;
  font-size: 0.9rem;
  transition: border-color 0.2s, background 0.2s;
  outline: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(0, 0, 0, 0.70);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
}

.contact-form textarea {
  resize: vertical;
  min-height: 130px;
}

.error {
  color: #f87171;
  font-size: 0.75rem;
  min-height: 1rem;
  display: block;
}
fieldset{
   border: 1px solid rgba(26, 50, 96, 0.2);
  border-radius: 12px;
  padding: 25px 20px;
  margin-top: 120px;
  margin-bottom: 25px;
  background: #f8fafc;
}
fieldset h3{
  text-align: center;
}
.contact-form button[type="submit"] {
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  background-color: #ffffff;
  color: #1a2233;
  border: none;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  align-self: flex-start;
}

.contact-form button[type="submit"]:hover {
  background-color: #e2e8f0;
  transform: translateY(-1px);
}

#successMessage {
  font-size: 0.88rem;
  color: #86efac;
  min-height: 1.2rem;
  margin-top: 0.5rem;
}

footer {
  background: #081a3a;
  color: white;
  text-align: center;
  padding: 25px 20px;
  margin-top: 40px;
}

footer p {
  font-size: 16px;
}

footer h3 {
  font-size: 30px;
}
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    text-align: center;
  }

  nav ul {
    justify-content: center;
    gap: 10px;
  }

  nav a {
    padding: 10px 16px;
  }

  .logo {
    margin-bottom: 10px;
  }
  

  .team-wrap {
    flex-direction: column;
    padding: 2.5rem 1.5rem;
    gap: 3rem;
  }

  .contact-form button[type="submit"] {
    align-self: stretch;
    text-align: center;
  }

}