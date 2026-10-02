const code = String.raw`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time
import pandas as pd

job_name, company, location, job_type, workplace, link_for_apply = [], [], [], [], [], []

service = Service("./chromedriver.exe")
driver = webdriver.Chrome(service=service)

for i in range(0, 53):
    url = f"https://wuzzuf.net/a/Accounting-Finance-Jobs-in-Egypt?start={i}&ref=browse-jobs"
    driver.get(url)
    time.sleep(3)

    job_cards = driver.find_elements(
        By.XPATH, "//div[@class='css-h2etq e1vll3u10']"
    )

    for card in job_cards:
        job_name.append(card.find_element(By.XPATH, ".//h2[@class='css-s5fwzh']").text)
        company.append(card.find_element(By.XPATH, ".//a[@class='css-ipsv7l']").text.strip("-").strip())
        location.append(card.find_element(By.XPATH, ".//span[@class='css-16x61xq']").text)
        job_type.append(card.find_element(By.XPATH, ".//span[@class='css-uc9rga eoyjyuo0']").text)
        workplace.append(card.find_element(By.XPATH, ".//span[@class='css-uofntu eoyjyuo0']").text)
        link_for_apply.append(card.find_element(By.XPATH, ".//a[@class='css-o171kl']").get_attribute("href"))

df = pd.DataFrame({
    "Job": job_name,
    "company": company,
    "location": location,
    "job_type": job_type,
    "workplace": workplace,
    "link_for_apply": link_for_apply,
})

print(df.head())`;

document.getElementById("year").textContent = new Date().getFullYear();
const reveal = new IntersectionObserver(entries => entries.forEach(e => {
  if(e.isIntersecting){e.target.classList.add("visible");reveal.unobserve(e.target)}
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>reveal.observe(x));

const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d");
let ps=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}
function init(){ps=Array.from({length:Math.min(90,Math.floor(innerWidth/15))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3}))}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of ps){p.x+=p.vx;p.y+=p.vy;if(p.x<-10||p.x>innerWidth+10)p.vx*=-1;if(p.y<-10||p.y>innerHeight+10)p.vy*=-1;ctx.fillStyle="rgba(150,175,205,.34)";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
resize();init();draw();addEventListener("resize",()=>{resize();init()});

const glow=document.querySelector(".cursor-glow");addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
const nav=document.querySelector(".nav");document.getElementById("menu").addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const dialog=document.getElementById("codeDialog");document.getElementById("codeText").textContent=code;document.getElementById("openCode").onclick=()=>dialog.showModal();document.getElementById("closeCode").onclick=()=>dialog.close();dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget,n=f.name.value.trim(),mail=f.email.value.trim(),msg=f.message.value.trim();const subject=encodeURIComponent("Portfolio contact from "+n);const body=encodeURIComponent("Name: "+n+"\nEmail: "+mail+"\n\n"+msg);location.href="mailto:youssifessamzskimelgy@gmail.com?subject="+subject+"&body="+body});