export interface MiniFigTypes {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}

export interface MiniFigPartColor {
  id: string;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: any;
  print_of: string | null;
}

export interface MiniFigCellPart {
  part_num: string;
  part_img_url: string;
  name: string;
  part_cat_id: number;
  part_url: number;
  external_ids: any;
  print_of: string;
}

export interface MiniFigPartTypes {
  id: string;
  inv_part_id: string;
  part: MiniFigCellPart;
  color: MiniFigPartColor;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface MiniFigPartsTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: MiniFigPartTypes[];
}

export interface IFormInput {
  Name: string;
  Surname: string;
  "Phone Number": string;
  Email: string;
  "Date of birth": string;
  Address: string;
  City: string;
  State: string;
  "Zip Code": string;
}
