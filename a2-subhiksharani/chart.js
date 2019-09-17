var svg = document.getElementById("chart");
svg.setAttribute("width", "400");
svg.setAttribute("height", "600");
svg.setAttribute("viewBox","0 0 210 297")

function drawCircle(cx, cy, r, fill)
{
    var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle.setAttributeNS(null,"cx",cx);
    circle.setAttributeNS(null,"cy",cy);
    circle.setAttributeNS(null,"r",r);
    circle.setAttributeNS(null,"fill",fill);
    svg.appendChild(circle);
}

function drawEllipse(cx, cy, rx, ry, fill)
{
    var ellipse = document.createElementNS("http://www.w3.org/2000/svg","ellipse");
    ellipse.setAttributeNS(null,"cx",cx);
    ellipse.setAttributeNS(null,"cy",cy);
    ellipse.setAttributeNS(null,"rx",rx);
    ellipse.setAttributeNS(null,"ry",ry);
    ellipse.setAttributeNS(null,"fill",fill);
    svg.appendChild(ellipse);
}

function writeText(x, y, fill, size, val)
{
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttributeNS(null,"x",x);
    text.setAttributeNS(null,"y",y);
    text.setAttributeNS(null,"fill",fill);
    text.setAttributeNS(null,"font-size",size);
    text.setAttributeNS(null,"font-family","Calibri");
    text.innerHTML = val;
    svg.appendChild(text);
}



drawCircle(62.091198,84.244186,24.237722,"#ffdd55");
writeText(49.017944,82.538948,"#000000", 9,"France");
writeText(50.514877,91.491066,"#000000", 8,"22.698");

drawEllipse(171.10434,35.307095,23.954241,24.001488,"#ffdd55");
writeText(155.51518,27.502974,"#000000", 9,"Northern");
writeText(155.51518,37.204361,"#000000", 9,"America");
writeText(159.65118,46.581818,"#000000", 8,"22.539");

drawEllipse(167.89291,125.41391,36.866207,37.146839,"#d4aa00");
writeText(155.31909,123.53525,"#000000", 9,"Egypt");
writeText(155.56422,134.58463,"#000000", 8,"48.983");

drawEllipse(73.695717,148.10634,36.866207,37.146839,"#d4aa00");
writeText(62.336014,146.51158,"#000000", 9,"India");
writeText(61.149002,157.99969,"#000000", 8,"41.413");

drawEllipse(42.838829,29.599337,27.880613,28.012617,"#ffcc00");
writeText(25.754959,28.288465,"#000000", 9,"Bahamas");
writeText(31.068003,38.352524,"#000000", 8,"27.897");

drawEllipse(116.11529,46.97916,29.236853,29.599871,"#ffcc00");
writeText(96.308853,47.430958,"#000000", 9,"Costa Rica");
writeText(104.02686,56.402523,"#000000", 8,"31.361");

drawEllipse(42.353344,218.94803,22.834557,21.618481,"#ffe680");
writeText(29.218573,217.08878,"#000000", 9,"Croatia");
writeText(29.777023,226.19492,"#000000", 8,"19.286");

drawEllipse(181.73439,218.76094,22.647469,20.870127,"#ffe680");
writeText(171.67822,217.19963,"#000000", 9,"Japan");
writeText(171.09352,227.93669,"#000000", 8,"18.406");

drawEllipse(135.51093,188.02608,20.776581,19.934683,"#ffeeaa");
writeText(118.60504,186.46477,"#000000", 9,"Germany");
writeText(124.13427,197.06706,"#000000", 8,"17.727");

drawEllipse(97.094475,239.78429,25.360189,24.799051,"#ffe680");
writeText(75.689095,238.91359,"#000000", 9,"Netherlands");
writeText(86.177673,246.92303,"#000000", 8,"20.213");









