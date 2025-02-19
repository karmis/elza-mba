import {Product} from './interfaces';

export class SkillModel {
  id!: number;
  title!: string;
  string!: string | null;
  new!: boolean | null;

  constructor(data: Partial<SkillModel>) {
    Object.assign(this, data);
  }
}

export class SpecializedSubjectModel {
  skills!: SkillModel[];

  constructor(data: Partial<SpecializedSubjectModel>) {
    Object.assign(this, data);
    this.skills = data?.skills!.map(skill => new SkillModel(skill));
  }
}

export class BaseSubjectModel {
  skills!: SkillModel[];
  title!: string;

  constructor(data: Partial<BaseSubjectModel>) {
    Object.assign(this, data);
    this.skills = data?.skills!.map(skill => new SkillModel(skill));
  }
}


export class StudyFieldModel {
  id!: number;
  name!: string;
  description!: string;
  copyToKk!: boolean;
  slug!: string;
  locale!: string;
  published_at!: string;
  created_at!: string;
  updated_at!: string;

  constructor(data: Partial<StudyFieldModel>) {
    Object.assign(this, data);
  }
}

export class ProductModel {
  id!: number;
  title!: string;
  slug!: string;
  description!: string;
  study_field!: StudyFieldModel;
  new!: boolean | null;
  specializedSubjects!: SpecializedSubjectModel[];
  baseSubjects!: BaseSubjectModel[];


  constructor(data: Partial<Product>) {
    Object.assign(this, data);
    this.study_field = new StudyFieldModel(data.study_field!);
    this.specializedSubjects = data?.specializedSubjects!.map(subject => new SpecializedSubjectModel(subject));
    this.baseSubjects = data?.baseSubjects!.map(subject => new BaseSubjectModel(subject));
  }
}
