import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIcons10Icon],svg[lets-icons-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6v12M8 6L5 9m7 3c0-4.5.583-6 3.5-6S19 7.5 19 12s-.583 6-3.5 6s-3.5-1.5-3.5-6m1-5l5 10"></svg:path>`,
})
export class LetsIcons10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIcons3dBoxIcon],svg[lets-icons-3d-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M12 21v-8m0 8l-6.162-4.402c-.411-.293-.616-.44-.727-.655S5 15.475 5 14.971V8m7 13l6.163-4.402c.41-.293.615-.44.726-.655s.111-.468.111-.972V8m-7 5L5 8m7 5l7-5M5 8l5.838-4.17c.56-.4.842-.601 1.162-.601s.601.2 1.162.601L19 8"></svg:path>`,
})
export class LetsIcons3dBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIcons10LightIcon],svg[lets-icons-10-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 18.5v-13l-3 3m6 3.5c0-5 1.083-6.5 4-6.5s4 1.5 4 6.5s-1.083 6.5-4 6.5s-4-1.5-4-6.5M12 7l5 10"></svg:path>`,
})
export class LetsIcons10LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIcons3dBoxFillIcon],svg[lets-icons-3d-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.675 19.34l-3-2.144c-.821-.586-1.232-.88-1.453-1.31S5 14.95 5 13.942v-3.883c0-.322 0-.592.007-.825L11 13.514v6.717c-.357-.2-.773-.498-1.325-.892M13 20.23c.357-.2.773-.498 1.325-.892l3-2.143c.821-.586 1.232-.88 1.453-1.31S19 14.95 19 13.942v-3.883c0-.322 0-.592-.007-.825L13 13.514zm5.128-12.837L12 11.771L5.872 7.394c.212-.168.475-.356.803-.59l3-2.143C10.798 3.859 11.36 3.458 12 3.458s1.202.4 2.325 1.203l3 2.143c.329.234.591.422.803.59" clip-rule="evenodd"></svg:path>`,
})
export class LetsIcons3dBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddIcon],svg[lets-icons-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M12 6v12m6-6H6"></svg:path>`,
})
export class LetsIconsAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIcons3dBoxDuotoneIcon],svg[lets-icons-3d-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M12 13v8l-7-5V8l7-5l7 5z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.2" d="M12 21v-8m0 8l-6.162-4.402c-.411-.293-.616-.44-.727-.655S5 15.475 5 14.971V8m7 13l6.163-4.402c.41-.293.615-.44.726-.655s.111-.468.111-.972V8m-7 5L5 8m7 5l7-5M5 8l5.838-4.17c.56-.4.842-.601 1.162-.601s.601.2 1.162.601L19 8"></svg:path></svg:g>`,
})
export class LetsIcons3dBoxDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddDuotoneLineIcon],svg[lets-icons-add-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsAddDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="square" d="M12 8v8m4-4H8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsAddDuotoneLine0)"></svg:path>`,
})
export class LetsIconsAddDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddLightIcon],svg[lets-icons-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" d="M12 6v12m6-6H6"></svg:path>`,
})
export class LetsIconsAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRingIcon],svg[lets-icons-add-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path stroke-linecap="square" d="M12 15V9m3 3H9"></svg:path></svg:g>`,
})
export class LetsIconsAddRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRingDuotoneIcon],svg[lets-icons-add-ring-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="1.2" d="M12 15V9m3 3H9"></svg:path></svg:g>`,
})
export class LetsIconsAddRingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRingDuotoneLineIcon],svg[lets-icons-add-ring-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsAddRingDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="square" d="M12 15V9m3 3H9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsAddRingDuotoneLine0)"></svg:path>`,
})
export class LetsIconsAddRingDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRingFillIcon],svg[lets-icons-add-ring-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8 1v4h-2v-4H7v-2h4V7h2v4h4v2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsAddRingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRingLightIcon],svg[lets-icons-add-ring-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path stroke-linecap="square" d="M12 15V9m3 3H9"></svg:path></svg:g>`,
})
export class LetsIconsAddRingLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRoundIcon],svg[lets-icons-add-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6v12m6-6H6"></svg:path>`,
})
export class LetsIconsAddRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRoundDuotoneIcon],svg[lets-icons-add-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 8v8m4-4H8"></svg:path></svg:g>`,
})
export class LetsIconsAddRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRoundDuotoneLineIcon],svg[lets-icons-add-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsAddRoundDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M12 8v8m4-4H8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsAddRoundDuotoneLine0)"></svg:path>`,
})
export class LetsIconsAddRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRoundFillIcon],svg[lets-icons-add-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsAddRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddRoundLightIcon],svg[lets-icons-add-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M12 6v12m6-6H6"></svg:path>`,
})
export class LetsIconsAddRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddSquareIcon],svg[lets-icons-add-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></svg:path><svg:path stroke-linecap="square" stroke-linejoin="round" d="M12 8v8m4-4H8"></svg:path></svg:g>`,
})
export class LetsIconsAddSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddSquareDuotoneIcon],svg[lets-icons-add-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" d="M12 8v8m4-4H8"></svg:path></svg:g>`,
})
export class LetsIconsAddSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddSquareDuotoneLineIcon],svg[lets-icons-add-square-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsAddSquareDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M3.5 11c0-1.9.001-3.274.142-4.322c.139-1.034.406-1.675.883-2.153c.478-.477 1.119-.744 2.153-.883C7.726 3.502 9.1 3.5 11 3.5h2c1.9 0 3.274.001 4.323.142c1.033.139 1.674.406 2.152.883c.477.478.744 1.119.883 2.153c.14 1.048.142 2.422.142 4.322v2c0 1.9-.001 3.274-.142 4.323c-.139 1.033-.406 1.674-.883 2.152c-.478.477-1.119.744-2.152.883c-1.049.14-2.423.142-4.323.142h-2c-1.9 0-3.274-.001-4.322-.142c-1.034-.139-1.675-.406-2.153-.883c-.477-.478-.744-1.119-.883-2.152C3.502 16.274 3.5 14.9 3.5 13z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M12 8v8m4-4H8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsAddSquareDuotoneLine0)"></svg:path>`,
})
export class LetsIconsAddSquareDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddSquareFillIcon],svg[lets-icons-add-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 4.172C3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3h-2C7.229 3 5.343 3 4.172 4.172M11 7v4H7v2h4v4h2v-4h4v-2h-4V7z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsAddSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddSquareLightIcon],svg[lets-icons-add-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3.5 11c0-1.9.001-3.274.142-4.322c.139-1.034.406-1.675.883-2.153c.478-.477 1.119-.744 2.153-.883C7.726 3.502 9.1 3.5 11 3.5h2c1.9 0 3.274.001 4.323.142c1.033.139 1.674.406 2.152.883c.477.478.744 1.119.883 2.153c.14 1.048.142 2.422.142 4.322v2c0 1.9-.001 3.274-.142 4.323c-.139 1.033-.406 1.674-.883 2.152c-.478.477-1.119.744-2.152.883c-1.049.14-2.423.142-4.323.142h-2c-1.9 0-3.274-.001-4.322-.142c-1.034-.139-1.675-.406-2.153-.883c-.477-.478-.744-1.119-.883-2.152C3.502 16.274 3.5 14.9 3.5 13z"></svg:path><svg:path stroke-linejoin="round" d="M12 8v8m4-4H8"></svg:path></svg:g>`,
})
export class LetsIconsAddSquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmIcon],svg[lets-icons-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M9.15 7.831a2.976 2.976 0 1 1 5.701 0l-1.564 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14s-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447z"></svg:path><svg:circle cx="12" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmDuotoneIcon],svg[lets-icons-alarm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-width="1.2"><svg:path d="M9.15 7.831a2.976 2.976 0 1 1 5.7 0l-1.563 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14s-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447z"></svg:path><svg:circle cx="12" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsAlarmDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmFillIcon],svg[lets-icons-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-width="2"><svg:path d="M9.15 7.831a2.976 2.976 0 1 1 5.7 0l-1.563 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14s-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447z"></svg:path><svg:circle cx="12" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmLightIcon],svg[lets-icons-alarm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M9.15 7.831a2.976 2.976 0 1 1 5.701 0l-1.564 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14s-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447z"></svg:path><svg:circle cx="12" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsAlarmLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockIcon],svg[lets-icons-alarmclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="13" r="7"></svg:circle><svg:path stroke-linecap="round" d="M5 5L3 7m16-2l2 2M9 11l2.81 1.873a.25.25 0 0 0 .333-.052L14 10.5"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockDuotoneIcon],svg[lets-icons-alarmclock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="13" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="m5.5 4.5l-2 2m15-2l2 2M12 8v4.924q0 .076.042.139L14 16"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockDuotoneLineIcon],svg[lets-icons-alarmclock-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="13" r="7" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke-linecap="round" d="M5 5L3 7m16-2l2 2M9 11l2.81 1.873a.25.25 0 0 0 .333-.052L14 10.5"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockFillIcon],svg[lets-icons-alarmclock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 4L3 6m16-2l2 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2.78-9.875a1 1 0 1 0-1.56-1.25l-1.428 1.784l-2.237-1.491a1 1 0 1 0-1.11 1.664l2.81 1.873a1.25 1.25 0 0 0 1.67-.26z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockLightIcon],svg[lets-icons-alarmclock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="13" r="7"></svg:circle><svg:path stroke-linecap="round" d="M5 5L3 7m16-2l2 2M9 11l2.81 1.873a.25.25 0 0 0 .333-.052L14 10.5"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAngryIcon],svg[lets-icons-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="12" cy="12" r="10" stroke-width="2"></svg:circle><svg:path stroke-width="2" d="M7.881 16.244c.493-.427 1.142-.735 1.842-.937A8.3 8.3 0 0 1 12 15c.786 0 1.57.103 2.277.307c.7.202 1.35.51 1.842.937M17 8l-3 2M7 8l3 2"></svg:path><svg:circle cx="8" cy="10" r="1.25" fill="currentColor" stroke-width=".5"></svg:circle><svg:circle cx="16" cy="10" r="1.25" fill="currentColor" stroke-width=".5"></svg:circle></svg:g>`,
})
export class LetsIconsAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAngryLightIcon],svg[lets-icons-angry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M8.209 16.622c.421-.365.999-.646 1.652-.834A7.8 7.8 0 0 1 12 15.5c.744 0 1.48.098 2.139.288c.654.188 1.23.469 1.652.834M17 8l-3 2M7 8l3 2"></svg:path><svg:circle cx="8" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsAngryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveIcon],svg[lets-icons-arhive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17z"></svg:path><svg:path d="M3 10c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 13 5.068 13 6 13h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189c.262-.188.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 11.398 21 10.932 21 10"></svg:path></svg:g>`,
})
export class LetsIconsArhiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltAddIcon],svg[lets-icons-arhive-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 12h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 12 6.454 12 5.93 12H3"></svg:path><svg:path stroke-linecap="round" d="m5 9l-1.707 1.707a1 1 0 0 0-.293.707V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707L19 9"></svg:path><svg:path d="m8.5 7l3.5 3m0 0l3.5-3M12 10V3"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltAddLightIcon],svg[lets-icons-arhive-alt-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m6-3L12 12m0 0l2.5-2.5M12 12V5"></svg:path><svg:path stroke-linecap="round" d="M6.5 8.5L4.782 9.645c-.468.313-.703.469-.873.675a1.8 1.8 0 0 0-.331.62c-.078.256-.078.538-.078 1.101v3.579c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.579c0-.563 0-.845-.078-1.1a1.8 1.8 0 0 0-.331-.62c-.17-.207-.405-.363-.873-.676L17.5 8.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltAddListIcon],svg[lets-icons-arhive-alt-add-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 12h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 12 6.454 12 5.93 12H3"></svg:path><svg:path stroke-linecap="round" d="m7 7l-3.707 3.707a1 1 0 0 0-.293.707V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707L17 7"></svg:path><svg:path d="M17 13V6.163c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L14.968 3.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C14.204 3 14.082 3 13.837 3H9.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C7 4.139 7 4.559 7 5.4V13"></svg:path><svg:path d="M13 3v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 7 14.04 7 14.6 7H17"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltAddListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltAddListLightIcon],svg[lets-icons-arhive-alt-add-list-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m6.5 9.5l-2.156 2.156c-.312.312-.467.467-.579.65a1.8 1.8 0 0 0-.215.52c-.05.207-.05.427-.05.867v3.927c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.927c0-.44 0-.66-.05-.868a1.8 1.8 0 0 0-.215-.52c-.112-.182-.267-.337-.578-.649L17.5 9.5"></svg:path><svg:path d="M20.5 14.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189s-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5"></svg:path><svg:path d="M17.5 14.5V8.163c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L14.968 4.97c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12c-.115-.027-.237-.027-.482-.027H8.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v7.6"></svg:path><svg:path d="M13.5 4.5v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h2.4"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltAddListLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltBigDuotoneIcon],svg[lets-icons-arhive-alt-big-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M5.5 12.5h.558c.696 0 1.044 0 1.306.189c.262.188.372.518.592 1.178l.088.265c.22.66.33.99.592 1.18c.262.188.61.188 1.306.188h4.117c.695 0 1.043 0 1.305-.189c.262-.188.372-.518.592-1.178l.088-.265c.22-.66.33-.99.592-1.18c.262-.188.61-.188 1.306-.188h.558c.943 0 1.414 0 1.707.293s.293.764.293 1.707c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-9c-1.886 0-2.828 0-3.414-.586S3.5 16.386 3.5 14.5c0-.943 0-1.414.293-1.707S4.557 12.5 5.5 12.5"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M6.156 7.844c.312-.312.467-.467.65-.579a1.8 1.8 0 0 1 .52-.215C7.532 7 7.752 7 8.192 7h7.614c.44 0 .66 0 .868.05a1.8 1.8 0 0 1 .52.215c.182.112.337.267.648.579l2.314 2.312c.31.312.466.467.578.65q.148.242.215.52c.05.207.05.427.05.867v3.927c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H5.88c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787C3 17.632 3 17.128 3 16.12v-3.927c0-.44 0-.66.05-.868a1.8 1.8 0 0 1 .215-.52c.112-.182.267-.337.579-.649z"></svg:path><svg:path stroke="currentColor" d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5"></svg:path><svg:path fill="currentColor" d="M3 17v-4.85a.15.15 0 0 1 .15-.15h3.408a2 2 0 0 1 1.898 1.367l.088.265A2 2 0 0 0 10.441 15h3.117a2 2 0 0 0 1.898-1.367l.088-.265A2 2 0 0 1 17.442 12h3.408a.15.15 0 0 1 .15.15V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltBigDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltBigDuotoneLineIcon],svg[lets-icons-arhive-alt-big-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M5.5 12.5h.558c.696 0 1.044 0 1.306.189c.262.188.372.518.592 1.178l.088.265c.22.66.33.99.592 1.18c.262.188.61.188 1.306.188h4.117c.695 0 1.043 0 1.305-.189c.262-.188.372-.518.592-1.178l.088-.265c.22-.66.33-.99.592-1.18c.262-.188.61-.188 1.306-.188h.558c.943 0 1.414 0 1.707.293s.293.764.293 1.707c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-9c-1.886 0-2.828 0-3.414-.586S3.5 16.386 3.5 14.5c0-.943 0-1.414.293-1.707S4.557 12.5 5.5 12.5"></svg:path><svg:path stroke="currentColor" d="M5.661 6.898c.306-.51.459-.765.67-.95a1.8 1.8 0 0 1 .64-.363c.268-.085.565-.085 1.16-.085h7.738c.595 0 .892 0 1.16.085c.236.076.454.2.64.363c.211.185.364.44.67.95l1.75 2.918c.153.255.23.382.284.518q.072.181.103.374c.024.144.024.293.024.59v4.322c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H6.38c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787c-.196-.385-.196-.889-.196-1.897v-4.322c0-.297 0-.446.024-.59a1.8 1.8 0 0 1 .103-.374c.054-.136.13-.263.283-.518z"></svg:path><svg:path stroke="currentColor" d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltBigDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltBigLightIcon],svg[lets-icons-arhive-alt-big-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M5.661 6.898c.306-.51.459-.765.67-.95a1.8 1.8 0 0 1 .64-.363c.268-.085.565-.085 1.16-.085h7.738c.595 0 .892 0 1.16.085c.236.076.454.2.64.363c.211.185.364.44.67.95l1.75 2.918c.153.255.23.382.284.518q.072.181.103.374c.024.144.024.293.024.59v4.322c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H6.38c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787c-.196-.385-.196-.889-.196-1.897v-4.322c0-.297 0-.446.024-.59a1.8 1.8 0 0 1 .103-.374c.054-.136.13-.263.283-.518z"></svg:path><svg:path d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltBigLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltExportIcon],svg[lets-icons-arhive-alt-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 12h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 12 6.454 12 5.93 12H3m5.5-4L12 5m0 0l3.5 3M12 5v7"></svg:path><svg:path stroke-linecap="round" d="m5 9l-1.707 1.707a1 1 0 0 0-.293.707V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707L19 9"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltExportLightIcon],svg[lets-icons-arhive-alt-export-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M6.5 8.5L4.782 9.645c-.468.313-.703.469-.873.675a1.8 1.8 0 0 0-.331.62c-.078.256-.078.538-.078 1.101v3.579c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.579c0-.563 0-.845-.078-1.1a1.8 1.8 0 0 0-.331-.62c-.17-.207-.405-.363-.873-.676L17.5 8.5"></svg:path><svg:path d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m6-7L12 3m0 0l2.5 2.5M12 3v7"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltExportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltFillIcon],svg[lets-icons-arhive-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M5.274 7.484c.27-.18.405-.27.55-.334a1.8 1.8 0 0 1 .405-.122C6.386 7 6.548 7 6.872 7h10.256c.324 0 .486 0 .643.028q.21.038.404.122c.146.064.28.154.55.334l.992.661c.47.313.704.469.874.675a1.8 1.8 0 0 1 .331.62c.078.256.078.538.078 1.101v3.579c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H5.88c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787C3 15.632 3 15.128 3 14.12v-3.579c0-.563 0-.845.078-1.1a1.8 1.8 0 0 1 .331-.62c.17-.207.405-.363.873-.676z"></svg:path><svg:path fill="currentColor" d="M3 15.5v-4.85a.15.15 0 0 1 .15-.15h3.408a2 2 0 0 1 1.898 1.367l.088.265a2 2 0 0 0 1.897 1.368h3.117a2 2 0 0 0 1.898-1.367l.088-.265a2 2 0 0 1 1.898-1.368h3.408a.15.15 0 0 1 .15.15v4.85a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallIcon],svg[lets-icons-arhive-alt-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M5.274 7.484c.27-.18.405-.27.55-.334a1.8 1.8 0 0 1 .405-.122C6.386 7 6.548 7 6.872 7h10.256c.324 0 .486 0 .643.028q.21.038.404.122c.146.064.28.154.55.334l.992.661c.47.313.704.469.874.675a1.8 1.8 0 0 1 .331.62c.078.256.078.538.078 1.101v3.579c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H5.88c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787C3 15.632 3 15.128 3 14.12v-3.579c0-.563 0-.845.078-1.1a1.8 1.8 0 0 1 .331-.62c.17-.207.405-.363.873-.676z"></svg:path><svg:path stroke-linejoin="round" d="M20.5 11h-2.382c-.485 0-.728 0-.933.099q-.096.045-.18.11c-.18.14-.288.357-.505.791s-.326.65-.505.79q-.084.065-.18.111c-.205.099-.448.099-.933.099H9.118c-.485 0-.728 0-.933-.099a1 1 0 0 1-.18-.11c-.18-.14-.288-.357-.505-.791s-.325-.65-.505-.79a1 1 0 0 0-.18-.111C6.61 11 6.367 11 5.882 11H3"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallAddIcon],svg[lets-icons-arhive-alt-small-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="8" r="5"></svg:circle><svg:path d="M12 5v6m3-3H9m12 6h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 14 6.454 14 5.93 14H3"></svg:path><svg:path stroke-linecap="round" d="M7 10h-.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 0-.293.707V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707l-2.414-2.414a1 1 0 0 0-.707-.293H17"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallAddLightIcon],svg[lets-icons-arhive-alt-small-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M8.5 9.5h-.807c-.44 0-.66 0-.868.05a1.8 1.8 0 0 0-.52.215c-.182.112-.337.267-.649.579l-1.312 1.313c-.312.31-.467.466-.579.648a1.8 1.8 0 0 0-.215.52c-.05.208-.05.428-.05.868v3.927c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.927c0-.44 0-.66-.05-.868a1.8 1.8 0 0 0-.215-.52c-.112-.182-.267-.337-.578-.649l-1.314-1.312c-.31-.312-.466-.467-.648-.579a1.8 1.8 0 0 0-.52-.215c-.207-.05-.428-.05-.868-.05H15.5"></svg:path><svg:path d="M20.5 14.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189s-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5"></svg:path><svg:circle cx="12" cy="8" r="3.5"></svg:circle></svg:g>`,
})
export class LetsIconsArhiveAltSmallAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallDuotoneIcon],svg[lets-icons-arhive-alt-small-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M6.156 7.844c.312-.312.467-.467.65-.579a1.8 1.8 0 0 1 .52-.215C7.532 7 7.752 7 8.192 7h7.614c.44 0 .66 0 .868.05a1.8 1.8 0 0 1 .52.215c.182.112.337.267.648.579l3.087 3.086a.3.3 0 0 1 .048.054a.2.2 0 0 1 .018.043a.3.3 0 0 1 .004.072v3.021c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H5.88c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787C3 15.632 3 15.128 3 14.12V11.1c0-.037 0-.056.004-.073a.2.2 0 0 1 .018-.043a.3.3 0 0 1 .048-.054z"></svg:path><svg:path fill="currentColor" d="M3 15v-3.75a.25.25 0 0 1 .25-.25h3.308a2 2 0 0 1 1.898 1.367l.088.265A2 2 0 0 0 10.441 14h3.117a2 2 0 0 0 1.898-1.367l.088-.265A2 2 0 0 1 17.442 11h3.308a.25.25 0 0 1 .25.25V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path>`,
})
export class LetsIconsArhiveAltSmallDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallDuotoneLineIcon],svg[lets-icons-arhive-alt-small-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16.5 11.5h4v4l-1 1h-15l-1-1v-4h4l1 2h7z"></svg:path><svg:path stroke="currentColor" d="M5.774 7.984c.27-.18.405-.27.55-.334a1.8 1.8 0 0 1 .405-.122c.157-.028.319-.028.643-.028h9.256c.324 0 .486 0 .643.028q.21.038.404.122c.146.064.28.154.55.334l.992.661c.47.313.704.469.874.675a1.8 1.8 0 0 1 .331.62c.078.256.078.538.078 1.101v2.579c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H6.38c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787c-.196-.385-.196-.889-.196-1.897v-2.579c0-.563 0-.845.078-1.1a1.8 1.8 0 0 1 .331-.62c.17-.207.405-.363.873-.676z"></svg:path><svg:path stroke="currentColor" d="M20.5 11.5h-2.882c-.485 0-.728 0-.933.099q-.096.045-.18.11c-.18.14-.288.357-.505.791s-.325.65-.505.79q-.084.065-.18.111c-.205.099-.448.099-.933.099H9.618c-.485 0-.728 0-.933-.099a1 1 0 0 1-.18-.11c-.18-.14-.288-.357-.505-.791s-.325-.65-.505-.79a1 1 0 0 0-.18-.111c-.205-.099-.448-.099-.933-.099H3.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallLightIcon],svg[lets-icons-arhive-alt-small-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M5.774 7.984c.27-.18.405-.27.55-.334a1.8 1.8 0 0 1 .405-.122c.157-.028.319-.028.643-.028h9.256c.324 0 .486 0 .643.028q.21.038.404.122c.146.064.28.154.55.334l.992.661c.47.313.704.469.874.675a1.8 1.8 0 0 1 .331.62c.078.256.078.538.078 1.101v2.579c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H6.38c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787c-.196-.385-.196-.889-.196-1.897v-2.579c0-.563 0-.845.078-1.1a1.8 1.8 0 0 1 .331-.62c.17-.207.405-.363.873-.676z"></svg:path><svg:path d="M20.5 11.5h-2.882c-.485 0-.728 0-.933.099q-.096.045-.18.11c-.18.14-.288.357-.505.791s-.325.65-.505.79q-.084.065-.18.111c-.205.099-.448.099-.933.099H9.618c-.485 0-.728 0-.933-.099a1 1 0 0 1-.18-.11c-.18-.14-.288-.357-.505-.791s-.325-.65-.505-.79a1 1 0 0 0-.18-.111c-.205-.099-.448-.099-.933-.099H3.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallLockIcon],svg[lets-icons-arhive-alt-small-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 14h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 14 6.454 14 5.93 14H3"></svg:path><svg:path stroke-linecap="round" d="M7 10h-.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 0-.293.707V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707l-2.414-2.414a1 1 0 0 0-.707-.293H17"></svg:path><svg:path d="M8 8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm6-1V5a2 2 0 1 0-4 0v2"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallLockLightIcon],svg[lets-icons-arhive-alt-small-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M8.5 9.5h-.807c-.44 0-.66 0-.868.05a1.8 1.8 0 0 0-.52.215c-.182.112-.337.267-.649.579l-1.312 1.313c-.312.31-.467.466-.579.648a1.8 1.8 0 0 0-.215.52c-.05.208-.05.428-.05.868v3.927c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.927c0-.44 0-.66-.05-.868a1.8 1.8 0 0 0-.215-.52c-.112-.182-.267-.337-.578-.649l-1.314-1.312c-.31-.312-.466-.467-.648-.579a1.8 1.8 0 0 0-.52-.215c-.207-.05-.428-.05-.868-.05H15.5"></svg:path><svg:path d="M20.5 14.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189s-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m5-7.6c0-.14 0-.21.027-.264a.25.25 0 0 1 .11-.109C8.69 6.5 8.76 6.5 8.9 6.5h6.2c.14 0 .21 0 .264.027a.25.25 0 0 1 .109.11c.027.053.027.123.027.263v4.2c0 .14 0 .21-.027.264a.25.25 0 0 1-.11.109c-.053.027-.123.027-.263.027H8.9c-.14 0-.21 0-.264-.027a.25.25 0 0 1-.109-.11C8.5 11.31 8.5 11.24 8.5 11.1zm6-.4V6c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C12.697 3.5 12.465 3.5 12 3.5s-.697 0-.89.038A2 2 0 0 0 9.538 5.11C9.5 5.303 9.5 5.535 9.5 6v.5"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallLockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveAltSmallSecureLightIcon],svg[lets-icons-arhive-alt-small-secure-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 14h-2.93c-.524 0-.786 0-1.007.118c-.22.119-.366.337-.657.773l-.812 1.218c-.29.436-.436.654-.657.773c-.221.118-.483.118-1.007.118h-3.86c-.524 0-.786 0-1.007-.118c-.22-.119-.366-.337-.657-.773l-.812-1.218c-.29-.436-.436-.654-.657-.773C6.716 14 6.454 14 5.93 14H3"></svg:path><svg:path stroke-linecap="round" d="M8 10H6.414a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 0-.293.707V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5.586a1 1 0 0 0-.293-.707l-2.414-2.414a1 1 0 0 0-.707-.293H16"></svg:path><svg:path d="M12 4c1.028 0 2.524.47 3.365.765a.96.96 0 0 1 .635.912v2.551a4 4 0 0 1-2.595 3.745l-1.054.395a1 1 0 0 1-.702 0l-1.053-.395A4 4 0 0 1 8 8.228V5.677a.96.96 0 0 1 .635-.912C9.475 4.469 10.972 4 12 4Z"></svg:path></svg:g>`,
})
export class LetsIconsArhiveAltSmallSecureLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveDuotoneIcon],svg[lets-icons-arhive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 10c0-2.828 0-4.243.879-5.121C4.757 4 6.172 4 9 4h6c2.828 0 4.243 0 5.121.879C21 5.757 21 7.172 21 10s0 4.243-.879 5.121C19.243 16 17.828 16 15 16H9c-2.828 0-4.243 0-5.121-.879C3 14.243 3 12.828 3 10"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.567 12h-.711c-.804 0-1.205 0-1.479.217q-.088.072-.16.16C3 12.651 3 13.052 3 13.856V15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-1.144c0-.804 0-1.205-.218-1.479q-.07-.088-.16-.16C20.35 12 19.949 12 19.145 12h-.71c-.7 0-1.049 0-1.343.093a2 2 0 0 0-1.178.998c-.14.276-.198.62-.313 1.309c-.029.172-.043.258-.078.327a.5.5 0 0 1-.295.25c-.073.023-.16.023-.335.023H9.108c-.174 0-.262 0-.335-.023a.5.5 0 0 1-.295-.25c-.035-.069-.05-.155-.078-.327c-.115-.689-.172-1.033-.313-1.309a2 2 0 0 0-1.178-.998C6.615 12 6.265 12 5.567 12M9.5 17a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsArhiveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveDuotoneLineIcon],svg[lets-icons-arhive-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11v6c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17v-6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M3 11c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11"></svg:path></svg:g>`,
})
export class LetsIconsArhiveDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveExportIcon],svg[lets-icons-arhive-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 11c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11"></svg:path><svg:path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 9.5L12 7m0 0l3.5 2.5M12 7v6"></svg:path></svg:g>`,
})
export class LetsIconsArhiveExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveExportLightIcon],svg[lets-icons-arhive-export-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17z"></svg:path><svg:path d="M3 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 15 5.068 15 6 15h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.375c.22.66.33.99.592 1.18c.262.188.61.188 1.306.188h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 13.398 21 12.932 21 12M9.5 9.5L12 7m0 0l2.5 2.5M12 7v7"></svg:path></svg:g>`,
})
export class LetsIconsArhiveExportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveFillIcon],svg[lets-icons-arhive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 10v5c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15v-5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 13 5.068 13 6 13h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189c.262-.188.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 11.398 21 10.932 21 10" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17z"></svg:path></svg:g>`,
})
export class LetsIconsArhiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveFillDuotoneIcon],svg[lets-icons-arhive-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M4 9.3c0-.141 0-.212.044-.256S4.159 9 4.3 9h15.4c.141 0 .212 0 .256.044S20 9.159 20 9.3V15c0 1.886 0 2.828-.586 3.414S17.886 19 16 19H8c-1.886 0-2.828 0-3.414-.586S4 16.886 4 15zM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1"></svg:path><svg:rect width="6" height="1" x="9" y="12" fill="currentColor" rx=".5"></svg:rect>`,
})
export class LetsIconsArhiveFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveImportIcon],svg[lets-icons-arhive-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 11c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11M8.5 9.5L12 12m0 0l3.5-2.5M12 12V6"></svg:path><svg:path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"></svg:path></svg:g>`,
})
export class LetsIconsArhiveImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveImportLightIcon],svg[lets-icons-arhive-import-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17z"></svg:path><svg:path d="M3 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 15 5.068 15 6 15h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.375c.22.66.33.99.592 1.18c.262.188.61.188 1.306.188h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 13.398 21 12.932 21 12M9.5 10.5L12 13m0 0l2.5-2.5M12 13V6"></svg:path></svg:g>`,
})
export class LetsIconsArhiveImportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLightIcon],svg[lets-icons-arhive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17z"></svg:path><svg:path d="M3 10c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 13 5.068 13 6 13h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189c.262-.188.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 11.398 21 10.932 21 10"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLoadIcon],svg[lets-icons-arhive-load-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 11c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11M8 9l4 3m0 0l4-3m-4 3V2"></svg:path><svg:path d="M16 5h1c1.886 0 2.828 0 3.414.586S21 7.114 21 9v8c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h1"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLoadDuotoneIcon],svg[lets-icons-arhive-load-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 12c0-2.828 0-4.243.879-5.121C4.757 6 6.172 6 9 6h6c2.828 0 4.243 0 5.121.879C21 7.757 21 9.172 21 12v3c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15z"></svg:path><svg:path fill="currentColor" d="M4.75 14h.817c.698 0 1.048 0 1.342.093a2 2 0 0 1 1.178.998c.14.276.198.62.313 1.309c.029.172.043.258.078.327a.5.5 0 0 0 .295.25c.073.023.16.023.335.023h5.784c.174 0 .262 0 .335-.023a.5.5 0 0 0 .295-.25c.035-.069.05-.155.078-.327c.115-.689.172-1.033.313-1.309a2 2 0 0 1 1.178-.998c.294-.093.644-.093 1.342-.093h.817c.702 0 1.053 0 1.306.168a1 1 0 0 1 .275.276c.169.253.169.604.169 1.306c0 2.107 0 3.16-.506 3.917a3 3 0 0 1-.827.827C18.91 21 17.857 21 15.75 21h-7.5c-2.107 0-3.16 0-3.917-.506a3 3 0 0 1-.827-.827C3 18.91 3 17.857 3 15.75c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.276C3.697 14 4.048 14 4.75 14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 10.5L12 13m0 0l2.5-2.5M12 13V3"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLoadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLoadDuotoneLineIcon],svg[lets-icons-arhive-load-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11v6c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17v-6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M3 11c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11M8 9l4 3m0 0l4-3m-4 3V2"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M16 5h1c1.886 0 2.828 0 3.414.586S21 7.114 21 9v8c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h1"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLoadDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLoadFillIcon],svg[lets-icons-arhive-load-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16v-5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M16 6h1c1.886 0 2.828 0 3.414.586S21 8.114 21 10v8c0 1.886 0 2.828-.586 3.414S18.886 22 17 22H7c-1.886 0-2.828 0-3.414-.586S3 19.886 3 18v-8c0-1.886 0-2.828.586-3.414S5.114 6 7 6h1m0 4l4 3m0 0l4-3m-4 3V3"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLoadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLoadLightIcon],svg[lets-icons-arhive-load-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3 11c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11M8 9l4 3m0 0l4-3m-4 3V2"></svg:path><svg:path d="M16 5h1c1.886 0 2.828 0 3.414.586S21 7.114 21 9v8c0 1.886 0 2.828-.586 3.414S18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h1"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLoadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhivePlaneIcon],svg[lets-icons-arhive-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M7.6 11h.411c.36 0 .539 0 .697.055a1 1 0 0 1 .374.23c.12.118.2.278.36.6l.116.23c.16.322.24.482.36.6a1 1 0 0 0 .374.23c.158.055.338.055.697.055h2.022c.36 0 .539 0 .697-.055a1 1 0 0 0 .374-.23c.12-.118.2-.278.36-.6l.116-.23c.16-.322.24-.482.36-.6a1 1 0 0 1 .374-.23c.158-.055.338-.055.697-.055h.411c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C18 11.76 18 12.04 18 12.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C17.24 21 16.96 21 16.4 21H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 20.24 6 19.96 6 19.4v-6.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C6.76 11 7.04 11 7.6 11Z"></svg:path><svg:path fill="currentColor" d="M13 16h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M7 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6v6.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h14.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-6.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 11 19.96 11 19.4 11H17m0 0V6.163c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L14.968 3.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C14.204 3 14.082 3 13.837 3H9.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C7 4.139 7 4.559 7 5.4V11"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M13 3v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 7 14.04 7 14.6 7H17"></svg:path></svg:g>`,
})
export class LetsIconsArhivePlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhivePlaneLightIcon],svg[lets-icons-arhive-plane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.1 11.5h1.411c.36 0 .539 0 .697.055a1 1 0 0 1 .374.23c.12.118.2.278.36.6l.116.23c.16.322.24.482.36.6a1 1 0 0 0 .374.23c.158.055.338.055.697.055h3.022c.36 0 .539 0 .697-.055a1 1 0 0 0 .374-.23c.12-.118.2-.278.36-.6l.116-.23c.16-.322.24-.482.36-.6a1 1 0 0 1 .374-.23c.158-.055.338-.055.697-.055H17.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v5.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H6.1c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4.5 19.74 4.5 19.46 4.5 18.9v-5.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C5.26 11.5 5.54 11.5 6.1 11.5Z"></svg:path><svg:path d="M14 15.5h-4c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h4c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077Z"></svg:path><svg:path d="M6.5 11.5H4.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2.5 12.26 2.5 12.54 2.5 13.1v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h15.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054v-5.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-2.4"></svg:path><svg:path d="M17.5 11.5V7.163c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L14.968 3.97c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12c-.115-.027-.237-.027-.482-.027H8.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v5.6"></svg:path><svg:path d="M13.5 3.5v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h2.4"></svg:path></svg:g>`,
})
export class LetsIconsArhivePlaneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhivesAltIcon],svg[lets-icons-arhives-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M19 3c.186 0 .279 0 .357.007a1.8 1.8 0 0 1 1.636 1.636C21 4.721 21 4.814 21 5v11.12c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H5.88c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787C3 17.632 3 17.128 3 16.12V5c0-.186 0-.279.007-.357a1.8 1.8 0 0 1 1.636-1.636C4.721 3 4.814 3 5 3"></svg:path><svg:path d="M19 3h-.882c-.485 0-.728 0-.933.099a1 1 0 0 0-.18.11c-.18.14-.288.357-.505.791s-.326.65-.505.79a1 1 0 0 1-.18.111C15.61 5 15.367 5 14.882 5H8.917c-.402 0-.603 0-.776-.067a1 1 0 0 1-.364-.242c-.129-.135-.206-.32-.36-.691c-.155-.37-.232-.556-.36-.69a1 1 0 0 0-.364-.243C6.519 3 6.318 3 5.917 3H5m16 5h-2.882c-.485 0-.728 0-.933.099a1 1 0 0 0-.18.11c-.18.14-.288.357-.505.791s-.326.65-.505.79a1 1 0 0 1-.18.111c-.205.099-.448.099-.933.099H8.917c-.402 0-.603 0-.776-.067a1 1 0 0 1-.364-.242c-.129-.135-.206-.32-.36-.691c-.155-.37-.232-.556-.36-.69a1 1 0 0 0-.364-.243C6.519 8 6.318 8 5.917 8H3m18 5h-2.882c-.485 0-.728 0-.933.099q-.096.045-.18.11c-.18.14-.288.357-.505.791s-.326.65-.505.79q-.084.065-.18.111c-.205.099-.448.099-.933.099H8.917c-.402 0-.603 0-.776-.067a1 1 0 0 1-.364-.242c-.129-.135-.206-.32-.36-.691c-.155-.37-.232-.556-.36-.69a1 1 0 0 0-.364-.243C6.519 13 6.318 13 5.917 13H3"></svg:path></svg:g>`,
})
export class LetsIconsArhivesAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhivesAltLightIcon],svg[lets-icons-arhives-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M18 2.5c.651 0 .977 0 1.241.083a1.8 1.8 0 0 1 1.176 1.176c.083.264.083.59.083 1.241v11.62c0 1.008 0 1.512-.196 1.897a1.8 1.8 0 0 1-.787.787c-.385.196-.889.196-1.897.196H6.38c-1.008 0-1.512 0-1.897-.196a1.8 1.8 0 0 1-.787-.787c-.196-.385-.196-.889-.196-1.897V5c0-.651 0-.977.083-1.241A1.8 1.8 0 0 1 4.76 2.583C5.023 2.5 5.349 2.5 6 2.5"></svg:path><svg:path d="M20.5 12.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m12.667 1H7.833m12.667-6h-2.558c-.696 0-1.044 0-1.306.189s-.372.519-.592 1.179l-.088.264c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.519-.592-1.179l-.088-.264c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m12.667 1H7.833m10.667-6h-.558c-.696 0-1.044 0-1.306.189s-.372.519-.592 1.179l-.088.264c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189s-.372-.519-.592-1.179l-.088-.264c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H5.5m10.667 1H7.833"></svg:path></svg:g>`,
})
export class LetsIconsArhivesAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhivesGroupDocksIcon],svg[lets-icons-arhives-group-docks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 16h-3.172c-.408 0-.613 0-.796.076s-.329.22-.618.51l-.828.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076H9.828c-.408 0-.613 0-.796-.076s-.329-.22-.618-.51l-.828-.828c-.29-.29-.434-.434-.618-.51C6.785 16 6.58 16 6.172 16H3m18-4h-3.172c-.408 0-.613 0-.796.076s-.329.22-.618.51l-.828.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076H9.828c-.408 0-.613 0-.796-.076s-.329-.22-.618-.51l-.828-.828c-.29-.29-.434-.434-.618-.51C6.785 12 6.58 12 6.172 12H3"></svg:path><svg:path stroke-linecap="round" d="m7 8l-3.6 2.7a1 1 0 0 0-.4.8V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5a1 1 0 0 0-.4-.8L17 8"></svg:path><svg:path d="M17 13V6.163c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L14.968 3.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C14.204 3 14.082 3 13.837 3H9.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C7 4.139 7 4.559 7 5.4V13"></svg:path><svg:path d="M13 3v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 7 14.04 7 14.6 7H17"></svg:path></svg:g>`,
})
export class LetsIconsArhivesGroupDocksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhivesGroupDocksLightIcon],svg[lets-icons-arhives-group-docks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20.5 15.5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189s-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m12.667 1H7.833m12.667-5h-2.558c-.696 0-1.044 0-1.306.189c-.262.188-.372.518-.592 1.178l-.088.265c-.22.66-.33.99-.592 1.18c-.262.188-.61.188-1.306.188H9.943c-.696 0-1.044 0-1.306-.189c-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18c-.262-.188-.61-.188-1.306-.188H3.5m12.667 1H7.833"></svg:path><svg:path d="M17.5 12V5.663c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L14.968 2.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C14.204 2 14.082 2 13.837 2H8.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581V12"></svg:path><svg:path d="M13.5 2v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.26 6 14.54 6 15.1 6h2.4m-11 .5L4.344 8.656c-.312.312-.467.467-.579.65a1.8 1.8 0 0 0-.215.52c-.05.207-.05.427-.05.867v7.927c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .787.787c.385.196.889.196 1.897.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-7.927c0-.44 0-.66-.05-.868a1.8 1.8 0 0 0-.215-.52c-.112-.182-.267-.337-.578-.649L17.5 6.5"></svg:path></svg:g>`,
})
export class LetsIconsArhivesGroupDocksLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrayIcon],svg[lets-icons-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M15 5h5v10c0 1.886 0 2.828-.586 3.414S17.886 19 16 19h-1M9 5H6a2 2 0 0 0-2 2v12h5"></svg:path>`,
})
export class LetsIconsArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrayLightIcon],svg[lets-icons-array-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15 5h5v10c0 1.886 0 2.828-.586 3.414S17.886 19 16 19h-1M9 5H6a2 2 0 0 0-2 2v12h5"></svg:path>`,
})
export class LetsIconsArrayLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLdownIcon],svg[lets-icons-arrow-alt-ldown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l-.707.707l.707.707l.707-.707zm1-12a1 1 0 1 0-2 0zm-5.707 8.707l4 4l1.414-1.414l-4-4zm5.414 4l4-4l-1.414-1.414l-4 4zM13 18V6h-2v12z"></svg:path>`,
})
export class LetsIconsArrowAltLdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLdownAltIcon],svg[lets-icons-arrow-alt-ldown-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l-.354.354l.354.353l.354-.353zm.5-12a.5.5 0 0 0-1 0zm-4.854 8.354l4 4l.708-.708l-4-4zm4.708 4l4-4l-.708-.708l-4 4zM12.5 18V6h-1v12z"></svg:path>`,
})
export class LetsIconsArrowAltLdownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLeftIcon],svg[lets-icons-arrow-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 12l-.707-.707l-.707.707l.707.707zm12 1a1 1 0 1 0 0-2zM8.293 7.293l-4 4l1.414 1.414l4-4zm-4 5.414l4 4l1.414-1.414l-4-4zM5 13h12v-2H5z"></svg:path>`,
})
export class LetsIconsArrowAltLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLeftAltIcon],svg[lets-icons-arrow-alt-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 12l-.354-.354l-.353.354l.353.354zm12 .5a.5.5 0 0 0 0-1zM8.646 7.646l-4 4l.708.708l4-4zm-4 4.708l4 4l.708-.708l-4-4zM5 12.5h12v-1H5z"></svg:path>`,
})
export class LetsIconsArrowAltLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLrightIcon],svg[lets-icons-arrow-alt-lright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 12l.707-.707l.707.707l-.707.707zM6 13a1 1 0 1 1 0-2zm8.707-5.707l4 4l-1.414 1.414l-4-4zm4 5.414l-4 4l-1.414-1.414l4-4zM18 13H6v-2h12z"></svg:path>`,
})
export class LetsIconsArrowAltLrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLrightAltIcon],svg[lets-icons-arrow-alt-lright-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z"></svg:path>`,
})
export class LetsIconsArrowAltLrightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLtopIcon],svg[lets-icons-arrow-alt-ltop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l.707-.707L12 4.586l-.707.707zm-1 12a1 1 0 1 0 2 0zm5.707-8.707l-4-4l-1.414 1.414l4 4zm-5.414-4l-4 4l1.414 1.414l4-4zM11 6v12h2V6z"></svg:path>`,
})
export class LetsIconsArrowAltLtopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLtopAltIcon],svg[lets-icons-arrow-alt-ltop-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l.354-.354L12 5.293l-.354.353zm-.5 12a.5.5 0 0 0 1 0zm4.854-8.354l-4-4l-.708.708l4 4zm-4.708-4l-4 4l.708.708l4-4zM11.5 6v12h1V6z"></svg:path>`,
})
export class LetsIconsArrowAltLtopAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownIcon],svg[lets-icons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-.707.707l.707.707l.707-.707zm1-15a1 1 0 1 0-2 0zm-7.707 9.707l6 6l1.414-1.414l-6-6zm7.414 6l6-6l-1.414-1.414l-6 6zM13 20V5h-2v15z"></svg:path>`,
})
export class LetsIconsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownLightIcon],svg[lets-icons-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-.354.354l.354.353l.354-.353zm.5-15a.5.5 0 0 0-1 0zm-6.854 9.354l6 6l.708-.708l-6-6zm6.708 6l6-6l-.708-.708l-6 6zM12.5 20V5h-1v15z"></svg:path>`,
})
export class LetsIconsArrowDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownLongIcon],svg[lets-icons-arrow-down-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17V3"></svg:path><svg:path fill="currentColor" d="m12.203 21.715l3.893-5.45a.8.8 0 0 0-.65-1.265H8.554a.8.8 0 0 0-.651 1.265l3.893 5.45c.1.14.307.14.406 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowDownLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownLongLightIcon],svg[lets-icons-arrow-down-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 17V3"></svg:path><svg:path fill="currentColor" d="m12.214 21.643l2.059-3.431A.8.8 0 0 0 13.587 17h-3.174a.8.8 0 0 0-.686 1.212l2.059 3.43a.25.25 0 0 0 .428 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowDownLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropDownIcon],svg[lets-icons-arrow-drop-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.808 14.77l-3.715-4.458A.8.8 0 0 1 8.708 9h6.584a.8.8 0 0 1 .614 1.312l-3.714 4.458a.25.25 0 0 1-.384 0"></svg:path>`,
})
export class LetsIconsArrowDropDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropDownBigIcon],svg[lets-icons-arrow-drop-down-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.18 15.83L6.543 9.203C5.892 8.275 6.556 7 7.689 7h8.622c1.133 0 1.797 1.275 1.147 2.203l-4.639 6.627a1 1 0 0 1-1.638 0"></svg:path>`,
})
export class LetsIconsArrowDropDownBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropLeftIcon],svg[lets-icons-arrow-drop-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.23 11.808l4.458-3.715A.8.8 0 0 1 15 8.708v6.584a.8.8 0 0 1-1.312.614L9.23 12.192a.25.25 0 0 1 0-.384"></svg:path>`,
})
export class LetsIconsArrowDropLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropRightIcon],svg[lets-icons-arrow-drop-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.77 11.808l-4.458-3.715A.8.8 0 0 0 9 8.708v6.584a.8.8 0 0 0 1.312.614l4.458-3.714a.25.25 0 0 0 0-.384"></svg:path>`,
})
export class LetsIconsArrowDropRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropUpIcon],svg[lets-icons-arrow-drop-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.192 9.23l3.714 4.458A.8.8 0 0 1 15.292 15H8.708a.8.8 0 0 1-.615-1.312l3.715-4.458a.25.25 0 0 1 .384 0"></svg:path>`,
})
export class LetsIconsArrowDropUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftIcon],svg[lets-icons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 12l-.707-.707l-.707.707l.707.707zm15 1a1 1 0 1 0 0-2zM9.293 5.293l-6 6l1.414 1.414l6-6zm-6 7.414l6 6l1.414-1.414l-6-6zM4 13h15v-2H4z"></svg:path>`,
})
export class LetsIconsArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftLightIcon],svg[lets-icons-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 12l-.354-.354l-.353.354l.353.354zm15 .5a.5.5 0 0 0 0-1zM9.646 5.646l-6 6l.708.708l6-6zm-6 6.708l6 6l.708-.708l-6-6zM4 12.5h15v-1H4z"></svg:path>`,
})
export class LetsIconsArrowLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftLongIcon],svg[lets-icons-arrow-left-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h14"></svg:path><svg:path fill="currentColor" d="m2.285 11.797l5.45-3.893A.8.8 0 0 1 9 8.554v6.891a.8.8 0 0 1-1.265.651l-5.45-3.893a.25.25 0 0 1 0-.406"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftLongLightIcon],svg[lets-icons-arrow-left-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 12h14"></svg:path><svg:path fill="currentColor" d="m2.357 11.786l3.431-2.059A.8.8 0 0 1 7 10.413v3.174a.8.8 0 0 1-1.212.686l-3.43-2.059a.25.25 0 0 1 0-.428"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftStopIcon],svg[lets-icons-arrow-left-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10 12l-.707-.707l-.707.707l.707.707zm10 1a1 1 0 1 0 0-2zm-4.707-7.707l-6 6l1.414 1.414l6-6zm-6 7.414l6 6l1.414-1.414l-6-6zM10 13h10v-2H10z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M4 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftStopLightIcon],svg[lets-icons-arrow-left-stop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10 12l-.354-.354l-.353.354l.353.354zm10 .5a.5.5 0 0 0 0-1zm-4.354-6.854l-6 6l.708.708l6-6zm-6 6.708l6 6l.708-.708l-6-6zM10 12.5h10v-1H10z"></svg:path><svg:path stroke="currentColor" d="M4 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftStopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightIcon],svg[lets-icons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 12l.707-.707l.707.707l-.707.707zM5 13a1 1 0 1 1 0-2zm9.707-7.707l6 6l-1.414 1.414l-6-6zm6 7.414l-6 6l-1.414-1.414l6-6zM20 13H5v-2h15z"></svg:path>`,
})
export class LetsIconsArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightLightIcon],svg[lets-icons-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 12l.354-.354l.353.354l-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM20 12.5H5v-1h15z"></svg:path>`,
})
export class LetsIconsArrowRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightLongIcon],svg[lets-icons-arrow-right-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12H3"></svg:path><svg:path fill="currentColor" d="m21.715 11.797l-5.45-3.893a.8.8 0 0 0-1.265.65v6.891a.8.8 0 0 0 1.265.651l5.45-3.893a.25.25 0 0 0 0-.406"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightLongLightIcon],svg[lets-icons-arrow-right-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 12H3"></svg:path><svg:path fill="currentColor" d="m21.643 11.786l-3.431-2.059a.8.8 0 0 0-1.212.686v3.174a.8.8 0 0 0 1.212.686l3.43-2.059a.25.25 0 0 0 0-.428"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightStopIcon],svg[lets-icons-arrow-right-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14 12l.707-.707l.707.707l-.707.707zM4 13a1 1 0 1 1 0-2zm4.707-7.707l6 6l-1.414 1.414l-6-6zm6 7.414l-6 6l-1.414-1.414l6-6zM14 13H4v-2h10z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M20 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightStopLightIcon],svg[lets-icons-arrow-right-stop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14 12l.354-.354l.353.354l-.353.354zm-10 .5a.5.5 0 0 1 0-1zm4.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM14 12.5H4v-1h10z"></svg:path><svg:path stroke="currentColor" d="M20 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightStopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopIcon],svg[lets-icons-arrow-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l-.707-.707l.707-.707l.707.707zm1 15a1 1 0 1 1-2 0zM5.293 9.293l6-6l1.414 1.414l-6 6zm7.414-6l6 6l-1.414 1.414l-6-6zM13 4v15h-2V4z"></svg:path>`,
})
export class LetsIconsArrowTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopLightIcon],svg[lets-icons-arrow-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l-.354-.354l.354-.353l.354.353zm.5 15a.5.5 0 0 1-1 0zM5.646 9.646l6-6l.708.708l-6 6zm6.708-6l6 6l-.708.708l-6-6zM12.5 4v15h-1V4z"></svg:path>`,
})
export class LetsIconsArrowTopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopLongIcon],svg[lets-icons-arrow-top-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v14"></svg:path><svg:path fill="currentColor" d="m11.797 2.285l-3.893 5.45A.8.8 0 0 0 8.554 9h6.891a.8.8 0 0 0 .651-1.265l-3.893-5.45a.25.25 0 0 0-.406 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowTopLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopLongLightIcon],svg[lets-icons-arrow-top-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 7v14"></svg:path><svg:path fill="currentColor" d="M11.786 2.357L9.727 5.788A.8.8 0 0 0 10.413 7h3.174a.8.8 0 0 0 .686-1.212l-2.059-3.43a.25.25 0 0 0-.428 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowTopLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAtomIcon],svg[lets-icons-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="2" d="M15 12c0 2.667-.434 5.035-1.1 6.7c-.334.835-.707 1.444-1.07 1.827c-.36.381-.641.473-.83.473s-.47-.091-.83-.473c-.363-.384-.736-.992-1.07-1.827C9.434 17.035 9 14.667 9 12s.434-5.035 1.1-6.7c.334-.835.707-1.443 1.07-1.827c.36-.381.641-.473.83-.473s.47.091.83.473c.363.384.736.992 1.07 1.827c.666 1.665 1.1 4.033 1.1 6.7Z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M13.5 14.598c-2.31 1.333-4.578 2.142-6.352 2.397c-.89.129-1.604.11-2.117-.012c-.511-.122-.73-.32-.825-.483s-.156-.453-.006-.956c.151-.505.492-1.133 1.048-1.84c1.109-1.408 2.943-2.969 5.252-4.302c2.31-1.333 4.578-2.142 6.352-2.397c.89-.128 1.604-.11 2.117.012c.511.122.73.32.825.483s.156.453.006.956c-.15.506-.492 1.133-1.048 1.84c-1.109 1.409-2.942 2.969-5.252 4.302Z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M13.5 9.402C11.19 8.068 8.922 7.26 7.148 7.005c-.89-.129-1.604-.11-2.117.012c-.511.122-.73.32-.825.483s-.156.452-.006.956c.151.505.492 1.133 1.048 1.84c1.109 1.408 2.943 2.969 5.252 4.302c2.31 1.333 4.578 2.141 6.352 2.397c.89.128 1.604.11 2.117-.012c.511-.122.73-.32.825-.483s.156-.453.006-.956c-.15-.506-.492-1.133-1.048-1.84c-1.109-1.409-2.942-2.969-5.252-4.302Z"></svg:path></svg:g>`,
})
export class LetsIconsAtomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAtomAltIcon],svg[lets-icons-atom-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="2" d="M17 12c0 2.611-.637 4.927-1.615 6.557C14.395 20.206 13.168 21 12 21s-2.395-.794-3.385-2.443C7.637 16.927 7 14.61 7 12s.637-4.927 1.615-6.557C9.605 3.794 10.832 3 12 3s2.396.794 3.385 2.443C16.363 7.073 17 9.39 17 12Z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M12 17c-2.611 0-4.927-.637-6.557-1.615C3.794 14.395 3 13.168 3 12s.794-2.395 2.443-3.385C7.073 7.637 9.39 7 12 7s4.927.637 6.557 1.615C20.206 9.605 21 10.832 21 12s-.794 2.396-2.443 3.385C16.927 16.363 14.61 17 12 17Z"></svg:path></svg:g>`,
})
export class LetsIconsAtomAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAtomAltLightIcon],svg[lets-icons-atom-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="1.5"></svg:circle><svg:path d="M16.5 12c0 2.7-.548 5.12-1.412 6.848C14.21 20.604 13.09 21.5 12 21.5s-2.21-.896-3.088-2.652C8.048 17.12 7.5 14.7 7.5 12s.548-5.12 1.412-6.847C9.79 3.396 10.91 2.5 12 2.5s2.21.896 3.088 2.653C15.952 6.879 16.5 9.299 16.5 12Z"></svg:path><svg:path d="M12 16.5c-2.7 0-5.12-.548-6.847-1.412C3.396 14.21 2.5 13.09 2.5 12s.896-2.21 2.653-3.088C6.879 8.048 9.299 7.5 12 7.5c2.7 0 5.12.548 6.848 1.412C20.604 9.79 21.5 10.91 21.5 12s-.896 2.21-2.652 3.088C17.12 15.952 14.7 16.5 12 16.5Z"></svg:path></svg:g>`,
})
export class LetsIconsAtomAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsAtomLightIcon],svg[lets-icons-atom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" d="M16.5 12c0 2.7-.548 5.12-1.412 6.848C14.21 20.604 13.09 21.5 12 21.5s-2.21-.896-3.088-2.652C8.048 17.12 7.5 14.7 7.5 12s.548-5.12 1.412-6.847C9.79 3.396 10.91 2.5 12 2.5s2.21.896 3.088 2.653C15.952 6.879 16.5 9.299 16.5 12Z"></svg:path><svg:path stroke="currentColor" d="M14.25 15.897c-2.339 1.35-4.709 2.086-6.636 2.201c-1.96.118-3.297-.405-3.841-1.348c-.545-.944-.33-2.362.753-4.001c1.063-1.61 2.885-3.296 5.224-4.646s4.709-2.086 6.636-2.201c1.96-.118 3.297.405 3.841 1.348c.545.943.33 2.362-.753 4c-1.063 1.612-2.885 3.297-5.224 4.647Z"></svg:path><svg:path stroke="currentColor" d="M14.25 8.103c-2.339-1.35-4.709-2.086-6.636-2.201c-1.96-.118-3.297.405-3.841 1.348c-.545.943-.33 2.362.753 4c1.063 1.612 2.885 3.297 5.224 4.647s4.709 2.086 6.636 2.201c1.96.118 3.297-.405 3.841-1.348c.545-.943.33-2.362-.753-4c-1.063-1.612-2.885-3.297-5.224-4.647Z"></svg:path></svg:g>`,
})
export class LetsIconsAtomLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBackIcon],svg[lets-icons-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"></svg:path>`,
})
export class LetsIconsBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBackLightIcon],svg[lets-icons-back-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10l-.354.354L3.293 10l.353-.354zm16.5 8a.5.5 0 0 1-1 0zM8.646 15.354l-5-5l.708-.708l5 5zm-5-5.708l5-5l.708.708l-5 5zM4 9.5h10v1H4zM20.5 16v2h-1v-2zM14 9.5a6.5 6.5 0 0 1 6.5 6.5h-1a5.5 5.5 0 0 0-5.5-5.5z"></svg:path>`,
})
export class LetsIconsBackLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagIcon],svg[lets-icons-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M8 8V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1m-1 6v-2m-6 2v-2"></svg:path><svg:path d="M4 12c0-1.886 0-2.828.586-3.414S6.114 8 8 8h8c1.886 0 2.828 0 3.414.586S20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"></svg:path></svg:g>`,
})
export class LetsIconsBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagAltIcon],svg[lets-icons-bag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"></svg:path><svg:path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14S5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528s.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323s-.255-.83-.17-1.843z"></svg:path></svg:g>`,
})
export class LetsIconsBagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagAltDuotoneIcon],svg[lets-icons-bag-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3.956 14.784c.498-3.237.747-4.856 1.871-5.82S8.588 8 11.863 8h.274c3.275 0 4.912 0 6.036.964s1.373 2.583 1.87 5.82l.602 3.912c.165 1.07.248 1.606-.052 1.955c-.299.349-.84.349-1.924.349H5.33c-1.083 0-1.625 0-1.924-.349c-.3-.349-.217-.884-.053-1.955z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 11V7.5A3.5 3.5 0 0 1 12 4v0a3.5 3.5 0 0 1 3.5 3.5V11"></svg:path></svg:g>`,
})
export class LetsIconsBagAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagAltDuotoneLineIcon],svg[lets-icons-bag-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBagAltDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M4.431 14.912c.488-2.926.732-4.389 1.701-5.31q.167-.159.35-.298C7.552 8.5 9.035 8.5 12 8.5s4.449 0 5.517.804q.184.14.351.297c.97.922 1.213 2.385 1.7 5.31l.544 3.26c.18 1.081.27 1.622-.03 1.975c-.299.354-.847.354-1.943.354H5.861c-1.096 0-1.644 0-1.944-.354c-.3-.353-.209-.894-.029-1.975z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8.5 11V7.5A3.5 3.5 0 0 1 12 4v0a3.5 3.5 0 0 1 3.5 3.5V11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBagAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBagAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagAltFillIcon],svg[lets-icons-bag-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"></svg:path><svg:path fill="currentColor" d="M3.694 12.668c.145-1.741.218-2.611.792-3.14S5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528s.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323s-.255-.83-.17-1.843z"></svg:path></svg:g>`,
})
export class LetsIconsBagAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagAltLightIcon],svg[lets-icons-bag-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"></svg:path><svg:path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14S5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528s.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323s-.255-.83-.17-1.843z"></svg:path></svg:g>`,
})
export class LetsIconsBagAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagDuotoneIcon],svg[lets-icons-bag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4.858 9.847c.067-.876.101-1.314.389-1.58C5.534 8 5.973 8 6.852 8h10.296c.879 0 1.318 0 1.605.266c.288.267.322.705.389 1.58l.244 3.178c.264 3.42.395 5.13-.462 6.317a4 4 0 0 1-.66.713C17.143 21 15.43 21 12 21s-5.145 0-6.263-.946q-.374-.317-.661-.713c-.857-1.188-.725-2.898-.462-6.317z"></svg:path><svg:path stroke="currentColor" d="M8.5 8V6.5a3.5 3.5 0 1 1 7 0V8"></svg:path><svg:path fill="currentColor" d="M8 11.5a.5.5 0 0 0 1 0zm1 0V10H8v1.5zm6 0a.5.5 0 0 0 1 0zm1 0V10h-1v1.5z"></svg:path></svg:g>`,
})
export class LetsIconsBagDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagDuotoneLineIcon],svg[lets-icons-bag-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBagDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M5.347 10.334c.073-.87.109-1.306.396-1.57S6.467 8.5 7.34 8.5h9.32c.873 0 1.31 0 1.597.264s.323.7.396 1.57l.224 2.692c.243 2.916.365 4.374-.246 5.45a4 4 0 0 1-1.22 1.326c-1.021.698-2.485.698-5.411.698s-4.39 0-5.41-.698a4 4 0 0 1-1.22-1.326c-.612-1.076-.49-2.534-.247-5.45z"></svg:path><svg:path stroke="#fff" d="M8.5 7v-.5a3.5 3.5 0 1 1 7 0V7"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8.5 12.5V11m7 1.5V11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBagDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBagDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagFillIcon],svg[lets-icons-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.586 7.586C3 8.172 3 9.114 3 11v3c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-3c0-1.886 0-2.828-.586-3.414S18.886 7 17 7H7c-1.886 0-2.828 0-3.414.586M10 12a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm6 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagLightIcon],svg[lets-icons-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M7.5 8.5V8c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589c.195-.019.428-.019.892-.019v0c.464 0 .697 0 .892.02a4 4 0 0 1 3.589 3.588c.019.195.019.428.019.892v.5m-1 5v-2m-7 2v-2"></svg:path><svg:path d="M5.5 12.1c0-1.697 0-2.546.527-3.073S7.403 8.5 9.1 8.5h5.8c1.697 0 2.546 0 3.073.527s.527 1.376.527 3.073v2.4c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-1c-2.828 0-4.243 0-5.121-.879C5.5 18.743 5.5 17.328 5.5 14.5z"></svg:path></svg:g>`,
})
export class LetsIconsBagLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketIcon],svg[lets-icons-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 5V3m-2 13l-.5-3m4.5 3l.5-3M2 9h20v0c-1.267 0-1.9 0-2.384.3a2 2 0 0 0-.431.36c-.382.422-.495 1.045-.722 2.292l-.866 4.763c-.285 1.57-.428 2.356-.985 2.82c-.556.465-1.354.465-2.95.465h-3.324c-1.596 0-2.394 0-2.95-.465c-.557-.464-.7-1.25-.985-2.82l-.866-4.763c-.227-1.247-.34-1.87-.722-2.292a2 2 0 0 0-.431-.36C3.9 9 3.267 9 2 9z"></svg:path>`,
})
export class LetsIconsBasketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltIcon],svg[lets-icons-basket-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 16v-1M8 4L6 7m10-3l2 3m-4 9v-1m-9-4v0c.57 0 1.048.428 1.11.994l.495 4.448c.188 1.692.282 2.538.851 3.048c.57.51 1.421.51 3.124.51h2.84c1.703 0 2.554 0 3.124-.51s.663-1.356.851-3.048l.495-4.448A1.117 1.117 0 0 1 19 11v0m0 0H5a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4Z"></svg:path>`,
})
export class LetsIconsBasketAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAlt2Icon],svg[lets-icons-basket-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 10H4a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m6.198 12.78l.604 5.44A2 2 0 0 0 8.79 20h6.42a2 2 0 0 0 1.988-1.78l.604-5.44A2 2 0 0 1 19.79 11H4.21a2 2 0 0 1 1.988 1.78M11 14a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 5L6 9m10-4l2 4"></svg:path></svg:g>`,
})
export class LetsIconsBasketAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAlt2DuotoneLineIcon],svg[lets-icons-basket-alt-2-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBasketAlt2DuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="silver" stroke-opacity=".25" d="m10.5 15.5l-1-3.5"></svg:path><svg:path stroke="#fff" d="m8.5 4.5l-2 3m9-3l2 3"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="m13.5 15.5l1-3.5"></svg:path><svg:path stroke="#fff" d="M4.5 9.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m0 0h-15a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBasketAlt2DuotoneLine0)"></svg:path>`,
})
export class LetsIconsBasketAlt2DuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAlt2LightIcon],svg[lets-icons-basket-alt-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m10.5 15.5l-1-3.5m-1-7.5l-2 3m9-3l2 3m-4 8l1-3.5m-10-2.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m0 0h-15a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Z"></svg:path>`,
})
export class LetsIconsBasketAlt2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAlt3Icon],svg[lets-icons-basket-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 4h1.626c.567 0 .85 0 1.076.124a1 1 0 0 1 .25.195c.175.189.244.464.381 1.014l.182.727c.101.404.152.606.23.776a2 2 0 0 0 1.446 1.13C9.375 8 9.583 8 10 8v0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17H7.55c-.145 0-.218 0-.274-.006a1 1 0 0 1-.867-1.203a3 3 0 0 1 .081-.262v0c.052-.154.077-.231.106-.3a2 2 0 0 1 1.698-1.224C8.368 14 8.45 14 8.611 14H14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.528 14h-3.554c-1.216 0-1.824 0-2.293-.275a2 2 0 0 1-.521-.442c-.35-.418-.45-1.018-.649-2.217c-.203-1.215-.304-1.823-.063-2.273a1.5 1.5 0 0 1 .408-.482C8.26 8 8.876 8 10.108 8h6.656c1.45 0 2.175 0 2.469.474c.293.475-.032 1.123-.68 2.42l-.447.895c-.538 1.076-.807 1.614-1.29 1.912c-.484.299-1.085.299-2.288.299Z"></svg:path><svg:circle cx="17" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="20" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsBasketAlt3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAlt3LightIcon],svg[lets-icons-basket-alt-3-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="M3.5 4.5h1.558c.696 0 1.044 0 1.306.189s.372.519.592 1.179L7.5 7.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 17.5H8.05c-.145 0-.218 0-.274-.006a1 1 0 0 1-.867-1.203a3 3 0 0 1 .081-.262v0c.052-.154.077-.231.106-.3a2 2 0 0 1 1.698-1.224c.074-.005.155-.005.317-.005H14.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M14.179 14.5h-3.041c-1.28 0-1.92 0-2.42-.33c-.501-.33-.753-.918-1.257-2.094l-.169-.394c-.81-1.89-1.214-2.833-.77-3.508C6.968 7.5 7.996 7.5 10.05 7.5h5.28c2.3 0 3.449 0 3.883.747c.433.747-.137 1.745-1.278 3.741l-.283.497c-.562.983-.843 1.475-1.309 1.745s-1.032.27-2.164.27Z"></svg:path><svg:circle cx="17" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="20" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsBasketAlt3LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltDuotoneIcon],svg[lets-icons-basket-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 10H4a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2M6.802 18.22l-.604-5.44A2 2 0 0 0 4.21 11h15.58a2 2 0 0 0-1.988 1.78l-.604 5.44A2 2 0 0 1 15.21 20H8.79a2 2 0 0 1-1.988-1.78"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="m8.5 3.5l-2 3m9-3l2 3m-7 10l-1-3m4 3l1-3"></svg:path></svg:g>`,
})
export class LetsIconsBasketAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltDuotoneLineIcon],svg[lets-icons-basket-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBasketAltDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="#fff" d="m8.5 6.5l-2 3m9-3l2 3"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="m10.5 15.5l-1-3.5m4 3.5l1-3.5"></svg:path><svg:path stroke="#fff" d="M4.5 9.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m-16 0h17"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBasketAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBasketAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltLightIcon],svg[lets-icons-basket-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m10.5 15.5l-1-3.5m-1-5.5l-2 3m9-3l2 3m-4 6l1-3.5m-10-2.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m-16 0h17"></svg:path>`,
})
export class LetsIconsBasketAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketDuotoneIcon],svg[lets-icons-basket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4.413 10.609C3.69 10.127 4.03 9 4.9 9h14.2c.869 0 1.21 1.127.487 1.609a1.76 1.76 0 0 0-.74 1.08l-1.15 5.179c-.335 1.501-.502 2.252-1.05 2.692s-1.317.44-2.856.44H10.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692l-1.15-5.18a1.76 1.76 0 0 0-.74-1.08"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 7V5m3 11.5l.5-3m-3.5 3v-3m-3 3l-.5-3"></svg:path></svg:g>`,
})
export class LetsIconsBasketDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketDuotoneLineIcon],svg[lets-icons-basket-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.2"><svg:path d="M12 5V3m-2 13l-.5-3m4.5 3l.5-3"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M2 9h20c-1.267 0-1.9 0-2.384.3a2 2 0 0 0-.431.36c-.382.422-.495 1.045-.722 2.292l-.866 4.763c-.285 1.57-.428 2.356-.985 2.82c-.556.465-1.354.465-2.95.465h-3.324c-1.596 0-2.394 0-2.95-.465c-.557-.464-.7-1.25-.985-2.82l-.866-4.763c-.227-1.247-.34-1.87-.722-2.292a2 2 0 0 0-.431-.36C3.9 9 3.267 9 2 9Z"></svg:path></svg:g>`,
})
export class LetsIconsBasketDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketFillIcon],svg[lets-icons-basket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 5V3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 8H2v3c.375 0 .563 0 .728.028a2 2 0 0 1 1.521 1.22c.063.155.103.338.185.704l.87 3.916c.334 1.501.5 2.252 1.049 2.692S7.67 20 9.209 20h5.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l.87-3.916c.08-.366.121-.549.184-.704a2 2 0 0 1 1.521-1.22C21.437 11 21.625 11 22 11zM9.486 12.836a1 1 0 1 0-1.972.328l.5 3a1 1 0 1 0 1.972-.328zm7 .328a1 1 0 1 0-1.973-.328l-.5 3a1 1 0 1 0 1.973.328z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBasketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketLightIcon],svg[lets-icons-basket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M12 5V3m-2 13l-.5-3m4.5 3l.5-3M2 9h20v0c-1.267 0-1.9 0-2.384.3a2 2 0 0 0-.431.36c-.382.422-.495 1.045-.722 2.292l-.866 4.763c-.285 1.57-.428 2.356-.985 2.82c-.556.465-1.354.465-2.95.465h-3.324c-1.596 0-2.394 0-2.95-.465c-.557-.464-.7-1.25-.985-2.82l-.866-4.763c-.227-1.247-.34-1.87-.722-2.292a2 2 0 0 0-.431-.36C3.9 9 3.267 9 2 9z"></svg:path>`,
})
export class LetsIconsBasketLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullIcon],svg[lets-icons-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="15" x="7" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:rect width="6" height="11" x="9" y="8" fill="currentColor" rx=".8"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 1.293C9 1.586 9 2.057 9 3h6c0-.943 0-1.414-.293-1.707S13.943 1 13 1h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullDuotoneIcon],svg[lets-icons-battery-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="15" x="7" y="6" fill="currentColor" fill-opacity=".25" rx="1.5"></svg:rect><svg:rect width="8" height="13" x="8" y="7" fill="currentColor" rx="1"></svg:rect><svg:rect width="6" height="2" x="9" y="3" fill="currentColor" fill-opacity=".25" rx="1"></svg:rect>`,
})
export class LetsIconsBatteryFullDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullDuotoneLineIcon],svg[lets-icons-battery-full-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M8.5 9.5c0-.943 0-1.414.293-1.707S9.557 7.5 10.5 7.5h3c.943 0 1.414 0 1.707.293s.293.764.293 1.707v8c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-3c-.943 0-1.414 0-1.707-.293S8.5 18.443 8.5 17.5z"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M9.076 3.617C9 3.801 9 4.034 9 4.5v.2c.001.148.001.221-.04.265c-.04.043-.114.047-.26.056q-.255.013-.48.043c-.519.07-1.051.232-1.488.668c-.436.437-.598.97-.668 1.489C6 7.697 6 8.284 6 8.938v9.124c0 .654 0 1.241.064 1.717c.07.52.232 1.052.668 1.489c.437.436.97.598 1.489.668C8.697 22 9.284 22 9.938 22h4.124c.654 0 1.242 0 1.717-.064c.52-.07 1.052-.232 1.489-.668c.436-.437.598-.97.668-1.489c.064-.476.064-1.063.064-1.717V8.938c0-.654 0-1.241-.064-1.717c-.07-.52-.232-1.052-.668-1.489c-.437-.436-.97-.598-1.489-.668a6 6 0 0 0-.479-.043c-.146-.009-.22-.013-.26-.056S15 4.848 15 4.7v-.2c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C14.199 3 13.966 3 13.5 3h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M10.5 6H10c-1.414 0-2.121 0-2.56.44C7 6.878 7 7.585 7 9v9c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h4c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V9c0-1.414 0-2.121-.44-2.56C16.122 6 15.415 6 14 6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryFullDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullFillIcon],svg[lets-icons-battery-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9c0-1.886 0-2.828.586-3.414S8.114 5 10 5h4c1.886 0 2.828 0 3.414.586S18 7.114 18 9v10c0 1.886 0 2.828-.586 3.414S15.886 23 14 23h-4c-1.886 0-2.828 0-3.414-.586S6 20.886 6 19zm3-6c0-.943 0-1.414.293-1.707S10.057 1 11 1h2c.943 0 1.414 0 1.707.293S15 2.057 15 3v1H9z"></svg:path>`,
})
export class LetsIconsBatteryFullFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullLightIcon],svg[lets-icons-battery-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="9" height="14" x="7.5" y="6.5" stroke="currentColor" rx="1.5"></svg:rect><svg:rect width="6" height="11" x="9" y="8" fill="currentColor" rx=".8"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 3.293C9 3.586 9 4.057 9 5h6c0-.943 0-1.414-.293-1.707S13.943 3 13 3h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryFullLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowIcon],svg[lets-icons-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="15" x="7" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:rect width="6" height="3" x="9" y="16" fill="currentColor" rx=".8"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 1.293C9 1.586 9 2.057 9 3h6c0-.943 0-1.414-.293-1.707S13.943 1 13 1h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowDuotoneIcon],svg[lets-icons-battery-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="15" x="7" y="6" fill="currentColor" fill-opacity=".25" rx="1.5"></svg:rect><svg:rect width="8" height="5" x="8" y="15" fill="currentColor" rx="1"></svg:rect><svg:rect width="6" height="2" x="9" y="3" fill="currentColor" fill-opacity=".25" rx="1"></svg:rect>`,
})
export class LetsIconsBatteryLowDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowDuotoneLineIcon],svg[lets-icons-battery-low-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M9.076 3.617C9 3.801 9 4.034 9 4.5v.2c.001.148.001.221-.04.265c-.04.043-.114.047-.26.056q-.255.013-.48.043c-.519.07-1.051.232-1.488.668c-.436.437-.598.97-.668 1.489C6 7.697 6 8.284 6 8.938v9.124c0 .654 0 1.241.064 1.717c.07.52.232 1.052.668 1.489c.437.436.97.598 1.489.668C8.697 22 9.284 22 9.938 22h4.124c.654 0 1.241 0 1.717-.064c.52-.07 1.052-.232 1.489-.668c.436-.437.598-.97.668-1.489c.064-.476.064-1.063.064-1.717V8.938c0-.654 0-1.241-.064-1.717c-.07-.52-.232-1.052-.668-1.489c-.437-.436-.97-.598-1.489-.668a6 6 0 0 0-.479-.043c-.146-.009-.22-.013-.26-.056s-.041-.117-.04-.265v-.2c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C14.199 3 13.966 3 13.5 3h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M10.5 6H10c-1.414 0-2.121 0-2.56.44C7 6.878 7 7.585 7 9v9c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h4c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V9c0-1.414 0-2.121-.44-2.56C16.122 6 15.415 6 14 6z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" d="M8.5 17.5c0-.943 0-1.414.293-1.707s.764-.293 1.707-.293h3c.943 0 1.414 0 1.707.293s.293.764.293 1.707s0 1.414-.293 1.707s-.764.293-1.707.293h-3c-.943 0-1.414 0-1.707-.293S8.5 18.443 8.5 17.5Z"></svg:path></svg:g>`,
})
export class LetsIconsBatteryLowDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowFillIcon],svg[lets-icons-battery-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.586 5.586C6 6.172 6 7.114 6 9v10c0 1.886 0 2.828.586 3.414S8.114 23 10 23h4c1.886 0 2.828 0 3.414-.586S18 20.886 18 19V9c0-1.886 0-2.828-.586-3.414S15.886 5 14 5h-4c-1.886 0-2.828 0-3.414.586m1.648 2.648C8 8.47 8 8.846 8 9.6v5.8c0 .754 0 1.131.234 1.366C8.47 17 8.846 17 9.6 17h4.8c.754 0 1.131 0 1.366-.234C16 16.53 16 16.154 16 15.4V9.6c0-.754 0-1.131-.234-1.366C15.53 8 15.154 8 14.4 8H9.6c-.754 0-1.131 0-1.366.234m1.059-6.941C9 1.586 9 2.057 9 3h6c0-.943 0-1.414-.293-1.707S13.943 1 13 1h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBatteryLowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryLowLightIcon],svg[lets-icons-battery-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="9" height="14" x="7.5" y="6.5" stroke="currentColor" rx="1.5"></svg:rect><svg:rect width="6" height="3" x="9" y="16" fill="currentColor" rx=".8"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 3.293C9 3.586 9 4.057 9 5h6c0-.943 0-1.414-.293-1.707S13.943 3 13 3h-2c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBatteryLowLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBedIcon],svg[lets-icons-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 18V8.5A1.5 1.5 0 0 0 19.5 7h-4A1.5 1.5 0 0 0 14 8.5V18m-4 0v-6H4a1 1 0 0 0-1 1v5"></svg:path><svg:path d="M4 12h17v2H3v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class LetsIconsBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBedLightIcon],svg[lets-icons-bed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 18.5v-11a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v11m-3 0v-8h-7a1 1 0 0 0-1 1v7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 10.5h18v3h-19v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M10.5 12.5v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class LetsIconsBedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellIcon],svg[lets-icons-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M6.448 7.97a5.586 5.586 0 0 1 11.104 0l.252 2.266l.006.057a8 8 0 0 0 1.074 3.18l.03.05l.577.963c.525.874.787 1.311.73 1.67a1 1 0 0 1-.345.61c-.279.234-.789.234-1.808.234H5.932c-1.02 0-1.53 0-1.808-.233a1 1 0 0 1-.346-.611c-.056-.359.206-.796.73-1.67l.579-.964l.03-.05a8 8 0 0 0 1.073-3.179l.006-.057z"></svg:path><svg:path stroke-linecap="round" d="M8 17a4 4 0 1 0 8 0"></svg:path></svg:g>`,
})
export class LetsIconsBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellDuotoneLineIcon],svg[lets-icons-bell-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBellDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M6.5 8a5.5 5.5 0 1 1 11 0v2a7.5 7.5 0 0 0 1.5 4.5l.214.286a4 4 0 0 1 .13.18a1 1 0 0 1-.765 1.53c-.04.004-.1.004-.222.004H5.643c-.122 0-.183 0-.222-.003a1 1 0 0 1-.766-1.532c.021-.033.058-.082.13-.18L5 14.5A7.5 7.5 0 0 0 6.5 10z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9.585 18.647a2.5 2.5 0 0 0 4.83 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBellDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBellDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellFillIcon],svg[lets-icons-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6.502 6.975a5.525 5.525 0 0 1 10.996 0l.286 2.866c.018.175.026.262.037.348a8 8 0 0 0 1.19 3.325l.192.291l.861 1.292c.787 1.18 1.18 1.769 1.008 2.244q-.05.136-.135.252c-.3.407-1.009.407-2.426.407H5.489c-1.417 0-2.126 0-2.426-.407a1 1 0 0 1-.134-.252c-.173-.475.22-1.065 1.006-2.244l.862-1.292l.192-.291a8 8 0 0 0 1.19-3.325c.01-.086.02-.173.037-.348z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.068 20.63c.114.106.365.2.715.267c.349.067.777.103 1.217.103s.868-.036 1.217-.103s.6-.161.715-.268"></svg:path></svg:g>`,
})
export class LetsIconsBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellLightIcon],svg[lets-icons-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.448 8.97a5.586 5.586 0 0 1 11.104 0l.252 2.266l.006.057a8 8 0 0 0 1.074 3.18l.03.05l.577.963c.525.874.787 1.311.73 1.67a1 1 0 0 1-.345.61c-.279.234-.789.234-1.808.234H5.932c-1.02 0-1.53 0-1.808-.233a1 1 0 0 1-.346-.611c-.056-.359.206-.796.73-1.67l.579-.964l.03-.05a8 8 0 0 0 1.073-3.179l.006-.057z"></svg:path><svg:path stroke-linecap="round" d="M9.102 18.406c.171.744.548 1.402 1.072 1.87c.524.47 1.166.724 1.826.724s1.302-.254 1.826-.723c.524-.47.9-1.127 1.072-1.871"></svg:path></svg:g>`,
})
export class LetsIconsBellLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellPinIcon],svg[lets-icons-bell-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.455 2.474a6.586 6.586 0 0 0-9.001 5.385l-.252 2.266l-.006.054a7 7 0 0 1-.939 2.782l-.028.047l-.578.963l-.024.04c-.242.403-.46.768-.606 1.077c-.148.314-.307.74-.23 1.224a2 2 0 0 0 .691 1.222c.376.314.822.397 1.168.432c.34.034.766.034 1.235.034h12.23c.469 0 .894 0 1.235-.034c.345-.035.792-.118 1.167-.432a2 2 0 0 0 .692-1.222c.077-.483-.082-.91-.23-1.224c-.146-.31-.364-.674-.606-1.077l-.024-.04l-.578-.963l-.028-.047a7 7 0 0 1-.815-2.047a5 5 0 0 1-2.045-.04a9 9 0 0 0 1.141 3.11l.032.053l.578.963c.273.456.438.733.536.94l.014.032l-.035.004c-.227.023-.55.024-1.081.024H5.932c-.531 0-.854-.001-1.082-.024l-.034-.004l.014-.032c.098-.207.263-.484.536-.94l.578-.963l.032-.053a9 9 0 0 0 1.207-3.577l.007-.06l.252-2.267a4.586 4.586 0 0 1 5.893-3.882a5 5 0 0 1 1.12-1.724m2.527 1.804a2 2 0 0 0-.937 2.145q.18.338.305.707a2 2 0 0 0 2.203.793l-.007-.064a6.56 6.56 0 0 0-1.564-3.581" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.102 17.665c.171.957.548 1.802 1.072 2.405S11.34 21 12 21s1.302-.327 1.826-.93s.9-1.448 1.072-2.405"></svg:path><svg:circle cx="18" cy="6" r="2.5" fill="currentColor" stroke="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsBellPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellPinDuotoneLineIcon],svg[lets-icons-bell-pin-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 2a6 6 0 0 0-6 6v2a7 7 0 0 1-1.4 4.2l-.214.286l-.015.019a3 3 0 0 0-.138.193a1.5 1.5 0 0 0 1.149 2.297q.09.006.237.005h12.762q.147.001.238-.005a1.5 1.5 0 0 0 1.148-2.297q-.05-.076-.138-.193l-.015-.02l-.214-.285A7 7 0 0 1 18 10v-.683c0-.164 0-.246-.047-.29c-.047-.045-.137-.04-.317-.03a3 3 0 0 1-.272 0c-.18-.01-.27-.015-.317.03c-.047.044-.047.126-.047.29V10a8 8 0 0 0 1.6 4.8l.214.286l.082.109l.02.028l.005.007v.001l.002.002a.5.5 0 0 1-.386.766h-.044l-.136.001H5.507l-.035-.001H5.46a.5.5 0 0 1-.383-.767l.001-.002l.005-.007l.02-.028l.082-.11l.214-.285A8 8 0 0 0 7 10V8a5 5 0 0 1 8.545-3.526c.105.105.157.158.213.162s.118-.043.242-.136q.112-.084.234-.156c.177-.104.265-.156.275-.228s-.052-.137-.177-.267A5.98 5.98 0 0 0 12 2" clip-rule="evenodd"></svg:path><svg:circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M9.585 18.647a2.5 2.5 0 0 0 4.83 0"></svg:path></svg:g>`,
})
export class LetsIconsBellPinDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellPinFillIcon],svg[lets-icons-bell-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.794 3.295a5.586 5.586 0 0 0-7.346 4.674l-.252 2.267l-.006.057a8 8 0 0 1-1.074 3.18l-.03.05l-.577.963c-.525.874-.787 1.311-.73 1.67a1 1 0 0 0 .345.61c.279.234.789.234 1.808.234h12.136c1.02 0 1.53 0 1.808-.233a1 1 0 0 0 .346-.611c.056-.359-.206-.796-.73-1.67l-.579-.964l-.03-.05a8 8 0 0 1-.96-2.473a5 5 0 0 1-4.129-7.704m2.48 1.694a5.57 5.57 0 0 1 1.276 2.96a2 2 0 0 1-1.276-2.96" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 17a3 3 0 0 0 6 0z"></svg:path><svg:circle cx="18" cy="6" r="2.5" fill="currentColor" stroke="currentColor"></svg:circle>`,
})
export class LetsIconsBellPinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellPinLightIcon],svg[lets-icons-bell-pin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.375 3.982a6.086 6.086 0 0 0-8.424 4.933l-.252 2.265l-.006.056a7.5 7.5 0 0 1-1.006 2.98l-.03.049l-.577.963l-.014.024c-.25.417-.458.763-.593 1.049c-.136.289-.24.602-.188.933a1.5 1.5 0 0 0 .518.916c.258.216.58.286.897.318c.315.032.718.032 1.205.032h12.19c.487 0 .89 0 1.205-.032c.317-.032.64-.102.897-.318a1.5 1.5 0 0 0 .518-.916c.053-.332-.052-.644-.188-.933c-.135-.286-.342-.632-.593-1.05l-.014-.023l-.578-.963l-.029-.048a7.5 7.5 0 0 1-1.006-2.98l-.006-.057l-.042-.382q-.471.157-.985.193l.033.3l.007.06a8.5 8.5 0 0 0 1.14 3.377l.03.052l.579.963c.268.446.448.749.56.984c.111.238.11.323.105.35a.5.5 0 0 1-.173.306c-.022.018-.094.064-.355.09c-.26.026-.611.027-1.132.027H5.932c-.52 0-.873 0-1.131-.027c-.262-.026-.334-.072-.356-.09a.5.5 0 0 1-.173-.305c-.004-.028-.006-.113.106-.35c.11-.236.292-.539.56-.985l.577-.963l.031-.052a8.5 8.5 0 0 0 1.14-3.378l.007-.06l.252-2.265A5.086 5.086 0 0 1 13.67 4.78q.3-.447.704-.8m1.814 1.19a2 2 0 0 0-.79.63a5.07 5.07 0 0 1 1.653 3.197c.355-.009.687-.11.972-.28A6.07 6.07 0 0 0 16.19 5.17" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.102 18.406c.171.744.548 1.402 1.072 1.87c.524.47 1.166.724 1.826.724s1.302-.254 1.826-.723c.524-.47.9-1.127 1.072-1.871"></svg:path><svg:circle cx="17" cy="7" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsBellPinLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankIcon],svg[lets-icons-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M14.172 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path d="M14 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H21"></svg:path></svg:g>`,
})
export class LetsIconsBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankAltIcon],svg[lets-icons-blank-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12.172 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17V7c0-1.886 0-2.828.586-3.414S7.114 3 9 3h6c1.886 0 2.828 0 3.414.586S19 5.114 19 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path d="M12 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H19"></svg:path></svg:g>`,
})
export class LetsIconsBlankAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankAltDuotoneIcon],svg[lets-icons-blank-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M5 19a2 2 0 0 0 2 2h4.75a.25.25 0 0 0 .25-.25V16a2 2 0 0 1 2-2h4.75a.25.25 0 0 0 .25-.25V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></svg:path><svg:path fill="currentColor" d="M13 16v4.396c0 .223.27.335.427.177l5.146-5.146a.25.25 0 0 0-.177-.427H14a1 1 0 0 0-1 1"></svg:path>`,
})
export class LetsIconsBlankAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankAltDuotoneLineIcon],svg[lets-icons-blank-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M12 16.333V21h1l6-6v-1h-4.667c-1.1 0-1.65 0-1.991.342c-.342.341-.342.891-.342 1.991"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M12.172 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17V7c0-1.886 0-2.828.586-3.414S7.114 3 9 3h6c1.886 0 2.828 0 3.414.586S19 5.114 19 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M12 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H19"></svg:path></svg:g>`,
})
export class LetsIconsBlankAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankAltFillIcon],svg[lets-icons-blank-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h4v-5.062c0-.654 0-1.241.064-1.717c.07-.52.232-1.052.668-1.489c.437-.436.97-.598 1.489-.668C13.697 13 14.284 13 14.938 13H20V5a3 3 0 0 0-3-3zm12.73 13H15c-.735 0-1.186.002-1.513.046c-.287.039-.334.093-.34.1h-.001c-.007.007-.061.054-.1.341c-.044.327-.046.778-.046 1.513v4.73c.324-.147.622-.352.879-.609l5.242-5.242a3 3 0 0 0 .61-.879" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBlankAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankAltLightIcon],svg[lets-icons-blank-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M12.172 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17V7c0-1.886 0-2.828.586-3.414S7.114 3 9 3h6c1.886 0 2.828 0 3.414.586S19 5.114 19 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path d="M12 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H19"></svg:path></svg:g>`,
})
export class LetsIconsBlankAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankDuotoneIcon],svg[lets-icons-blank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M2 19a2 2 0 0 0 2 2h10.75a.25.25 0 0 0 .25-.25V16a2 2 0 0 1 2-2h4.75a.25.25 0 0 0 .25-.25V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></svg:path><svg:path fill="currentColor" d="M16 16v4.396c0 .223.27.335.427.177l5.146-5.146a.25.25 0 0 0-.177-.427H17a1 1 0 0 0-1 1"></svg:path>`,
})
export class LetsIconsBlankDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankDuotoneLineIcon],svg[lets-icons-blank-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M14 16.333V21h1l6-6v-1h-4.667c-1.1 0-1.65 0-1.991.342c-.342.341-.342.891-.342 1.991"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M14.172 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M14 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H21"></svg:path></svg:g>`,
})
export class LetsIconsBlankDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankFillIcon],svg[lets-icons-blank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8v-5.062c0-.654 0-1.241.064-1.717c.07-.52.232-1.052.668-1.489c.437-.436.97-.598 1.489-.668C15.697 13 16.284 13 16.938 13H22V5a3 3 0 0 0-3-3zm16.73 13H17c-.735 0-1.186.002-1.513.046c-.287.039-.334.093-.34.1h-.001c-.007.007-.061.054-.1.341c-.044.327-.046.778-.046 1.513v4.73c.324-.147.622-.352.879-.609l5.242-5.242a3 3 0 0 0 .61-.879" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBlankFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankLightIcon],svg[lets-icons-blank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.172 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path d="M14 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H21"></svg:path></svg:g>`,
})
export class LetsIconsBlankLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBloodIcon],svg[lets-icons-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4l.759-.651a1 1 0 0 0-1.518 0zm0 0l-.76-.65v.001l-.005.004l-.013.016l-.215.261A31 31 0 0 0 8.64 7.048C7.367 9.19 6 12.133 6 15h2c0-2.31 1.133-4.866 2.36-6.93a29 29 0 0 1 2.203-3.181l.196-.238zm6 11c0-2.867-1.367-5.81-2.64-7.952a31 31 0 0 0-2.367-3.416l-.215-.261l-.013-.016l-.004-.004l-.002-.002L12 4l-.759.651l.002.002l.045.054q.051.06.149.182A29 29 0 0 1 13.64 8.07C14.866 10.134 16 12.69 16 15zm-2 0a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6z"></svg:path>`,
})
export class LetsIconsBloodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBloodAddIcon],svg[lets-icons-blood-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7h6m-3-3v6"></svg:path><svg:path fill="currentColor" d="m8 5l.759-.651a1 1 0 0 0-1.518 0zm0 0l-.76-.651v.002l-.005.004a9 9 0 0 0-.228.277A31 31 0 0 0 4.64 8.048C3.367 10.19 2 13.133 2 16h2c0-2.31 1.133-4.866 2.36-6.93a29 29 0 0 1 2.203-3.181l.186-.226l.008-.01l.002-.002zm6 11c0-2.867-1.367-5.81-2.64-7.952a31 31 0 0 0-2.367-3.416l-.228-.277l-.004-.004l-.002-.002L8 5l-.759.651l.002.002l.008.01a8 8 0 0 1 .186.226A29 29 0 0 1 9.64 9.07C10.866 11.134 12 13.69 12 16zm-2 0a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4 4a4 4 0 0 1-4-4H2a6 6 0 0 0 6 6z"></svg:path></svg:g>`,
})
export class LetsIconsBloodAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBloodAddLightIcon],svg[lets-icons-blood-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m9 7.5l.354-.354a.5.5 0 0 0-.708 0zm0 0l-.354-.353h-.001l-.054.056l-.149.156A23.5 23.5 0 0 0 6.34 9.966C5.203 11.605 4 13.838 4 16h1c0-1.839 1.047-3.856 2.161-5.465A22.5 22.5 0 0 1 9.308 7.9l.044-.044l.001-.002zm5 8.5c0-2.161-1.203-4.394-2.339-6.035A23.5 23.5 0 0 0 9.558 7.36l-.203-.211v-.001h-.001L9 7.5l-.354.353l.002.003l.044.044l.137.144a22.5 22.5 0 0 1 2.01 2.49C11.953 12.145 13 14.162 13 16zm-1 0a4 4 0 0 1-4 4v1a5 5 0 0 0 5-5zm-4 4a4 4 0 0 1-4-4H4a5 5 0 0 0 5 5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsBloodAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBloodLightIcon],svg[lets-icons-blood-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.5l.354-.354a.5.5 0 0 0-.708 0zm0 0l-.354-.353h-.001q0 .003-.003.004l-.011.011l-.04.041l-.149.156A23.5 23.5 0 0 0 9.34 7.966C8.203 9.605 7 11.838 7 14h1c0-1.839 1.047-3.856 2.161-5.465A22.5 22.5 0 0 1 12.308 5.9l.035-.036l.008-.008l.002-.002zm5 8.5c0-2.161-1.203-4.394-2.339-6.035a23.5 23.5 0 0 0-2.103-2.606l-.149-.156l-.04-.041l-.01-.011l-.004-.003v-.001h-.001L12 5.5l-.354.353l.002.003l.009.008a5 5 0 0 1 .172.18a22.5 22.5 0 0 1 2.01 2.49C14.953 10.145 16 12.162 16 14zm-1 0a4 4 0 0 1-4 4v1a5 5 0 0 0 5-5zm-4 4a4 4 0 0 1-4-4H7a5 5 0 0 0 5 5z"></svg:path>`,
})
export class LetsIconsBloodLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBloodMinusIcon],svg[lets-icons-blood-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7h6"></svg:path><svg:path fill="currentColor" d="m8 5l.759-.651a1 1 0 0 0-1.518 0zm0 0l-.76-.651v.002l-.005.004a9 9 0 0 0-.228.277A31 31 0 0 0 4.64 8.048C3.367 10.19 2 13.133 2 16h2c0-2.31 1.133-4.866 2.36-6.93a29 29 0 0 1 2.203-3.181l.186-.226l.008-.01l.002-.002zm6 11c0-2.867-1.367-5.81-2.64-7.952a31 31 0 0 0-2.367-3.416l-.228-.277l-.004-.004l-.002-.002L8 5l-.759.651l.002.002l.008.01a8 8 0 0 1 .186.226A29 29 0 0 1 9.64 9.07C10.866 11.134 12 13.69 12 16zm-2 0a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4 4a4 4 0 0 1-4-4H2a6 6 0 0 0 6 6z"></svg:path></svg:g>`,
})
export class LetsIconsBloodMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBloodMinusLightIcon],svg[lets-icons-blood-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m9 7.5l.354-.354a.5.5 0 0 0-.708 0zm0 0l-.354-.353h-.001l-.054.056l-.149.156A23.5 23.5 0 0 0 6.34 9.966C5.203 11.605 4 13.838 4 16h1c0-1.839 1.047-3.856 2.161-5.465A22.5 22.5 0 0 1 9.308 7.9l.044-.044l.001-.002zm5 8.5c0-2.161-1.203-4.394-2.339-6.035A23.5 23.5 0 0 0 9.558 7.36l-.203-.211v-.001h-.001L9 7.5l-.354.353l.002.003l.044.044l.137.144a22.5 22.5 0 0 1 2.01 2.49C11.953 12.145 13 14.162 13 16zm-1 0a4 4 0 0 1-4 4v1a5 5 0 0 0 5-5zm-4 4a4 4 0 0 1-4-4H4a5 5 0 0 0 5 5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5h6"></svg:path></svg:g>`,
})
export class LetsIconsBloodMinusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookIcon],svg[lets-icons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke-linecap="round" d="M9 8h6"></svg:path></svg:g>`,
})
export class LetsIconsBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckIcon],svg[lets-icons-book-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke-linecap="round" d="m9 10l1.293 1.293a1 1 0 0 0 1.414 0L15 8"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckDuotoneIcon],svg[lets-icons-book-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="18" x="4" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path fill="currentColor" d="M4 19a2 2 0 0 1 2-2h11c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14v3c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6a2 2 0 0 1-2-2"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="m9.5 10.5l1.894 1.894a.15.15 0 0 0 .212 0L15.5 8.5"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckDuotoneLineIcon],svg[lets-icons-book-check-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16 16H8.415c-1.184 0-1.776 0-2.299.202q-.412.16-.76.43c-.442.344-.747.852-1.356 1.868V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h8c1.886 0 2.828 0 3.414.586S20 5.114 20 7v5c0 1.886 0 2.828-.586 3.414S17.886 16 16 16"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m9 10l1.293 1.293a1 1 0 0 0 1.414 0L15 8"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckFillIcon],svg[lets-icons-book-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 16H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5A2.5 2.5 0 0 1 6.5 16m9.914-6.586a2 2 0 1 0-2.828-2.828L11 9.172l-.586-.586a2 2 0 1 0-2.828 2.828l1.293 1.293a3 3 0 0 0 4.242 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.414 15.414l-.707-.707zm0-11.828l-.707.707zm-3 3l.707-.707zm0 2.828l-.707-.707zm-2.828-2.828l-.707-.707zM11 9.172l-.707.707l.707.707l.707-.707zm-.586-.586l-.707.707zm-2.828 0l.707.707zm0 2.828l.707-.707zm1.293 1.293l-.707.707zm4.242 0L12.414 12zM16 15H6.5v2H16zm2.707-.293c-.076.076-.212.17-.646.229c-.462.062-1.09.064-2.061.064v2c.915 0 1.701.002 2.328-.082c.655-.088 1.284-.287 1.793-.797zM19 12c0 .971-.002 1.599-.064 2.061c-.059.434-.153.57-.229.646l1.414 1.414c.51-.51.709-1.138.797-1.793C21.002 13.7 21 12.915 21 12zm0-5v5h2V7zm-.293-2.707c.076.076.17.212.229.646C18.998 5.4 19 6.029 19 7h2c0-.915.002-1.701-.082-2.328c-.088-.655-.287-1.284-.797-1.793zM16 4c.971 0 1.599.002 2.061.064c.434.059.57.153.646.229l1.414-1.414c-.51-.51-1.138-.709-1.793-.797C17.7 1.998 16.915 2 16 2zM8 4h8V2H8zm-2.707.293c.076-.076.212-.17.646-.229C6.4 4.002 7.029 4 8 4V2c-.915 0-1.701-.002-2.328.082c-.655.088-1.284.287-1.793.797zM5 7c0-.971.002-1.599.064-2.061c.059-.434.153-.57.229-.646L3.879 2.879c-.51.51-.709 1.138-.797 1.793C2.998 5.3 3 6.085 3 7zm0 11.5V7H3v11.5zM6.5 15A3.5 3.5 0 0 0 3 18.5h2A1.5 1.5 0 0 1 6.5 17zm9.207-7.707a1 1 0 0 1 0 1.414l1.414 1.414a3 3 0 0 0 0-4.242zm-1.414 0a1 1 0 0 1 1.414 0l1.414-1.414a3 3 0 0 0-4.242 0zm-2.586 2.586l2.586-2.586l-1.414-1.414l-2.586 2.585zm-2-.586l.586.586l1.414-1.415l-.586-.585zm-1.414 0a1 1 0 0 1 1.414 0l1.414-1.414a3 3 0 0 0-4.242 0zm0 1.414a1 1 0 0 1 0-1.414L6.879 7.879a3 3 0 0 0 0 4.242zM9.586 12l-1.293-1.293l-1.414 1.414l1.293 1.293zm2.828 0a2 2 0 0 1-2.828 0l-1.414 1.414a4 4 0 0 0 5.656 0zm3.293-3.293L12.414 12l1.414 1.414l3.293-3.293zM11 20H6.5v2H11zm-8-1.5A3.5 3.5 0 0 0 6.5 22v-2A1.5 1.5 0 0 1 5 18.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 21H10"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckLightIcon],svg[lets-icons-book-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke-linecap="round" d="m9 10l1.293 1.293a1 1 0 0 0 1.414 0L15 8"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookDuotoneIcon],svg[lets-icons-book-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="18" x="4" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 6.5h7m-7 3h4m-4 3h6"></svg:path><svg:path fill="currentColor" d="M4 19a2 2 0 0 1 2-2h11c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14v3c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class LetsIconsBookDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookDuotoneLineIcon],svg[lets-icons-book-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16 16H8.415c-1.184 0-1.776 0-2.299.202q-.412.16-.76.43c-.442.344-.747.852-1.356 1.868V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h8c1.886 0 2.828 0 3.414.586S20 5.114 20 7v5c0 1.886 0 2.828-.586 3.414S17.886 16 16 16"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M9 8h6"></svg:path></svg:g>`,
})
export class LetsIconsBookDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookFillIcon],svg[lets-icons-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 16H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5A2.5 2.5 0 0 1 6.5 16M9 6a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.414 15.414l-.707-.707zm0-11.828l-.707.707zM9 6V5zm0 4V9zm6 0v1zm0-4V5zm1 9H6.5v2H16zm2.707-.293c-.076.076-.212.17-.646.229c-.462.062-1.09.064-2.061.064v2c.915 0 1.701.002 2.328-.082c.655-.088 1.284-.287 1.793-.797zM19 12c0 .971-.002 1.599-.064 2.061c-.059.434-.153.57-.229.646l1.414 1.414c.51-.51.709-1.138.797-1.793C21.002 13.7 21 12.915 21 12zm0-5v5h2V7zm-.293-2.707c.076.076.17.212.229.646C18.998 5.4 19 6.029 19 7h2c0-.915.002-1.701-.082-2.328c-.088-.655-.287-1.284-.797-1.793zM16 4c.971 0 1.599.002 2.061.064c.434.059.57.153.646.229l1.414-1.414c-.51-.51-1.138-.709-1.793-.797C17.7 1.998 16.915 2 16 2zM8 4h8V2H8zm-2.707.293c.076-.076.212-.17.646-.229C6.4 4.002 7.029 4 8 4V2c-.915 0-1.701-.002-2.328.082c-.655.088-1.284.287-1.793.797zM5 7c0-.971.002-1.599.064-2.061c.059-.434.153-.57.229-.646L3.879 2.879c-.51.51-.709 1.138-.797 1.793C2.998 5.3 3 6.085 3 7zm0 11.5V7H3v11.5zM6.5 15A3.5 3.5 0 0 0 3 18.5h2A1.5 1.5 0 0 1 6.5 17zM8 8a1 1 0 0 1 1-1V5a3 3 0 0 0-3 3zm1 1a1 1 0 0 1-1-1H6a3 3 0 0 0 3 3zm6 0H9v2h6zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM9 7h6V5H9zm2 13H6.5v2H11zm-8-1.5A3.5 3.5 0 0 0 6.5 22v-2A1.5 1.5 0 0 1 5 18.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 21H10"></svg:path></svg:g>`,
})
export class LetsIconsBookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookLightIcon],svg[lets-icons-book-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke-linecap="round" d="M9 8h6"></svg:path></svg:g>`,
})
export class LetsIconsBookLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenIcon],svg[lets-icons-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17Zm14 0h-4a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C13.757 4 15.172 4 18 4h1c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17Z"></svg:path>`,
})
export class LetsIconsBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltIcon],svg[lets-icons-book-open-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6v13m9-13v13M3 6v13m18 0s-1-2-4.5-2s-4.5 2-4.5 2m0 0s-1-2-4.5-2S3 19 3 19M21 6s-1-2-4.5-2S12 6 12 6m0 0s-1-2-4.5-2S3 6 3 6"></svg:path>`,
})
export class LetsIconsBookOpenAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltDuotoneIcon],svg[lets-icons-book-open-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="letsIconsBookOpenAltDuotone0" width="9" height="15" x="3" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#222" d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2"></svg:path></svg:mask><svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2"></svg:path><svg:g mask="url(#letsIconsBookOpenAltDuotone0)"><svg:path fill="currentColor" d="M5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.246a.25.25 0 0 1-.427.177l-.896-.896a.25.25 0 0 0-.354 0l-.896.896A.25.25 0 0 1 5 8.396z"></svg:path></svg:g><svg:path fill="currentColor" d="M13 19V6s.889-2 4-2s4 2 4 2v13s-.889-2-4-2s-4 2-4 2"></svg:path></svg:g>`,
})
export class LetsIconsBookOpenAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltDuotoneLightIcon],svg[lets-icons-book-open-alt-duotone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M21 19V6s-1-2-4.5-2S12 7 12 7s-1-3-4.5-3S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2s1-2 4.5-2s4.5 2 4.5 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 6.5v12m8.5-12v12m-17-12v12"></svg:path></svg:g>`,
})
export class LetsIconsBookOpenAltDuotoneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltFillIcon],svg[lets-icons-book-open-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19V6s-1-2-4.5-2S12 7 12 7s-1-3-4.5-3S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2s1-2 4.5-2s4.5 2 4.5 2"></svg:path><svg:path fill="currentColor" d="M21 6h1a1 1 0 0 0-.106-.447zm0 13l-.894.447A1 1 0 0 0 22 19zM3 6l-.894-.447A1 1 0 0 0 2 6zm0 13H2a1 1 0 0 0 1.894.447zm9 0l-.894.447a1 1 0 0 0 1.788 0zm0-12l-.949.316a1 1 0 0 0 1.898 0zm8-1v13h2V6zM2 6v13h2V6zm19 13l.894-.448v-.002l-.002-.003l-.003-.006l-.028-.051l-.063-.106a4 4 0 0 0-.225-.317a4.7 4.7 0 0 0-.922-.876C19.787 16.563 18.455 16 16.5 16v2c1.545 0 2.463.437 2.974.809c.262.19.432.374.531.5c.05.062.081.11.097.135l.013.021l-.002-.004l-.003-.005l-.002-.004l-.001-.002v-.002zm-4.5-3c-1.955 0-3.287.563-4.15 1.191a4.7 4.7 0 0 0-.923.876a3.5 3.5 0 0 0-.308.46l-.008.014q0 .005-.003.006l-.001.003v.002L12 19l.894.448v.002l-.002.002l-.002.004l-.003.005l-.002.004l.013-.02q.023-.041.097-.137c.099-.125.269-.309.53-.5c.512-.371 1.43-.808 2.975-.808zM12 19l.894-.448v-.002l-.002-.003l-.003-.006l-.028-.051l-.063-.106a4 4 0 0 0-.225-.317a4.7 4.7 0 0 0-.922-.876C10.787 16.563 9.455 16 7.5 16v2c1.545 0 2.463.437 2.974.809c.262.19.432.374.531.5c.05.062.081.11.097.135l.013.021l-.002-.004l-.003-.005l-.002-.004l-.001-.002v-.002zm-4.5-3c-1.955 0-3.287.563-4.15 1.191a4.7 4.7 0 0 0-.923.876a3.5 3.5 0 0 0-.308.46l-.013.024c0 .001 0 .002.894.449l.894.448v.002l-.002.002l-.002.004l-.005.009l.013-.02q.023-.041.097-.137c.099-.125.269-.309.53-.5C5.038 18.438 5.956 18 7.5 18zM21 6l.894-.448V5.55l-.002-.002l-.003-.007l-.028-.051l-.063-.106a4 4 0 0 0-.225-.317a4.7 4.7 0 0 0-.922-.876C19.787 3.563 18.455 3 16.5 3v2c1.545 0 2.463.437 2.974.809a2.7 2.7 0 0 1 .531.5c.05.062.081.11.097.135l.013.021l-.002-.004l-.003-.005l-.002-.004l-.001-.002v-.002zm-4.5-3c-2.077 0-3.456.905-4.3 1.824a6 6 0 0 0-1.073 1.662a4 4 0 0 0-.072.188l-.002.005l-.001.003c0 .001 0 .002.948.318c.949.316.948.317.948.317v.003l-.001.002v.002l.002-.009l.024-.06a4 4 0 0 1 .702-1.08C14.206 5.596 15.077 5 16.5 5zM12 7c.949-.316.948-.317.948-.317v-.004l-.003-.005l-.02-.057l-.052-.13A6 6 0 0 0 11.8 4.824C10.958 3.904 9.578 3 7.5 3v2c1.423 0 2.293.595 2.825 1.176a4 4 0 0 1 .702 1.08l.024.06l.003.008v-.002l-.002-.002v-.002c0-.001 0-.002.948-.318M7.5 3c-1.955 0-3.287.563-4.15 1.191a4.7 4.7 0 0 0-.923.876a3.5 3.5 0 0 0-.308.46l-.01.02l-.002.003v.002L3 6l.894.448v.002l-.002.002l-.005.01l-.002.003l.013-.02q.023-.042.097-.137c.099-.125.269-.309.53-.5C5.038 5.438 5.956 5 7.5 5z"></svg:path>`,
})
export class LetsIconsBookOpenAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltLightIcon],svg[lets-icons-book-open-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M12 6.5v12m8.5-12v12m-17-12v12m17 0s-1-2-4.5-2s-4 2-4 2m-8.5 0s1-2 4.5-2s4 2 4 2m8.5-12s-1-2-4.5-2s-4 2-4 2m-8.5 0s1-2 4.5-2s4 2 4 2"></svg:path>`,
})
export class LetsIconsBookOpenAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenDuotoneIcon],svg[lets-icons-book-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17"></svg:path><svg:path fill="currentColor" d="M19 17h-3a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C14.757 4 16.172 4 19 4c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17M5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.246a.25.25 0 0 1-.427.177l-.896-.896a.25.25 0 0 0-.354 0l-.896.896A.25.25 0 0 1 5 8.396z"></svg:path>`,
})
export class LetsIconsBookOpenDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenDuotoneLineIcon],svg[lets-icons-book-open-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-width="1.2" d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17Zm14 0h-4a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C13.757 4 15.172 4 18 4h1c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17Z"></svg:path>`,
})
export class LetsIconsBookOpenDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenFillIcon],svg[lets-icons-book-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h5a2 2 0 0 1 2 2v-9c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17m14 0h-5a2 2 0 0 0-2 2v-9c0-2.828 0-4.243.879-5.121C13.757 4 15.172 4 18 4h1c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17"></svg:path>`,
})
export class LetsIconsBookOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenLightIcon],svg[lets-icons-book-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293S3 5.057 3 6v9c0 .943 0 1.414.293 1.707S4.057 17 5 17Zm14 0h-4a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C13.757 4 15.172 4 18 4h1c.943 0 1.414 0 1.707.293S21 5.057 21 6v9c0 .943 0 1.414-.293 1.707S19.943 17 19 17Z"></svg:path>`,
})
export class LetsIconsBookOpenLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookmarkIcon],svg[lets-icons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3h4c2.828 0 4.243 0 5.121.879C20 4.757 20 6.172 20 9v6.828c0 2.683 0 4.024-.844 4.435c-.845.41-1.9-.419-4.01-2.076l-.675-.531c-1.186-.932-1.78-1.398-2.471-1.398s-1.285.466-2.471 1.398l-.676.53c-2.11 1.658-3.164 2.487-4.009 2.077C4 19.853 4 18.51 4 15.828z"></svg:path>`,
})
export class LetsIconsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookmarkDuotoneIcon],svg[lets-icons-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" d="M4 9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3h4c2.828 0 4.243 0 5.121.879C20 4.757 20 6.172 20 9v6.828c0 2.683 0 4.024-.844 4.435c-.845.41-1.9-.419-4.01-2.076l-.675-.531c-1.186-.932-1.78-1.398-2.471-1.398s-1.285.466-2.471 1.398l-.676.53c-2.11 1.658-3.164 2.487-4.009 2.077C4 19.853 4 18.51 4 15.828z"></svg:path>`,
})
export class LetsIconsBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookmarkFillIcon],svg[lets-icons-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M4 9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3h4c2.828 0 4.243 0 5.121.879C20 4.757 20 6.172 20 9v6.828c0 2.683 0 4.024-.844 4.435c-.845.41-1.9-.419-4.01-2.076l-.675-.531c-1.186-.932-1.78-1.398-2.471-1.398s-1.285.466-2.471 1.398l-.676.53c-2.11 1.658-3.164 2.487-4.009 2.077C4 19.853 4 18.51 4 15.828z"></svg:path>`,
})
export class LetsIconsBookmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookmarkLightIcon],svg[lets-icons-bookmark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3h4c2.828 0 4.243 0 5.121.879C20 4.757 20 6.172 20 9v6.828c0 2.683 0 4.024-.844 4.435c-.845.41-1.9-.419-4.01-2.076l-.675-.531c-1.186-.932-1.78-1.398-2.471-1.398s-1.285.466-2.471 1.398l-.676.53c-2.11 1.658-3.164 2.487-4.009 2.077C4 19.853 4 18.51 4 15.828z"></svg:path>`,
})
export class LetsIconsBookmarkLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxIcon],svg[lets-icons-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M4 9.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 10h16"></svg:path><svg:path fill="currentColor" d="M14.833 9H9.166c-.235 0-.353 0-.426.073s-.074.191-.074.427v4.167c0 .765 0 1.147.1 1.352a1 1 0 0 0 1.231.51c.215-.075.486-.345 1.027-.886c.25-.25.375-.376.508-.446a1 1 0 0 1 .935 0c.133.07.259.196.51.446c.54.54.81.811 1.026.887a1 1 0 0 0 1.231-.51c.1-.206.1-.588.1-1.353V9.5c0-.236 0-.354-.074-.427C15.187 9 15.069 9 14.833 9"></svg:path></svg:g>`,
})
export class LetsIconsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltIcon],svg[lets-icons-box-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M4 7.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 3 8.657 3h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586S4 18.886 4 17z"></svg:path><svg:path stroke-linecap="round" d="M4 7h16M9 11a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltDuotoneIcon],svg[lets-icons-box-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBoxAltDuotone0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" d="M4 7.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 3 8.657 3h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586S4 18.886 4 17z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 7h16"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M9 11a3 3 0 0 0 6 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBoxAltDuotone0)"></svg:path>`,
})
export class LetsIconsBoxAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltFillIcon],svg[lets-icons-box-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M4 7.414c0-.204 0-.306.038-.398s.11-.164.255-.309l1.535-1.535c.578-.578.868-.868 1.235-1.02S7.84 4 8.657 4h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l1.535 1.535c.145.145.217.217.255.309s.038.194.038.398V8H4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 8H3v9c0 1.886 0 2.828.586 3.414S5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586S21 18.886 21 17zm-11 3a1 1 0 1 0-2 0a4 4 0 1 0 8 0a1 1 0 1 0-2 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltFillDuotoneIcon],svg[lets-icons-box-alt-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 9.3c0-.141 0-.212.044-.256S4.159 9 4.3 9h15.4c.141 0 .212 0 .256.044S20 9.159 20 9.3V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16zM4.724 8c-.308 0-.462 0-.5-.093c-.039-.092.07-.201.288-.42l1.316-1.315c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l1.316 1.316c.218.218.327.327.288.42c-.038.092-.192.092-.5.092z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 12.5a2.5 2.5 0 0 0 5 0"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltLightIcon],svg[lets-icons-box-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M9 12a3 3 0 0 0 6 0"></svg:path><svg:path d="M4.5 8.711c0-.601 0-.902.086-1.185s.252-.534.586-1.034l.14-.21c.582-.873.872-1.309 1.315-1.545c.442-.237.966-.237 2.014-.237h6.718c1.048 0 1.572 0 2.014.237c.442.236.733.672 1.314 1.544l.141.211c.334.5.5.75.586 1.034c.086.283.086.584.086 1.185V15.5c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-7c-1.886 0-2.828 0-3.414-.586S4.5 17.386 4.5 15.5z"></svg:path><svg:path stroke-linecap="round" d="M4.5 9.5h15"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxDuotoneIcon],svg[lets-icons-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBoxDuotone0"><svg:g fill="none"><svg:path stroke="#fff" stroke-width="1.2" d="M4 9.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16z"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M14.833 10H9.166c-.235 0-.353 0-.426.073s-.074.191-.074.427v3.167c0 .765 0 1.147.1 1.352a1 1 0 0 0 1.231.51c.215-.075.486-.345 1.027-.886c.25-.25.375-.376.508-.446a1 1 0 0 1 .935 0c.133.07.259.196.51.446c.54.54.81.811 1.026.887a1 1 0 0 0 1.231-.51c.1-.206.1-.588.1-1.353V10.5c0-.236 0-.354-.074-.427c-.073-.073-.191-.073-.427-.073Z"></svg:path><svg:path stroke="#fff" stroke-width="1.2" d="M4 10h16v6c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBoxDuotone0)"></svg:path>`,
})
export class LetsIconsBoxDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxFillIcon],svg[lets-icons-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V10H4zM15.333 12H20v4c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16v-4h4.666v3.667c0 .765 0 1.147.1 1.352a1 1 0 0 0 1.231.51c.215-.075.486-.345 1.027-.886c.25-.25.375-.376.508-.446a1 1 0 0 1 .935 0c.133.07.259.195.51.446c.54.54.81.811 1.026.887a1 1 0 0 0 1.231-.51c.1-.206.1-.588.1-1.353z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxFillDuotoneIcon],svg[lets-icons-box-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M4 9.3c0-.141 0-.212.044-.256S4.159 9 4.3 9h15.4c.141 0 .212 0 .256.044S20 9.159 20 9.3V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16zM4.724 8c-.308 0-.462 0-.5-.093c-.039-.092.07-.201.288-.42l1.316-1.315c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l1.316 1.316c.218.218.327.327.288.42c-.038.092-.192.092-.5.092z"></svg:path><svg:path fill="currentColor" d="M9 9.15A.15.15 0 0 1 9.15 9h5.7a.15.15 0 0 1 .15.15v4.916a.5.5 0 0 1-.777.416l-1.668-1.112a1 1 0 0 0-1.11 0l-1.668 1.112A.5.5 0 0 1 9 14.066z"></svg:path>`,
})
export class LetsIconsBoxFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxLightIcon],svg[lets-icons-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M4.5 8.711c0-.601 0-.902.086-1.185s.252-.534.586-1.034l.14-.21c.582-.873.872-1.309 1.315-1.545c.442-.237.966-.237 2.014-.237h6.718c1.048 0 1.572 0 2.014.237c.442.236.733.672 1.314 1.544l.141.211c.334.5.5.75.586 1.034c.086.283.086.584.086 1.185V15.5c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-7c-1.886 0-2.828 0-3.414-.586S4.5 17.386 4.5 15.5z"></svg:path><svg:path stroke-linecap="round" d="M4.5 9.5h15"></svg:path><svg:path d="M9.5 9.65a.15.15 0 0 1 .15-.15h4.7a.15.15 0 0 1 .15.15v4.055a.45.45 0 0 1-.681.386l-1.69-1.014a.25.25 0 0 0-.258 0l-1.69 1.014a.45.45 0 0 1-.681-.386z"></svg:path></svg:g>`,
})
export class LetsIconsBoxLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenIcon],svg[lets-icons-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M6 11.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S9.84 7 10.657 7h2.686c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V16c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16z"></svg:path><svg:path stroke-linecap="round" d="M9 7L6.139 5.092a.25.25 0 0 0-.278 0L3.254 6.831a.25.25 0 0 0-.038.385l2.577 2.577a.7.7 0 0 1 .207.5v0c0 .39.317.707.707.707h10.586c.39 0 .707-.317.707-.707v0a.7.7 0 0 1 .207-.5l2.577-2.577a.25.25 0 0 0-.038-.385L18.14 5.092a.25.25 0 0 0-.278 0L15 7"></svg:path></svg:g>`,
})
export class LetsIconsBoxOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenDuotoneIcon],svg[lets-icons-box-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBoxOpenDuotone0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M9 7L6.139 5.092a.25.25 0 0 0-.278 0L3.254 6.831a.25.25 0 0 0-.038.385l2.577 2.577a.7.7 0 0 1 .207.5v0c0 .39.317.707.707.707h10.586c.39 0 .707-.317.707-.707v0a.7.7 0 0 1 .207-.5l2.577-2.577a.25.25 0 0 0-.038-.385L18.14 5.092a.25.25 0 0 0-.278 0L15 7"></svg:path><svg:path stroke="#fff" d="m6 10l1.828-1.828c.578-.578.868-.868 1.235-1.02S9.84 7 10.657 7h2.686c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02L18 10v6c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBoxOpenDuotone0)"></svg:path>`,
})
export class LetsIconsBoxOpenDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenFillIcon],svg[lets-icons-box-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5 11h14v4c0 1.886 0 2.828-.586 3.414S16.886 19 15 19H9c-1.886 0-2.828 0-3.414-.586S5 16.886 5 15zM2.815 7.815L5 10l4-4l-2.411-1.608a1 1 0 0 0-1.155.033L2.922 6.308a1 1 0 0 0-.107 1.507m18.37 0L19 10l-4-4l2.411-1.608a1 1 0 0 1 1.155.033l2.512 1.883a1 1 0 0 1 .107 1.507"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10v1H6v-1l3-3h6z"></svg:path></svg:g>`,
})
export class LetsIconsBoxOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenFillDuotoneIcon],svg[lets-icons-box-open-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12h14v4c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M2.815 7.815L5 10v1h14v-1l2.185-2.185a1 1 0 0 0-.107-1.507l-2.512-1.883a1 1 0 0 0-1.155-.033L15 6H9L6.589 4.392a1 1 0 0 0-1.155.032L2.922 6.309a1 1 0 0 0-.107 1.507M8.6 7.2h6.8l1.95 2.6H6.65z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBoxOpenFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenLightIcon],svg[lets-icons-box-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6 11.657c0-.818 0-1.226.152-1.594c.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02S9.84 7 10.657 7h2.686c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235c.152.368.152.776.152 1.594V16c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16z"></svg:path><svg:path stroke-linecap="round" d="M9 7L6.139 5.092a.25.25 0 0 0-.278 0L3.254 6.831a.25.25 0 0 0-.038.385l2.577 2.577a.7.7 0 0 1 .207.5v0c0 .39.317.707.707.707h10.586c.39 0 .707-.317.707-.707v0a.7.7 0 0 1 .207-.5l2.577-2.577a.25.25 0 0 0-.038-.385L18.14 5.092a.25.25 0 0 0-.278 0L15 7"></svg:path></svg:g>`,
})
export class LetsIconsBoxOpenLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxRefreshAltRightIcon],svg[lets-icons-box-refresh-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m12 12l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M13 8h4m-1 8H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4h1"></svg:path></svg:g>`,
})
export class LetsIconsBoxRefreshAltRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxRefreshAltRightLightIcon],svg[lets-icons-box-refresh-alt-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m12 12l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M13 8h4m-1 8H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4h1"></svg:path></svg:g>`,
})
export class LetsIconsBoxRefreshAltRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxRefreshRightIcon],svg[lets-icons-box-refresh-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m10 12l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h7"></svg:path></svg:g>`,
})
export class LetsIconsBoxRefreshRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxRefreshRightLightIcon],svg[lets-icons-box-refresh-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m10 12l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h7"></svg:path></svg:g>`,
})
export class LetsIconsBoxRefreshRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxesIcon],svg[lets-icons-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="8" height="8" x="5" y="4" rx="1.8"></svg:rect><svg:path d="M4 13.8A1.8 1.8 0 0 1 5.8 12h4.4a1.8 1.8 0 0 1 1.8 1.8V20H5.8A1.8 1.8 0 0 1 4 18.2zm8 0a1.8 1.8 0 0 1 1.8-1.8h4.4a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8H12z"></svg:path><svg:path stroke-linecap="round" d="M16 12v3m-8-3v3M9 4v3"></svg:path></svg:g>`,
})
export class LetsIconsBoxesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxesLightIcon],svg[lets-icons-boxes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.5 6.3a1.8 1.8 0 0 1 1.8-1.8h6.4a1.8 1.8 0 0 1 1.8 1.8v5.2H8.3a1.8 1.8 0 0 1-1.8-1.8zm-2 7a1.8 1.8 0 0 1 1.8-1.8h6.2v8H6.3a1.8 1.8 0 0 1-1.8-1.8zm8-1.8h6.2a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8h-6.2z"></svg:path><svg:path stroke-linecap="round" d="M16.5 11.5v3m-8-3v3m3-10v3"></svg:path></svg:g>`,
})
export class LetsIconsBoxesLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBrokenHeartIcon],svg[lets-icons-broken-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.979 6.145c-1.322-.588-2.983-.286-3.977.995l-.31.399a4.203 4.203 0 0 0 .443 5.64L12 19.628l6.865-6.449a4.203 4.203 0 0 0 .443-5.64l-.31-.399c-1.179-1.52-3.294-1.662-4.673-.576l-1.237-1.57c2.196-1.73 5.59-1.53 7.49.92l.31.399a6.203 6.203 0 0 1-.654 8.324l-6.953 6.531l-.02.019c-.101.095-.224.21-.341.301a1.5 1.5 0 0 1-.631.298c-.19.037-.387.037-.578 0a1.5 1.5 0 0 1-.63-.298c-.118-.09-.24-.206-.342-.301l-.02-.019l-6.953-6.531a6.203 6.203 0 0 1-.654-8.324l.79.613l-.79-.613l.31-.399c1.955-2.52 5.487-2.661 7.676-.768l.723.626l-.592.75l-1.036 1.313c-.347.44-.54.687-.65.875l-.004.008l.007.005c.17.137.438.3.918.589l1.252.751l.048.029c.38.228.748.449 1.025.67c.311.25.632.597.749 1.117s-.025.97-.2 1.329c-.154.32-.392.676-.638 1.045l-.031.047l-.837 1.255l-1.664-1.11l.837-1.255c.289-.433.447-.675.535-.856l.003-.007l-.006-.004c-.157-.127-.403-.277-.85-.545l-1.253-.751l-.05-.03c-.41-.247-.803-.482-1.096-.719c-.326-.264-.664-.635-.766-1.19c-.102-.557.083-1.023.294-1.386c.19-.325.474-.684.77-1.06l.037-.046zm.51 2.675l-.001.002z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBrokenHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBrokenHeartDuotoneIcon],svg[lets-icons-broken-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".25" d="M10.476 5.894L8.5 9l4 3.5l-1 2.5l3.5-3l-3-3.5L14 6l-.57-.712a4.916 4.916 0 0 1 6.123.368a5.527 5.527 0 0 1 .093 8.122l-7.092 6.699c-.198.187-.297.28-.41.314a.5.5 0 0 1-.288 0c-.113-.034-.212-.127-.41-.314L4.08 13.52a5.18 5.18 0 0 1 .088-7.612l.307-.278c1.781-1.606 4.46-1.403 6.001.264"></svg:path><svg:path d="M9.736 5.992c-1.58-1.047-3.839-.822-5.13.842l-.309.398a4.703 4.703 0 0 0 .496 6.312l6.953 6.53c.127.12.196.184.25.226l.004.003l.005-.003a4 4 0 0 0 .25-.225l6.952-6.531a4.703 4.703 0 0 0 .496-6.312l-.31-.398c-1.36-1.753-3.794-1.91-5.377-.662l-.619-.786c1.992-1.569 5.066-1.383 6.786.835l.31.398a5.703 5.703 0 0 1-.601 7.654l-6.953 6.53l-.014.014c-.108.1-.213.2-.31.275a1 1 0 0 1-.422.203a1 1 0 0 1-.386 0a1 1 0 0 1-.422-.203a5 5 0 0 1-.31-.275l-.014-.013l-6.953-6.531a5.703 5.703 0 0 1-.6-7.654l.308-.398c1.77-2.281 4.97-2.413 6.955-.697l.361.313l-.296.375L9.8 7.525c-.337.428-.556.707-.688.933c-.125.214-.125.304-.115.36s.042.138.235.294c.203.164.507.348.974.628l1.253.752l.029.017c.397.239.738.443.988.644c.267.214.492.471.574.836c.082.364-.011.692-.161 1c-.14.288-.36.62-.618 1.005l-.019.028l-.836 1.255l-.832-.555l.837-1.254c.28-.422.462-.696.568-.915c.1-.206.097-.292.085-.345c-.012-.054-.045-.132-.224-.275c-.19-.153-.471-.323-.906-.584l-1.252-.751l-.03-.018c-.429-.257-.795-.477-1.06-.69c-.281-.229-.517-.504-.588-.893c-.072-.389.051-.73.234-1.043c.172-.294.436-.629.745-1.02l.022-.028z"></svg:path></svg:g>`,
})
export class LetsIconsBrokenHeartDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBrokenHeartFillIcon],svg[lets-icons-broken-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.056 4.231L8 8l4.5 4.5l-1 2.5l3.5-3l-4-4l1.351-1.687a.6.6 0 0 0 .174-.23c1.34-3.19 5.607-3.78 7.763-1.075l.388.488a5.54 5.54 0 0 1-.718 7.65l-7.39 6.365c-.23.197-.344.296-.477.32a.5.5 0 0 1-.182 0c-.133-.024-.248-.123-.477-.32l-7.39-6.364a5.54 5.54 0 0 1-.718-7.651l.388-.488c1.633-2.05 4.478-2.207 6.344-.777" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBrokenHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBrokenHeartLightIcon],svg[lets-icons-broken-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.736 5.992c-1.58-1.047-3.839-.822-5.13.842l-.309.398a4.703 4.703 0 0 0 .496 6.312l6.953 6.53c.127.12.196.184.25.226l.004.003l.005-.003a4 4 0 0 0 .25-.225l6.952-6.531a4.703 4.703 0 0 0 .496-6.312l-.31-.398c-1.36-1.753-3.794-1.91-5.377-.662l-.619-.786c1.992-1.569 5.066-1.383 6.786.835l.31.398a5.703 5.703 0 0 1-.601 7.654l-6.953 6.53l-.014.014c-.108.1-.213.2-.31.275a1 1 0 0 1-.422.203a1 1 0 0 1-.386 0a1 1 0 0 1-.422-.203a5 5 0 0 1-.31-.275l-.014-.013l-6.953-6.531a5.703 5.703 0 0 1-.6-7.654l.308-.398c1.77-2.281 4.97-2.413 6.955-.697l.361.313l-.296.375L9.8 7.525c-.337.428-.556.707-.688.933c-.125.214-.125.304-.115.36s.042.138.235.294c.203.164.507.348.974.628l1.253.752l.029.017c.397.239.738.443.988.644c.267.214.492.471.574.836c.082.364-.011.692-.161 1c-.14.288-.36.62-.618 1.005l-.019.028l-.836 1.255l-.832-.555l.837-1.254c.28-.422.462-.696.568-.915c.1-.206.097-.292.085-.345c-.012-.054-.045-.132-.224-.275c-.19-.153-.471-.323-.906-.584l-1.252-.751l-.03-.018c-.429-.257-.795-.477-1.06-.69c-.281-.229-.517-.504-.588-.893c-.072-.389.051-.73.234-1.043c.172-.294.436-.629.745-1.02l.022-.028z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBrokenHeartLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBubbleIcon],svg[lets-icons-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="17" cy="8" r="4"></svg:circle><svg:circle cx="12" cy="17" r="3"></svg:circle><svg:circle cx="6.5" cy="9.5" r="2.5"></svg:circle></svg:g>`,
})
export class LetsIconsBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBubbleLightIcon],svg[lets-icons-bubble-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="17" cy="8" r="4"></svg:circle><svg:circle cx="12" cy="17" r="3"></svg:circle><svg:circle cx="6.5" cy="9.5" r="2.5"></svg:circle></svg:g>`,
})
export class LetsIconsBubbleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBugIcon],svg[lets-icons-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 14.333c0-1.246 0-1.869.268-2.333A2 2 0 0 1 8 11.268C8.464 11 9.087 11 10.333 11h3.334c1.246 0 1.869 0 2.333.268a2 2 0 0 1 .732.732c.268.464.268 1.087.268 2.333V16c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 21 12.93 21 12 21s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 17.394 7 16.93 7 16zM9 9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 6 11.068 6 12 6s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 7.602 15 8.068 15 9v2H9zm3 2v4m3-12l-2 3M9 3l2 3M7 16H2m20 0h-5m3-7v1a3 3 0 0 1-3 3m3 9a3 3 0 0 0-3-3M4 9v1a3 3 0 0 0 3 3m-3 9a3 3 0 0 1 3-3"></svg:path>`,
})
export class LetsIconsBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBugDuotoneIcon],svg[lets-icons-bug-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M7 14.333c0-1.246 0-1.869.268-2.333A2 2 0 0 1 8 11.268C8.464 11 9.087 11 10.333 11h3.334c1.246 0 1.869 0 2.333.268a2 2 0 0 1 .732.732c.268.464.268 1.087.268 2.333V16c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 21 12.93 21 12 21s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 17.394 7 16.93 7 16zM9 9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 6 11.068 6 12 6s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 7.602 15 8.068 15 9v2H9z"></svg:path><svg:path d="M12 11v4m3-12l-2 3M9 3l2 3M7 16H2m20 0h-5m3-7v1a3 3 0 0 1-3 3m3 9a3 3 0 0 0-3-3M4 9v1a3 3 0 0 0 3 3m-3 9a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class LetsIconsBugDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBugFillIcon],svg[lets-icons-bug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path fill="currentColor" d="M7 14.333c0-1.246 0-1.869.268-2.333A2 2 0 0 1 8 11.268C8.464 11 9.087 11 10.333 11h3.334c1.246 0 1.869 0 2.333.268a2 2 0 0 1 .732.732c.268.464.268 1.087.268 2.333V16c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 21 12.93 21 12 21s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 17.394 7 16.93 7 16zM9 9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 6 11.068 6 12 6s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 7.602 15 8.068 15 9v2H9z"></svg:path><svg:path d="M12 11v4m3-12l-2 3M9 3l2 3M7 16H2m20 0h-5m3-7v1a3 3 0 0 1-3 3m3 9a3 3 0 0 0-3-3M4 9v1a3 3 0 0 0 3 3m-3 9a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class LetsIconsBugFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsBugLightIcon],svg[lets-icons-bug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7 14.333c0-1.246 0-1.869.268-2.333A2 2 0 0 1 8 11.268C8.464 11 9.087 11 10.333 11h3.334c1.246 0 1.869 0 2.333.268a2 2 0 0 1 .732.732c.268.464.268 1.087.268 2.333V16c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 21 12.93 21 12 21s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 17.394 7 16.93 7 16zM9 9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 6 11.068 6 12 6s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 7.602 15 8.068 15 9v2H9zm3 2v4m3-12l-2 3M9 3l2 3M7 16H2m20 0h-5m3-7v1a3 3 0 0 1-3 3m3 9a3 3 0 0 0-3-3M4 9v1a3 3 0 0 0 3 3m-3 9a3 3 0 0 1 3-3"></svg:path>`,
})
export class LetsIconsBugLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCakeIcon],svg[lets-icons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16l.276 1.658c.266 1.596.4 2.394.959 2.868c.56.474 1.369.474 2.987.474h1.556c1.618 0 2.428 0 2.987-.474s.693-1.272.959-2.868L17 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5C14 3.5 15 3 16 3"></svg:path><svg:circle cx="12" cy="6" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.535a4 4 0 0 0-1.668 1.866a1 1 0 0 1-.893.6a2.5 2.5 0 1 0 1.512 4.535a1 1 0 0 1 1.076-.056c.581.33 1.253.52 1.973.52s1.392-.19 1.973-.52a1 1 0 0 1 1.076.056a2.5 2.5 0 1 0 1.512-4.535a1 1 0 0 1-.893-.6A4 4 0 0 0 14 7.535V5.341a6.02 6.02 0 0 1 3.23 2.718a4.501 4.501 0 1 1-2.81 8.433A6 6 0 0 1 12 17a6 6 0 0 1-2.42-.509A4.5 4.5 0 1 1 6.77 8.06A6.02 6.02 0 0 1 10 5.341z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarIcon],svg[lets-icons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="18" height="15" x="3" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M4 11h16M9 16h6M8 3v4m8-4v4"></svg:path></svg:g>`,
})
export class LetsIconsCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarAddIcon],svg[lets-icons-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="18" height="15" x="3" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M4 11h16m-10 5h4m-2-2v4M8 3v4m8-4v4"></svg:path></svg:g>`,
})
export class LetsIconsCalendarAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarAddDuotoneIcon],svg[lets-icons-calendar-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M7 4.432c0-.155 0-.233-.05-.278c-.052-.045-.128-.035-.28-.015c-1.12.143-1.902.436-2.498 1.033C3 6.343 3 8.229 3 12s0 5.657 1.172 6.828S7.229 20 11 20h2c3.771 0 5.657 0 6.828-1.172S21 15.771 21 12s0-5.657-1.172-6.828c-.596-.597-1.378-.89-2.499-1.033c-.151-.02-.227-.03-.278.015S17 4.277 17 4.432V6.5a1.5 1.5 0 0 1-3 0V4.3c0-.141 0-.212-.044-.255S13.842 4 13.701 4H10.3c-.142 0-.212 0-.256.045C10 4.088 10 4.159 10 4.3v2.2a1.5 1.5 0 1 1-3 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 2.5v4m7-4v4"></svg:path><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="1.2" d="M12 16v-6m3 3H9"></svg:path></svg:g>`,
})
export class LetsIconsCalendarAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarAddDuotoneLineIcon],svg[lets-icons-calendar-add-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m5.592 19.282l.227-.445zm-.874-.874l.445-.227zm13.69.874l-.227-.445zm.874-.874l-.445-.227zm-.874-12.69l-.227.445zm.874.874l-.445.227zm-13.69-.874l.227.445zm-.874.874l.445.227zM9 3.5a.5.5 0 0 0-1 0zm-1 4a.5.5 0 0 0 1 0zm8-4a.5.5 0 0 0-1 0zm-1 4a.5.5 0 0 0 1 0zM7.7 6h8.6V5H7.7zm8.6 13H7.7v1h8.6zM19 8.7v.8h1v-.8zm0 .8v6.8h1V9.5zM5 16.3V9.5H4v6.8zm0-6.8v-.8H4v.8zM19.5 9h-15v1h15zM7.7 19c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137l-.454.89c.296.151.616.214.98.244c.36.03.803.029 1.355.029zM4 16.3c0 .552 0 .996.029 1.354c.03.365.093.685.243.981l.891-.454c-.067-.132-.113-.306-.137-.608C5 17.265 5 16.868 5 16.3zm1.819 2.537a1.5 1.5 0 0 1-.656-.656l-.89.454a2.5 2.5 0 0 0 1.092 1.092zM16.3 20c.552 0 .996 0 1.354-.029c.365-.03.685-.093.981-.244l-.454-.89c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026zm2.7-3.7c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608l.89.454c.151-.296.214-.616.244-.98c.03-.36.029-.803.029-1.355zm-.365 3.427a2.5 2.5 0 0 0 1.092-1.092l-.89-.454a1.5 1.5 0 0 1-.656.656zM16.3 6c.568 0 .965 0 1.273.026c.302.024.476.07.608.137l.454-.89c-.296-.151-.616-.214-.98-.244c-.36-.03-.803-.029-1.355-.029zM20 8.7c0-.552 0-.996-.029-1.354c-.03-.365-.093-.685-.244-.981l-.89.454c.067.132.113.306.137.608C19 7.736 19 8.132 19 8.7zm-1.819-2.537a1.5 1.5 0 0 1 .656.656l.89-.454a2.5 2.5 0 0 0-1.092-1.093zM7.7 5c-.552 0-.996 0-1.354.029c-.365.03-.685.093-.981.243l.454.891c.132-.067.306-.113.608-.137C6.736 6 7.132 6 7.7 6zM5 8.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608l-.89-.454c-.151.296-.214.616-.244.98C3.999 7.706 4 8.149 4 8.7zm.365-3.428a2.5 2.5 0 0 0-1.093 1.093l.891.454a1.5 1.5 0 0 1 .656-.656zM8 3.5v4h1v-4zm7 0v4h1v-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 17v-5m2.5 2.5h-5"></svg:path></svg:g>`,
})
export class LetsIconsCalendarAddDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarAddFillIcon],svg[lets-icons-calendar-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 18c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13zm6-1a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsCalendarAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarAddLightIcon],svg[lets-icons-calendar-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M19.5 9.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.98 5.5 17.42 5.5 16.3 5.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 7.02 4.5 7.58 4.5 8.7v.8m15 0v6.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4.5 17.98 4.5 17.42 4.5 16.3V9.5m15 0h-15"></svg:path><svg:path stroke-linecap="round" d="M8.5 3.5v4m7-4v4M12 17v-5m2.5 2.5h-5"></svg:path></svg:g>`,
})
export class LetsIconsCalendarAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarDuotoneIcon],svg[lets-icons-calendar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M7 4.432c0-.155 0-.233-.05-.278c-.052-.045-.128-.035-.28-.015c-1.12.143-1.902.436-2.498 1.033C3 6.343 3 8.229 3 12s0 5.657 1.172 6.828S7.229 20 11 20h2c3.771 0 5.657 0 6.828-1.172S21 15.771 21 12s0-5.657-1.172-6.828c-.596-.597-1.378-.89-2.499-1.033c-.151-.02-.227-.03-.278.015S17 4.277 17 4.432V6.5a1.5 1.5 0 0 1-3 0V4.3c0-.141 0-.212-.044-.255S13.842 4 13.701 4H10.3c-.142 0-.212 0-.256.045C10 4.088 10 4.159 10 4.3v2.2a1.5 1.5 0 1 1-3 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 2.5v4m7-4v4"></svg:path><svg:circle cx="7.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="13.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="13.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="13.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="13.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsCalendarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarDuotoneLineIcon],svg[lets-icons-calendar-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCalendarDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v1H3z"></svg:path><svg:rect width="18" height="15" x="3" y="6" stroke="#fff" rx="2"></svg:rect><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M9 16h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8 3v4m8-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCalendarDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCalendarDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarFillIcon],svg[lets-icons-calendar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.586 21.414C2 20.828 2 19.886 2 18v-5c0-.471 0-.707.146-.854C2.293 12 2.53 12 3 12h18c.471 0 .707 0 .854.146c.146.147.146.383.146.854v5c0 1.886 0 2.828-.586 3.414S19.886 22 18 22H6c-1.886 0-2.828 0-3.414-.586M8 16a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsCalendarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarLightIcon],svg[lets-icons-calendar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="18" height="15" x="3" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M3 11h18M9 16h6M8 3v4m8-4v4"></svg:path></svg:g>`,
})
export class LetsIconsCalendarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCaloriesIcon],svg[lets-icons-calories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M14.5 10c0-.791 1.053-1.001 1.332-.26C16.508 11.53 17 13.134 17 14a5 5 0 0 1-10 0c0-.93.568-2.711 1.322-4.663c.975-2.528 1.463-3.792 2.066-3.86c.192-.022.403.017.575.107c.537.28.537 1.659.537 4.416a1.5 1.5 0 0 0 3 0Z"></svg:path><svg:path d="m11 19l-.263-.657a3.4 3.4 0 0 1 .503-3.393a.973.973 0 0 1 1.52 0c.766.958.958 2.254.503 3.393L13 19"></svg:path></svg:g>`,
})
export class LetsIconsCaloriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCaloriesLightIcon],svg[lets-icons-calories-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 10c0-.791 1.053-1.001 1.332-.26C16.508 11.53 17 13.134 17 14a5 5 0 0 1-10 0c0-.93.568-2.711 1.322-4.663c.975-2.528 1.463-3.792 2.066-3.86c.192-.022.403.017.575.107c.537.28.537 1.659.537 4.416a1.5 1.5 0 0 0 3 0Z"></svg:path><svg:path d="m11 19l-.263-.657a3.4 3.4 0 0 1 .503-3.393a.973.973 0 0 1 1.52 0c.766.958.958 2.254.503 3.393L13 19"></svg:path></svg:g>`,
})
export class LetsIconsCaloriesLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCameraIcon],svg[lets-icons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 9.854C3 8.83 3.83 8 4.854 8c.702 0 1.344-.397 1.658-1.025l.821-1.642c.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C9.122 4 9.245 4 9.491 4h5.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425l.82 1.642A1.85 1.85 0 0 0 19.147 8C20.17 8 21 8.83 21 9.854v5.003c0 2.005 0 3.007-.46 3.74a3 3 0 0 1-.944.943c-.732.46-1.734.46-3.739.46H8.143c-2.005 0-3.007 0-3.74-.46a3 3 0 0 1-.943-.944C3 17.864 3 16.862 3 14.857z"></svg:path><svg:circle cx="12" cy="13" r="3"></svg:circle></svg:g>`,
})
export class LetsIconsCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCameraDuotoneIcon],svg[lets-icons-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 12c0-1.886 0-2.828.586-3.414S6.114 8 8 8h.784c.104 0 .156 0 .196-.028c.039-.029.055-.078.088-.177l.476-1.427c.22-.66.33-.99.592-1.18C10.398 5 10.746 5 11.442 5h3.117c.695 0 1.043 0 1.305.189s.372.519.592 1.179l.495 1.486a.4.4 0 0 0 .032.079q.031.046.086.062c.02.005.041.005.085.005c.788 0 1.181 0 1.498.11a2 2 0 0 1 1.239 1.238c.109.317.109.71.109 1.498V14c0 1.886 0 2.828-.586 3.414S17.886 18 16 18H8c-1.886 0-2.828 0-3.414-.586S4 15.886 4 14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6.5h-3"></svg:path><svg:circle cx="13" cy="13" r="3" fill="currentColor"></svg:circle><svg:rect width="3" height="1" x="4" y="6" fill="currentColor" fill-opacity=".25" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsCameraDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCameraDuotoneLineIcon],svg[lets-icons-camera-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M4.854 8C3.83 8 3 8.83 3 9.854v5.003c0 2.005 0 3.007.46 3.74a3 3 0 0 0 .944.943c.732.46 1.734.46 3.739.46h7.714c2.005 0 3.007 0 3.74-.46a3 3 0 0 0 .943-.944c.46-.732.46-1.734.46-3.739V9.854C21 8.83 20.17 8 19.146 8a1.85 1.85 0 0 1-1.658-1.025l-.821-1.642c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C14.878 4 14.755 4 14.509 4H9.491c-.246 0-.37 0-.483.013a2 2 0 0 0-1.447.895c-.063.095-.118.205-.228.425l-.82 1.642A1.85 1.85 0 0 1 4.853 8M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M3 9.854C3 8.83 3.83 8 4.854 8c.702 0 1.344-.397 1.658-1.025l.821-1.642c.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C9.122 4 9.245 4 9.491 4h5.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425l.82 1.642A1.85 1.85 0 0 0 19.147 8C20.17 8 21 8.83 21 9.854v5.003c0 2.005 0 3.007-.46 3.74a3 3 0 0 1-.944.943c-.732.46-1.734.46-3.739.46H8.143c-2.005 0-3.007 0-3.74-.46a3 3 0 0 1-.943-.944C3 17.864 3 16.862 3 14.857z"></svg:path><svg:circle cx="12" cy="13" r="3.4" stroke="currentColor" stroke-width="1.2"></svg:circle></svg:g>`,
})
export class LetsIconsCameraDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCameraFillIcon],svg[lets-icons-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.854 8C3.83 8 3 8.83 3 9.854v5.003c0 2.005 0 3.007.46 3.74a3 3 0 0 0 .944.943c.732.46 1.734.46 3.739.46h7.714c2.005 0 3.007 0 3.74-.46a3 3 0 0 0 .943-.944c.46-.732.46-1.734.46-3.739V9.854C21 8.83 20.17 8 19.146 8a1.85 1.85 0 0 1-1.658-1.025l-.821-1.642c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C14.878 4 14.755 4 14.509 4H9.491c-.246 0-.37 0-.483.013a2 2 0 0 0-1.447.895c-.063.095-.118.205-.228.425l-.82 1.642A1.85 1.85 0 0 1 4.853 8M14 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCameraLightIcon],svg[lets-icons-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3 9.854C3 8.83 3.83 8 4.854 8c.702 0 1.344-.397 1.658-1.025l.821-1.642c.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C9.122 4 9.245 4 9.491 4h5.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425l.82 1.642A1.85 1.85 0 0 0 19.147 8C20.17 8 21 8.83 21 9.854v5.003c0 2.005 0 3.007-.46 3.74a3 3 0 0 1-.944.943c-.732.46-1.734.46-3.739.46H8.143c-2.005 0-3.007 0-3.74-.46a3 3 0 0 1-.943-.944C3 17.864 3 16.862 3 14.857z"></svg:path><svg:circle cx="12" cy="13" r="3.5"></svg:circle></svg:g>`,
})
export class LetsIconsCameraLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCancelIcon],svg[lets-icons-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M18 18L6 6"></svg:path></svg:g>`,
})
export class LetsIconsCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCancelDuotoneIcon],svg[lets-icons-cancel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18 18L6 6"></svg:path></svg:g>`,
})
export class LetsIconsCancelDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCancelDuotoneLineIcon],svg[lets-icons-cancel-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCancelDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="9" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M16 16L8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCancelDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCancelDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCancelFillIcon],svg[lets-icons-cancel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-4.828 2.757a5 5 0 0 0-6.929-6.929zM7.828 9.243l6.93 6.929a5 5 0 0 1-6.929-6.929M12 5a7 7 0 1 0 0 14a7 7 0 0 0 0-14" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCancelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCancelLightIcon],svg[lets-icons-cancel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M18 18L6 6"></svg:path></svg:g>`,
})
export class LetsIconsCancelLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCandlestickIcon],svg[lets-icons-candlestick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M8 3v3m0 8v3"></svg:path><svg:rect width="4" height="8" x="6" y="6" rx=".8"></svg:rect><svg:path stroke-linecap="round" d="M16 7v5m0 5v3"></svg:path><svg:rect width="4" height="5" x="14" y="12" rx=".8"></svg:rect></svg:g>`,
})
export class LetsIconsCandlestickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCandlestickDuotoneLineIcon],svg[lets-icons-candlestick-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCandlestickDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M7.5 3.5v3m0 8v4"></svg:path><svg:path fill="#fff" d="M5 7.8A1.8 1.8 0 0 1 6.8 6h1.4A1.8 1.8 0 0 1 10 7.8v5.4A1.8 1.8 0 0 1 8.2 15H6.8A1.8 1.8 0 0 1 5 13.2z"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M16.5 6.5v5m0 5v4"></svg:path><svg:path fill="#fff" d="M14 12.8a1.8 1.8 0 0 1 1.8-1.8h1.4a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCandlestickDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCandlestickDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCandlestickLightIcon],svg[lets-icons-candlestick-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M7.5 3.5v3m0 8v4"></svg:path><svg:path d="M6.8 6.5a1.3 1.3 0 0 0-1.3 1.3v5.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3V7.8a1.3 1.3 0 0 0-1.3-1.3z"></svg:path><svg:path stroke-linecap="round" d="M16.5 6.5v5m0 5v4"></svg:path><svg:path d="M15.8 11.5a1.3 1.3 0 0 0-1.3 1.3v2.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3v-2.4a1.3 1.3 0 0 0-1.3-1.3z"></svg:path></svg:g>`,
})
export class LetsIconsCandlestickLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCarbsIcon],svg[lets-icons-carbs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m12 4l-1.148 1.913C9.95 7.417 9.5 8.169 9.5 9c0 .83.45 1.583 1.353 3.087l.72 1.198c.19.32.287.48.428.48s.237-.16.429-.48l.719-1.198C14.05 10.583 14.5 9.831 14.5 9c0-.83-.45-1.583-1.353-3.087zm0 0V2m8.16 10.598l-2.23-.037c-1.754-.03-2.63-.045-3.35.37c-.72.416-1.146 1.183-1.997 2.717l-.678 1.221c-.181.326-.271.489-.2.611c.07.123.256.126.628.132l1.398.024c1.753.03 2.63.044 3.35-.372c.72-.415 1.145-1.182 1.997-2.715zm0 0l1.732-1"></svg:path><svg:path d="m3.84 12.598l2.23-.037c1.754-.03 2.63-.045 3.35.37c.72.416 1.146 1.183 1.997 2.717l.678 1.221c.181.326.271.489.2.611c-.07.123-.256.126-.628.132l-1.398.024c-1.753.03-2.63.044-3.35-.372c-.72-.415-1.145-1.182-1.996-2.715zm0 0l-1.732-1M12 15v7.5"></svg:path></svg:g>`,
})
export class LetsIconsCarbsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCarbsLightIcon],svg[lets-icons-carbs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m12 4l-1.148 1.913C9.95 7.417 9.5 8.169 9.5 9c0 .83.45 1.583 1.353 3.087l.72 1.198c.19.32.287.48.428.48s.237-.16.429-.48l.719-1.198C14.05 10.583 14.5 9.831 14.5 9c0-.83-.45-1.583-1.353-3.087zm0 0V2m8.16 10.598l-2.23-.037c-1.754-.03-2.63-.045-3.35.37c-.72.416-1.146 1.183-1.997 2.717l-.678 1.221c-.181.326-.271.489-.2.611c.07.123.256.126.628.132l1.398.024c1.753.03 2.63.044 3.35-.372c.72-.415 1.145-1.182 1.997-2.715zm0 0l1.732-1"></svg:path><svg:path d="m3.84 12.598l2.23-.037c1.754-.03 2.63-.045 3.35.37c.72.416 1.146 1.183 1.997 2.717l.678 1.221c.181.326.271.489.2.611c-.07.123-.256.126-.628.132l-1.398.024c-1.753.03-2.63.044-3.35-.372c-.72-.415-1.145-1.182-1.996-2.715zm0 0l-1.732-1M12 15v7.5"></svg:path></svg:g>`,
})
export class LetsIconsCarbsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartIcon],svg[lets-icons-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10v6m4-4v4m4-8v8"></svg:path><svg:rect width="18" height="16" x="3" y="4" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartAltIcon],svg[lets-icons-chart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 9l-3.044 4.566a1 1 0 0 1-1.727-.107l-.458-.918a1 1 0 0 0-1.727-.107L7 17"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsChartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartAltDuotoneIcon],svg[lets-icons-chart-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="18" x="3" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="m18 8l-3.895 4.87a.15.15 0 0 1-.223.012l-2.766-2.766a.15.15 0 0 0-.221.01L6 16"></svg:path></svg:g>`,
})
export class LetsIconsChartAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartAltDuotoneLineIcon],svg[lets-icons-chart-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="18" x="3" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="m17 9l-3.044 4.566a1 1 0 0 1-1.727-.107l-.458-.918a1 1 0 0 0-1.727-.107L7 17"></svg:path></svg:g>`,
})
export class LetsIconsChartAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartAltFillIcon],svg[lets-icons-chart-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 2.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879m14.953 6.676a1 1 0 0 0-1.664-1.11l-3.044 4.567l-.459-.918c-.687-1.373-2.601-1.493-3.453-.215l-3.044 4.566a1 1 0 0 0 1.664 1.11l3.044-4.566l.459.917c.687 1.374 2.601 1.493 3.453.215z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChartAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartAltLightIcon],svg[lets-icons-chart-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 9l-3.044 4.566a1 1 0 0 1-1.727-.107l-.458-.918a1 1 0 0 0-1.727-.107L7 17"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsChartAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartDuotoneIcon],svg[lets-icons-chart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="16" x="3" y="4" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8 10v6m4-4v4m4-8v8"></svg:path></svg:g>`,
})
export class LetsIconsChartDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartDuotoneLineIcon],svg[lets-icons-chart-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="16" x="3" y="4" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8 10v6m4-4v4m4-8v8"></svg:path></svg:g>`,
})
export class LetsIconsChartDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartFillIcon],svg[lets-icons-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 3.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879M16 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-7 3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartLightIcon],svg[lets-icons-chart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10v6m4-4v4m4-8v8"></svg:path><svg:rect width="18" height="16" x="3" y="4" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsChartLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartPinIcon],svg[lets-icons-chart-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.5 10.5l-3 3l-2-2l-3 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14 5H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20h8.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 18.48 19 17.92 19 16.8V10"></svg:path><svg:circle cx="19" cy="5" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChartPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartPinLightIcon],svg[lets-icons-chart-pin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="m15.5 10.5l-3 3l-2-2l-3 3"></svg:path><svg:path d="M14.5 4.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 6.02 4.5 6.58 4.5 7.7v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h8.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.5"></svg:path><svg:circle cx="18.5" cy="5.5" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsChartPinLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatIcon],svg[lets-icons-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M4 12a8 8 0 1 1 16 0v5.09c0 .848 0 1.27-.126 1.609a2 2 0 0 1-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 0 1-8-8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 11h6m-3 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltIcon],svg[lets-icons-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 10h6m-6 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt2Icon],svg[lets-icons-chat-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104M9 9h6m-6 4h3"></svg:path>`,
})
export class LetsIconsChatAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt2DuotoneIcon],svg[lets-icons-chat-alt-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5h7m-7 3h5"></svg:path></svg:g>`,
})
export class LetsIconsChatAlt2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt2DuotoneLineIcon],svg[lets-icons-chat-alt-2-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104"></svg:path><svg:path d="M9 9h6m-6 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatAlt2DuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt2FillIcon],svg[lets-icons-chat-alt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 11c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C17.213 4 15.81 4 13 4h-2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C4 6.787 4 8.19 4 11s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.881.589 2.064.663 4.222.673V18l1.106 2.211a1 1 0 0 0 1.788 0L14 18v-.001c2.158-.01 3.34-.084 4.222-.673a4 4 0 0 0 1.104-1.104C20 15.213 20 13.81 20 11M9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChatAlt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt2LightIcon],svg[lets-icons-chat-alt-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104M9 9h6m-6 4h3"></svg:path>`,
})
export class LetsIconsChatAlt2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt3Icon],svg[lets-icons-chat-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.326 5.778l-.832.555zm0 10.444l-.832-.555zm-1.104 1.104l-.555-.832zM14 17.999l-.004-1a1 1 0 0 0-.996 1zM14 18l.894.447A1 1 0 0 0 15 18zm-4 0H9a1 1 0 0 0 .106.447zm0-.001h1a1 1 0 0 0-.996-1zm-4.222-.673l.555-.832zm-1.104-1.104l.832-.555zm0-10.444l.832.555zm1.104-1.104l.555.832zm12.444 0l-.555.832zM21 11c0-1.384.001-2.497-.09-3.387c-.092-.908-.288-1.695-.753-2.39l-1.663 1.11c.21.313.35.733.427 1.482c.078.766.079 1.76.079 3.185zm-.843 5.778c.465-.696.661-1.483.754-2.39C21 13.496 21 12.383 21 11h-2c0 1.425-.001 2.419-.08 3.185c-.075.75-.217 1.169-.426 1.482zm-1.38 1.38a5 5 0 0 0 1.38-1.38l-1.663-1.111a3 3 0 0 1-.827.827zm-4.773.84c1.075-.004 1.972-.024 2.723-.128c.766-.106 1.443-.306 2.05-.713l-1.11-1.663c-.274.183-.63.314-1.214.395c-.601.083-1.374.105-2.457.11zM15 18v-.001h-2V18zm-1.211 2.658l1.105-2.21l-1.788-.895L12 19.763zm-3.578 0c.737 1.474 2.84 1.474 3.578 0L12 19.764zm-1.105-2.21l1.105 2.21L12 19.764l-1.106-2.211zM9 17.997V18h2v-.001zm-3.778.16c.608.406 1.285.606 2.051.712c.75.104 1.649.124 2.723.129l.008-2c-1.083-.005-1.856-.027-2.457-.11c-.585-.08-.94-.212-1.214-.395zm-1.38-1.38a5 5 0 0 0 1.38 1.38l1.111-1.664a3 3 0 0 1-.827-.827zM3 11c0 1.384-.001 2.497.09 3.387c.092.908.288 1.695.753 2.39l1.663-1.11c-.21-.313-.35-.733-.427-1.482C5.001 13.419 5 12.425 5 11zm.843-5.778c-.465.696-.661 1.483-.754 2.39C3 8.504 3 9.617 3 11h2c0-1.425.001-2.419.08-3.185c.075-.75.217-1.169.426-1.482zm1.38-1.38a5 5 0 0 0-1.38 1.38l1.663 1.111a3 3 0 0 1 .827-.827zM11 3c-1.384 0-2.497-.001-3.387.09c-.908.092-1.695.288-2.39.753l1.11 1.663c.313-.21.733-.35 1.482-.427C8.581 5.001 9.575 5 11 5zm2 0h-2v2h2zm5.778.843c-.696-.465-1.483-.661-2.39-.754C15.496 3 14.383 3 13 3v2c1.425 0 2.419.001 3.185.08c.75.075 1.169.217 1.482.426zm1.38 1.38a5 5 0 0 0-1.38-1.38l-1.111 1.663a3 3 0 0 1 .827.827z"></svg:path><svg:circle cx="16" cy="11" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:circle cx="12" cy="11" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:circle cx="8" cy="11" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round"></svg:circle>`,
})
export class LetsIconsChatAlt3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt3DuotoneIcon],svg[lets-icons-chat-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104" clip-rule="evenodd"></svg:path><svg:circle cx="16" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="11" r="1" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChatAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt3DuotoneLineIcon],svg[lets-icons-chat-alt-3-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.326 5.778l-.499.333zm0 10.444l-.499-.333zm-1.104 1.104l-.333-.499zM14 17.999l-.003-.6a.6.6 0 0 0-.597.6zM14 18l.537.268A.6.6 0 0 0 14.6 18zm-4 0h-.6a.6.6 0 0 0 .063.268zm0-.001h.6a.6.6 0 0 0-.597-.6zm-4.222-.673l.333-.499zm-1.104-1.104l.499-.333zm0-10.444l.499.333zm1.104-1.104l.333.499zm12.444 0l-.333.499zM20.6 11c0-1.392 0-2.481-.087-3.347c-.09-.876-.274-1.59-.688-2.209l-.998.667c.26.39.412.883.492 1.664c.08.79.081 1.808.081 3.225zm-.775 5.556c.414-.62.599-1.333.688-2.21c.088-.865.087-1.954.087-3.346h-1.2c0 1.417 0 2.435-.081 3.225c-.08.781-.232 1.274-.492 1.664zm-1.27 1.269a4.6 4.6 0 0 0 1.27-1.27l-.998-.666a3.4 3.4 0 0 1-.938.938zm-4.552.774c1.076-.005 1.948-.026 2.669-.125c.73-.101 1.343-.288 1.884-.65l-.667-.997c-.34.227-.76.372-1.381.458c-.631.087-1.429.109-2.51.114zM14.6 18v-.001h-1.2V18zm-1.169 2.48l1.106-2.212l-1.074-.536l-1.105 2.21zm-2.862 0c.59 1.179 2.272 1.179 2.862 0l-1.073-.537a.4.4 0 0 1-.716 0zm-1.106-2.212l1.106 2.212l1.073-.537l-1.105-2.211zm-.063-.27V18h1.2v-.001zm-3.956-.173c.541.361 1.154.548 1.884.649c.72.1 1.593.12 2.67.125l.005-1.2c-1.082-.005-1.88-.027-2.51-.114c-.622-.086-1.042-.23-1.382-.458zm-1.269-1.27a4.6 4.6 0 0 0 1.27 1.27l.666-.998a3.4 3.4 0 0 1-.938-.938zM3.4 11c0 1.392 0 2.481.087 3.347c.09.876.274 1.59.688 2.209l.998-.667c-.26-.39-.412-.883-.492-1.664c-.08-.79-.081-1.808-.081-3.225zm.775-5.556c-.414.62-.599 1.333-.688 2.21C3.4 8.518 3.4 9.607 3.4 11h1.2c0-1.417 0-2.434.081-3.225c.08-.781.232-1.275.492-1.664zm1.27-1.269a4.6 4.6 0 0 0-1.27 1.27l.998.666a3.4 3.4 0 0 1 .938-.938zM11 3.4c-1.392 0-2.481 0-3.347.087c-.876.09-1.59.274-2.209.688l.667.998c.39-.26.883-.412 1.664-.492c.79-.08 1.808-.081 3.225-.081zm2 0h-2v1.2h2zm5.556.775c-.62-.414-1.333-.599-2.21-.688C15.482 3.4 14.393 3.4 13 3.4v1.2c1.417 0 2.435 0 3.225.081c.781.08 1.274.232 1.664.492zm1.269 1.27a4.6 4.6 0 0 0-1.27-1.27l-.666.998a3.4 3.4 0 0 1 .938.938z"></svg:path><svg:circle cx="16" cy="11" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".2"></svg:circle><svg:circle cx="12" cy="11" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".2"></svg:circle><svg:circle cx="8" cy="11" r="1" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".2"></svg:circle>`,
})
export class LetsIconsChatAlt3DuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt3FillIcon],svg[lets-icons-chat-alt-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 11c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C17.213 4 15.81 4 13 4h-2c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C4 6.787 4 8.19 4 11s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.881.589 2.064.663 4.222.673V18l1.106 2.211a1 1 0 0 0 1.788 0L14 18v-.001c2.158-.01 3.34-.084 4.222-.673a4 4 0 0 0 1.104-1.104C20 15.213 20 13.81 20 11M8 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChatAlt3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt3LightIcon],svg[lets-icons-chat-alt-3-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.326 5.778l-.416.278zm0 10.444l-.416-.278zm-1.104 1.104l-.277-.416zM14 17.999l-.002-.5a.5.5 0 0 0-.498.5zM14 18l.447.224A.5.5 0 0 0 14.5 18zm-4 0h-.5a.5.5 0 0 0 .053.224zm0-.001h.5a.5.5 0 0 0-.498-.5zm-4.222-.673l.278-.416zm-1.104-1.104l.416-.278zm0-10.444l.416.278zm1.104-1.104l.278.416zm12.444 0l-.277.416zM20.5 11c0-1.394 0-2.477-.087-3.337c-.088-.868-.27-1.563-.671-2.163l-.832.556c.273.408.428.92.508 1.708c.081.798.082 1.821.082 3.236zm-.758 5.5c.4-.6.583-1.295.671-2.163c.088-.86.087-1.943.087-3.337h-1c0 1.415 0 2.438-.082 3.236c-.08.788-.235 1.3-.508 1.708zM18.5 17.742a4.5 4.5 0 0 0 1.242-1.242l-.832-.556c-.255.383-.583.71-.965.966zm-4.498.757c1.077-.005 1.943-.026 2.656-.124c.721-.1 1.318-.283 1.842-.633l-.555-.832c-.358.239-.793.387-1.424.474c-.638.088-1.442.11-2.523.115zM14.5 18v-.001h-1V18zm-1.158 2.435l1.105-2.211l-.894-.448l-1.106 2.212zm-2.684 0c.553 1.105 2.13 1.105 2.684 0l-.895-.447a.5.5 0 0 1-.894 0zm-1.105-2.211l1.105 2.21l.895-.447l-1.106-2.21zm-.053-.225V18h1v-.001zm-4-.257c.524.35 1.12.533 1.842.633c.713.098 1.58.119 2.656.124l.004-1c-1.081-.005-1.885-.026-2.523-.115c-.63-.087-1.066-.235-1.423-.474zM4.258 16.5A4.5 4.5 0 0 0 5.5 17.742l.556-.832a3.5 3.5 0 0 1-.966-.966zM3.5 11c0 1.394 0 2.477.087 3.337c.088.868.27 1.563.671 2.163l.832-.556c-.273-.408-.428-.92-.508-1.709C4.5 13.439 4.5 12.416 4.5 11zm.758-5.5c-.4.6-.583 1.295-.671 2.163C3.499 8.523 3.5 9.606 3.5 11h1c0-1.415 0-2.438.082-3.236c.08-.788.235-1.3.508-1.708zM5.5 4.258A4.5 4.5 0 0 0 4.258 5.5l.832.556a3.5 3.5 0 0 1 .966-.966zM11 3.5c-1.394 0-2.477 0-3.337.087c-.868.088-1.563.27-2.163.671l.556.832c.408-.273.92-.428 1.708-.508C8.562 4.5 9.585 4.5 11 4.5zm2 0h-2v1h2zm5.5.758c-.6-.4-1.295-.583-2.163-.671c-.86-.088-1.943-.087-3.337-.087v1c1.415 0 2.438 0 3.235.082c.79.08 1.3.235 1.71.508zM19.742 5.5A4.5 4.5 0 0 0 18.5 4.258l-.555.832c.382.255.71.583.965.966z"></svg:path><svg:circle cx="16" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="11" r="1" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChatAlt3LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddIcon],svg[lets-icons-chat-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsChatAltAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddDuotoneIcon],svg[lets-icons-chat-alt-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4s-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsChatAltAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddDuotoneLineIcon],svg[lets-icons-chat-alt-add-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsChatAltAddDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddFillIcon],svg[lets-icons-chat-alt-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a9 9 0 0 0 0 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 0 0-9-9m0 13a1 1 0 0 1-1-1v-2H9a1 1 0 1 1 0-2h2V9a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChatAltAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddLightIcon],svg[lets-icons-chat-alt-add-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsChatAltAddLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltDuotoneIcon],svg[lets-icons-chat-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4s-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 10.5h7m-7 3h5"></svg:path></svg:g>`,
})
export class LetsIconsChatAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltDuotoneLineIcon],svg[lets-icons-chat-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 10h6m-6 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltFillIcon],svg[lets-icons-chat-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.543 6.704C21 7.807 21 9.204 21 12s0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 21 14.796 21 12 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15v-3c0-2.796 0-4.193.457-5.296a6 6 0 0 1 3.247-3.247C7.807 3 9.204 3 12 3s4.194 0 5.296.457a6 6 0 0 1 3.247 3.247M8 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChatAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltLightIcon],svg[lets-icons-chat-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20 12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4S6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 10h6m-6 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatDuotoneIcon],svg[lets-icons-chat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 12a8 8 0 1 1 16 0v6.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H12a8 8 0 0 1-8-8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 10.5h7m-7 3h5"></svg:path></svg:g>`,
})
export class LetsIconsChatDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatDuotoneLineIcon],svg[lets-icons-chat-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M4 12a8 8 0 1 1 16 0v5.09c0 .848 0 1.27-.126 1.609a2 2 0 0 1-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 0 1-8-8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 11h6m-3 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatFillIcon],svg[lets-icons-chat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a9 9 0 0 0 0 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 0 0-9-9m-4 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatLightIcon],svg[lets-icons-chat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0v5.09c0 .848 0 1.27-.126 1.609a2 2 0 0 1-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 0 1-8-8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 11h6m-3 4h3"></svg:path></svg:g>`,
})
export class LetsIconsChatLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatPlusIcon],svg[lets-icons-chat-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12 4C8.229 4 6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 10h6m-6 4h3m7-6V2m-3 3h6"></svg:path></svg:g>`,
})
export class LetsIconsChatPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatPlusDuotoneIcon],svg[lets-icons-chat-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4s-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 12.5h7m-7 3h5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M17.5 3.5v6m-3-3h6"></svg:path></svg:g>`,
})
export class LetsIconsChatPlusDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatPlusDuotoneLineIcon],svg[lets-icons-chat-plus-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsChatPlusDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" d="M12 4C8.229 4 6.343 4 5.172 5.172S4 8.229 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c3.771 0 5.657 0 6.828-1.172S20 15.771 20 12"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M9 10h6m-6 4h3"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 8V2m-3 3h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsChatPlusDuotoneLine0)"></svg:path>`,
})
export class LetsIconsChatPlusDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatPlusFillIcon],svg[lets-icons-chat-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8V2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.27 9.804A9 9 0 0 0 12 21h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 18.597 21 17.898 21 16.5V12A9 9 0 0 0 9.804 3.27A2.5 2.5 0 0 1 8 7.5h-.5V8a2.5 2.5 0 0 1-4.23 1.804M9 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm3 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h6"></svg:path></svg:g>`,
})
export class LetsIconsChatPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatPlusLightIcon],svg[lets-icons-chat-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M12.875 5C9.225 5 7.4 5 6.242 6.103a4 4 0 0 0-.139.139C5 7.4 5 9.225 5 12.875V17c0 .943 0 1.414.293 1.707S6.057 19 7 19h4.125c3.65 0 5.475 0 6.633-1.103a4 4 0 0 0 .139-.139C19 16.6 19 14.775 19 11.125"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 10h6m-6 4h3m7-6V2m-3 3h6"></svg:path></svg:g>`,
})
export class LetsIconsChatPlusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchIcon],svg[lets-icons-chat-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.462 20H4a1 1 0 0 1-1-1V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3.385M7 14h3m-3-4h6"></svg:path><svg:circle cx="16.5" cy="15.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="m18.5 17.5l3 3"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchDuotoneIcon],svg[lets-icons-chat-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4s-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 8.5h7m-7 3h5"></svg:path><svg:circle cx="16.5" cy="15.5" r="2" stroke="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="m19 18l1.5 1.5"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchDuotoneLightIcon],svg[lets-icons-chat-search-duotone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsChatSearchDuotoneLight0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" d="M14.5 18.5h-8a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" stroke-width="1.2" d="M7.5 10.5h7m-7 3h5"></svg:path><svg:circle cx="16.5" cy="15.5" r="2" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="m19 18l1.5 1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsChatSearchDuotoneLight0)"></svg:path>`,
})
export class LetsIconsChatSearchDuotoneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchFillIcon],svg[lets-icons-chat-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="17" cy="16" r="2.5" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m19 18l2 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 10.2c0-2.52 0-3.78.49-4.743A4.5 4.5 0 0 1 4.457 3.49C5.42 3 6.68 3 9.2 3h5.6c2.52 0 3.78 0 4.743.49a4.5 4.5 0 0 1 1.967 1.967C22 6.42 22 7.68 22 10.2v3.506A5.5 5.5 0 1 0 14.706 21H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 19.48 2 18.92 2 17.8zm4-.2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatSearchLightIcon],svg[lets-icons-chat-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M14.5 18.5h-8a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h7m-7 3h5"></svg:path><svg:circle cx="16.5" cy="15.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="m19 18l1.5 1.5"></svg:path></svg:g>`,
})
export class LetsIconsChatSearchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckFillIcon],svg[lets-icons-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingIcon],svg[lets-icons-check-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m8 12l3 3l5-6"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingDuotoneIcon],svg[lets-icons-check-ring-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m9.5 12l1.894 1.894a.15.15 0 0 0 .212 0L15.5 10"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingDuotoneLineIcon],svg[lets-icons-check-ring-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="m8 12l3 3l5-6"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingLightIcon],svg[lets-icons-check-ring-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m8 12l3 3l5-6"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingRoundIcon],svg[lets-icons-check-ring-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M12 21a9 9 0 1 0-6.364-2.636"></svg:path><svg:path d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2s-.803-.343-1.527-1.067L8 13"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingRoundDuotoneIcon],svg[lets-icons-check-ring-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m9.5 12l1.894 1.894a.15.15 0 0 0 .212 0L15.5 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M19.5 12A7.5 7.5 0 1 1 12 4.5"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingRoundDuotoneLineIcon],svg[lets-icons-check-ring-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 21a9 9 0 1 0-6.364-2.636"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2s-.803-.343-1.527-1.067L8 13"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRingRoundLightIcon],svg[lets-icons-check-ring-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M12 21a9 9 0 1 0-6.364-2.636"></svg:path><svg:path d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2s-.803-.343-1.527-1.067L8 13"></svg:path></svg:g>`,
})
export class LetsIconsCheckRingRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCheckRoundFillIcon],svg[lets-icons-check-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m4.768-11.36a1 1 0 1 0-1.536-1.28l-3.598 4.317c-.347.416-.542.647-.697.788l-.006.006l-.007-.005c-.168-.127-.383-.339-.765-.722l-1.452-1.451a1 1 0 0 0-1.414 1.414l1.451 1.451l.041.041c.327.327.64.641.933.862c.327.248.756.48 1.305.456c.55-.025.956-.296 1.26-.572c.27-.247.555-.588.85-.943l.037-.044z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCheckRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChemistryIcon],svg[lets-icons-chemistry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 7l2 3l-2 3H8l-2-3l2-3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 4l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3M5 4l3 3m0 6l-2 2m7 1l-2 2m-5-8H4m14 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"></svg:path><svg:circle cx="9" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="21" cy="7" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChemistryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChemistryLightIcon],svg[lets-icons-chemistry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 7.5l2 3l-2 3h-3l-2-3l2-3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 4.5l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3m-12-15l2 3m5 9l-1 1.5m-4-4.5l-1 1.5m-1-4.5h-1m13 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"></svg:path><svg:circle cx="10.5" cy="19.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="2.5" cy="10.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChemistryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldIcon],svg[lets-icons-chield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m18.712 4.789l-5.924-2.54a2 2 0 0 0-1.576 0L5.288 4.79a2 2 0 0 0-1.2 2.059l.651 5.862a7 7 0 0 0 2.476 4.604l3.505 2.92a2 2 0 0 0 2.56 0l3.505-2.92a7 7 0 0 0 2.476-4.604l.651-5.862a2 2 0 0 0-1.2-2.06Z"></svg:path>`,
})
export class LetsIconsChieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltIcon],svg[lets-icons-chield-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.8 16.4L15 17.75a5 5 0 0 1-6 0L7.2 16.4A8 8 0 0 1 4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a8 8 0 0 1-3.2 6.4Z"></svg:path><svg:circle cx="12" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChieldAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltDuotoneIcon],svg[lets-icons-chield-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="m15.545 4.52l2.849 1.22a1 1 0 0 1 .606.92v6.252a6 6 0 0 1-2.513 4.883l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V6.66a1 1 0 0 1 .606-.919l2.849-1.22a9 9 0 0 1 7.09 0"></svg:path><svg:circle cx="12" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="10.5" r=".5" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChieldAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltDuotoneLineIcon],svg[lets-icons-chield-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M16.8 16.4L15 17.75a5 5 0 0 1-6 0L7.2 16.4A8 8 0 0 1 4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a8 8 0 0 1-3.2 6.4Z"></svg:path><svg:circle cx="12" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="10" r="1" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChieldAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltFillIcon],svg[lets-icons-chield-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15 17.75l1.8-1.35A8 8 0 0 0 20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a8 8 0 0 0 3.2 6.4L9 17.75a5 5 0 0 0 6 0M10 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChieldAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltLightIcon],svg[lets-icons-chield-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="M16.8 16.4L15 17.75a5 5 0 0 1-6 0L7.2 16.4A8 8 0 0 1 4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a8 8 0 0 1-3.2 6.4Z"></svg:path><svg:circle cx="12" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChieldAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckIcon],svg[lets-icons-chield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M18.702 5.784L12.788 3.25a2 2 0 0 0-1.576 0L5.298 5.784A2 2 0 0 0 4.1 7.871l.613 4.904a7 7 0 0 0 2.465 4.509l3.54 2.95a2 2 0 0 0 2.561 0l3.541-2.95a7 7 0 0 0 2.465-4.51l.613-4.903a2 2 0 0 0-1.197-2.087Z"></svg:path><svg:path d="m9 12l2.569 2.569a.5.5 0 0 0 .77-.077L16 9"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckDuotoneIcon],svg[lets-icons-chield-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m15.545 4.52l2.849 1.22a1 1 0 0 1 .606.92v6.252a6 6 0 0 1-2.513 4.883l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V6.66a1 1 0 0 1 .606-.919l2.849-1.22a9 9 0 0 1 7.09 0"></svg:path><svg:path stroke="currentColor" d="m9.5 12.5l1.894 1.894a.15.15 0 0 0 .212 0L15.5 10.5"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckDuotoneLineIcon],svg[lets-icons-chield-check-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.2"><svg:path fill="currentColor" fill-opacity=".25" d="M18.545 6.152L12.63 3.617a1.6 1.6 0 0 0-1.26 0L5.455 6.152a1.6 1.6 0 0 0-.957 1.67l.613 4.903a6.6 6.6 0 0 0 2.324 4.252l3.54 2.95a1.6 1.6 0 0 0 2.05 0l3.54-2.95a6.6 6.6 0 0 0 2.324-4.252l.613-4.904a1.6 1.6 0 0 0-.957-1.669Z"></svg:path><svg:path d="m9 12l2.569 2.569a.5.5 0 0 0 .77-.077L16 9"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckFillIcon],svg[lets-icons-chield-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.394 5.74l-5.212-2.234a3 3 0 0 0-2.364 0L5.606 5.74A1 1 0 0 0 5 6.66v5.252a6 6 0 0 0 2.513 4.882l3.325 2.375a2 2 0 0 0 2.325 0l3.324-2.375A6 6 0 0 0 19 11.913V6.66a1 1 0 0 0-.606-.919M15.78 9.625a1 1 0 1 0-1.562-1.25l-3.302 4.128l-1.21-1.21a1 1 0 0 0-1.414 1.414l1.605 1.605a1.5 1.5 0 0 0 2.232-.123z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChieldCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckLightIcon],svg[lets-icons-chield-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="m12.773 3.706l5.985 1.596a1 1 0 0 1 .742.966v6.02a6 6 0 0 1-2.672 4.993l-4.273 2.85a1 1 0 0 1-1.11 0l-4.273-2.85A6 6 0 0 1 4.5 12.29V6.27a1 1 0 0 1 .742-.967l5.985-1.596a3 3 0 0 1 1.546 0Z"></svg:path><svg:path d="m9.5 11.5l1.823 1.823a.25.25 0 0 0 .354 0L15 10"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldDuotoneIcon],svg[lets-icons-chield-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.487 17.795l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V9.15A.15.15 0 0 1 5.15 9h13.7a.15.15 0 0 1 .15.15v3.762a6 6 0 0 1-2.513 4.883"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="m15.545 4.52l2.849 1.22a1 1 0 0 1 .606.92v1.19a.15.15 0 0 1-.15.15H5.15A.15.15 0 0 1 5 7.85V6.66a1 1 0 0 1 .606-.92l2.849-1.22a9 9 0 0 1 7.09 0"></svg:path>`,
})
export class LetsIconsChieldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldDuotoneLineIcon],svg[lets-icons-chield-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M18.555 5.156L12.63 2.617a1.6 1.6 0 0 0-1.26 0l-5.924 2.54a1.6 1.6 0 0 0-.96 1.647l.65 5.862a6.6 6.6 0 0 0 2.335 4.341l3.505 2.92a1.6 1.6 0 0 0 2.048 0l3.505-2.92a6.6 6.6 0 0 0 2.334-4.341l.651-5.862a1.6 1.6 0 0 0-.96-1.648Z"></svg:path>`,
})
export class LetsIconsChieldDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldFillIcon],svg[lets-icons-chield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.182 3.506l5.212 2.234a1 1 0 0 1 .606.92v5.252a6 6 0 0 1-2.513 4.883l-3.324 2.375a2 2 0 0 1-2.325 0l-3.325-2.375A6 6 0 0 1 5 11.912V6.66a1 1 0 0 1 .606-.919l5.212-2.234a3 3 0 0 1 2.364 0"></svg:path>`,
})
export class LetsIconsChieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldLightIcon],svg[lets-icons-chield-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M18.515 5.248L12.591 2.71a1.5 1.5 0 0 0-1.182 0L5.485 5.25a1.5 1.5 0 0 0-.9 1.544l.651 5.862a6.5 6.5 0 0 0 2.3 4.275l3.504 2.92a1.5 1.5 0 0 0 1.92 0l3.505-2.92a6.5 6.5 0 0 0 2.299-4.275l.651-5.862a1.5 1.5 0 0 0-.9-1.545Z"></svg:path>`,
})
export class LetsIconsChieldLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleLeftIcon],svg[lets-icons-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m14 11l-4 4l4 4"></svg:path><svg:path stroke-linecap="round" d="M4.206 12.75c-.99-.858-1.388-1.855-1.129-2.837s1.158-1.895 2.559-2.595s3.225-1.15 5.19-1.28c1.963-.129 3.958.07 5.674.565s3.057 1.26 3.815 2.175s.891 1.93.378 2.887c-.512.957-1.642 1.802-3.214 2.405S13.98 15 12 15"></svg:path></svg:g>`,
})
export class LetsIconsCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleLeftLightIcon],svg[lets-icons-circle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m14 11l-4 4l4 4"></svg:path><svg:path stroke-linecap="round" d="M4.206 12.75C3.19 11.87 2.8 10.845 3.097 9.84c.298-1.004 1.266-1.929 2.748-2.623s3.39-1.118 5.414-1.202s4.045.178 5.735.741c1.69.564 2.948 1.396 3.572 2.363c.623.966.574 2.01-.139 2.96s-2.048 1.754-3.788 2.277s-3.784.737-5.798.607"></svg:path></svg:g>`,
})
export class LetsIconsCircleLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightIcon],svg[lets-icons-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M19.794 12.75c.99-.858 1.388-1.855 1.129-2.837s-1.158-1.895-2.559-2.595s-3.225-1.15-5.19-1.28c-1.963-.129-3.958.07-5.674.565s-3.057 1.26-3.815 2.175s-.891 1.93-.378 2.887c.512.957 1.642 1.802 3.214 2.405S10.02 15 12 15"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightAltIcon],svg[lets-icons-circle-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M9.67 6.153c-2.108.283-3.94.94-5.153 1.847c-1.213.908-1.725 2.005-1.44 3.087s1.347 2.076 2.989 2.796S9.816 15 12 15m7.794-2.25c.591-.512.975-1.077 1.129-1.663c.154-.585.076-1.18-.23-1.752c-.306-.57-.833-1.106-1.553-1.574c-.72-.47-1.616-.863-2.64-1.158"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightAltLightIcon],svg[lets-icons-circle-right-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M9.67 6.153c-2.234.3-4.152 1.018-5.356 2.005c-1.203.988-1.6 2.17-1.108 3.3c.493 1.13 1.836 2.122 3.752 2.77c1.917.648 4.258.902 6.54.71m6.296-2.188c.69-.598 1.096-1.267 1.187-1.956s-.138-1.378-.666-2.016s-1.343-1.206-2.38-1.661c-1.039-.455-2.272-.785-3.606-.964"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightLightIcon],svg[lets-icons-circle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M19.794 12.75c1.017-.88 1.407-1.907 1.108-2.912c-.3-1.006-1.27-1.931-2.756-2.625s-3.396-1.117-5.423-1.198c-2.026-.082-4.048.182-5.737.748c-1.688.566-2.943 1.402-3.56 2.37c-.618.969-.562 2.013.16 2.964c.721.95 2.065 1.75 3.812 2.27s3.795.729 5.81.592"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsClockIcon],svg[lets-icons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="7"></svg:circle><svg:path stroke-linecap="round" d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.899-2.829a4 4 0 0 1 2.829 2.829M12 8v3.75c0 .138.112.25.25.25H15"></svg:path></svg:g>`,
})
export class LetsIconsClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsClockDuotoneIcon],svg[lets-icons-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"></svg:path></svg:g>`,
})
export class LetsIconsClockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsClockDuotoneLineIcon],svg[lets-icons-clock-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsClockDuotoneLine0"><svg:g fill="none"><svg:circle cx="12" cy="12" r="8.5" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsClockDuotoneLine0)"></svg:path>`,
})
export class LetsIconsClockDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsClockFillIcon],svg[lets-icons-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.899-2.829a4 4 0 0 1 2.829 2.829"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-12a1 1 0 1 0-2 0v3.75c0 .69.56 1.25 1.25 1.25H15a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsClockLightIcon],svg[lets-icons-clock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8.5"></svg:circle><svg:path stroke-linecap="round" d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"></svg:path></svg:g>`,
})
export class LetsIconsClockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingIcon],svg[lets-icons-close-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18zM9 9l6 6m0-6l-6 6"></svg:path>`,
})
export class LetsIconsCloseRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingDuotoneIcon],svg[lets-icons-close-ring-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m9 9l6 6m0-6l-6 6"></svg:path></svg:g>`,
})
export class LetsIconsCloseRingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingDuotoneLineIcon],svg[lets-icons-close-ring-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCloseRingDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M12 20.4a8.4 8.4 0 1 1 0-16.801A8.4 8.4 0 0 1 12 20.4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m9 9l6 6m0-6l-6 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCloseRingDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCloseRingDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingFillIcon],svg[lets-icons-close-ring-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.293-6.293a1 1 0 0 0 1.414-1.414L13.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L12 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L10.586 12l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 13.414zm1.386-9.174A7 7 0 0 0 7.05 16.95a1 1 0 1 0 1.414-1.414A5 5 0 1 1 12 17a1 1 0 1 0 0 2a7 7 0 0 0 2.679-13.467" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloseRingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRingLightIcon],svg[lets-icons-close-ring-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18zM9 9l6 6m0-6l-6 6"></svg:path>`,
})
export class LetsIconsCloseRingLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRoundIcon],svg[lets-icons-close-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></svg:path>`,
})
export class LetsIconsCloseRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRoundDuotoneIcon],svg[lets-icons-close-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="m16 8l-8 8m0-8l8 8"></svg:path></svg:g>`,
})
export class LetsIconsCloseRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRoundDuotoneLineIcon],svg[lets-icons-close-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCloseRoundDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m16 8l-8 8m0-8l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCloseRoundDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCloseRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRoundFillIcon],svg[lets-icons-close-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M7.293 16.707a1 1 0 0 1 0-1.414L10.586 12L7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloseRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseRoundLightIcon],svg[lets-icons-close-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12"></svg:path>`,
})
export class LetsIconsCloseRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseSquareIcon],svg[lets-icons-close-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></svg:path>`,
})
export class LetsIconsCloseSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseSquareDuotoneIcon],svg[lets-icons-close-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.2" d="m16 8l-8 8m0-8l8 8"></svg:path></svg:g>`,
})
export class LetsIconsCloseSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseSquareDuotoneLineIcon],svg[lets-icons-close-square-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCloseSquareDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="square" stroke-linejoin="round" d="m16 8l-8 8m0-8l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCloseSquareDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCloseSquareDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseSquareFillIcon],svg[lets-icons-close-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M6.586 16l.707-.707L10.586 12L7.293 8.707L6.586 8L8 6.586l.707.707L12 10.586l3.293-3.293l.707-.707L17.414 8l-.707.707L13.414 12l3.293 3.293l.707.707L16 17.414l-.707-.707L12 13.414l-3.293 3.293l-.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseSquareLightIcon],svg[lets-icons-close-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12"></svg:path>`,
})
export class LetsIconsCloseSquareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudIcon],svg[lets-icons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.99 19.982l.075.997zm-.074-.997Q8.71 19 8.5 19v2q.285 0 .565-.021zM8.5 19A5.5 5.5 0 0 1 3 13.5H1A7.5 7.5 0 0 0 8.5 21zM3 13.5A5.5 5.5 0 0 1 8.5 8V6A7.5 7.5 0 0 0 1 13.5zM8.5 8a5.5 5.5 0 0 1 5.038 3.29l1.832-.804A7.5 7.5 0 0 0 8.5 6zm7.5 5a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm3 3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm-3 3H9.01v2H16zm-6.99 0a.99.99 0 0 1 .99.99H8c0 .558.452 1.01 1.01 1.01zm4.528-7.71c.393.895 1.28 1.71 2.462 1.71v-2c-.194 0-.47-.149-.63-.514zm-4.473 9.69A.99.99 0 0 1 8 19.991h2c0-.588-.5-1.05-1.084-1.006z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M17.879 12.902A4 4 0 1 0 13 9.016"></svg:path></svg:g>`,
})
export class LetsIconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltIcon],svg[lets-icons-cloud-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.528 8l.745.667l-.298.333h-.447zM15 7c-1.48 0-2.81.642-3.727 1.667l-1.49-1.334A7 7 0 0 1 15 5zm5 5a5 5 0 0 0-5-5V5a7 7 0 0 1 7 7zm-5 5a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7zm-7 0h7v2H8zm-4-4a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6zm4-4a4 4 0 0 0-4 4H2a6 6 0 0 1 6-6zm2.528 0H8V7h2.528z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M16.318 17.854A6 6 0 1 0 9 12.024"></svg:path></svg:g>`,
})
export class LetsIconsCloudAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltDuotoneIcon],svg[lets-icons-cloud-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M10.528 8A6 6 0 1 1 15 18H8A5 5 0 0 1 8 8z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.528 8l.447.4l-.179.2h-.268zM15 6.6c-1.6 0-3.036.694-4.025 1.8l-.894-.8A6.6 6.6 0 0 1 15 5.4zm5.4 5.4A5.4 5.4 0 0 0 15 6.6V5.4a6.6 6.6 0 0 1 6.6 6.6zM15 17.4a5.4 5.4 0 0 0 5.4-5.4h1.2a6.6 6.6 0 0 1-6.6 6.6zm-7 0h7v1.2H8zM3.6 13A4.4 4.4 0 0 0 8 17.4v1.2A5.6 5.6 0 0 1 2.4 13zM8 8.6A4.4 4.4 0 0 0 3.6 13H2.4A5.6 5.6 0 0 1 8 7.4zm2.528 0H8V7.4h2.528z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M16.318 17.854A6 6 0 1 0 9 12.024"></svg:path></svg:g>`,
})
export class LetsIconsCloudAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltFillIcon],svg[lets-icons-cloud-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.29 10A7 7 0 1 1 15 19H6.5a4.5 4.5 0 1 1 0-9z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloudAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltLightIcon],svg[lets-icons-cloud-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m9.803 9l.432.25l-.144.25h-.288zM15 6.5a5.5 5.5 0 0 0-4.764 2.75l-.866-.5A6.5 6.5 0 0 1 15 5.5zm5.5 5.5A5.5 5.5 0 0 0 15 6.5v-1a6.5 6.5 0 0 1 6.5 6.5zM15 17.5a5.5 5.5 0 0 0 5.5-5.5h1a6.5 6.5 0 0 1-6.5 6.5zm-7.5 0H15v1H7.5zm-4-4a4 4 0 0 0 4 4v1a5 5 0 0 1-5-5zm4-4a4 4 0 0 0-4 4h-1a5 5 0 0 1 5-5zm2.303 0H7.5v-1h2.303z"></svg:path><svg:path stroke="currentColor" d="M16.318 17.854A6 6 0 1 0 9 12.024"></svg:path></svg:g>`,
})
export class LetsIconsCloudAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudDuotoneIcon],svg[lets-icons-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M9 19.99a.01.01 0 0 0-.01-.008a6.5 6.5 0 1 1 5.464-9.094C14.73 11.518 15.312 12 16 12a4 4 0 0 1 0 8H9.01a.01.01 0 0 1-.01-.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.99 19.982l.045.598zm-.044-.598q-.22.015-.446.016v1.2q.27 0 .535-.02zM8.5 19.4a5.9 5.9 0 0 1-5.9-5.9H1.4a7.1 7.1 0 0 0 7.1 7.1zm-5.9-5.9a5.9 5.9 0 0 1 5.9-5.9V6.4a7.1 7.1 0 0 0-7.1 7.1zm5.9-5.9a5.9 5.9 0 0 1 5.405 3.53l1.098-.483A7.1 7.1 0 0 0 8.5 6.4zm7.5 5a3.4 3.4 0 0 1 3.4 3.4h1.2a4.6 4.6 0 0 0-4.6-4.6zm3.4 3.4a3.4 3.4 0 0 1-3.4 3.4v1.2a4.6 4.6 0 0 0 4.6-4.6zM16 19.4H9.01v1.2H16zm-6.99 0a.59.59 0 0 1 .59.59H8.4c0 .337.273.61.61.61zm4.895-8.27c.346.788 1.11 1.47 2.095 1.47v-1.2c-.391 0-.79-.282-.997-.753zm-4.87 9.45a.59.59 0 0 1-.635-.59h1.2a.61.61 0 0 0-.654-.606z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M18.312 12.779a4 4 0 1 0-5.298-4.119"></svg:path></svg:g>`,
})
export class LetsIconsCloudDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudFillIcon],svg[lets-icons-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 19.99a.01.01 0 0 0-.01-.008a6.5 6.5 0 1 1 5.464-9.094C14.73 11.518 15.312 12 16 12a4 4 0 0 1 0 8H9.01a.01.01 0 0 1-.01-.01m10.46-8.265A4.001 4.001 0 1 0 14.012 7.7a8 8 0 0 1 1.816 2.584c.043.096.1.162.145.195l.033.02c1.31.001 2.512.46 3.456 1.225M16.01 10.5h-.003z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudLightIcon],svg[lets-icons-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.99 19.982l.037.498zm-.037-.499q-.224.017-.453.017v1q.266 0 .527-.02zM8.5 19.5a6 6 0 0 1-6-6h-1a7 7 0 0 0 7 7zm-6-6a6 6 0 0 1 6-6v-1a7 7 0 0 0-7 7zm6-6a6 6 0 0 1 5.496 3.59l.916-.403A7 7 0 0 0 8.5 6.5zm7.5 5a3.5 3.5 0 0 1 3.5 3.5h1a4.5 4.5 0 0 0-4.5-4.5zm3.5 3.5a3.5 3.5 0 0 1-3.5 3.5v1a4.5 4.5 0 0 0 4.5-4.5zM16 19.5H9.01v1H16zm-6.99 0c.27 0 .49.22.49.49h-1c0 .282.228.51.51.51zm4.986-8.41c.335.761 1.069 1.41 2.004 1.41v-1c-.44 0-.87-.315-1.088-.813zm-4.969 9.39a.49.49 0 0 1-.527-.49h1a.51.51 0 0 0-.547-.507z"></svg:path><svg:path stroke="currentColor" d="M19.536 13.536a4.999 4.999 0 0 0-4.512-8.44A5 5 0 0 0 11.67 7.5"></svg:path></svg:g>`,
})
export class LetsIconsCloudLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCodeIcon],svg[lets-icons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m16 7l4 5l-4 5M8 7l-4 5l4 5"></svg:path>`,
})
export class LetsIconsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCodeLightIcon],svg[lets-icons-code-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m16 7l4 5l-4 5M8 7l-4 5l4 5"></svg:path>`,
})
export class LetsIconsCodeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCollapseIcon],svg[lets-icons-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 13l-.707-.707l.707-.707l.707.707zm1 9a1 1 0 1 1-2 0zm-6.707-4.707l5-5l1.414 1.414l-5 5zm6.414-5l5 5l-1.414 1.414l-5-5zM10 13v9H8v-9zm5-2l-.707.707l.707.707l.707-.707zm1-9a1 1 0 1 0-2 0zM9.293 6.707l5 5l1.414-1.414l-5-5zm6.414 5l5-5l-1.414-1.414l-5 5zM16 11V2h-2v9z"></svg:path>`,
})
export class LetsIconsCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCollapseLightIcon],svg[lets-icons-collapse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 13l-.354-.354l.354-.353l.354.353zm.5 9a.5.5 0 0 1-1 0zm-5.854-4.354l5-5l.708.708l-5 5zm5.708-5l5 5l-.708.708l-5-5zM9.5 13v9h-1v-9zm5.5-2l-.354.354l.354.353l.354-.353zm.5-9a.5.5 0 0 0-1 0zM9.646 6.354l5 5l.708-.708l-5-5zm5.708 5l5-5l-.708-.708l-5 5zM15.5 11V2h-1v9z"></svg:path>`,
})
export class LetsIconsCollapseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsColorModeIcon],svg[lets-icons-color-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></svg:circle><svg:path fill="currentColor" d="M18.364 5.636A9 9 0 0 0 5.636 18.364L12 12z"></svg:path></svg:g>`,
})
export class LetsIconsColorModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsColorModeLightIcon],svg[lets-icons-color-mode-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8.5" stroke="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.243 7.757a6 6 0 1 0-8.486 8.486L12 12z"></svg:path></svg:g>`,
})
export class LetsIconsColorModeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsColorPickerIcon],svg[lets-icons-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="m8.5 5.5l10 10"></svg:path><svg:path stroke-linejoin="round" d="M14.5 4.5L4 15l-.5 5.5L9 20L19.5 9.5a3.536 3.536 0 0 0-5-5Z"></svg:path></svg:g>`,
})
export class LetsIconsColorPickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsColumUpIcon],svg[lets-icons-colum-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M21 20H3m7-4v-6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6m12 0V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"></svg:path>`,
})
export class LetsIconsColumUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsColumUpFillIcon],svg[lets-icons-colum-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 19H5"></svg:path><svg:path fill="currentColor" d="M11 14v-4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m6 0V6a2 2 0 1 0-4 0v8a2 2 0 1 0 4 0"></svg:path></svg:g>`,
})
export class LetsIconsColumUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsColumUpLightIcon],svg[lets-icons-colum-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M21 20H3m7-4v-6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6m12 0V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"></svg:path>`,
})
export class LetsIconsColumUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCommentIcon],svg[lets-icons-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m4.327 6.638l.891.454zm.441 13.594l-.707-.707zm13.594-3.559l.454.891zm1.311-1.311l.891.454zm0-8.724l.891-.454zm-1.311-1.311l.454-.891zm-12.724 0l.454.891zm2.07 11.966L7 16.586zM5 9.8c0-.857 0-1.439.038-1.889c.035-.438.1-.663.18-.819l-1.782-.908c-.247.485-.346 1.002-.392 1.564C3 8.298 3 8.976 3 9.8zM5 12V9.8H3V12zm-2 0v5h2v-5zm0 5v2.914h2V17zm0 2.914c0 1.291 1.562 1.938 2.475 1.025l-1.414-1.414a.55.55 0 0 1 .939.389zm2.475 1.025L8.415 18L7 16.586l-2.939 2.939zM15.2 16H8.414v2H15.2zm2.708-.218c-.156.08-.38.145-.819.18c-.45.037-1.032.038-1.889.038v2c.824 0 1.501 0 2.052-.044c.562-.046 1.079-.145 1.564-.392zm.874-.874a2 2 0 0 1-.874.874l.908 1.782a4 4 0 0 0 1.748-1.748zM19 12.2c0 .857 0 1.439-.038 1.889c-.035.438-.1.663-.18.819l1.782.908c.247-.485.346-1.002.392-1.564c.045-.55.044-1.228.044-2.052zm0-2.4v2.4h2V9.8zm-.218-2.708c.08.156.145.38.18.819C19 8.361 19 8.943 19 9.8h2c0-.824 0-1.501-.044-2.052c-.046-.562-.145-1.079-.392-1.564zm-.874-.874a2 2 0 0 1 .874.874l1.782-.908a4 4 0 0 0-1.748-1.748zM15.2 6c.857 0 1.439 0 1.889.038c.438.035.663.1.819.18l.908-1.782c-.485-.247-1.002-.346-1.564-.392C16.702 4 16.024 4 15.2 4zM8.8 6h6.4V4H8.8zm-2.708.218c.156-.08.38-.145.819-.18C7.361 6 7.943 6 8.8 6V4c-.824 0-1.501 0-2.052.044c-.562.046-1.079.145-1.564.392zm-.874.874a2 2 0 0 1 .874-.874l-.908-1.782a4 4 0 0 0-1.748 1.748zM8.414 18v-2A2 2 0 0 0 7 16.586z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 4h5"></svg:path></svg:g>`,
})
export class LetsIconsCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCommentDuotoneIcon],svg[lets-icons-comment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M5.172 6.172C4 7.343 4 9.229 4 13v5.586c0 .89 1.077 1.337 1.707.707l2.147-2.147c.072-.072.108-.108.154-.127s.097-.019.2-.019H14c1.864 0 2.796 0 3.53-.305a4 4 0 0 0 2.165-2.164C20 13.796 20 12.864 20 11s0-2.796-.305-3.53a4 4 0 0 0-2.164-2.166C16.796 5 15.864 5 14 5h-2C8.229 5 6.343 5 5.172 6.172" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5h7m-7 3h5"></svg:path></svg:g>`,
})
export class LetsIconsCommentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCommentDuotoneLineIcon],svg[lets-icons-comment-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCommentDuotoneLine0"><svg:g fill="none"><svg:path fill="#fff" d="m4.827 7.138l.445.227zm.441 11.594l.354.353zm12.594-2.559l-.227-.445zm1.311-1.311l-.445-.227zm0-7.724l-.445.227zm-1.311-1.311l.227-.446zm-11.724 0l.227.445zm1.07 10.966l.353.353zM5 10.3c0-.848 0-1.455.04-1.93c.038-.469.11-.766.232-1.005l-.89-.454c-.206.403-.296.847-.34 1.378C4 8.814 4 9.469 4 10.3zm0 1.2v-1.2H4v1.2zm-1 0v5h1v-5zm0 5v1.914h1V16.5zm0 1.914c0 .846 1.023 1.27 1.622.671l-.707-.707a.1.1 0 0 1 .028-.013l.026.002a.06.06 0 0 1 .03.046zm1.622.671l1.939-1.939l-.707-.707l-1.94 1.94zM14.7 16H7.914v1H14.7zm2.935-.273c-.239.122-.536.195-1.005.234c-.476.039-1.082.039-1.93.039v1c.832 0 1.486 0 2.011-.043c.531-.043.975-.133 1.378-.338zm1.092-1.092a2.5 2.5 0 0 1-1.092 1.092l.454.892a3.5 3.5 0 0 0 1.53-1.53zM19 11.7c0 .848 0 1.455-.04 1.93c-.038.469-.11.766-.233 1.005l.892.454c.205-.403.295-.847.338-1.378c.043-.525.043-1.18.043-2.011zm0-1.4v1.4h1v-1.4zm-.273-2.935c.122.239.195.536.234 1.005C19 8.845 19 9.452 19 10.3h1c0-.832 0-1.486-.043-2.011c-.043-.531-.133-.975-.338-1.378zm-1.092-1.093a2.5 2.5 0 0 1 1.092 1.093l.892-.454a3.5 3.5 0 0 0-1.53-1.53zM14.7 6c.848 0 1.454 0 1.93.04c.469.038.766.11 1.005.232l.454-.89c-.403-.206-.847-.296-1.378-.34C16.186 5 15.531 5 14.7 5zM9.3 6h5.4V5H9.3zm-2.935.272c.239-.121.536-.194 1.005-.233C7.845 6 8.452 6 9.3 6V5c-.832 0-1.486 0-2.011.043c-.531.043-.975.133-1.378.338zM5.272 7.365a2.5 2.5 0 0 1 1.093-1.093l-.454-.89a3.5 3.5 0 0 0-1.53 1.529zm2.289 9.781A.5.5 0 0 1 7.914 17v-1a1.5 1.5 0 0 0-1.06.44z"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M8.5 9.5h7m-7 3h5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCommentDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCommentDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCommentFillIcon],svg[lets-icons-comment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 7.04 21 8.16 21 10.4v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 18 16.84 18 14.6 18H7.414a1 1 0 0 0-.707.293l-2 2c-.63.63-1.707.184-1.707-.707zM9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCommentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCommentLightIcon],svg[lets-icons-comment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m4.827 7.138l.445.227zm.441 11.594l.354.353zm12.594-2.559l-.227-.445zm1.311-1.311l-.445-.227zm0-7.724l-.445.227zm-1.311-1.311l.227-.446zm-11.724 0l.227.445zm1.07 10.966l.353.353zM5 10.3c0-.848 0-1.455.04-1.93c.038-.469.11-.766.232-1.005l-.89-.454c-.206.403-.296.847-.34 1.378C4 8.814 4 9.469 4 10.3zm0 1.2v-1.2H4v1.2zm-1 0v5h1v-5zm0 5v1.914h1V16.5zm0 1.914c0 .846 1.023 1.27 1.622.671l-.707-.707a.1.1 0 0 1 .028-.013l.026.002a.06.06 0 0 1 .03.046zm1.622.671l1.939-1.939l-.707-.707l-1.94 1.94zM14.7 16H7.914v1H14.7zm2.935-.273c-.239.122-.536.195-1.005.234c-.476.039-1.082.039-1.93.039v1c.832 0 1.486 0 2.011-.043c.531-.043.975-.133 1.378-.338zm1.092-1.092a2.5 2.5 0 0 1-1.092 1.092l.454.892a3.5 3.5 0 0 0 1.53-1.53zM19 11.7c0 .848 0 1.455-.04 1.93c-.038.469-.11.766-.233 1.005l.892.454c.205-.403.295-.847.338-1.378c.043-.525.043-1.18.043-2.011zm0-1.4v1.4h1v-1.4zm-.273-2.935c.122.239.195.536.234 1.005C19 8.845 19 9.452 19 10.3h1c0-.832 0-1.486-.043-2.011c-.043-.531-.133-.975-.338-1.378zm-1.092-1.093a2.5 2.5 0 0 1 1.092 1.093l.892-.454a3.5 3.5 0 0 0-1.53-1.53zM14.7 6c.848 0 1.454 0 1.93.04c.469.038.766.11 1.005.232l.454-.89c-.403-.206-.847-.296-1.378-.34C16.186 5 15.531 5 14.7 5zM9.3 6h5.4V5H9.3zm-2.935.272c.239-.121.536-.194 1.005-.233C7.845 6 8.452 6 9.3 6V5c-.832 0-1.486 0-2.011.043c-.531.043-.975.133-1.378.338zM5.272 7.365a2.5 2.5 0 0 1 1.093-1.093l-.454-.89a3.5 3.5 0 0 0-1.53 1.529zm2.289 9.781A.5.5 0 0 1 7.914 17v-1a1.5 1.5 0 0 0-1.06.44z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5h7m-7 3h5"></svg:path></svg:g>`,
})
export class LetsIconsCommentLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniIcon],svg[lets-icons-compas-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m18.54 7.762l-.835 5.01a6 6 0 0 1-4.932 4.933l-5.011.835a2 2 0 0 1-2.302-2.302l.835-5.01a6 6 0 0 1 4.932-4.933l5.011-.835a2 2 0 0 1 2.302 2.302Z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsCompasMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniDuotoneIcon],svg[lets-icons-compas-mini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="m18.785 14.078l1.627-8.136a2 2 0 0 0-2.354-2.354L9.922 5.216a6 6 0 0 0-4.706 4.706l-1.628 8.136a2 2 0 0 0 2.354 2.354l8.136-1.627a6 6 0 0 0 4.707-4.707M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="12" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class LetsIconsCompasMiniDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniDuotoneLineIcon],svg[lets-icons-compas-mini-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCompasMiniDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="#fff" d="m18.54 7.762l-.835 5.01a6 6 0 0 1-4.932 4.933l-5.011.835a2 2 0 0 1-2.302-2.302l.835-5.01a6 6 0 0 1 4.932-4.933l5.011-.835a2 2 0 0 1 2.302 2.302Z"></svg:path><svg:circle cx="12" cy="12" r="2.5" stroke="silver" stroke-opacity=".25"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCompasMiniDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCompasMiniDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniFillIcon],svg[lets-icons-compas-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.785 14.078l1.627-8.136a2 2 0 0 0-2.354-2.354L9.922 5.216a6 6 0 0 0-4.706 4.706l-1.628 8.136a2 2 0 0 0 2.354 2.354l8.136-1.627a6 6 0 0 0 4.707-4.707M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCompasMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompasMiniLightIcon],svg[lets-icons-compas-mini-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="m18.54 7.762l-.835 5.01a6 6 0 0 1-4.932 4.933l-5.011.835a2 2 0 0 1-2.302-2.302l.835-5.01a6 6 0 0 1 4.932-4.933l5.011-.835a2 2 0 0 1 2.302 2.302Z"></svg:path><svg:circle cx="12" cy="12" r="2.5"></svg:circle></svg:g>`,
})
export class LetsIconsCompasMiniLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassIcon],svg[lets-icons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M9.942 10.687a37 37 0 0 1-.008-2.265c.595.324 1.3.725 1.958 1.14c.48.302.918.602 1.26.876c.37.295.537.487.58.562s.127.315.197.783c.066.434.106.962.129 1.53c.03.776.024 1.588.008 2.265a36 36 0 0 1-1.958-1.14c-.48-.303-.917-.603-1.26-.876c-.37-.295-.537-.487-.58-.562s-.126-.315-.197-.783a15 15 0 0 1-.129-1.53Z"></svg:path><svg:circle cx="12" cy="12" r="9"></svg:circle></svg:g>`,
})
export class LetsIconsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassAltIcon],svg[lets-icons-compass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path stroke-linecap="round" d="m8.523 8.584l1.47 5.388a.05.05 0 0 0 .035.036l5.388 1.469a.05.05 0 0 0 .061-.061l-1.47-5.388a.05.05 0 0 0-.035-.036L8.584 8.523a.05.05 0 0 0-.061.061ZM13 11l-2 2"></svg:path></svg:g>`,
})
export class LetsIconsCompassAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassAltFillIcon],svg[lets-icons-compass-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.334 9.335l.735 3.182l2.448-2.448zm5.332 5.331l-3.184-.734l2.45-2.45zM7.044 8.303a1.05 1.05 0 0 1 1.259-1.259l6.391 1.475c.392.09.697.396.787.787l1.475 6.392a1.05 1.05 0 0 1-1.259 1.259l-6.391-1.475a1.05 1.05 0 0 1-.787-.787z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCompassAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassAltLightIcon],svg[lets-icons-compass-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9.5"></svg:circle><svg:path stroke-linecap="round" d="m8.543 8.608l1.949 4.872a.05.05 0 0 0 .028.028l4.872 1.949a.05.05 0 0 0 .065-.065l-1.949-4.872a.05.05 0 0 0-.028-.028L8.608 8.543a.05.05 0 0 0-.065.065ZM13 11l-2 2m-.5-5.5V4.62a.05.05 0 0 1 .085-.035l2.83 2.83a.05.05 0 0 0 .085-.036V4.5m0 12h-2.419c-.32 0-.581.26-.581.581v0c0 .25.16.472.397.552l2.206.735a.58.58 0 0 1 .397.55v0c0 .322-.26.582-.581.582H10.5"></svg:path></svg:g>`,
})
export class LetsIconsCompassAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassDuotoneIcon],svg[lets-icons-compass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path fill="currentColor" d="M9.831 7.843c.85.458 3.097 1.764 3.901 3.157s.812 3.992.784 4.957a.233.233 0 0 1-.347.2c-.85-.458-3.097-1.764-3.901-3.157s-.812-3.992-.784-4.957a.233.233 0 0 1 .347-.2"></svg:path>`,
})
export class LetsIconsCompassDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassDuotoneLineIcon],svg[lets-icons-compass-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.732-10c-.437-.756-2.346-2.092-3.445-2.82a.473.473 0 0 0-.74.426c.082 1.316.284 3.638.72 4.394c.438.756 2.347 2.092 3.446 2.82a.473.473 0 0 0 .74-.426c-.082-1.316-.284-3.638-.72-4.394" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.287 8.18l.332-.5zM13.732 11l.52-.3zM9.548 8.606l-.6.037zm.72 4.394l-.52.3zm3.445 2.82l.332-.5zm.74-.426l-.6.037zM20.4 12a8.4 8.4 0 0 1-8.4 8.4v1.2a9.6 9.6 0 0 0 9.6-9.6zM12 3.6a8.4 8.4 0 0 1 8.4 8.4h1.2A9.6 9.6 0 0 0 12 2.4zM3.6 12A8.4 8.4 0 0 1 12 3.6V2.4A9.6 9.6 0 0 0 2.4 12zm8.4 8.4A8.4 8.4 0 0 1 3.6 12H2.4a9.6 9.6 0 0 0 9.6 9.6zM9.955 8.68c.545.36 1.283.867 1.935 1.373c.326.254.624.501.862.726c.248.234.397.41.46.521l1.04-.6c-.155-.268-.409-.542-.676-.794a13 13 0 0 0-.95-.8a35 35 0 0 0-2.007-1.427zm.191-.111a.13.13 0 0 1-.063.11a.13.13 0 0 1-.128 0l.664-1a1.073 1.073 0 0 0-1.67.964zm.642 4.131c-.064-.11-.143-.327-.222-.659c-.075-.319-.14-.7-.197-1.11a34 34 0 0 1-.223-2.362l-1.197.074c.04.665.113 1.59.231 2.452c.06.43.131.853.219 1.223c.085.357.195.715.35.982zm3.257 2.62a33 33 0 0 1-1.935-1.373a12 12 0 0 1-.862-.726c-.248-.234-.397-.41-.46-.521l-1.04.6c.155.268.409.542.676.794c.277.26.607.535.95.8a35 35 0 0 0 2.007 1.427zm-.191.111a.1.1 0 0 1 .015-.061a.13.13 0 0 1 .175-.049l-.663 1a1.073 1.073 0 0 0 1.67-.964zm-.642-4.131c.064.11.143.327.222.659c.075.319.14.7.197 1.11c.112.818.182 1.71.223 2.362l1.197-.074a35 35 0 0 0-.231-2.452c-.06-.43-.131-.853-.219-1.223c-.085-.357-.195-.715-.35-.982z"></svg:path>`,
})
export class LetsIconsCompassDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassFillIcon],svg[lets-icons-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.598-11.5c-.574-.994-3.575-2.645-4.931-3.355a.478.478 0 0 0-.704.407c-.064 1.53-.135 4.954.439 5.948s3.575 2.645 4.932 3.355a.48.48 0 0 0 .704-.407c.063-1.53.134-4.954-.44-5.948" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCompassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassLightIcon],svg[lets-icons-compass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M8.918 10.907a12.5 12.5 0 0 1-.395-2.384a12.5 12.5 0 0 1 2.384.395c1.013.278 2.031.727 2.74 1.435c.708.709 1.157 1.727 1.435 2.74c.258.943.357 1.838.395 2.384a12.5 12.5 0 0 1-2.384-.396c-1.014-.277-2.031-.726-2.74-1.435c-.708-.708-1.157-1.726-1.435-2.74Z"></svg:path><svg:circle cx="12" cy="12" r="8.5"></svg:circle></svg:g>`,
})
export class LetsIconsCompassLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthIcon],svg[lets-icons-compass-north-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m6.2 20.634l5.668-10.393a.15.15 0 0 1 .264 0L17.8 20.634a.15.15 0 0 1-.187.211l-4.536-1.814a.15.15 0 0 1-.092-.113l-.837-4.606c-.03-.164-.266-.164-.296 0l-.837 4.606a.15.15 0 0 1-.092.113l-4.536 1.814a.15.15 0 0 1-.187-.21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 9V3.12a.05.05 0 0 1 .085-.035l5.83 5.83A.05.05 0 0 0 15 8.879V3"></svg:path></svg:g>`,
})
export class LetsIconsCompassNorthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthDuotoneIcon],svg[lets-icons-compass-north-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCompassNorthDuotone0"><svg:g fill="none"><svg:path fill="#fff" fill-opacity=".25" stroke="#fff" stroke-linecap="round" d="m7.558 20.378l4.397-9.283a.05.05 0 0 1 .09 0l4.397 9.283a.05.05 0 0 1-.065.067L12.02 18.51a.05.05 0 0 0-.04 0l-4.357 1.936a.05.05 0 0 1-.065-.067Z"></svg:path><svg:path stroke="#fff" d="M12 11.5v7"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M10.5 8.5V3.68c0-.05.067-.069.093-.025l2.814 4.69c.026.044.093.025.093-.026V3.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCompassNorthDuotone0)"></svg:path>`,
})
export class LetsIconsCompassNorthDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthFillIcon],svg[lets-icons-compass-north-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M9 9V3.12a.05.05 0 0 1 .085-.035l5.83 5.83A.05.05 0 0 0 15 8.879V3M7.059 20.882l4.896-9.793a.05.05 0 0 1 .09 0l4.896 9.793a.05.05 0 0 1-.063.07l-4.86-1.945a.05.05 0 0 0-.037 0l-4.859 1.944a.05.05 0 0 1-.063-.069Z"></svg:path><svg:path d="M12 12v7"></svg:path></svg:g>`,
})
export class LetsIconsCompassNorthFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthLightIcon],svg[lets-icons-compass-north-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="m7.558 20.378l4.397-9.283a.05.05 0 0 1 .09 0l4.397 9.283a.05.05 0 0 1-.065.067L12.02 18.51a.05.05 0 0 0-.04 0l-4.357 1.936a.05.05 0 0 1-.065-.067Z"></svg:path><svg:path d="M12 11.5v7"></svg:path><svg:path stroke-linecap="round" d="M10.5 8.5V3.68c0-.05.067-.069.093-.025l2.814 4.69c.026.044.093.025.093-.026V3.5"></svg:path></svg:g>`,
})
export class LetsIconsCompassNorthLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCopyIcon],svg[lets-icons-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586S4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"></svg:path><svg:rect width="10" height="10" x="10" y="10" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCopyAltIcon],svg[lets-icons-copy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M15 3H9a4 4 0 0 0-4 4v8"></svg:path><svg:path d="M9 11.5c0-1.196.001-2.01.071-2.628c.068-.598.188-.889.342-1.09a2 2 0 0 1 .37-.369c.2-.154.491-.274 1.09-.342C11.49 7.001 12.303 7 13.5 7s2.01.001 2.628.071c.598.068.889.188 1.09.342q.208.16.369.37c.154.2.274.491.342 1.09c.07.618.071 1.431.071 2.627v4c0 1.196-.002 2.01-.071 2.628c-.068.598-.188.889-.342 1.09q-.16.208-.37.369c-.2.154-.491.274-1.09.342c-.618.07-1.431.071-2.627.071s-2.01-.002-2.628-.071c-.598-.068-.889-.188-1.09-.342a2 2 0 0 1-.369-.37c-.154-.2-.274-.491-.342-1.09C9.001 17.51 9 16.697 9 15.5z"></svg:path></svg:g>`,
})
export class LetsIconsCopyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCopyAltLightIcon],svg[lets-icons-copy-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M15 3H9a4 4 0 0 0-4 4v8"></svg:path><svg:path d="M8.5 11.5c0-1.184 0-2.03.074-2.684c.073-.643.21-1.035.443-1.338a2.5 2.5 0 0 1 .461-.461c.303-.232.696-.37 1.338-.443c.653-.073 1.5-.074 2.684-.074s2.03 0 2.684.074c.642.073 1.035.21 1.338.443q.26.2.461.461c.232.303.37.695.443 1.338c.073.653.074 1.5.074 2.684v4c0 1.184 0 2.03-.074 2.684c-.073.642-.21 1.035-.443 1.338a2.5 2.5 0 0 1-.461.461c-.302.232-.695.37-1.338.443c-.653.073-1.5.074-2.684.074s-2.03 0-2.684-.074c-.643-.073-1.035-.21-1.338-.443a2.5 2.5 0 0 1-.461-.461c-.232-.302-.37-.695-.443-1.338c-.073-.653-.074-1.5-.074-2.684z"></svg:path></svg:g>`,
})
export class LetsIconsCopyAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCopyLightIcon],svg[lets-icons-copy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586S4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"></svg:path><svg:rect width="10" height="10" x="10" y="10" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsCopyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCovertIcon],svg[lets-icons-covert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path><svg:path d="m19 3l-3.7 4.625a1 1 0 0 1-.78.375H9.48a1 1 0 0 1-.78-.375L5 3m14 18l-3.7-4.625a1 1 0 0 0-.78-.375H9.48a1 1 0 0 0-.78.375L5 21"></svg:path><svg:path stroke-linecap="round" d="M12 13v3"></svg:path></svg:g>`,
})
export class LetsIconsCovertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCovertLightIcon],svg[lets-icons-covert-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M6.5 3.5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1"></svg:path><svg:path d="m18 4l-2.214 3.986a1 1 0 0 1-.874.514H9.088a1 1 0 0 1-.874-.514L6 4m12 16l-2.214-3.986a1 1 0 0 0-.874-.514H9.088a1 1 0 0 0-.874.514L6 20"></svg:path><svg:path stroke-linecap="round" d="M12 12.5v3"></svg:path></svg:g>`,
})
export class LetsIconsCovertLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCpuIcon],svg[lets-icons-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M7 11c0-1.886 0-2.828.586-3.414S9.114 7 11 7h2c1.886 0 2.828 0 3.414.586S17 9.114 17 11v2c0 1.886 0 2.828-.586 3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414-.586S7 14.886 7 13z"></svg:path><svg:rect width="4" height="4" x="10" y="10" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 7V4m4 3V4m3 6h3m-3 4h3m-10 6v-3m4 3v-3M4 10h3m-3 4h3"></svg:path></svg:g>`,
})
export class LetsIconsCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCpuLightIcon],svg[lets-icons-cpu-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M7 11c0-1.886 0-2.828.586-3.414S9.114 7 11 7h2c1.886 0 2.828 0 3.414.586S17 9.114 17 11v2c0 1.886 0 2.828-.586 3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414-.586S7 14.886 7 13z"></svg:path><svg:rect width="4" height="4" x="10" y="10" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M10 7V4m4 3V4m3 6h3m-3 4h3m-10 6v-3m4 3v-3M4 10h3m-3 4h3"></svg:path></svg:g>`,
})
export class LetsIconsCpuLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardIcon],svg[lets-icons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="18" height="13" x="3" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M7 15h.01M4 11h17"></svg:path></svg:g>`,
})
export class LetsIconsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardDuotoneIcon],svg[lets-icons-credit-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v4c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></svg:path><svg:circle cx="6" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 9h18v2H3z"></svg:path>`,
})
export class LetsIconsCreditCardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardDuotoneLineIcon],svg[lets-icons-credit-card-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 11h18v4c0 1.886 0 2.828-.586 3.414S18.886 19 17 19H7c-1.886 0-2.828 0-3.414-.586S3 16.886 3 15z"></svg:path><svg:rect width="18" height="13" x="3" y="6" stroke="currentColor" stroke-width="1.2" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 15h.01M3 11h18"></svg:path></svg:g>`,
})
export class LetsIconsCreditCardDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardFillIcon],svg[lets-icons-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.002 10h19.996c-.012-2.175-.108-3.353-.877-4.121C20.243 5 18.828 5 16 5H8c-2.828 0-4.243 0-5.121.879c-.769.768-.865 1.946-.877 4.121M22 12H2v2c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14zM7 15a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCreditCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardLightIcon],svg[lets-icons-credit-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M3.5 9.398c0-1.025 0-1.538.203-1.928a1.8 1.8 0 0 1 .767-.767c.39-.203.903-.203 1.928-.203h11.204c1.025 0 1.538 0 1.928.203a1.8 1.8 0 0 1 .767.767c.203.39.203.903.203 1.928v6.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.767.767c-.39.203-.903.203-1.928.203H6.398c-1.025 0-1.538 0-1.928-.203a1.8 1.8 0 0 1-.767-.767c-.203-.39-.203-.903-.203-1.928z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M3.5 10.5h17"></svg:path><svg:circle cx="6.5" cy="15.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsCreditCardLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalIcon],svg[lets-icons-critical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M21 16a9 9 0 0 0-18 0h5.005a3.995 3.995 0 0 1 7.99 0zm-9-9v5m6.364-2.364l-3 3m-9.728-3L9 13"></svg:path>`,
})
export class LetsIconsCriticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalDuotoneIcon],svg[lets-icons-critical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".25" d="M18.52 10.186a.244.244 0 0 1 .36.013a9 9 0 0 1 2.117 5.55a.245.245 0 0 1-.247.25h-4.505a.263.263 0 0 1-.258-.25a4 4 0 0 0-.7-2.02a.26.26 0 0 1 .025-.334zm-.72-1.067c.11.092.115.258.014.36l-3.21 3.209a.26.26 0 0 1-.333.025a4 4 0 0 0-1.553-.643a.26.26 0 0 1-.218-.254V7.278c0-.144.12-.258.264-.246A9 9 0 0 1 17.8 9.12m-6.3-1.841a.244.244 0 0 0-.264-.246A9 9 0 0 0 6.2 9.12a.244.244 0 0 0-.013.36l3.21 3.209a.26.26 0 0 0 .333.025a4 4 0 0 1 1.553-.643a.26.26 0 0 0 .218-.254zm-2.786 6.45a.26.26 0 0 0-.026-.333l-3.209-3.21a.244.244 0 0 0-.36.014a9 9 0 0 0-2.115 5.55a.245.245 0 0 0 .246.25h4.505c.138 0 .25-.111.258-.25c.045-.727.29-1.426.7-2.02"></svg:path><svg:path d="M12.5 11.806c0 .126.094.231.218.254a4 4 0 0 1 1.56.646a.26.26 0 0 0 .334-.026l3.91-3.91a.245.245 0 0 0-.01-.36a10 10 0 0 0-5.75-2.381a.245.245 0 0 0-.262.246z"></svg:path></svg:g>`,
})
export class LetsIconsCriticalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalDuotoneLineIcon],svg[lets-icons-critical-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".25" d="M18.52 10.186a.244.244 0 0 1 .36.013a9 9 0 0 1 2.117 5.55a.245.245 0 0 1-.247.25h-4.505a.263.263 0 0 1-.258-.25a4 4 0 0 0-.7-2.02a.26.26 0 0 1 .025-.334zm-.72-1.067c.11.092.115.258.014.36l-3.21 3.209a.26.26 0 0 1-.333.025a4 4 0 0 0-1.553-.643a.26.26 0 0 1-.218-.254V7.278c0-.144.12-.258.264-.246A9 9 0 0 1 17.8 9.12m-6.3-1.841a.244.244 0 0 0-.264-.246A9 9 0 0 0 6.2 9.12a.244.244 0 0 0-.013.36l3.21 3.209a.26.26 0 0 0 .333.025a4 4 0 0 1 1.553-.643a.26.26 0 0 0 .218-.254zm-2.786 6.45a.26.26 0 0 0-.026-.333l-3.209-3.21a.244.244 0 0 0-.36.014a9 9 0 0 0-2.115 5.55a.245.245 0 0 0 .246.25h4.505c.138 0 .25-.111.258-.25c.045-.727.29-1.426.7-2.02"></svg:path><svg:path d="M12.5 11.816c0 .126.094.231.218.254a4 4 0 0 1 1.553.643a.26.26 0 0 0 .334-.025l3.209-3.21a.244.244 0 0 0-.013-.36a9 9 0 0 0-5.037-2.086a.245.245 0 0 0-.264.246z"></svg:path></svg:g>`,
})
export class LetsIconsCriticalDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalFillIcon],svg[lets-icons-critical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.945 15.002c.06.549-.393.998-.945.998h-3.005c-.552 0-.988-.454-1.125-.99a4 4 0 0 0-.714-1.46L18.708 10a9 9 0 0 1 2.237 5.002M18 9.292a9 9 0 0 0-5.5-2.278v5.023a4 4 0 0 1 1.949.807zm-8.449 3.552a4 4 0 0 1 1.949-.807V7.014A9 9 0 0 0 6 9.292zM5.292 9.999a9 9 0 0 0-2.237 5.003c-.06.549.393.998.945.998h3.005c.552 0 .988-.454 1.125-.99a4 4 0 0 1 .714-1.46z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCriticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalLightIcon],svg[lets-icons-critical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M21 16a9 9 0 0 0-18 0h5.005a3.995 3.995 0 0 1 7.99 0zm-9-9v5m6.364-2.364L15 13M5.636 9.636L9 13"></svg:path>`,
})
export class LetsIconsCriticalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDarhboardIcon],svg[lets-icons-darhboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="6" height="6" x="4" y="4" rx="1"></svg:rect><svg:rect width="6" height="6" x="4" y="14" rx="1"></svg:rect><svg:rect width="6" height="6" x="14" y="14" rx="1"></svg:rect><svg:rect width="6" height="6" x="14" y="4" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsDarhboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDarhboardAltIcon],svg[lets-icons-darhboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="6" height="7" x="4" y="4" rx="1"></svg:rect><svg:rect width="6" height="5" x="4" y="15" rx="1"></svg:rect><svg:rect width="6" height="5" x="14" y="4" rx="1"></svg:rect><svg:rect width="6" height="7" x="14" y="13" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsDarhboardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDataBankIcon],svg[lets-icons-data-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M6 14h12a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6Z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M3 17c0-1.41 1.491-7.294 2.37-10.642c.22-.835.33-1.252.572-1.57c.212-.278.5-.5.823-.635C7.134 4 7.57 4 8.445 4h7.11c.875 0 1.311 0 1.68.153c.323.135.611.357.823.635c.242.318.352.735.571 1.57C19.51 9.706 21 15.59 21 17"></svg:path><svg:rect width="2" height="2" x="17" y="16" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="2" x="5" y="16" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsDataBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDatabaseIcon],svg[lets-icons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:ellipse cx="12" cy="7" rx="7" ry="3"></svg:ellipse><svg:path stroke-linecap="square" d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"></svg:path><svg:path d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"></svg:path></svg:g>`,
})
export class LetsIconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDatabaseDuotoneIcon],svg[lets-icons-database-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M5 8a12.04 12.04 0 0 0 14 0v10a14.11 14.11 0 0 1-14 0z"></svg:path><svg:ellipse cx="12" cy="7" stroke="currentColor" stroke-width="1.2" rx="7" ry="3"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="1.2" d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"></svg:path></svg:g>`,
})
export class LetsIconsDatabaseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDatabaseFillIcon],svg[lets-icons-database-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 9.704c-.454.36-.95.664-1.449.913C16.71 11.538 14.352 12 12 12s-4.71-.462-6.551-1.383A8.4 8.4 0 0 1 4 9.704V12c0 1.057.838 2.076 2.343 2.828C7.843 15.578 9.878 16 12 16s4.157-.421 5.657-1.172C19.162 14.076 20 13.058 20 12zm0 6a8.4 8.4 0 0 1-1.449.913C16.71 17.538 14.352 18 12 18s-4.71-.462-6.551-1.383c-.5-.25-.995-.554-1.449-.913V18c0 2.21 3.582 4 8 4s8-1.79 8-4zM20 6c0-2.21-3.582-4-8-4S4 3.79 4 6c0 1.058.838 2.076 2.343 2.828C7.843 9.578 9.878 10 12 10s4.157-.421 5.657-1.172C19.162 8.076 20 7.058 20 6" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDatabaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDatabaseLightIcon],svg[lets-icons-database-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:ellipse cx="12" cy="7" rx="7" ry="3"></svg:ellipse><svg:path stroke-linecap="square" d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"></svg:path><svg:path d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"></svg:path></svg:g>`,
})
export class LetsIconsDatabaseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateFillIcon],svg[lets-icons-date-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsDateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateRangeIcon],svg[lets-icons-date-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:path fill="currentColor" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path><svg:rect width="4" height="2" x="7" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="7" y="16" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="16" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsDateRangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateRangeDuotoneIcon],svg[lets-icons-date-range-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" stroke-width="1.2" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 3v3m10-3v3"></svg:path><svg:rect width="4" height="2" x="7" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="7" y="16" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="16" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsDateRangeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateRangeDuotoneLineIcon],svg[lets-icons-date-range-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDateRangeDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" stroke-linecap="round" d="M17 3v4M7 3v4"></svg:path><svg:path stroke="#fff" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v1H3z"></svg:path><svg:rect width="18" height="15" x="3" y="6" stroke="#fff" rx="2"></svg:rect><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M6 15h4m4 0h4M6 18h4m4 0h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDateRangeDuotoneLine0)"></svg:path>`,
})
export class LetsIconsDateRangeDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateRangeFillIcon],svg[lets-icons-date-range-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 18c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13zm5-3c0-.471 0-.707.146-.854C7.293 14 7.53 14 8 14h2c.471 0 .707 0 .854.146c.146.147.146.383.146.854s0 .707-.146.854C10.707 16 10.47 16 10 16H8c-.471 0-.707 0-.854-.146C7 15.707 7 15.47 7 15m.146 3.146C7 18.293 7 18.53 7 19s0 .707.146.854C7.293 20 7.53 20 8 20h2c.471 0 .707 0 .854-.146C11 19.707 11 19.47 11 19s0-.707-.146-.854C10.707 18 10.47 18 10 18H8c-.471 0-.707 0-.854.146M13 15c0-.471 0-.707.146-.854C13.293 14 13.53 14 14 14h2c.471 0 .707 0 .854.146c.146.147.146.383.146.854s0 .707-.146.854C16.707 16 16.47 16 16 16h-2c-.471 0-.707 0-.854-.146C13 15.707 13 15.47 13 15m.146 3.146C13 18.293 13 18.53 13 19s0 .707.146.854c.147.146.383.146.854.146h2c.471 0 .707 0 .854-.146C17 19.707 17 19.47 17 19s0-.707-.146-.854C16.707 18 16.47 18 16 18h-2c-.471 0-.707 0-.854.146" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsDateRangeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateRangeLightIcon],svg[lets-icons-date-range-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M7 3v3m10-3v3"></svg:path><svg:rect width="4" height="2" x="7" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="7" y="16" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="16" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsDateRangeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateTodayIcon],svg[lets-icons-date-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:path fill="currentColor" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsDateTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateTodayDuotoneIcon],svg[lets-icons-date-today-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M7 4.018c-.54.023-.928.074-1.271.19a4 4 0 0 0-2.522 2.52C3 7.349 3 8.115 3 9.649c0 .095 0 .143.013.181a.25.25 0 0 0 .158.158c.038.013.086.013.182.013h17.294c.096 0 .144 0 .182-.013a.25.25 0 0 0 .158-.158C21 9.791 21 9.743 21 9.647c0-1.533 0-2.3-.207-2.918a4 4 0 0 0-2.522-2.522c-.343-.115-.732-.166-1.271-.189V6.5a1.5 1.5 0 0 1-3 0V4h-4v2.5a1.5 1.5 0 1 1-3 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="M3 11.5c0-.236 0-.354.073-.427S3.264 11 3.5 11h17c.236 0 .354 0 .427.073s.073.191.073.427v.5c0 3.771 0 5.657-1.172 6.828S16.771 20 13 20h-2c-3.771 0-5.657 0-6.828-1.172S3 15.771 3 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 2.5v4m7-4v4"></svg:path></svg:g>`,
})
export class LetsIconsDateTodayDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateTodayDuotoneLineIcon],svg[lets-icons-date-today-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDateTodayDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v1H3z"></svg:path><svg:rect width="18" height="15" x="3" y="6" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M7 3v5m10-5v5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDateTodayDuotoneLine0)"></svg:path>`,
})
export class LetsIconsDateTodayDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateTodayLightIcon],svg[lets-icons-date-today-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsDateTodayLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltIcon],svg[lets-icons-del-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:ellipse cx="12" cy="7" rx="7" ry="3"></svg:ellipse><svg:path d="m5 7l1.996 10.98a.1.1 0 0 0 .019.035v0a7.05 7.05 0 0 0 9.97 0v0a.1.1 0 0 0 .019-.036L19 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltDuotoneIcon],svg[lets-icons-del-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="7" fill="currentColor" fill-opacity=".25" rx="7" ry="3"></svg:ellipse><svg:path fill="currentColor" fill-rule="evenodd" d="M12 10c3.336 0 6.127-1 6.83-2.34c.01-.02.06-.006.057.018l-1.775 10.647a1.8 1.8 0 0 1-.646 1.102a7.15 7.15 0 0 1-8.932 0a1.8 1.8 0 0 1-.646-1.102L5.113 7.678c-.004-.024.046-.039.058-.017C5.873 9 8.664 10 12 10" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDelAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltDuotoneLineIcon],svg[lets-icons-del-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m17.004 17.98l1.711-9.415c.117-.642.176-.963.013-1.049s-.394.145-.857.604l-.886.88L12 10L6.996 9l-.863-.865c-.465-.465-.697-.698-.86-.612c-.162.085-.104.408.014 1.054l1.71 9.402a.1.1 0 0 0 .018.036a7.05 7.05 0 0 0 9.97 0a.1.1 0 0 0 .019-.036"></svg:path><svg:ellipse cx="12" cy="7" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" rx="7" ry="3"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m5 7l1.996 10.98a.1.1 0 0 0 .019.035v0a7.05 7.05 0 0 0 9.97 0v0a.1.1 0 0 0 .019-.036L19 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltFillIcon],svg[lets-icons-del-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="12" cy="7" stroke="currentColor" stroke-linecap="round" stroke-width="2" rx="7" ry="3"></svg:ellipse><svg:path fill="currentColor" d="M7 18L5 7l3 3h8l3-3l-2 11l-3 2h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 7l1.996 10.98a.1.1 0 0 0 .019.035v0a7.05 7.05 0 0 0 9.97 0v0a.1.1 0 0 0 .019-.036L19 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltLightIcon],svg[lets-icons-del-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M18.5 7c0 1.5-3 2.5-6.5 2.5S5.5 8.5 5.5 7s3-2.5 6.5-2.5s6.5 1 6.5 2.5Z"></svg:path><svg:path d="m5.5 7l1.813 10.425a1.83 1.83 0 0 0 1.222 1.42v0c2.25.75 4.68.75 6.93 0v0a1.83 1.83 0 0 0 1.222-1.42L18.5 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDellIcon],svg[lets-icons-dell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 15l6-6m0 6L9 9"></svg:path></svg:g>`,
})
export class LetsIconsDellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDellDuotoneIcon],svg[lets-icons-dell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m9 15l6-6m0 6L9 9"></svg:path></svg:g>`,
})
export class LetsIconsDellDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDellDuotoneLineIcon],svg[lets-icons-dell-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDellDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" d="m9 15l6-6m0 6L9 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDellDuotoneLine0)"></svg:path>`,
})
export class LetsIconsDellDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDellFillIcon],svg[lets-icons-dell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 1.414l-3.293 3.293l-1.414-1.414L10.586 12L7.293 8.707l1.414-1.414L12 10.586l3.293-3.293l1.414 1.414L13.414 12l3.293 3.293l-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDellLightIcon],svg[lets-icons-dell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 15l6-6m0 6L9 9"></svg:path></svg:g>`,
})
export class LetsIconsDellLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskIcon],svg[lets-icons-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="16" height="16" x="4" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M16 2v4c0 .943 0 1.414-.293 1.707S14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293S8 6.943 8 6V2m1 12h6"></svg:path></svg:g>`,
})
export class LetsIconsDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskAltIcon],svg[lets-icons-desk-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M15.5 5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C19 6.393 19 7.096 19 8.5V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C6.393 5 7.096 5 8.5 5"></svg:path><svg:path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M9 12h6m-6 4h4"></svg:path></svg:g>`,
})
export class LetsIconsDeskAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskAltDuotoneIcon],svg[lets-icons-desk-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="12" height="15" x="6" y="5" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 9.5h5m-5 3h5m-5 3h5"></svg:path><svg:path fill="currentColor" d="M8 4.87c0-.48.39-.87.87-.87h6.26c.48 0 .87.39.87.87a.13.13 0 0 1-.13.13h-.37a.5.5 0 0 0-.5.5v.35a.15.15 0 0 1-.15.15h-5.7A.15.15 0 0 1 9 5.85V5.5a.5.5 0 0 0-.5-.5h-.37A.13.13 0 0 1 8 4.87"></svg:path></svg:g>`,
})
export class LetsIconsDeskAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskAltDuotoneLineIcon],svg[lets-icons-desk-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M19 18V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552a1.7 1.7 0 0 0-.616-.243c-.745-.153-1.117-.229-1.66-.023s-.873.647-1.535 1.529L14 7h-4l-.3-.4c-.662-.882-.993-1.323-1.535-1.53c-.543-.205-.915-.129-1.66.024c-.243.05-.441.126-.616.243a2 2 0 0 0-.552.552C5 6.393 5 7.096 5 8.5V18c0 1.886 0 2.828.586 3.414S7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586S19 19.886 19 18"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M15.5 5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C19 6.393 19 7.096 19 8.5V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C6.393 5 7.096 5 8.5 5"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M9 12h6m-6 4h4"></svg:path></svg:g>`,
})
export class LetsIconsDeskAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskAltFillIcon],svg[lets-icons-desk-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3c-1.079.005-1.67.043-2.111.337a2 2 0 0 0-.552.552C4 6.393 4 7.096 4 8.5V18c0 1.886 0 2.828.586 3.414S6.114 22 8 22h8c1.886 0 2.828 0 3.414-.586S20 19.886 20 18V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.44-.294-1.032-.332-2.111-.336V5a3 3 0 0 0-3-3zm0 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-1 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDeskAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskAltLightIcon],svg[lets-icons-desk-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M15.5 5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C19 6.393 19 7.096 19 8.5V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C6.393 5 7.096 5 8.5 5"></svg:path><svg:path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M9 12h6m-6 4h4"></svg:path></svg:g>`,
})
export class LetsIconsDeskAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskDuotoneIcon],svg[lets-icons-desk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M8 5.309c0-.144 0-.216-.045-.26c-.046-.044-.117-.042-.26-.038c-1.053.03-1.678.143-2.11.575C5 6.172 5 7.114 5 9v7c0 1.886 0 2.828.586 3.414S7.114 20 9 20h6c1.886 0 2.828 0 3.414-.586S19 17.886 19 16V9c0-1.886 0-2.828-.586-3.414c-.431-.432-1.056-.545-2.11-.575c-.142-.004-.213-.006-.258.038s-.046.116-.046.26V6.5a1.5 1.5 0 0 1-3 0V5.3c0-.141 0-.212-.044-.256S12.841 5 12.7 5h-1.4c-.141 0-.212 0-.256.044S11 5.159 11 5.3v1.2a1.5 1.5 0 0 1-3 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 3.5v3m5-3v3m-5 4h5m-5 3h5m-5 3h5"></svg:path></svg:g>`,
})
export class LetsIconsDeskDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskDuotoneLineIcon],svg[lets-icons-desk-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 7.81c0-.754 0-1.13.1-1.435A2 2 0 0 1 5.375 5.1C5.679 5 6.056 5 6.81 5c.324 0 .486 0 .624.04a1 1 0 0 1 .62.525c.062.13.088.29.142.609l.054.326c.105.632.158.947.348 1.162a1 1 0 0 0 .219.186C9.06 8 9.38 8 10.02 8h3.958c.64 0 .96 0 1.204-.152q.123-.077.22-.186c.19-.215.242-.53.347-1.162l.054-.326c.054-.32.08-.48.143-.609a1 1 0 0 1 .62-.525c.137-.04.299-.04.623-.04c.754 0 1.13 0 1.435.1A2 2 0 0 1 19.9 6.375c.1.304.1.681.1 1.435V17c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586S4 18.886 4 17z"></svg:path><svg:rect width="16" height="16" x="4" y="5" stroke="currentColor" stroke-width="1.2" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M16 2v4c0 .943 0 1.414-.293 1.707S14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293S8 6.943 8 6V2m1 12h6"></svg:path></svg:g>`,
})
export class LetsIconsDeskDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskFillIcon],svg[lets-icons-desk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 3v3M8 3v3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 4h-4v2a2 2 0 1 1-4 0V4.076c-.975.096-1.631.313-2.121.803C3 5.757 3 7.172 3 10v5c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-5c0-2.828 0-4.243-.879-5.121c-.49-.49-1.146-.707-2.121-.803V6a2 2 0 1 1-4 0zm-7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDeskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskLightIcon],svg[lets-icons-desk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="16" height="16" x="4" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M16 2v4c0 .943 0 1.414-.293 1.707S14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293S8 6.943 8 6V2m1 12h6"></svg:path></svg:g>`,
})
export class LetsIconsDeskLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDesktopIcon],svg[lets-icons-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 8c0-.971.002-1.599.064-2.061c.059-.434.153-.57.229-.646s.212-.17.646-.229C5.4 5.002 6.029 5 7 5h10c.971 0 1.599.002 2.061.064c.434.059.57.153.646.229s.17.212.229.646C19.998 6.4 20 7.029 20 8v8H4zm-.333 8C2.747 16 2 16.746 2 17.667A2.333 2.333 0 0 0 4.333 20h15.334A2.333 2.333 0 0 0 22 17.667c0-.92-.746-1.667-1.667-1.667z"></svg:path>`,
})
export class LetsIconsDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDesktopLightIcon],svg[lets-icons-desktop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 8c0-.957.001-1.624.069-2.128c.066-.49.186-.748.37-.933c.185-.184.444-.304.933-.37C5.376 4.5 6.043 4.5 7 4.5h10c.957 0 1.624.001 2.128.069c.49.066.748.186.933.37c.184.185.305.444.37.933c.068.504.069 1.171.069 2.128v8.5h-17zm.167 8.5c-.645 0-1.167.522-1.167 1.167c0 1.012.82 1.833 1.833 1.833h15.334c1.012 0 1.833-.82 1.833-1.833c0-.645-.522-1.167-1.167-1.167z"></svg:path>`,
})
export class LetsIconsDesktopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondIcon],svg[lets-icons-dimond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m4.874 12.874l5.712 5.712c.666.667 1 1 1.414 1s.748-.333 1.414-1l5.712-5.712c.425-.425.638-.638.703-.914c.065-.277-.03-.562-.22-1.133l-.697-2.092c-.44-1.32-.66-1.98-1.184-2.357S16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378c-.525.377-.745 1.037-1.185 2.357l-.697 2.092c-.19.57-.285.856-.22 1.133c.065.276.278.489.703.914Z"></svg:path>`,
})
export class LetsIconsDimondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondAltIcon],svg[lets-icons-dimond-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874zm0 0l3.5-11M12 20L8.5 9m11 1l-4-1m0 0L14 5m1.5 4h-7M10 5L8.5 9m0 0l-4 1"></svg:path>`,
})
export class LetsIconsDimondAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondAltDuotoneIcon],svg[lets-icons-dimond-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874zm0 0l3.5-11M12 20L8.5 9m11 1l-4-1m0 0L14 5m1.5 4h-7M10 5L8.5 9m0 0l-4 1"></svg:path></svg:g>`,
})
export class LetsIconsDimondAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondAltFillIcon],svg[lets-icons-dimond-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.608 3h-.59c-1.453 0-2.18 0-2.714.403c-.535.404-.734 1.102-1.133 2.498L3.571 8H7.67zm-5.49 6.924l.008.05c.05.24.212.44.537.836l5.745 7.023L7.695 10H3.5a1 1 0 0 1-.383-.076m11.474 7.909l5.745-7.023c.325-.397.487-.595.537-.836l.009-.05A1 1 0 0 1 20.5 10h-4.195zM20.428 8l-.6-2.099c-.398-1.396-.598-2.094-1.132-2.498C18.16 3 17.435 3 15.983 3h-.59l.937 5zm-7.07-5h-2.716l-.937 5h4.59zM12 20.32L9.742 10h4.516z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDimondAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondAltLightIcon],svg[lets-icons-dimond-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874zm0 0l3.5-11M12 20L8.5 9m11 1l-4-1m0 0L14 5m1.5 4h-7M10 5L8.5 9m0 0l-4 1"></svg:path>`,
})
export class LetsIconsDimondAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondDuotoneIcon],svg[lets-icons-dimond-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="m4.874 12.874l5.712 5.712c.666.667 1 1 1.414 1s.748-.333 1.414-1l5.712-5.712c.425-.425.638-.638.703-.914c.065-.277-.03-.562-.22-1.133l-.697-2.092c-.44-1.32-.66-1.98-1.184-2.357S16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378c-.525.377-.745 1.037-1.185 2.357l-.697 2.092c-.19.57-.285.856-.22 1.133c.065.276.278.489.703.914Z"></svg:path>`,
})
export class LetsIconsDimondDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondFillIcon],svg[lets-icons-dimond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.748 13.748l4.838 4.838c.666.667 1 1 1.414 1s.748-.333 1.414-1l4.838-4.838c.85-.85 1.276-1.276 1.406-1.829s-.06-1.123-.44-2.264l-.306-.92c-.44-1.32-.66-1.98-1.184-2.357S16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378c-.525.377-.745 1.037-1.185 2.357l-.306.92c-.38 1.14-.57 1.711-.44 2.264s.556.979 1.406 1.83"></svg:path>`,
})
export class LetsIconsDimondFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondLightIcon],svg[lets-icons-dimond-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m4.874 12.874l5.712 5.712c.666.667 1 1 1.414 1s.748-.333 1.414-1l5.712-5.712c.425-.425.638-.638.703-.914c.065-.277-.03-.562-.22-1.133l-.697-2.092c-.44-1.32-.66-1.98-1.184-2.357S16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378c-.525.377-.745 1.037-1.185 2.357l-.697 2.092c-.19.57-.285.856-.22 1.133c.065.276.278.489.703.914Z"></svg:path>`,
})
export class LetsIconsDimondLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionIcon],svg[lets-icons-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m7 8l4.121 4.121A3 3 0 0 1 12 14.243V16M7 8h3M7 8v3"></svg:path><svg:path d="m17 8l-4.121 4.121A3 3 0 0 0 12 14.243V16m5-8h-3m3 0v3"></svg:path><svg:path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"></svg:path></svg:g>`,
})
export class LetsIconsDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAltIcon],svg[lets-icons-direction-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M17.5 9H15a3 3 0 0 0-3 3v4m5.5-7L16 7m1.5 2L16 11M6.5 9H9a3 3 0 0 1 3 3v4M6.5 9L8 7M6.5 9L8 11"></svg:path><svg:path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt2Icon],svg[lets-icons-direction-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m7 9l4.121 4.121A3 3 0 0 1 12 15.243V17M7 9h3M7 9v3"></svg:path><svg:path d="m17 9l-4.121 4.121A3 3 0 0 0 12 15.243V20m5-11h-3m3 0v3"></svg:path><svg:path d="M16 19h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 5 17.88 5 16.2 5H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.28 3 8.12 3 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 19 6.12 19 7.8 19H8"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt2DuotoneIcon],svg[lets-icons-direction-alt-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 9l4.121 4.121A3 3 0 0 1 12 15.243M7 9h3M7 9v3m5 3.243V17m0-1.757V20m0-4.757a3 3 0 0 1 .879-2.122L17 9m0 0h-3m3 0v3"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt2DuotoneLineIcon],svg[lets-icons-direction-alt-2-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDirectionAlt2DuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="silver" stroke-opacity=".25" d="M16 18.5h2.3c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 5.5 19.42 5.5 18.3 5.5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 7.02 2.5 7.58 2.5 8.7v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218H8"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m6.5 9.5l4.621 4.621A3 3 0 0 1 12 16.243V18M6.5 9.5h2m-2 0v2"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m17.5 9.5l-4.621 4.621A3 3 0 0 0 12 16.243V20m5.5-10.5h-2m2 0v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDirectionAlt2DuotoneLine0)"></svg:path>`,
})
export class LetsIconsDirectionAlt2DuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt2FillIcon],svg[lets-icons-direction-alt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.327 5.638C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20H11v-4.757a2 2 0 0 0-.586-1.415l-1.261-1.26L8 11.413V12a1 1 0 1 1-2 0V8h4a1 1 0 1 1 0 2h-.586l2.414 2.414q.09.09.172.183q.082-.094.172-.183L14.586 10H14a1 1 0 1 1 0-2h4v4a1 1 0 1 1-2 0v-.586l-2.414 2.414A2 2 0 0 0 13 15.243V20h4.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDirectionAlt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt2LightIcon],svg[lets-icons-direction-alt-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M16 18.5h2.3c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 5.5 19.42 5.5 18.3 5.5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 7.02 2.5 7.58 2.5 8.7v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218H8"></svg:path><svg:path stroke-linejoin="round" d="m6.5 9.5l4.621 4.621A3 3 0 0 1 12 16.243V18M6.5 9.5h2m-2 0v2"></svg:path><svg:path stroke-linejoin="round" d="m17.5 9.5l-4.621 4.621A3 3 0 0 0 12 16.243V20m5.5-10.5h-2m2 0v2"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt3Icon],svg[lets-icons-direction-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="m17 13l-4.121 4.121A3 3 0 0 0 12 19.243V20m5-7h-2l2 2z"></svg:path><svg:path stroke-linejoin="round" d="m7 13l4.121 4.121A3 3 0 0 1 12 19.243V20m-5-7h2l-2 2zm5-4.5V20m0-11.5l1.5 1.5h-3z"></svg:path><svg:path d="M16 19h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 5 17.88 5 16.2 5H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.28 3 8.12 3 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 19 6.12 19 7.8 19H8"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt3DuotoneIcon],svg[lets-icons-direction-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 14l-3.121 3.121A3 3 0 0 0 12 19.243M16 14l1-1m-1 1l1 1v-2m-1 1l-1-1h2m-5 6.243V20V10m0 9.243a3 3 0 0 0-.879-2.122L8 14m0 0l-1-1m1 1l1-1H7m1 1l-1 1v-2m5-3V8.5m0 1.5h1.5L12 8.5m0 1.5h-1.5L12 8.5"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt3DuotoneLineIcon],svg[lets-icons-direction-alt-3-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDirectionAlt3DuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="silver" stroke-opacity=".25" d="M16 18.5h2.3c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 5.5 19.42 5.5 18.3 5.5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 7.02 2.5 7.58 2.5 8.7v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218H8"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m6.5 12.5l4.621 4.621A3 3 0 0 1 12 19.243V20.5m-5.5-8h2m-2 0v2"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m17.5 12.5l-4.621 4.621A3 3 0 0 0 12 19.243V20.5m5.5-8h-2m2 0v2m-5.5-6V19m0-10.5L10.5 10M12 8.5l1.5 1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDirectionAlt3DuotoneLine0)"></svg:path>`,
})
export class LetsIconsDirectionAlt3DuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt3FillIcon],svg[lets-icons-direction-alt-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.327 5.638C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20H11v-.757a2 2 0 0 0-.586-1.415L8 15.414l-.293.293A1 1 0 0 1 6 15v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 .707 1.707L9.414 14L11 15.586V11h-.5a1 1 0 0 1-.707-1.707l1.5-1.5a1 1 0 0 1 1.414 0l1.5 1.5A1 1 0 0 1 13.5 11H13v4.586L14.586 14l-.293-.293A1 1 0 0 1 15 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1.707.707L16 15.414l-2.414 2.414A2 2 0 0 0 13 19.24V20h4.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDirectionAlt3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt3LightIcon],svg[lets-icons-direction-alt-3-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M16 18.5h2.3c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 5.5 19.42 5.5 18.3 5.5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 7.02 2.5 7.58 2.5 8.7v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218H8"></svg:path><svg:path stroke-linejoin="round" d="m6.5 12.5l4.621 4.621A3 3 0 0 1 12 19.243V20.5m-5.5-8h2m-2 0v2"></svg:path><svg:path stroke-linejoin="round" d="m17.5 12.5l-4.621 4.621A3 3 0 0 0 12 19.243V20.5m5.5-8h-2m2 0v2m-5.5-6V19m0-10.5L10.5 10M12 8.5l1.5 1.5"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt3LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAltDuotoneIcon],svg[lets-icons-direction-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.5 9H15a3 3 0 0 0-3 3m5.5-3L16 7m1.5 2L16 11m-4 1v5m0-5a3 3 0 0 0-3-3H6.5m0 0L8 7M6.5 9L8 11"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAltDuotoneLineIcon],svg[lets-icons-direction-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDirectionAltDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="silver" stroke-opacity=".25" d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M6.5 9.5H9a3 3 0 0 1 3 3V17M6.5 9.5L8 8M6.5 9.5L8 11m9.5-1.5H15a3 3 0 0 0-3 3V17m5.5-7.5L16 8m1.5 1.5L16 11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDirectionAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsDirectionAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAltFillIcon],svg[lets-icons-direction-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.327 4.638C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M8.8 7.6a1 1 0 1 0-1.6-1.2l-1.5 2l-.45.6l.45.6l1.5 2a1 1 0 1 0 1.6-1.2l-.3-.4H9a2 2 0 0 1 2 2v5a1 1 0 1 0 2 0v-5a2 2 0 0 1 2-2h.5l-.3.4a1 1 0 0 0 1.6 1.2l1.5-2l.45-.6l-.45-.6l-1.5-2a1 1 0 0 0-1.6 1.2l.3.4H15a4 4 0 0 0-3 1.354A4 4 0 0 0 9 8h-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDirectionAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAltLightIcon],svg[lets-icons-direction-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7z"></svg:path><svg:path stroke-linejoin="round" d="M6.5 9.5H9a3 3 0 0 1 3 3V17M6.5 9.5L8 8M6.5 9.5L8 11m9.5-1.5H15a3 3 0 0 0-3 3V17m5.5-7.5L16 8m1.5 1.5L16 11"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionDuotoneIcon],svg[lets-icons-direction-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 8l4.121 4.121A3 3 0 0 1 12 14.243M7 8h3M7 8v3m5 3.243V18m0-3.757a3 3 0 0 1 .879-2.122L17 8m0 0h-3m3 0v3"></svg:path></svg:g>`,
})
export class LetsIconsDirectionDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionDuotoneLineIcon],svg[lets-icons-direction-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDirectionDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="silver" stroke-opacity=".25" d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m6.5 7.5l4.621 4.621A3 3 0 0 1 12 14.243V16M6.5 7.5h2m-2 0v2"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m17.5 7.5l-4.621 4.621A3 3 0 0 0 12 14.243V16m5.5-8.5h-2m2 0v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDirectionDuotoneLine0)"></svg:path>`,
})
export class LetsIconsDirectionDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionFillIcon],svg[lets-icons-direction-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.327 4.638C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M7 7H6v4a1 1 0 1 0 2 0v-.586l2.414 2.414A2 2 0 0 1 11 14.243V18a1 1 0 1 0 2 0v-3.757a2 2 0 0 1 .586-1.415L16 10.414V11a1 1 0 1 0 2 0V7h-4a1 1 0 1 0 0 2h.586l-2.414 2.414q-.09.09-.172.183a4 4 0 0 0-.172-.183L9.414 9H10a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDirectionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionLightIcon],svg[lets-icons-direction-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7z"></svg:path><svg:path stroke-linejoin="round" d="m6.5 7.5l4.621 4.621A3 3 0 0 1 12 14.243V16M6.5 7.5h2m-2 0v2"></svg:path><svg:path stroke-linejoin="round" d="m17.5 7.5l-4.621 4.621A3 3 0 0 0 12 14.243V16m5.5-8.5h-2m2 0v2"></svg:path></svg:g>`,
})
export class LetsIconsDirectionLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDnaIcon],svg[lets-icons-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M19 3s0 9-7 9s-7 9-7 9"></svg:path><svg:path stroke-linecap="round" d="M5 3s0 9 7 9s7 9 7 9M18 6H6m12 12H6"></svg:path><svg:path d="M17 15H7"></svg:path><svg:path stroke-linecap="round" d="M17 9H7"></svg:path></svg:g>`,
})
export class LetsIconsDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDnaLightIcon],svg[lets-icons-dna-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="m19.5 3.5l-.282 2.54A7.26 7.26 0 0 1 12 12.5v0c-3.7 0-6.81 2.782-7.218 6.46L4.5 21.5"></svg:path><svg:path stroke-linecap="round" d="m4.5 3.5l.282 2.54A7.25 7.25 0 0 0 7.8 11.163M19.5 21.5l-.282-2.54A7.26 7.26 0 0 0 12 12.5m7-6H5m14 12H5"></svg:path><svg:path d="M18 15.5H6"></svg:path><svg:path stroke-linecap="round" d="M17.5 9.5h-11"></svg:path></svg:g>`,
})
export class LetsIconsDnaLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneIcon],svg[lets-icons-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m5 14l4 3l9-11"></svg:path>`,
})
export class LetsIconsDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllAltRoundIcon],svg[lets-icons-done-all-alt-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m2 14l3.233 2.425a1 1 0 0 0 1.374-.167L15 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m9.874 15.78l1.729 1.383a2 2 0 0 0 2.797-.295l8.374-10.235a1 1 0 0 0-1.548-1.266L12.852 15.6l-1.711-1.369z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllAltRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllAltRoundLightIcon],svg[lets-icons-done-all-alt-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="m2 14l3.233 2.425a1 1 0 0 0 1.374-.167L15 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m10.191 15.393l1.724 1.38a1.5 1.5 0 0 0 2.098-.222l8.374-10.234a.5.5 0 0 0-.774-.634l-8.374 10.235a.5.5 0 0 1-.699.074l-1.716-1.373z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllAltRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllRoundIcon],svg[lets-icons-done-all-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m11.19 12.237l4.584-5.604a1 1 0 0 0-1.548-1.266l-4.573 5.59zm-3.167 3.87l-1.537-1.28l-.653.798L2.6 13.2a1 1 0 0 0-1.2 1.6l3.233 2.425a2 2 0 0 0 2.748-.334z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllRoundDuotoneIcon],svg[lets-icons-done-all-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="m10.565 12.368l4.9-5.988a.6.6 0 0 0-.93-.76L9.644 11.6zm-2.533 3.096l-.922-.769l-.967 1.183a.4.4 0 0 1-.55.067L2.36 13.52a.6.6 0 0 0-.72.96l3.233 2.425a1.6 1.6 0 0 0 2.198-.267z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllRoundDuotoneLineIcon],svg[lets-icons-done-all-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="m10.565 12.368l4.9-5.988a.6.6 0 0 0-.93-.76L9.644 11.6zm-2.533 3.096l-.922-.769l-.967 1.183a.4.4 0 0 1-.55.067L2.36 13.52a.6.6 0 0 0-.72.96l3.233 2.425a1.6 1.6 0 0 0 2.198-.267z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllRoundLightIcon],svg[lets-icons-done-all-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m10.805 11.917l4.582-5.6a.5.5 0 0 0-.774-.634l-4.576 5.594zm-3.166 3.87l-.768-.64l-.65.794a.5.5 0 0 1-.688.084L2.3 13.6a.5.5 0 1 0-.6.8l3.233 2.425a1.5 1.5 0 0 0 2.061-.25z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneDuotoneIcon],svg[lets-icons-done-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m8.5 11l2.894 2.894a.15.15 0 0 0 .212 0L19.5 6"></svg:path></svg:g>`,
})
export class LetsIconsDoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneDuotoneLineIcon],svg[lets-icons-done-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="10" cy="14" r="7" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m6 13l4 3l7-9"></svg:path></svg:g>`,
})
export class LetsIconsDoneDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneFillIcon],svg[lets-icons-done-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m19.548 7.267l.633-.774l-.774-.634l-1.548-1.266l-.774-.633l-.633.774l-7.786 9.516L6.2 12.4l-.8-.6l-.6.8l-1.2 1.6l-.6.8l.8.6l4.767 3.575l.767.575l.607-.741z"></svg:path>`,
})
export class LetsIconsDoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneLightIcon],svg[lets-icons-done-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m5 14l4 3l9-11"></svg:path>`,
})
export class LetsIconsDoneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundIcon],svg[lets-icons-done-ring-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m9 10l3.258 2.444a1 1 0 0 0 1.353-.142L20 5"></svg:path><svg:path d="M21 12a9 9 0 1 1-6.67-8.693"></svg:path></svg:g>`,
})
export class LetsIconsDoneRingRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundDuotoneIcon],svg[lets-icons-done-ring-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m8.5 11l2.894 2.894a.15.15 0 0 0 .212 0L19.5 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M19.358 10.547a7.5 7.5 0 1 1-3.608-5.042"></svg:path></svg:g>`,
})
export class LetsIconsDoneRingRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundDuotoneLineIcon],svg[lets-icons-done-ring-round-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m9 10l3.258 2.444a1 1 0 0 0 1.353-.142L20 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M21 12a9 9 0 1 1-6.67-8.693"></svg:path></svg:g>`,
})
export class LetsIconsDoneRingRoundDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundFillIcon],svg[lets-icons-done-ring-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 0 0 7.51-13.961l-7.155 7.95a2 2 0 0 1-2.687.262L6.4 12.8a1 1 0 0 1 1.2-1.6l3.268 2.451l7.346-8.161A9 9 0 1 0 12 21" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsDoneRingRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
