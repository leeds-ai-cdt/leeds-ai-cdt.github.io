---
layout: post
title: LIDA Health Technical Challenges in AI for EHRs and Wearables
tags:
- Conferences
---

## LIDA Health Technical Challenges in AI for EHRs and Wearables: Insights from Eiman Kanjo, Max Little, and David Wong

On Friday, 5th July, researchers and enthusiasts in the health technology sector gathered for a series of talks by experts in the field. The event featured presentations by Eiman Kanjo from Nottingham Trent University, Max Little from the University of Birmingham, and David Wong from the University of Leeds. Each speaker shared their unique insights and research, offering a glimpse into the future of health technology.

### Eiman Kanjo: Revolutionising Healthcare with TinyML and Microprocessors

Eiman Kanjo's talk focused on the potential of TinyML (Tiny Machine Learning) in healthcare. Eiman highlighted the importance of social prescribing, which involves assigning physical and exercise targets to patients to manage long-term conditions and mental health issues. This approach empowers patients to take an active role in their health.

Eiman also discussed the innovative use of distributed microprocessors in hospitals. Instead of relying on a single, large machine, these microprocessors can be dispersed throughout the facility, enhancing efficiency and reliability. The integration of Tensor Processing Units (TPUs) in microcontrollers allows for personalised models based on wearable data, enabling more precise healthcare solutions.

To optimise these models, Eiman highlighted techniques such as sparsification through layer and neuron pruning, which reduces model size by focusing only on the most contributive components. Quantisation, another key technique, involves converting model weights and activations to binary values or reducing their size e.g. from float32 to float8, significantly reducing the model size while maintaining accuracy. Additionally, Eiman spoke about training a large model to teach a smaller one using dual loss functions, which can enhance the performance of smaller, more efficient models.

Eiman also introduced tools like fidgeting devices, which can help understand the emotions of individuals who struggle to express their feelings verbally. These tools can provide valuable insights into patient emotions, offering a more comprehensive understanding of their mental health.

### Max Little: Unravelling Complexity with String Diagrams

Max Little's presentation focused on the use of string diagrams for graphical process modelling. He explored various types of graphic models, including Directed Acyclic Graphs (DAGs), neural networks, factor graphs, directed hypergraphs, Petri nets, data flow graphs, and conditional DAGs. Each model has its strengths and limitations, particularly regarding ambiguous notation and the difficulty of distinguishing between serial and parallel processes.

String diagrams may offer a solution to these challenges. These diagrams can replace multiple graphical models, providing a more intuitive and flexible way to represent complex processes. Max explained how string diagrams work: variable labels are depicted as wires, process labels as boxes, vertical alignment indicates sequential processes, and horizontal alignment indicates parallel processes. Operations such as copying, swapping, and deletion are visually represented, making the diagrams highly versatile.

Furthermore, string diagrams adhere to algebraic laws, allowing for formal proofs and greater mathematical rigour in process modelling. Max's insights into string diagrams demonstrate their potential to simplify and enhance the understanding of complex health technology systems.

### David Wong: Advancing Movement Disorder Assessments with Smart Technology

David Wong's talk addressed the assessment of movement disorders, such as Parkinson's disease. Traditionally, these assessments are subjective, relying heavily on clinical experience and a series of 50 questions to evaluate motor and non-motor symptoms. One common test involves measuring bradykinesia, the slowness of voluntary movement, by asking patients to tap their thumb and finger as quickly and largely as possible.

Wong pointed out the limitations of current methods, such as the availability and impact of sensors on natural movement. His proposed solution leverages the ubiquity of smartphones, utilising their cameras and sensors for contactless monitoring. For example, video cameras can measure heart rate and breathing rate, while LiDAR sensors can accurately measure tremor amplitude.

By comparing data from computer vision techniques with accelerometer data, Wong's approach offers a more comprehensive and objective assessment of movement disorders. This technology can facilitate remote consultations, home monitoring, and the classification of disease severity, ultimately improving patient care and accessibility.

### Conclusion

The event showcased the innovative strides being made in health technology. From Eiman Kanjo's work on TinyML and distributed microprocessors to Max Little's development of string diagrams for process modelling, and David Wong's advancements in movement disorder assessments using smartphone technology, each presentation highlighted the potential of these approaches. As these technologies continue to evolve, they promise to revolutionise healthcare, making it more personalised, efficient, and accessible.


---

*Blog written by: Zoe Hancox*