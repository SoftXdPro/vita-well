import React, { useState } from 'react';
import './SymptomSearch.css';
import SymptomInfo from '../symptomInfo/SymptomInfo';

const defaultSymptoms = [
    {
        id: 1,
        name: 'Fever',
        description: 'Fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body.',
        causes: 'Fever occurs when your body is trying to fight off an infection or illness. It is often the body’s natural response to an infection caused by a virus or bacteria.',
        management: 'To manage a fever, it is important to stay hydrated, get plenty of rest, and take over-the-counter fever-reducing medications such as acetaminophen or ibuprofen.',
        resources: [
            { title: 'Centers for Disease Control and Prevention (CDC) - Fever Information', url: 'https://www.cdc.gov/healthywater/emergency/creating-disinfectants.html' },
            { title: 'Mayo Clinic - Fever Treatment and Prevention', url: 'https://www.mayoclinic.org/diseases-conditions/fever/diagnosis-treatment/drc-20352728' }
        ],
        medicines: [
            { name: 'Paracetamol', url: 'https://www.example.com/paracetamol' },
            { name: 'Ibuprofen', url: 'https://www.example.com/ibuprofen' },
            // Add more medicines as needed
        ]
    },
    {
        id: 2,
        name: 'Cough',
        description: 'A cough is a common reflex action that clears the throat of mucus or foreign irritants. Coughing to clear the throat is typically an infrequent action, although a number of conditions can cause more frequent bouts of coughing.',
        causes: 'Common causes of coughing are viral infections, such as colds and flu, along with allergies, asthma, and acid reflux.',
        management: 'Treatment for a cough often depends on the underlying cause. It may involve over-the-counter medications, home remedies, or prescription drugs.',
        resources: [
            { title: 'Mayo Clinic - Cough Overview', url: 'https://www.mayoclinic.org/symptoms/cough/basics/definition/sym-20050846' },
            { title: 'American Academy of Allergy, Asthma & Immunology - Cough Information', url: 'https://www.aaaai.org/conditions-and-treatments/allergies/cough' }
        ],
        medicines: [
            { name: 'Cough Syrup', url: 'https://www.example.com/cough-syrup' },
            { name: 'Honey and Lemon', url: 'https://www.example.com/honey-lemon' },
            // Add more medicines as needed
        ]
    },

    {
        id: 3,
        name: 'Headache',
        description: 'A headache is pain or discomfort in the head, scalp, or neck. It can vary in intensity and duration, and it may be accompanied by other symptoms such as nausea or sensitivity to light.',
        causes: 'Common causes of headaches include tension, stress, dehydration, sinus congestion, and eyestrain. More serious causes can include migraines, infections, or underlying health conditions.',
        management: 'Treatment for headaches depends on the underlying cause. It may include over-the-counter pain relievers, prescription medications, lifestyle changes, or relaxation techniques.',
        resources: [
            { title: 'Mayo Clinic - Headache Overview', url: 'https://www.mayoclinic.org/symptoms/headache/basics/definition/sym-20050800' },
            { title: 'National Institute of Neurological Disorders and Stroke - Headache Information', url: 'https://www.ninds.nih.gov/Disorders/All-Disorders/Headache-Information-Page' }
        ],
        medicines: [
            { name: 'Aspirin', url: 'https://www.example.com/aspirin' },
            { name: 'Acetaminophen', url: 'https://www.example.com/acetaminophen' },
            // Add more medicines as needed
        ]
    },
    {
        id: 4,
        name: 'Fatigue',
        description: 'Fatigue is a feeling of extreme tiredness or lack of energy. It can be acute (short-term) or chronic (long-term), and it can interfere with daily activities and productivity.',
        causes: 'Causes of fatigue can include lack of sleep, stress, poor nutrition, physical exertion, medical conditions such as anemia or thyroid disorders, and certain medications.',
        management: 'Managing fatigue involves identifying and addressing the underlying cause. This may include improving sleep habits, reducing stress, exercising regularly, and seeking medical treatment for underlying health conditions.',
        resources: [
            { title: 'Mayo Clinic - Fatigue Overview', url: 'https://www.mayoclinic.org/symptoms/fatigue/basics/definition/sym-20050894' },
            { title: 'Centers for Disease Control and Prevention (CDC) - Fatigue Information', url: 'https://www.cdc.gov/cfs/pdf/cfs-toolkit.pdf' }
        ],
        medicines: [
            { name: 'Caffeine', url: 'https://www.example.com/caffeine' },
            { name: 'Vitamin B12 Supplements', url: 'https://www.example.com/vitamin-b12' },
            // Add more medicines as needed
        ]
    },
    {
        id: 5,
        name: 'Nausea',
        description: 'Nausea is a sensation of discomfort in the stomach that often leads to the urge to vomit. It can be caused by a variety of factors, including illness, motion sickness, pregnancy, or certain medications.',
        causes: 'Common causes of nausea include viral infections, food poisoning, migraines, chemotherapy, and pregnancy. It can also be a side effect of medications or a symptom of underlying medical conditions.',
        management: 'Managing nausea may involve avoiding triggers, such as certain foods or smells, staying hydrated, resting, and taking over-the-counter or prescription medications as directed.',
        resources: [
            { title: 'Mayo Clinic - Nausea Overview', url: 'https://www.mayoclinic.org/symptoms/nausea/basics/definition/sym-20050736' },
            { title: 'National Institute of Diabetes and Digestive and Kidney Diseases - Nausea and Vomiting Information', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/nausea-vomiting-adults' }
        ],
        medicines: [
            { name: 'Ondansetron', url: 'https://www.example.com/ondansetron' },
            { name: 'Ginger Supplements', url: 'https://www.example.com/ginger' },
            // Add more medicines as needed
        ]
    },
    {
        id: 6,
        name: 'Muscle Pain',
        description: 'Muscle pain, also known as myalgia, refers to discomfort or soreness in the muscles. It can range from mild to severe and may be localized to a specific area or affect multiple muscle groups.',
        causes: 'Muscle pain can be caused by overuse, injury, tension, or underlying medical conditions such as fibromyalgia or infections. It can also be a side effect of certain medications.',
        management: 'Treatment for muscle pain may include rest, ice or heat therapy, stretching exercises, over-the-counter pain relievers (e.g., ibuprofen, acetaminophen), massage, physical therapy, or prescription medications (e.g., muscle relaxants, anti-inflammatory drugs).',
        resources: [
            { title: 'Mayo Clinic - Muscle Pain Overview', url: 'https://www.mayoclinic.org/symptoms/muscle-pain/basics/definition/sym-20050866' },
            { title: 'American Academy of Orthopaedic Surgeons - Muscle Pain Information', url: 'https://orthoinfo.aaos.org/en/diseases--conditions/muscle-pain/' }
        ],
        medicines: [
            { name: 'Ibuprofen', url: 'https://www.example.com/ibuprofen' },
            { name: 'Acetaminophen', url: 'https://www.example.com/acetaminophen' },
            { name: 'Muscle Relaxants', url: 'https://www.example.com/muscle-relaxants' },
            // Add more medications as needed
        ]
    },
    {
        id: 7,
        name: 'Sore Throat',
        description: 'A sore throat is pain, scratchiness, or irritation of the throat that often worsens when swallowing. It can be caused by viral infections, bacterial infections, allergies, or environmental factors.',
        causes: 'Common causes of sore throat include viral infections such as the common cold or flu, bacterial infections such as strep throat, allergies, dry air, smoking, or shouting or singing for extended periods.',
        management: 'Treatment for a sore throat depends on the underlying cause. It may involve rest, staying hydrated, gargling with warm salt water, using throat lozenges or sprays, and taking over-the-counter pain relievers (e.g., acetaminophen, ibuprofen, throat lozenges with benzocaine or menthol).',
        resources: [
            { title: 'Mayo Clinic - Sore Throat Overview', url: 'https://www.mayoclinic.org/diseases-conditions/sore-throat/symptoms-causes/syc-20351635' },
            { title: 'American Academy of Otolaryngology - Sore Throat Information', url: 'https://www.enthealth.org/conditions/sore-throat/' }
        ],
        medicines: [
            { name: 'Acetaminophen', url: 'https://www.example.com/acetaminophen' },
            { name: 'Ibuprofen', url: 'https://www.example.com/ibuprofen' },
            { name: 'Throat Lozenges', url: 'https://www.example.com/throat-lozenges' },
            // Add more medications as needed
        ]
    },
    {
        id: 8,
        name: 'Shortness of Breath',
        description: 'Shortness of breath, also known as dyspnea, is a sensation of difficulty or discomfort in breathing. It can range from mild to severe and may be accompanied by other symptoms such as chest pain or wheezing.',
        causes: 'Shortness of breath can be caused by a variety of factors, including physical exertion, anxiety or panic attacks, asthma, allergies, respiratory infections, heart conditions, or lung diseases.',
        management: 'Managing shortness of breath involves identifying and addressing the underlying cause. Treatment may include medications (e.g., bronchodilators, corticosteroids), breathing exercises, lifestyle changes (e.g., avoiding triggers, quitting smoking), oxygen therapy, or medical procedures.',
        resources: [
            { title: 'Mayo Clinic - Shortness of Breath Overview', url: 'https://www.mayoclinic.org/symptoms/shortness-of-breath/basics/definition/sym-20050890' },
            { title: 'American Lung Association - Shortness of Breath Information', url: 'https://www.lung.org/lung-health-and-diseases/lung-disease-lookup/shortness-of-breath/' }
        ],
        medicines: [
            { name: 'Bronchodilators', url: 'https://www.example.com/bronchodilators' },
            { name: 'Corticosteroids', url: 'https://www.example.com/corticosteroids' },
            // Add more medications as needed
        ]
    },
    {
        id: 9,
        name: 'Abdominal Pain',
        description: 'Abdominal pain, also known as stomach pain, is discomfort or cramping in the abdomen. It can range from mild to severe and may be intermittent or constant. Abdominal pain can be caused by a variety of factors.',
        causes: 'Common causes of abdominal pain include indigestion, gas, constipation, menstrual cramps, food poisoning, infections, ulcers, or underlying medical conditions such as appendicitis or gallstones.',
        management: 'Treatment for abdominal pain depends on the underlying cause. It may involve medications (e.g., antacids, proton pump inhibitors, antibiotics), dietary changes, lifestyle modifications (e.g., stress reduction, regular exercise), or medical procedures (e.g., surgery).',
        resources: [
            { title: 'Mayo Clinic - Abdominal Pain Overview', url: 'https://www.mayoclinic.org/symptoms/abdominal-pain/basics/definition/sym-20050728' },
            { title: 'National Institute of Diabetes and Digestive and Kidney Diseases - Abdominal Pain Information', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/abdominal-pain' }
        ],
        medicines: [
            { name: 'Antacids', url: 'https://www.example.com/antacids' },
            { name: 'Proton Pump Inhibitors', url: 'https://www.example.com/proton-pump-inhibitors' },
            { name: 'Antibiotics', url: 'https://www.example.com/antibiotics' },
            // Add more medications as needed
        ]
    },
    {
        id: 10,
        name: 'Diarrhea',
        description: 'Diarrhea is loose, watery stools that occur more frequently than usual. It can be acute (short-term) or chronic (long-term) and is often accompanied by other symptoms such as abdominal cramps, bloating, or fever.',
        causes: 'Common causes of diarrhea include viral or bacterial infections, food poisoning, medications, dietary factors such as lactose intolerance, digestive disorders such as irritable bowel syndrome (IBS), or underlying medical conditions.',
        management: 'Treatment for diarrhea depends on the underlying cause and severity. It may involve staying hydrated, dietary changes (e.g., BRAT diet - bananas, rice, applesauce, toast), over-the-counter medications (e.g., loperamide, bismuth subsalicylate), or medical treatment for underlying conditions (e.g., antibiotics for bacterial infections).',
        resources: [
            { title: 'Mayo Clinic - Diarrhea Overview', url: 'https://www.mayoclinic.org/diseases-conditions/diarrhea/symptoms-causes/syc-20352241' },
            { title: 'Centers for Disease Control and Prevention (CDC) - Diarrhea Information', url: 'https://www.cdc.gov/healthywater/global/diarrhea-burden.html' }
        ],
        medicines: [
            { name: 'Loperamide', url: 'https://www.example.com/loperamide' },
            { name: 'Bismuth Subsalicylate', url: 'https://www.example.com/bismuth-subsalicylate' },
            { name: 'Antibiotics', url: 'https://www.example.com/antibiotics' },
            // Add more medications as needed
        ]
    },

];
const SymptomSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
        fetchSymptoms(event.target.value);
    };

    const fetchSymptoms = async (query) => {
        const symptomWords = query.toLowerCase().split(',').flatMap(word => word.trim().split(' '));
        if (query == '') return setResults([]);
        const filteredSymptoms = defaultSymptoms.filter(symptom =>
            symptomWords.some(symptomWord =>
                symptom.name.toLowerCase().includes(symptomWord)
            )
        );

        setResults(filteredSymptoms);
    };


    return (
        <div className="symptom-search mt-1 w-full flex flex-col items-center">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search symptoms separated by commas or spaces..."
                className="border border-gray-300 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />
            <div className="w-full mt-4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((symptom, index) => (
                    <div key={index} className="gradient rounded-md p-6 ">
                        <SymptomInfo symptom={symptom} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SymptomSearch;
