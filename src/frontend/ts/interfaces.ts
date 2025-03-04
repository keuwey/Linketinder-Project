export interface Candidate {
  id: number
  name: string
  skills: string[]
  education: string[]
  experience: string[]
}

export interface Company {
  id: number
  name: string
  industry: string
  vacancies: string[]
}
