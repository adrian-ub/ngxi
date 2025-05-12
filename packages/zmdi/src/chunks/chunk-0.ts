import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdi3dRotationIcon],svg[zmdi-3d-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m159 458l29-28l81 81l-14 1q-100 0-173.5-68T0 277h32q6 60 40 108t87 73m19-139q14 0 21-7t7-20q0-7-2-12t-6-8q-4-4-9.5-5.5T175 265h-16v-22h16q8 0 13-2t8-5q4-3 6-8t2-10q0-12-7-19q-6-6-19-6q-5 0-10 2q-4 1-8 4q-3 3-5 8q-2 4-2 9h-28q0-10 4-18t11-14t17-10q9-3 21-3q11 0 22 3q10 3 16 9q7 6 11 15t4 20q0 5-2 10q-1 5-4 10q-4 5-8 9q-5 4-11 7q7 3 13 7q5 4 8 9q3 4 5 11q2 5 2 12q0 11-5 20q-4 9-11.5 15.5T200 338t-22 3q-11 0-21-3q-9-3-17-9t-12-14.5t-4-20.5h27q0 6 2 10.5t6 7.5q3 3 8 5t11 2m182.5-126.5Q371 203 377 218q5 16 5 34v8q0 19-5 34q-6 15-16 25q-10 11-25 17q-14 5-32 5h-49V171h50q18 0 31.5 5.5t24 16M352 260v-8q0-28-12-43q-12-14-35-14h-20v123h19q12 0 21-4t15-11q6-8 9-19t3-24M255 0q100 0 173.5 68T510 234h-32q-6-59-40.5-107T351 54l-29 28l-81-81z"></svg:path>`,
})
export class Zmdi3dRotationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdi8tracksIcon],svg[zmdi-8tracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117 195h193q31 0 53-22t22-53t-22-53.5T309.5 44T256 66.5T234 120v33h-42v-33q0-49 34.5-83.5t83-34.5t83 34.5t34.5 83t-34.5 83T310 237H117q-31 0-53 22t-22 53t22 53t53 22t53-22t22-53v-34h42v34q0 48-34 82.5T117.5 429t-83-34.5t-34.5-83T34.5 229t82.5-34"></svg:path>`,
})
export class Zmdi8tracksIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountIcon],svg[zmdi-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25m0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9"></svg:path>`,
})
export class ZmdiAccountIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdi500pxIcon],svg[zmdi-500px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M281 247q-12 13-12 14q-14 13-21 17q-26 19-59 12q-30-6-45-36q-1-2-2-3q-8 12-8 13q-21 28-57 29q-23 1-40-6q-36-16-37-56h40l1 4q5 20 21 24q21 5 35-9q9-10 10.5-25t-6.5-26q-8-12-23-14.5T52 191q-4 3-6 5q-3 5-11 5H6q9-53 20-110h111v33H58q-3 0-4 3q-1 4-7 39v3q21-19 52-14q27 5 42 34q1-1 1-3q2-2 2-3q21-43 69-36q26 3 46 22q1 1 23 24l2-2q22-23 24-25q17-16 38-19q23-3 43 5.5t30 30.5q16 38-2 74q-16 33-55 35q-29 1-51-17q-3-2-25-22q0-1-5-6m-76 5q12 0 24-7q8-4 28-23q1-2 0-4q-2-1-9.5-8T236 199q-9-8-21-12q-14-4-25 2t-15 20q-1 4-1 8q-1 16 8 25.5t23 9.5m99-32q22 20 24 21q13 12 30 11q25 0 30-24q1-7 0-15q-2-13-11.5-21t-22.5-6q-15 1-28 13q-1 1-22 21"></svg:path>`,
})
export class Zmdi500pxIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountAddIcon],svg[zmdi-account-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.5 192q-35.5 0-60.5-25t-25-60.5T238 46t60.5-25T359 46t25 60.5t-25 60.5t-60.5 25M107 149h64v43h-64v64H64v-64H0v-43h64V85h43zm191.5 86q31.5 0 69.5 9t69.5 29.5T469 320v43H128v-43q0-26 31.5-46.5T229 244t69.5-9"></svg:path>`,
})
export class ZmdiAccountAddIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountBoxIcon],svg[zmdi-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341zm256 85q0-27-18.5-45.5T192 64t-45.5 18.5T128 128t18.5 45.5T192 192t45.5-18.5T256 128M64 299v21h256v-21q0-20-23.5-36T244 240t-52-7t-52 7t-52.5 23T64 299"></svg:path>`,
})
export class ZmdiAccountBoxIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountBoxOIcon],svg[zmdi-account-box-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 197q-20 0-34-14t-14-34t14-34t34-14t34 14t14 34t-14 34t-34 14m96 86v16H96v-16q0-22 33-35t63-13t63 13t33 35M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H43v298z"></svg:path>`,
})
export class ZmdiAccountBoxOIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountBoxMailIcon],svg[zmdi-account-box-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 107l-64 42l-64-42V85l64 43l64-43zM469 0q18 0 30.5 12.5T512 43v298q0 18-12.5 30.5T469 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM170.5 64q-26.5 0-45 18.5T107 128t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-19-45.5T170.5 64M299 320v-21q0-20-24-36t-52.5-23t-52-7t-52 7t-52 23T43 299v21zm170-128V64H299v128z"></svg:path>`,
})
export class ZmdiAccountBoxMailIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountBoxPhoneIcon],svg[zmdi-account-box-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0q18 0 30.5 12.5T512 43v298q0 18-12.5 30.5T469 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM170.5 64q-26.5 0-45 18.5T107 128t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-19-45.5T170.5 64M299 320v-21q0-20-24-36t-52.5-23t-52-7t-52 7t-52 23T43 299v21zm82-85q-8-22-8-43t8-43h35l32-42l-42-43q-44 33-59 85q-6 22-6 43t6 43q15 52 59 85l42-43l-32-42z"></svg:path>`,
})
export class ZmdiAccountBoxPhoneIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountCalendarIcon],svg[zmdi-account-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm-149 64q-27 0-45.5 18.5T128 176t18.5 45.5T192 240t45.5-18.5T256 176t-18.5-45.5T192 112m128 256v-21q0-20-23.5-36T244 288t-52-7t-52 7t-52.5 23T64 347v21z"></svg:path>`,
})
export class ZmdiAccountCalendarIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountCircleIcon],svg[zmdi-account-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 64Q187 67 168 85.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 303q39.5 0 73-18.5T341 301q0-20-23.5-35.5t-52-23t-52-7.5t-52 7.5t-52 23T85 301q21 32 55 50.5t73.5 18.5"></svg:path>`,
})
export class ZmdiAccountCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountOIcon],svg[zmdi-account-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 62Q152 62 139 75t-13 31.5t13 31.5t31.5 13t31.5-13t13-31.5T202 75t-31.5-13m.5 192q-44 0-87 16.5T41 299v23h260v-23q0-12-43-28.5T171 254m-.5-233Q206 21 231 46t25 60.5t-25 60.5t-60.5 25t-60.5-25t-25-60.5T110 46t60.5-25m0 192q31.5 0 69.5 9t69.5 29.5T341 299v64H0v-64q0-27 31.5-47.5T101 222t69.5-9"></svg:path>`,
})
export class ZmdiAccountOIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsIcon],svg[zmdi-accounts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 171q-27 0-45.5-19T256 106.5t18.5-45T320 43t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-170.5 0q-26.5 0-45.5-19t-19-45.5t19-45T149.5 43t45 18.5t18.5 45t-18.5 45.5t-45 19m0 42q27.5 0 60.5 8t61 26t28 41v53H0v-53q0-23 27.5-41t61-26t61-8m170.5 0q28 0 61 8t60.5 26t27.5 41v53H341v-53q0-43-42-74q13-1 21-1"></svg:path>`,
})
export class ZmdiAccountsIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsAddIcon],svg[zmdi-accounts-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 149v43h-64v64H64v-64H0v-43h64V85h43v64zm213 22q-10 0-19-3q19-28 19-61q0-34-19-61q9-3 19-3q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-106.5 0q-26.5 0-45.5-19t-19-45.5t19-45T277.5 43t45 18.5t18.5 45t-18.5 45.5t-45 19M419 217q37 6 65 22t28 38v43h-64v-43q0-34-29-60m-142-4q40 0 84 18t44 46v43H149v-43q0-28 44-46t84-18"></svg:path>`,
})
export class ZmdiAccountsAddIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsAltIcon],svg[zmdi-accounts-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M309 192q-22 0-37.5-15.5T256 139t15.5-38T309 85t37.5 16t15.5 38t-15.5 37.5T309 192m-159.5-21q-26.5 0-45.5-19t-19-45.5t19-45T149.5 43t45 18.5t18.5 45t-18.5 45.5t-45 19m160 64q36.5 0 77 16t40.5 42v48H192v-48q0-26 40.5-42t77-16M149 213q22 0 51 6q-51 28-51 74v48H0v-53q0-23 27.5-41t61-26t60.5-8"></svg:path>`,
})
export class ZmdiAccountsAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsListAltIcon],svg[zmdi-accounts-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0v43H43V0zM43 512v-43h341v43zM384 85q18 0 30.5 12.5T427 128v256q0 18-12.5 30.5T384 427H43q-18 0-30.5-12.5T0 384V128q0-18 12.5-30.5T43 85zm-171 59q-20 0-34 14t-14 34t14 34t34 14t34-14t14-34t-14-34t-34-14m107 219v-32q0-24-36.5-39t-70-15t-70 15t-36.5 39v32z"></svg:path>`,
})
export class ZmdiAccountsListAltIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsListIcon],svg[zmdi-accounts-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 43h42v298h-42zm-86 298V43h43v298zM277 43q9 0 15.5 6t6.5 15v256q0 9-6.5 15t-15.5 6H21q-8 0-14.5-6T0 320V64q0-9 6.5-15T21 43zm-128 58q-20 0-34 14t-14 34t14 34t34 14t34-14t14-34t-14-34t-34-14m96 198v-16q0-22-33-35t-63-13t-63 13t-33 35v16z"></svg:path>`,
})
export class ZmdiAccountsListIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsOutlineIcon],svg[zmdi-accounts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M331 213q25 0 56 7.5t56.5 24T469 283v58H0v-58q0-22 25.5-38.5t56.5-24t57-7.5q50 0 96 22q46-22 96-22m-86 96v-26q0-10-35-24t-71.5-14T67 259t-35 24v26zm192 0v-26q0-10-35-24t-71-14q-32 0-65 12q11 12 11 26v26zM139 192q-31 0-53-22t-22-53t22-52.5T139 43t52.5 21.5T213 117t-21.5 53t-52.5 22m-.5-117q-17.5 0-30 12.5t-12.5 30t12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5M331 192q-31 0-53-22t-22-53t22-52.5T331 43t52.5 21.5T405 117t-21.5 53t-52.5 22m-.5-117q-17.5 0-30 12.5t-12.5 30t12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5"></svg:path>`,
})
export class ZmdiAccountsOutlineIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatFlatIcon],svg[zmdi-airline-seat-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 171v42H149V85h192q36 0 61 25t25 61M0 235h427v42H299v43H128v-43H0zm109.5-41q-18.5 19-45 19.5T19 195T0 150t18.5-45t45-19.5t45.5 18t19 45t-18.5 45.5"></svg:path>`,
})
export class ZmdiAirlineSeatFlatIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatFlatAngledIcon],svg[zmdi-airline-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m443 241l-15 40l-264-95l45-121l182 66q34 12 49 44t3 66M0 195l15-40l405 146l-14 40l-97-34v34H139v-96zm124-41.5q-24 11.5-49 3T38.5 124t-3-49T68 38.5t49-3T153.5 68t3 49t-32.5 36.5"></svg:path>`,
})
export class ZmdiAirlineSeatFlatAngledIcon {
  readonly viewBox = input("0 0 456 384")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatIndividualSuiteIcon],svg[zmdi-airline-seat-individual-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 213q-26 0-45-18.5t-19-45T83 104t45-19t45 19t19 45.5t-19 45t-45 18.5M384 85q35 0 60 25t25 61v128H0V85h43v150h170V85z"></svg:path>`,
})
export class ZmdiAirlineSeatIndividualSuiteIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatLegroomExtraIcon],svg[zmdi-airline-seat-legroom-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 192q0 27 18.5 45.5T107 256h128v43H107q-44 0-75.5-31.5T0 192V0h43zm401 112q7 12 2.5 25T429 348l-79 36l-73-149H128q-27 0-45.5-19T64 171V0h128v128h75q26 0 38 24l73 149l23-11q12-5 24.5-1.5T444 304"></svg:path>`,
})
export class ZmdiAirlineSeatLegroomExtraIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatLegroomNormalIcon],svg[zmdi-airline-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 192q0 27 18.5 45.5T107 256h128v43H107q-44 0-75.5-31.5T0 192V0h43zm330 128q14 0 23 9.5t9 22.5t-9 22.5t-23 9.5h-96V235H128q-26 0-45-19t-19-45V0h128v128h107q17 0 29.5 12.5T341 171v149z"></svg:path>`,
})
export class ZmdiAirlineSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatLegroomReducedIcon],svg[zmdi-airline-seat-legroom-reduced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362 346q3 15-6.5 26.5T331 384h-96v-64l21-85H128q-26 0-45-19t-19-45V0h128v128h107q17 0 29.5 12.5T341 171l-42 149h30q12 0 21.5 7t11.5 19M43 192q0 27 18.5 45.5T107 256h85v43h-85q-44 0-75.5-31.5T0 192V0h43z"></svg:path>`,
})
export class ZmdiAirlineSeatLegroomReducedIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatReclineExtraIcon],svg[zmdi-airline-seat-recline-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.5 80Q57 70 54 52.5t7-32T88.5 3t32 7.5T138 38t-7 31.5T103.5 87t-32-7M299 365v43H148q-39 0-69-25.5T42 318L0 109h43l42 202q3 24 21 39t42 15zm5-85l123 96l-32 32l-82-64H167q-23 0-40.5-14.5T104 292L75 166q-3-20 8.5-36.5T115 110q10-2 21 1q10 3 16 8l35 27q47 37 100 27v46q-48 8-110-26l22 87z"></svg:path>`,
})
export class ZmdiAirlineSeatReclineExtraIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatReclineNormalIcon],svg[zmdi-airline-seat-recline-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76.5 75.5Q64 63 64 45.5t12.5-30t30-12.5t30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5M43 301q0 27 18.5 45.5T107 365h128v43H107q-44 0-75.5-31.5T0 301V109h43zm298 87l-30 31l-75-75H128q-27 0-45.5-18.5T64 280V157q0-20 14-34t34-14h1q10 0 20 5q9 4 15 11l30 33q17 19 45 31.5t54 11.5v47q-29 0-61-13.5T160 201v79h73z"></svg:path>`,
})
export class ZmdiAirlineSeatReclineNormalIcon {
  readonly viewBox = input("0 0 344 424")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirplaneIcon],svg[zmdi-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m405 301l-170-53v117l42 32v32l-74-21l-75 21v-32l43-32V248L0 301v-42l171-107V35q0-14 9-23t22.5-9t23 9t9.5 23v117l170 107z"></svg:path>`,
})
export class ZmdiAirplaneIcon {
  readonly viewBox = input("0 0 408 432")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirplaneOffIcon],svg[zmdi-airplane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235 152l170 107v42l-67-21l-167-167V35q0-14 9-23t22.5-9t23 9t9.5 23zM21 72l27-27l336 336l-27 27l-122-122v79l42 32v32l-74-21l-75 21v-32l43-32V248L0 301v-42l128-80z"></svg:path>`,
})
export class ZmdiAirplaneOffIcon {
  readonly viewBox = input("0 0 408 432")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAirplayIcon],svg[zmdi-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m107 405l128-128l128 128zM427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341h-86v-42h86V43H43v256h85v42H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiAirplayIcon {
  readonly viewBox = input("0 0 472 408")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlarmIcon],svg[zmdi-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m427 82l-28 33l-98-83l28-32zM125 32l-97 82L0 82L98 0zm99 99v112l85 50l-16 26l-101-60V131zm-10.5-86Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5m-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387"></svg:path>`,
})
export class ZmdiAlarmIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlarmCheckIcon],svg[zmdi-alarm-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m427 82l-28 33l-98-83l28-32zM125 32l-97 82L0 82L98 0zm88.5 13Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5m-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387m-31-117l105-106l23 23l-128 128l-68-68l23-22z"></svg:path>`,
})
export class ZmdiAlarmCheckIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlarmOffIcon],svg[zmdi-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221 88q-26 0-51 9l-33-32q40-20 84-20q79 0 135.5 56.5T413 237q0 44-20 84l-32-32q9-26 9-52q0-62-43.5-105.5T221 88m213-6l-27 33l-99-83l28-32zM27 9l21 21l372 372l-27 27l-47-47q-54 47-125 47q-80 0-136-56T29 237q0-71 47-125L59 95l-24 20L5 84l23-19L0 36zm289 343L106 142q-35 42-35 95q0 62 44 106t106 44q54 0 95-35M136 30l-18 15l-31-30l19-15z"></svg:path>`,
})
export class ZmdiAlarmOffIcon {
  readonly viewBox = input("0 0 440 432")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlarmPlusIcon],svg[zmdi-alarm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m125 32l-97 82L0 82L98 0zm302 50l-28 33l-98-83l28-32zM213.5 45Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5m-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387m22-235v64h64v43h-64v64h-43v-64h-64v-43h64v-64z"></svg:path>`,
})
export class ZmdiAlarmPlusIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlarmSnoozeIcon],svg[zmdi-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m125 32l-97 82L0 82L98 0zm302 50l-28 33l-98-83l28-32zM213.5 45Q293 45 349 101.5t56 136T349 373t-135.5 56t-136-56T21 237.5t56.5-136t136-56.5m-.5 342q62 0 106-44t44-106t-44-105.5T213 88t-105.5 43.5T64 237t43.5 106T213 387m-64-192v-43h128v38l-77 90h77v43H149v-39l78-89z"></svg:path>`,
})
export class ZmdiAlarmSnoozeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlbumIcon],svg[zmdi-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m-.5 309q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m.5-117q8.5 0 15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6"></svg:path>`,
})
export class ZmdiAlbumIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertCircleIcon],svg[zmdi-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M235 323v-43h-43v43zm0-86V109h-43v128z"></svg:path>`,
})
export class ZmdiAlertCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertCircleOIcon],svg[zmdi-alert-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 280h43v43h-43zm0-171h43v128h-43zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiAlertCircleOIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertOctagonIcon],svg[zmdi-alert-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m272 0l112 112v160L272 384H112L0 272V112L112 0zm-80 305q12 0 20-8t8-19.5t-8-19.5t-20-8t-20 8t-8 19.5t8 19.5t20 8m21-92V85h-42v128z"></svg:path>`,
})
export class ZmdiAlertOctagonIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertPolygonIcon],svg[zmdi-alert-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m469 224l-52 59l8 79l-77 17l-41 68l-72-31l-73 31l-40-67l-77-18l7-79l-52-59l52-60l-7-78l77-17l40-68l73 31l72-31l41 68l77 17l-8 79zM256 331v-43h-43v43zm0-86V117h-43v128z"></svg:path>`,
})
export class ZmdiAlertPolygonIcon {
  readonly viewBox = input("0 0 472 448")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertTriangleIcon],svg[zmdi-alert-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 408L235 3l234 405zm256-64v-43h-43v43zm0-85v-86h-43v86z"></svg:path>`,
})
export class ZmdiAlertTriangleIcon {
  readonly viewBox = input("0 0 472 408")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAmazonIcon],svg[zmdi-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M379 297q6-2 9 2.5t-2 8.5q-34 25-81 39t-92 14Q91 361 2 280q-3-3-1-5.5t6-.5q96 56 211 56q83 0 161-33m46-26q5 6-2.5 31.5T399 342q-3 3-5 2t-1-5q18-45 12-53t-54-2q-4 0-4.5-2t2.5-4q18-13 46-13.5t30 6.5M237 113v-6q0-22-6-30q-7-11-23-11q-28 0-33 25q-2 8-8 8l-40-4q-8-2-6-9q6-34 32.5-49T214 22q41 0 63 21q3 3 5.5 6t4.5 7.5t3.5 7t2 8t1.5 8t1 9V180q0 17 16 38q5 7 0 12q-16 12-32 27q-5 4-10 1q-11-9-24-28q-17 18-32 24.5t-37 6.5q-27 0-44.5-17T114 196q0-49 44-69q17-7 79-14m-8 87q8-14 8-45v-9q-62 0-62 42q0 14 6.5 22.5T200 219q18 0 29-19"></svg:path>`,
})
export class ZmdiAmazonIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAndroidIcon],svg[zmdi-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 392V179h256v213q0 9-6 15t-15 6h-21v75q0 13-9.5 22.5t-23 9.5t-22.5-9.5t-9-22.5v-75h-43v75q0 13-9.5 22.5T160 520t-22.5-9.5T128 488v-75h-21q-9 0-15.5-6T85 392M32 179q13 0 22.5 9t9.5 23v149q0 13-9.5 22.5T32 392t-22.5-9.5T0 360V211q0-14 9.5-23t22.5-9m362.5 0q13.5 0 23 9t9.5 23v149q0 13-9.5 22.5t-23 9.5t-22.5-9.5t-9-22.5V211q0-14 9-23t22.5-9M289 54q52 38 52 103H85q0-64 53-103l-28-28q-8-7-.5-14.5T125 11l32 32q26-14 56-14t57 14l31-32q8-7 15.5.5T316 26zm-118 61V93h-22v22zm106 0V93h-21v22z"></svg:path>`,
})
export class ZmdiAndroidIcon {
  readonly viewBox = input("0 0 432 520")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAndroidAltIcon],svg[zmdi-android-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 317v-85h299v85q0 62-44 106t-106 44t-105.5-44T0 317M237 69q29 21 45.5 52.5T299 189v22H0v-22q0-36 16.5-67.5T61 69L17 24L34 7l49 49q32-16 66-16t66 16l50-49l17 17zM85.5 168q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5m128 0q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5"></svg:path>`,
})
export class ZmdiAndroidAltIcon {
  readonly viewBox = input("0 0 304 472")
  readonly width = input("0.65em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAppleIcon],svg[zmdi-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M353 146q-21 7-35 32.5T304 229q0 31 16 57.5t43 33.5q-8 27-26.5 55.5T299 418q-16 11-40 11q-16 0-37-8q-18-9-31-9q-10 0-40 12q-18 5-26 5q-24 0-49-20q-36-34-56-81T0 230q0-53 30.5-93.5T108 96q26 0 48 11q17 11 34 11q16 0 31-6q39-16 52-16q35 0 61 23q12 12 19 27M179 99q0-32 25-63q25-27 61-33q0 38-24 67q-27 29-62 29"></svg:path>`,
})
export class ZmdiAppleIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAppsIcon],svg[zmdi-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 107V21h85v86zm128 256v-86h85v86zM0 363v-86h85v86zm0-128v-86h85v86zm128 0v-86h85v86zM256 21h85v86h-85zm-128 86V21h85v86zm128 128v-86h85v86zm0 128v-86h85v86z"></svg:path>`,
})
export class ZmdiAppsIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArchiveIcon],svg[zmdi-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M374 48q10 11 10 27v266q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V75q0-16 10-27l29-36Q49 0 64 0h256q15 0 25 12zM192 309l117-117h-74v-43h-86v43H75zM45 43h294l-20-22H63z"></svg:path>`,
})
export class ZmdiArchiveIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowLeftIcon],svg[zmdi-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 171v42H82l119 120l-30 30L0 192L171 21l30 30L82 171z"></svg:path>`,
})
export class ZmdiArrowLeftIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowLeftBottomIcon],svg[zmdi-arrow-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 51L73 299h140v42H0V128h43v141L290 21z"></svg:path>`,
})
export class ZmdiArrowLeftBottomIcon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowMergeIcon],svg[zmdi-arrow-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243 371l-72-72l30-30l72 72zM41 107l96-96l96 96h-75v136L30 371L0 341l115-115V107z"></svg:path>`,
})
export class ZmdiArrowMergeIcon {
  readonly viewBox = input("0 0 280 384")
  readonly width = input("0.73em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowMissedIcon],svg[zmdi-arrow-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m354 85l30 30l-192 192L43 158v98H0V85h171v43H73l119 119z"></svg:path>`,
})
export class ZmdiArrowMissedIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowRightIcon],svg[zmdi-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171 21l170 171l-170 171l-30-30l119-120H0v-42h260L141 51z"></svg:path>`,
})
export class ZmdiArrowRightIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowRightTopIcon],svg[zmdi-arrow-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 43h213v213h-43V115L30 363L0 333L247 85H107z"></svg:path>`,
})
export class ZmdiArrowRightTopIcon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowSplitIcon],svg[zmdi-arrow-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 21h128v128l-49-49l-61 62l-30-30l61-62zm-85 0L79 70l113 113v180h-43V201L49 100L0 149V21z"></svg:path>`,
})
export class ZmdiArrowSplitIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowsIcon],svg[zmdi-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 176v-64h-64L235 5l106 107h-64v64zm-21 21v86h-64v64L0 240l107-107v64zm298 43L363 347v-64h-64v-86h64v-64zm-192 64v64h64L235 475L128 368h64v-64z"></svg:path>`,
})
export class ZmdiArrowsIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAspectRatioIcon],svg[zmdi-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 149v43h-43v-43zm0 86v42h-43v-42zm-171-86v43H85v-43zm85 0v43h-42v-43zM384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiAspectRatioIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAspectRatioAltIcon],svg[zmdi-aspect-ratio-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 192v107H277v-43h64v-64zm-256-64v64H85V85h107v43zM427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300z"></svg:path>`,
})
export class ZmdiAspectRatioAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentIcon],svg[zmdi-assignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 45q18 0 30.5 12.5T384 88v299q0 17-12.5 29.5T341 429H43q-18 0-30.5-12.5T0 387V88q0-18 12.5-30.5T43 45h89q7-19 23.5-30.5T192 3t36.5 11.5T252 45zm-149 0q-9 0-15 6.5t-6 15t6 15t15 6.5t15-6.5t6-15t-6-15t-15-6.5m43 299v-43H85v43zm64-85v-43H85v43zm0-86v-42H85v42z"></svg:path>`,
})
export class ZmdiAssignmentIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentAccountIcon],svg[zmdi-assignment-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h89q7-19 23.5-31T192 5t36.5 12T252 48zm-149 0q-9 0-15 6.5t-6 15t6 15t15 6.5t15-6.5t6-15t-6-15t-15-6.5m0 85q-27 0-45.5 19T128 197.5t18.5 45T192 261t45.5-18.5t18.5-45t-18.5-45.5t-45.5-19m128 256v-30q0-19-23.5-35T244 300.5t-52-7.5t-52 7.5T87.5 324T64 359v30z"></svg:path>`,
})
export class ZmdiAssignmentAccountIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentAlertIcon],svg[zmdi-assignment-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h89q7-19 23.5-31T192 5t36.5 12T252 48zM213 368v-43h-42v43zm0-85V155h-42v128zM192 91q9 0 15-6.5t6-15t-6-15t-15-6.5t-15 6.5t-6 15t6 15t15 6.5"></svg:path>`,
})
export class ZmdiAssignmentAlertIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentCheckIcon],svg[zmdi-assignment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h89q7-19 23.5-31T192 5t36.5 12T252 48zm-149 0q-9 0-15 6.5t-6 15t6 15t15 6.5t15-6.5t6-15t-6-15t-15-6.5m-43 299l171-171l-30-30l-141 140l-55-55l-30 30z"></svg:path>`,
})
export class ZmdiAssignmentCheckIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentOIcon],svg[zmdi-assignment-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 43q18 0 30.5 12.5T384 85v342q0 17-12.5 29.5T341 469H43q-18 0-30.5-12.5T0 427V85q0-17 12.5-29.5T43 43h89q7-19 23.5-31T192 0t36.5 12T252 43zm-149 0q-9 0-15 6t-6 15t6 15t15 6t15-6t6-15t-6-15t-15-6m149 384V85h-42v64H85V85H43v342z"></svg:path>`,
})
export class ZmdiAssignmentOIcon {
  readonly viewBox = input("0 0 384 472")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentReturnIcon],svg[zmdi-assignment-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h89q7-19 23.5-31T192 5t36.5 12T252 48zm-149 0q-9 0-15 6.5t-6 15t6 15t15 6.5t15-6.5t6-15t-6-15t-15-6.5m85 256v-85h-85v-64L85 261l107 107v-64z"></svg:path>`,
})
export class ZmdiAssignmentReturnIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAssignmentReturnedIcon],svg[zmdi-assignment-returned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h89q7-19 23.5-31T192 5t36.5 12T252 48zm-149 0q-9 0-15 6.5t-6 15t6 15t15 6.5t15-6.5t6-15t-6-15t-15-6.5m0 320l107-107h-64v-85h-86v85H85z"></svg:path>`,
})
export class ZmdiAssignmentReturnedIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAttachmentIcon],svg[zmdi-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117 309q-48 0-82.5-34T0 192t34.5-83T117 75h224q36 0 61 25t25 60t-25 60t-61 25H160q-22 0-37.5-15.5T107 192t15.5-37.5T160 139h160v32H160q-9 0-15 6t-6 15t6 15t15 6h181q22 0 38-15.5t16-37.5t-16-37.5t-38-15.5H117q-35 0-60 25t-25 60t25 60t60 25h203v32z"></svg:path>`,
})
export class ZmdiAttachmentIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAttachmentAltIcon],svg[zmdi-attachment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203 112h32v245q0 49-34.5 83.5t-83 34.5t-83-34.5T0 357V91q0-36 25-61T85.5 5T146 30t25 61v224q0 22-16 37.5T117 368t-37.5-15.5T64 315V112h32v203q0 8 6.5 14.5t15 6.5t15-6.5T139 315V91q0-22-16-38T85 37T47.5 53T32 91v266q0 36 25 61t60.5 25t60.5-25t25-61z"></svg:path>`,
})
export class ZmdiAttachmentAltIcon {
  readonly viewBox = input("0 0 240 480")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiAudioIcon],svg[zmdi-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h149v64h-85v235h-1q-4 36-31 60.5T96 384q-40 0-68-28T0 288t28-68t68-28q15 0 32 6z"></svg:path>`,
})
export class ZmdiAudioIcon {
  readonly viewBox = input("0 0 280 384")
  readonly width = input("0.73em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBadgeCheckIcon],svg[zmdi-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 5q18 0 30.5 12.5T384 48v276q0 23-19 35L192 475L19 359Q0 347 0 324V48q0-18 12.5-30.5T43 5zM149 325l192-192l-30-30l-162 162l-76-76l-30 30z"></svg:path>`,
})
export class ZmdiBadgeCheckIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBalanceIcon],svg[zmdi-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 197h64v150H43zm128 0h64v150h-64zM0 453v-64h405v64zm299-256h64v150h-64zM203 5l202 107v43H0v-43z"></svg:path>`,
})
export class ZmdiBalanceIcon {
  readonly viewBox = input("0 0 408 456")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBalanceWalletIcon],svg[zmdi-balance-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 320v21q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43v21H192q-18 0-30.5 12.5T149 107v170q0 18 12.5 30.5T192 320zm-192-43V107h213v170zm85.5-53q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T245 192t9.5 22.5t23 9.5"></svg:path>`,
})
export class ZmdiBalanceWalletIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBatteryIcon],svg[zmdi-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 45q12 0 20 8.5t8 20.5v327q0 12-8 20t-20 8H28q-11 0-19.5-8T0 401V74q0-12 8.5-20.5T28 45h36V3h85v42z"></svg:path>`,
})
export class ZmdiBatteryIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBatteryAlertIcon],svg[zmdi-battery-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 45q12 0 20 8.5t8 20.5v327q0 12-8 20t-20 8H28q-11 0-19.5-8T0 401V74q0-12 8.5-20.5T28 45h36V3h85v42zm-57 299v-43H85v43zm0-85V152H85v107z"></svg:path>`,
})
export class ZmdiBatteryAlertIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBatteryFlashIcon],svg[zmdi-battery-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 45q12 0 20 8.5t8 20.5v327q0 12-8 20t-20 8H28q-11 0-19.5-8T0 401V74q0-12 8.5-20.5T28 45h36V3h85v42zM85 387l86-160h-43V109L43 269h42z"></svg:path>`,
})
export class ZmdiBatteryFlashIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBatteryUnknownIcon],svg[zmdi-battery-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 45q12 0 20 8.5t8 20.5v327q0 12-8 20t-20 8H28q-11 0-19.5-8T0 401V74q0-12 8.5-20.5T28 45h36V3h85v42zm-58 298v-41H86v41zm29-112q15-15 15-36q0-27-19-45.5T106.5 131t-45 18.5T43 195h32q0-14 9-23t22.5-9t23 9t9.5 22.5t-10 22.5l-20 20q-19 21-19 43h34q0-16 17-34z"></svg:path>`,
})
export class ZmdiBatteryUnknownIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBehanceIcon],svg[zmdi-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 103H277V77h107zM208 203.5q12 17.5 12 42.5q0 20-8 35q-7 14-21 23q-12 9-30 14q-14 4-34 4H0V56h124q12 0 34 5q13 3 26 12q11 7 18 20q6 13 6 31q0 20-9.5 33.5T172 179q24 7 36 24.5M55 163h61q17 0 26-6q10-7 10-23q0-9-3.5-15t-9.5-9q-6-4-12-5q-9-2-15-2H55zm107 80q0-20-11-29q-11-8-30-8H55v73h64q7 0 17-2q8-2 13.5-5.5T159 260q3-6 3-17m264-3H289q0 24 13 37q12 11 34 11q15 0 27-8q12-9 14-18h46q-10 35-34 50q-24 16-55 16q-22 0-40-7t-31-21q-13-13-19-32q-7-18-7-40t7-40.5t20-32.5q13-13 30-21q18-8 40-8q24 0 42 9.5t30 25.5q11 15 17 37q5 21 3 42m-52-34q-2-18-12-30q-9-10-29-10q-13 0-21 4.5T298.5 181t-6.5 13q-3 7-3 12z"></svg:path>`,
})
export class ZmdiBehanceIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBikeIcon],svg[zmdi-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330.5 85q-17.5 0-30-12.5t-12.5-30t12.5-30t30-12.5t30 12.5t12.5 30t-12.5 30t-30 12.5m-224 139q44.5 0 75.5 31t31 75.5t-31 75.5t-75.5 31T31 406T0 330.5T31 255t75.5-31m0 181q30.5 0 52.5-22t22-52.5t-22-52.5t-52.5-22T54 278t-22 52.5T54 383t52.5 22M230 192l47 49v132h-42V267l-69-60q-12-10-12-30q0-17 12-30l60-60q10-12 30-12q18 0 34 12l41 41q32 32 76 32v43q-64 0-108-45l-17-17zm175.5 32q44.5 0 75.5 31t31 75.5t-31 75.5t-75.5 31t-75.5-31t-31-75.5t31-75.5t75.5-31m0 181q30.5 0 52.5-22t22-52.5t-22-52.5t-52.5-22t-52.5 22t-22 52.5t22 52.5t52.5 22"></svg:path>`,
})
export class ZmdiBikeIcon {
  readonly viewBox = input("0 0 512 440")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBlockIcon],svg[zmdi-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M43 216q0 59 36 105L318 81q-46-36-105-36q-70 0-120 50T43 216m170 171q71 0 121-50t50-121q0-59-36-105L109 351q46 36 104 36"></svg:path>`,
})
export class ZmdiBlockIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBlockAltIcon],svg[zmdi-block-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m-.5 384q58 0 105-36L79 111q-36 47-36 105q0 71 50 121t120 50m135-66q36-47 36-105q0-71-50-121T213 45q-58 0-104 36z"></svg:path>`,
})
export class ZmdiBlockAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBloggerIcon],svg[zmdi-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M397 165q30 0 30 31v103q0 53-39.5 91.5T295 429H124q-48 0-86-38.5T0 300V138q0-57 39-96t96-39h90q44 0 84.5 39.5T350 128v11q0 11 7.5 18.5T378 165zm-262-51q-10 0-17.5 7.5t-7.5 18t7.5 18T135 165h78q10 0 17-8t7-18t-7-17.5t-17-7.5zm154 204q10 0 17.5-6.5T314 295t-7.5-17t-17.5-7H135q-10 0-17.5 7t-7.5 17t7.5 16.5T135 318z"></svg:path>`,
})
export class ZmdiBloggerIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothIcon],svg[zmdi-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m271 124l-92 92l92 92l-122 121h-21V267l-98 98l-30-30l119-119L0 97l30-30l98 98V3h21zM171 84v81l40-41zm40 224l-40-41v81z"></svg:path>`,
})
export class ZmdiBluetoothIcon {
  readonly viewBox = input("0 0 272 432")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothConnectedIcon],svg[zmdi-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 216l-42 43l-43-43l43-43zm229-92l-92 92l92 92l-122 121h-21V267l-98 98l-30-30l119-119L43 97l30-30l98 98V3h21zM213 84v81l40-41zm40 224l-40-41v81zm88-135l43 43l-43 43l-42-43z"></svg:path>`,
})
export class ZmdiBluetoothConnectedIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothOffIcon],svg[zmdi-bluetooth-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 84v69l-43-43V3h22l121 121l-64 65l-30-30l34-35zM30 45l311 312l-30 30l-49-49l-91 91h-22V267l-98 98l-30-30l120-119L0 75zm162 303l40-40l-40-41z"></svg:path>`,
})
export class ZmdiBluetoothOffIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothSearchIcon],svg[zmdi-bluetooth-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240 216l49-49q10 24 10 49q0 26-10 50zm113-113q31 51 31 111q0 61-33 113l-25-25q21-41 21-86q0-46-21-86zm-82 21l-92 92l92 92l-122 121h-21V267l-98 98l-30-30l119-119L0 97l30-30l98 98V3h21zM171 84v81l40-41zm40 224l-40-41v81z"></svg:path>`,
})
export class ZmdiBluetoothSearchIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBluetoothSettingIcon],svg[zmdi-bluetooth-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 512v-43h43v43zm-85 0v-43h42v43zm170 0v-43h43v43zm58-390l-92 91l92 92l-122 122h-21V265l-98 98l-30-30l119-120L0 94l30-30l98 98V0h21zM171 82v80l40-40zm40 223l-40-40v80z"></svg:path>`,
})
export class ZmdiBluetoothSettingIcon {
  readonly viewBox = input("0 0 272 512")
  readonly width = input("0.54em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBlurIcon],svg[zmdi-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.5 229q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m0 86q8.5 0 15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6m0-171q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m-64 11Q21 155 21 165.5T10.5 176T0 165.5T10.5 155m64-96q8.5 0 15 6T96 80t-6.5 15t-15 6t-15-6T53 80t6.5-15t15-6m320 117q-10.5 0-10.5-10.5t10.5-10.5t10.5 10.5t-10.5 10.5m-149-75q-8.5 0-15-6T224 80t6.5-15t15-6t15 6t6.5 15t-6.5 15t-15 6m0-74Q235 27 235 16t10.5-11T256 16t-10.5 11m-235 213Q21 240 21 250.5T10.5 261T0 250.5T10.5 240M160 389q11 0 11 11t-11 11t-11-11t11-11m0-362q-11 0-11-11t11-11t11 11t-11 11m0 74q-9 0-15-6t-6-15t6-15t15-6t15 6t6 15t-6 15t-15 6m0 118q13 0 22.5 9t9.5 22.5t-9.5 23T160 283t-22.5-9.5t-9.5-23t9.5-22.5t22.5-9m170.5 10q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m0 86q8.5 0 15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6m0-171q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m0-85q8.5 0 15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6m64 181q10.5 0 10.5 10.5T394.5 261T384 250.5t10.5-10.5m-149 75q8.5 0 15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6m0 74q10.5 0 10.5 11t-10.5 11t-10.5-11t10.5-11M160 133q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9t-22.5-9t-9.5-22.5t9.5-23T160 133m0 182q9 0 15 6t6 15t-6 15t-15 6t-15-6t-6-15t6-15t15-6m85.5-96q13.5 0 22.5 9t9 22.5t-9 23t-22.5 9.5t-23-9.5t-9.5-23t9.5-22.5t23-9m0-86q13.5 0 22.5 9.5t9 23t-9 22.5t-22.5 9t-23-9t-9.5-22.5t9.5-23t23-9.5"></svg:path>`,
})
export class ZmdiBlurIcon {
  readonly viewBox = input("0 0 408 416")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBlurCircularIcon],svg[zmdi-blur-circular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 152q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m0 85q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m-64-74q10.5 0 10.5 10.5T106.5 184T96 173.5t10.5-10.5m64 149q10.5 0 10.5 10.5T170.5 333T160 322.5t10.5-10.5m-64-64q10.5 0 10.5 10.5T106.5 269T96 258.5t10.5-10.5m64-128q-10.5 0-10.5-10.5T170.5 99t10.5 10.5t-10.5 10.5m85.5 32q9 0 15 6.5t6 15t-6 15t-15 6.5t-15-6.5t-6-15t6-15t15-6.5m0-32q-11 0-11-10.5T256 99t11 10.5t-11 10.5m64 128q11 0 11 10.5T320 269t-11-10.5t11-10.5m0-85q11 0 11 10.5T320 184t-11-10.5t11-10.5M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50m42.5-75q11 0 11 10.5T256 333t-11-10.5t11-10.5m0-75q9 0 15 6.5t6 15t-6 15t-15 6.5t-15-6.5t-6-15t6-15t15-6.5"></svg:path>`,
})
export class ZmdiBlurCircularIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBlurLinearIcon],svg[zmdi-blur-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.5 309Q29 309 20 300t-9-22.5t9-23t22.5-9.5t23 9.5t9.5 23t-9.5 22.5t-23 9m85.5-96q-9 0-15-6t-6-15t6-15t15-6t15 6t6 15t-6 15t-15 6m0-85q-9 0-15-6.5t-6-15t6-15t15-6.5t15 6.5t6 15t-6 15t-15 6.5M0 384v-43h384v43zm42.5-245Q29 139 20 129.5t-9-23T20 84t22.5-9t23 9t9.5 22.5t-9.5 23t-23 9.5m0 85Q29 224 20 214.5T11 192t9-22.5t22.5-9.5t23 9.5T75 192t-9.5 22.5t-23 9.5m85.5 75q-9 0-15-6.5t-6-15t6-15t15-6.5t15 6.5t6 15t-6 15t-15 6.5m170.5-11q-10.5 0-10.5-10.5t10.5-10.5t10.5 10.5t-10.5 10.5M0 0h384v43H0zm298.5 117q-10.5 0-10.5-10.5T298.5 96t10.5 10.5t-10.5 10.5m0 86q-10.5 0-10.5-11t10.5-11t10.5 11t-10.5 11m-85-75q-8.5 0-15-6.5t-6.5-15t6.5-15t15-6.5t15 6.5t6.5 15t-6.5 15t-15 6.5m0 85q-8.5 0-15-6t-6.5-15t6.5-15t15-6t15 6t6.5 15t-6.5 15t-15 6m0 86q-8.5 0-15-6.5t-6.5-15t6.5-15t15-6.5t15 6.5t6.5 15t-6.5 15t-15 6.5"></svg:path>`,
})
export class ZmdiBlurLinearIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBlurOffIcon],svg[zmdi-blur-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.5 101q-8.5 0-15-6T224 80t6.5-15t15-6t15 6t6.5 15t-6.5 15t-15 6m-4.5 96q-11-2-18.5-9.5T214 170l-1-5q0-13 9.5-22.5t23-9.5t22.5 9.5t9 23t-9 22.5t-23 9zm4.5-170Q235 27 235 16t10.5-11T256 16t-10.5 11M160 27q-11 0-11-11t11-11t11 11t-11 11m234.5 149q-10.5 0-10.5-10.5t10.5-10.5t10.5 10.5t-10.5 10.5M160 101q-9 0-15-6t-6-15t6-15t15-6t15 6t6 15t-6 15t-15 6m170.5 171q-8.5 0-15-6.5t-6.5-15t6.5-15t15-6.5t15 6.5t6.5 15t-6.5 15t-15 6.5m0-85q-8.5 0-15-6.5t-6.5-15t6.5-15t15-6.5t15 6.5t6.5 15t-6.5 15t-15 6.5m0-86q-8.5 0-15-6T309 80t6.5-15t15-6t15 6t6.5 15t-6.5 15t-15 6m-85 288q10.5 0 10.5 11t-10.5 11t-10.5-11t10.5-11M0 64l27-27l346 347l-27 27l-81-81q2 4 2 6q0 9-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t14.5-6q2 0 6 1l-60-60q-1 11-10 19t-21 8q-13 0-22.5-9.5T128 251q0-12 7.5-21t19.5-11l-60-60q1 4 1 6q0 9-6.5 15.5t-15 6.5t-15-6.5t-6.5-15t6.5-15T75 144l6 1zm160 251q9 0 15 6t6 15t-6 15t-15 6t-15-6t-6-15t6-15t15-6m234.5-75q10.5 0 10.5 10.5T394.5 261T384 250.5t10.5-10.5m-320-11q8.5 0 15 6.5t6.5 15t-6.5 15t-15 6.5t-15-6.5t-6.5-15t6.5-15t15-6.5m-64-74Q21 155 21 165.5T10.5 176T0 165.5T10.5 155M160 389q11 0 11 11t-11 11t-11-11t11-11m-85.5-74q8.5 0 15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6m-64-75Q21 240 21 250.5T10.5 261T0 250.5T10.5 240"></svg:path>`,
})
export class ZmdiBlurOffIcon {
  readonly viewBox = input("0 0 408 416")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBoatIcon],svg[zmdi-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 432h43v43h-43q-44 0-85-21q-41 20-86 20t-85-20q-42 21-85 21H0v-43h43q45 0 85-28q39 27 85.5 27t85.5-27q40 28 85 28M42 389L1 247q-3-8 1-17q4-8 13-10l28-9v-99q0-18 12.5-30.5T85 69h64V5h128v64h64q18 0 30.5 12.5T384 112v99l27 9q9 2 13 10t1 17l-40 142h-1q-48 0-85-42q-38 42-86 42t-85-42q-37 42-85 42zm43-277v85l128-42l128 42v-85z"></svg:path>`,
})
export class ZmdiBoatIcon {
  readonly viewBox = input("0 0 432 480")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBookIcon],svg[zmdi-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM43 45v171l53-32l53 32V45z"></svg:path>`,
})
export class ZmdiBookIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBookImageIcon],svg[zmdi-book-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM43 45v171l53-32l53 32V45zm0 320h256l-83-109l-64 82l-45-55z"></svg:path>`,
})
export class ZmdiBookImageIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBookmarkIcon],svg[zmdi-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q18 0 30.5 12.5T299 43v341l-150-64L0 384V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiBookmarkIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBookmarkOutlineIcon],svg[zmdi-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q18 0 30.5 12.5T299 43v341l-150-64L0 384V43q0-18 12.5-30.5T43 0zm0 320V43H43v277l106-47z"></svg:path>`,
})
export class ZmdiBookmarkOutlineIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderAllIcon],svg[zmdi-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h384v384H0zm171 341V213H43v128zm0-170V43H43v128zm170 170V213H213v128zm0-170V43H213v128z"></svg:path>`,
})
export class ZmdiBorderAllIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderBottomIcon],svg[zmdi-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 171v42H85v-42zm85 85v43h-42v-43zM128 0v43H85V0zm85 171v42h-42v-42zM43 0v43H0V0zm170 85v43h-42V85zm86 86v42h-43v-42zM213 0v43h-42V0zm86 0v43h-43V0zm42 213v-42h43v42zm0 86v-43h43v43zM43 85v43H0V85zM341 0h43v43h-43zm0 128V85h43v43zM43 171v42H0v-42zM0 384v-43h384v43zm43-128v43H0v-43z"></svg:path>`,
})
export class ZmdiBorderBottomIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderClearIcon],svg[zmdi-border-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 43V0h43v43zm0 170v-42h43v42zm0 171v-43h43v43zm86-85v-43h42v43zm0 85v-43h42v43zM0 384v-43h43v43zm0-85v-43h43v43zm0-86v-42h43v42zm0-85V85h43v43zm0-85V0h43v43zm171 170v-42h42v42zm170 86v-43h43v43zm0-86v-42h43v42zm0 171v-43h43v43zm0-256V85h43v43zm-170 0V85h42v43zM341 0h43v43h-43zM171 43V0h42v43zm85 341v-43h43v43zm0-171v-42h43v42zm0-170V0h43v43z"></svg:path>`,
})
export class ZmdiBorderClearIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderColorIcon],svg[zmdi-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M379 149L165 363H85v-80L299 69zm63-63l-42 42l-80-80l42-42q6-6 15-6t15 6l50 50q6 6 6 15t-6 15M0 427h512v85H0z"></svg:path>`,
})
export class ZmdiBorderColorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderHorizontalIcon],svg[zmdi-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h43v43zM43 85v43H0V85zM0 299v-43h43v43zm85 85v-43h43v43zM43 0v43H0V0zm85 0v43H85V0zm171 0v43h-43V0zm-86 85v43h-42V85zm0-85v43h-42V0zm128 299v-43h43v43zm-170 85v-43h42v43zM0 213v-42h384v42zM341 0h43v43h-43zm0 128V85h43v43zM171 299v-43h42v43zm85 85v-43h43v43zm85 0v-43h43v43z"></svg:path>`,
})
export class ZmdiBorderHorizontalIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderInnerIcon],svg[zmdi-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h43v43zm85 0v-43h43v43zM43 85v43H0V85zM0 299v-43h43v43zM128 0v43H85V0zM43 0v43H0V0zm256 0v43h-43V0zm42 128V85h43v43zm0-128h43v43h-43zm-85 384v-43h43v43zM213 0v171h171v42H213v171h-42V213H0v-42h171V0zm128 384v-43h43v43zm0-85v-43h43v43z"></svg:path>`,
})
export class ZmdiBorderInnerIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderLeftIcon],svg[zmdi-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 384v-43h42v43zm0-85v-43h42v43zm0-256V0h42v43zm0 85V85h42v43zm0 85v-42h42v42zM85 384v-43h43v43zm0-341V0h43v43zm0 170v-42h43v42zM0 384V0h43v384zm341-256V85h43v43zm-85 256v-43h43v43zm85-85v-43h43v43zm0-299h43v43h-43zm0 213v-42h43v42zm0 171v-43h43v43zm-85-171v-42h43v42zm0-170V0h43v43z"></svg:path>`,
})
export class ZmdiBorderLeftIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderOuterIcon],svg[zmdi-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 85v43h-42V85zm0 86v42h-42v-42zm86 0v42h-43v-42zM0 0h384v384H0zm341 341V43H43v298zm-128-85v43h-42v-43zm-85-85v42H85v-42z"></svg:path>`,
})
export class ZmdiBorderOuterIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderRightIcon],svg[zmdi-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 384v-43h43v43zM0 43V0h43v43zm85 0V0h43v43zm0 170v-42h43v42zM0 384v-43h43v43zm171 0v-43h42v43zM0 213v-42h43v42zm0 86v-43h43v43zm0-171V85h43v43zm171 171v-43h42v43zm85-86v-42h43v42zM341 0h43v384h-43zm-85 384v-43h43v43zm0-341V0h43v43zm-85 170v-42h42v42zm0-170V0h42v43zm0 85V85h42v43z"></svg:path>`,
})
export class ZmdiBorderRightIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderStyleIcon],svg[zmdi-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 384v-43h43v43zm85 0v-43h43v43zm-256 0v-43h43v43zm86 0v-43h42v43zm170-85v-43h43v43zm0-86v-42h43v42zM0 0h384v43H43v341H0zm341 128V85h43v43z"></svg:path>`,
})
export class ZmdiBorderStyleIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderTopIcon],svg[zmdi-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 384v-43h43v43zm0-171v-42h43v42zm86 0v-42h42v42zm0 171v-43h42v43zM0 299v-43h43v43zm0 85v-43h43v43zm0-171v-42h43v42zm0-85V85h43v43zm171 171v-43h42v43zm170-171V85h43v43zm0 85v-42h43v42zM0 0h384v43H0zm341 299v-43h43v43zm-85 85v-43h43v43zm-85-256V85h42v43zm170 256v-43h43v43zm-85-171v-42h43v42z"></svg:path>`,
})
export class ZmdiBorderTopIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderVerticalIcon],svg[zmdi-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V85h43v43zm0-85V0h43v43zm85 341v-43h43v43zm0-171v-42h43v42zm-85 0v-42h43v42zm0 171v-43h43v43zm0-85v-43h43v43zM85 43V0h43v43zm256 256v-43h43v43zm-170 85V0h42v384zm170 0v-43h43v43zm0-171v-42h43v42zm0-213h43v43h-43zm0 128V85h43v43zm-85-85V0h43v43zm0 341v-43h43v43zm0-171v-42h43v42z"></svg:path>`,
})
export class ZmdiBorderVerticalIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness2Icon],svg[zmdi-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 3q88 0 150.5 62.5T320 216t-62.5 150.5T107 429q-57 0-107-28q49-29 78-78t29-107t-29-107T0 31Q50 3 107 3"></svg:path>`,
})
export class ZmdiBrightness2Icon {
  readonly viewBox = input("0 0 320 432")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness3Icon],svg[zmdi-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 3q88 0 150.5 62.5T277 216t-62.5 150.5T64 429q-33 0-64-9q66-21 107.5-77T149 216T107.5 89T0 12q31-9 64-9"></svg:path>`,
})
export class ZmdiBrightness3Icon {
  readonly viewBox = input("0 0 280 432")
  readonly width = input("0.65em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness4Icon],svg[zmdi-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m412 177l71 71l-71 71v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100zM241 376q53 0 90.5-37.5T369 248t-37.5-90.5T241 120q-28 0-53 12q33 15 54 46.5t21 69.5t-21 69.5t-54 46.5q25 12 53 12"></svg:path>`,
})
export class ZmdiBrightness4Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness5Icon],svg[zmdi-brightness-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412 319v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100v100l71 71zm-171 57q53 0 90.5-37.5T369 248t-37.5-90.5T241 120t-90.5 37.5T113 248t37.5 90.5T241 376"></svg:path>`,
})
export class ZmdiBrightness5Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness6Icon],svg[zmdi-brightness-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412 319v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100v100l71 71zm-171 57q53 0 90.5-37.5T369 248t-37.5-90.5T241 120z"></svg:path>`,
})
export class ZmdiBrightness6Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightness7Icon],svg[zmdi-brightness-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m412 177l71 71l-71 71v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100zM241 376q53 0 90.5-37.5T369 248t-37.5-90.5T241 120t-90.5 37.5T113 248t37.5 90.5T241 376m.5-213q35.5 0 60.5 25t25 60t-25 60t-60.5 25t-60.5-25t-25-60t25-60t60.5-25"></svg:path>`,
})
export class ZmdiBrightness7Icon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightnessAutoIcon],svg[zmdi-brightness-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217 262l24-78l25 78zm195-85l71 71l-71 71v100H312l-71 70l-70-70H71V319L0 248l71-71V77h100l70-70l71 70h100zM290 333h41l-68-192h-43l-68 192h40l15-42h68z"></svg:path>`,
})
export class ZmdiBrightnessAutoIcon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrightnessSettingIcon],svg[zmdi-brightness-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300zm-278-65v-53l-32-32l32-32v-53h54l32-32l32 32h53v53l32 32l-32 32v53h-53l-32 32l-32-32zm86-149v128q26 0 45-18.5t19-45.5t-19-45.5t-45-18.5"></svg:path>`,
})
export class ZmdiBrightnessSettingIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrokenImageIcon],svg[zmdi-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 43v140l-64-64l-85 86l-86-86l-85 86l-64-65V43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43m-64 137l64 64v97q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V201l64 64l85-86l86 86z"></svg:path>`,
})
export class ZmdiBrokenImageIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBrushIcon],svg[zmdi-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.5 235q26.5 0 45.5 18.5t19 45.5q0 35-25 60t-61 25q-24 0-47-11.5T0 341q15 0 29-11.5T43 299q0-27 18.5-45.5t45-18.5M399 35q6 6 6 15t-6 15L208 256l-59-59L340 6q7-6 15.5-6T371 6z"></svg:path>`,
})
export class ZmdiBrushIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBugIcon],svg[zmdi-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 107v42h-44q2 13 2 22v21h42v43h-42v21q0 9-2 21h44v43h-60q-17 29-46 46.5T171 384t-64.5-17.5T60 320H0v-43h45q-2-12-2-21v-21H0v-43h43v-21q0-9 2-22H0v-42h60q15-26 39-42L64 30L94 0l47 46q14-3 29.5-3t30.5 3l46-46l30 30l-34 35q24 16 38 42zM213 277v-42h-85v42zm0-85v-43h-85v43z"></svg:path>`,
})
export class ZmdiBugIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiBusIcon],svg[zmdi-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 301V88q0-27 12.5-44.5t38-26t53-11.5t67-3t67 3t53 11.5t38 26T341 88v213q0 28-21 48v38q0 8-6.5 14.5T299 408h-22q-8 0-14.5-6.5T256 387v-22H85v22q0 8-6 14.5T64 408H43q-9 0-15.5-6.5T21 387v-38Q0 329 0 301m74.5 22q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5m192 0q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5M299 195V88H43v107z"></svg:path>`,
})
export class ZmdiBusIcon {
  readonly viewBox = input("0 0 344 408")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCakeIcon],svg[zmdi-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 128q-18 0-30.5-12.5T149 85q0-12 7-22l36-63l36 63q7 10 7 22q0 18-12.5 30.5T192 128m98 213q22 22 52 22q23 0 42-13v98q0 9-6.5 15t-14.5 6H21q-8 0-14.5-6T0 448v-98q19 13 42 13q30 0 52-22l23-23l23 23q21 21 52 21t52-21l23-23zm30-149q27 0 45.5 18.5T384 256v33q0 17-12.5 29.5T342 331t-29-12l-46-46l-46 46q-11 11-29 11t-30-11l-45-46l-46 46q-12 12-29 12t-29.5-12.5T0 289v-33q0-27 18.5-45.5T64 192h107v-43h42v43z"></svg:path>`,
})
export class ZmdiCakeIcon {
  readonly viewBox = input("0 0 384 472")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCalendarIcon],svg[zmdi-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 240v107H192V240zM277 5h43v43h21q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170zm64 384V155H43v234z"></svg:path>`,
})
export class ZmdiCalendarIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCalendarAltIcon],svg[zmdi-calendar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm0 341V155H43v234zM85 197h107v107H85z"></svg:path>`,
})
export class ZmdiCalendarAltIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCalendarCheckIcon],svg[zmdi-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M289 220L162 347l-68-68l23-23l45 45l104-104zm52-172q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm0 341V155H43v234z"></svg:path>`,
})
export class ZmdiCalendarCheckIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCalendarCloseIcon],svg[zmdi-calendar-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m135 347l-23-23l52-52l-52-52l23-23l52 52l52-52l22 23l-52 52l52 52l-22 23l-52-52zM341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm0 341V155H43v234z"></svg:path>`,
})
export class ZmdiCalendarCloseIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCalendarNoteIcon],svg[zmdi-calendar-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 197v43H85v-43zm42-149q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm0 341V155H43v234zM235 283v42H85v-42z"></svg:path>`,
})
export class ZmdiCalendarNoteIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraIcon],svg[zmdi-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145 216q0-68 68.5-68t68.5 68t-68.5 68t-68.5-68m4-213h128l39 42h68q18 0 30.5 12.5T427 88v256q0 18-12.5 30.5T384 387H43q-18 0-30.5-12.5T0 344V88q0-18 12.5-30.5T43 45h67zm64 320q44 0 75.5-31.5T320 216t-31.5-75.5T213 109t-75 31.5t-31 75.5t31 75.5t75 31.5"></svg:path>`,
})
export class ZmdiCameraIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraAddIcon],svg[zmdi-camera-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 0h128l39 43h68q18 0 30.5 12.5T427 85v256q0 18-12.5 30.5T384 384H43q-18 0-30.5-12.5T0 341V85q0-17 12.5-29.5T43 43h67zm64 320q44 0 75.5-31.5T320 213t-31.5-75t-75.5-31t-75 31t-31 75t31 75.5t75 31.5m0-21l-26-59l-59-27l59-26l26-59l27 59l59 26l-59 27z"></svg:path>`,
})
export class ZmdiCameraAddIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraAltIcon],svg[zmdi-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158 184l-1 2L79 51Q137 3 213 3q23 0 47 5zm259-32H211l78-135q46 17 79.5 52.5T417 152m5 21q5 22 5 43q0 83-57 144L269 184l-6-11zm-282 43l24 43H4q-4-22-4-43q0-82 56-144zM10 280h206l-78 135q-46-17-79.5-52.5T10 280m240 0l20-34l78 135q-59 48-135 48q-22 0-46-5z"></svg:path>`,
})
export class ZmdiCameraAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraBwIcon],svg[zmdi-camera-bw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 43q18 0 30.5 12.5T427 85v256q0 18-12.5 30.5T384 384H43q-18 0-30.5-12.5T0 341V85q0-17 12.5-29.5T43 43h68l38-43h128l39 43zm0 298V85H213v22q-44 0-75 31t-31 75.5t31 75.5t75 31v21zm-64-127.5q0 44.5-31 75.5t-76 31v-38q29 0 49-20t20-48.5t-20-48.5t-49-20v-38q45 0 76 31t31 75.5m-175 0q0-28.5 20-48.5t48-20v137q-28 0-48-20t-20-48.5"></svg:path>`,
})
export class ZmdiCameraBwIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraFrontIcon],svg[zmdi-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 427v-43l64 64l-64 64v-43H0v-42zm85 0h107v42H192zm-42.5-256q-17.5 0-30-12.5T107 128t12.5-30.5t30-12.5t30 12.5T192 128t-12.5 30.5t-30 12.5M256 0q18 0 30.5 12.5T299 43v298q0 18-12.5 30.5T256 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM43 43v224q0-24 36.5-39t70-15t70 15t36.5 39V43z"></svg:path>`,
})
export class ZmdiCameraFrontIcon {
  readonly viewBox = input("0 0 304 512")
  readonly width = input("0.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraMicIcon],svg[zmdi-camera-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 43q18 0 30.5 12.5T427 85v256q0 18-12.5 30.5T384 384H235v-45q45-7 75.5-43t30.5-83h-42q0 36-25 61t-60.5 25t-60.5-25t-25-61H85q0 47 30.5 83t76.5 43v45H43q-18 0-30.5-12.5T0 341V85q0-17 12.5-29.5T43 43h67l39-43h128l39 43zM256 213v-85q0-18-12.5-30.5t-30-12.5t-30 12.5T171 128v85q0 18 12.5 30.5t30 12.5t30-12.5T256 213"></svg:path>`,
})
export class ZmdiCameraMicIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraPartyModeIcon],svg[zmdi-camera-party-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 45q18 0 30.5 12.5T427 88v256q0 18-12.5 30.5T384 387H43q-18 0-30.5-12.5T0 344V88q0-18 12.5-30.5T43 45h67l39-42h128l39 42zm-171 64q-44 0-75 31.5T107 216q0 10 2 21h44q-4-10-4-21q0-27 19-45.5t45-18.5h85q-32-43-85-43m0 214q44 0 75.5-31.5T320 216q0-12-2-21h-45q4 10 4 21q0 27-18.5 45.5T213 280h-85q33 43 85 43"></svg:path>`,
})
export class ZmdiCameraPartyModeIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraRearIcon],svg[zmdi-camera-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 427v-43l64 64l-64 64v-43H0v-42zm85 0h107v42H192zM256 0q18 0 30.5 12.5T299 43v298q0 18-12.5 30.5T256 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM149.5 128q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5"></svg:path>`,
})
export class ZmdiCameraRearIcon {
  readonly viewBox = input("0 0 304 512")
  readonly width = input("0.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraRollIcon],svg[zmdi-camera-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 91h171v320H256q0 17-12.5 29.5T213 453H43q-18 0-30.5-12.5T0 411V91q0-18 12.5-30.5T43 48h21V27q0-9 6.5-15.5T85 5h86q8 0 14.5 6.5T192 27v21h21q18 0 30.5 12.5T256 91m-43 277v-43h-42v43zm0-192v-43h-42v43zm86 192v-43h-43v43zm0-192v-43h-43v43zm85 192v-43h-43v43zm0-192v-43h-43v43z"></svg:path>`,
})
export class ZmdiCameraRollIcon {
  readonly viewBox = input("0 0 432 456")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraSwitchIcon],svg[zmdi-camera-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 45q18 0 30.5 12.5T427 88v256q0 18-12.5 30.5T384 387H43q-18 0-30.5-12.5T0 344V88q0-18 12.5-30.5T43 45h67l39-42h128l39 42zM277 291l75-75l-75-75v54H149v-54l-74 75l74 75v-54h128z"></svg:path>`,
})
export class ZmdiCameraSwitchIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCarIcon],svg[zmdi-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m340 64l44 128v171q0 8-6.5 14.5T363 384h-22q-8 0-14.5-6.5T320 363v-22H64v22q0 8-6.5 14.5T43 384H21q-8 0-14.5-6.5T0 363V192L44 64q8-21 31-21h234q23 0 31 21M74.5 277q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9m235 0q13.5 0 22.5-9t9-22.5t-9-23t-22.5-9.5t-23 9.5t-9.5 23t9.5 22.5t23 9M43 171h298l-32-96H75z"></svg:path>`,
})
export class ZmdiCarIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCarTaxiIcon],svg[zmdi-car-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m340 64l44 128v171q0 8-6.5 14.5T363 384h-22q-8 0-14.5-6.5T320 363v-22H64v22q0 8-6.5 14.5T43 384H21q-8 0-14.5-6.5T0 363V192L44 64q8-21 31-21h53V0h128v43h53q23 0 31 21M74.5 277q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9m235 0q13.5 0 22.5-9t9-22.5t-9-23t-22.5-9.5t-23 9.5t-9.5 23t9.5 22.5t23 9M43 171h298l-32-96H75z"></svg:path>`,
})
export class ZmdiCarTaxiIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCarWashIcon],svg[zmdi-car-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.5 91Q285 91 276 81.5T267 59q0-10 8-24.5T291 11l8-10q32 36 32 58q0 13-9.5 22.5t-23 9.5M192 91q-13 0-22.5-9.5T160 59q0-10 8-24.5T184 11l8-10q32 36 32 58q0 13-9.5 22.5T192 91M85.5 91q-13.5 0-23-9.5T53 59q0-10 8-24.5T77 11l8-10q32 36 32 58q0 13-9 22.5T85.5 91M340 155l44 128v170q0 9-6.5 15.5T363 475h-22q-8 0-14.5-6.5T320 453v-21H64v21q0 9-6.5 15.5T43 475H21q-8 0-14.5-6.5T0 453V283l44-128q8-22 31-22h234q23 0 31 22M74.5 368q13.5 0 23-9.5T107 336t-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5t9 22.5t22.5 9.5m235 0q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T277 336t9.5 22.5t23 9.5M43 261h298l-32-96H75z"></svg:path>`,
})
export class ZmdiCarWashIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardIcon],svg[zmdi-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V192H43v128zm0-213V64H43v43z"></svg:path>`,
})
export class ZmdiCardIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardAlertIcon],svg[zmdi-card-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V131L128 3zM192 323v-43h-43v43zm0-86V131h-43v106z"></svg:path>`,
})
export class ZmdiCardAlertIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardGiftcardIcon],svg[zmdi-card-giftcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 88q18 0 30.5 12.5T427 131v234q0 18-12.5 30.5T384 408H43q-18 0-30.5-12.5T0 365V131q0-18 12.5-30.5T43 88h46q-4-11-4-21q0-27 19-45.5T149 3q34 0 54 28l10 15l11-15q19-28 53-28q27 0 45.5 18.5T341 67q0 10-4 21zM277.5 45q-8.5 0-15 6.5t-6.5 15t6.5 15t15 6.5t15-6.5t6.5-15t-6.5-15t-15-6.5m-128 0q-8.5 0-15 6.5t-6.5 15t6.5 15t15 6.5t15-6.5t6.5-15t-6.5-15t-15-6.5M384 365v-42H43v42zm0-106V131H276l44 60l-35 25l-50-69l-22-29l-21 29l-51 69l-34-25l44-60H43v128z"></svg:path>`,
})
export class ZmdiCardGiftcardIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardMembershipIcon],svg[zmdi-card-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v235q0 18-12.5 30.5T384 323h-85v106l-86-42l-85 42V323H43q-18 0-30.5-12.5T0 280V45q0-17 12.5-29.5T43 3zm0 277v-43H43v43zm0-107V45H43v128z"></svg:path>`,
})
export class ZmdiCardMembershipIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardOffIcon],svg[zmdi-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m354 43l1 249L113 50l50-50h149q17 0 29.5 12.5T354 43M27 19l373 372l-27 28l-40-41q-10 6-21 6H99q-18 0-30.5-12.5T56 341V102L0 46z"></svg:path>`,
})
export class ZmdiCardOffIcon {
  readonly viewBox = input("0 0 400 424")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardSdIcon],svg[zmdi-card-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V131L128 3zM171 131V45h-43v86zm64 0V45h-43v86zm64 0V45h-43v86z"></svg:path>`,
})
export class ZmdiCardSdIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardSimIcon],svg[zmdi-card-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V131L128 3h171q17 0 29.5 12.5T341 45M107 365v-42H64v42zm170 0v-42h-42v42zm-170-85v-85H64v85zm85 85v-85h-43v85zm0-128v-42h-43v42zm85 43v-85h-42v85z"></svg:path>`,
})
export class ZmdiCardSimIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCardTravelIcon],svg[zmdi-card-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 88q18 0 30.5 12.5T427 131v234q0 18-12.5 30.5T384 408H43q-18 0-30.5-12.5T0 365V131q0-18 12.5-30.5T43 88h64V45q0-17 12.5-29.5T149 3h128q18 0 30.5 12.5T320 45v43zM149 45v43h128V45zm235 320v-42H43v42zm0-106V131h-64v42h-43v-42H149v42h-42v-42H43v128z"></svg:path>`,
})
export class ZmdiCardTravelIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretDownIcon],svg[zmdi-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 139h213L107 245z"></svg:path>`,
})
export class ZmdiCaretDownIcon {
  readonly viewBox = input("0 0 216 384")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretDownCircleIcon],svg[zmdi-caret-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M107 173l106 107l107-107z"></svg:path>`,
})
export class ZmdiCaretDownCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretLeftIcon],svg[zmdi-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 85v214L0 192z"></svg:path>`,
})
export class ZmdiCaretLeftIcon {
  readonly viewBox = input("0 0 112 384")
  readonly width = input("0.3em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretLeftCircleIcon],svg[zmdi-caret-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M256 109L149 216l107 107z"></svg:path>`,
})
export class ZmdiCaretLeftCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretRightIcon],svg[zmdi-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299V85l107 107z"></svg:path>`,
})
export class ZmdiCaretRightIcon {
  readonly viewBox = input("0 0 112 384")
  readonly width = input("0.3em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretRightCircleIcon],svg[zmdi-caret-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M171 109v214l106-107z"></svg:path>`,
})
export class ZmdiCaretRightCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretUpIcon],svg[zmdi-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 245H0l107-106z"></svg:path>`,
})
export class ZmdiCaretUpIcon {
  readonly viewBox = input("0 0 216 384")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretUpCircleIcon],svg[zmdi-caret-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m-.5 145L107 254h213z"></svg:path>`,
})
export class ZmdiCaretUpCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaseIcon],svg[zmdi-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 88q18 0 30.5 12.5T427 131v234q0 18-12.5 30.5T384 408H43q-18 0-30.5-12.5T0 365V131q0-18 12.5-30.5T43 88h85V45q0-17 12.5-29.5T171 3h85q18 0 30.5 12.5T299 45v43zm-128 0V45h-85v43z"></svg:path>`,
})
export class ZmdiCaseIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaseCheckIcon],svg[zmdi-case-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 91q18 0 30.5 12.5T427 133v235q0 18-12.5 30.5T384 411H43q-18 0-30.5-12.5T0 368V133q0-17 12.5-29.5T43 91h85V48l43-43h85l43 43v43zM171 48v43h85V48zm10 288l141-141l-30-30l-111 111l-44-45l-30 30z"></svg:path>`,
})
export class ZmdiCaseCheckIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCaseDownloadIcon],svg[zmdi-case-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 91q18 0 30.5 12.5T427 133v235q0 18-12.5 30.5T384 411H43q-18 0-30.5-12.5T0 368V133q0-17 12.5-29.5T43 91h85V48l43-43h85l43 43v43zM171 48v43h85V48zm42 320l107-107h-64v-85h-85v85h-64z"></svg:path>`,
})
export class ZmdiCaseDownloadIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCasePlayIcon],svg[zmdi-case-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 88h128v277q0 18-12.5 30.5T384 408H43q-18 0-30.5-12.5T0 365V88h128V45q0-17 12.5-29.5T171 3h85q18 0 30.5 12.5T299 45zM171 45v43h85V45zm-22 299l160-107l-160-85z"></svg:path>`,
})
export class ZmdiCasePlayIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCastIcon],svg[zmdi-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H277v-43h150V43H43v64H0V43q0-18 12.5-30.5T43 0zM0 320q27 0 45.5 18.5T64 384H0zm0-85q62 0 105.5 43.5T149 384h-42q0-44-31.5-75.5T0 277zm0-86q97 0 166 69t69 166h-43q0-80-56-136T0 192z"></svg:path>`,
})
export class ZmdiCastIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCastConnectedIcon],svg[zmdi-cast-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320q27 0 45.5 18.5T64 384H0zm0-85q62 0 105.5 43.5T149 384h-42q0-44-31.5-75.5T0 277zM384 85v214H264q-21-64-68-111T85 120V85zM0 149q97 0 166 69t69 166h-43q0-80-56-136T0 192zM427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H277v-43h150V43H43v64H0V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiCastConnectedIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCenterFocusStrongIcon],svg[zmdi-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 107q35 0 60 25t25 60t-25 60t-60 25t-60-25t-25-60t25-60t60-25M43 256v85h85v43H43q-18 0-30.5-12.5T0 341v-85zm0-213v85H0V43q0-18 12.5-30.5T43 0h85v43zM341 0q18 0 30.5 12.5T384 43v85h-43V43h-85V0zm0 341v-85h43v85q0 18-12.5 30.5T341 384h-85v-43z"></svg:path>`,
})
export class ZmdiCenterFocusStrongIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCenterFocusWeakIcon],svg[zmdi-center-focus-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 256v85h85v43H43q-18 0-30.5-12.5T0 341v-85zm0-213v85H0V43q0-18 12.5-30.5T43 0h85v43zM341 0q18 0 30.5 12.5T384 43v85h-43V43h-85V0zm0 341v-85h43v85q0 18-12.5 30.5T341 384h-85v-43zM192 107q35 0 60 25t25 60t-25 60t-60 25t-60-25t-25-60t25-60t60-25m0 128q18 0 30.5-12.5T235 192t-12.5-30.5T192 149t-30.5 12.5T149 192t12.5 30.5T192 235"></svg:path>`,
})
export class ZmdiCenterFocusWeakIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiChartIcon],svg[zmdi-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM128 299V149H85v150zm85 0V85h-42v214zm86 0v-86h-43v86z"></svg:path>`,
})
export class ZmdiChartIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiChartDonutIcon],svg[zmdi-chart-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 4q81 8 136.5 68.5T427 216q0 45-19 87l-56-33q11-27 11-54q0-56-37-98t-91-50zm-22 361q72 0 117-56l55 33q-30 41-75 64t-97 23q-88 0-150.5-62.5T0 216q0-83 55.5-143.5T192 4v64q-55 8-91.5 50T64 216q0 62 43.5 105.5T213 365"></svg:path>`,
})
export class ZmdiChartDonutIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckIcon],svg[zmdi-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119 282L346 55l29 30l-256 256L0 222l30-30z"></svg:path>`,
})
export class ZmdiCheckIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckAllIcon],svg[zmdi-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M375 85L240 221l-30-30L345 55zm91-30l30 30l-256 256l-119-119l30-30l89 89zM0 222l30-30l119 119l-30 30z"></svg:path>`,
})
export class ZmdiCheckAllIcon {
  readonly viewBox = input("0 0 496 384")
  readonly width = input("1.3em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckCircleIcon],svg[zmdi-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M171 323l192-192l-30-31l-162 162l-77-76l-30 30z"></svg:path>`,
})
export class ZmdiCheckCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckCircleUIcon],svg[zmdi-check-circle-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 3q88 0 151 62.5T427 216t-63 150.5T213 429T62.5 366.5T0 216T62.5 65.5T213 3m107 341v-43H107v43zm-143-85l143-143l-30-30l-113 113l-40-41l-30 30z"></svg:path>`,
})
export class ZmdiCheckCircleUIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckSquareIcon],svg[zmdi-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM149 299l192-192l-30-31l-162 162l-76-76l-30 30z"></svg:path>`,
})
export class ZmdiCheckSquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronDownIcon],svg[zmdi-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226 119l30 30l-128 128L0 149l30-30l98 98z"></svg:path>`,
})
export class ZmdiChevronDownIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronLeftIcon],svg[zmdi-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158 94l-98 98l98 98l-30 30L0 192L128 64z"></svg:path>`,
})
export class ZmdiChevronLeftIcon {
  readonly viewBox = input("0 0 160 384")
  readonly width = input("0.42em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronRightIcon],svg[zmdi-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 64l128 128L30 320L0 290l98-98L0 94z"></svg:path>`,
})
export class ZmdiChevronRightIcon {
  readonly viewBox = input("0 0 160 384")
  readonly width = input("0.42em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronUpIcon],svg[zmdi-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128 107l128 128l-30 30l-98-98l-98 98l-30-30z"></svg:path>`,
})
export class ZmdiChevronUpIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCircleIcon],svg[zmdi-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3"></svg:path>`,
})
export class ZmdiCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCircleOIcon],svg[zmdi-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiCircleOIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCityIcon],svg[zmdi-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 195h128v213H0V109h128V67l64-64l64 64zM85 365v-42H43v42zm0-85v-43H43v43zm0-85v-43H43v43zm128 170v-42h-42v42zm0-85v-43h-42v43zm0-85v-43h-42v43zm0-86V67h-42v42zm128 256v-42h-42v42zm0-85v-43h-42v43z"></svg:path>`,
})
export class ZmdiCityIcon {
  readonly viewBox = input("0 0 384 408")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCityAltIcon],svg[zmdi-city-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 85h214v299H0V0h213zM85 341v-42H43v42zm0-85v-43H43v43zm0-85v-43H43v43zm0-86V43H43v42zm86 256v-42h-43v42zm0-85v-43h-43v43zm0-85v-43h-43v43zm0-86V43h-43v42zm213 256V128H213v43h43v42h-43v43h43v43h-43v42zm-43-170v42h-42v-42zm0 85v43h-42v-43z"></svg:path>`,
})
export class ZmdiCityAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloseIcon],svg[zmdi-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 73L179 192l120 119l-30 30l-120-119L30 341L0 311l119-119L0 73l30-30l119 119L269 43z"></svg:path>`,
})
export class ZmdiCloseIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloseCircleIcon],svg[zmdi-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M320 293l-77-77l77-77l-30-30l-77 77l-76-77l-30 30l76 77l-76 77l30 30l76-77l77 77z"></svg:path>`,
})
export class ZmdiCloseCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloseCircleOIcon],svg[zmdi-close-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m269 131l30 30l-56 55l56 55l-30 30l-56-55l-55 55l-30-30l55-55l-55-55l30-30l55 55zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiCloseCircleOIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiClosedCaptionIcon],svg[zmdi-closed-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21q18 0 30.5 12.5T384 64v256q0 18-12.5 30.5T341 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM171 171v-22q0-8-6.5-14.5T149 128H85q-8 0-14.5 6.5T64 149v86q0 8 6.5 14.5T85 256h64q9 0 15.5-6.5T171 235v-22h-32v11H96v-64h43v11zm149 0v-22q0-8-6.5-14.5T299 128h-64q-9 0-15.5 6.5T213 149v86q0 8 6.5 14.5T235 256h64q8 0 14.5-6.5T320 235v-22h-32v11h-43v-64h43v11z"></svg:path>`,
})
export class ZmdiClosedCaptionIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudIcon],svg[zmdi-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92"></svg:path>`,
})
export class ZmdiCloudIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudBoxIcon],svg[zmdi-cloud-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 277q-27 0-45.5-18.5T107 213q0-24 16.5-42.5T164 150h3q9-20 27.5-31.5T235 107q28 0 48.5 18t24.5 46h1q22 0 38 15.5t16 37.5t-16 37.5t-38 15.5zM427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300z"></svg:path>`,
})
export class ZmdiCloudBoxIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudCircleIcon],svg[zmdi-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M309 301q22 0 38-15.5t16-37.5t-16-37.5t-38-15.5h-10q0-36-25-61t-61-25q-29 0-52 18.5T131 174l-3-1q-27 0-45.5 19T64 237.5t18.5 45T128 301z"></svg:path>`,
})
export class ZmdiCloudCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudDoneIcon],svg[zmdi-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92M213 299l141-141l-30-30l-111 110l-44-44l-30 30z"></svg:path>`,
})
export class ZmdiCloudDoneIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudDownloadIcon],svg[zmdi-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92m-50 63h-64v-85h-86v85h-64l107 107z"></svg:path>`,
})
export class ZmdiCloudDownloadIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudOffIcon],svg[zmdi-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 55-45 87l-31-31q33-19 33-56q0-27-18.5-45.5T405 192h-32v-11q0-48-34-82.5T256 64q-29 0-54 13l-32-31q40-25 86-25q58 0 102 37t55 92M64 48l27-27l357 357l-27 27l-43-42H128q-53 0-90.5-37.5T0 235q0-52 35.5-89t87.5-39zm101 101h-37q-35 0-60 25t-25 60.5T68 295t60 25h208z"></svg:path>`,
})
export class ZmdiCloudOffIcon {
  readonly viewBox = input("0 0 512 408")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudOutlineIcon],svg[zmdi-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92m-8 170q27 0 45.5-18.5T469 256t-18.5-45.5T405 192h-32v-11q0-48-34-82.5T256 64q-40 0-71 24t-42 61h-15q-35 0-60 25t-25 60.5T68 295t60 25z"></svg:path>`,
})
export class ZmdiCloudOutlineIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudOutlineAltIcon],svg[zmdi-cloud-outline-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q21-40 59-63.5T256 21q58 0 102 37t55 92m-8 170q27 0 45.5-19t18.5-45t-18.5-45t-45.5-19h-32v-11q0-48-34.5-82.5T256 64q-58 0-94 47q41 12 67.5 46t26.5 78h-43q0-36-25-61t-60-25t-60 25t-25 60.5T68 295t60 25z"></svg:path>`,
})
export class ZmdiCloudOutlineAltIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudUploadIcon],svg[zmdi-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92m-114 63h64L256 107L149 213h64v86h86z"></svg:path>`,
})
export class ZmdiCloudUploadIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCocktailIcon],svg[zmdi-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 213L0 43V0h384v43L213 213v128h107v43H64v-43h107zM96 85h192l43-42H53z"></svg:path>`,
})
export class ZmdiCocktailIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCodeIcon],svg[zmdi-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158 290l-30 30L0 192L128 64l30 30l-98 98zm111 0l98-98l-98-98l30-30l128 128l-128 128z"></svg:path>`,
})
export class ZmdiCodeIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCodeSettingIcon],svg[zmdi-code-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 80L55 192l93 112l-33 27L0 192L115 53zm-16 133v-42h43v42zm213-42v42h-42v-42zm-128 42v-42h43v42zM362 53l115 139l-115 139l-33-27l93-112l-93-112z"></svg:path>`,
})
export class ZmdiCodeSettingIcon {
  readonly viewBox = input("0 0 480 384")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCodeSmartphoneIcon],svg[zmdi-code-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 91v42H21V48q0-18 12.5-30.5T64 5l213 1q18 0 30.5 12T320 48v85h-43V91zm179 247l-30-30l68-68l-68-68l30-30l98 98zm-115-30l-30 30l-98-98l98-98l30 30l-68 68zm149 81v-42h43v85q0 18-12.5 30.5T277 475H64q-18 0-30.5-12.5T21 432v-85h43v42z"></svg:path>`,
})
export class ZmdiCodeSmartphoneIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCodepenIcon],svg[zmdi-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M390 247v-62l-46 31zM232 377l143-96l-64-43l-79 53zm-19-118l65-43l-65-43l-65 43zm-18 118v-86l-80-53l-64 43zM37 185v62l46-31zM195 55L51 151l64 43l80-53zm37 0v86l79 53l64-43zm195 94v135q0 1-1 2v1q-1 0-1 1v1l-1 1v1l-.5.5l-.5.5q0 1-1 1l-1 1l-1 1l-1 1l-195 130q-5 3-10.5 3t-10.5-3L8 296H7v-1l-1-.5l-1-.5v-1H4v-1l-1-1v-1H2v-1l-1-1v-2q-1-1-1-2V148q0-1 1-2v-2l1-1v-1l1-1l.5-.5l.5-.5v-1q1 0 1-.5v-.5h.5l.5-1h1l1-1L203 6q10-7 21 0l195 130l1 1h1v1q1 0 1 1q1 0 1 .5v.5l1 1v1q1 0 1 1v1l1 1v1q1 1 1 2z"></svg:path>`,
})
export class ZmdiCodepenIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCoffeeIcon],svg[zmdi-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0q18 0 30.5 12.5T427 43v64q0 17-12.5 29.5T384 149h-43v64q0 36-25 61t-60 25H128q-35 0-60-25t-25-61V0zm0 107V43h-43v64zM0 384v-43h384v43z"></svg:path>`,
})
export class ZmdiCoffeeIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionBookmarkIcon],svg[zmdi-collection-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88zM384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zm0 213V45H277v171l54-32z"></svg:path>`,
})
export class ZmdiCollectionBookmarkIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionCasePlayIcon],svg[zmdi-collection-case-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 176v235h341q0 17-12.5 29.5T341 453H43q-18 0-30.5-12.5T0 411V176zm320-85h106v234q0 18-12.5 30.5T427 368H128q-18 0-30.5-12.5T85 325V91h107V48q0-18 12.5-30.5T235 5h85q18 0 30.5 12.5T363 48zM235 48v43h85V48zm0 256l117-85l-117-64z"></svg:path>`,
})
export class ZmdiCollectionCasePlayIcon {
  readonly viewBox = input("0 0 472 456")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionFolderImageIcon],svg[zmdi-collection-folder-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 88v299h384v42H43q-18 0-30.5-12.5T0 387V88zm426-43q18 0 30.5 12.5T512 88v213q0 18-12.5 30.5T469 344H128q-18 0-30.5-12.5T85 301l1-256q0-17 12-29.5T128 3h128l43 42zM149 280h299l-75-96l-53 64l-75-96z"></svg:path>`,
})
export class ZmdiCollectionFolderImageIcon {
  readonly viewBox = input("0 0 512 432")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionImageIcon],svg[zmdi-collection-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 301q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3h256q18 0 30.5 12.5T427 45zm-235-85l-64 85h256l-85-106l-64 79zM0 88h43v299h298v42H43q-18 0-30.5-12.5T0 387z"></svg:path>`,
})
export class ZmdiCollectionImageIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionImageOIcon],svg[zmdi-collection-image-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m319 204l76 100H160l59-75l41 50zM43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299z"></svg:path>`,
})
export class ZmdiCollectionImageOIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItemIcon],svg[zmdi-collection-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299z"></svg:path>`,
})
export class ZmdiCollectionItemIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem1Icon],svg[zmdi-collection-item-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zm234 213V133h-42V91h85v213zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299z"></svg:path>`,
})
export class ZmdiCollectionItem1Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem2Icon],svg[zmdi-collection-item-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zm-86-86v43H213v-85q0-18 12.5-30.5T256 176h43v-43h-86V91h86q17 0 29.5 12.5T341 133v43q0 18-12.5 30.5T299 219h-43v42z"></svg:path>`,
})
export class ZmdiCollectionItem2Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem3Icon],svg[zmdi-collection-item-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zM43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zm298 170q0 18-12.5 30.5T299 304h-86v-43h86v-42h-43v-43h43v-43h-86V91h86q17 0 29.5 12.5T341 133v32q0 14-9 23t-23 9q14 0 23 9.5t9 22.5z"></svg:path>`,
})
export class ZmdiCollectionItem3Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem4Icon],svg[zmdi-collection-item-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zm256 213v-85h-86V91h43v85h43V91h42v213zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299z"></svg:path>`,
})
export class ZmdiCollectionItem4Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem5Icon],svg[zmdi-collection-item-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zM43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zm298 170q0 18-12.5 30.5T299 304h-86v-43h86v-42h-86V91h128v42h-85v43h43q17 0 29.5 12.5T341 219z"></svg:path>`,
})
export class ZmdiCollectionItem5Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem6Icon],svg[zmdi-collection-item-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zm-171-43q-18 0-30.5-12.5T213 261V133q0-17 12.5-29.5T256 91h85v42h-85v43h43q17 0 29.5 12.5T341 219v42q0 18-12.5 30.5T299 304zm0-85v42h43v-42z"></svg:path>`,
})
export class ZmdiCollectionItem6Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem7Icon],svg[zmdi-collection-item-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zm-171-43h-43l86-171h-86V91h128v42z"></svg:path>`,
})
export class ZmdiCollectionItem7Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem8Icon],svg[zmdi-collection-item-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zm-171-43q-18 0-30.5-12.5T213 261v-32q0-13 9.5-22.5T245 197q-13 0-22.5-9t-9.5-23v-32q0-17 12.5-29.5T256 91h43q17 0 29.5 12.5T341 133v32q0 14-9 23t-23 9q14 0 23 9.5t9 22.5v32q0 18-12.5 30.5T299 304zm0-171v43h43v-43zm0 86v42h43v-42z"></svg:path>`,
})
export class ZmdiCollectionItem8Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem9Icon],svg[zmdi-collection-item-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 342V48H128v299zM299 91q17 0 29.5 12.5T341 133v128q0 18-12.5 30.5T299 304h-86v-43h86v-42h-43q-18 0-30.5-12.5T213 176v-43q0-17 12.5-29.5T256 91zm0 85v-43h-43v43z"></svg:path>`,
})
export class ZmdiCollectionItem9Icon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionItem9PlusIcon],svg[zmdi-collection-item-9-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 91v341h341v43H43q-18 0-30.5-12.5T0 432V91zm234 149q0 18-12.5 30.5T235 283h-64v-43h64v-21h-22q-17 0-29.5-12.5T171 176v-21q0-18 12.5-30.5T213 112h22q17 0 29.5 12.5T277 155zm-64-64h22v-21h-22zM427 5q17 0 29.5 12.5T469 48v299q0 17-12.5 29.5T427 389H128q-18 0-30.5-12.5T85 347V48q0-18 12.5-30.5T128 5zm0 171V48H128v299h299V219h-43v42h-43v-42h-42v-43h42v-43h43v43z"></svg:path>`,
})
export class ZmdiCollectionItem9PlusIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionMusicIcon],svg[zmdi-collection-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zm-43 106V67h-85v117q-14-11-32-11q-22 0-37.5 16T171 227t15.5 37.5T224 280t37.5-15.5T277 227V109zM43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88z"></svg:path>`,
})
export class ZmdiCollectionMusicIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionPdfIcon],svg[zmdi-collection-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zM203 163v-22q0-13-9.5-22.5T171 109h-54v128h32v-42h22q13 0 22.5-9.5T203 163m106 42v-64q0-13-9-22.5t-23-9.5h-53v128h53q14 0 23-9t9-23m86-64v-32h-64v128h32v-42h32v-32h-32v-22zm-246 22v-22h22v22zM43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88zm213 117v-64h21v64z"></svg:path>`,
})
export class ZmdiCollectionPdfIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionPlusIcon],svg[zmdi-collection-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88zM384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zm-21 192v-43h-86V67h-42v85h-86v43h86v85h42v-85z"></svg:path>`,
})
export class ZmdiCollectionPlusIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionSpeakerIcon],svg[zmdi-collection-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M303 5q16 0 27 11.5T341 44v307q0 16-11 27t-27 11H124q-16 0-27.5-11T85 351V44q0-16 11.5-27.5T124 5zm-89.5 43q-17.5 0-30 12.5t-12.5 30t12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5m0 288q35.5 0 60.5-25t25-60.5t-25-60.5t-60.5-25t-60.5 25t-25 60.5t25 60.5t60.5 25M160 250.5q0-53.5 53.5-53.5t53.5 53.5t-53.5 53.5t-53.5-53.5M43 91v341h213v43H43q-18 0-30.5-12.5T0 432V91z"></svg:path>`,
})
export class ZmdiCollectionSpeakerIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionTextIcon],svg[zmdi-collection-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88zM384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zm-21 192v-43H149v43zm-86 85v-43H149v43zm86-171V67H149v42z"></svg:path>`,
})
export class ZmdiCollectionTextIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionVideoIcon],svg[zmdi-collection-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88zM384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zM213 269l128-96l-128-96z"></svg:path>`,
})
export class ZmdiCollectionVideoIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentIcon],svg[zmdi-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3z"></svg:path>`,
})
export class ZmdiCommentIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentAlertIcon],svg[zmdi-comment-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM235 259v-43h-43v43zm0-86V88h-43v85z"></svg:path>`,
})
export class ZmdiCommentAlertIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentAltIcon],svg[zmdi-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426 45l1 384l-86-85H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3h341q18 0 30 12.5T426 45"></svg:path>`,
})
export class ZmdiCommentAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentAltTextIcon],svg[zmdi-comment-alt-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v384l-86-85H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3zm-43 256v-43H85v43zm0-64v-43H85v43zm0-64V88H85v43z"></svg:path>`,
})
export class ZmdiCommentAltTextIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentEditIcon],svg[zmdi-comment-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM85 259h53l147-147q8-7 0-15l-38-38q-7-7-15 0L85 206zm256 0v-43H224l-43 43z"></svg:path>`,
})
export class ZmdiCommentEditIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentImageIcon],svg[zmdi-comment-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM64 259h299l-96-128l-75 96l-53-64z"></svg:path>`,
})
export class ZmdiCommentImageIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentListIcon],svg[zmdi-comment-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM128 259v-43H85v43zm0-64v-43H85v43zm0-64V88H85v43zm149 128v-43H171v43zm64-64v-43H171v43zm0-64V88H171v43z"></svg:path>`,
})
export class ZmdiCommentListIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentMoreIcon],svg[zmdi-comment-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM149 195v-43h-42v43zm86 0v-43h-43v43zm85 0v-43h-43v43z"></svg:path>`,
})
export class ZmdiCommentMoreIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentOutlineIcon],svg[zmdi-comment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zm0 298V45H43v299l42-43z"></svg:path>`,
})
export class ZmdiCommentOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentTextIcon],svg[zmdi-comment-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zm-43 256v-43H85v43zm0-64v-43H85v43zm0-64V88H85v43z"></svg:path>`,
})
export class ZmdiCommentTextIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentTextAltIcon],svg[zmdi-comment-text-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM85 152v43h256v-43zm171 107v-43H85v43zm85-128V88H85v43z"></svg:path>`,
})
export class ZmdiCommentTextAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentVideoIcon],svg[zmdi-comment-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zm-43 256V88l-85 68V88H85v171h171v-69z"></svg:path>`,
})
export class ZmdiCommentVideoIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentsIcon],svg[zmdi-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405 88q9 0 15.5 6.5T427 109v320l-86-85H107q-9 0-15.5-6.5T85 323v-43h278V88zm-85 128q0 9-6.5 15t-14.5 6H85L0 323V24q0-9 6.5-15T21 3h278q8 0 14.5 6t6.5 15z"></svg:path>`,
})
export class ZmdiCommentsIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCompareIcon],svg[zmdi-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 48V5h43v470h-43v-43H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48zm0 320V240L43 368zM341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H235V240l106 128V91H235V48z"></svg:path>`,
})
export class ZmdiCompareIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCompassIcon],svg[zmdi-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 193q9.5 0 16.5 6.5t7 16.5t-7 16.5t-16.5 6.5t-16.5-6.5t-7-16.5t7-16.5t16.5-6.5m0-190q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M260 263l81-175l-174 81l-82 175z"></svg:path>`,
})
export class ZmdiCompassIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiConfirmationNumberIcon],svg[zmdi-confirmation-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 149q-18 0-30.5 12.5T384 192t12.5 30.5T427 235v85q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320v-85q18 0 30.5-12.5T43 192t-12.5-30.5T0 149V64q0-18 12.5-30.5T43 21h341q18 0 30.5 12.5T427 64zM235 309v-42h-43v42zm0-96v-42h-43v42zm0-96V75h-43v42z"></svg:path>`,
})
export class ZmdiConfirmationNumberIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCopyIcon],svg[zmdi-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 5v43H43v299H0V48q0-18 12.5-30.5T43 5zm64 86q17 0 29.5 12.5T405 133v299q0 18-12.5 30.5T363 475H128q-18 0-30.5-12.5T85 432V133q0-17 12.5-29.5T128 91zm0 341V133H128v299z"></svg:path>`,
})
export class ZmdiCopyIcon {
  readonly viewBox = input("0 0 408 480")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCropIcon],svg[zmdi-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 304V133H171V91h170q18 0 30.5 12.5T384 133v171zm-213 43h341v42h-85v86h-43v-86H128q-18 0-30.5-12.5T85 347V133H0V91h85V5h43z"></svg:path>`,
})
export class ZmdiCropIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop169Icon],svg[zmdi-crop-16-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 64q18 0 30.5 12.5T384 107v170q0 18-12.5 30.5T341 320H43q-18 0-30.5-12.5T0 277V107q0-18 12.5-30.5T43 64zm0 213V107H43v170z"></svg:path>`,
})
export class ZmdiCrop169Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop32Icon],svg[zmdi-crop-3-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21q18 0 30.5 12.5T384 64v256q0 18-12.5 30.5T341 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiCrop32Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop54Icon],svg[zmdi-crop-5-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 43q18 0 30.5 12.5T384 85v214q0 17-12.5 29.5T341 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43zm0 256V85H43v214z"></svg:path>`,
})
export class ZmdiCrop54Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop75Icon],svg[zmdi-crop-7-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 85q18 0 30.5 12.5T384 128v128q0 18-12.5 30.5T341 299H43q-18 0-30.5-12.5T0 256V128q0-18 12.5-30.5T43 85zm0 171V128H43v128z"></svg:path>`,
})
export class ZmdiCrop75Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCropDinIcon],svg[zmdi-crop-din-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H43v298z"></svg:path>`,
})
export class ZmdiCropDinIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCropFreeIcon],svg[zmdi-crop-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 43q0-18 12.5-30.5T43 0h85v43H43v85H0zm43 213v85h85v43H43q-18 0-30.5-12.5T0 341v-85zm298 85v-85h43v85q0 18-12.5 30.5T341 384h-85v-43zm0-341q18 0 30.5 12.5T384 43v85h-43V43h-85V0z"></svg:path>`,
})
export class ZmdiCropFreeIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCropLandscapeIcon],svg[zmdi-crop-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 43q18 0 30.5 12.5T384 85v214q0 17-12.5 29.5T341 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43zm0 256V85H43v214z"></svg:path>`,
})
export class ZmdiCropLandscapeIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCropPortraitIcon],svg[zmdi-crop-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q18 0 30.5 12.5T299 43v298q0 18-12.5 30.5T256 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H43v298z"></svg:path>`,
})
export class ZmdiCropPortraitIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCropSquareIcon],svg[zmdi-crop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 21q17 0 29.5 12.5T341 64v256q0 18-12.5 30.5T299 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiCropSquareIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiCutleryIcon],svg[zmdi-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m114 221l-89-90Q0 106 0 71t25-60l150 149zm145-39l-31 31l146 147l-30 30l-146-147L51 390l-31-30l209-208q-12-24-4-56t33-57q31-30 69-35t61.5 18.5T407 84t-36 69q-25 25-56.5 33t-55.5-4"></svg:path>`,
})
export class ZmdiCutleryIcon {
  readonly viewBox = input("0 0 408 392")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDeleteIcon],svg[zmdi-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 341V85h256v256q0 18-12.5 30.5T235 384H64q-18 0-30.5-12.5T21 341M299 21v43H0V21h75L96 0h107l21 21z"></svg:path>`,
})
export class ZmdiDeleteIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDeliciousIcon],svg[zmdi-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 216H213v213H0V216h213V3h214z"></svg:path>`,
})
export class ZmdiDeliciousIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDesktopMacIcon],svg[zmdi-desktop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 3q17 0 29.5 12.5T469 45v256q0 18-12.5 30.5T427 344H277l43 64v21H149v-21l43-64H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3zm0 256V45H43v214z"></svg:path>`,
})
export class ZmdiDesktopMacIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDesktopWindowsIcon],svg[zmdi-desktop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 3q17 0 29.5 12.5T469 45v256q0 18-12.5 30.5T427 344H277v43h43v42H149v-42h43v-43H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3zm0 298V45H43v256z"></svg:path>`,
})
export class ZmdiDesktopWindowsIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDeveloperBoardIcon],svg[zmdi-developer-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 128h-43v43h43v42h-43v43h43v43h-43v42q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43v42h43zm-86 213V43H43v298zM85 213h107v86H85zm128-42h86v64h-86zM85 85h107v107H85zm128 192h86v128h-86z"></svg:path>`,
})
export class ZmdiDeveloperBoardIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDeviceHubIcon],svg[zmdi-device-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 277h85v107H277v-65l-85-90l-85 90v65H0V277h85l86-85v-68q-19-7-31-23.5T128 64q0-27 18.5-45.5T192 0t45.5 18.5T256 64q0 20-12 36.5T213 124v68z"></svg:path>`,
})
export class ZmdiDeviceHubIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDevicesIcon],svg[zmdi-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 64v235h214v64H0v-64h43V64q0-18 12.5-30.5T85 21h384v43zm406 43q8 0 14.5 6t6.5 15v213q0 9-6.5 15.5T491 363H363q-9 0-15.5-6.5T341 341V128q0-9 6.5-15t15.5-6zm-22 192V149h-85v150z"></svg:path>`,
})
export class ZmdiDevicesIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDevicesOffIcon],svg[zmdi-devices-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 96H188l-43-43h324zM41 3l42 42l372 373l-27 27l-50-50H0v-64h43V96q0-15 10-27L14 30zm44 99v229h229zm406 37q8 0 14.5 6t6.5 15v213q0 9-6.5 15.5T491 395h-4l-64-64h46V181h-85v111l-43-43v-89q0-9 6.5-15t15.5-6z"></svg:path>`,
})
export class ZmdiDevicesOffIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDialpadIcon],svg[zmdi-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 389q17.5 0 30 12.5T213 432t-12.5 30.5t-30 12.5t-30-12.5T128 432t12.5-30.5t30-12.5M42.5 5q17.5 0 30 12.5T85 48T72.5 78.5T42.5 91t-30-12.5T0 48t12.5-30.5T42.5 5m0 128q17.5 0 30 12.5T85 176t-12.5 30.5t-30 12.5t-30-12.5T0 176t12.5-30.5t30-12.5m0 128q17.5 0 30 12.5T85 304t-12.5 30.5t-30 12.5t-30-12.5T0 304t12.5-30.5t30-12.5m256-170q-17.5 0-30-12.5T256 48t12.5-30.5t30-12.5t30 12.5T341 48t-12.5 30.5t-30 12.5m-128 170q17.5 0 30 12.5T213 304t-12.5 30.5t-30 12.5t-30-12.5T128 304t12.5-30.5t30-12.5m128 0q17.5 0 30 12.5T341 304t-12.5 30.5t-30 12.5t-30-12.5T256 304t12.5-30.5t30-12.5m0-128q17.5 0 30 12.5T341 176t-12.5 30.5t-30 12.5t-30-12.5T256 176t12.5-30.5t30-12.5m-128 0q17.5 0 30 12.5T213 176t-12.5 30.5t-30 12.5t-30-12.5T128 176t12.5-30.5t30-12.5m0-128q17.5 0 30 12.5T213 48t-12.5 30.5t-30 12.5t-30-12.5T128 48t12.5-30.5t30-12.5"></svg:path>`,
})
export class ZmdiDialpadIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDiscFullIcon],svg[zmdi-disc-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 277v-42h43v42zm0-192h43v107h-43zM170.5 21Q241 21 291 71t50 121t-50 121t-120.5 50T50 313T0 192T50 71t120.5-50m0 214q17.5 0 30-12.5T213 192t-12.5-30.5t-30-12.5t-30 12.5T128 192t12.5 30.5t30 12.5"></svg:path>`,
})
export class ZmdiDiscFullIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDisqusIcon],svg[zmdi-disqus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219 157q26 0 42 13t16 38t-16 38t-42 13h-23V157zm2-157q85 0 145.5 61T427 208t-60.5 147T221 416q-75 0-133-49L0 379l34-85q-18-41-18-86q0-86 60-147T221 0m112 207q0-46-30.5-74T219 105h-78v206h76q54 0 85-29t31-75"></svg:path>`,
})
export class ZmdiDisqusIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDnsIcon],svg[zmdi-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 213q8 0 14.5 6.5T384 235v128q0 8-6.5 14.5T363 384H21q-8 0-14.5-6.5T0 363V235q0-9 6.5-15.5T21 213zM85.5 341q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5M363 0q8 0 14.5 6.5T384 21v128q0 9-6.5 15.5T363 171H21q-8 0-14.5-6.5T0 149V21q0-8 6.5-14.5T21 0zM85.5 128q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5"></svg:path>`,
})
export class ZmdiDnsIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDockIcon],svg[zmdi-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 475v-43h170v43zM213 6q18 0 30.5 12T256 48v299q0 17-12.5 29.5T213 389H43q-18 0-30.5-12.5T0 347V48q0-18 12.5-30.5T43 5zm0 298V91H43v213z"></svg:path>`,
})
export class ZmdiDockIcon {
  readonly viewBox = input("0 0 256 480")
  readonly width = input("0.54em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDotCircleIcon],svg[zmdi-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 109q44 0 75.5 31.5T320 216t-31.5 75.5T213 323t-75-31.5t-31-75.5t31-75.5t75-31.5m.5-106q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiDotCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDotCircleAltIcon],svg[zmdi-dot-circle-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 3q88 0 151 62.5T427 216t-63 150.5T213 429T62.5 366.5T0 216T62.5 65.5T213 3m.5 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50M277 216q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5t19-45.5t45.5-18.5t45 18.5T277 216"></svg:path>`,
})
export class ZmdiDotCircleAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDownloadIcon],svg[zmdi-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 128L149 277L0 128h85V0h128v128zM0 320h299v43H0z"></svg:path>`,
})
export class ZmdiDownloadIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDribbbleIcon],svg[zmdi-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M308 358q56-40 69-107q-35-8-66-8q-17 0-34 3q19 57 31 112m-95 29q31 0 59-11q-12-63-32-121q-49 16-87 52q-23 22-39 47q44 33 99 33M47 221q0 60 39 106q19-28 46-53q42-38 94-55q-4-10-10-22q-67 21-151 22q-13 0-18-1zm93-150q-33 16-56 45t-32 64q3 1 13 1h3q70 0 131-19q-29-54-59-91m73-17q-16 0-35 4q32 42 57 91q53-23 82-58q-45-37-104-37m131 64q-36 41-92 66q4 8 11 25q24-4 48-4q33 0 69 8q-3-53-36-95M213.5 7q88.5 0 151 62.5t62.5 151t-62.5 151t-151 62.5t-151-62.5T0 220.5t62.5-151T213.5 7"></svg:path>`,
})
export class ZmdiDribbbleIcon {
  readonly viewBox = input("0 0 432 440")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDrinkIcon],svg[zmdi-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h384l-43 389q-2 16-14 26.5T299 429H85q-16 0-28-10.5T43 392zm192 362q27 0 45.5-18.5T256 301q0-19-16-47.5T208 205l-16-19q-7 8-17.5 21.5t-28.5 44t-18 49.5q0 27 18.5 45.5T192 365m135-234l9-86H48l9 86z"></svg:path>`,
})
export class ZmdiDrinkIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiDropboxIcon],svg[zmdi-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m126 3l87 72l88-72l126 81l-87 69l87 69l-126 82l-88-73l-87 73L0 222l87-69L0 84zm87 72L87 153l126 78l127-78zm0 172l89 73l37-25v27l-126 75l-125-75v-27l38 25z"></svg:path>`,
})
export class ZmdiDropboxIcon {
  readonly viewBox = input("0 0 432 400")
  readonly width = input("1.08em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEditIcon],svg[zmdi-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 304L236 68l80 80L80 384H0zM378 86l-39 39l-80-80l39-39q6-6 15-6t15 6l50 50q6 6 6 15t-6 15"></svg:path>`,
})
export class ZmdiEditIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEjectIcon],svg[zmdi-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299h299v42H0zM149 85l143 171H7z"></svg:path>`,
})
export class ZmdiEjectIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEjectAltIcon],svg[zmdi-eject-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128 115l-98 98l-30-30L128 55l128 128l-30 30zM0 320v-43h256v43z"></svg:path>`,
})
export class ZmdiEjectAltIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEmailIcon],svg[zmdi-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 86V64L213 171L43 64v43l170 106z"></svg:path>`,
})
export class ZmdiEmailIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEmailOpenIcon],svg[zmdi-email-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426 155l1 213q0 18-12.5 30.5T384 411H43q-18 0-30.5-12.5T0 368V155q0-24 20-37L213 5l193 113q20 13 20 37M213 261l177-110L213 48L37 151z"></svg:path>`,
})
export class ZmdiEmailOpenIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEqualizerIcon],svg[zmdi-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 363V21h85v342zM0 363V192h85v171zm256-235h85v235h-85z"></svg:path>`,
})
export class ZmdiEqualizerIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEvernoteIcon],svg[zmdi-evernote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 208h50q3-10-8-21q-12-12-27-3.5T249 208m83-148q11 14 17.5 34.5t8 32T362 165q4 39 3.5 88.5T355 341q-9 61-49 80.5t-95 4.5q-22-6-32-27t-7-44q4-21 24-31.5t43-10.5v21q2 7-1 9.5t-8.5 2t-11.5.5q-8 5-9 16.5t8.5 21T245 393q33-1 40-12t5-48q2-19-14-32t-36-14q-37 3-65-43q-1 2-1 10.5V286q-1 15-15 23.5T128 321q-60 5-84-19q-34-36-43-120q-7-48 22-69h81q4-2 10.5-9.5T122 95V52q1-4 .5-14.5t1-17T130 9q22-11 47-4t38 28h55q43 6 62 27M87 95H18l86-88v70z"></svg:path>`,
})
export class ZmdiEvernoteIcon {
  readonly viewBox = input("0 0 368 440")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiExplicitIcon],svg[zmdi-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 128V85H128v214h128v-43h-85v-43h85v-42h-85v-43z"></svg:path>`,
})
export class ZmdiExplicitIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiExposureIcon],svg[zmdi-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 323h-42v-43h42v-43h43v43h43v43h-43v42h-43zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM64 67v42h128V67zm320 320V45L43 387z"></svg:path>`,
})
export class ZmdiExposureIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiExposureAltIcon],svg[zmdi-exposure-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM53 96v32h43v43h32v-43h43V96h-43V53H96v43zm288 245V43L43 341zm-42-42H192v-32h107z"></svg:path>`,
})
export class ZmdiExposureAltIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEyeIcon],svg[zmdi-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 32q79 0 142.5 44.5T469 192q-28 71-91.5 115.5T235 352T92 307.5T0 192q28-71 92-115.5T235 32m0 267q44 0 75-31.5t31-75.5t-31-75.5T235 85t-75.5 31.5T128 192t31.5 75.5T235 299m-.5-171q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45.5 18.5t-45-18.5T171 192t18.5-45.5t45-18.5"></svg:path>`,
})
export class ZmdiEyeIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEyeOffIcon],svg[zmdi-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 85q-20 0-39 8l-46-46q41-15 84-15q79 0 143 44.5T469 192q-23 60-73 101l-62-62q7-19 7-39q0-44-31-75.5T235 85M21 27L48 0l379 378l-27 27l-63-62l-9-9q-45 18-93 18q-79 0-143-44.5T0 192q25-64 80-106L70 76zm118 118q-11 23-11 47q0 44 31.5 75.5T235 299q24 0 47-12l-33-33q-8 2-14 2q-27 0-45.5-18.5T171 192q0-7 1-14zm92-17h4q26 0 45 19t19 45l-1 4z"></svg:path>`,
})
export class ZmdiEyeOffIcon {
  readonly viewBox = input("0 0 472 408")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiEyedropperIcon],svg[zmdi-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378 56q6 6 6 15t-6 15l-67 67l41 41l-30 30l-30-30l-191 190H0V283L190 92l-30-30l30-30l41 41l67-67q6-6 15-6t15 6zM84 341l172-172l-41-41L43 300z"></svg:path>`,
})
export class ZmdiEyedropperIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFaceIcon],svg[zmdi-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 211q11 0 19 7.5t8 18.5t-8 19t-19 8t-18.5-8t-7.5-19t7.5-18.5T149 211m128 0q11 0 19 7.5t8 18.5t-8 19t-19 8t-18.5-8t-7.5-19t7.5-18.5T277 211M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121q0-24-7-48q-24 5-48 5q-53 0-99-24t-75-66q-33 80-111 115q-1 10-1 18q0 71 50 121t120.5 50"></svg:path>`,
})
export class ZmdiFaceIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFacebookIcon],svg[zmdi-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66z"></svg:path>`,
})
export class ZmdiFacebookIcon {
  readonly viewBox = input("0 0 224 432")
  readonly width = input("0.52em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFacebookBoxIcon],svg[zmdi-facebook-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 88h-54q-31 0-52.5 22T235 163v53h-43v64h43v149h64V280h64v-64h-64v-43q0-8 6-14.5t15-6.5h43zM0 3h427v426H0z"></svg:path>`,
})
export class ZmdiFacebookBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFastForwardIcon],svg[zmdi-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V64l181 128zM192 64l181 128l-181 128z"></svg:path>`,
})
export class ZmdiFastForwardIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFastRewindIcon],svg[zmdi-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181 320L0 192L181 64zm11-128L373 64v256z"></svg:path>`,
})
export class ZmdiFastRewindIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFavoriteIcon],svg[zmdi-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 391l-31-28q-42-38-62-56.5T72 258t-40.5-49t-22-43.5T0 117q0-49 34-83t83-34q58 0 96 45q38-45 96-45q50 0 84 34t34 83q0 24-10 48.5T395 209t-40.5 49t-48 48.5T244 364z"></svg:path>`,
})
export class ZmdiFavoriteIcon {
  readonly viewBox = input("0 0 432 392")
  readonly width = input("1.11em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFavoriteOutlineIcon],svg[zmdi-favorite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M309 0q50 0 84 34t34 83q0 24-10 48.5T395 209t-40.5 49t-48 48.5T244 363l-31 28l-31-27q-42-39-62-57.5T71.5 258T31 209T9.5 165.5T0 117q0-49 34-83t83-34q58 0 96 45q38-45 96-45m-94 332q49-44 71.5-65.5T336 215t37.5-52.5T384 117q0-32-21.5-53T309 43q-24 0-45.5 14T233 93h-40q-8-22-29.5-36T117 43q-32 0-53 21t-21 53q0 23 10 45.5T90.5 215t50 51.5T211 332l2 2z"></svg:path>`,
})
export class ZmdiFavoriteOutlineIcon {
  readonly viewBox = input("0 0 432 392")
  readonly width = input("1.11em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFemaleIcon],svg[zmdi-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 429H64V301H0l54-162q4-14 15.5-22t25.5-8h2q14 0 25 8t16 22l54 162h-64zM96 88q-18 0-30.5-12.5T53 45.5t12.5-30T96 3t30.5 12.5t12.5 30t-12.5 30T96 88"></svg:path>`,
})
export class ZmdiFemaleIcon {
  readonly viewBox = input("0 0 192 432")
  readonly width = input("0.45em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFileIcon],svg[zmdi-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 3h170l128 128v256q0 17-12.5 29.5T299 429H42q-17 0-29.5-12.5T0 387V45q0-17 12.5-29.5T43 3m149 149h117L192 35z"></svg:path>`,
})
export class ZmdiFileIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFilePlusIcon],svg[zmdi-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 3l128 128v256q0 17-12.5 29.5T299 429H42q-17 0-29.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm43 298v-42h-64v-64h-43v64H85v42h64v64h43v-64zm-64-149h117L192 35z"></svg:path>`,
})
export class ZmdiFilePlusIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFileTextIcon],svg[zmdi-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 3l128 128v256q0 17-12.5 29.5T299 429H42q-17 0-29.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm43 341v-43H85v43zm0-85v-43H85v43zm-64-107h117L192 35z"></svg:path>`,
})
export class ZmdiFileTextIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFilterBAndWIcon],svg[zmdi-filter-b-and-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H192v128L43 341h149V171z"></svg:path>`,
})
export class ZmdiFilterBAndWIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFilterCenterFocusIcon],svg[zmdi-filter-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 256v85h85v43H43q-18 0-30.5-12.5T0 341v-85zm0-213v85H0V43q0-18 12.5-30.5T43 0h85v43zM341 0q18 0 30.5 12.5T384 43v85h-43V43h-85V0zm0 341v-85h43v85q0 18-12.5 30.5T341 384h-85v-43zM192 128q27 0 45.5 18.5T256 192t-18.5 45.5T192 256t-45.5-18.5T128 192t18.5-45.5T192 128"></svg:path>`,
})
export class ZmdiFilterCenterFocusIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFilterFramesIcon],svg[zmdi-filter-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 85q18 0 30.5 12.5T427 128v299q0 17-12.5 29.5T384 469H43q-18 0-30.5-12.5T0 427V128q0-18 12.5-30.5T43 85h85l85-85l86 85zm0 342V128h-96l-74-75l-75 75H43v299zm-43-256H85v213h256z"></svg:path>`,
})
export class ZmdiFilterFramesIcon {
  readonly viewBox = input("0 0 432 472")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFilterListIcon],svg[zmdi-filter-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 320v-43h86v43zM0 64h384v43H0zm64 149v-42h256v42z"></svg:path>`,
})
export class ZmdiFilterListIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFilterTiltShiftIcon],svg[zmdi-filter-tilt-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M191 47q-46 5-83 34L77 51q50-41 114-47zm156 4l-30 30q-38-29-83-34V4q63 6 113 47m34 144q-5-46-34-84l30-30q41 50 48 114zM78 111q-29 38-35 84H0q6-64 47-114zM43 237q6 46 35 83l-31 31Q6 301 0 237zm233-21q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5t19-45.5t45.5-18.5t45 18.5T276 216m71 105q29-38 34-83h44q-7 63-48 113zm-113 64q46-6 83-34l30 30q-50 41-113 47zm-157-4l31-30q37 29 83 34v43q-64-6-114-47"></svg:path>`,
})
export class ZmdiFilterTiltShiftIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFireIcon],svg[zmdi-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203 6q64 52 101 126t37 159q0 70-50 120t-120.5 50T50 411T0 291q0-108 69-190l-1 8q0 33 22.5 56t55.5 23q32 0 52-23t20-56q0-21-3.5-46.5T207 22zm-39 391q43 0 73-30t30-72q0-45-13-86q-30 41-98 55q-29 6-44.5 23.5T96 330q0 28 20 47.5t48 19.5"></svg:path>`,
})
export class ZmdiFireIcon {
  readonly viewBox = input("0 0 344 464")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlagIcon],svg[zmdi-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 64h119v213H171l-9-42H43v149H0V21h192z"></svg:path>`,
})
export class ZmdiFlagIcon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlareIcon],svg[zmdi-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 219v42H0v-42zm46-69l-30 30l-45-46l30-30zM256 5v128h-43V5zm114 129l-45 46l-30-30l45-46zm-29 85h128v42H341zm-106.5-43q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45.5 18.5t-45-18.5T171 240t18.5-45.5t45-18.5M295 330l30-30l45 46l-30 30zM99 346l45-46l30 30l-45 46zm114 129V347h43v128z"></svg:path>`,
})
export class ZmdiFlareIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlashIcon],svg[zmdi-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h213l-85 170h85L64 429V237H0z"></svg:path>`,
})
export class ZmdiFlashIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlashAutoIcon],svg[zmdi-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h213l-85 192h85L64 451V259H0zm341 0l69 192h-41l-15-43h-68l-15 43h-41L299 3zm-46 120h50l-25-78z"></svg:path>`,
})
export class ZmdiFlashAutoIcon {
  readonly viewBox = input("0 0 416 456")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlashOffIcon],svg[zmdi-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 24l336 336l-27 27l-89-89l-76 131V237h-64v-79L0 51zm293 149l-33 57L107 49V3h213l-85 170z"></svg:path>`,
})
export class ZmdiFlashOffIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlattrIcon],svg[zmdi-flattr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426 263q0 46-13 81q-25 66-96 81q-20 4-43 4H31v-1l45-45l124-124l.5-.5l1.5-.5q4-4 7-3q4 2 4 8v67q0 1 2 1q47-1 55-1q8-1 19-5q28-9 35-42q3-16 3-33V136q0-3 3-6l93-93q0-1 2-4l1 1h1v4q0 24-1 225m-326 33q0 3-3 6L3 396l-3 3V170q0-45 12-79q25-69 99-84q19-4 42-4h243q-1 0-2 2q0 1-1 1q-27 28-82.5 83.5L227 173q-3 2-3 3q-4 3-7 1q-1-2-4-6v-69q0-1-1-1q-50 1-59 2q-4 0-13 3q-31 9-37 44q-3 15-3 34q-1 25 0 112"></svg:path>`,
})
export class ZmdiFlattrIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlickrIcon],svg[zmdi-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M97 289q-40 0-68.5-28.5T0 192.5T28.5 125T97 97t68 28t28 67.5t-28 68T97 289m233 0q-40 0-68.5-28.5t-28.5-68t28.5-67.5T330 97t68.5 28t28.5 67.5t-28.5 68T330 289"></svg:path>`,
})
export class ZmdiFlickrIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlightLandIcon],svg[zmdi-flight-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 368h405v43H0zm153-122L40 215l-34-9V96l31 8l20 50l106 28V5l41 11l59 193l113 30q13 3 19.5 14.5t3 24.5t-15 19.5T359 301l-113-30z"></svg:path>`,
})
export class ZmdiFlightLandIcon {
  readonly viewBox = input("0 0 408 416")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlightTakeoffIcon],svg[zmdi-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 335h405v43H14zm417.5-199.5q3.5 12.5-3 24T409 175l-114 30l-92 25l-114 30l-34 10l-16-29l-39-67l31-9l42 33l106-28L91 17l41-11l147 137l113-30q13-4 24.5 3t15 19.5"></svg:path>`,
})
export class ZmdiFlightTakeoffIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlipIcon],svg[zmdi-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 432v-43h43v43zm85-256v-43h43v43zM0 91q0-18 12.5-30.5T43 48h85v43H43v298h85v43H43q-18 0-30.5-12.5T0 389zm341-43q18 0 30.5 12.5T384 91h-43zM171 475V5h42v470zm170-128v-43h43v43zM256 91V48h43v43zm85 170v-42h43v42zm0 171v-43h43q0 18-12.5 30.5T341 432"></svg:path>`,
})
export class ZmdiFlipIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlipToBackIcon],svg[zmdi-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 85v43H85V85zm0 86v42H85v-42zm0-171v43H85q0-18 12.5-30.5T128 0m85 256v43h-42v-43zM341 0q18 0 30.5 12.5T384 43h-43zM213 0v43h-42V0zm-85 299q-18 0-30.5-12.5T85 256h43zm213-86v-42h43v42zm0-85V85h43v43zm0 171v-43h43q0 18-12.5 30.5T341 299M43 85v256h256v43H43q-18 0-30.5-12.5T0 341V85zm213-42V0h43v43zm0 256v-43h43v43z"></svg:path>`,
})
export class ZmdiFlipToBackIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlipToFrontIcon],svg[zmdi-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 213v-42h43v42zm0 86v-43h43v43zm43 85q-18 0-30.5-12.5T0 341h43zM0 128V85h43v43zm256 256v-43h43v43zM341 0q18 0 30.5 12.5T384 43v213q0 18-12.5 30.5T341 299H128q-18 0-30.5-12.5T85 256V43q0-18 12.5-30.5T128 0zm0 256V43H128v213zM171 384v-43h42v43zm-86 0v-43h43v43z"></svg:path>`,
})
export class ZmdiFlipToFrontIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFloppyIcon],svg[zmdi-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m299 0l85 85v256q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM192 341q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19t-45.5 19t-18.5 45.5t18.5 45T192 341m64-213V43H43v85z"></svg:path>`,
})
export class ZmdiFloppyIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlowerIcon],svg[zmdi-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M350 249q30 17 47 47t17 63q-29 17-63 17.5T286 359q-9-5-17-11q2 10 2 20q0 35-17.5 64.5T207 479q-29-17-46.5-46.5T143 368q0-10 2-20q-9 7-17 11q-31 17-65 17T0 359q0-34 17-63.5T64 248q8-4 18-8q-10-4-18-9q-30-17-47-47T0 121q29-17 63-17.5t65 17.5q8 4 17 11q-2-10-2-20q0-35 17.5-64.5T207 1q29 17 46.5 46.5T271 112q0 10-2 20q9-7 17-11q31-18 65-17.5t63 17.5q0 33-17 63t-47 47q-8 5-18 9q10 4 18 9m-143 76q35 0 60-25t25-60t-25-60t-60-25t-60 25t-25 60t25 60t60 25"></svg:path>`,
})
export class ZmdiFlowerIcon {
  readonly viewBox = input("0 0 416 480")
  readonly width = input("0.87em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFlowerAltIcon],svg[zmdi-flower-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 453q0-79 56-135.5T384 261q0 80-56 136t-136 56M55 203q0-34 31-48q-31-15-31-48q0-22 16-38t38-16q17 0 30 10v-4q0-22 15.5-38T192 5t37.5 16T245 59v4q14-10 30-10q22 0 38 16t16 38q0 33-31 48q31 14 31 48q0 22-16 37.5T275 256q-17 0-30-9v4q0 22-15.5 37.5T192 304t-37.5-15.5T139 251v-4q-14 9-30 9q-22 0-38-15.5T55 203m137-102q-22 0-37.5 16T139 155t15.5 37.5T192 208t37.5-15.5T245 155t-15.5-38t-37.5-16M0 261q80 0 136 56.5T192 453q-80 0-136-56T0 261"></svg:path>`,
})
export class ZmdiFlowerAltIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderIcon],svg[zmdi-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171 21l42 43h171q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21z"></svg:path>`,
})
export class ZmdiFolderIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderOutlineIcon],svg[zmdi-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h128l42 43zm0 256V107H43v213z"></svg:path>`,
})
export class ZmdiFolderOutlineIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderPersonIcon],svg[zmdi-folder-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h128l42 43zm-106.5 64q-17.5 0-30 12.5t-12.5 30t12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5M363 299v-22q0-19-29.5-30.5t-56-11.5t-56 11.5T192 277v22z"></svg:path>`,
})
export class ZmdiFolderPersonIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderStarIcon],svg[zmdi-folder-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 21h128l42 43h171q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21m233 107l-25 60l-65 5l49 43l-15 63l56-33l56 33l-14-63l49-43l-65-5z"></svg:path>`,
})
export class ZmdiFolderStarIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderStarAltIcon],svg[zmdi-folder-star-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h128l42 43zM247 320l-20-87l67-58l-89-8l-34-82l-35 82l-89 8l68 58l-21 87l77-45z"></svg:path>`,
})
export class ZmdiFolderStarAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFontIcon],svg[zmdi-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m169 248l44-118l44 118zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm-86 352h44L233 77h-40L84 355h45l24-64h120z"></svg:path>`,
})
export class ZmdiFontIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignCenterIcon],svg[zmdi-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 256h214v43H85zM0 384v-43h384v43zm0-171v-42h384v42zM85 85h214v43H85zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignCenterIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignJustifyIcon],svg[zmdi-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h384v43zm0-85v-43h384v43zm0-86v-42h384v42zm0-85V85h384v43zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignLeftIcon],svg[zmdi-format-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256v43H0v-43zm0-171v43H0V85zM0 213v-42h384v42zm0 171v-43h384v43zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignLeftIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignRightIcon],svg[zmdi-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h384v43zm128-85v-43h256v43zM0 213v-42h384v42zm128-85V85h256v43zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignRightIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatBoldIcon],svg[zmdi-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183 166q21 10 33.5 29.5T229 239q0 34-23 57.5T150 320H0V21h133q36 0 61 25t25 61q0 35-36 59M64 75v64h64q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9zm75 192q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9H64v64z"></svg:path>`,
})
export class ZmdiFormatBoldIcon {
  readonly viewBox = input("0 0 232 384")
  readonly width = input("0.61em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatClearIcon],svg[zmdi-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 43l6 5l308 309l-27 27l-121-121l-33 78H96l53-123L0 70zm58 0h299v64H260l-34 80l-45-44l16-36h-52L85 47z"></svg:path>`,
})
export class ZmdiFormatClearIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatClearAllIcon],svg[zmdi-format-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 213v-42h298v42zM0 299v-43h299v43zM85 85h299v43H85z"></svg:path>`,
})
export class ZmdiFormatClearAllIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatColorFillIcon],svg[zmdi-format-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M353 191q10 9 10 22.5T353 236L236 353q-9 10-22.5 10T191 353L73 236q-9-9-9-22.5t9-22.5L183 81l-51-51l31-30zm-242 22h205L213 111zm294 32q43 47 43 75q0 18-12.5 30.5t-30 12.5t-30-12.5T363 320q0-13 10.5-31.5T395 258zM0 427h512v85H0z"></svg:path>`,
})
export class ZmdiFormatColorFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatColorResetIcon],svg[zmdi-format-color-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 235q0 14-3 28L112 79q14-19 28.5-37.5T163 14l8-10q5 6 13.5 16.5t30.5 40t39 56.5t31 60.5t14 57.5m-19 66l58 59l-27 27l-56-56q-36 32-84 32q-53 0-90.5-37.5T43 235q0-35 28-88L0 76l27-28l154 155z"></svg:path>`,
})
export class ZmdiFormatColorResetIcon {
  readonly viewBox = input("0 0 344 392")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatColorTextIcon],svg[zmdi-format-color-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 363h512v85H0zM235 0h42l117 299h-48l-23-64H189l-24 64h-48zm-30 192h102L256 57z"></svg:path>`,
})
export class ZmdiFormatColorTextIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatIndentDecreaseIcon],svg[zmdi-format-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 299v-43h213v43zM0 192l85-85v170zm0 192v-43h384v43zM0 0h384v43H0zm171 128V85h213v43zm0 85v-42h213v42z"></svg:path>`,
})
export class ZmdiFormatIndentDecreaseIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatIndentIncreaseIcon],svg[zmdi-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h384v43zm0-277l85 85l-85 85zm171 192v-43h213v43zM0 0h384v43H0zm171 128V85h213v43zm0 85v-42h213v42z"></svg:path>`,
})
export class ZmdiFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatItalicIcon],svg[zmdi-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 21h171v64h-60l-72 171h47v64H0v-64h60l72-171H85z"></svg:path>`,
})
export class ZmdiFormatItalicIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatLineSpacingIcon],svg[zmdi-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 85v214h53l-74 74l-75-74h53V85H0l75-74l74 74zm85-42h256v42H181zm0 298v-42h256v42zm0-128v-42h256v42z"></svg:path>`,
})
export class ZmdiFormatLineSpacingIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatListBulletedIcon],svg[zmdi-format-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 160q13 0 22.5 9.5T64 192t-9.5 22.5T32 224t-22.5-9.5T0 192t9.5-22.5T32 160m0-128q13 0 22.5 9.5T64 64t-9.5 22.5T32 96T9.5 86.5T0 64t9.5-22.5T32 32m0 260q12 0 20 8t8 20t-8 20t-20 8t-20-8t-8-20t8-20t20-8m64 49v-42h299v42zm0-128v-42h299v42zm0-170h299v42H96z"></svg:path>`,
})
export class ZmdiFormatListBulletedIcon {
  readonly viewBox = input("0 0 400 384")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatListNumberedIcon],svg[zmdi-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299v-22h64v86H0v-22h43v-10H21v-22h22v-10zm21-192V43H0V21h43v86zM0 171v-22h64v20l-38 44h38v22H0v-20l38-44zM107 43h298v42H107zm0 298v-42h298v42zm0-128v-42h298v42z"></svg:path>`,
})
export class ZmdiFormatListNumberedIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatLtrIcon],svg[zmdi-format-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 173q-35 0-60-25T0 88t25-60T85 3h171v42h-43v235h-42V45h-43v235H85zm256 171l-85 85v-64H0v-42h256v-64z"></svg:path>`,
})
export class ZmdiFormatLtrIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatRtlIcon],svg[zmdi-format-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 173q-35 0-60-25T43 88t25-60t60-25h171v42h-43v235h-43V45h-42v235h-43zM85 323h256v42H85v64L0 344l85-85z"></svg:path>`,
})
export class ZmdiFormatRtlIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatSizeIcon],svg[zmdi-format-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 21h277v64H299v256h-64V85H128zM0 192v-64h192v64h-64v149H64V192z"></svg:path>`,
})
export class ZmdiFormatSizeIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatStrikethroughIcon],svg[zmdi-format-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 341v-64h86v64zM43 21h298v64H235v64h-86V85H43zM0 235v-43h384v43z"></svg:path>`,
})
export class ZmdiFormatStrikethroughIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatStrikethroughSIcon],svg[zmdi-format-strikethrough-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 173q-5-4-7-8q-11-22-11-47t13-47q8-18 30-36q19-14 49-24q26-8 62-8q40 0 66 10q25 6 49 26q20 16 30 40q11 25 11 52h-86q0-11-4-24q-3-13-13-19q-10-10-21-13q-17-4-30-4t-30 4q-8 2-21 11q-10 7-13 15q-4 13-4 19q0 22 21 34q14 9 43 19zm364 43v43h-91q1 1 1.5 2t1 3t1.5 3q8 20 8 47q0 24-10 49q-8 18-30 36q-21 18-47 24q-26 8-62 8q-15 0-40-4q-13-2-39-10q-13-7-34-20q-14-8-28-25q-13-17-19-34q-6-20-6-45h85q0 21 6 34q5 8 17 21q10 10 26 13q21 4 34 4t30-4q3-2 10-5t9-6q10-6 13-15q4-12 4-19q0-13-2-19q-3-11-13-17q-17-12-25-15q-2-1-7.5-3t-7.5-3H0v-43z"></svg:path>`,
})
export class ZmdiFormatStrikethroughSIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatSubjectIcon],svg[zmdi-format-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 299v42H0v-42zm128-171v43H0v-43zM0 256v-43h341v43zM0 43h341v42H0z"></svg:path>`,
})
export class ZmdiFormatSubjectIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatUnderlinedIcon],svg[zmdi-format-underlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 299q-53 0-90.5-37.5T21 171V0h54v171q0 31 21.5 52.5T149 245t53-21.5t22-52.5V0h53v171q0 53-37.5 90.5T149 299M0 341h299v43H0z"></svg:path>`,
})
export class ZmdiFormatUnderlinedIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatValignBottomIcon],svg[zmdi-format-valign-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 213l-85 86l-86-86h64V0h43v213zM0 341h341v43H0z"></svg:path>`,
})
export class ZmdiFormatValignBottomIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatValignCenterIcon],svg[zmdi-format-valign-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 389l86-85l85 85h-64v86h-43v-86zM256 91l-85 85l-86-85h64V5h43v86zM0 219h341v42H0z"></svg:path>`,
})
export class ZmdiFormatValignCenterIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatValignTopIcon],svg[zmdi-format-valign-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 171l86-86l85 86h-64v213h-43V171zM0 0h341v43H0z"></svg:path>`,
})
export class ZmdiFormatValignTopIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiForwardIcon],svg[zmdi-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 107V21l170 171l-170 171v-86H0V107z"></svg:path>`,
})
export class ZmdiForwardIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiForward10Icon],svg[zmdi-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 261.5Q0 191 50 141t121-50V5l106 107l-106 107v-86q-53 0-90.5 38T43 261.5t37.5 90t90 37.5t90.5-37.5t38-90.5h42q0 71-50 121t-120.5 50T50 382T0 261.5M145 325h-17v-70l-21 6v-15l38-12h2v91zm94-38q0 13-2 17l-7 13q-6 6-10 6q-2 0-6.5 1t-6.5 1q-9 0-13-2q-2-1-5-3t-6-3q-2-1-6-13q-2-6-2-17v-15q0-13 2-17l6-13q7-6 11-6q2 0 6.5-1t6.5-1q8 0 13 2q2 1 5 3t5 3q3 1 7 13q2 6 2 17zm-17-17v-11q-2-4-2-6l-5-4q-2-3-6-3t-6 3l-5 4q-2 4-2 6v43q2 4 2 6t2 3t3 2q2 2 6 2t6-2l5-5q2-4 2-6z"></svg:path>`,
})
export class ZmdiForward10Icon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiForward30Icon],svg[zmdi-forward-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119 272h9q6 0 10.5-4.5t4.5-8.5v-4q-2-2-2-4t-4-2h-11q-2 2-4.5 2t-2.5 4v4H98q0-6 2-10.5t6.5-8.5t8.5-4q1 0 5.5-1t5.5-1q8 0 13 2q2 1 5 2t5 2q3 1 7 9q2 4 2 10v7q-2 4-2 6q0 4-5 4q-2 0-6 5q9 4 11 8q4 9 4 13q0 8-2 11q-1 1-3 4t-4 4q-4 4-10 4q-2 0-6.5 1t-6.5 1q-9 0-11-2q-1-1-5-2t-5-2q-3-1-7-8q-2-5-2-13h17v4q2 2 2 4t5 2h10q2-2 4.5-2t2.5-4v-11q-2-2-2-4t-5-2h-13zm122 15q0 13-2 17l-6 13q-7 6-11 6q-2 0-6.5 1t-6.5 1q-8 0-13-2q-2-1-5-3t-5-3q-3-1-7-13q-2-6-2-17v-15q0-13 2-17l7-13q6-6 10-6q2 0 6.5-1t6.5-1q9 0 13 2q2 1 5 3t6 3q2 1 6 13q2 6 2 17zm-19-17v-11q-2-4-2-6l-5-4q-2-3-6-3t-6 3l-5 4q-2 4-2 6v43q2 4 2 6l5 5q2 2 6 2t6-2l5-5q2-4 2-6zM0 261.5Q0 191 50 141t121-50V5l106 107l-106 107v-86q-53 0-90.5 38T43 261.5t37.5 90t90 37.5t90.5-37.5t38-90.5h42q0 71-50 121t-120.5 50T50 382T0 261.5"></svg:path>`,
})
export class ZmdiForward30Icon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiForward5Icon],svg[zmdi-forward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 261.5Q0 191 50 141t121-50V5l106 107l-106 107v-86q-53 0-90.5 38T43 261.5t37.5 90t90 37.5t90.5-37.5t38-90.5h42q0 71-50 121t-120.5 50T50 382T0 261.5M143 281l4-47h51v15h-36l-2 19q2 0 2-2q0-1 1-1t1-2h9q8 0 10 3q2 1 5 3t4 3q2 2 6 11q3 4 3 12.5t-3 10.5q0 1-2 4.5t-4 6.5q-2 2-11 6q-4 2-12.5 2t-10.5-2q-1-1-5-2t-6-2q-3-1-6-9q-2-4-2-10h17q0 4 4 8q2 2 9 2q4 0 6-2l4-4q2-4 2-6v-13l-2-4l-4-5q-4-2-6-2h-5q-2 0-4 2q-1 1-1.5 1t-.5 1l-2 3z"></svg:path>`,
})
export class ZmdiForward5Icon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFullscreenIcon],svg[zmdi-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 235v64h64v42H0V235zM0 149V43h107v42H43v64zm256 150v-64h43v106H192v-42zM192 43h107v106h-43V85h-64z"></svg:path>`,
})
export class ZmdiFullscreenIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFullscreenAltIcon],svg[zmdi-fullscreen-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235 53l42 54h-85zm128 96l53 43l-53 43zm-256 0v86l-54-43zm170 128l-42 54l-43-54zM427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300z"></svg:path>`,
})
export class ZmdiFullscreenAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFullscreenExitIcon],svg[zmdi-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 277v-42h107v106H64v-64zm64-170V43h43v106H0v-42zm128 234V235h107v42h-64v64zm43-234h64v42H192V43h43z"></svg:path>`,
})
export class ZmdiFullscreenExitIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiFunctionsIcon],svg[zmdi-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 21v64H107l106 107l-106 107h149v64H0v-43l139-128L0 64V21z"></svg:path>`,
})
export class ZmdiFunctionsIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGamepadIcon],svg[zmdi-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m277 120l-64 64l-64-64V3h128zm-160 32l64 64l-64 64H0V152zm32 160l64-64l64 64v117H149zm160-160h118v128H309l-64-64z"></svg:path>`,
})
export class ZmdiGamepadIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGasStationIcon],svg[zmdi-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 90q16 16 16 38v203q0 22-15.5 37.5T299 384t-38-15.5t-16-37.5V224h-32v160H0V43q0-18 12.5-30.5T43 0h128q17 0 29.5 12.5T213 43v149h22q17 0 29.5 12.5T277 235v96q0 8 6.5 14.5t15 6.5t15-6.5T320 331V177q-11 4-21 4q-22 0-38-15.5T245 128q0-17 9.5-30.5T280 78l-45-45l22-22l80 79zm-165 59V43H43v106zm127.5 0q8.5 0 15-6t6.5-15t-6.5-15t-15-6t-15 6t-6.5 15t6.5 15t15 6"></svg:path>`,
})
export class ZmdiGasStationIcon {
  readonly viewBox = input("0 0 352 384")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGestureIcon],svg[zmdi-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37 83L0 47q5-6 19-20Q45 0 77 0q18 0 35.5 15T130 61q0 20-6 34t-21 36q-29 43-40 75q-5 18-2.5 29.5T71 247q9 0 24-18q16-17 48-58q18-22 46-41t60-19q42 0 62.5 27.5T335 200h52v53h-52q-6 69-36.5 100T235 384q-28 0-48.5-19.5T166 318q0-33 30-69.5t85-45.5v-3q-1-8-2.5-12.5t-5-10.5t-11-9t-18.5-3q-18 0-39 20t-48 53q-16 19-23.5 28T114 284.5T91 297q-30 10-56-9q-29-22-29-64q0-14 6-32.5T27 156t16.5-30T59 101.5T67 89q18-28 7-32q-8-3-37 26m199 249q14 0 27.5-18t17.5-57q-30 8-45.5 27T220 316q0 7 5 11.5t11 4.5"></svg:path>`,
})
export class ZmdiGestureIcon {
  readonly viewBox = input("0 0 392 384")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGifIcon],svg[zmdi-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 128h32v128h-32zm-54 0q10 0 16 6.5t6 14.5v11H32v64h43v-32h32v43q0 8-6 14.5T85 256H21q-9 0-15-6.5T0 235v-86q0-8 6-14.5t15-6.5zm214 32h-64v21h42v32h-42v43h-32V128h96z"></svg:path>`,
})
export class ZmdiGifIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGithubIcon],svg[zmdi-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0"></svg:path>`,
})
export class ZmdiGithubIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGithubAltIcon],svg[zmdi-github-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 151q0 38-10.5 65T343 257.5t-40 21t-47 9.5q19 16 19 51v90H136v-65q-16 3-29.5 3t-23-2.5t-17-6.5t-12-8.5T47 341t-4-7l-1-3q-6-14-13.5-24T16 294l-5-3q-11-9-11-12.5t7-4.5h6q12 1 23 8t15 14l5 6q27 47 81 23q3-24 18-37q-27-3-47-9.5t-39.5-21T38 216t-11-65q0-43 29-74q-13-33 3-74q3 1 8-.5t25 6T136 32q33-9 70-10q36 1 70 10q23-16 42.5-23T345 2l7 1q17 41 3 74q29 31 29 74M32 286.5q1-2.5-2.5-4t-4.5 1t2.5 4t4.5-1M43.5 299q2.5-2-1-5.5t-6-1.5t1 5.5t6 1.5M54 315q3-2 0-6.5t-6-2.5t0 6.5t6 2.5m15.5 16q2.5-3-1.5-7.5t-7-1.5t1.5 7.5t7 1.5m20.5 8.5q1-3.5-4.5-5.5t-6.5 2t4.5 5.5t6.5-2m17 5.5q6 0 6-4t-6-4t-6 4t6 4m22-2q3-1 4.5-2.5t.5-2.5q0-5-6-4q-3 1-4.5 2.5t-.5 3.5q0 4 6 3"></svg:path>`,
})
export class ZmdiGithubAltIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGithubBoxIcon],svg[zmdi-github-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 3h341q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H274q-7-1-7-21v-58q0-27-15-40q44-5 70.5-27t26.5-78q0-33-22-57q11-26-2-57q-18-6-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 91h-6q-12 31-2 57q-22 24-22 57q0 55 27 77.5t70 27.5q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5T56 303t8 9q15 7 24 31q1 2 2 4.5t6.5 9.5t13 10.5T130 374t30-2v36q0 20-8 21H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3"></svg:path>`,
})
export class ZmdiGithubBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGlobeIcon],svg[zmdi-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M192 385v-41q-18 0-30.5-12.5T149 301v-21L47 178q-4 20-4 38q0 65 42.5 113T192 385m147-54q45-49 45-115q0-53-29.5-96T277 58v9q0 17-12.5 29.5T235 109h-43v43q0 9-6.5 15t-14.5 6h-43v43h128q9 0 15 6.5t6 14.5v64h22q14 0 25 8.5t15 21.5"></svg:path>`,
})
export class ZmdiGlobeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGlobeAltIcon],svg[zmdi-globe-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M361 131q-32-56-92-76q19 35 29 76zM213 46q-27 39-40 85h81q-14-46-41-85M48 259h72q-3-25-3-43t3-43H48q-5 23-5 43t5 43m18 42q32 56 92 76q-19-35-29-76zm63-170q10-41 29-76q-60 20-92 76zm84 255q27-39 41-85h-81q13 46 40 85m50-127q4-25 4-43t-4-43H163q-3 25-3 43t3 43zm6 118q60-20 92-76h-63q-10 41-29 76m37-118h72q6-23 6-43t-6-43h-72q3 25 3 43t-3 43"></svg:path>`,
})
export class ZmdiGlobeAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGlobeLockIcon],svg[zmdi-globe-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 69q9 0 15 6.5t6 15.5v85q0 9-6 15t-15 6H341q-8 0-14.5-6t-6.5-15V91q0-9 6.5-15.5T341 69V59q0-22 16-38t38-16t37.5 16T448 59zm-17 0V59q0-15-10.5-26T395 22t-26 11t-11 26v10zm-49 171h44q1 12 1 21q0 89-62.5 151.5t-151 62.5t-151-62.5T0 261.5t62.5-151T213 48q33 0 64 10v54q0 18-12.5 30.5T235 155h-43v42q0 9-6.5 15.5T171 219h-43v42h128q9 0 15 6.5t6 15.5v64h22q14 0 25 8t15 21q45-49 45-115q0-7-2-21M192 431v-42q-18 0-30.5-12.5T149 347v-22L47 223q-4 20-4 38q0 65 42.5 113.5T192 431"></svg:path>`,
})
export class ZmdiGlobeLockIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleIcon],svg[zmdi-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 186v-1h201q3 12 3 36q0 93-56.5 150.5T213 429q-88 0-150.5-62T0 216T62 65T213 3q87 0 144 57l-57 56q-33-33-86-33q-54 0-92.5 39.5t-38.5 95t38.5 94.5t92.5 39q31 0 55-9.5t37.5-24.5t20.5-29.5t10-27.5H214z"></svg:path>`,
})
export class ZmdiGoogleIcon {
  readonly viewBox = input("0 0 424 432")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleDriveIcon],svg[zmdi-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140 35l73 128L73 408L0 280zm43 245h280l-73 128H110zm268-21H305L158 3h146z"></svg:path>`,
})
export class ZmdiGoogleDriveIcon {
  readonly viewBox = input("0 0 464 408")
  readonly width = input("1.14em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleEarthIcon],svg[zmdi-google-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 121q114 108 165 114q1-11 1-19q0-25-7-50q-4 9-11 10t-15.5-5.5T339 156t-14.5-18.5t-10-15t-3.5-6.5q-47-66-163-62q-32 13-56 36q65-30 130 31m143 182q11-20 16-39q-33-3-85.5-29.5T208 183l-35-25q-74-58-127 9q-8 24-8 49q0 38 16 73q9-26 25-26q15 0 40.5 13.5T161 295q10 3 31 10l31.5 10.5L250 322l30 3q12 0 22-1.5t20-4.5t15.5-4.5t15.5-6t12-5.5m-152 88q76 0 128-56q-45 13-83.5 13t-62.5-7l-25-8q-26-8-31 6t7 38q32 14 67 14m0-388q88 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213 3"></svg:path>`,
})
export class ZmdiGoogleEarthIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleGlassIcon],svg[zmdi-google-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 195h181v21q0 89-58 151t-145 62q-88 0-150.5-62.5T0 216T62.5 65.5T213 3q89 0 148 65l-38 38q-43-50-110-50q-66 0-113 47T53 216t47 113t113 47q56 0 96.5-36t50.5-92H235z"></svg:path>`,
})
export class ZmdiGoogleGlassIcon {
  readonly viewBox = input("0 0 416 432")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleMapsIcon],svg[zmdi-google-maps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 5q44 0 75.5 31.5T448 112q0 22-26.5 67.5t-52 92.5t-22.5 75q0 5-5.5 5t-5.5-5q2-28-23-75t-51.5-92.5T235 112q0-44 31-75.5T341 5m.5 64q-17.5 0-30 12.5T299 112t12.5 30.5t30 12.5t30-12.5T384 112t-12.5-30.5t-30-12.5M43 48h185q-20 32-20 69q0 26 32 83L1 439l-1-7V91q0-18 12.5-30.5T43 48m267 275l-51-51l14-15q24 39 37 66m61 152H56l157-158zm56-248v205l-1 7l-72-72q3-9 7-18.5t9-20t9.5-19t12-21.5t11-19.5T415 247zm-327 24q-17 0-27-7t-10-19q0-14 18-21q10-3 22-3h5q13 10 18 15t5 12q0 9-9 16t-22 7M75 129q0-10 5.5-15.5T93 108q13 0 20.5 12t7.5 25q0 11-6.5 15.5T101 165q-11 0-18.5-11.5T75 129m52 62l-7-6q-6-5-6-9q0-7 7-12q17-13 17-29q0-14-14-26h12l9-9h-43q-21 0-32.5 11.5T58 139q0 13 9 23t25 10h5l-2 8q0 7 6 14q-24 1-40 11q-16 9-16 25q0 13 11.5 21.5T90 260q25 0 39.5-12t14.5-27q0-16-17-30"></svg:path>`,
})
export class ZmdiGoogleMapsIcon {
  readonly viewBox = input("0 0 448 480")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleOldIcon],svg[zmdi-google-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147 403q36 0 59-17.5t23-41.5q0-20-12-33.5T169 271h-14q-33 0-59 9q-48 17-48 57q0 30 27 48t72 18M81 79q0 36 19 66.5t50 30.5q17 0 34.5-12.5T202 121q0-33-20-66t-52-33q-21 0-35 14.5T81 79m139 165q22 19 33.5 36t11.5 43q0 43-38.5 74.5T119 429q-58 0-88.5-23.5T0 348q0-43 42-67q39-24 107-29q-17-19-17-36q0-6 7-23h-15q-41 0-65.5-26.5T34 106q0-44 31.5-73.5T154 3h113l-23 22h-32q37 32 37 71q0 19-7.5 34.5T226 154t-23 20q-18 14-18 29q0 13 15 26z"></svg:path>`,
})
export class ZmdiGoogleOldIcon {
  readonly viewBox = input("0 0 272 432")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGooglePagesIcon],svg[zmdi-google-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 43q0-18 12.5-30.5T43 0h128v107L85 85l22 86H0zm107 170l-22 86l86-22v107H43q-18 0-30.5-12.5T0 341V213zm192 86l-22-86h107v128q0 18-12.5 30.5T341 384H213V277zM341 0q18 0 30.5 12.5T384 43v128H277l22-86l-86 22V0z"></svg:path>`,
})
export class ZmdiGooglePagesIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGooglePlayIcon],svg[zmdi-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 397V35Q0 14 18 6l210 210L18 426q-18-9-18-29m295-114L65 415l181-181zm71-92q13 10 13 25t-12 25l-49 28l-54-53l54-53zM65 17l230 132l-49 49z"></svg:path>`,
})
export class ZmdiGooglePlayIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGooglePlusIcon],svg[zmdi-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M137 167h128q7 37-3 72q-10 34-35 57q-23 21-56 29q-36 8-70-1q-27-7-49-25q-24-19-37-45q-22-42-12-89q3-18 12-34q24-50 77-68q46-16 92 1q24 9 44 27q-2 3-7 7.5t-6 6.5q-4 3-12.5 11.5T190 130q-13-13-30-18q-20-6-40-1q-24 5-41 22q-13 14-20 33q-9 26 0 53q9 26 32 42q14 10 30 13q15 3 33 0q17-3 30-12q23-15 27-42h-74zm290 3v34h-47v46h-34v-46h-47v-34h47v-47h34v47z"></svg:path>`,
})
export class ZmdiGooglePlusIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGooglePlusBoxIcon],svg[zmdi-google-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 3h340q17 0 30.5 17T427 56v330q0 18-12.5 30.5T384 429H43q-18 0-30.5-12.5T0 387V46q0-18 12.5-30.5T43 3m108 104q-45 0-76.5 32T43 216t31.5 77t76.5 32q47 0 75.5-29.5T255 219q0-13-2-19H151v38h62q-3 17-18 31.5T151 284q-28 0-47.5-20T84 216t19.5-48t47.5-20q27 0 43 16l30-28q-29-29-73-29m171 62v31h-31v31h31v31h31v-31h30l1-31h-31v-31z"></svg:path>`,
})
export class ZmdiGooglePlusBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGpsIcon],svg[zmdi-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425 219h44v42h-44q-7 67-54.5 114.5T256 431v44h-43v-44q-66-8-114-55.5T44 261H0v-42h44q7-67 55-114.5T213 49V5h43v44q67 8 114.5 55.5T425 219M235 389q62 0 105.5-43.5T384 240t-43.5-105.5T235 91t-106 43.5T85 240t44 105.5T235 389"></svg:path>`,
})
export class ZmdiGpsIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGpsDotIcon],svg[zmdi-gps-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.5 155q35.5 0 60.5 25t25 60t-25 60t-60.5 25t-60.5-25t-25-60t25-60t60.5-25M425 219h44v42h-44q-7 67-54.5 114.5T256 431v44h-43v-44q-66-8-114-55.5T44 261H0v-42h44q7-67 55-114.5T213 49V5h43v44q67 8 114.5 55.5T425 219M235 389q62 0 105.5-43.5T384 240t-43.5-105.5T235 91t-106 43.5T85 240t44 105.5T235 389"></svg:path>`,
})
export class ZmdiGpsDotIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGpsOffIcon],svg[zmdi-gps-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425 219h44v42h-43q-4 36-21 68l-32-32q11-28 11-57q0-62-43.5-105.5T235 91q-30 0-57 11l-32-32q32-17 67-21V5h43v44q67 8 114.5 55.5T425 219M43 75l27-27l357 357l-27 27l-44-44q-44 36-100 43v44h-43v-44q-66-8-114-55.5T44 261H0v-42h44q6-56 42-100zm283 283L116 149q-31 40-31 91q0 62 44 105.5T235 389q50 0 91-31"></svg:path>`,
})
export class ZmdiGpsOffIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGradientIcon],svg[zmdi-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 128h42v43h-42zm-43 43h43v42h-43zm85 0h43v42h-43zm43-43h43v43h-43zm-171 0h43v43H85zM341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM128 320v-43H85v43zm85 0v-43h-42v43zm86 0v-43h-43v43zm42-149V43H43v128h42v42H43v43h42v-43h43v43h43v-43h42v43h43v-43h43v43h42v-43h-42v-42z"></svg:path>`,
})
export class ZmdiGradientIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGraduationCapIcon],svg[zmdi-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85 217l150 82l149-82v86l-149 81l-150-81zM235 0l234 128v171h-42V151L235 256L0 128z"></svg:path>`,
})
export class ZmdiGraduationCapIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGrainIcon],svg[zmdi-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 192q18 0 30.5 12.5t12.5 30t-12.5 30T128 277t-30.5-12.5t-12.5-30t12.5-30T128 192m-85.5-85q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5m0 170q17.5 0 30 12.5T85 320t-12.5 30.5t-30 12.5t-30-12.5T0 320t12.5-30.5t30-12.5m256-170q-17.5 0-30-12.5T256 64t12.5-30.5t30-12.5t30 12.5T341 64t-12.5 30.5t-30 12.5m-85 170q17.5 0 30 12.5T256 320t-12.5 30.5t-30 12.5t-30-12.5T171 320t12.5-30.5t30-12.5m85-85q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5m-85-85q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5M128 21q18 0 30.5 12.5T171 64t-12.5 30.5T128 107T97.5 94.5T85 64t12.5-30.5T128 21"></svg:path>`,
})
export class ZmdiGrainIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGraphicEqIcon],svg[zmdi-graphic-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 344V88h43v256zm86 85V3h42v426zM0 259v-86h43v86zm256 85V88h43v256zm85-171h43v86h-43z"></svg:path>`,
})
export class ZmdiGraphicEqIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGridIcon],svg[zmdi-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM128 387v-86H43v86zm0-128v-86H43v86zm0-128V45H43v86zm128 256v-86h-85v86zm0-128v-86h-85v86zm0-128V45h-85v86zm128 256v-86h-85v86zm0-128v-86h-85v86zm0-128V45h-85v86z"></svg:path>`,
})
export class ZmdiGridIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGridOffIcon],svg[zmdi-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 61h-31L97 19h330q17 0 29.5 12.5T469 61v330l-42-43v-31h-31l-43-42h74v-86h-86v74l-42-43v-31h-31l-43-42h74V61h-86v74l-42-43zm170 0v86h86V61zM27 3l458 458l-27 27l-43-43H85q-17 0-29.5-12.5T43 403V73L0 30zm186 241v31h31zM85 116v31h31zm86 287v-86H85v86zm0-128v-74l-12-12H85v86zm128 128v-74l-12-12h-74v86zm42 0h31l-31-31z"></svg:path>`,
})
export class ZmdiGridOffIcon {
  readonly viewBox = input("0 0 488 488")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGroupIcon],svg[zmdi-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 155v85h107v-85zM0 5h85v22h299V5h85v86h-21v298h21v86h-85v-22H85v22H0v-86h21V91H0zm85 384v22h299v-22h21V91h-21V69H85v22H64v298zm22-277h192v85h64v171H149v-85h-42zm192 171H192v42h128v-85h-21z"></svg:path>`,
})
export class ZmdiGroupIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiGroupWorkIcon],svg[zmdi-group-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M128 333q22 0 37.5-15.5T181 280t-15.5-37.5T128 227t-37.5 15.5T75 280t15.5 37.5T128 333m32-202q0 22 15.5 37.5T213 184t38-15.5t16-37.5t-16-38t-38-16t-37.5 16t-15.5 38m139 202q22 0 37.5-15.5T352 280t-15.5-37.5T299 227t-38 15.5t-16 37.5t16 37.5t38 15.5"></svg:path>`,
})
export class ZmdiGroupWorkIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHdIcon],svg[zmdi-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM171 256V128h-32v53H96v-53H64v128h32v-43h43v43zm42-128v128h86q8 0 14.5-6.5T320 235v-86q0-8-6.5-14.5T299 128zm32 96v-64h43v64z"></svg:path>`,
})
export class ZmdiHdIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrIcon],svg[zmdi-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 181q0 19-19 30l19 45h-32l-19-43h-24v43h-32V128h75q13 0 22.5 9.5T384 160zm-32 0v-21h-43v21zM75 171v-43h32v128H75v-53H32v53H0V128h32v43zm138-43q13 0 22.5 9.5T245 160v64q0 13-9.5 22.5T213 256h-74V128zm0 96v-64h-42v64z"></svg:path>`,
})
export class ZmdiHdrIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrOffIcon],svg[zmdi-hdr-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M343 272h-8l-24-23V144h75q13 0 22.5 9.5T418 176v21q0 10-5.5 18.5T399 227l19 45h-32l-19-43h-24zm0-96v21h43v-21zm-96 0h-8l-32-32h40q13 0 22.5 9.5T279 176v41l-32-32zm-74-21l258 256l-24 23l-162-162h-72v-73l-32-32v105h-32v-53H66v53H34V144h32v43h43v-43h8L0 27L23 5z"></svg:path>`,
})
export class ZmdiHdrOffIcon {
  readonly viewBox = input("0 0 432 440")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrStrongIcon],svg[zmdi-hdr-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 64q53 0 90.5 37.5T469 192t-37.5 90.5T341 320t-90.5-37.5T213 192t37.5-90.5T341 64M85.5 107q35.5 0 60.5 25t25 60t-25 60t-60.5 25T25 252T0 192t25-60t60.5-25m0 128q17.5 0 30-12.5T128 192t-12.5-30.5t-30-12.5t-30 12.5T43 192t12.5 30.5t30 12.5"></svg:path>`,
})
export class ZmdiHdrStrongIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrWeakIcon],svg[zmdi-hdr-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.5 107q35.5 0 60.5 25t25 60t-25 60t-60.5 25T25 252T0 192t25-60t60.5-25M341 64q53 0 90.5 37.5T469 192t-37.5 90.5T341 320t-90.5-37.5T213 192t37.5-90.5T341 64m.5 213q35.5 0 60.5-25t25-60t-25-60t-60.5-25t-60.5 25t-25 60t25 60t60.5 25"></svg:path>`,
})
export class ZmdiHdrWeakIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHeadsetIcon],svg[zmdi-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 5q80 0 136 56.5T384 197v150q0 26-18.5 45T320 411h-64V240h85v-43q0-62-43.5-105.5T192 48T86.5 91.5T43 197v43h85v171H64q-27 0-45.5-19T0 347V197q0-79 56-135.5T192 5"></svg:path>`,
})
export class ZmdiHeadsetIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHeadsetMicIcon],svg[zmdi-headset-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 5q80 0 136 56.5T384 197v214q0 26-18.5 45T320 475H192v-43h149v-21h-85V240h85v-43q0-62-43.5-105.5T192 48T86.5 91.5T43 197v43h85v171H64q-27 0-45.5-19T0 347V197q0-79 56-135.5T192 5"></svg:path>`,
})
export class ZmdiHeadsetMicIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHearingIcon],svg[zmdi-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 403q17 0 29.5-12.5T341 360h43q0 35-25 60t-60 25q-19 0-35-7q-41-21-59-76q-4-14-12-22.5T169 318q-41-31-61-67q-23-41-23-83q0-63 43.5-106T235 19t106 43t43 106h-43q0-45-31-76t-75.5-31T159 92t-31 76q0 31 17 63q16 27 50 54q13 10 20 16t16.5 19t14.5 29q13 38 36 50q8 4 17 4M99 32Q43 88 43 168q0 79 56 136l-30 30Q0 265 0 168T69 2zm82 136q0-22 16-37.5t38-15.5t37.5 15.5T288 168t-15.5 37.5T235 221t-38-15.5t-16-37.5"></svg:path>`,
})
export class ZmdiHearingIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHelpIcon],svg[zmdi-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M235 365v-42h-43v42zm44-165q20-20 20-48q0-35-25-60t-60.5-25T153 92t-25 60h43q0-18 12.5-30.5t30-12.5t30 12.5T256 152t-13 30l-26 27q-25 25-25 60v11h43q0-22 5.5-34.5T260 220z"></svg:path>`,
})
export class ZmdiHelpIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHelpOutlineIcon],svg[zmdi-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 344v-43h43v43zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50m0-299q35.5 0 60.5 25t25 60q0 18-10 32.5t-22 23t-22 22t-10 29.5h-43q0-23 10-39.5t22-24t22-18.5t10-25q0-17-12.5-29.5t-30-12.5t-30 12.5T171 173h-43q0-35 25-60t60.5-25"></svg:path>`,
})
export class ZmdiHelpOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHomeIcon],svg[zmdi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 363H64V192H0L213 0l214 192h-64v171H256V235h-85z"></svg:path>`,
})
export class ZmdiHomeIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHospitalIcon],svg[zmdi-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-21 235v-86h-85V64h-86v85H64v86h85v85h86v-85z"></svg:path>`,
})
export class ZmdiHospitalIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHospitalAltIcon],svg[zmdi-hospital-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 91v42l-43 128l43 128v43H0v-43l43-128L0 133V91h271l31-86l50 19l-24 67zM277 283v-43h-64v-64h-42v64h-64v43h64v64h42v-64z"></svg:path>`,
})
export class ZmdiHospitalAltIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHotelIcon],svg[zmdi-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 213q-27 0-45.5-18.5t-18.5-45T82.5 104T128 85t45.5 19t18.5 45.5t-18.5 45T128 213M384 85q35 0 60 25t25 61v192h-42v-64H43v64H0V43h43v192h170V85z"></svg:path>`,
})
export class ZmdiHotelIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHourglassIcon],svg[zmdi-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h256v128l-85 85l85 85v128H0V301l85-85l-85-85z"></svg:path>`,
})
export class ZmdiHourglassIcon {
  readonly viewBox = input("0 0 256 432")
  readonly width = input("0.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHourglassAltIcon],svg[zmdi-hourglass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h256v128l-85 85l85 85v128H0V301l85-85l-85-85zm213 309l-85-85l-85 85zM43 120h170V45H43z"></svg:path>`,
})
export class ZmdiHourglassAltIcon {
  readonly viewBox = input("0 0 256 432")
  readonly width = input("0.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHourglassOutlineIcon],svg[zmdi-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h256v128l-85 85l85 85v128H0V301l85-85l-85-85zm213 309l-85-85l-85 85v75h170zm-85-107l85-85V45H43v75z"></svg:path>`,
})
export class ZmdiHourglassOutlineIcon {
  readonly viewBox = input("0 0 256 432")
  readonly width = input("0.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHqIcon],svg[zmdi-hq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21q18 0 30.5 12.5T384 64v256q0 18-12.5 30.5T341 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM171 256V128h-32v53H96v-53H64v128h32v-43h43v43zm149-21v-86q0-8-6.5-14.5T299 128h-64q-9 0-15.5 6.5T213 149v86q0 8 6.5 14.5T235 256h16v32h32v-32h16q8 0 14.5-6.5T320 235m-75-11v-64h43v64z"></svg:path>`,
})
export class ZmdiHqIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiHttpIcon],svg[zmdi-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M75 171v-43h32v128H75v-53H32v53H0V128h32v43zm53-11v-32h96v32h-32v96h-32v-96zm117 0v-32h96v32h-32v96h-32v-96zm192-32q13 0 22.5 9.5T469 160v21q0 13-9.5 22.5T437 213h-42v43h-32V128zm0 53v-21h-42v21z"></svg:path>`,
})
export class ZmdiHttpIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiImageIcon],svg[zmdi-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 341q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43zM117 224l-74 96h298l-96-128l-74 96z"></svg:path>`,
})
export class ZmdiImageIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiImageAltIcon],svg[zmdi-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 320q0 18-12.5 30.5T427 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h384q17 0 29.5 12.5T469 64zM160 203l-75 96h299l-96-128l-75 96z"></svg:path>`,
})
export class ZmdiImageAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiImageOIcon],svg[zmdi-image-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H43v298zM234 198l75 101H75l58-76l42 51z"></svg:path>`,
})
export class ZmdiImageOIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInboxIcon],svg[zmdi-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H42q-17 0-29.5-12.5T0 341V43q0-18 12.5-30.5T42 0zm0 256V43H42v213h86q0 27 18.5 45.5T192 320t45.5-18.5T256 256zm-64-107l-85 86l-85-86h42V85h86v64z"></svg:path>`,
})
export class ZmdiInboxIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInfoIcon],svg[zmdi-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M235 323V195h-43v128zm0-171v-43h-43v43z"></svg:path>`,
})
export class ZmdiInfoIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInfoOutlineIcon],svg[zmdi-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 323V195h43v128zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50M192 152v-43h43v43z"></svg:path>`,
})
export class ZmdiInfoOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInputAntennaIcon],svg[zmdi-input-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 91q62 0 105.5 43.5T384 240h-43q0-44-31-75.5T235 133t-75.5 31.5T128 240H85q0-62 44-105.5T235 91m21 198v70l73 73l-30 30l-64-64l-64 64l-30-30l72-73v-70q-14-6-23-19.5t-9-29.5q0-22 16-37.5t38-15.5t37.5 15.5T288 240q0 35-32 49M235 5q97 0 165.5 69T469 240h-42q0-80-56.5-136t-136-56T99 104T43 240H0q0-97 69-166T235 5"></svg:path>`,
})
export class ZmdiInputAntennaIcon {
  readonly viewBox = input("0 0 472 464")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInputCompositeIcon],svg[zmdi-input-composite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 27v85h43v128H0V112h43V27q0-9 6-15.5T64 5t15 6.5T85 27m86 298v-42h128v42q0 21-12 37.5T256 385v90h-43v-90q-19-6-30.5-22.5T171 325M0 325v-42h128v42q0 21-12 37.5T85 385v90H43v-90q-19-6-31-22.5T0 325m427-213h42v128H341V112h43V27q0-9 6.5-15.5t15-6.5t15 6.5T427 27zM256 27v85h43v128H171V112h42V27q0-9 6.5-15.5t15-6.5t15 6.5T256 27m85 298v-42h128v42q0 21-11.5 37.5T427 385v90h-43v-90q-19-6-31-22.5T341 325"></svg:path>`,
})
export class ZmdiInputCompositeIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInputHdmiIcon],svg[zmdi-input-hdmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 109h22v128l-64 128v64H64v-64L0 237V109h21V45q0-17 12.5-29.5T64 3h171q17 0 29.5 12.5T277 45zM64 45v64h43V67h21v42h43V67h21v42h43V45z"></svg:path>`,
})
export class ZmdiInputHdmiIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInputPowerIcon],svg[zmdi-input-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 85q15 0 28.5 13.5T256 128v117l-75 75v64H75v-64L0 245V128q0-16 13.5-29.5T42 85h1V0h42v85h86V0h42z"></svg:path>`,
})
export class ZmdiInputPowerIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInputSvideoIcon],svg[zmdi-input-svideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 229.5q0 13.5-9 22.5t-22.5 9t-23-9t-9.5-22.5t9.5-23t23-9.5t22.5 9.5t9 23m150-107q0 13.5-9.5 23T267 155h-64q-14 0-23-9.5t-9-23t9-22.5t23-9h64q13 0 22.5 9t9.5 22.5M160 304q13 0 22.5 9.5T192 336t-9.5 22.5T160 368t-22.5-9.5T128 336t9.5-22.5T160 304M235 5q97 0 165.5 69T469 240t-68.5 166T235 475T69 406T0 240T69 74T235 5m-.5 427q79.5 0 136-56.5T427 240t-56.5-135.5t-136-56.5T99 104.5T43 240t56 135.5T234.5 432M352 197q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9t-22.5-9t-9.5-22.5t9.5-23T352 197m-42.5 107q13.5 0 22.5 9.5t9 22.5t-9 22.5t-22.5 9.5t-23-9.5T277 336t9.5-22.5t23-9.5"></svg:path>`,
})
export class ZmdiInputSvideoIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInstagramIcon],svg[zmdi-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 99V56q0-11-11-11h-42q-11 0-11 11v43q0 10 11 10h42q11 0 11-10M53 387h320q11 0 11-11V195h-45q2 12 2 21q0 53-37.5 90.5T213 344t-90.5-37.5T85 216q0-11 2-21H43v181q0 11 10 11m160.5-256q-35.5 0-60.5 25t-25 60t25 60t60.5 25t60.5-25t25-60t-25-60t-60.5-25M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"></svg:path>`,
})
export class ZmdiInstagramIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInvertColorsIcon],svg[zmdi-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M291 121q50 50 50 121t-50 120.5T170.5 412T50 362.5T0 242t50-121L171 0zM171 370V61l-91 90q-37 38-37 91t37 90q37 38 91 38"></svg:path>`,
})
export class ZmdiInvertColorsIcon {
  readonly viewBox = input("0 0 344 416")
  readonly width = input("0.83em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiInvertColorsOffIcon],svg[zmdi-invert-colors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m377 397l7 8l-27 27l-58-58q-46 38-107 38q-71 0-121-50q-46-46-49.5-112T59 134L0 75l27-27l59 59l30 30l76 76l134 134zm-185-27V267L90 165q-26 34-26 77q0 53 38 90q37 38 90 38m0-309l-49 48l-30-30l79-79l121 121q38 39 47 92.5T347 313L192 159z"></svg:path>`,
})
export class ZmdiInvertColorsOffIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiIridescentIcon],svg[zmdi-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 301V173h299v128zM159 4h43v63h-43zm171 53l31 30l-39 38l-30-30zM202 471h-43v-63h43zm159-83l-31 30l-38-39l30-30zM0 87l30-30l38 38l-30 30zm30 331L0 387l38-38l30 30z"></svg:path>`,
})
export class ZmdiIridescentIcon {
  readonly viewBox = input("0 0 368 472")
  readonly width = input("0.78em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiKeyIcon],svg[zmdi-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 149h220v86h-42v85h-86v-85h-92q-14 37-47 61t-74 24q-53 0-90.5-37.5T0 192t37.5-90.5T128 64q41 0 74 24t47 61m-121 86q18 0 30.5-12.5T171 192t-12.5-30.5T128 149t-30.5 12.5T85 192t12.5 30.5T128 235"></svg:path>`,
})
export class ZmdiKeyIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiKeyboardIcon],svg[zmdi-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 43q18 0 30.5 12.5T427 85v214q0 17-12.5 29.5T384 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43zm-192 64v42h43v-42zm0 64v42h43v-42zm-64-64v42h43v-42zm0 64v42h43v-42zm-21 42v-42H64v42zm0-64v-42H64v42zm192 150v-43H128v43zm0-86v-42h-43v42zm0-64v-42h-43v42zm64 64v-42h-43v42zm0-64v-42h-43v42z"></svg:path>`,
})
export class ZmdiKeyboardIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiKeyboardHideIcon],svg[zmdi-keyboard-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0q18 0 30.5 12.5T427 43v213q0 18-12.5 30.5T384 299H43q-18 0-30.5-12.5T0 256V43q0-18 12.5-30.5T43 0zM192 64v43h43V64zm0 64v43h43v-43zm-64-64v43h43V64zm0 64v43h43v-43zm-21 43v-43H64v43zm0-64V64H64v43zm192 149v-43H128v43zm0-85v-43h-43v43zm0-64V64h-43v43zm64 64v-43h-43v43zm0-64V64h-43v43zM213 427l-85-86h171z"></svg:path>`,
})
export class ZmdiKeyboardHideIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLabelIcon],svg[zmdi-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414 207q13 13 13 30.5T414 267L265 417q-13 12-30.5 12T205 417L13 225Q0 212 0 195V45q0-17 12.5-29.5T43 3h149q18 0 30 12zM74.5 109q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5T52 54.5t-9 23t9 22.5t22.5 9"></svg:path>`,
})
export class ZmdiLabelIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLabelAltIcon],svg[zmdi-label-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m312 61l93 131l-93 131q-13 18-35 18H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43h234q22 0 35 18"></svg:path>`,
})
export class ZmdiLabelAltIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLabelAltOutlineIcon],svg[zmdi-label-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m312 61l93 131l-93 131q-13 18-35 18H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43h234q22 0 35 18m-35 238l76-107l-76-107H43v214z"></svg:path>`,
})
export class ZmdiLabelAltOutlineIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLabelHeartIcon],svg[zmdi-label-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414 207q13 13 13 30.5T414 267L265 417q-13 12-30.5 12T205 417L13 225Q0 212 0 195V45q0-17 12.5-29.5T43 3h149q18 0 30 12zM74.5 109q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5T52 54.5t-9 23t9 22.5t22.5 9M326 286q15-16 15-38t-15.5-37.5T288 195t-38 15l-15 16l-16-16q-15-15-38-15q-22 0-37.5 15.5T128 248t16 38l91 91z"></svg:path>`,
})
export class ZmdiLabelHeartIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLabelsIcon],svg[zmdi-labels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 363q-16-7-22.5-23T3 308l52-125v192zm416-79q7 16 0 32.5T419 340l-157 65q-8 3-16 3q-29 0-39-26L101 126q-4-8-3-17q0-28 26-38L281 6q8-3 17-3q28 0 39 26zM140.5 131q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5M98 365V230l73 178h-31q-17 0-29.5-12.5T98 365"></svg:path>`,
})
export class ZmdiLabelsIcon {
  readonly viewBox = input("0 0 448 408")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLampIcon],svg[zmdi-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54 364l39-39l30 30l-39 39zm159 83v-63h43v63zM64 192v43H0v-43zm235-89q29 17 46.5 46t17.5 64q0 53-37.5 90.5T235 341t-90.5-37.5T107 213q0-35 17-64t47-46V0h128zm106 89h64v43h-64zm-59 163l30-29l39 38l-30 30z"></svg:path>`,
})
export class ZmdiLampIcon {
  readonly viewBox = input("0 0 472 448")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLandscapeIcon],svg[zmdi-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m277 64l192 256H0l128-171l96 128l34-25l-61-81z"></svg:path>`,
})
export class ZmdiLandscapeIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguageCss3Icon],svg[zmdi-language-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59 30h342l-31 156l-5 25l-24 121l-183 61L0 332l16-80h67l-6 33l95 36l111-36l15-77H24l13-67h274l9-44H46z"></svg:path>`,
})
export class ZmdiLanguageCss3Icon {
  readonly viewBox = input("0 0 408 400")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguageHtml5Icon],svg[zmdi-language-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m179 334l91-25l13-138H120l-4-45h171l4-45H66l13 135h155l-5 58l-50 14l-50-14l-4-37H80l7 72zM0 6h357l-32 365l-146 51l-147-51z"></svg:path>`,
})
export class ZmdiLanguageHtml5Icon {
  readonly viewBox = input("0 0 360 424")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguageJavascriptIcon],svg[zmdi-language-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h384v384H0zm101 321q15 33 54 33q25 0 39.5-13.5T209 300V176h-36v123q0 23-19 23q-13 0-24-19zm127-4q19 37 66 37q27 0 43.5-13.5T354 304q0-22-11.5-34T306 247l-9-4q-12-5-17-9.5t-5-12.5q0-6 4.5-10.5T292 206q15 0 24 15l27-18q-16-29-51-29q-24 0-38.5 13.5T239 222t11 33t33 21l9 4q10 5 14.5 7t8 6.5T318 304q0 8-6.5 13t-17.5 5q-23 0-36-22z"></svg:path>`,
})
export class ZmdiLanguageJavascriptIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguagePythonIcon],svg[zmdi-language-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M366 112q25 0 43 18t18 43v81q0 25-18 43t-43 18H213q0 6 5 13t10 7h92v36q0 25-18 43t-43 18h-91q-26 0-43.5-18T107 371v-80q0-25 17.5-43t43.5-18h112q25 0 42.5-18t17.5-43v-57zm-92 252q-15 0-15 19q0 15 15 15q7 0 11-4.5t4-10.5q0-19-15-19M61 325q-25 0-43-17.5T0 264v-80q0-26 18-43.5T61 123h152q0-7-4.5-14t-10.5-7h-91V66q0-25 17.5-43T168 5h91q25 0 43 18t18 43v80q0 26-18 43.5T259 207H147q-25 0-43 18t-18 43v57zm91-251q16 0 16-19q0-15-16-15q-15 0-15 15q0 19 15 19"></svg:path>`,
})
export class ZmdiLanguagePythonIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLanguagePythonAltIcon],svg[zmdi-language-python-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 90q45-29 82-35.5t60 5.5t39 35.5t23 48t8 49.5q3 37-18.5 72.5T136 313t-83-16v120L0 383zm51 38v121q41 25 65.5 21t35-24.5T162 189q0-47-17-68t-41.5-17.5T51 128m248-72q-4 78 0 155q3 21 14.5 30.5t26.5 8t30-6t25-10.5l10-5V73l53 6v207q0 28-8 50.5t-20 36t-27 23t-30.5 13.5t-27.5 6t-20 2h-8l-18-51q35 0 59-8.5t33-20t13.5-23.5t3.5-20l-1-8q-42 16-73.5 17.5T286 296t-25.5-20.5T249 255l-2-10V90z"></svg:path>`,
})
export class ZmdiLanguagePythonAltIcon {
  readonly viewBox = input("0 0 464 424")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLaptopIcon],svg[zmdi-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 320h85v43H0v-43h85q-17 0-29.5-12.5T43 277V64q0-18 12.5-30.5T85 21h342q17 0 29.5 12.5T469 64v213q0 18-12.5 30.5T427 320M85 64v213h342V64z"></svg:path>`,
})
export class ZmdiLaptopIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLaptopChromebookIcon],svg[zmdi-laptop-chromebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 320h43v43H0v-43h43V0h426zm-170 0v-21h-86v21zm128-64V43H85v213z"></svg:path>`,
})
export class ZmdiLaptopChromebookIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLaptopMacIcon],svg[zmdi-laptop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 320h85q0 18-12.5 30.5T469 363H43q-18 0-30.5-12.5T0 320h85q-17 0-29.5-12.5T43 277V43q0-18 12.5-30.5T85 0h342q17 0 29.5 12.5T469 43v234q0 18-12.5 30.5T427 320M85 43v234h342V43zm171 298q9 0 15-6t6-15t-6-15t-15-6t-15 6t-6 15t6 15t15 6"></svg:path>`,
})
export class ZmdiLaptopMacIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLastfmIcon],svg[zmdi-lastfm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325 312q-58 0-87-22.5T196 225l-16-49q-11-32-25-48t-44-16q-25 0-42.5 20T51 194q0 35 16 56t42 21q17 0 33-7t23-14l8-7l15 43q-3 3-9 7t-27 11.5t-45 7.5q-52 0-79.5-30T0 196q0-59 28.5-91.5T110 72q49 0 76 20t42 68l16 50q10 30 28.5 46t53.5 16q51 0 51-26q0-23-33-30l-34-8q-56-14-56-65q0-38 24.5-54.5T341 72q78 0 84 63l-49 6q-3-30-38-30t-35 26q0 23 28 29l31 7q65 15 65 71q0 68-102 68"></svg:path>`,
})
export class ZmdiLastfmIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLayersIcon],svg[zmdi-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 356l157-123l35 27l-192 149L0 260l35-27zm0-55L35 179L0 152L192 3l192 149l-35 27z"></svg:path>`,
})
export class ZmdiLayersIcon {
  readonly viewBox = input("0 0 384 416")
  readonly width = input("0.93em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLayersOffIcon],svg[zmdi-layers-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m380 304l-31-31l26-19l30 30zm-10-101l-51 40L151 75l62-48l192 149zM27 5l400 400l-27 27l-81-81l-106 82L21 284l35-27l157 123l76-59l-31-30l-45 34L56 203l-35-27l69-54L0 32z"></svg:path>`,
})
export class ZmdiLayersOffIcon {
  readonly viewBox = input("0 0 432 440")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLeakIcon],svg[zmdi-leak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0q0 27-18.5 45.5T0 64V0zm171 0q0 97-69 166T0 235v-43q80 0 136-56T192 0zm-86 0q0 62-43.5 105.5T0 149v-42q44 0 75.5-31.5T107 0zm0 384q0-97 69-166t166-69v43q-80 0-136 56t-56 136zm171 0q0-27 18.5-45.5T384 320v64zm-85 0q0-62 43.5-105.5T384 235v42q-44 0-75.5 31.5T277 384z"></svg:path>`,
})
export class ZmdiLeakIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLeakOffIcon],svg[zmdi-leak-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 0q0 30-11 57l-34-34q3-11 3-23zM0 27L27 0l357 357l-27 27l-61-61q-19 28-19 61h-42q0-51 31-91l-31-30q-43 52-43 121h-43q0-86 56-152l-53-53Q86 235 0 235v-43q68 0 122-43l-31-31q-40 31-91 31v-42q33 0 61-19zM235 0q0 64-34 120l-31-31q22-42 22-89zm126 280l-34-34q28-11 57-11v42q-12 0-23 3m-97-97q56-34 120-34v43q-47 0-89 22z"></svg:path>`,
})
export class ZmdiLeakOffIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLibraryIcon],svg[zmdi-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 206q81-75 192-75v234q-110 0-192 76q-81-76-192-76V131q111 0 192 75m0-75q-27 0-45.5-19T128 66.5t18.5-45T192 3t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class ZmdiLibraryIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLinkIcon],svg[zmdi-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 192q0 27 19 46.5t47 19.5h85v41h-85q-44 0-75.5-31.5T0 192t31.5-75.5T107 85h85v41h-85q-28 0-47 19.5T41 192m87 21v-42h171v42zM320 85q44 0 75.5 31.5T427 192t-31.5 75.5T320 299h-85v-41h85q27 0 46.5-19.5T386 192t-19.5-46.5T320 126h-85V85z"></svg:path>`,
})
export class ZmdiLinkIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLinkedinIcon],svg[zmdi-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5M88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37m13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5"></svg:path>`,
})
export class ZmdiLinkedinIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLinkedinBoxIcon],svg[zmdi-linkedin-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 365V244q0-31-22-53t-53-22q-15 0-30 8.5T235 199v-26h-64v192h64V252q0-13 9-22.5t22.5-9.5t23 9.5T299 252v113zM96 137q16 0 27.5-11T135 99t-11.5-27.5T96 60T68.5 71.5T57 99t11.5 27T96 137m32 228V173H64v192zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"></svg:path>`,
})
export class ZmdiLinkedinBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLockIcon],svg[zmdi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 155q17 0 29.5 12.5T341 197v214q0 17-12.5 29.5T299 453H43q-18 0-30.5-12.5T0 411V197q0-17 12.5-29.5T43 155h21v-43q0-44 31.5-75.5T171 5t75 31.5t31 75.5v43zM170.5 347q17.5 0 30-12.5T213 304t-12.5-30.5t-30-12.5t-30 12.5T128 304t12.5 30.5t30 12.5M237 155v-43q0-27-19.5-46.5t-47-19.5T124 65.5T105 112v43z"></svg:path>`,
})
export class ZmdiLockIcon {
  readonly viewBox = input("0 0 344 456")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLockOpenIcon],svg[zmdi-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 347q-17.5 0-30-12.5T128 304t12.5-30.5t30-12.5t30 12.5T213 304t-12.5 30.5t-30 12.5M299 155q17 0 29.5 12.5T341 197v214q0 17-12.5 29.5T299 453H43q-18 0-30.5-12.5T0 411V197q0-17 12.5-29.5T43 155h194v-43q0-27-19.5-46.5t-47-19.5T124 65.5T105 112H64q0-44 31.5-75.5T171 5t75 31.5t31 75.5v43zm0 256V197H43v214z"></svg:path>`,
})
export class ZmdiLockOpenIcon {
  readonly viewBox = input("0 0 344 456")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLockOutlineIcon],svg[zmdi-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 155q17 0 29.5 12.5T341 197v214q0 17-12.5 29.5T299 453H43q-18 0-30.5-12.5T0 411V197q0-17 12.5-29.5T43 155h21v-43q0-44 31.5-75.5T171 5t75 31.5t31 75.5v43zM170.5 46Q143 46 124 65.5T105 112h2v43h130v-43q0-27-19.5-46.5t-47-19.5M299 411V197H43v214zm-128.5-64q-17.5 0-30-12.5T128 304t12.5-30.5t30-12.5t30 12.5T213 304t-12.5 30.5t-30 12.5"></svg:path>`,
})
export class ZmdiLockOutlineIcon {
  readonly viewBox = input("0 0 344 456")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowDownIcon],svg[zmdi-long-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 0v302l77-76l30 30l-128 128L0 256l30-30l77 76V0z"></svg:path>`,
})
export class ZmdiLongArrowDownIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowLeftIcon],svg[zmdi-long-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 171v42H82l76 77l-30 30L0 192L128 64l30 30l-76 77z"></svg:path>`,
})
export class ZmdiLongArrowLeftIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowReturnIcon],svg[zmdi-long-arrow-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 85h42v128H82l76 77l-30 30L0 192L128 64l30 30l-76 77h281z"></svg:path>`,
})
export class ZmdiLongArrowReturnIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowRightIcon],svg[zmdi-long-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171h302l-76-77l30-30l128 128l-128 128l-30-30l76-77H0z"></svg:path>`,
})
export class ZmdiLongArrowRightIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowTabIcon],svg[zmdi-long-arrow-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226 94l30-30l128 128l-128 128l-30-30l76-77H0v-42h302zm179-30h43v256h-43z"></svg:path>`,
})
export class ZmdiLongArrowTabIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowUpIcon],svg[zmdi-long-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 384V82l-77 76l-30-30L128 0l128 128l-30 30l-77-76v302z"></svg:path>`,
})
export class ZmdiLongArrowUpIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLooksIcon],svg[zmdi-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.5 149q61.5 0 105.5 44t44 106h-43q0-44-31-75.5T235 192t-75.5 31.5T128 299H85q0-62 44-106t105.5-44m.5-85q97 0 165.5 69T469 299h-42q0-80-56.5-136t-136-56T99 163T43 299H0q0-97 69-166t166-69"></svg:path>`,
})
export class ZmdiLooksIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiLoupeIcon],svg[zmdi-loupe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 109v86h85v42h-85v86h-43v-86h-85v-42h85v-86zM213 3q88 0 151 62.5T427 216v171q0 17-12.5 29.5T384 429H213q-88 0-150.5-62.5T0 216T62.5 65.5T213 3m.5 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiLoupeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMailReplyIcon],svg[zmdi-mail-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 128q54 8 96.5 30.5T315 214t43.5 69.5T384 363q-78-109-235-109v87L0 192L149 43z"></svg:path>`,
})
export class ZmdiMailReplyIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMailReplyAllIcon],svg[zmdi-mail-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149 107l-85 85l85 85v64L0 192L149 43zm128 21q54 8 96.5 30.5T443 214t43.5 69.5T512 363q-78-109-235-109v87L128 192L277 43z"></svg:path>`,
})
export class ZmdiMailReplyAllIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMailSendIcon],svg[zmdi-mail-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384V235l320-43L0 149V0l448 192z"></svg:path>`,
})
export class ZmdiMailSendIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMaleIcon],svg[zmdi-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 3q18 0 30.5 12.5t12.5 30t-12.5 30T192 88t-30.5-12.5t-12.5-30t12.5-30T192 3m192 149H256v277h-43V301h-42v128h-43V152H0v-43h384z"></svg:path>`,
})
export class ZmdiMaleIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMaleAltIcon],svg[zmdi-male-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 429V269H0V152q0-18 12.5-30.5T43 109h64q17 0 29.5 12.5T149 152v117h-32v160zM74.5 88q-17.5 0-30-12.5T32 45.5t12.5-30T74.5 3t30 12.5t12.5 30t-12.5 30t-30 12.5"></svg:path>`,
})
export class ZmdiMaleAltIcon {
  readonly viewBox = input("0 0 152 432")
  readonly width = input("0.36em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMaleFemaleIcon],svg[zmdi-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 429V269H0V152q0-18 12.5-30.5T43 109h64q17 0 29.5 12.5T149 152v117h-32v160zm267 0h-64V301h-64l54-162q4-14 15.5-22t24.5-8h3q14 0 25 8t15 22l55 162h-64zM74.5 88q-17.5 0-30-12.5T32 45.5t12.5-30T74.5 3t30 12.5t12.5 30t-12.5 30t-30 12.5m192 0q-17.5 0-30-12.5t-12.5-30t12.5-30t30-12.5t30 12.5t12.5 30t-12.5 30t-30 12.5"></svg:path>`,
})
export class ZmdiMaleFemaleIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMallIcon],svg[zmdi-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 112q18 0 30.5 12.5T384 155v256q0 17-12.5 29.5T341 453H43q-18 0-30.5-12.5T0 411V155q0-18 12.5-30.5T43 112h42q0-44 31.5-75.5T192 5t75.5 31.5T299 112zM192 48q-27 0-45.5 18.5T128 112h128q0-27-18.5-45.5T192 48m0 213q44 0 75.5-31t31.5-75h-43q0 26-18.5 45T192 219t-45.5-19t-18.5-45H85q0 44 31.5 75t75.5 31"></svg:path>`,
})
export class ZmdiMallIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMapIcon],svg[zmdi-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M373 0q11 0 11 11v322q0 8-8 10l-120 41l-128-45l-114 44l-3 1q-11 0-11-11V51q0-8 8-10L128 0l128 45L370 1zM256 341V88L128 43v253z"></svg:path>`,
})
export class ZmdiMapIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMarkunreadMailboxIcon],svg[zmdi-markunread-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128q18 0 30.5 12.5T427 171v256q0 17-12.5 29.5T384 469H43q-18 0-30.5-12.5T0 427V171q0-18 12.5-30.5T43 128h42V0h171v85H128v171h43V128z"></svg:path>`,
})
export class ZmdiMarkunreadMailboxIcon {
  readonly viewBox = input("0 0 432 472")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMemoryIcon],svg[zmdi-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128v128H128V128zm-43 85v-42h-42v42zm171-42h-43v42h43v43h-43v43q0 17-12.5 29.5T299 341h-43v43h-43v-43h-42v43h-43v-43H85q-17 0-29.5-12.5T43 299v-43H0v-43h43v-42H0v-43h43V85q0-17 12.5-29.5T85 43h43V0h43v43h42V0h43v43h43q17 0 29.5 12.5T341 85v43h43zm-85 128V85H85v214z"></svg:path>`,
})
export class ZmdiMemoryIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMenuIcon],svg[zmdi-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 336v-48h432v48zm0-120v-48h432v48zM0 48h432v48H0z"></svg:path>`,
})
export class ZmdiMenuIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMicIcon],svg[zmdi-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.5 259q-26.5 0-45.5-19t-19-45V67q0-27 19-45.5T149.5 3t45 18.5T213 67v128q0 26-18.5 45t-45 19M262 195h37q0 54-37.5 94.5T171 338v70h-43v-70q-53-8-90.5-49T0 195h36q0 46 34 77t79.5 31t79-31t33.5-77"></svg:path>`,
})
export class ZmdiMicIcon {
  readonly viewBox = input("0 0 304 408")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMicOffIcon],svg[zmdi-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 195q0 36-19 70l-26-27q9-21 9-43zm-85 3L128 71v-4q0-27 18.5-45.5T192 3t45.5 18.5T256 67zM27 24l357 357l-27 27l-89-89q-26 15-55 19v70h-42v-70q-54-8-91-49t-37-94h36q0 46 33.5 77t79.5 31q25 0 49-11l-35-35q-7 2-14 2q-27 0-45.5-19T128 195v-16L0 51z"></svg:path>`,
})
export class ZmdiMicOffIcon {
  readonly viewBox = input("0 0 384 408")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMicOutlineIcon],svg[zmdi-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.5 261q-26.5 0-45.5-18.5T85 197V69q0-26 19-45t45.5-19t45 19T213 69v128q0 27-18.5 45.5t-45 18.5M124 67v132q0 11 7.5 18.5t18 7.5t18-7.5T175 199V67q0-10-7.5-17.5t-18-7.5t-18 7.5T124 67m138 130h37q0 54-37.5 95T171 341v70h-43v-70q-53-8-90.5-49T0 197h36q0 47 34 78t79.5 31t79-31t33.5-78"></svg:path>`,
})
export class ZmdiMicOutlineIcon {
  readonly viewBox = input("0 0 304 416")
  readonly width = input("0.74em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMicSettingIcon],svg[zmdi-mic-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 496v-43h42v43zm106.5-235q-26.5 0-45.5-18.5T85 197V69q0-26 19-45t45.5-19t45 19T213 69v128q0 27-18.5 45.5t-45 18.5M128 496v-43h43v43zm85 0v-43h43v43zm86-299q0 54-37.5 95T171 341v70h-43v-70q-53-8-90.5-49T0 197h36q0 47 34 78t79.5 31t79-31t33.5-78z"></svg:path>`,
})
export class ZmdiMicSettingIcon {
  readonly viewBox = input("0 0 304 496")
  readonly width = input("0.62em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMinusIcon],svg[zmdi-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 213H0v-42h299z"></svg:path>`,
})
export class ZmdiMinusIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMinusCircleIcon],svg[zmdi-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M320 237v-42H107v42z"></svg:path>`,
})
export class ZmdiMinusCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMinusCircleOutlineIcon],svg[zmdi-minus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 195h213v42H107zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiMinusCircleOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMinusSquareIcon],svg[zmdi-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-42 213v-42H85v42z"></svg:path>`,
})
export class ZmdiMinusSquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoneyIcon],svg[zmdi-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117 169q46 11 73 32t27 61q0 32-20.5 51T143 338v46H79v-46q-34-7-55.5-28T0 256h47q4 45 64 45q31 0 44-12t13-26q0-17-13.5-30T104 211Q4 187 4 123q0-29 21-49.5T79 46V0h64v47q32 8 49.5 30t18.5 51h-47q-2-45-53-45q-27 0-42.5 11T53 123q0 15 14 25.5t50 20.5"></svg:path>`,
})
export class ZmdiMoneyIcon {
  readonly viewBox = input("0 0 224 384")
  readonly width = input("0.59em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoneyBoxIcon],svg[zmdi-money-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 299v-22h-43v-42h86v-22h-64q-9 0-15.5-6t-6.5-15v-64q0-9 6.5-15t15.5-6h21V85h43v22h42v42h-85v22h64q9 0 15 6t6 15v64q0 9-6 15t-15 6h-21v22zM384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiMoneyBoxIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoneyOffIcon],svg[zmdi-money-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 83q-18 0-32 6l-32-31q15-8 32-12V0h64v47q32 8 49.5 30t19.5 51h-48q-2-45-53-45M27 23l312 312l-27 27l-48-48q-19 18-52 24v46h-64v-46q-33-7-55-28t-23-54h46q5 45 64 45q38 0 52-20l-75-74q-84-25-84-84L0 50z"></svg:path>`,
})
export class ZmdiMoneyOffIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoodIcon],svg[zmdi-mood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50M288 195q-13 0-22.5-9.5t-9.5-23t9.5-22.5t22.5-9t22.5 9t9.5 22.5t-9.5 23T288 195m-149.5 0q-13.5 0-22.5-9.5t-9-23t9-22.5t22.5-9t23 9t9.5 22.5t-9.5 23t-23 9.5m75 138q-36.5 0-66.5-20.5T104 259h218q-13 33-42.5 53.5t-66 20.5"></svg:path>`,
})
export class ZmdiMoodIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoodBadIcon],svg[zmdi-mood-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50M288 195q-13 0-22.5-9.5t-9.5-23t9.5-22.5t22.5-9t22.5 9t9.5 22.5t-9.5 23T288 195m-149.5 0q-13.5 0-22.5-9.5t-9-23t9-22.5t22.5-9t23 9t9.5 22.5t-9.5 23t-23 9.5m75 64q36.5 0 66 20.5T322 333H104q13-33 43-53.5t66.5-20.5"></svg:path>`,
})
export class ZmdiMoodBadIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoreIcon],svg[zmdi-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.5 149q17.5 0 30 12.5T85 192t-12.5 30.5t-30 12.5t-30-12.5T0 192t12.5-30.5t30-12.5m256 0q17.5 0 30 12.5T341 192t-12.5 30.5t-30 12.5t-30-12.5T256 192t12.5-30.5t30-12.5m-128 0q17.5 0 30 12.5T213 192t-12.5 30.5t-30 12.5t-30-12.5T128 192t12.5-30.5t30-12.5"></svg:path>`,
})
export class ZmdiMoreIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMoreVertIcon],svg[zmdi-more-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.5 107q-17.5 0-30-12.5T0 64t12.5-30.5t30-12.5t30 12.5T85 64T72.5 94.5t-30 12.5m0 42q17.5 0 30 12.5T85 192t-12.5 30.5t-30 12.5t-30-12.5T0 192t12.5-30.5t30-12.5m0 128q17.5 0 30 12.5T85 320t-12.5 30.5t-30 12.5t-30-12.5T0 320t12.5-30.5t30-12.5"></svg:path>`,
})
export class ZmdiMoreVertIcon {
  readonly viewBox = input("0 0 88 384")
  readonly width = input("0.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMouseIcon],svg[zmdi-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 7q64 8 106.5 56T341 176H192zM0 304v-85h341v85q0 71-50 121t-120.5 50T50 425T0 304M149 7v169H0q0-65 43-113T149 7"></svg:path>`,
})
export class ZmdiMouseIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMovieIcon],svg[zmdi-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21h86v299q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h21l43 86h64l-43-86h43l42 86h64l-42-86h42l43 86h64z"></svg:path>`,
})
export class ZmdiMovieIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiMovieAltIcon],svg[zmdi-movie-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 0h42v384h-42v-43h-43v43H85v-43H43v43H0V0h43v43h42V0h171v43h43zM85 299v-43H43v43zm0-86v-42H43v42zm0-85V85H43v43zm214 171v-43h-43v43zm0-86v-42h-43v42zm0-85V85h-43v43z"></svg:path>`,
})
export class ZmdiMovieAltIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiN1SquareIcon],svg[zmdi-n-1-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM235 299V85h-86v43h43v171z"></svg:path>`,
})
export class ZmdiN1SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiN2SquareIcon],svg[zmdi-n-2-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 171v-43q0-18-12.5-30.5T213 85h-85v43h85v43h-42q-18 0-30.5 12.5T128 213v86h128v-43h-85v-43h42q18 0 30.5-12.5T256 171"></svg:path>`,
})
export class ZmdiN2SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiN3SquareIcon],svg[zmdi-n-3-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 160v-32q0-18-12.5-30.5T213 85h-85v43h85v43h-42v42h42v43h-85v43h85q18 0 30.5-12.5T256 256v-32q0-13-9.5-22.5T224 192q13 0 22.5-9.5T256 160"></svg:path>`,
})
export class ZmdiN3SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiN4SquareIcon],svg[zmdi-n-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 299V85h-43v86h-42V85h-43v128h85v86z"></svg:path>`,
})
export class ZmdiN4SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiN5SquareIcon],svg[zmdi-n-5-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 128V85H128v128h85v43h-85v43h85q18 0 30.5-12.5T256 256v-43q0-17-12.5-29.5T213 171h-42v-43z"></svg:path>`,
})
export class ZmdiN5SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiN6SquareIcon],svg[zmdi-n-6-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 256v-43h42v43zM341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-85 128V85h-85q-18 0-30.5 12.5T128 128v128q0 18 12.5 30.5T171 299h42q18 0 30.5-12.5T256 256v-43q0-17-12.5-29.5T213 171h-42v-43z"></svg:path>`,
})
export class ZmdiN6SquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNatureIcon],svg[zmdi-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 304v83h128v42H0v-42h128v-84q-53-9-88.5-50.5T4 156Q4 94 47.5 50T153 6t105.5 44T302 156q0 57-37.5 99T171 304"></svg:path>`,
})
export class ZmdiNatureIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNaturePeopleIcon],svg[zmdi-nature-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 156q0 57-37.5 99T299 304v83h64v42H21V323H0v-86q0-8 6.5-14.5T21 216h64q9 0 15.5 6.5T107 237v86H85v64h171v-84q-53-9-88.5-50.5T132 156q0-62 43.5-106T281 6t105.5 44T430 156M53.5 195q-13.5 0-23-9.5t-9.5-23t9.5-22.5t23-9t22.5 9t9 22.5t-9 23t-22.5 9.5"></svg:path>`,
})
export class ZmdiNaturePeopleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNavigationIcon],svg[zmdi-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m160 3l160 390l-15 15l-145-64l-145 64l-15-15z"></svg:path>`,
})
export class ZmdiNavigationIcon {
  readonly viewBox = input("0 0 320 408")
  readonly width = input("0.79em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNeg1Icon],svg[zmdi-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171h171v42H0zm320 149h-43V93l-64 22V79l101-36h6z"></svg:path>`,
})
export class ZmdiNeg1Icon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNeg2Icon],svg[zmdi-neg-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M278 284h127v36H221v-32l89-97q10-11 19-22q7-8 12-18q4-7 6-14q2-8 2-14q0-9-3-18q-3-8-8-13q-5-7-12.5-10T308 79q-12 0-20 4q-9 4-15 10q-6 8-8 16q-3 9-3 19h-46q1-17 6-32q6-16 18-28t29-19q18-6 40-6q20 0 36 5q17 6 27 15q11 10 17 24t6 31q0 13-4 25q-5 12-12 25q-8 13-17 25q-13 15-23 25zM0 171h171v42H0z"></svg:path>`,
})
export class ZmdiNeg2Icon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkIcon],svg[zmdi-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 429L427 3v426z"></svg:path>`,
})
export class ZmdiNetworkIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkAlertIcon],svg[zmdi-network-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 344V173h43v171zm0 85v-42h43v42zM0 429L427 3v128h-86v298z"></svg:path>`,
})
export class ZmdiNetworkAlertIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkLockedIcon],svg[zmdi-network-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395 197q-40 0-68 28.5T299 293v6q-22 19-22 48v64H0L405 5v193q-9-1-10-1m53 128q9 0 15 6.5t6 15.5v85q0 9-6 15t-15 6H341q-8 0-14.5-6t-6.5-15v-85q0-9 6.5-15.5T341 325v-32q0-22 16-37.5t38-15.5t37.5 15.5T448 293zm-21 0v-32q0-13-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5v32z"></svg:path>`,
})
export class ZmdiNetworkLockedIcon {
  readonly viewBox = input("0 0 472 456")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkOffIcon],svg[zmdi-network-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 5v367L243 189zM80 80l368 368l-27 27l-43-43H0l189-189L53 107z"></svg:path>`,
})
export class ZmdiNetworkOffIcon {
  readonly viewBox = input("0 0 448 480")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkOutlineIcon],svg[zmdi-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 106L103 387h281zM427 3v426H0z"></svg:path>`,
})
export class ZmdiNetworkOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkSettingIcon],svg[zmdi-network-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405 245q-66 0-113 47t-47 113q0 9 2 22H0L427 0l-1 247q-12-2-21-2m79 171l23 17q3 3 1 7l-21 37q-2 4-7 3l-26-11q-8 6-18 10l-4 29q-1 4-6 4h-42q-5 0-6-4l-4-29q-9-3-18-10l-26 11q-5 1-7-3l-21-37q-2-4 1-7l23-17q-1-5-1-10.5t1-10.5l-23-18q-3-3-1-7l21-37q3-3 7-2l26 11q8-6 18-11l4-28q1-4 6-4h42q5 0 6 4l4 28q9 4 18 11l26-11q5-1 7 2l21 37q2 4-1 7l-23 18q1 4 1 10q0 4-1 11m-79 21q13 0 22.5-9t9.5-22.5t-9.5-23T405 373t-22.5 9.5t-9.5 23t9.5 22.5t22.5 9"></svg:path>`,
})
export class ZmdiNetworkSettingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNfcIcon],svg[zmdi-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm0 384V45H43v342zM341 88v256H85V88h86v43h-43v170h171V131h-64v48q21 12 21 37q0 18-12.5 30.5t-30 12.5t-30-12.5T171 216q0-24 21-37v-48q0-18 12.5-30.5T235 88z"></svg:path>`,
})
export class ZmdiNfcIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsIcon],svg[zmdi-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.5 429q-17.5 0-30-12.5T139 387h85q0 17-12.5 29.5t-30 12.5M320 301l43 43v21H0v-21l43-43V184q0-49 30-86.5T149 49V35q0-14 9.5-23t23-9t22.5 9t9 23v14q47 11 77 48.5t30 86.5z"></svg:path>`,
})
export class ZmdiNotificationsIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsActiveIcon],svg[zmdi-notifications-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 36Q85 60 65 96t-22 77H0q2-50 25.5-94T88 6zm286 137q-2-41-22.5-77T328 36l31-30q39 29 62 73t26 94zm-42 11v117l43 43v21H42v-21l43-43V184q0-49 30-86.5T191 49V35q0-14 9.5-23t23-9t22.5 9t9 23v14q47 11 77 48.5t30 86.5M223 429q-17 0-29.5-12.5T181 387h85q0 8-3 16q-9 21-31 25q-4 1-9 1"></svg:path>`,
})
export class ZmdiNotificationsActiveIcon {
  readonly viewBox = input("0 0 448 432")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsAddIcon],svg[zmdi-notifications-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 408h84q0 18-12 30.5T192 451t-30-12.5t-12-30.5m189-89l45 45v23H0v-23l45-45V195q0-52 32-91.5T158 52V37q0-14 10-24t24-10t24 10t10 24v15q49 12 81 51.5t32 91.5zm-62-81v-43h-64v-64h-42v64h-64v43h64v64h42v-64z"></svg:path>`,
})
export class ZmdiNotificationsAddIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
