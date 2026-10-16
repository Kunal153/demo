import { BranchInfo } from '../types';

export const BRANCHES_DATA: BranchInfo[] = [
  {
    code: 'CSE',
    name: 'Computer Science & Engineering',
    shortDesc: 'Algorithms, systems, software engineering, databases, networks, and computing theory.',
    iconName: 'Terminal',
    accentColor: 'sky',
    gradient: 'from-sky-500/20 to-blue-600/20 border-sky-500/30 hover:border-sky-400',
    totalNotes: 420,
    popularSubjects: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management', 'Computer Networks'],
    semesters: [
      {
        semester: 1,
        subjects: [
          { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, description: 'Calculus, Linear Algebra, and Differential Equations', units: ['Unit 1: Matrices & Eigenvalues', 'Unit 2: Differential Calculus', 'Unit 3: Multiple Integrals', 'Unit 4: Vector Calculus'] },
          { code: 'CS101', name: 'Programming for Problem Solving', credits: 4, description: 'C Programming, Arrays, Pointers, Functions, File Handling', units: ['Unit 1: Introduction to Algorithms', 'Unit 2: Control Structures', 'Unit 3: Arrays & Pointers', 'Unit 4: Structures & File I/O'] },
          { code: 'PH101', name: 'Engineering Physics', credits: 3, description: 'Quantum Mechanics, Lasers, Fiber Optics, Wave Optics', units: ['Unit 1: Wave Optics', 'Unit 2: Quantum Physics', 'Unit 3: Lasers & Fiber Optics', 'Unit 4: Superconductivity'] },
          { code: 'EE101', name: 'Basic Electrical Engineering', credits: 3, description: 'DC & AC Circuits, Transformers, Electrical Machines', units: ['Unit 1: DC Circuits & Theorems', 'Unit 2: AC Circuits', 'Unit 3: Single Phase Transformers', 'Unit 4: Induction Motors'] }
        ]
      },
      {
        semester: 2,
        subjects: [
          { code: 'MA102', name: 'Engineering Mathematics II', credits: 4, description: 'Ordinary & Partial Differential Equations, Laplace Transforms', units: ['Unit 1: First Order ODE', 'Unit 2: Higher Order ODE', 'Unit 3: Laplace Transforms', 'Unit 4: Fourier Series'] },
          { code: 'CS102', name: 'Object Oriented Programming with C++', credits: 4, description: 'OOP concepts, Polymorphism, Inheritance, Templates, STL', units: ['Unit 1: Classes & Objects', 'Unit 2: Inheritance & Polymorphism', 'Unit 3: Exception Handling', 'Unit 4: STL & Generics'] },
          { code: 'CY101', name: 'Engineering Chemistry', credits: 3, description: 'Polymers, Electrochemistry, Water Treatment, Corrosion', units: ['Unit 1: Water Analysis', 'Unit 2: Electrochemistry', 'Unit 3: Polymers & Composites', 'Unit 4: Fuel Technology'] },
          { code: 'EC101', name: 'Basic Electronics Engineering', credits: 3, description: 'Semiconductor Diodes, BJT, Op-Amps, Digital Logic', units: ['Unit 1: Semiconductor Physics', 'Unit 2: Bipolar Junction Transistors', 'Unit 3: Operational Amplifiers', 'Unit 4: Number Systems & Logic Gates'] }
        ]
      },
      {
        semester: 3,
        subjects: [
          { code: 'CS201', name: 'Data Structures & Algorithms', credits: 4, description: 'Stacks, Queues, Linked Lists, Trees, Graphs, Sorting, Dynamic Programming', units: ['Unit 1: Linear Data Structures', 'Unit 2: Trees & Binary Search Trees', 'Unit 3: Graphs & Shortest Paths', 'Unit 4: Sorting, Searching & Hashing'] },
          { code: 'CS202', name: 'Discrete Mathematics', credits: 4, description: 'Set theory, Logic, Graph Theory, Combinatorics, Recurrence Relations', units: ['Unit 1: Propositional Logic', 'Unit 2: Sets, Relations & Functions', 'Unit 3: Graph Theory', 'Unit 4: Algebraic Structures'] },
          { code: 'CS203', name: 'Digital Electronics & Logic Design', credits: 3, description: 'Boolean algebra, Karnaugh maps, Combinational and Sequential circuits', units: ['Unit 1: Boolean Algebra & K-Maps', 'Unit 2: Combinational Logic Circuits', 'Unit 3: Flip-Flops & Sequential Circuits', 'Unit 4: Counters & Shift Registers'] },
          { code: 'CS204', name: 'Computer Organization & Architecture', credits: 4, description: 'Instruction set architecture, CPU datapath, Pipelining, Memory hierarchy', units: ['Unit 1: Basic Computer Organization', 'Unit 2: Central Processing Unit', 'Unit 3: Memory Hierarchy & Cache', 'Unit 4: Pipelining & Parallelism'] }
        ]
      },
      {
        semester: 4,
        subjects: [
          { code: 'CS205', name: 'Operating Systems', credits: 4, description: 'Process management, Threads, CPU scheduling, Memory management, File systems', units: ['Unit 1: Processes & Threads', 'Unit 2: CPU Scheduling & Synchronization', 'Unit 3: Deadlocks & Prevention', 'Unit 4: Virtual Memory & Page Replacement'] },
          { code: 'CS206', name: 'Design & Analysis of Algorithms', credits: 4, description: 'Asymptotic notation, Divide & conquer, Greedy method, Dynamic programming, NP-completeness', units: ['Unit 1: Asymptotic Analysis & Recurrences', 'Unit 2: Divide & Conquer, Greedy', 'Unit 3: Dynamic Programming & Backtracking', 'Unit 4: NP-Completeness & Approximation'] },
          { code: 'CS207', name: 'Database Management Systems', credits: 4, description: 'Relational model, SQL, Normalization (1NF-BCNF), Indexing, Transactions, ACID', units: ['Unit 1: Relational Data Model & ER', 'Unit 2: SQL & Relational Algebra', 'Unit 3: Functional Dependencies & Normalization', 'Unit 4: Concurrency & Transaction Management'] },
          { code: 'CS208', name: 'Theory of Computation', credits: 3, description: 'Finite automata, Regular languages, Context-free grammars, Turing machines, Decidability', units: ['Unit 1: Regular Expressions & DFA/NFA', 'Unit 2: Context-Free Grammars & PDA', 'Unit 3: Turing Machines', 'Unit 4: Decidability & Undecidability'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'CS301', name: 'Computer Networks', credits: 4, description: 'OSI 7-layer & TCP/IP stack, Routing protocols, Congestion control, Socket programming', units: ['Unit 1: Physical & Data Link Layer', 'Unit 2: Network Layer & IP Routing', 'Unit 3: Transport Layer (TCP/UDP)', 'Unit 4: Application Layer Protocols'] },
          { code: 'CS302', name: 'Software Engineering', credits: 3, description: 'Agile methodologies, SDLC, Requirement engineering, UML modeling, Testing', units: ['Unit 1: Software Development Life Cycle', 'Unit 2: Requirement Analysis & Design', 'Unit 3: Software Testing & QA', 'Unit 4: Agile & Scrum Frameworks'] },
          { code: 'CS303', name: 'Compiler Design', credits: 4, description: 'Lexical analysis, Parsing (LL/LR), Semantic analysis, Intermediate code, Code optimization', units: ['Unit 1: Lexical Analysis & Lex Tools', 'Unit 2: Syntax Analysis & Parsers', 'Unit 3: Intermediate Code Generation', 'Unit 4: Code Optimization & Target Code'] },
          { code: 'CS304', name: 'Artificial Intelligence', credits: 3, description: 'Search algorithms (A*, Minimax), Knowledge representation, Expert systems, Machine learning intro', units: ['Unit 1: Problem Solving & Search', 'Unit 2: Adversarial Search & Games', 'Unit 3: Knowledge & Logic Inference', 'Unit 4: Machine Learning Foundations'] }
        ]
      },
      {
        semester: 6,
        subjects: [
          { code: 'CS305', name: 'Cloud Computing & Distributed Systems', credits: 3, description: 'Virtualization, AWS/GCP architecture, MapReduce, Consensus algorithms', units: ['Unit 1: Distributed System Fundamentals', 'Unit 2: Cloud Infrastructure & Virtualization', 'Unit 3: Distributed Storage & Consensus', 'Unit 4: Serverless & Microservices'] },
          { code: 'CS306', name: 'Information & Cyber Security', credits: 3, description: 'Cryptography, Public key infrastructure, Network security, Vulnerability assessment', units: ['Unit 1: Cryptographic Algorithms (AES, RSA)', 'Unit 2: Hashes, Digital Signatures', 'Unit 3: Network Attacks & Firewalls', 'Unit 4: Ethical Hacking & Audits'] },
          { code: 'CS307', name: 'Web Technologies & Full Stack Dev', credits: 4, description: 'HTML5, CSS3, Modern JavaScript, React, Node.js, REST APIs', units: ['Unit 1: Frontend Fundamentals & DOM', 'Unit 2: Modern JavaScript (ES6+)', 'Unit 3: React Components & Hooks', 'Unit 4: Node.js, Express & REST'] }
        ]
      },
      {
        semester: 7,
        subjects: [
          { code: 'CS401', name: 'Machine Learning & Deep Learning', credits: 4, description: 'Supervised & unsupervised learning, CNNs, RNNs, Backpropagation, Model evaluation', units: ['Unit 1: Linear & Logistic Regression', 'Unit 2: SVM & Tree Ensembles', 'Unit 3: Neural Networks & Backprop', 'Unit 4: Deep CNNs & Optimization'] },
          { code: 'CS402', name: 'Internet of Things (IoT)', credits: 3, description: 'Sensors, Actuators, Raspberry Pi/Arduino, MQTT, CoAP, Smart applications', units: ['Unit 1: IoT Architecture & Sensors', 'Unit 2: IoT Protocols (MQTT, CoAP)', 'Unit 3: Embedded Hardware & Edge', 'Unit 4: Industrial IoT Case Studies'] }
        ]
      },
      {
        semester: 8,
        subjects: [
          { code: 'CS403', name: 'Big Data Analytics', credits: 3, description: 'Hadoop ecosystem, Apache Spark, HDFS, Stream processing, NoSQL databases', units: ['Unit 1: Big Data Overview & HDFS', 'Unit 2: MapReduce & Spark Framework', 'Unit 3: NoSQL (MongoDB, Cassandra)', 'Unit 4: Real-time Streaming'] },
          { code: 'CS404', name: 'Capstone Project & Industry Internship', credits: 8, description: 'Full-cycle engineering system design, implementation, and thesis presentation', units: ['System Architecture & Prototyping', 'Testing & Benchmarking', 'Research Paper Documentation'] }
        ]
      }
    ]
  },
  {
    code: 'ECE',
    name: 'Electronics & Communication',
    shortDesc: 'Signals, digital communications, VLSI, microcontrollers, embedded systems, and RF.',
    iconName: 'Cpu',
    accentColor: 'indigo',
    gradient: 'from-indigo-500/20 to-violet-600/20 border-indigo-500/30 hover:border-indigo-400',
    totalNotes: 310,
    popularSubjects: ['Signals & Systems', 'Digital Signal Processing', 'Microprocessors (8086/ARM)', 'VLSI Design'],
    semesters: [
      {
        semester: 1,
        subjects: [
          { code: 'MA101', name: 'Engineering Mathematics I', credits: 4, description: 'Linear Algebra, Calculus & Matrices', units: ['Unit 1: Matrix Calculus', 'Unit 2: Differential Equations'] },
          { code: 'EC101', name: 'Electronic Devices & Circuits', credits: 4, description: 'Semiconductor physics, PN diodes, Zener diodes, BJT configurations', units: ['Unit 1: Semiconductor Physics', 'Unit 2: Diode Circuits', 'Unit 3: Bipolar Transistors'] }
        ]
      },
      {
        semester: 3,
        subjects: [
          { code: 'EC201', name: 'Signals & Systems', credits: 4, description: 'Continuous & discrete time signals, LTI systems, Fourier & Laplace, Z-transform', units: ['Unit 1: Signal Classification', 'Unit 2: LTI Systems & Convolution', 'Unit 3: Fourier Analysis', 'Unit 4: Z-Transform Analysis'] },
          { code: 'EC202', name: 'Network Theory', credits: 4, description: 'Mesh & Nodal analysis, Thevenin/Norton theorems, Two-port networks', units: ['Unit 1: Circuit Theorems', 'Unit 2: Transient Analysis', 'Unit 3: Two-Port Networks'] },
          { code: 'EC203', name: 'Analog Circuits', credits: 4, description: 'Small-signal analysis, Feedback amplifiers, Oscillators, Operational Amplifiers', units: ['Unit 1: BJT & FET Amplifiers', 'Unit 2: Feedback Amplifiers', 'Unit 3: Op-Amp Applications'] }
        ]
      },
      {
        semester: 4,
        subjects: [
          { code: 'EC204', name: 'Electromagnetic Field Theory', credits: 4, description: 'Maxwell equations, Wave propagation in media, Transmission lines', units: ['Unit 1: Electrostatics', 'Unit 2: Magnetostatics', 'Unit 3: Maxwell Equations', 'Unit 4: Transmission Lines'] },
          { code: 'EC205', name: 'Analog Communication', credits: 4, description: 'AM, FM, PM modulation, Noise performance, Superheterodyne receivers', units: ['Unit 1: Amplitude Modulation', 'Unit 2: Angle Modulation (FM/PM)', 'Unit 3: Noise Analysis in Receiver'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'EC301', name: 'Digital Signal Processing (DSP)', credits: 4, description: 'DFT, FFT algorithms, FIR & IIR filter design, Quantization effects', units: ['Unit 1: Discrete Fourier Transform', 'Unit 2: Fast Fourier Transform (FFT)', 'Unit 3: IIR Filter Design', 'Unit 4: FIR Filter Design'] },
          { code: 'EC302', name: 'Microprocessors & Microcontrollers', credits: 4, description: '8086 architecture, ARM cortex, Assembly programming, Interfacing', units: ['Unit 1: 8086 Architecture', 'Unit 2: Assembly Programming', 'Unit 3: 8051 / ARM Intro', 'Unit 4: Peripheral Interfacing'] }
        ]
      },
      {
        semester: 6,
        subjects: [
          { code: 'EC303', name: 'VLSI Design & Verilog', credits: 4, description: 'CMOS logic, Layout design rules, Verilog HDL synthesis, FPGA flows', units: ['Unit 1: MOS Transistor Theory', 'Unit 2: CMOS Inverter & Gates', 'Unit 3: Verilog HDL Modeling', 'Unit 4: FPGA Design Flow'] },
          { code: 'EC304', name: 'Antenna & Wave Propagation', credits: 3, description: 'Dipole antennas, Array antennas, Microstrip patches, Radar systems', units: ['Unit 1: Antenna Fundamentals', 'Unit 2: Antenna Arrays', 'Unit 3: Aperture Antennas', 'Unit 4: Radio Wave Propagation'] }
        ]
      }
    ]
  },
  {
    code: 'MECH',
    name: 'Mechanical Engineering',
    shortDesc: 'Thermodynamics, fluid mechanics, CAD/CAM, manufacturing, heat transfer, robotics.',
    iconName: 'Wrench',
    accentColor: 'amber',
    gradient: 'from-amber-500/20 to-orange-600/20 border-amber-500/30 hover:border-amber-400',
    totalNotes: 275,
    popularSubjects: ['Engineering Thermodynamics', 'Fluid Mechanics', 'Strength of Materials', 'Theory of Machines'],
    semesters: [
      {
        semester: 3,
        subjects: [
          { code: 'ME201', name: 'Engineering Thermodynamics', credits: 4, description: 'First and Second law of thermodynamics, Carnot cycle, Entropy, Rankine cycle', units: ['Unit 1: Zeroth & First Law', 'Unit 2: Second Law & Entropy', 'Unit 3: Pure Substance Behavior', 'Unit 4: Gas Power Cycles'] },
          { code: 'ME202', name: 'Strength of Materials', credits: 4, description: 'Stress-strain diagrams, Mohr circle, Bending moment & shear force, Torsion', units: ['Unit 1: Stress & Strain', 'Unit 2: Shear Force & Bending Moments', 'Unit 3: Stresses in Beams', 'Unit 4: Torsion of Shafts'] },
          { code: 'ME203', name: 'Material Science & Metallurgy', credits: 3, description: 'Iron-carbon equilibrium diagram, Heat treatment, Crystal defects, Composites', units: ['Unit 1: Crystal Structures & Defects', 'Unit 2: Fe-C Equilibrium Diagram', 'Unit 3: Heat Treatment Processes'] }
        ]
      },
      {
        semester: 4,
        subjects: [
          { code: 'ME204', name: 'Fluid Mechanics & Machinery', credits: 4, description: 'Fluid statics, Bernoulli equation, Navier-Stokes, Turbines and Pumps', units: ['Unit 1: Fluid Statics & Buoyancy', 'Unit 2: Fluid Kinematics & Bernoulli', 'Unit 3: Laminar & Turbulent Flow', 'Unit 4: Hydraulic Turbines & Pumps'] },
          { code: 'ME205', name: 'Theory of Machines', credits: 4, description: 'Kinematic pairs, Inversions of 4-bar chain, Governors, Gyroscope, Cam profiles', units: ['Unit 1: Simple Mechanisms', 'Unit 2: Velocity & Acceleration Diagrams', 'Unit 3: Cams & Followers', 'Unit 4: Balancing & Gyroscopes'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'ME301', name: 'Heat & Mass Transfer', credits: 4, description: 'Conduction, Convection, Radiation, Heat exchangers, LMTD method', units: ['Unit 1: Fourier Conduction', 'Unit 2: Forced & Free Convection', 'Unit 3: Thermal Radiation', 'Unit 4: Heat Exchangers Design'] },
          { code: 'ME302', name: 'Design of Machine Elements', credits: 4, description: 'Failure theories, Shaft design, Gears, Bearings, Fasteners', units: ['Unit 1: Static & Dynamic Failure', 'Unit 2: Shafts, Keys & Couplings', 'Unit 3: Spur & Helical Gears', 'Unit 4: Sliding & Rolling Bearings'] }
        ]
      }
    ]
  },
  {
    code: 'CIVIL',
    name: 'Civil Engineering',
    shortDesc: 'Structural analysis, geotechnical engineering, concrete technology, hydraulics, survey.',
    iconName: 'Building',
    accentColor: 'emerald',
    gradient: 'from-emerald-500/20 to-teal-600/20 border-emerald-500/30 hover:border-emerald-400',
    totalNotes: 215,
    popularSubjects: ['Structural Analysis', 'Geotechnical Engineering', 'Concrete Technology', 'Hydrology & Water Resources'],
    semesters: [
      {
        semester: 3,
        subjects: [
          { code: 'CE201', name: 'Surveying & Geomatics', credits: 4, description: 'Levelling, Theodolite, Total Station, GIS, GPS mapping', units: ['Unit 1: Chain & Compass Survey', 'Unit 2: Levelling & Contouring', 'Unit 3: Theodolite & Total Station'] },
          { code: 'CE202', name: 'Building Materials & Construction', credits: 3, description: 'Cement, Aggregates, Bricks, Mortar, Masonry, Foundations', units: ['Unit 1: Stones, Bricks & Cement', 'Unit 2: Mortars & Concrete Mixes', 'Unit 3: Substructures & Superstructures'] }
        ]
      },
      {
        semester: 4,
        subjects: [
          { code: 'CE203', name: 'Structural Analysis I', credits: 4, description: 'Determinate structures, Trusses, Strain energy, Influence line diagrams', units: ['Unit 1: Analysis of Determinate Trusses', 'Unit 2: Slope Deflection Method', 'Unit 3: Moment Distribution Method'] },
          { code: 'CE204', name: 'Concrete Technology', credits: 3, description: 'Mix design (IS 10262), Workability, Durability, Admixtures, NDT tests', units: ['Unit 1: Concrete Ingredients', 'Unit 2: Fresh Concrete & Workability', 'Unit 3: Mix Design Methods'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'CE301', name: 'Design of Reinforced Concrete Structures (RCC)', credits: 4, description: 'Limit state method, Beams, Slabs, Columns, Footings (IS 456)', units: ['Unit 1: Limit State Philosophy', 'Unit 2: Singly & Doubly Reinforced Beams', 'Unit 3: One-way & Two-way Slabs', 'Unit 4: Axially Loaded Columns'] },
          { code: 'CE302', name: 'Geotechnical Engineering', credits: 4, description: 'Soil classification, Permeability, Compaction, Consolidation, Shear strength', units: ['Unit 1: Soil Phase Relationships', 'Unit 2: Permeability & Seepage', 'Unit 3: Consolidation & Settlement', 'Unit 4: Mohr-Coulomb Shear Strength'] }
        ]
      }
    ]
  },
  {
    code: 'EEE',
    name: 'Electrical & Electronics',
    shortDesc: 'Power systems, electrical machines, power electronics, control theory, switchgear.',
    iconName: 'Zap',
    accentColor: 'yellow',
    gradient: 'from-amber-500/20 to-yellow-600/20 border-yellow-500/30 hover:border-yellow-400',
    totalNotes: 190,
    popularSubjects: ['Control Systems', 'Electrical Machines', 'Power Systems', 'Power Electronics'],
    semesters: [
      {
        semester: 3,
        subjects: [
          { code: 'EE201', name: 'Electrical Machines I', credits: 4, description: 'DC Generators, DC Motors, Single phase & Three phase transformers', units: ['Unit 1: Electromechanical Energy Conversion', 'Unit 2: DC Machines', 'Unit 3: Single Phase Transformers', 'Unit 4: Three Phase Transformers'] },
          { code: 'EE202', name: 'Electromagnetic Field Theory', credits: 4, description: 'Coulomb law, Gauss law, Biot-Savart law, Maxwell equations', units: ['Unit 1: Coordinate Systems & Vector Calculus', 'Unit 2: Electrostatic Fields', 'Unit 3: Magnetic Fields', 'Unit 4: Time-Varying Fields'] }
        ]
      },
      {
        semester: 4,
        subjects: [
          { code: 'EE203', name: 'Control Systems', credits: 4, description: 'Transfer functions, Block diagram algebra, Routh-Hurwitz, Root Locus, Bode plot', units: ['Unit 1: Mathematical Models & Transfer Functions', 'Unit 2: Time Response Analysis', 'Unit 3: Stability & Root Locus', 'Unit 4: Frequency Domain & Bode Plots'] },
          { code: 'EE204', name: 'Electrical Machines II', credits: 4, description: 'Synchronous generators, Alternators, Induction motors, Special machines', units: ['Unit 1: Polyphase Induction Motors', 'Unit 2: Synchronous Generators', 'Unit 3: Synchronous Motors'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'EE301', name: 'Power Electronics', credits: 4, description: 'SCR, MOSFET, IGBT, Controlled rectifiers, Choppers, Inverters', units: ['Unit 1: Power Semiconductor Switches', 'Unit 2: Phase-Controlled Rectifiers', 'Unit 3: DC-DC Buck & Boost Converters', 'Unit 4: Inverters & PWM'] },
          { code: 'EE302', name: 'Power System Analysis', credits: 4, description: 'Transmission line models, Per unit system, Load flow analysis (Gauss-Seidel/NR)', units: ['Unit 1: Transmission Line Parameters', 'Unit 2: Representation of Power Systems', 'Unit 3: Symmetrical Faults', 'Unit 4: Load Flow Studies'] }
        ]
      }
    ]
  },
  {
    code: 'AIDS',
    name: 'AI & Data Science',
    shortDesc: 'Machine learning, statistics, deep neural nets, computer vision, NLP, and MLOps.',
    iconName: 'Brain',
    accentColor: 'rose',
    gradient: 'from-rose-500/20 to-pink-600/20 border-rose-500/30 hover:border-rose-400',
    totalNotes: 230,
    popularSubjects: ['Deep Learning & Neural Networks', 'Natural Language Processing', 'Statistical Foundations', 'Data Mining & Warehousing'],
    semesters: [
      {
        semester: 3,
        subjects: [
          { code: 'AD201', name: 'Applied Linear Algebra & Statistics', credits: 4, description: 'SVD, PCA, Probability distributions, Hypothesis testing, Bayes theorem', units: ['Unit 1: Matrix Decompositions (Eigen, SVD)', 'Unit 2: Probability & Random Variables', 'Unit 3: Statistical Estimation & Testing'] },
          { code: 'AD202', name: 'Python for Data Science', credits: 3, description: 'NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn pipelines', units: ['Unit 1: Numerical Computing with NumPy', 'Unit 2: Data Wrangling with Pandas', 'Unit 3: Exploratory Data Visualization'] }
        ]
      },
      {
        semester: 4,
        subjects: [
          { code: 'AD203', name: 'Machine Learning Algorithms', credits: 4, description: 'Supervised, Unsupervised, Ensemble learning, Cross-validation, Hyperparameter tuning', units: ['Unit 1: Regression & Classification', 'Unit 2: Decision Trees & Random Forests', 'Unit 3: Clustering (K-Means, DBSCAN)', 'Unit 4: Model Evaluation Metrics'] },
          { code: 'AD204', name: 'Data Warehousing & Mining', credits: 3, description: 'ETL pipelines, Association rule mining, Apriori algorithm, OLAP cubes', units: ['Unit 1: Data Preprocessing', 'Unit 2: Association Rules Mining', 'Unit 3: OLAP & Dimensional Modeling'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'AD301', name: 'Deep Learning & Neural Networks', credits: 4, description: 'Multilayer Perceptron, Convolutional Neural Networks, Recurrent Networks, Attention', units: ['Unit 1: Backpropagation & Optimization', 'Unit 2: CNN Architectures (ResNet, VGG)', 'Unit 3: Sequence Modeling & LSTM', 'Unit 4: Transformers & Attention Mechanisms'] },
          { code: 'AD302', name: 'Natural Language Processing', credits: 3, description: 'Word2Vec, Tokenization, BERT, Named entity recognition, Sentiment analysis', units: ['Unit 1: Text Preprocessing & TF-IDF', 'Unit 2: Word Embeddings (GloVe, Word2Vec)', 'Unit 3: Language Models & Transformers'] }
        ]
      }
    ]
  },
  {
    code: 'IT',
    name: 'Information Technology',
    shortDesc: 'Enterprise systems, cloud architecture, cybersecurity, mobile app development, devops.',
    iconName: 'Server',
    accentColor: 'cyan',
    gradient: 'from-cyan-500/20 to-teal-600/20 border-cyan-500/30 hover:border-cyan-400',
    totalNotes: 280,
    popularSubjects: ['Web & Mobile Applications', 'Information Security', 'Cloud Infrastructure', 'Object Oriented Analysis'],
    semesters: [
      {
        semester: 4,
        subjects: [
          { code: 'IT201', name: 'Object Oriented Software Engineering', credits: 4, description: 'Design Patterns, UML Class Diagrams, SOLID principles', units: ['Unit 1: SOLID Principles', 'Unit 2: Gang of Four Design Patterns', 'Unit 3: Component-Based Architecture'] },
          { code: 'IT202', name: 'Database Systems & SQL', credits: 4, description: 'Normalization, Query optimization, Relational algebra, Transactions', units: ['Unit 1: Relational Schema Design', 'Unit 2: Query Optimization', 'Unit 3: Distributed Databases'] }
        ]
      },
      {
        semester: 5,
        subjects: [
          { code: 'IT301', name: 'Cloud & DevOps Practices', credits: 4, description: 'Docker containerization, Kubernetes, CI/CD pipelines, AWS deployment', units: ['Unit 1: Containers & Docker', 'Unit 2: Kubernetes Orchestration', 'Unit 3: CI/CD Pipelines & Jenkins'] }
        ]
      }
    ]
  }
];

export const NOTE_CATEGORIES = [
  'Lecture Notes',
  'Handwritten Notes',
  'Question Bank (PYQ)',
  'Formula Sheet',
  'Lab Manual',
  'Solved Papers'
] as const;
