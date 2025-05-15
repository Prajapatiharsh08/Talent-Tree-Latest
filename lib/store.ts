import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define types for our job data
export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  category: string
  level: string
  salary: string
  description: string
  requirements: string[]
  skills: string[]
  benefits: string[]
  aboutCompany: string
  companyIndustry: string
  companySize: string
  posted: string
  postedDate: string
  similarJobs?: string[]
}

// Define types for testimonial data
export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
}

// Define types for client data
export interface Client {
  id: string
  name: string
  logo: string
}

// Define the store state
interface JobStoreState {
  jobs: Job[]
  testimonials: Testimonial[]
  clients: Client[]
  addJob: (job: Job) => void
  updateJob: (id: string, job: Job) => void
  deleteJob: (id: string) => void
  addTestimonial: (testimonial: Testimonial) => void
  updateTestimonial: (id: string, testimonial: Testimonial) => void
  deleteTestimonial: (id: string) => void
  addClient: (client: Client) => void
  updateClient: (id: string, client: Client) => void
  deleteClient: (id: string) => void
}

// Initial data for jobs
const initialJobs: Job[] = [
  {
    id: "Sales Manager",
    title: "Sales Manager",
    company: "ABC Corporation Pvt Ltd",
    location: "Memnagar, Ahmedabad",
    type: "Full-time",
    category: "Sales & Marketing",
    level: "Mid to Senior Level",
    salary: "Up to ₹12 LPA",
    posted: "2 days ago",
    postedDate: "2023-05-01",
    description:
      "Lead the sales team to achieve revenue targets by developing strategic sales plans and managing key client relationships. Responsible for market analysis, team motivation, and driving business growth in the region.",
    requirements: [
      "Proven experience as a Sales Manager or similar role",
      "Strong knowledge of sales strategies and CRM software",
      "Excellent communication and leadership skills",
      "Ability to work under pressure and meet deadlines",
    ],
    skills: ["Sales Management",
      "Negotiation",
      "Customer Relationship Management (CRM)",
      "Team Leadership",],
    benefits: [
      "Performance-based bonuses",
      "Health insurance",
      "Paid time off",
      "Professional development opportunities",
    ],
    aboutCompany:
      "ABC Corporation Pvt Ltd is a leading provider of consumer goods with a strong presence in Gujarat. We focus on innovation and customer satisfaction.",
    companyIndustry: "Consumer Goods",
    companySize: "500+ employees",
    similarJobs: ["frontend-developer", "backend-engineer", "fullstack-developer"],
  },
  {
    id: "Maintenance Manager",
    title: "Maintenance Manager",
    company: "XYZ Manufacturing Ltd",
    location: "Sanand Plant, Sanand",
    type: "Full-time",
    category: "Operations / Maintenance",
    level: "Mid-level",
    salary: "₹50,000 – ₹65,000 per month",
    posted: "1 week ago",
    postedDate: "2023-04-25",
    description:
      "Oversee maintenance operations for the Sanand manufacturing plant, ensuring equipment uptime, safety standards, and cost-effective repairs. Manage a team of technicians and coordinate preventive maintenance schedules.",
    requirements: [
      "Diploma or degree in Mechanical/Electrical Engineering",
      "Minimum 5 years experience in maintenance management",
      "Knowledge of plant equipment and safety regulations",
      "Strong problem-solving and organizational skills",
    ],
    skills: [
      "Preventive Maintenance",
      "Team Management",
      "Equipment Troubleshooting",
      "Safety Compliance",
    ],
    benefits: [
      "Medical insurance",
      "Provident fund",
      "Shift allowances",
      "Training and skill development",
    ],
    aboutCompany:
      "XYZ Manufacturing Ltd is a pioneer in automotive component manufacturing with a state-of-the-art facility in Sanand.",
    companyIndustry: "Manufacturing / Automotive",
    companySize: "1000+ employees",
    similarJobs: ["marketing-manager", "digital-marketing-specialist", "brand-strategist"],
  },
  {
    id: "Production Executive",
    title: "Production Executive",
    company: "XYZ Manufacturing Ltd",
    location: "Sanand",
    type: "Full-time",
    category: "Production / Operations",
    level: "Entry to Mid-level",
    salary: "₹25,000 – ₹35,000 per month",
    posted: "3 days ago",
    postedDate: "2023-04-30",
    description:
      "Coordinate and monitor production activities to meet quality and quantity targets. Ensure adherence to safety standards and process improvements.",
    requirements: [
      "Diploma in Mechanical or Production Engineering preferred",
      "1-3 years experience in production environment",
      "Knowledge of manufacturing processes",
      "Ability to work in a team and meet deadlines",
    ],
    skills: ["Production Planning", "Quality Control", "Time Management", "Reporting"],
    benefits: [
      "Health coverage",
      "Overtime pay",
      "Transportation facilities",
      "Annual leave",
    ],
    aboutCompany:
      "XYZ Manufacturing Ltd is known for its commitment to quality and innovation in automotive parts manufacturing.",
    companyIndustry: "Manufacturing",
    companySize: "1000+ employees",
    similarJobs: ["financial-manager", "investment-analyst", "corporate-finance-associate"],
  },
  {
    id: "Quality Manager",
    title: "Quality Manager",
    company: "DEF Industries",
    location: "Sanand",
    type: "Full-time",
    category: "Quality Assurance",
    level: "Senior Level",
    salary: "Up to ₹10 LPA",
    posted: "1 week ago",
    postedDate: "2023-04-25",
    description:
      "Lead the quality assurance team to maintain product standards and regulatory compliance. Develop and implement quality control systems and conduct audits.",
    requirements: [
      "Bachelor’s degree in Engineering or related field",
      "5+ years experience in quality management",
      "Strong knowledge of ISO standards and quality tools",
      "Excellent analytical and communication skills",
    ],
    skills: [
      "Quality Auditing",
      "ISO 9001",
      "Statistical Process Control (SPC)",
      "Root Cause Analysis",
    ],
    benefits: [
      "Annual bonuses",
      "Medical and dental insurance",
      "Retirement plans",
      "Professional training",
    ],
    aboutCompany:
      "DEF Industries specializes in high-quality industrial components with a focus on continuous improvement and innovation.",
    companyIndustry: "Industrial Manufacturing",
    companySize: "500+ employees",
    similarJobs: ["hr-manager", "talent-acquisition-director", "employee-experience-manager"],
  },
  {
    id: "QC (Lab Technician)",
    title: "QC (Lab Technician)",
    company: "DEF Industries",
    location: "Sanand",
    type: "Full-time",
    category: "Quality Control / Laboratory",
    level: "Entry to Mid-level",
    salary: "Up to ₹6 LPA",
    posted: "4 days ago",
    postedDate: "2023-04-29",
    description:
      "Perform laboratory tests and inspections on raw materials and finished products to ensure compliance with quality standards. Maintain lab equipment and document test results.",
    requirements: [
      "Diploma or degree in Chemistry or related field",
      "Experience in lab testing preferred",
      "Attention to detail and accuracy",
      "Knowledge of lab safety procedures",
    ],
    skills: [
      "Laboratory Testing",
      "Data Recording",
      "Sample Preparation",
      "Equipment Maintenance",
    ],
    benefits: [
      "Health insurance",
      "Paid sick leave",
      "Annual performance bonuses",
      "Training programs",
    ],
    aboutCompany:
      "DEF Industries is committed to quality and reliability in all its products and processes.",
    companyIndustry: "Industrial Manufacturing",
    companySize: "500+ employees",
    similarJobs: ["machine-learning-engineer", "data-analyst", "ai-researcher"],
  },
  {
    id: "Receptionist",
    title: "Receptionist",
    company: "GHI Services",
    location: "Nikol, Ahmedabad",
    type: "Full-time",
    category: "Administration",
    level: "Entry Level",
    salary: "Up to ₹15,000 per month",
    posted: "1 week ago",
    postedDate: "2023-04-25",
    description:
      "Manage front desk operations, greet visitors, handle phone calls, and assist with administrative tasks. Ensure a welcoming environment and support office coordination.",
    requirements: [
      "High school diploma or equivalent",
      "Good communication and interpersonal skills",
      "Basic computer knowledge",
      "Professional and friendly demeanor",
    ],
    skills: ["Customer Service", "Phone Etiquette", "Scheduling", "Office Administration"],
    benefits: [
      "Fixed working hours",
      "Paid leaves",
      "Friendly work environment",
      "Training opportunities",
    ],
    aboutCompany:
      "GHI Services is a reputed service provider in Ahmedabad, known for excellent customer support and office management.",
    companyIndustry: "Services",
    companySize: "50+ employees",
    similarJobs: ["product-owner", "ux-designer", "technical-product-manager"],
  },
]

