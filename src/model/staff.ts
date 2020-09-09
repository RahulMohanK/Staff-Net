import { AdministrativeStaff } from './AdministrativeStaff';
import { SupportingStaff } from './SupportingStaff';
import { TeachingStaff } from './TeachingStaff';

export interface Staff {
  administrativeStaff: AdministrativeStaff[],

  createdDate: Date,

  dob: Date,

  email: string,

  empId: string,

  id: number,

  name: string,

  phone: string,

  staffType: number,

  supportingStaff: SupportingStaff[],

  teachingStaff: TeachingStaff[],

  updatedDate: Date
}
