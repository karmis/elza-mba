export interface Product {
  id: number;
  title: string;
  slug: string;
  study_field: StudyField;
  specializedSubjects: SpecializedSubject[];
  baseSubjects: BaseSubject[];
  description: string;
  new: boolean | null;

}

export interface StudyField {
  id: number;
  name: string;
  description: string;
  copyToKk: boolean;
  slug: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  title: string;
  string: string | null;
  new: boolean | null;
}

export interface SpecializedSubject {
  id: number;
  string: string;
  title: string;
  skills: Skill[];
}

export interface BaseSubject {
  id: number;
  string: string;
  title: string;
  skills: Skill[];
}
