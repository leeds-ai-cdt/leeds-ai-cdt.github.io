---
layout: publication
title: Deep learning for real-time multi-class segmentation of artefacts in lung ultrasound - Lewis Howell 2024
tags:
- Journal_Publication
---

Monitoring lung health is crucial to manage conditions such as COVID-19 and pneumonia. Currently this is done mostly using X-ray or computer tomography (CT) imaging, but lung ultrasound (LUS) could be a useful alternative. Unlike X-ray or CT scans, ultrasound does not use harmful radiation and can be done nearly anywhere.
However, LUS images are difficult for doctors to read and understanding them takes experience. This is because, unlike X-rays, ultrasound cannot pass through the air in your lungs, so it is impossible to image them directly. Instead, doctors look at the way the ultrasound bounces off them, which shows up on LUS images as horizontal reflections, called ‘A-lines’, and blurry spotlight-like projections, called ‘B-lines’. 

<table>
  <tr>
    <th><img src="/images/Lewis_Howell_TOC_fig.png" style="max-width: 95%;" /></th>
  </tr>
</table>

We built an artificial intelligence (AI) system which can detect A-lines, B-lines, and other features in LUS images of a realistic lung model. The AI can draw around these features, allowing doctors to interpret ultrasound images easier and faster. We can also use AI to measure the amount of B-lines in the lung, creating a new metric called the B-Line Artefact Score (BLAS), which may be linked to disease severity. 
Our AI system is accurate, with 74% similarity between LUS images labelled by the AI and by doctors. It is also fast enough to work on live video from ultrasound machines, potentially helping the doctor assess the patient at the bedside. 

<video width="640" height="480" controls>
  <source src="/images/Lewis_Howell_live_us_segmentation.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 

Adding AI to ultrasound machines could help train new doctors in LUS interpretation. It could also allow doctors to more easily recognise signs of lung diseases and monitor lung health automatically over time. This would mean LUS could be made available to more patients, offering a fast, safe, and effective option for monitoring lung health. This is especially useful in low-income countries and rural areas, where ultrasound is more cost-effective than CT. 

Read the full paper [here](https://www.sciencedirect.com/science/article/pii/S0041624X24000131).
