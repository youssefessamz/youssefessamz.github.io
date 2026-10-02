from selenium import webdriver
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

print(df.head())