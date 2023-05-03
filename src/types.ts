export interface Root {
    msg: string
    count: number
    data: Author[]
  }


export interface Author {
    id: number
    lastupdate: string
    folder_root: string
    folder_link: string
    folder_short: string
    folder_name: string
    rgf: string
    tgf_hmao: string
    tgf_ynao: string
    tgf_kras: string
    tgf_ekat: string
    tgf_omsk: string
    tgf_novo: string
    tgf_more: string
    tgf_tmn: string
    tgf: string
    report_name: string
    author_name: string
    year_str: string
    year_int: number
    territory_name: string
    comments: string
  }
