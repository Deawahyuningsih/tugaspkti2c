const members = [
  {
    name: "Vina Suci Ramadhani",
    img: "img/img1.jpg",
    npm: "12224110",
    hobby: "Masak, Design",
    interest: "Agency",
  },
  {
    name: "Dea Wahyuningsih",
    img: "img/img2.jpg",
    npm: "10224485",
    hobby: "Eksplor Makanan",
    interest: "Bisnis",
  },
  {
    name: "Qeisya Shaina Qahar",
    img: "img/img3.jpg",
    npm: "11224631",
    hobby: "Makeup",
    interest: "Bisnis MUA",
  },
  {
    name: "Annisa Tya Ramadhanty",
    img: "img/img4.jpg",
    npm: "10224265",
    hobby: "Nyanyi",
    interest: "Bekerja didunia per-Filman",
  },
];

// Common styles
const cardStyle = `
    flex: 1 1 250px;
    max-width: 280px;
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  `;

const imgContainerStyle = "height: 250px; overflow: hidden";
const imgStyle =
  "width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;";
const contentStyle = "padding: 20px 15px";
const nameStyle = "font-size: 22px; margin-bottom: 10px; color: #222";
const dividerStyle =
  "width: 50px; height: 3px; background: linear-gradient(90deg, #ff7e5f, #feb47b); margin: 0 auto 15px;";
const infoStyle = "color: #555; font-size: 16px; margin-bottom: 8px";

// Generate cards for all members
members.forEach((member) => {
  document.write(`
      <div style="${cardStyle}" 
          onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.15)';"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)';">
        <div style="${imgContainerStyle}">
          <img src="${member.img}" alt="${member.name}" style="${imgStyle}"
              onmouseover="this.style.transform='scale(1.05)';"
              onmouseout="this.style.transform='scale(1)';" />
        </div>
        <div style="${contentStyle}">
          <h3 style="${nameStyle}">${member.name}</h3>
          <div style="${dividerStyle}"></div>
          <p style="${infoStyle}"><strong>NPM:</strong> ${member.npm}</p>
          <p style="${infoStyle}"><strong>Hobi:</strong> ${member.hobby}</p>
          <p style="${infoStyle.replace(
            "margin-bottom: 8px",
            ""
          )}"><strong>Minat:</strong> ${member.interest}</p>
        </div>
      </div>
    `);
});