// Initial data for testimonials
const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Enterprises",
    content:
      "Working with this recruitment agency has been transformative for our organization. They truly understand our company culture and consistently deliver exceptional talent that aligns with our values and goals.",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "COO",
    company: "Global Finance Partners",
    content:
      "Their executive search capabilities are unmatched. They found us a CFO who not only had the technical expertise we needed but also fit perfectly with our company culture. The entire process was smooth and professional.",
  },
]

// Initial data for clients
const initialClients: Client[] = [
  {
    id: "1",
    name: "TechVision",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: "2",
    name: "Global Finance",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: "3",
    name: "Innovate Corp",
    logo: "/placeholder.svg?height=60&width=120",
  },
]

// Create the store with persist middleware to save state to localStorage
export const useJobStore = create<JobStoreState>()(
  persist(
    (set) => ({
      jobs: initialJobs,
      testimonials: initialTestimonials,
      clients: initialClients,

      // Job actions
      addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
      updateJob: (id, updatedJob) =>
        set((state) => ({
          jobs: state.jobs.map((job) => (job.id === id ? updatedJob : job)),
        })),
      deleteJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),

      // Testimonial actions
      addTestimonial: (testimonial) =>
        set((state) => ({
          testimonials: [...state.testimonials, testimonial],
        })),
      updateTestimonial: (id, updatedTestimonial) =>
        set((state) => ({
          testimonials: state.testimonials.map((testimonial) =>
            testimonial.id === id ? updatedTestimonial : testimonial,
          ),
        })),
      deleteTestimonial: (id) =>
        set((state) => ({
          testimonials: state.testimonials.filter((testimonial) => testimonial.id !== id),
        })),

      // Client actions
      addClient: (client) =>
        set((state) => ({
          clients: [...state.clients, client],
        })),
      updateClient: (id, updatedClient) =>
        set((state) => ({
          clients: state.clients.map((client) => (client.id === id ? updatedClient : client)),
        })),
      deleteClient: (id) =>
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id),
        })),
    }),
    {
      name: "job-store", // unique name for localStorage
    },
  ),
)
