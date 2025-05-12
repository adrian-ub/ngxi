import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleBoldDuotoneIcon],svg[solar-clock-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClockCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleLineDuotoneIcon],svg[solar-clock-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path></svg:g>`,
})
export class SolarClockCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockSquareBoldDuotoneIcon],svg[solar-clock-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClockSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockSquareLineDuotoneIcon],svg[solar-clock-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClockSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleBoldDuotoneIcon],svg[solar-close-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarCloseCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleLineDuotoneIcon],svg[solar-close-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarCloseCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseSquareBoldDuotoneIcon],svg[solar-close-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarCloseSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseSquareLineDuotoneIcon],svg[solar-close-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarCloseSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloset2BoldDuotoneIcon],svg[solar-closet-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h2zM9 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 20h-2V2h2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.75 9a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarCloset2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloset2LineDuotoneIcon],svg[solar-closet-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 20V2"></svg:path><svg:path stroke-linecap="round" d="M15 9v4M9 9v4" opacity=".5"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path></svg:g>`,
})
export class SolarCloset2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClosetBoldDuotoneIcon],svg[solar-closet-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.025 15.75c.067 2.021.303 3.235 1.146 4.078a3.1 3.1 0 0 0 1.079.697V22a.75.75 0 0 0 1.5 0v-1.129C6.82 21 8.193 21 10 21h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-1.475a3.1 3.1 0 0 0 1.078-.697c.808-.808 1.059-1.956 1.137-3.828l.009-.25c.002-.392.026-2.308.026-2.75v-3c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-1.25v13.75zM6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0-10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 2h1.25v5.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2M2.002 8.75Q2 9.337 2 10v3c0 .442.024 2.358.025 2.75h9.225v-7z" opacity=".5"></svg:path>`,
})
export class SolarClosetBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClosetLineDuotoneIcon],svg[solar-closet-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-.5M5 22v-.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 21V2"></svg:path><svg:path stroke-linecap="round" d="M15 8v2" opacity=".5"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v3c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M2 8h10" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M2 15h20"></svg:path><svg:path stroke-linecap="round" d="M15 18h2M7 18h2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClosetLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoldDuotoneIcon],svg[solar-cloud-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 14.353C22 17.472 19.442 20 16.286 20h-5.787a7.5 7.5 0 0 1 7.487-11.853q.119.422.17.868C20.392 9.78 22 11.881 22 14.353" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20H10.5a7.5 7.5 0 0 1 7.487-11.853l-.047-.158C17.224 5.68 15.048 4 12.476 4"></svg:path>`,
})
export class SolarCloudBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltBoldDuotoneIcon],svg[solar-cloud-bolt-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 18C19.442 18 22 15.472 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.626 17.465l1.148-1.555c.743-1.005 1.114-1.507 1.46-1.4c.346.105.346.722.346 1.954v.116c0 .445 0 .667.142.807l.008.007c.145.136.376.136.838.136c.832 0 1.249 0 1.39.253l.006.012c.133.257-.108.583-.59 1.235l-1.148 1.555c-.743 1.005-1.114 1.508-1.46 1.401s-.346-.722-.346-1.955v-.116c0-.444 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137c-.832 0-1.248 0-1.39-.252l-.006-.013c-.133-.256.108-.583.59-1.235"></svg:path>`,
})
export class SolarCloudBoltBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltLineDuotoneIcon],svg[solar-cloud-bolt-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path d="m9.626 17.453l1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4s.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137c.832 0 1.249 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4c-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137c-.832 0-1.248 0-1.39-.252l-.006-.013c-.133-.256.108-.582.59-1.234Z"></svg:path></svg:g>`,
})
export class SolarCloudBoltLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltMinimalisticBoldDuotoneIcon],svg[solar-cloud-bolt-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17.91V18h-.214C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52c0-.852-.001-1.631-.087-2.267c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.646-.086-1.44-.086-2.306-.086h-.179c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.619.618-.844 1.37-.94 2.08c-.086.646-.086 1.44-.086 2.305" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m.916-5.75a.667.667 0 0 0-.943-.944L9.751 17.53a.667.667 0 0 0 .471 1.138h1.946l-1.084 1.084a.667.667 0 1 0 .943.943l2.222-2.223a.667.667 0 0 0-.471-1.138h-1.946z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudBoltMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltMinimalisticLineDuotoneIcon],svg[solar-cloud-bolt-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m10 22l4.286-3.692H10l4.286-3.693"></svg:path></svg:g>`,
})
export class SolarCloudBoltMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCheckBoldDuotoneIcon],svg[solar-cloud-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m2.25-4.862a.667.667 0 0 0-.944-.943l-2.195 2.195l-.417-.417a.667.667 0 0 0-.943.943l.889.889c.26.26.682.26.942 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCheckLineDuotoneIcon],svg[solar-cloud-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m10 19.8l1.143 1.2L14 18"></svg:path></svg:g>`,
})
export class SolarCloudCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCrossBoldDuotoneIcon],svg[solar-cloud-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.306-6.25a.667.667 0 0 0-.943.944L11.057 18l-1.306 1.306a.667.667 0 0 0 .943.943L12 18.943l1.306 1.306a.667.667 0 0 0 .943-.943L12.943 18l1.306-1.306a.667.667 0 0 0-.943-.943L12 17.057z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudCrossBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCrossLineDuotoneIcon],svg[solar-cloud-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path d="M13.5 17.5L12 19m0 0l-1.5 1.5M12 19l-1.5-1.5M12 19l1.5 1.5"></svg:path></svg:g>`,
})
export class SolarCloudCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudDownloadBoldDuotoneIcon],svg[solar-cloud-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m1.805-3.084l-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudDownloadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudDownloadLineDuotoneIcon],svg[solar-cloud-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 22v-6m0 6l2-2m-2 2l-2-2"></svg:path></svg:g>`,
})
export class SolarCloudDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudFileBoldDuotoneIcon],svg[solar-cloud-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 16.235C13 17.21 12.105 18 11 18H7.5c-.828 0-1.5-.593-1.5-1.323c0-.732.672-1.324 1.5-1.324q.15 0 .29.025a1.6 1.6 0 0 1-.123-.613c0-.975.895-1.765 2-1.765c1.029 0 1.876.685 1.987 1.567c.784.24 1.346.896 1.346 1.668M11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarCloudFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudFileLineDuotoneIcon],svg[solar-cloud-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a2 2 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765c0-.772-.562-1.429-1.346-1.668m-3.863.81a1.6 1.6 0 0 1-.124-.612c0-.975.895-1.765 2-1.765c1.029 0 1.876.685 1.987 1.567m-3.863.81q.297.054.542.199" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudLineDuotoneIcon],svg[solar-cloud-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 9.027a5.8 5.8 0 0 1 1.905-.32a5.8 5.8 0 0 1 1.87.308C20.392 9.78 22 11.881 22 14.353C22 17.472 19.442 20 16.286 20h-10C3.919 20 2 18.104 2 15.765s1.919-4.235 4.286-4.235q.427 0 .83.079c.565.11 1.09.329 1.55.634"></svg:path><svg:path d="M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudMinusBoldDuotoneIcon],svg[solar-cloud-minus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.778-3.333h3.556a.667.667 0 0 0 0-1.334h-3.556a.667.667 0 0 0 0 1.334" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudMinusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudMinusLineDuotoneIcon],svg[solar-cloud-minus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path d="M14 19h-4"></svg:path></svg:g>`,
})
export class SolarCloudMinusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudPlusBoldDuotoneIcon],svg[solar-cloud-plus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m.667-5.778a.667.667 0 0 0-1.334 0v1.111h-1.11a.667.667 0 0 0 0 1.334h1.11v1.11a.667.667 0 0 0 1.334 0v-1.11h1.11a.667.667 0 0 0 0-1.334h-1.11z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudPlusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudPlusLineDuotoneIcon],svg[solar-cloud-plus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path d="M14 19h-2m0 0h-2m2 0v-2m0 2v2"></svg:path></svg:g>`,
})
export class SolarCloudPlusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudRainBoldDuotoneIcon],svg[solar-cloud-rain-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.746.746 0 0 1-1.06 0a.746.746 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m3.44 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06"></svg:path><svg:path fill="currentColor" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"></svg:path>`,
})
export class SolarCloudRainBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudRainLineDuotoneIcon],svg[solar-cloud-rain-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 1.94-.99 3.653-2.5 4.67" opacity=".5"></svg:path><svg:path d="m17 19l-2 2m1-5.5l-2 2M12 20l-2 2m1.5-6.5l-2 2m-2 1.5l-2 2"></svg:path></svg:g>`,
})
export class SolarCloudRainLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallBoldDuotoneIcon],svg[solar-cloud-snowfall-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 14.25a.75.75 0 0 1 .75.75v2.163l1.874-1.081a.75.75 0 1 1 .75 1.299L13.5 18.462l1.876 1.083a.75.75 0 0 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083l-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"></svg:path>`,
})
export class SolarCloudSnowfallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallLineDuotoneIcon],svg[solar-cloud-snowfall-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path d="M12.001 15v7m-2.998-5.269l5.999 3.464m-.003-3.464L9 20.195"></svg:path></svg:g>`,
})
export class SolarCloudSnowfallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallMinimalisticBoldDuotoneIcon],svg[solar-cloud-snowfall-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M12 19a1 1 0 0 0 .781-.376a.997.997 0 0 0-.182-1.425a.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19m3-1.5a1 1 0 0 1-.781-.376A1 1 0 1 1 15 17.5m-6-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path fill="currentColor" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"></svg:path>`,
})
export class SolarCloudSnowfallMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallMinimalisticLineDuotoneIcon],svg[solar-cloud-snowfall-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 19.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudSnowfallMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStorageBoldDuotoneIcon],svg[solar-cloud-storage-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.94 14.44c-.44.439-.44 1.146-.44 2.56v2c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56v-2c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 12.353c0 2.88-2.181 5.256-5 5.603l-1.5.007V17c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44c-.44.439-.44 1.146-.44 2.56v.993L7 18h-.714C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353" opacity=".5"></svg:path>`,
})
export class SolarCloudStorageBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStorageLineDuotoneIcon],svg[solar-cloud-storage-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path d="M8.5 17c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 18h2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudStorageLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStormBoldDuotoneIcon],svg[solar-cloud-storm-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.854 14.51a.75.75 0 0 1-.079 1.058L8.02 17.943h2.266a.75.75 0 0 1 .49 1.318L6.49 22.953a.75.75 0 1 1-.98-1.136l2.756-2.374H6a.75.75 0 0 1-.49-1.319l4.286-3.692a.75.75 0 0 1 1.058.079m4.676.46a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m2 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-4 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"></svg:path>`,
})
export class SolarCloudStormBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStormLineDuotoneIcon],svg[solar-cloud-storm-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 1.94-.99 3.653-2.5 4.67" opacity=".5"></svg:path><svg:path d="m17 19l-2 2m0-5.5l-2 2m0 2.5l-2 2"></svg:path><svg:path stroke-linejoin="round" d="m6 22.385l4.286-3.692H6L10.286 15"></svg:path></svg:g>`,
})
export class SolarCloudStormLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSun2BoldDuotoneIcon],svg[solar-cloud-sun-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6C9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22z"></svg:path>`,
})
export class SolarCloudSun2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSun2LineDuotoneIcon],svg[solar-cloud-sun-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.381 11.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22h10C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338M7.116 13.609a5.6 5.6 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634"></svg:path><svg:path d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7.5 2v.5m-5 5H2m9.389-3.889l-.216.216m-7.346 7.346l-.216.216m.216-7.562l-.216-.216" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudSun2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSunBoldDuotoneIcon],svg[solar-cloud-sun-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="5" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20z"></svg:path>`,
})
export class SolarCloudSunBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSunLineDuotoneIcon],svg[solar-cloud-sun-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.381 9.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20h10C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634"></svg:path><svg:path d="M11 4a5 5 0 1 0-6 7.584" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudSunLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudUploadBoldDuotoneIcon],svg[solar-cloud-upload-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 14c-1.886 0-2.828 0-3.414.586S8 16.114 8 18s0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18s0-2.828-.586-3.414S13.886 14 12 14m1.805 3.084l-1.334-1.333a.667.667 0 0 0-.942 0l-1.334 1.333a.667.667 0 1 0 .943.943l.195-.195v1.946a.667.667 0 0 0 1.334 0v-1.946l.195.195a.667.667 0 0 0 .943-.943" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudUploadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudUploadLineDuotoneIcon],svg[solar-cloud-upload-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 16v6m0-6l2 2m-2-2l-2 2"></svg:path></svg:g>`,
})
export class SolarCloudUploadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropBoldDuotoneIcon],svg[solar-cloud-waterdrop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96"></svg:path>`,
})
export class SolarCloudWaterdropBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropLineDuotoneIcon],svg[solar-cloud-waterdrop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity=".5"></svg:path><svg:path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsBoldDuotoneIcon],svg[solar-cloud-waterdrops-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645m5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645m-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645"></svg:path>`,
})
export class SolarCloudWaterdropsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsLineDuotoneIcon],svg[solar-cloud-waterdrops-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.343-1.444 4.353-3.5 5.207" opacity=".5"></svg:path><svg:path d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudsBoldDuotoneIcon],svg[solar-clouds-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 18C19.442 18 22 15.472 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22z"></svg:path>`,
})
export class SolarCloudsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudsLineDuotoneIcon],svg[solar-clouds-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634" opacity=".5"></svg:path><svg:path d="M17.048 15.142c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.176 1.622a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227c0-1.949 1.662-3.529 3.714-3.529c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path></svg:g>`,
})
export class SolarCloudsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudyMoonBoldDuotoneIcon],svg[solar-cloudy-moon-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353S3.247 22 4.786 22z"></svg:path>`,
})
export class SolarCloudyMoonBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudyMoonLineDuotoneIcon],svg[solar-cloudy-moon-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zM15.5 14.25a.75.75 0 0 0 0 1.5zM8.25 8.5a.75.75 0 0 0 1.5 0zm3.893-5.567l-.388-.642zm-10.4 12.292a.75.75 0 1 0 1.43-.45zm14.882 4.788a.75.75 0 1 0 .75 1.298zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm17.675-.531A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm-6.577 6.275A9.3 9.3 0 0 1 2.75 12h-1.5c0 1.122.172 2.206.492 3.225zM21.25 12a9.25 9.25 0 0 1-4.625 8.013l.75 1.298A10.75 10.75 0 0 0 22.75 12zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.048 15.142c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.175 1.622a3 3 0 0 0-.54-.05C3.247 16.706 2 17.89 2 19.353S3.247 22 4.786 22h6.5C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227C5.095 13.58 6.757 12 8.81 12c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path></svg:g>`,
})
export class SolarCloudyMoonLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCode2BoldDuotoneIcon],svg[solar-code-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.502 5.387A.75.75 0 0 0 7.5 4.272L5.76 5.836c-.736.663-1.347 1.212-1.766 1.71c-.441.525-.755 1.088-.755 1.784c0 .695.314 1.258.755 1.782c.42.499 1.03 1.049 1.766 1.711l1.74 1.564a.75.75 0 1 0 1.003-1.115l-1.696-1.527c-.788-.709-1.32-1.19-1.663-1.598c-.33-.393-.403-.622-.403-.817c0-.196.072-.425.403-.818c.344-.409.875-.889 1.663-1.598zm6.941 5.111a.75.75 0 0 1 1.06-.055l1.737 1.563c.736.663 1.347 1.213 1.766 1.711c.441.524.755 1.088.755 1.783s-.314 1.259-.755 1.783c-.42.498-1.03 1.048-1.766 1.71l-1.738 1.565a.75.75 0 1 1-1.003-1.116l1.696-1.526c.788-.71 1.32-1.19 1.663-1.599c.33-.392.403-.622.403-.817s-.072-.425-.403-.817c-.344-.41-.875-.89-1.663-1.599L15.5 11.557a.75.75 0 0 1-.056-1.059"></svg:path><svg:path fill="currentColor" d="M14.18 4.275a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532" opacity=".5"></svg:path>`,
})
export class SolarCode2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCode2LineDuotoneIcon],svg[solar-code-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m16 11l1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973c0 .89-.771 1.585-2.314 2.973L16 20"></svg:path><svg:path d="M13.987 5L10 20" opacity=".5"></svg:path><svg:path d="M8 4.83L6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33s.771 1.585 2.314 2.973L8 13.83"></svg:path></svg:g>`,
})
export class SolarCode2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeBoldDuotoneIcon],svg[solar-code-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.443 7.328a.75.75 0 0 1 1.059-.056l1.737 1.564c.737.663 1.347 1.212 1.767 1.71c.44.525.754 1.088.754 1.784c0 .695-.313 1.258-.754 1.782c-.42.499-1.03 1.049-1.767 1.711l-1.737 1.564a.75.75 0 1 1-1.004-1.115l1.697-1.527c.788-.709 1.319-1.19 1.663-1.598c.33-.393.402-.622.402-.817c0-.196-.072-.425-.402-.818c-.344-.409-.875-.889-1.663-1.598l-1.697-1.527a.75.75 0 0 1-.056-1.06m-8.94 1.06a.75.75 0 0 0-1.004-1.115L4.761 8.836c-.737.663-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 1 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.817c0-.196.072-.425.402-.818c.344-.409.875-.889 1.663-1.598z"></svg:path><svg:path fill="currentColor" d="M14.182 4.276a.75.75 0 0 1 .53.918l-3.974 14.83a.75.75 0 1 1-1.449-.389l3.974-14.83a.75.75 0 0 1 .919-.53" opacity=".5"></svg:path>`,
})
export class SolarCodeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeCircleBoldDuotoneIcon],svg[solar-code-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z"></svg:path>`,
})
export class SolarCodeCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeCircleLineDuotoneIcon],svg[solar-code-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></svg:path></svg:g>`,
})
export class SolarCodeCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeFileBoldDuotoneIcon],svg[solar-code-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.702 14.264a.75.75 0 1 0-1.404-.527l-1.5 4a.75.75 0 1 0 1.404.527zm-3.172.266a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06L7.06 15zm4.5.94a.75.75 0 1 0-1.06 1.06l.47.47l-.47.47a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06zm-.52-13.21l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarCodeFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeFileLineDuotoneIcon],svg[solar-code-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 14l-1 1l1 1m4.5 0l1 1l-1 1M10 14l-1.5 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCodeFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeLineDuotoneIcon],svg[solar-code-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83"></svg:path><svg:path d="m13.987 5l-3.974 14.83" opacity=".5"></svg:path><svg:path d="M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83"></svg:path></svg:g>`,
})
export class SolarCodeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeScanBoldDuotoneIcon],svg[solar-code-scan-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289a.75.75 0 0 0 1.5 0v-.056c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5m-4.056-1.5H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M2.75 14a.75.75 0 0 0-1.5 0v.056c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.527 5.527C5 6.054 5 6.903 5 8.6c0 1.131 0 1.697.351 2.049C5.703 11 6.27 11 7.4 11h1.2c1.131 0 1.697 0 2.049-.351C11 10.297 11 9.73 11 8.6V7.4c0-1.131 0-1.697-.351-2.049C10.297 5 9.73 5 8.6 5c-1.697 0-2.546 0-3.073.527m0 12.946C5 17.946 5 17.097 5 15.4c0-1.131 0-1.697.351-2.049C5.703 13 6.27 13 7.4 13h1.2c1.131 0 1.697 0 2.049.351c.351.352.351.918.351 2.049v1.2c0 1.131 0 1.697-.351 2.048C10.297 19 9.73 19 8.6 19c-1.697 0-2.546 0-3.073-.527M13 7.4c0-1.131 0-1.697.351-2.049C13.704 5 14.27 5 15.4 5c1.697 0 2.546 0 3.073.527S19 6.903 19 8.6c0 1.131 0 1.697-.352 2.049c-.35.351-.917.351-2.048.351h-1.2c-1.131 0-1.697 0-2.049-.351C13 10.297 13 9.73 13 8.6zm.352 11.249C13 18.297 13 17.73 13 16.6v-1.2c0-1.131 0-1.697.351-2.049C13.704 13 14.27 13 15.4 13h1.2c1.131 0 1.697 0 2.048.351c.352.352.352.918.352 2.049c0 1.697 0 2.546-.527 3.073S17.097 19 15.4 19c-1.131 0-1.697 0-2.049-.352"></svg:path>`,
})
export class SolarCodeScanBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeScanLineDuotoneIcon],svg[solar-code-scan-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.5 15.5c0-.943 0-1.414.293-1.707S6.557 13.5 7.5 13.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56Zm0-7c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S5.5 9.443 5.5 8.5Zm8 7c0-.943 0-1.414.293-1.707s.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707zm0-8c0-.943 0-1.414.293-1.707S14.557 5.5 15.5 5.5c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S13.5 9.443 13.5 8.5z"></svg:path><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCodeScanLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeSquareBoldDuotoneIcon],svg[solar-code-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z"></svg:path>`,
})
export class SolarCodeSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeSquareLineDuotoneIcon],svg[solar-code-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCodeSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingBoldDuotoneIcon],svg[solar-colour-tuneing-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.913 8.717a3.8 3.8 0 0 1 .834-1.483c.36-.383.65-.484.776-.484c.305 0 .716.178 1.09 1.016c.379.849.637 2.228.637 4.234c0 2.099.265 3.72.767 4.845c.507 1.135 1.335 1.905 2.46 1.905c.724 0 1.384-.441 1.868-.955a5.3 5.3 0 0 0 1.178-2.078a.75.75 0 1 0-1.436-.434a3.8 3.8 0 0 1-.834 1.483c-.36.383-.65.484-.776.484c-.305 0-.716-.178-1.09-1.016c-.379-.849-.637-2.228-.637-4.234c0-2.099-.265-3.72-.767-4.845c-.507-1.135-1.335-1.905-2.46-1.905c-.724 0-1.384.441-1.868.955a5.3 5.3 0 0 0-1.178 2.078a.75.75 0 0 0 1.436.434"></svg:path><svg:path fill="currentColor" d="M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm8.5 0a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarColourTuneingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingLineDuotoneIcon],svg[solar-colour-tuneing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12h7.5M22 12h-7.5" opacity=".5"></svg:path><svg:path d="M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10S10.412 2 8.144 2c-1.734 0-4 3-4 6.316"></svg:path></svg:g>`,
})
export class SolarColourTuneingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCommandBoldDuotoneIcon],svg[solar-command-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 8H8v8h8z" opacity=".5"></svg:path>`,
})
export class SolarCommandBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCommandLineDuotoneIcon],svg[solar-command-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 8h8v8H8z" opacity=".5"></svg:path><svg:path d="M16 16.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"></svg:path></svg:g>`,
})
export class SolarCommandLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigBoldDuotoneIcon],svg[solar-compass-big-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.1 4.1 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c1.221 1.797-.038 4.943-2.554 11.236c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path>`,
})
export class SolarCompassBigBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigLineDuotoneIcon],svg[solar-compass-big-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.1 4.1 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c1.221 1.797-.038 4.943-2.554 11.236c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267Z" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class SolarCompassBigLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBoldDuotoneIcon],svg[solar-compass-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.024 14.56c.493-.197.739-.296.932-.465q.075-.065.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465q-.074.065-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938"></svg:path>`,
})
export class SolarCompassBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassLineDuotoneIcon],svg[solar-compass-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path></svg:g>`,
})
export class SolarCompassLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassSquareBoldDuotoneIcon],svg[solar-compass-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.024 14.56c.493-.197.739-.296.932-.465q.075-.065.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465q-.074.065-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938"></svg:path>`,
})
export class SolarCompassSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassSquareLineDuotoneIcon],svg[solar-compass-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCompassSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2BoldDuotoneIcon],svg[solar-condicioner-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 5.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828c.518.52 1.177.808 2.078.97c0-.832.004-1.531.08-2.092c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.075.56.08 1.26.08 2.091c.9-.16 1.56-.45 2.078-.969C22 16.657 22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5H8c-2.828 0-4.243 0-5.121.879M5.25 11.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.25 18.797c0-.832.004-1.53.08-2.091c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.344-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.075.56.08 1.26.08 2.091z" opacity=".5"></svg:path>`,
})
export class SolarCondicioner2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2LineDuotoneIcon],svg[solar-condicioner-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19h-4c-3.771 0-5.657 0-6.828-1.172S2 14.771 2 11Z"></svg:path><svg:path stroke-linecap="round" d="M18 18.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 11.5h12M6 9h12"></svg:path></svg:g>`,
})
export class SolarCondicioner2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerBoldDuotoneIcon],svg[solar-condicioner-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h12c1.886 0 2.828 0 3.414.586S22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121c-.53.531-1.258.742-2.374.825c-.005-.67-.02-1.402-.059-1.692c-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692c-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2m-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.747 14.946H5.253c.005-.67.02-1.402.059-1.692c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h6.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.04.29.054 1.023.059 1.692" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267a1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267a1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m11 .001a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267a1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267a1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m-5.419.047a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774a2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774a2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarCondicionerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerLineDuotoneIcon],svg[solar-condicioner-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 7.571c0-2.414 0-3.62.655-4.441q.21-.264.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655q.263.21.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923q-.28.352-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571Z"></svg:path><svg:path stroke-linecap="round" d="m7 17.5l-.307.46A1.32 1.32 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L12 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L17 22m1-7.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 8.5h12M6 6h12"></svg:path></svg:g>`,
})
export class SolarCondicionerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiBoldDuotoneIcon],svg[solar-confetti-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.602 2.422c-.22-.22-.496-.21-.648-.19c-.143.02-.315.068-.479.115l-.125.035l-.103-.064a3.4 3.4 0 0 0-.42-.24c-.15-.064-.401-.138-.666.001c-.26.137-.346.381-.38.537a4 4 0 0 0-.06.487l-.01.127v.01l-.112.093c-.134.11-.272.223-.37.33c-.104.114-.264.327-.223.625c.042.307.264.466.403.544c.126.07.292.13.447.188l.108.04l.04.109c.058.154.119.32.189.446c.077.14.236.362.544.404c.297.04.51-.12.624-.224c.107-.098.221-.236.33-.37l.092-.111h.011l.128-.01c.168-.014.345-.028.486-.06c.156-.035.4-.12.537-.38c.14-.265.066-.518 0-.667a3.4 3.4 0 0 0-.239-.42l-.064-.102l.036-.126c.046-.164.095-.336.114-.479c.02-.152.03-.428-.19-.648" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.187 2.16a.75.75 0 0 1 .248 1.032a.65.65 0 0 0 .095.8l.098.097c.589.589.806 1.454.565 2.25a.75.75 0 1 1-1.436-.433a.76.76 0 0 0-.19-.756l-.097-.098a2.15 2.15 0 0 1-.314-2.642a.75.75 0 0 1 1.03-.25M21.41 13.581a1.01 1.01 0 0 0-1.079.17a2.51 2.51 0 0 1-2.923.297l-.213-.123a.75.75 0 1 1 .75-1.3l.213.123c.377.218.852.17 1.178-.119a2.51 2.51 0 0 1 2.674-.422l.291.127a.75.75 0 1 1-.6 1.375zm-8.494-6.402a.536.536 0 1 0-.758.759a.536.536 0 0 0 .758-.76"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.524 8.864c.256.554.083 1.183-.384 1.65c-.27.27-.634.394-.957.451c-.33.059-.68.06-.986.04a7 7 0 0 1-1.116-.163l-.02-.005l-.005-.001h-.003a.5.5 0 0 1-.365-.366l.485-.12l-.485.119l-.001-.002l-.001-.006l-.005-.02l-.016-.07a7 7 0 0 1-.148-1.045a4.2 4.2 0 0 1 .04-.986c.058-.324.18-.687.452-.957c.467-.468 1.096-.64 1.65-.384c.42.194.693.586.796 1.069c.482.103.875.376 1.07.796" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.69 4.744a.75.75 0 0 1 .588.882l-.144.72c-.198.99-.912 1.8-1.87 2.119c-.448.15-.782.527-.874.99l-.144.72a.75.75 0 0 1-1.471-.294l.144-.72c.198-.99.912-1.8 1.87-2.119c.448-.15.782-.527.874-.99l.145-.72a.75.75 0 0 1 .882-.588M6.929 3.963a.536.536 0 1 1 .758.758a.536.536 0 0 1-.758-.758" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.817 15.335a.536.536 0 1 0-.759.76a.536.536 0 0 0 .759-.76" opacity=".7"></svg:path><svg:path fill="currentColor" d="M17.158 10.18a.536.536 0 1 1 .759.757a.536.536 0 0 1-.759-.758" opacity=".2"></svg:path><svg:path fill="currentColor" d="m4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475s-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.8 7.504l.05-.245c-.392-.23-.739-.31-1.093-.227a1.2 1.2 0 0 0-.397.175l.696.144c-.478-.1-.641-.133-.696-.144l-.035.024l-.005.026a26 26 0 0 0-.138.73a51 51 0 0 0-.311 1.939c-.215 1.533-.415 3.492-.312 5.057c.062.948.26 2.123.435 3.04a51 51 0 0 0 .312 1.503l.021.093l.006.025l.002.009l.73-.17l-.73.17l.137.588l.765-.254l.664-.221l-.106-.46l-.006-.021l-.02-.088l-.072-.33a49 49 0 0 1-.23-1.125c-.173-.907-.355-2.007-.411-2.857c-.092-1.404.088-3.235.3-4.75a50 50 0 0 1 .434-2.582l.008-.037l.002-.01zm4.24 10.882l-1.424.475l-.092-.278l.712-.237l-.712.237l-.001-.003l-.002-.006l-.007-.022a10 10 0 0 1-.115-.37c-.074-.247-.172-.59-.27-.983c-.192-.77-.402-1.792-.402-2.644s.21-1.874.402-2.643a22 22 0 0 1 .385-1.354l.007-.021l.002-.007v-.001l.713.235l-.712-.236l.212-.637l1.186 1.187l-.004.014l-.082.267c-.069.23-.16.55-.252.916c-.187.75-.357 1.622-.357 2.28s.17 1.531.357 2.28a21 21 0 0 0 .356 1.253l.006.017l.001.004z"></svg:path>`,
})
export class SolarConfettiBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiLineDuotoneIcon],svg[solar-confetti-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475s-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.51 10.006l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 7.796l.212.123c.657.38 1.483.296 2.051-.207a1.76 1.76 0 0 1 1.876-.297L22 13M9.795 2.779A1.4 1.4 0 0 0 10 4.5l.097.098c.394.393.539.97.378 1.503"></svg:path><svg:path fill="currentColor" d="M6.928 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m5.229 3.217a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m5 3a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m1.901 5.156a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.173 10.328l-.486.12l.073.293l.292.072zM21 8.5l-.5-.001A.5.5 0 0 0 21 9zm-1.829 1.828l.486-.12v-.002l-.004-.014l-.012-.055l-.042-.212a6 6 0 0 1-.085-.684a3.2 3.2 0 0 1 .027-.748c.04-.23.11-.36.173-.425l-.707-.707c-.27.27-.393.634-.45.957c-.06.33-.06.68-.041.986a7 7 0 0 0 .163 1.116l.005.02l.001.005v.002h.001zm.543-2.26c.243-.243.435-.224.524-.183c.096.044.263.204.261.614l1 .002c.002-.684-.296-1.272-.842-1.524c-.554-.256-1.183-.083-1.65.384zm-.543 2.26l-.12.485h.002l.001.001l.006.002l.02.004l.07.016q.091.02.247.049c.205.037.489.079.798.099c.306.02.656.018.986-.04c.324-.058.687-.18.958-.452l-.707-.707c-.065.064-.196.133-.426.174c-.222.04-.484.044-.747.027a6 6 0 0 1-.965-.143h-.003zm2.968.164c.467-.467.64-1.096.384-1.65c-.253-.546-.84-.844-1.525-.842l.003 1c.41-.001.57.165.614.262c.04.088.06.28-.183.523z"></svg:path><svg:path stroke="currentColor" d="m15.188 3.417l-.027.098c-.03.106-.046.16-.039.212s.036.098.093.189l.053.082c.201.32.302.48.234.611c-.07.131-.262.146-.648.176l-.1.008c-.11.009-.164.013-.212.038s-.084.068-.155.155l-.065.079c-.25.304-.375.456-.518.437s-.21-.198-.341-.555l-.034-.092c-.038-.102-.056-.152-.093-.19c-.037-.036-.088-.055-.189-.092l-.092-.034c-.357-.132-.535-.198-.555-.34c-.02-.144.133-.27.437-.52l.079-.065c.086-.07.13-.106.155-.154s.03-.103.038-.213l.008-.1c.03-.385.045-.578.175-.647c.131-.069.291.032.611.234l.083.052c.09.058.136.086.189.093s.105-.008.212-.038l.097-.027c.376-.107.563-.16.664-.06c.1.1.047.288-.06.663Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarConfettiLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiMinimalisticBoldDuotoneIcon],svg[solar-confetti-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.926 2.36a.75.75 0 0 1 .249 1.031a.65.65 0 0 0 .095.8l.098.098c.588.588.805 1.453.564 2.25a.75.75 0 1 1-1.435-.434a.76.76 0 0 0-.19-.756l-.098-.098a2.15 2.15 0 0 1-.314-2.642a.75.75 0 0 1 1.031-.249m9.048 4.687c-.138.053-.26.176-.506.421c-.246.246-.368.368-.422.507a.7.7 0 0 0 0 .503c.054.138.176.261.422.507c.245.245.368.368.506.421a.7.7 0 0 0 .504 0c.138-.053.26-.176.506-.421c.245-.246.368-.369.421-.507a.7.7 0 0 0 0-.503c-.053-.139-.175-.261-.42-.507c-.246-.245-.369-.368-.507-.421a.7.7 0 0 0-.504 0m1.434 5.513a1.01 1.01 0 0 0-1.078.17a2.51 2.51 0 0 1-2.924.296l-.212-.123a.75.75 0 0 1 .75-1.299l.212.123c.378.218.853.17 1.179-.12a2.51 2.51 0 0 1 2.674-.422l.291.128a.75.75 0 1 1-.6 1.374z"></svg:path><svg:path fill="currentColor" d="M13.561 4.396c.201-.2.302-.301.418-.338a.5.5 0 0 1 .302 0c.116.037.217.137.418.338c.2.202.301.302.338.418a.5.5 0 0 1 0 .302c-.037.117-.137.217-.338.418s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.418a.5.5 0 0 1 0-.302c.036-.116.137-.216.338-.418m5.497 10.917a.536.536 0 1 1 .758.759a.536.536 0 0 1-.758-.759" opacity=".7"></svg:path><svg:path fill="currentColor" d="M6.927 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m10.762.782a.75.75 0 0 1 .588.882l-.144.72a2.82 2.82 0 0 1-1.87 2.12a1.31 1.31 0 0 0-.875.99l-.144.72a.75.75 0 0 1-1.47-.295l.144-.72c.198-.99.912-1.8 1.87-2.119c.448-.15.782-.527.874-.99l.144-.72a.75.75 0 0 1 .883-.588" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.5 9.742a.536.536 0 1 1 .758.758a.536.536 0 0 1-.758-.758" opacity=".2"></svg:path><svg:path fill="currentColor" d="m4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475s-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.8 7.504l.05-.245c-.392-.23-.739-.31-1.093-.227a1.2 1.2 0 0 0-.397.175l.696.144c-.478-.1-.641-.133-.696-.144l-.035.024l-.005.026a26 26 0 0 0-.138.73a51 51 0 0 0-.311 1.939c-.215 1.533-.415 3.492-.312 5.057c.062.948.26 2.123.435 3.04a51 51 0 0 0 .312 1.503l.021.093l.006.025l.002.009l.73-.17l-.73.17l.137.588l.765-.254l.664-.221l-.106-.46l-.006-.021l-.02-.088l-.072-.33a49 49 0 0 1-.23-1.125c-.173-.907-.355-2.007-.411-2.857c-.092-1.404.088-3.235.3-4.75a50 50 0 0 1 .434-2.582l.008-.037l.002-.01zm4.24 10.882l-1.424.475l-.092-.278l.712-.237l-.712.237l-.001-.003l-.002-.006l-.007-.022a10 10 0 0 1-.115-.37c-.074-.247-.172-.59-.27-.983c-.192-.77-.402-1.792-.402-2.644s.21-1.874.402-2.643a22 22 0 0 1 .385-1.354l.007-.021l.002-.007v-.001l.713.235l-.712-.236l.212-.637l1.186 1.187l-.004.014l-.082.267c-.069.23-.16.55-.252.916c-.187.75-.357 1.622-.357 2.28s.17 1.531.357 2.28a21 21 0 0 0 .356 1.253l.006.017l.001.004z"></svg:path>`,
})
export class SolarConfettiMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiMinimalisticLineDuotoneIcon],svg[solar-confetti-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475s-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.51 10.006l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 6.796l.212.123a1.76 1.76 0 0 0 2.05-.207a1.76 1.76 0 0 1 1.877-.297L22 12M10.535 3a1.4 1.4 0 0 0 .205 1.721l.098.098c.393.393.538.97.377 1.503"></svg:path><svg:path fill="currentColor" d="M13.561 4.396c.201-.2.302-.301.418-.338a.5.5 0 0 1 .302 0c.116.037.217.137.418.338c.2.202.301.302.338.418a.5.5 0 0 1 0 .302c-.037.117-.137.217-.338.418s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.418a.5.5 0 0 1 0-.302c.036-.116.137-.216.338-.418" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.468 7.468c.246-.245.368-.368.507-.421a.7.7 0 0 1 .503 0c.138.053.261.176.507.421c.245.246.368.368.421.507a.7.7 0 0 1 0 .503c-.053.138-.176.261-.421.507c-.246.245-.369.368-.507.421a.7.7 0 0 1-.503 0c-.139-.053-.261-.176-.507-.421c-.245-.246-.368-.369-.421-.507a.7.7 0 0 1 0-.503c.053-.139.176-.261.421-.507"></svg:path><svg:path fill="currentColor" d="M6.927 3.94a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76m12.131 11.373a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759M17.5 9.741a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76" opacity=".5"></svg:path></svg:g>`,
})
export class SolarConfettiMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleBoldDuotoneIcon],svg[solar-confounded-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path>`,
})
export class SolarConfoundedCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleLineDuotoneIcon],svg[solar-confounded-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m-1 7l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path></svg:g>`,
})
export class SolarConfoundedCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedSquareBoldDuotoneIcon],svg[solar-confounded-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"></svg:path>`,
})
export class SolarConfoundedSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedSquareLineDuotoneIcon],svg[solar-confounded-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m-1 7l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path></svg:g>`,
})
export class SolarConfoundedSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyBoldDuotoneIcon],svg[solar-copy-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.073 0 4.916.847c.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936c-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847s-.843-2.21-.843-4.936z"></svg:path><svg:path fill="currentColor" d="M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828c.617.618 1.433.91 2.62 1.048c-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19c-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2S5.343 2 4.172 3.172" opacity=".5"></svg:path>`,
})
export class SolarCopyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyLineDuotoneIcon],svg[solar-copy-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCopyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyrightBoldDuotoneIcon],svg[solar-copyright-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.286 8.75c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278"></svg:path>`,
})
export class SolarCopyrightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyrightLineDuotoneIcon],svg[solar-copyright-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14 15.667a4.5 4.5 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path></svg:g>`,
})
export class SolarCopyrightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCorkscrewBoldDuotoneIcon],svg[solar-corkscrew-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a2.15 2.15 0 1 1-4.3 0a2.15 2.15 0 0 1 4.3 0"></svg:path><svg:path fill="currentColor" d="M21.358 10.385L13.615 2.64a2.19 2.19 0 1 0-3.097 3.098l7.743 7.743c.171.172.364.309.57.412A2.15 2.15 0 1 1 22 11.957a2.18 2.18 0 0 0-.642-1.572" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.535 10.405l1.324-1.325l.914.914l.147.147l-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-2.623-1.828l-1.995-1.39l1.26 1.807l3.684 5.287c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884l.65 1.371c.333.704.19 1.542-.362 2.094L2.53 22.53a.75.75 0 1 1-1.06-1.06l2.552-2.553a.34.34 0 0 0 .067-.39l-.95-2.005c-.556-1.175.771-2.348 1.87-1.65l.543.345h.001l5.311 3.373l-3.189-4.575l-1.827-2.622c-.828-1.188.618-2.634 1.807-1.806l3.513 2.449l1.236.862l-.136-.222a1.84 1.84 0 0 1 .267-2.271"></svg:path>`,
})
export class SolarCorkscrewBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCorkscrewLineDuotoneIcon],svg[solar-corkscrew-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.261 13.482l-.53.53zM10.518 5.74l.53-.53zm3.097-3.098l.53-.53zm7.743 7.744l-.53.53zm.53-.53L14.146 2.11l-1.06 1.06l7.743 7.744zM9.988 6.27l7.743 7.744l1.06-1.061l-7.743-7.743zm7.743 7.744a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0zM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157z"></svg:path><svg:path fill="currentColor" d="M1.47 21.47a.75.75 0 1 0 1.06 1.06zm3.082-2.022l-.53-.53zm.215-1.243l-.678.321zm-.95-2.004l-.677.321zm.79-.697l-.403.633zm6.706 4.26l.402-.633zm.743-.776l-.615.43zm-5.593-8.024l-.615.43zm.763-.762l.429-.615zm5.548 3.867l-.43.615zm.779-.737l-.639.394zm-.646-1.05l.639-.392zm2.013-2.141a.75.75 0 1 0-1.06-1.061zM2.53 22.53l2.553-2.553l-1.061-1.06L1.47 21.47zm2.915-4.647l-.95-2.004l-1.355.642l.95 2.004zm-1.241-1.747l6.707 4.26l.804-1.266l-6.707-4.26zm8.467 2.422L7.08 10.537l-1.23.857l5.592 8.024zm-5.874-7.742l5.548 3.867l.857-1.23l-5.547-3.867zm7.395 2.123l-.646-1.05l-1.278.786l.646 1.05zm-.597-1.475l1.325-1.324l-1.06-1.061l-1.325 1.324zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.27zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.22.22 0 0 1-.022-.144a.2.2 0 0 1 .056-.11a.2.2 0 0 1 .112-.05a.22.22 0 0 1 .142.031zm-5.266-4.148a.22.22 0 0 1 .03.145a.2.2 0 0 1-.053.114a.2.2 0 0 1-.113.052a.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806zm3.832 9.86c1.197.76 2.57-.674 1.76-1.837l-1.23.858a.22.22 0 0 1-.03-.143a.2.2 0 0 1 .05-.113a.2.2 0 0 1 .11-.055a.22.22 0 0 1 .144.024zM4.496 15.88a.21.21 0 0 1-.05.238a.21.21 0 0 1-.243.02l.805-1.267c-1.098-.697-2.425.475-1.868 1.651zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.34.34 0 0 1-.067.391z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M22 12a2.15 2.15 0 1 1-4.3 0a2.15 2.15 0 0 1 4.3 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCorkscrewLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticBoldDuotoneIcon],svg[solar-cosmetic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3 11h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8-.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path><svg:path fill="currentColor" d="M15.75 15.95v3.55H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.55a5.5 5.5 0 0 1-1.5 0" opacity=".5"></svg:path>`,
})
export class SolarCosmeticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticLineDuotoneIcon],svg[solar-cosmetic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M11 10.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 20v-4m0 4h3m-3 0h-3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm-6 .75h6v-1.5H2zM7.25 11v6h1.5v-6zm-4.5 6v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCosmeticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseDownBoldDuotoneIcon],svg[solar-course-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.668 18c0 .414.336.75.75.75H22a.75.75 0 0 0 .75-.75v-5.546a.75.75 0 1 0-1.5 0v4.796h-4.832a.75.75 0 0 0-.75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.187 17.25l-6.095-6.053c-.514-.51-.847-.84-1.125-1.05c-.26-.197-.381-.219-.462-.219c-.08 0-.202.022-.462.22c-.277.21-.61.539-1.124 1.05l-.274.272c-.47.467-.874.87-1.241 1.148c-.394.299-.831.525-1.37.525s-.976-.227-1.37-.526c-.367-.279-.77-.682-1.24-1.149L1.471 7.532A.75.75 0 0 1 2.529 6.47l3.919 3.902c.514.511.847.84 1.124 1.052c.26.197.382.22.462.22s.203-.022.463-.22c.278-.21.61-.54 1.125-1.051l.274-.273c.47-.466.873-.868 1.24-1.146c.394-.299.83-.525 1.369-.525c.538 0 .975.226 1.369.524c.367.279.771.68 1.24 1.147l6.136 6.092v1.059z" opacity=".5"></svg:path>`,
})
export class SolarCourseDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseDownLineDuotoneIcon],svg[solar-course-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m22 18l-7.38-7.335c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7" opacity=".5"></svg:path><svg:path d="M22 12.454V18h-5.582"></svg:path></svg:g>`,
})
export class SolarCourseDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseUpBoldDuotoneIcon],svg[solar-course-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.668 7a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V7.75h-4.832a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.187 7.75l-6.095 6.053c-.514.51-.847.84-1.125 1.05c-.26.197-.381.219-.462.219c-.08 0-.202-.022-.462-.22c-.277-.21-.61-.539-1.124-1.05l-.274-.272c-.47-.467-.874-.87-1.241-1.148c-.394-.299-.831-.525-1.37-.525s-.976.227-1.37.526c-.367.279-.77.682-1.24 1.149l-3.953 3.937a.75.75 0 1 0 1.058 1.062l3.919-3.902c.514-.511.847-.84 1.124-1.052c.26-.197.382-.22.462-.22s.203.022.463.22c.278.21.61.54 1.125 1.051l.274.273c.47.466.873.868 1.24 1.146c.394.299.83.525 1.369.525c.538 0 .975-.226 1.369-.524c.367-.279.771-.68 1.24-1.147L21.25 8.81V7.75z" opacity=".5"></svg:path>`,
})
export class SolarCourseUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseUpLineDuotoneIcon],svg[solar-course-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m22 7l-7.38 7.335c-.997.991-1.496 1.487-2.115 1.487s-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18" opacity=".5"></svg:path><svg:path d="M22 12.546V7h-5.582"></svg:path></svg:g>`,
})
export class SolarCourseUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoldDuotoneIcon],svg[solar-cpu-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"></svg:path>`,
})
export class SolarCpuBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoltBoldDuotoneIcon],svg[solar-cpu-bolt-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.18 9.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.439c.041-.302.107-.397.16-.45" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.698 2.698a.698.698 0 0 0-1.396 0v2.79q-.764 0-1.395.017V2.698a.698.698 0 0 0-1.395 0v2.79q0 .056.008.108c-.936.115-1.585.353-2.078.846s-.731 1.142-.846 2.078a1 1 0 0 0-.108-.008h-2.79a.698.698 0 0 0 0 1.395h2.807q-.016.63-.016 1.395H2.698a.698.698 0 0 0 0 1.396h2.79q0 .764.017 1.395H2.698a.698.698 0 0 0 0 1.395h2.79a1 1 0 0 0 .108-.008c.115.936.353 1.585.846 2.078s1.142.731 2.078.846a1 1 0 0 0-.008.108v2.79a.698.698 0 0 0 1.395 0v-2.807q.63.016 1.395.016v2.791a.698.698 0 0 0 1.396 0v-2.79q.764 0 1.395-.017v2.807a.698.698 0 0 0 1.395 0v-2.79a1 1 0 0 0-.008-.108c.936-.115 1.585-.353 2.078-.846s.731-1.142.846-2.078q.053.009.108.008h2.79a.698.698 0 0 0 0-1.395h-2.807q.016-.63.016-1.395h2.791a.698.698 0 0 0 0-1.396h-2.79q0-.764-.017-1.395h2.807a.698.698 0 0 0 0-1.395h-2.79a1 1 0 0 0-.108.008c-.115-.936-.353-1.585-.846-2.078s-1.142-.731-2.078-.846a1 1 0 0 0 .008-.108v-2.79a.698.698 0 0 0-1.395 0v2.807a56 56 0 0 0-1.395-.016zm-3.252 4.94c.426-.057.96-.057 1.578-.057h1.952c.619 0 1.151 0 1.578.058c.458.061.896.2 1.252.555c.355.356.494.794.555 1.252c.058.426.058.96.058 1.578v1.952c0 .619 0 1.151-.058 1.578c-.061.458-.2.896-.555 1.252c-.356.355-.794.494-1.252.555c-.427.058-.96.058-1.578.058h-1.952c-.619 0-1.152 0-1.578-.058c-.458-.061-.896-.2-1.252-.555c-.355-.356-.494-.794-.555-1.252c-.058-.427-.058-.96-.058-1.578v-1.952c0-.619 0-1.152.058-1.578c.061-.458.2-.896.555-1.252c.356-.355.794-.494 1.252-.555" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.966 10.545a.698.698 0 0 0-1.135-.811l-1.329 1.86a.698.698 0 0 0 .568 1.103h.505l-.541.758a.698.698 0 1 0 1.135.81l1.329-1.86a.698.698 0 0 0-.568-1.103h-.505z"></svg:path>`,
})
export class SolarCpuBoltBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoltLineDuotoneIcon],svg[solar-cpu-bolt-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.429 10L11 12h2l-1.429 2"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCpuBoltLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuLineDuotoneIcon],svg[solar-cpu-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z" opacity=".5"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCpuLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCreativeCommonsBoldDuotoneIcon],svg[solar-creative-commons-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.286 8.75C7.283 8.75 5.75 10.253 5.75 12s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278m8 0c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278"></svg:path>`,
})
export class SolarCreativeCommonsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCreativeCommonsLineDuotoneIcon],svg[solar-creative-commons-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11 15.667A4.5 4.5 0 0 1 9.286 16C6.919 16 5 14.21 5 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333m8 7.334a4.5 4.5 0 0 1-1.714.333C14.919 16 13 14.21 13 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path></svg:g>`,
})
export class SolarCreativeCommonsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropBoldDuotoneIcon],svg[solar-crop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v9c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h9a.75.75 0 0 1 0 1.5h-9.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V2A.75.75 0 0 1 5 1.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 5.75h2.25v-1.5H2a.75.75 0 0 0 0 1.5M19.75 22v-2.25h-1.5V22a.75.75 0 0 0 1.5 0M15.29 5.89c-1.028-.138-2.383-.14-4.29-.14H8a.75.75 0 0 1 0-1.5h3.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V16a.75.75 0 0 1-1.5 0v-3c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path>`,
})
export class SolarCropBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropLineDuotoneIcon],svg[solar-crop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"></svg:path><svg:path stroke-linecap="round" d="M2 5h9c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v9" opacity=".5"></svg:path><svg:path d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path></svg:g>`,
})
export class SolarCropLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticBoldDuotoneIcon],svg[solar-crop-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.302c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h3.302V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.964 0-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094z"></svg:path><svg:path fill="currentColor" d="M12 8.75c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v1.47a.75.75 0 0 0 1.5 0v-1.522c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08h-1.523a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class SolarCropMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticLineDuotoneIcon],svg[solar-crop-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"></svg:path><svg:path d="M2 5h9c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCropMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownBoldDuotoneIcon],svg[solar-crown-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.687 14.093l.184-1.704c.097-.91.162-1.51.111-1.889a1.5 1.5 0 0 1-1.117-.52c-.327.201-.753.626-1.394 1.265c-.495.493-.742.739-1.018.777a.83.83 0 0 1-.45-.063c-.254-.112-.424-.416-.763-1.025l-1.79-3.209c-.209-.375-.384-.69-.542-.942c-.273.139-.581.217-.908.217s-.635-.078-.908-.217c-.158.253-.333.567-.543.942L8.76 10.934c-.34.609-.51.913-.764 1.025a.83.83 0 0 1-.45.063c-.275-.038-.522-.284-1.017-.777c-.641-.639-1.067-1.064-1.393-1.265a1.5 1.5 0 0 1-1.118.52c-.051.378.014.979.111 1.889l.184 1.704l.089.85c.252 2.435.46 4.45 1.31 5.21c.946.847 2.364.847 5.2.847h2.176c2.836 0 4.254 0 5.2-.847c.85-.76 1.058-2.775 1.31-5.21q.043-.417.09-.85" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20 10.5a1.5 1.5 0 1 0-.018 0zM12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M2.5 9A1.5 1.5 0 0 0 4 10.5h.018A1.497 1.497 0 0 0 5.5 9a1.5 1.5 0 1 0-3 0m2.349 9.25a18 18 0 0 1-.246-1.5h14.794c-.07.545-.148 1.05-.246 1.5z"></svg:path>`,
})
export class SolarCrownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineBoldDuotoneIcon],svg[solar-crown-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarCrownLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineDuotoneIcon],svg[solar-crown-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.87 12.388l-.745-.08zm-.183 1.705l.746.08zm-15.374 0l-.746.08zm-.184-1.705l.746-.08zm4.631-1.454l.655.365zm1.79-3.209l-.655-.365zm2.9 0l-.655.366zm1.79 3.209l.655-.365zm.764 1.025l-.303.687zm1.467-.714l-.53-.531zm-1.018.777l-.102-.743zm-9.923-.777l-.53.532zm1.017.777l.102-.743zm.45-.063l.301.687zm-2.285 8.194l.5-.559zm12.576 0l-.5-.559zm.576-10.173l.568-.49zm-5.956-3.197l-.341-.668zm-1.816 0l.341-.668zm8.033 5.525l-.183 1.705l1.49.16l.184-1.704zm-6.037 7.942h-2.176v1.5h2.176zm-8.03-6.237l-.183-1.705l-1.491.16l.183 1.705zm4.357-2.714l1.79-3.208l-1.31-.73l-1.79 3.208zm3.38-3.208l1.79 3.208l1.31-.73l-1.79-3.209zm1.79 3.208c.162.29.31.56.455.765c.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8 8 0 0 1-.372-.633zm2.356-.585c-.258.258-.412.41-.533.507c-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378c.195-.158.412-.376.648-.61zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.1.1 0 0 1-.045-.006zm-9.7-.87c.235.235.452.453.647.61c.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8 8 0 0 1-.533-.507zm2.104-1.207a8 8 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582c.144-.206.293-.475.455-.765zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.1.1 0 0 1-.045.006zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1c-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926c.886.113 2.006.112 3.404.112zm-7.345-6.077c.148 1.378.266 2.727.466 3.821c.101.552.229 1.072.405 1.523c.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623q-.19-.488-.326-1.247c-.188-1.022-.297-2.28-.45-3.711zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71q-.138.76-.327 1.248c-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195c.176-.451.304-.971.405-1.523c.2-1.094.318-2.443.466-3.82zm-5.854 7.737c1.398 0 2.518.001 3.404-.112c.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556c-.768.099-1.775.1-3.213.1zM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5zM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25zM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75zM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25zM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9zM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75zm16 1.5h-.009l-.017 1.5H20zm.616 2.719c.049-.45.091-.843.114-1.171a4.6 4.6 0 0 0-.004-.898l-1.487.2c.015.11.016.29-.005.592c-.02.294-.06.657-.11 1.116zm-.625-2.719a.75.75 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78zm-.559-.26A.74.74 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47zM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372zM4.75 9a.74.74 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159zM4.568 9.49a.75.75 0 0 1-.559.26l.017 1.5a2.25 2.25 0 0 0 1.677-.78zm-.559.26H4v1.5h.026zm.866 2.558a33 33 0 0 1-.109-1.116a3 3 0 0 1-.005-.592l-1.487-.2a4.6 4.6 0 0 0-.004.898c.023.328.065.72.114 1.17zM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5zm-.683 1.115c-.17.086-.361.135-.567.135v1.5a2.74 2.74 0 0 0 1.249-.3zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91zM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 17.5h14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCrownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineLineDuotoneIcon],svg[solar-crown-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></svg:path><svg:path stroke-linecap="round" d="M9 18h6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCrownLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownMinimalisticBoldDuotoneIcon],svg[solar-crown-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.633 16h18.734c.08-.719.156-1.527.242-2.438l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.086.911.162 1.72.242 2.438" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.36 22c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79H2.633c.273 2.445.593 3.855 1.507 4.79C5.322 22 7.095 22 10.64 22z"></svg:path>`,
})
export class SolarCrownMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownMinimalisticLineDuotoneIcon],svg[solar-crown-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></svg:path>`,
})
export class SolarCrownMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownStarBoldDuotoneIcon],svg[solar-crown-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.952 12.699l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354"></svg:path>`,
})
export class SolarCrownStarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownStarLineDuotoneIcon],svg[solar-crown-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></svg:path><svg:path d="M11.146 12.523c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCrownStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupBoldDuotoneIcon],svg[solar-cup-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.458 21.25H8.542l.297-1.75a1 1 0 0 1 .98-.804h4.361a1 1 0 0 1 .98.804z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16"></svg:path>`,
})
export class SolarCupBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupFirstBoldDuotoneIcon],svg[solar-cup-first-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.05-1.266-.076-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2c1.783 0 3.253.157 4.377.347c1.138.192 1.708.288 2.183.874c.476.586.451 1.219.4 2.485C18.78 10.259 17.76 16 12 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.458 21.25H8.543l.297-1.75a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .981.804z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.787 5.807a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupFirstBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupFirstLineDuotoneIcon],svg[solar-cup-first-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 8l1.5-1.5v4"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCupFirstLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupHotBoldDuotoneIcon],svg[solar-cup-hot-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.613 22h.774c2.66 0 3.991 0 4.856-.81c.67-.626.874-1.564 1.015-3.19H3.742c.14 1.626.344 2.564 1.014 3.19c.865.81 2.196.81 4.856.81" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.162.173.275.374.35.616H17a4.75 4.75 0 1 1 0 9.5h-.722l-.02.25H3.742a86 86 0 0 1-.116-1.6zm13.1 4.984H17a3.25 3.25 0 0 0 0-6.5h-.2c-.012.43-.045.93-.084 1.516z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupHotBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupHotLineDuotoneIcon],svg[solar-cup-hot-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.593.633.526 1.633.393 3.632l-.343 5.133c-.177 2.655-.265 3.982-1.13 4.792S13.047 22 10.387 22h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79zM17 17h1a4 4 0 0 0 0-8h-1"></svg:path><svg:path d="M16.5 18h-13" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6.05 5.061l.411-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575"></svg:path><svg:path stroke-linecap="round" d="m10.05 5.061l.411-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCupHotLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupLineDuotoneIcon],svg[solar-cup-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h6c1.886 0 2.828 0 3.414.586S17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12zm14 6h1a4 4 0 0 0 0-8h-1"></svg:path><svg:path d="M17 13H3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 21H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCupLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupMusicBoldDuotoneIcon],svg[solar-cup-music-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.05-1.266-.076-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2c1.783 0 3.253.157 4.377.347c1.138.192 1.708.288 2.183.874c.476.586.451 1.219.4 2.485C18.78 10.259 17.76 16 12 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.458 21.25H8.543l.297-1.75a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .981.804z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 4.25a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5c-.45 0-.875-.108-1.25-.3v3.05a2.25 2.25 0 1 1-1.5-2.122V5a.75.75 0 0 1 .75-.75m-1.5 5.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupMusicBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupMusicLineDuotoneIcon],svg[solar-cup-music-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></svg:path><svg:path stroke-linecap="round" d="M13 10.5V5"></svg:path><svg:circle cx="11.5" cy="10.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M15 7a2 2 0 0 1-2-2"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCupMusicLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupPaperBoldDuotoneIcon],svg[solar-cup-paper-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.815 2h-5.63c-1.837 0-2.756 0-3.479.444a3 3 0 0 0-.355.257c-.65.545-.942 1.416-1.523 3.16l-.036.107c-.319.955-.478 1.433-.31 1.794a1 1 0 0 0 .219.303c.289.274.793.274 1.8.274h13c1.007 0 1.51 0 1.8-.274c.09-.086.165-.19.218-.303c.168-.361.009-.839-.31-1.794l-.036-.107c-.581-1.744-.872-2.615-1.522-3.16a3 3 0 0 0-.356-.257C17.572 2 16.653 2 14.815 2"></svg:path><svg:path fill="currentColor" d="M10.958 22h2.086c1.649 0 2.473 0 3.036-.487s.683-1.302.922-2.934L18.5 8.34h-13L7 18.58c.238 1.632.357 2.447.92 2.934S9.31 22 10.959 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.77 17h10.463l.732-5H6.037z"></svg:path>`,
})
export class SolarCupPaperBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupPaperLineDuotoneIcon],svg[solar-cup-paper-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.173 5.86l.711-.237zm.036.108l-.712.237zm-16.418 0l.712.237zm.036-.107l-.711-.238zM7 18.58l-.742.108zm10.002 0l.742.108zM3.48 7.761l.68-.317zm.22.303l.515-.544zm16.818-.303l.68.317zm-.22.303l-.515-.544zm-2.005-5.62l.393-.64zm.356.256l-.482.575zM7.92 21.513l-.49.568zM5.707 2.444l-.393-.639zm-.356.257l.482.575zm3.835.049h5.63v-1.5h-5.63zm10.277 3.348l.035.107l1.423-.474l-.036-.108zm-14.96.107l.037-.107l-1.423-.475l-.036.108zm6.455 16.545h2.086v-1.5h-2.086zM18.5 7.59h-13v1.5h13zm-13.742.858l1.5 10.24l1.483-.217L6.242 8.23zm12.985 10.24l1.5-10.24l-1.485-.217l-1.5 10.24zm-4.7 4.062c.805 0 1.479.001 2.019-.067c.561-.07 1.072-.226 1.508-.602l-.981-1.135c-.127.11-.31.198-.715.249c-.424.054-.987.055-1.831.055zm3.216-4.28c-.122.836-.205 1.392-.32 1.805c-.109.392-.223.56-.35.67l.98 1.136c.437-.377.664-.86.815-1.405c.146-.525.242-1.192.359-1.988zM3.08 5.73c-.153.46-.29.868-.36 1.206c-.072.347-.103.747.082 1.143l1.36-.634c.015.034-.02.016.026-.206c.048-.23.15-.538.315-1.034zM5.5 7.59c-.523 0-.847-.002-1.08-.03c-.225-.026-.232-.065-.204-.04L3.184 8.61c.317.3.707.398 1.058.44c.343.04.774.04 1.258.04zm-2.698.489c.093.2.223.38.382.53l1.032-1.088a.3.3 0 0 1-.055-.076zm16.695-1.874c.166.496.267.804.315 1.034c.046.222.01.24.027.206l1.36.634c.184-.396.153-.796.082-1.143c-.07-.338-.207-.746-.36-1.205zM18.5 9.09c.485 0 .915.002 1.258-.04c.351-.04.74-.139 1.058-.44l-1.032-1.088c.028-.026.021.013-.203.04c-.234.027-.558.028-1.08.028zm1.339-1.644a.3.3 0 0 1-.055.076l1.032 1.089c.16-.152.29-.332.382-.531zM14.815 2.75c.934 0 1.579 0 2.082.052c.488.049.775.14 1.005.281l.785-1.278c-.493-.303-1.027-.434-1.639-.496c-.596-.06-1.33-.059-2.233-.059zm6.07 2.873c-.287-.857-.518-1.553-.764-2.1c-.252-.56-.545-1.025-.99-1.397l-.963 1.15c.207.173.384.416.585.863c.208.461.413 1.073.709 1.959zM17.9 3.083q.141.087.267.193l.964-1.15a4 4 0 0 0-.445-.32zM10.958 21.25c-.844 0-1.406-.001-1.831-.055c-.404-.05-.588-.14-.715-.25l-.98 1.136c.435.377.946.532 1.507.602c.54.068 1.214.067 2.02.067zm-4.7-2.562c.117.796.213 1.463.359 1.988c.151.545.378 1.028.814 1.405l.981-1.135c-.127-.11-.241-.279-.35-.671c-.115-.413-.197-.97-.32-1.804zM9.185 1.25c-.903 0-1.637 0-2.233.06c-.612.061-1.146.192-1.639.495L6.1 3.083c.23-.14.516-.232 1.004-.281c.503-.051 1.148-.052 2.082-.052zM4.54 6.098c.295-.886.5-1.498.708-1.959c.201-.447.378-.69.585-.863l-.964-1.15c-.443.372-.737.837-.989 1.398c-.246.546-.477 1.242-.763 2.1zm.774-4.293a4 4 0 0 0-.445.32l.964 1.15a2 2 0 0 1 .267-.192z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 12h11M7 17h10" opacity=".4"></svg:path></svg:g>`,
})
export class SolarCupPaperLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupStarBoldDuotoneIcon],svg[solar-cup-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.05-1.266-.076-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2c1.783 0 3.253.157 4.377.347c1.138.192 1.708.288 2.183.874c.476.586.451 1.219.4 2.485C18.78 10.259 17.76 16 12 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.458 21.25H8.543l.297-1.75a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .981.804z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16m-.854-9.977C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path>`,
})
export class SolarCupStarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupStarLineDuotoneIcon],svg[solar-cup-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></svg:path><svg:path stroke-linecap="round" d="M12 16v3" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5" opacity=".5"></svg:path><svg:path d="M11.146 6.023C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCupStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorBoldDuotoneIcon],svg[solar-cursor-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.433 16.464l1.203-1.202l2.626-2.626l1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508s-.963-.963-2.596-1.565l-5.45-2.007C6.861 4.152 5.232 3.55 4.392 4.39s-.24 2.47.962 5.73l2.006 5.45c.602 1.633.903 2.45 1.565 2.596s1.277-.47 2.508-1.702" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.636 15.262l3.938 3.938c.408.408.612.612.84.706c.302.126.643.126.946 0c.228-.094.432-.298.84-.706c.407-.408.611-.612.706-.84a1.24 1.24 0 0 0 0-.946c-.095-.228-.299-.432-.706-.84l-3.939-3.938z" opacity=".5"></svg:path>`,
})
export class SolarCursorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorLineDuotoneIcon],svg[solar-cursor-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12.636 15.262l-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702s-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392s2.47-.24 5.73.962l5.45 2.006c1.633.602 2.45.903 2.596 1.565s-.47 1.277-1.702 2.508l-1.202 1.203"></svg:path><svg:path d="m12.636 15.262l3.938 3.938c.408.408.612.612.84.706c.303.126.643.126.947 0c.227-.094.431-.298.839-.706s.611-.612.706-.84a1.24 1.24 0 0 0 0-.946c-.095-.228-.298-.432-.706-.84l-3.938-3.938" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCursorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorSquareBoldDuotoneIcon],svg[solar-cursor-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.398 14.039l2.461 2.46c.255.256.382.383.524.442c.19.079.403.079.593 0c.142-.059.27-.186.524-.441c.255-.255.382-.382.441-.524a.77.77 0 0 0 0-.593c-.059-.142-.186-.27-.441-.524l-2.461-2.461l.751-.752c.77-.77 1.154-1.154 1.064-1.568c-.091-.413-.602-.602-1.623-.978l-3.406-1.255c-2.037-.75-3.055-1.125-3.58-.6s-.15 1.543.6 3.58L9.1 14.231c.376 1.021.565 1.532.978 1.623s.798-.294 1.568-1.064z"></svg:path>`,
})
export class SolarCursorSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorSquareLineDuotoneIcon],svg[solar-cursor-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14.859 16.5l-2.461-2.461l-.752.751c-.77.77-1.154 1.154-1.568 1.064c-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58s1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978s-.294.798-1.064 1.568l-.751.752l2.46 2.461c.256.255.383.382.442.524a.77.77 0 0 1 0 .593c-.059.142-.186.27-.441.524c-.255.255-.382.382-.524.441a.77.77 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCursorSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerBoldDuotoneIcon],svg[solar-danger-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.157 3.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792l.686-.406C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarDangerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerCircleBoldDuotoneIcon],svg[solar-danger-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarDangerCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerCircleLineDuotoneIcon],svg[solar-danger-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarDangerCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerLineDuotoneIcon],svg[solar-danger-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDangerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerSquareBoldDuotoneIcon],svg[solar-danger-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarDangerSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerSquareLineDuotoneIcon],svg[solar-danger-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDangerSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerTriangleBoldDuotoneIcon],svg[solar-danger-triangle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-2.31 0-3.77 2.587-6.688 7.762l-.364.644c-2.425 4.3-3.638 6.45-2.542 8.022S6.214 21 11.636 21h.728c5.422 0 8.134 0 9.23-1.572s-.117-3.722-2.542-8.022l-.364-.645C15.77 5.587 14.311 3 12 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarDangerTriangleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerTriangleLineDuotoneIcon],svg[solar-danger-triangle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 8v5"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarDangerTriangleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseBoldDuotoneIcon],svg[solar-database-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4"></svg:path><svg:path fill="currentColor" d="M4 12v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6c0 2.21-3.582 4-8 4s-8-1.79-8-4" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4 6v6c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0 2.21-3.582 4-8 4S4 8.21 4 6" opacity=".7"></svg:path>`,
})
export class SolarDatabaseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseLineDuotoneIcon],svg[solar-database-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 18V6m16 0v12"></svg:path><svg:path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Z"></svg:path><svg:path d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4" opacity=".5"></svg:path><svg:path d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path></svg:g>`,
})
export class SolarDatabaseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDeliveryBoldDuotoneIcon],svg[solar-delivery-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"></svg:path><svg:path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324" opacity=".5"></svg:path>`,
})
export class SolarDeliveryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDeliveryLineDuotoneIcon],svg[solar-delivery-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324c.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307c.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325c-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306c-.713-.4-.955-1.277-1.44-3.032z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDeliveryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDevicesBoldDuotoneIcon],svg[solar-devices-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.052 2c1.68 0 3.01 0 4.052.142c1.072.147 1.94.456 2.624 1.152s.988 1.58 1.132 2.67c.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123c-.144 1.09-.448 1.974-1.132 2.67s-1.552 1.005-2.624 1.152C17.063 22 15.732 22 14.052 22h-.104c-1.68 0-3.01 0-4.052-.142c-1.072-.147-1.94-.456-2.624-1.152s-.988-1.58-1.132-2.67C6 16.976 6 15.622 6 13.913v-3.826c0-1.71 0-3.064.14-4.123c.144-1.09.448-1.974 1.132-2.67S8.824 2.29 9.896 2.142C10.937 2 12.268 2 13.948 2z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></svg:path>`,
})
export class SolarDevicesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDevicesLineDuotoneIcon],svg[solar-devices-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.009 8c.036-2.48.22-3.885 1.163-4.828C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"></svg:path><svg:path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 19h-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDevicesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramDownBoldDuotoneIcon],svg[solar-diagram-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.587 6.534a.75.75 0 1 0-1.174.932l3.133 3.946c.226.284.418.527.59.714c.177.196.373.379.62.51a2.25 2.25 0 0 0 2.033.045c.252-.121.456-.296.642-.483c.179-.18.382-.414.62-.688l.016-.018c.258-.298.428-.493.566-.633c.136-.136.199-.174.227-.187a.75.75 0 0 1 .678.014c.028.015.088.056.218.198c.133.145.294.347.539.656l3.118 3.926a.75.75 0 1 0 1.174-.932l-3.133-3.946c-.226-.284-.418-.527-.589-.714a2.3 2.3 0 0 0-.62-.51a2.25 2.25 0 0 0-2.034-.045a2.4 2.4 0 0 0-.642.483c-.178.18-.381.414-.62.688l-.015.018c-.259.298-.428.493-.567.633c-.136.136-.198.174-.227.188a.75.75 0 0 1-.678-.015a1 1 0 0 1-.218-.198a14 14 0 0 1-.538-.656z"></svg:path>`,
})
export class SolarDiagramDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramDownLineDuotoneIcon],svg[solar-diagram-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2" opacity=".5"></svg:path><svg:path d="m19 15l-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005s-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7"></svg:path></svg:g>`,
})
export class SolarDiagramDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramUpBoldDuotoneIcon],svg[solar-diagram-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.588 7.466a.75.75 0 1 0-1.175-.932l-3.118 3.926c-.245.309-.406.51-.539.656c-.13.143-.19.183-.218.198a.75.75 0 0 1-.678.014c-.028-.013-.09-.05-.227-.187c-.138-.14-.308-.335-.566-.633l-.017-.018c-.237-.274-.44-.508-.62-.688a2.3 2.3 0 0 0-.64-.483a2.25 2.25 0 0 0-2.035.044a2.3 2.3 0 0 0-.62.51c-.17.188-.363.43-.589.715l-3.133 3.946a.75.75 0 0 0 1.174.932l3.119-3.926c.245-.309.406-.51.538-.656c.13-.143.19-.183.218-.198a.75.75 0 0 1 .678-.014c.029.013.091.05.227.187c.139.14.308.335.567.633l.016.018c.238.274.44.508.62.688c.185.187.389.362.64.483a2.25 2.25 0 0 0 2.035-.044a2.4 2.4 0 0 0 .62-.51c.17-.188.363-.43.59-.715z"></svg:path>`,
})
export class SolarDiagramUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramUpLineDuotoneIcon],svg[solar-diagram-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2" opacity=".5"></svg:path><svg:path d="m19 7l-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005s-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"></svg:path></svg:g>`,
})
export class SolarDiagramUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialog2BoldDuotoneIcon],svg[solar-dialog-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.404 22.48l.275-.465c.44-.745.66-1.117 1.012-1.325c.351-.207.81-.222 1.725-.252c.859-.027 1.436-.102 1.93-.306a4.24 4.24 0 0 0 2.295-2.296c.323-.779.323-1.767.323-3.743v-.848c0-2.777 0-4.165-.625-5.185c-.35-.57-.83-1.05-1.4-1.4c-1.02-.625-2.408-.625-5.185-.625H8.21c-2.777 0-4.165 0-5.185.625c-.57.35-1.05.83-1.4 1.4C1 9.08 1 10.468 1 13.245v.848c0 1.976 0 2.964.323 3.744a4.24 4.24 0 0 0 2.295 2.295c.494.204 1.07.28 1.93.306c.916.03 1.374.045 1.725.252c.35.208.571.58 1.012 1.325l.275.465c.41.692 1.434.692 1.844 0m2.789-7.963a1.06 1.06 0 1 0 0-2.12a1.06 1.06 0 0 0 0 2.12m-2.65-1.06a1.06 1.06 0 1 1-2.121 0a1.06 1.06 0 0 1 2.12 0m-4.772 1.06a1.06 1.06 0 1 0 0-2.12a1.06 1.06 0 0 0 0 2.12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.486 1c1.267 0 2.274 0 3.082.077c.829.079 1.53.244 2.153.626a4.8 4.8 0 0 1 1.575 1.575c.383.624.548 1.325.627 2.153c.076.808.076 1.816.076 3.082v.866c0 .901 0 1.619-.04 2.2c-.04.595-.125 1.106-.323 1.584a4.77 4.77 0 0 1-2.67 2.617q-.21.082-.368.135h-1.65c.016-.499.016-1.093.016-1.822v-.848c0-2.777 0-4.165-.625-5.185c-.35-.57-.83-1.05-1.4-1.4c-1.02-.625-2.408-.625-5.185-.625H8.21c-.986 0-1.796 0-2.478.028v-1.65q.05-.17.13-.396q.133-.389.346-.739a4.8 4.8 0 0 1 1.576-1.575c.624-.382 1.324-.547 2.153-.626C10.745 1 11.752 1 13.019 1z" opacity=".5"></svg:path>`,
})
export class SolarDialog2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialog2LineDuotoneIcon],svg[solar-dialog-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.87 21.51l.645.382zm.259-.438l-.646-.382zm-2.258 0l.646-.382zm.26.438l-.646.382zm-6.827-4.38l.693-.286zm3.985 2.455l.024-.75zm-1.82-.29l-.287.693zm13.226-2.164l.693.287zm-3.984 2.454l-.024-.75zm1.82-.29l.287.693zM16.09 6.59l.392-.639zm1.32 1.321l.64-.392zM3.91 6.59l-.392-.64zM2.59 7.91l-.64-.392zm5.326 11.912l-.381.646zm3.599 2.07l.26-.438l-1.292-.764l-.26.438zm-3.29-.438l.26.438l1.291-.764l-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122a.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zm-14.5.8v-.8h-1.5v.8zm-1.5 0c0 .922 0 1.65.04 2.24c.04.596.125 1.104.322 1.578l1.385-.574c-.108-.261-.175-.587-.21-1.106c-.037-.527-.037-1.196-.037-2.138zm5.063 5.235c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138c-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578c.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM11.2 6.75c1.324 0 2.264 0 2.995.07c.72.069 1.16.199 1.503.409l.784-1.279c-.619-.38-1.315-.544-2.145-.623c-.818-.078-1.842-.077-3.137-.077zm7.55 6.05c0-1.295 0-2.319-.077-3.137c-.079-.83-.244-1.526-.623-2.145l-1.279.784c.21.343.34.783.409 1.503c.07.73.07 1.671.07 2.995zm-3.052-5.571a3.25 3.25 0 0 1 1.073 1.073l1.279-.784a4.75 4.75 0 0 0-1.568-1.568zM8.8 5.25c-1.295 0-2.319 0-3.137.077c-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409c.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995c.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145c-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.2 2.2 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23c.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05c.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28c-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756c.11-.153.174-.203.22-.23l-.763-1.291a2.2 2.2 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061c-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083c.216-.026.501-.036.947-.05z"></svg:path><svg:path fill="currentColor" d="m21.715 12.435l.692.287zm-2.03 2.03l.287.693zm.524-11.912l-.392.64zm1.238 1.238l.64-.392zM8.791 2.553l-.392-.64zM7.553 3.79l-.64-.392zm5.822-1.041h2.25v-1.5h-2.25zm7.875 5.625v.75h1.5v-.75zm0 .75c0 .884 0 1.51-.034 2c-.033.486-.096.785-.194 1.023l1.385.574c.187-.451.267-.933.305-1.494c.038-.554.038-1.24.038-2.103zm-.228 3.023a3 3 0 0 1-1.624 1.624l.574 1.386a4.5 4.5 0 0 0 2.435-2.436zM15.625 2.75c1.242 0 2.12 0 2.804.066c.671.064 1.075.184 1.388.376l.784-1.279c-.588-.36-1.249-.516-2.03-.59c-.77-.074-1.733-.073-2.946-.073zm7.125 5.625c0-1.213 0-2.175-.073-2.946c-.074-.781-.23-1.442-.59-2.03l-1.28.784c.193.313.313.717.377 1.388c.065.683.066 1.562.066 2.804zm-2.933-5.183a3 3 0 0 1 .99.99l1.28-.783A4.5 4.5 0 0 0 20.6 1.913zM13.375 1.25c-1.213 0-2.175 0-2.946.072c-.781.075-1.442.23-2.03.591l.783 1.28c.314-.193.718-.313 1.39-.377c.682-.065 1.56-.066 2.803-.066zm-4.976.663A4.5 4.5 0 0 0 6.913 3.4l1.279.784a3 3 0 0 1 .99-.99zM7.782 6.04c.05-.96.175-1.473.41-1.856L6.913 3.4c-.437.713-.576 1.538-.629 2.562zm10.243 9.446c.767-.026 1.384-.094 1.947-.327l-.574-1.386c-.302.125-.694.19-1.423.214z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.51 13h.008M10 13h.009m3.482 0h.009" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDialog2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialogBoldDuotoneIcon],svg[solar-dialog-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 14a8 8 0 0 1-11.45 7.22a1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.984 14.508a6 6 0 0 0 .32-.142c.291-.14.622-.189.934-.105l.996.267a1.056 1.056 0 0 0 1.294-1.294l-.267-.996a1.36 1.36 0 0 1 .105-.935A6.5 6.5 0 1 0 9.492 6.016Q9.744 6 10 6a8 8 0 0 1 7.984 8.508" opacity=".6"></svg:path>`,
})
export class SolarDialogBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialogLineDuotoneIcon],svg[solar-dialog-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M10 22a8 8 0 1 0-7.22-4.55c.172.36.232.766.13 1.15l-.328 1.227a1.3 1.3 0 0 0 1.591 1.592L5.4 21.09a1.67 1.67 0 0 1 1.15.13c1.045.5 2.215.78 3.451.78Z"></svg:path><svg:path stroke-width="1.5" d="m18 14.502l.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 1 0 9.5 5.996" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.518 14h.01m3.481 0h.009m3.482 0h.009" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDialogLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaBoldDuotoneIcon],svg[solar-diploma-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v4c0 2.828 0 4.243.879 5.121c.476.477 1.11.695 2.04.795c.075-.1.145-.179.195-.234c.116-.128.263-.273.406-.414l1.493-1.472l.551-.558a4.501 4.501 0 0 1 8.872 0l.551.558l1.493 1.472c.143.141.29.286.406.414c.05.055.12.134.194.234c.931-.1 1.565-.318 2.041-.795C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6m.751 9.917L9 16a3 3 0 1 0 .001-.083M7.676 17.25l-1.08 1.065c-.325.32-.487.48-.543.614a.643.643 0 0 0 .26.813c.122.071.342.093.783.138c.248.025.373.037.477.075a.84.84 0 0 1 .5.494c.039.103.052.225.077.47c.045.435.068.652.14.773a.66.66 0 0 0 .824.256c.137-.056.3-.215.623-.535l1.08-1.07a4.51 4.51 0 0 1-3.141-3.094m5.507 3.094l1.08 1.07c.324.32.486.48.623.535c.313.126.66.018.824-.256c.072-.12.095-.338.14-.772c.025-.246.038-.368.077-.47a.84.84 0 0 1 .5-.495c.105-.038.229-.05.477-.075c.44-.045.661-.067.783-.138a.643.643 0 0 0 .26-.812c-.056-.136-.218-.296-.542-.615l-1.08-1.066a4.51 4.51 0 0 1-3.142 3.094"></svg:path>`,
})
export class SolarDiplomaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaLineDuotoneIcon],svg[solar-diploma-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="16" r="3"></svg:circle><svg:path d="m12 19.26l-2.263 2.17c-.324.31-.486.465-.623.52c-.313.122-.66.017-.824-.25c-.072-.117-.095-.328-.14-.75c-.025-.239-.038-.358-.077-.458a.83.83 0 0 0-.5-.48c-.104-.037-.229-.049-.477-.073c-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.52c.313.122.66.017.824-.25c.072-.117.095-.328.14-.75c.025-.239.038-.358.077-.458a.83.83 0 0 1 .5-.48c.105-.037.229-.049.477-.073c.44-.043.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17L15 16.073"></svg:path><svg:path d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v4c0 2.828 0 4.243.879 5.121c.768.769 1.946.865 4.121.877" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 6h6M7 9.5h10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDiplomaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaVerifiedBoldDuotoneIcon],svg[solar-diploma-verified-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.11 13.5a1.71 1.71 0 0 0-2.22 0a1.7 1.7 0 0 1-.973.403a1.71 1.71 0 0 0-1.569 1.569c-.028.359-.17.7-.403.973a1.71 1.71 0 0 0 0 2.219a1.7 1.7 0 0 1 .403.973a1.71 1.71 0 0 0 1.57 1.57c.358.028.699.169.973.402a1.71 1.71 0 0 0 2.218 0a1.7 1.7 0 0 1 .973-.403a1.71 1.71 0 0 0 1.57-1.569c.028-.358.169-.7.402-.973a1.71 1.71 0 0 0 0-2.219a1.7 1.7 0 0 1-.403-.973a1.71 1.71 0 0 0-1.569-1.569a1.7 1.7 0 0 1-.973-.403m.902 3.603a.75.75 0 1 0-1.024-1.097l-1.63 1.523l-.346-.323a.75.75 0 0 0-1.024 1.097l.857.8a.75.75 0 0 0 1.024 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.835.836-2.156.877-4.717.879a1.71 1.71 0 0 0-.35-1.555a1.7 1.7 0 0 1-.403-.973a1.71 1.71 0 0 0-1.569-1.569a1.7 1.7 0 0 1-.973-.403a1.71 1.71 0 0 0-2.219 0a1.7 1.7 0 0 1-.973.403a1.71 1.71 0 0 0-1.569 1.569c-.028.359-.17.7-.403.973A1.71 1.71 0 0 0 7.595 18c-2.56-.002-3.88-.043-4.716-.879C2 16.243 2 14.828 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6M7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarDiplomaVerifiedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaVerifiedLineDuotoneIcon],svg[solar-diploma-verified-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.73.73-1.829.854-3.801.875l-.82.002" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 6h6M7 9.5h10" opacity=".5"></svg:path><svg:path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.404a1.71 1.71 0 0 1 1.569 1.568c.028.36.17.7.403.974a1.71 1.71 0 0 1 0 2.218a1.7 1.7 0 0 0-.403.974a1.71 1.71 0 0 1-1.57 1.569a1.7 1.7 0 0 0-.973.403a1.71 1.71 0 0 1-2.218 0a1.7 1.7 0 0 0-.974-.404a1.71 1.71 0 0 1-1.568-1.568a1.7 1.7 0 0 0-.404-.974a1.71 1.71 0 0 1 0-2.218a1.7 1.7 0 0 0 .404-.974a1.71 1.71 0 0 1 1.568-1.568c.36-.029.7-.17.974-.404Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarDiplomaVerifiedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisketteBoldDuotoneIcon],svg[solar-diskette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c.685.685 1.563 1.05 2.786 1.243l1.5.153C8.906 22 10.3 22 12 22s3.094 0 4.25-.069l1.5-.153c1.223-.194 2.102-.558 2.785-1.242" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm6.052 9c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.833l-1.5.14V21c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v.926l-1.5-.149v-.829c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08z"></svg:path>`,
})
export class SolarDisketteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisketteLineDuotoneIcon],svg[solar-diskette-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path d="M17 22v-1c0-1.886 0-2.828-.586-3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586S7 19.114 7 21v1"></svg:path><svg:path stroke-linecap="round" d="M7 8h6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDisketteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDislikeBoldDuotoneIcon],svg[solar-dislike-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.182a.833.833 0 0 0-.821.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.14.533-.551.962-1.093 1.136l-.145.047a1.35 1.35 0 0 1-.993-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.416-.777-1.058-1.4-1.725-1.975l-1.44-1.24a1.67 1.67 0 0 1-.572-1.406l.813-9.393A1.666 1.666 0 0 1 8.596 2.75h4.649c3.481 0 6.452 2.426 7.024 5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarDislikeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDislikeLineDuotoneIcon],svg[solar-dislike-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zm8.561-9.925l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A7 7 0 0 0 9.2 17.89zm2.06 3.991a.89.89 0 0 0 .596-.61l1.452.376a2.38 2.38 0 0 1-1.59 1.662zm-.863-.313a.51.51 0 0 0 .28.33l-.651 1.351a2.01 2.01 0 0 1-1.081-1.305zm.28.33a.6.6 0 0 0 .438.03l.459 1.428a2.1 2.1 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zm.581 5.641c.125.76.089 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.898-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zm-9.122 3.168a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.92.92 0 0 0 .316.774l-.98 1.137a2.42 2.42 0 0 1-.83-2.04z"></svg:path><svg:path fill="currentColor" d="m3.972 2.53l-.748-.065zM3 13.765l.747.064a.75.75 0 0 1-1.497-.064zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm.263.285a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237z" opacity=".5"></svg:path>`,
})
export class SolarDislikeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisplayBoldDuotoneIcon],svg[solar-display-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 3.844C2 4.687 2 6.044 2 8.76v.96c0 2.715 0 4.073.879 4.916c.878.844 2.293.844 5.121.844h8c2.828 0 4.243 0 5.121-.844c.879-.843.879-2.2.879-4.916v-.96c0-2.715 0-4.073-.879-4.916C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.844" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.237 19.596L12.75 17.84v-2.36h-1.5v2.36l-5.487 1.756a.714.714 0 0 0-.474.911a.757.757 0 0 0 .948.455L12 19.118l5.763 1.845a.757.757 0 0 0 .949-.456a.714.714 0 0 0-.475-.91" opacity=".5"></svg:path>`,
})
export class SolarDisplayBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisplayLineDuotoneIcon],svg[solar-display-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 9c0-2.828 0-4.243.879-5.121C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.879C22 4.757 22 6.172 22 9v1c0 2.828 0 4.243-.879 5.121C20.243 16 18.828 16 16 16H8c-2.828 0-4.243 0-5.121-.879C2 14.243 2 12.828 2 10z"></svg:path><svg:path stroke-linecap="round" d="M12 19v-2.5m0 2.5l6 2m-6-2l-6 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDisplayLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaBoldDuotoneIcon],svg[solar-dna-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.03 1.47a.75.75 0 0 1 0 1.06c-2.558 2.558-3.523 6.113-2.591 9.031c2.918.932 6.473-.033 9.03-2.591a.75.75 0 1 1 1.061 1.06c-2.622 2.623-6.264 3.854-9.556 3.213c.75 3.175-.4 6.744-2.944 9.287a.75.75 0 1 1-1.06-1.06c2.416-2.417 3.3-5.788 2.36-8.516l-.072-.212l-.212-.072c-2.727-.94-6.099-.056-8.516 2.36a.75.75 0 0 1-1.06-1.06c2.543-2.544 6.112-3.693 9.287-2.944c-.64-3.292.59-6.934 3.213-9.556a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.085 10.136L16.809 6.86a.75.75 0 0 0-1.061 1.061l3.008 3.008q.684-.34 1.329-.793M13.108 5.17l.948.947a.75.75 0 1 0 1.06-1.06L13.91 3.85q-.456.639-.802 1.32m-2.211 13.554L9.835 17.66a.75.75 0 0 0-1.06 1.06l1.353 1.354a9.4 9.4 0 0 0 .77-1.351m-7.041-4.805l3.113 3.113a.75.75 0 0 0 1.06-1.061L5.2 13.139a9.4 9.4 0 0 0-1.343.78m2.644-1.279l4.812 4.812q.022.023.048.044a8.2 8.2 0 0 0 .322-1.795L8.3 12.317a8.2 8.2 0 0 0-1.799.323m11.049-1.209a1 1 0 0 0-.097-.118l-4.878-4.878a9 9 0 0 0-.407 1.714l3.683 3.683a9 9 0 0 0 1.698-.4" opacity=".5"></svg:path>`,
})
export class SolarDnaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaLineDuotoneIcon],svg[solar-dna-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29"></svg:path><svg:path d="m6.765 11.843l5.078 5.079m.001-10.157l5.078 5.078M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDnaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddBoldDuotoneIcon],svg[solar-document-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.3 4.3 0 0 1-1.644-1.034a4.3 4.3 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651q-.243.311-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308q.355-.17.666-.412m5.849-5.809a2.163 2.163 0 1 0-3.06-3.059l-.126.128a.52.52 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33s.955.709 1.33.839c.188.065.345.1.452.12a.53.53 0 0 0 .465-.148z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddLineDuotoneIcon],svg[solar-document-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></svg:path><svg:path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5"></svg:path><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentBoldDuotoneIcon],svg[solar-document-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentLineDuotoneIcon],svg[solar-document-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 10h8m-8 4h5"></svg:path></svg:g>`,
})
export class SolarDocumentLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineBoldDuotoneIcon],svg[solar-document-medicine-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V10a.75.75 0 0 1-1.5 0V8.75H10a.75.75 0 1 1 0-1.5h1.25V6a.75.75 0 0 1 .75-.75M7.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentMedicineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineLineDuotoneIcon],svg[solar-document-medicine-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 6v2m0 0v2m0-2h-2m2 0h2m-6 6h8m-7 4h6"></svg:path></svg:g>`,
})
export class SolarDocumentMedicineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextBoldDuotoneIcon],svg[solar-document-text-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0-4A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 8a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentTextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextLineDuotoneIcon],svg[solar-document-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 12h8M8 8h8m-8 8h5"></svg:path></svg:g>`,
})
export class SolarDocumentTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsBoldDuotoneIcon],svg[solar-documents-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.879-5.121C17.243 2 15.828 2 13 2h-2c-2.828 0-4.243 0-5.121.879M8.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 12.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.235 4.058C5 4.941 5 6.177 5 8v8c0 1.823 0 3.058.235 3.942L5 19.924c-.975-.096-1.631-.313-2.121-.803C2 18.243 2 16.828 2 14v-4c0-2.829 0-4.243.879-5.121c.49-.49 1.146-.707 2.121-.803zm13.53 15.884C19 19.058 19 17.822 19 16V8c0-1.823 0-3.059-.235-3.942l.235.018c.975.096 1.631.313 2.121.803C22 5.757 22 7.17 22 9.999v4c0 2.83 0 4.243-.879 5.122c-.49.49-1.146.707-2.121.803z" opacity=".5"></svg:path>`,
})
export class SolarDocumentsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsLineDuotoneIcon],svg[solar-documents-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path d="M5 4.076c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121c.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121c-.49.49-1.146.707-2.121.803" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 13h6" opacity=".7"></svg:path><svg:path stroke-linecap="round" d="M9 9h6"></svg:path><svg:path stroke-linecap="round" d="M9 17h3" opacity=".4"></svg:path></svg:g>`,
})
export class SolarDocumentsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticBoldDuotoneIcon],svg[solar-documents-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.75 2h2c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-2c-2.828 0-4.243 0-5.121-.879c-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C6.507 2 7.922 2 10.75 2M8 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17"></svg:path><svg:path d="M1.75 4.25A.75.75 0 0 1 2.5 5v14A.75.75 0 0 1 1 19V5a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentsMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticLineDuotoneIcon],svg[solar-documents-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke-linecap="round" d="M9 13h6" opacity=".7"></svg:path><svg:path stroke-linecap="round" d="M9 9h6"></svg:path><svg:path stroke-linecap="round" d="M9 17h3" opacity=".4"></svg:path><svg:path stroke-linecap="round" d="M2 19V5m20 14V5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentsMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarBoldDuotoneIcon],svg[solar-dollar-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path d="M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75m-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm3 6.653c0-.678-.564-1.397-1.5-1.652v3.304c.936-.255 1.5-.974 1.5-1.652"></svg:path></svg:g>`,
})
export class SolarDollarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarLineDuotoneIcon],svg[solar-dollar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path></svg:g>`,
})
export class SolarDollarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticBoldDuotoneIcon],svg[solar-dollar-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183c0 1.917 1.813 3.25 3.75 3.25c1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75c-1.376 0-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183c0-1.917-1.813-3.25-3.75-3.25c-1.376 0-2.25-.906-2.25-1.75s.874-1.75 2.25-1.75c1.377 0 2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183z"></svg:path>`,
})
export class SolarDollarMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticLineDuotoneIcon],svg[solar-dollar-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path></svg:g>`,
})
export class SolarDollarMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenBoldDuotoneIcon],svg[solar-donut-bitten-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12q0 .531.054 1.048C2.404 13.352 4.367 15 6 15c1.212 0 2.606-.908 3.387-1.5l.01-.009a3 3 0 1 1 4.61.739c.47.412 1.084.77 1.798.77c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403l.092.132c.211-.81.324-1.659.324-2.535c0-5.523-4.477-10-10-10" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.527 5.417l-.058.053l-1 1a.75.75 0 1 0 1.06 1.06l.905-.904q-.409-.64-.907-1.209M5.416 4.472q.025.03.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905q-.64.41-1.209.907m5.053.058a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06zm6.131.92a.75.75 0 0 0-1.2-.9l-1.5 2a.75.75 0 1 0 1.2.9zM8.409 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 0 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m9.056 2.794a.75.75 0 0 1-1.499.07L15.9 9.013a.75.75 0 0 1 1.498-.07zm.971 1.705a.75.75 0 0 0 1.059.067l1.678-1.478a.75.75 0 0 0-.992-1.126L18.503 11a.75.75 0 0 0-.067 1.059M5.524 8.167a.75.75 0 1 1 1.365-.62l.585 1.286a.75.75 0 0 1-1.365.621zm1.418 2.728a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M2.855 8.98a.75.75 0 1 1 1.497-.084l.079 1.412a.75.75 0 0 1-1.498.083z"></svg:path><svg:path fill="currentColor" d="M6 15c1.212 0 2.607-.908 3.388-1.5l.009-.009a3 3 0 0 0 4.61.739c.47.412 1.085.77 1.799.77c.845 0 1.267-.5 1.69-1c.422-.5.844-1 1.689-1c1.077 0 1.926.814 2.399 1.403l.092.132l-.049.182c-.54-.461-1.44-.445-2.148.078c-.601.445-.893 1.13-.793 1.726l-.102.101l-.334-.452c-.616-.832-1.927-.906-2.93-.165c-1.003.742-1.316 2.018-.7 2.85l.185.25l-.185.186c-.513-.162-1.148-.054-1.675.337c-.798.59-.935 1.693-.453 2.36A10 10 0 0 1 12 22c-5.168 0-9.421-3.922-9.945-8.952C2.404 13.352 4.367 15 6 15"></svg:path>`,
})
export class SolarDonutBittenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenLineDuotoneIcon],svg[solar-donut-bitten-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.5 7L16 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19 7l1-1" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 5l-1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.5 7l-1.366.366M7 5L6 4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6.792 9.144l-.585-1.288"></svg:path><svg:path fill="currentColor" d="m12.5 22l.034.75a.75.75 0 0 0 .569-1.196zm.444-2.372l.446.603zm6.535-4.833l-.446-.603zm-4.86 4.06l.603-.446zm.7-2.85l.446.603zm2.93.165l.604-.446zm3.378-1.453l-.487.57a.75.75 0 0 0 1.208-.367zm-3.043 1.906l-.603.446a.75.75 0 0 0 1.133.084zm.101-.102l.53.53a.75.75 0 0 0 .21-.654zm-4.066 2.77l-.225.715a.75.75 0 0 0 .755-.185zm.185-.185l.53.53a.75.75 0 0 0 .073-.976zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046zM21.25 12a9.3 9.3 0 0 1-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0zm5.18-4.634l.335.453l1.206-.892l-.335-.453zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453zm-.312.756l.102-.101l-1.06-1.061l-.102.101zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449zm.626-.93l.185.25l1.206-.891l-.185-.25zm1.133.52l.186-.185l-1.061-1.06l-.185.185z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m6.613 2c-.5-.5-1.529-.861-2-1.276" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.65 8.977l.066 1.412" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.678 10.085L19 11.563M5.665 12.641L6.5 11.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m3.683 10.35l-.079-1.412" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDonutBittenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBoldDuotoneIcon],svg[solar-donut-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12q0 .531.054 1.048C2.404 13.352 4.367 15 6 15c1.212 0 2.606-.908 3.387-1.5l.01-.009a3 3 0 1 1 4.61.739c.47.412 1.084.77 1.798.77c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403l.092.132c.211-.81.324-1.659.324-2.535c0-5.523-4.477-10-10-10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.388 13.5C8.607 14.092 7.212 15 6 15c-1.633 0-3.596-1.648-3.945-1.952C2.579 18.078 6.832 22 12 22c4.647 0 8.554-3.17 9.676-7.465l-.092-.132c-.473-.59-1.322-1.403-2.4-1.403c-1.689 0-1.689 2-3.378 2c-.714 0-1.328-.357-1.798-.77a3 3 0 0 1-4.61-.739zm10.14-8.083l-.058.053l-1 1a.75.75 0 1 0 1.06 1.06l.905-.904q-.409-.64-.907-1.209M5.417 4.472q.025.03.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905q-.64.41-1.209.907m5.053.058a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06zm6.13.92a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 1.2.9zM8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 1 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m9.056 2.794a.75.75 0 1 1-1.499.07l-.066-1.412a.75.75 0 0 1 1.498-.07zm.971 1.705a.75.75 0 0 0 1.059.067l1.678-1.478a.75.75 0 1 0-.992-1.126L18.504 11a.75.75 0 0 0-.067 1.059M5.525 8.167a.75.75 0 1 1 1.365-.62l.585 1.286a.75.75 0 1 1-1.365.621z"></svg:path><svg:path fill="currentColor" d="M6.943 10.895a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M2.856 8.98a.75.75 0 0 1 1.497-.084l.079 1.412a.75.75 0 0 1-1.498.083z"></svg:path>`,
})
export class SolarDonutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutLineDuotoneIcon],svg[solar-donut-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.5 7L16 5"></svg:path><svg:path stroke-linecap="round" d="m19 7l1-1" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12 5l-1-1"></svg:path><svg:path stroke-linecap="round" d="m10.5 7l-1.366.366m7.516 1.611l.066 1.412" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20.678 10.085L19 11.563"></svg:path><svg:path stroke-linecap="round" d="M7 5L6 4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6.792 9.144l-.585-1.288m-.542 4.786L6.5 11.5"></svg:path><svg:path stroke-linecap="round" d="m3.683 10.35l-.079-1.412" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDonutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownBoldDuotoneIcon],svg[solar-double-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownLineDuotoneIcon],svg[solar-double-alt-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 11l-7 6l-7-6"></svg:path><svg:path d="m19 7l-7 6l-7-6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftBoldDuotoneIcon],svg[solar-double-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 19a.75.75 0 0 1-1.32.488l-6-7a.75.75 0 0 1 0-.976l6-7A.75.75 0 0 1 17.75 5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.488 19.57a.75.75 0 0 0 .081-1.058L7.988 12l5.581-6.512a.75.75 0 1 0-1.138-.976l-6 7a.75.75 0 0 0 0 .976l6 7a.75.75 0 0 0 1.057.082" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftLineDuotoneIcon],svg[solar-double-alt-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13 19l-6-7l6-7"></svg:path><svg:path d="m17 19l-6-7l6-7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightBoldDuotoneIcon],svg[solar-double-alt-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 19a.75.75 0 0 0 1.32.488l6-7a.75.75 0 0 0 0-.976l-6-7A.75.75 0 0 0 6.25 5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.512 19.57a.75.75 0 0 1-.081-1.058L16.012 12l-5.581-6.512a.75.75 0 1 1 1.139-.976l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.058.082" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightLineDuotoneIcon],svg[solar-double-alt-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11 19l6-7l-6-7"></svg:path><svg:path d="m7 19l6-7l-6-7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBoldDuotoneIcon],svg[solar-double-alt-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpLineDuotoneIcon],svg[solar-double-alt-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 13l-7-6l-7 6"></svg:path><svg:path d="m19 17l-7-6l-7 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadBoldDuotoneIcon],svg[solar-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-1c0-2.828 0-4.242-.879-5.12C20.242 9 18.828 9 16 9H8c-2.829 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.997V16c0 2.829 0 4.243.879 5.122C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadLineDuotoneIcon],svg[solar-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"></svg:path></svg:g>`,
})
export class SolarDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticBoldDuotoneIcon],svg[solar-download-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 14.25a.75.75 0 0 1 .75.75c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191a.75.75 0 0 1 1.5 0v.055c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V15a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path><svg:path d="M12 16.75a.75.75 0 0 0 .553-.244l4-4.375a.75.75 0 1 0-1.107-1.012l-2.696 2.95V3a.75.75 0 0 0-1.5 0v11.068l-2.696-2.95a.75.75 0 0 0-1.108 1.013l4 4.375a.75.75 0 0 0 .554.244"></svg:path></svg:g>`,
})
export class SolarDownloadMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticLineDuotoneIcon],svg[solar-download-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15" opacity=".5"></svg:path><svg:path d="M12 3v13m0 0l4-4.375M12 16l-4-4.375"></svg:path></svg:g>`,
})
export class SolarDownloadMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBoldDuotoneIcon],svg[solar-download-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarDownloadSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareLineDuotoneIcon],svg[solar-download-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v7m0 0l3-3m-3 3l-3-3"></svg:path><svg:path stroke-linecap="round" d="M16 17H8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDownloadSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareBoldDuotoneIcon],svg[solar-download-twice-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.5 6.25a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75m7 0a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75m-9.5 10a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarDownloadTwiceSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareLineDuotoneIcon],svg[solar-download-twice-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 7v7m0 0l2.5-3m-2.5 3L6 11m9.5-4v7m0 0l2.5-3m-2.5 3L13 11"></svg:path><svg:path stroke-linecap="round" d="M18 17H6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDownloadTwiceSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2BoldDuotoneIcon],svg[solar-dropper-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.998 9.25H19a.75.75 0 0 0 0 1.5h3v1.5h-2a.75.75 0 0 0 0 1.5h2v2.757c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03zm.956 18.122v1.026a.75.75 0 1 0 1.5 0v-1.026a8 8 0 0 1-1.5 0" opacity=".5"></svg:path>`,
})
export class SolarDropper2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2LineDuotoneIcon],svg[solar-dropper-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10h-3"></svg:path><svg:path d="M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M22 13h-2"></svg:path><svg:path stroke-linecap="round" d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507Z"></svg:path></svg:g>`,
})
export class SolarDropper2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3BoldDuotoneIcon],svg[solar-dropper-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507M13.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M16 13.5c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03zm.956 18.122v1.026a.75.75 0 1 0 1.5 0v-1.026a8 8 0 0 1-1.5 0" opacity=".5"></svg:path>`,
})
export class SolarDropper3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3LineDuotoneIcon],svg[solar-dropper-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507ZM18 16h-4"></svg:path><svg:path d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDropper3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperBoldDuotoneIcon],svg[solar-dropper-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.75v2.757c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5h4v1.5h-3a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M15.25 20.224v1.026a.75.75 0 1 0 1.5 0v-1.026a8 8 0 0 1-1.5 0m-.956-18.122a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z" opacity=".5"></svg:path>`,
})
export class SolarDropperBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperLineDuotoneIcon],svg[solar-dropper-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10h-4m4 3h-3"></svg:path><svg:path d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6" opacity=".5"></svg:path><svg:path d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507Z"></svg:path></svg:g>`,
})
export class SolarDropperLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BoldDuotoneIcon],svg[solar-dropper-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.998 7.25H17a.75.75 0 0 0 0 1.5h2V8q0-.403-.002-.75m.002 3h-2a.75.75 0 0 0 0 1.5h2zm0 3h-2a.75.75 0 0 0 0 1.5h2zM14 4a2 2 0 1 0-4 0zm-2.75 16.235q.75.063 1.5 0v1.015a.75.75 0 0 1-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3"></svg:path>`,
})
export class SolarDropperMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2LineDuotoneIcon],svg[solar-dropper-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4"></svg:path><svg:path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDropperMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticBoldDuotoneIcon],svg[solar-dropper-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3m4.998-4.667H17a.75.75 0 0 0 0 1.5h2V8q0-.403-.002-.75m.002 3h-2a.75.75 0 0 0 0 1.5h2zm0 3h-2a.75.75 0 0 0 0 1.5h2zM14 4a2 2 0 1 0-4 0zm-2.75 16.235q.75.063 1.5 0v1.015a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarDropperMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticLineDuotoneIcon],svg[solar-dropper-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM19 8h-2m2 6h-2"></svg:path><svg:path d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M19 11h-2"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDropperMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellBoldDuotoneIcon],svg[solar-dumbbell-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 17 19.932 17 19 17s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 15.398 16 14.432 16 13.5v-3c0-.932 0-1.898.152-2.265a2 2 0 0 1 1.083-1.083C17.602 7 18.068 7 19 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 8.602 22 9.068 22 10m-14 .5v3c0 .932 0 1.898-.152 2.265a2 2 0 0 1-1.083 1.083C6.398 17 5.932 17 5 17s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 15.398 2 14.932 2 14v-4c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 7 4.068 7 5 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C8 8.602 8 9.568 8 10.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 10.5H8v3h8z" opacity=".5"></svg:path>`,
})
export class SolarDumbbellBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeBoldDuotoneIcon],svg[solar-dumbbell-large-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.292 15.304l4.404 4.405l.367.367l.735.734c.686.686 1.029 1.029 1.432 1.137c.264.07.542.07.806 0c.403-.108.746-.451 1.432-1.137s1.03-1.03 1.137-1.433a1.55 1.55 0 0 0 0-.806c-.107-.403-.45-.746-1.137-1.432l-1.1-1.101l-4.406-4.405l-1.101-1.101c-.686-.686-1.03-1.03-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.404.107-.747.45-1.433 1.137c-.686.686-1.029 1.029-1.137 1.432c-.07.264-.07.542 0 .806c.108.403.451.746 1.137 1.432zm11.746-2.937l-4.405-4.405l-1.101-1.101c-.686-.686-1.03-1.03-1.137-1.432a1.56 1.56 0 0 1 0-.806c.107-.404.45-.747 1.137-1.433c.686-.686 1.029-1.029 1.432-1.137c.264-.07.542-.07.806 0c.403.108.746.451 1.432 1.137l1.102 1.102l4.4 4.408l.372.363l.734.735c.686.686 1.029 1.029 1.137 1.432c.07.264.07.542 0 .806c-.108.403-.451.746-1.137 1.432s-1.03 1.03-1.433 1.137a1.55 1.55 0 0 1-.806 0c-.403-.107-.746-.45-1.432-1.137z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.608 3.924l1.468 1.468l.126.126c.608.61.912.94.912 1.343c0 .43-.346.776-1.038 1.468l-.371.37l-4.4-4.408l.366-.367c.692-.692 1.038-1.038 1.468-1.038s.777.346 1.469 1.038M5.393 20.076l-1.469-1.469c-.692-.692-1.038-1.038-1.038-1.468s.346-.776 1.038-1.468l.367-.367l4.405 4.405l-.367.367c-.692.692-1.038 1.038-1.468 1.038s-.776-.346-1.468-1.038m10.644-7.709l-3.67 3.67l-4.405-4.404l3.67-3.671z" opacity=".5"></svg:path>`,
})
export class SolarDumbbellLargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeLineDuotoneIcon],svg[solar-dumbbell-large-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m3.924 18.607l.53-.53zm1.469 1.469l-.53.53zm3.67 0l-.53.53zm.735.734l.53-.53zm4.807-1.433l-.724-.194zm-1.137-2.238l-.53.53zm1.137 1.432l-.724.194zm-2.569 3.376l-.194-.724zm-.806 0l.194-.724zm-9.177-9.983l.725.194zm1.137 2.238l-.53.53zM2.053 12.77l-.724.194zm2.57-3.375l.194.724zm2.238 1.137l-.53.53zM5.429 9.395l.194-.725zm13.948 5.21l-.194-.724zm-2.238-1.137l-.53.53zm1.432 1.137l.194-.724zm3.376-2.569l-.724-.194zm0-.806l-.724.194zm-9.983-9.177l-.194-.724zm2.238 1.137l-.53.53zM12.77 2.053l-.194.725zm-3.375 2.57l-.725-.195zm1.137 2.238l-.53.53zM9.395 5.429l.724-.194zm-2.37 11.547a.75.75 0 0 1-1.061 1.06zm11.01-11.012a.75.75 0 1 1-1.06 1.06zm-5.669 10.074l.53-.53zm3.67-3.67l.531-.531zm-8.075-.735l.53-.53zm3.67-3.67l.531-.531zM4.456 18.076l1.468 1.468l-1.06 1.06l-1.469-1.467zm15.09-12.154l-1.468-1.468l1.06-1.06l1.469 1.467zm0 1.876c.361-.361.578-.58.713-.757a.8.8 0 0 0 .099-.156c.008-.02.007-.024.007-.025h1.5c0 .445-.19.797-.413 1.09c-.211.277-.514.578-.845.909zm1.06-2.937c.332.331.635.632.846.908c.223.294.413.646.413 1.091h-1.5s0-.005-.007-.025a.8.8 0 0 0-.099-.156c-.135-.177-.352-.396-.713-.757zM5.924 19.545c.361.361.58.578.757.713a.8.8 0 0 0 .156.099c.02.008.024.007.025.007v1.5c-.445 0-.797-.19-1.09-.413c-.277-.211-.578-.514-.909-.845zm2.937 1.06c-.331.332-.632.635-.908.846c-.294.223-.646.413-1.091.413v-1.5s.005 0 .025-.007a.8.8 0 0 0 .156-.099c.177-.135.396-.352.757-.713zm-4.405-4.404c-.361.361-.578.58-.713.757a.8.8 0 0 0-.099.156c-.008.02-.007.024-.007.025h-1.5c0-.445.19-.797.413-1.09c.211-.277.514-.577.845-.909zm-1.06 2.937c-.332-.332-.635-.632-.846-.908c-.223-.294-.413-.646-.413-1.091h1.5s0 .005.007.025a1 1 0 0 0 .099.156c.135.177.352.396.713.757zM15.14 3.394c.332-.331.632-.634.908-.845c.294-.223.646-.413 1.091-.413v1.5s-.005 0-.025.007a.8.8 0 0 0-.156.099c-.177.135-.396.352-.757.713zm2.937 1.06c-.361-.36-.58-.577-.757-.712a.8.8 0 0 0-.156-.099c-.02-.008-.024-.007-.025-.007v-1.5c.445 0 .797.19 1.09.413c.277.211.578.514.909.845zM9.594 19.546l.734.734l-1.06 1.061l-.735-.734zm3.344.734c.353-.352.581-.582.74-.772c.151-.182.189-.27.203-.324l1.449.389c-.094.35-.282.634-.5.896c-.212.254-.498.539-.831.872zm1.06-3.67c.334.333.62.618.832.872c.218.262.406.546.5.896l-1.449.388c-.014-.053-.052-.142-.203-.323c-.159-.19-.387-.42-.74-.773zm-.117 2.574a.8.8 0 0 0 0-.418l1.449-.388c.105.391.105.803 0 1.195zM14 21.34c-.334.333-.619.62-.873.831c-.262.219-.546.407-.896.5l-.388-1.448c.053-.015.142-.052.324-.204c.19-.158.42-.387.772-.74zm-3.671-1.06c.353.352.582.58.772.74c.182.15.271.188.324.203l-.388 1.448c-.35-.093-.634-.281-.896-.5c-.255-.212-.54-.498-.873-.831zm1.902 2.391a2.3 2.3 0 0 1-1.194 0l.388-1.448a.8.8 0 0 0 .418 0zM3.72 11.062a13 13 0 0 0-.74.772c-.15.182-.188.271-.202.324l-1.45-.388c.094-.35.282-.634.5-.896c.213-.254.499-.54.832-.873zm-1.06 3.67c-.333-.333-.62-.617-.831-.872c-.219-.262-.407-.546-.5-.896l1.449-.388c.014.053.051.142.203.324c.158.19.387.42.74.772zm.118-2.574a.8.8 0 0 0 0 .418l-1.45.388a2.3 2.3 0 0 1 0-1.194zm-.118-2.157c.333-.333.618-.619.872-.83c.262-.22.546-.407.896-.5l.389 1.448c-.053.014-.142.052-.324.203c-.19.159-.42.387-.772.74zm3.67 1.061a13 13 0 0 0-.772-.74c-.181-.151-.27-.189-.323-.203l.388-1.449c.35.094.634.282.896.5c.254.212.539.498.872.831zM4.429 8.67a2.3 2.3 0 0 1 1.195 0l-.388 1.449a.8.8 0 0 0-.418 0zm16.178-.137l.734.734l-1.06 1.06l-.735-.733zM21.34 14c-.333.333-.618.619-.872.83c-.262.22-.546.407-.896.5l-.389-1.448c.053-.014.142-.052.324-.203c.19-.159.42-.387.772-.74zm-3.67-1.061c.352.353.582.581.772.74c.181.151.27.189.323.203l-.388 1.449c-.35-.094-.634-.282-.896-.5c-.254-.212-.539-.498-.872-.831zm1.901 2.392a2.3 2.3 0 0 1-1.194 0l.388-1.449a.8.8 0 0 0 .418 0zm.708-2.392c.353-.353.582-.583.74-.772c.152-.182.19-.271.204-.324l1.448.388c-.093.35-.281.634-.5.896c-.212.254-.498.54-.831.873zm1.061-3.67c.333.333.62.617.831.872c.219.262.407.546.5.896l-1.448.388c-.015-.053-.052-.142-.204-.324c-.158-.19-.387-.42-.74-.772zm-.117 2.574a.8.8 0 0 0 0-.418l1.448-.388c.105.391.105.803 0 1.194zM10 2.66c.334-.333.619-.62.873-.831c.262-.219.546-.407.896-.5l.388 1.449c-.053.014-.142.051-.324.203c-.19.158-.42.387-.772.74zm3.671 1.06a13 13 0 0 0-.772-.74c-.182-.15-.271-.188-.324-.202l.388-1.45c.35.094.634.282.896.5c.255.213.54.499.873.832zM11.77 1.33a2.3 2.3 0 0 1 1.194 0l-.388 1.449a.8.8 0 0 0-.418 0zm-.708 2.392c-.353.352-.581.582-.74.772c-.151.182-.189.27-.203.324l-1.449-.39c.094-.35.282-.634.5-.896c.212-.254.498-.539.831-.872zm-1.06 3.67c-.334-.333-.62-.618-.832-.872c-.218-.262-.406-.546-.5-.896l1.449-.388c.014.053.052.142.203.323c.159.19.387.42.74.773zm.117-2.574a.8.8 0 0 0 0 .418l-1.449.388a2.3 2.3 0 0 1 0-1.195zM3.72 13.672l3.303 3.304l-1.06 1.06l-3.304-3.303zM14.733 2.66l3.303 3.304l-1.06 1.06l-3.304-3.303zm-1.795 15.01l-1.101-1.102l1.06-1.06l1.102 1.1zm3.67-3.671l-1.1-1.102l1.06-1.06l1.101 1.101zm-4.771 2.57l-4.405-4.406l1.06-1.06l4.405 4.405zm-4.405-4.406L6.33 11.062l1.06-1.06l1.102 1.1zm8.076.734l-4.405-4.404l1.06-1.061l4.405 4.405zm-4.405-4.404L10 7.39l1.061-1.06l1.101 1.1zm8.442 1.1a1.27 1.27 0 0 1 0-1.794l1.06 1.06a.23.23 0 0 0 0-.326zM8.533 20.607c.09.09.236.09.327 0l-1.061-1.06a1.27 1.27 0 0 1 1.795 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.367 16.038l3.67-3.671m-8.075-.734l3.671-3.671" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticBoldDuotoneIcon],svg[solar-dumbbell-large-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.432 15.62l4.949 4.948c.904.905 1.356 1.357 1.908 1.421q.185.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-1.113-1.111l-3.103-3.104l-.734-.733c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91m8.733-7.267l3.104 3.104l1.112 1.111c.904.905 1.356 1.357 1.908 1.421q.186.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-4.95-4.948c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m11.457 15.269l3.812-3.812l-3.104-3.104l-3.812 3.812z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.489 1.968a.75.75 0 0 1 1.06 0l3.105 3.104a.75.75 0 0 1-1.061 1.06l-3.104-3.104a.75.75 0 0 1 0-1.06M1.968 17.488a.75.75 0 0 1 1.06 0l3.104 3.104a.75.75 0 0 1-1.06 1.06l-3.104-3.104a.75.75 0 0 1 0-1.06" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarDumbbellLargeMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticLineDuotoneIcon],svg[solar-dumbbell-large-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88" opacity=".5"></svg:path><svg:path d="M3.432 15.62c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42zm8-8c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.022.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.185 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.019 2.498l3.104 3.104M2.498 18.019l3.104 3.104" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLineDuotoneIcon],svg[solar-dumbbell-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.235 16.848l-.287.693zM16 13.5h.75a.75.75 0 0 0-.75-.75zm.152 2.265l-.693.287zm5.696 0l.693.287zm-1.083 1.083l-.287-.693zm0-9.696l-.287.693zm1.083 1.083l.693-.287zm-4.613-1.083l-.287-.693zM16 10.5v.75a.75.75 0 0 0 .75-.75zm.152-2.265l-.693-.287zM3.235 16.848l-.287.693zm-1.083-1.083l-.693.287zM8 13.5v-.75a.75.75 0 0 0-.75.75zm-.152 2.265l.693.287zm-1.083 1.083l.287.693zm0-9.696l.287-.693zM8 10.5h-.75c0 .414.336.75.75.75zm-.152-2.265l.693-.287zM3.235 7.152l-.287-.693zM2.152 8.235l-.693-.287zM21.25 10v4h1.5v-4zM19 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zm-3.75-2.75c0 .461 0 .954.02 1.38c.01.213.026.421.051.609c.024.176.063.382.138.563l1.386-.574l-.012-.045a2 2 0 0 1-.026-.147a6 6 0 0 1-.039-.477a30 30 0 0 1-.018-1.309zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM21.25 14c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zM19 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM19 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zM22.75 10c0-.456 0-.835-.02-1.145a2.8 2.8 0 0 0-.19-.907l-1.385.574c.032.077.061.194.078.435c.017.247.017.567.017 1.043zm-2.272-2.155c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM19 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017zm-2.25 4.25c0-.47 0-.926.018-1.309q.014-.286.04-.477q.012-.093.025-.147l.012-.045l-1.386-.574a2.3 2.3 0 0 0-.138.563a7 7 0 0 0-.051.61c-.02.425-.02.918-.02 1.379zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM2.75 14v-4h-1.5v4zM5 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zM1.25 14c0 .456 0 .835.02 1.145c.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 14zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM7.25 13.5c0 .47 0 .926-.018 1.309q-.014.286-.04.477a2 2 0 0 1-.025.147l-.012.045l1.386.574c.075-.181.114-.387.138-.563c.025-.188.041-.396.051-.61c.02-.425.02-.918.02-1.379zM5 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17 17 0 0 1 5 16.25zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM5 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm3.75 2.75c0-.461 0-.954-.02-1.38a7 7 0 0 0-.051-.609a2.3 2.3 0 0 0-.138-.563l-1.386.574l.012.045q.012.053.026.147a6 6 0 0 1 .039.477c.018.383.018.838.018 1.309zM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM5 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17 17 0 0 1 5 7.75zM2.75 10c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907c-.021.31-.021.69-.021 1.145zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM8 11.25h8v-1.5H8zm8 1.5H8v1.5h8z"></svg:path>`,
})
export class SolarDumbbellLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBoldDuotoneIcon],svg[solar-dumbbell-small-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C17.697 7 17.464 7 17 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C15 8.304 15 8.536 15 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C19 15.697 19 15.464 19 15M5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C6.304 17 6.536 17 7 17s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C9 15.697 9 15.464 9 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.696 7 7.464 7 7 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C5 8.304 5 8.536 5 9"></svg:path><svg:path fill="currentColor" d="M15 12.75H9v-1.5h6zM3.5 12A2 2 0 0 1 5 10.063v3.874A2 2 0 0 1 3.5 12m17 0a2 2 0 0 1-1.5 1.937v-3.874a2 2 0 0 1 1.5 1.936" opacity=".5"></svg:path>`,
})
export class SolarDumbbellSmallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallLineDuotoneIcon],svg[solar-dumbbell-small-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889Zm-11 0v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z"></svg:path><svg:path d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDumbbellSmallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2BoldDuotoneIcon],svg[solar-dumbbells-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.985 7.443l-2.94-.354c-.686-.082-1.028-.124-1.313-.053c-.38.095-.703.326-.899.642c-.147.236-.192.554-.28 1.188c-.09.635-.134.952-.057 1.216c.102.351.351.65.692.832c.256.136.966.222 1.651.304l-.883 6.298c-.685-.082-1.396-.168-1.68-.096c-.38.094-.703.325-.9.64c-.146.238-.19.555-.28 1.19c-.089.634-.133.951-.057 1.215c.103.351.352.65.693.832c.255.137.598.178 1.283.26l2.94.354c.686.082 1.028.124 1.313.052a1.47 1.47 0 0 0 .899-.64c.147-.238.192-.555.28-1.19c.09-.634.134-.95.057-1.215a1.4 1.4 0 0 0-.692-.832c-.256-.136-.966-.222-1.651-.304l.883-6.298c.685.082 1.396.168 1.68.096c.38-.094.703-.325.9-.64c.146-.238.19-.555.28-1.19c.089-.634.133-.951.057-1.215a1.4 1.4 0 0 0-.693-.832c-.255-.137-.598-.178-1.283-.26" opacity=".5"></svg:path><svg:path fill="currentColor" d="m20.286 16.083l-2.712.7c-.632.163-.947.244-1.224.209a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179c.049-.355.242-.677.537-.895c.222-.164.877-.333 1.508-.496l-1.68-6.036c-.632.163-1.286.332-1.563.297a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179a1.34 1.34 0 0 1 .538-.895c.221-.164.537-.245 1.168-.408l2.712-.7c.632-.163.947-.244 1.224-.209c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.537.895c-.222.164-.877.333-1.508.496l1.68 6.036c.631-.163 1.286-.332 1.563-.297c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.538.895c-.221.164-.537.245-1.169.408"></svg:path>`,
})
export class SolarDumbbells2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2LineDuotoneIcon],svg[solar-dumbbells-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.044 7.089l.09-.745zm2.941.354l-.09.744zm1.638 3.496l.638.396zm-2.579.545l.09-.745a.75.75 0 0 0-.832.64zm1.68.096l-.181-.727zm.544-3.877l.353-.662zm.693.832l-.72.21zm-7.128-.857l-.637-.396zm.9-.642L4.55 6.31zm-1.237 3.046l-.72.21zm2.343 1.136l.743.104a.75.75 0 0 0-.653-.848zm-1.65-.304l.352-.662zm2.767 10.997l-.09.745zm-2.941-.354l.09-.744zm5.433-1.423l.742.104zm-.281 1.188l-.637-.395zm-.9.642l.183.727zm-1.106-4.182l-.743-.105a.75.75 0 0 0 .653.85zm1.65.304l.353-.662zm.693.832l-.72.21zm-7.408.331l.743.105zm.28-1.188l-.637-.396zm2.58-.545l-.09.745a.75.75 0 0 0 .832-.64zm-1.68-.096l-.182-.728zm-1.237 3.045l-.72.21zm.693.832l-.353.662zM5.955 7.834l2.94.353l.18-1.489l-2.941-.354zm4.206 1.813a10 10 0 0 1-.109.689a.7.7 0 0 1-.066.208l1.275.79c.137-.22.208-.452.258-.682c.047-.221.085-.49.128-.797zm-2.206 2.581c.338.041.704.085 1.023.11c.28.02.65.04.928-.03l-.363-1.455c.016-.004-.01.003-.11.004q-.133 0-.341-.015c-.28-.022-.61-.061-.958-.103zm2.031-1.684a.72.72 0 0 1-.443.309l.363 1.455a2.22 2.22 0 0 0 1.355-.973zm-1.09-2.357c.351.043.58.07.755.103a1 1 0 0 1 .265.075l.705-1.324a2.4 2.4 0 0 0-.697-.226c-.232-.043-.516-.077-.85-.117zm2.75 1.668c.044-.306.082-.576.097-.802a2.1 2.1 0 0 0-.062-.727l-1.44.419c.003.013.015.06.005.21c-.01.157-.039.363-.085.692zm-1.73-1.49a.64.64 0 0 1 .325.38l1.44-.42a2.14 2.14 0 0 0-1.06-1.284zm-5.62.605c.045-.328.075-.534.108-.689a.7.7 0 0 1 .066-.208l-1.274-.79a2.1 2.1 0 0 0-.258.682c-.048.22-.085.49-.128.797zm1.838-2.626c-.333-.04-.617-.074-.853-.088a2.4 2.4 0 0 0-.73.053l.363 1.455a1 1 0 0 1 .282-.01c.177.01.407.037.759.08zM4.47 8.074a.72.72 0 0 1 .444-.31L4.55 6.31c-.557.14-1.05.482-1.354.973zm-1.66.688c-.043.306-.082.576-.096.802c-.016.233-.011.476.062.727l1.44-.42a.7.7 0 0 1-.006-.209c.01-.157.04-.363.085-.692zm3.119 1.712a23 23 0 0 1-.954-.127a4 4 0 0 1-.335-.067c-.095-.024-.117-.037-.1-.028l-.704 1.324c.254.136.619.205.894.25c.315.052.681.096 1.02.137zm-3.153-.183a2.14 2.14 0 0 0 1.06 1.285l.705-1.324a.64.64 0 0 1-.325-.38zm4.27 10.875l-2.941-.353l-.18 1.489l2.941.354zm1.659-1.136c-.046.328-.076.534-.11.689a.7.7 0 0 1-.065.208l1.274.79a2.1 2.1 0 0 0 .258-.682c.048-.22.085-.49.128-.797zm-1.839 2.626c.333.04.617.074.853.088c.242.013.484.009.73-.053l-.363-1.455a1 1 0 0 1-.282.01c-.177-.01-.407-.037-.759-.08zm1.664-1.73a.72.72 0 0 1-.444.31l.364 1.455a2.22 2.22 0 0 0 1.354-.973zm-1.459-2.4c.348.042.679.082.954.128q.207.033.335.066c.095.024.117.037.1.028l.704-1.324c-.254-.136-.619-.205-.894-.25c-.315-.052-.681-.096-1.02-.137zm3.12 1.712c.042-.306.08-.576.095-.802a2.1 2.1 0 0 0-.062-.727l-1.44.42a.6.6 0 0 1 .006.209c-.01.157-.04.363-.085.692zm-1.732-1.49a.64.64 0 0 1 .325.38l1.44-.42a2.14 2.14 0 0 0-1.06-1.284zm-5.62.605c.046-.328.075-.534.109-.689a.7.7 0 0 1 .066-.208l-1.275-.79a2.1 2.1 0 0 0-.258.682c-.047.221-.085.49-.128.797zm2.206-2.581a26 26 0 0 0-1.022-.11c-.281-.02-.65-.04-.93.03l.364 1.455c-.016.004.01-.003.11-.004q.133 0 .341.015c.28.021.61.061.958.103zm-2.031 1.684a.72.72 0 0 1 .443-.309l-.363-1.455c-.558.14-1.05.482-1.355.973zm-1.66.69c-.044.305-.082.575-.097.8c-.015.234-.01.477.062.728l1.44-.419a.7.7 0 0 1-.005-.21c.01-.157.039-.363.085-.692zm2.75 1.667c-.351-.043-.58-.07-.755-.103a1 1 0 0 1-.265-.075L2.38 21.96c.225.12.46.182.697.226c.232.043.516.077.85.117zm-2.785-.139a2.14 2.14 0 0 0 1.06 1.285l.705-1.323a.64.64 0 0 1-.325-.381zm4.38-3.053l.883-6.298l-1.486-.209l-.883 6.298zm1.603-6.241l-.884 6.297l1.486.209l.883-6.298z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.574 16.783l-.187-.727zm2.711-.7l.188.727zm1.065-3.607l.587-.468zm-2.493-.22l-.723.2a.75.75 0 0 0 .91.526zm1.563-.297l.094-.744zm1.034 3.716l.446.604zm.538-.895l.743.101zm-6.573 1.695l-.586.467zm.93.517l-.093.744zm-1.57-2.82l-.744-.103zm2.044-1.392l.188.726a.75.75 0 0 0 .535-.927zm-1.508.496l-.445-.604zm1.11-11.059l.188.727zm-2.71.7l-.188-.727zm5.29.733l-.723.202zm-.424-1.125l-.587.468zm-.93-.517l.093-.744zm-.474 4.212l-.188-.726a.75.75 0 0 0-.535.927zm1.508-.496l.445.604zm.537-.895l-.743-.102zm-6.996.57l-.723.2zm.424 1.125l.586-.467zm2.493.22l.723-.2a.75.75 0 0 0-.91-.526zm-1.563.297l.094-.744zm-1.572-2.82l.743.1zm.538-.896L12.1 2.72zm5.215 14.184l2.712-.7l-.375-1.452l-2.711.7zm4.736-4.109c-.082-.294-.153-.552-.228-.76a2.1 2.1 0 0 0-.332-.632l-1.173.935a.7.7 0 0 1 .092.199c.053.148.108.346.196.66zm-3.453-.418c.32-.083.624-.161.882-.215q.192-.04.313-.055c.09-.011.11-.006.087-.01l.188-1.487c-.283-.036-.637.03-.897.084c-.297.062-.636.15-.948.23zm2.893-.974a2.17 2.17 0 0 0-1.423-.793l-.188 1.488a.67.67 0 0 1 .438.24zm-1.464 4.802c.306-.08.571-.147.786-.218c.22-.073.44-.164.641-.313l-.891-1.207a.8.8 0 0 1-.22.095c-.157.052-.365.106-.69.19zm.579-3.008c.087.315.142.513.173.666c.03.147.025.196.024.21l1.486.203a2.1 2.1 0 0 0-.04-.712c-.044-.217-.117-.475-.198-.769zm.848 2.477a2.1 2.1 0 0 0 .835-1.398l-1.486-.203a.6.6 0 0 1-.24.394zm-7.627-.728c.082.294.153.551.228.76c.077.217.174.433.332.631l1.173-.935a.7.7 0 0 1-.092-.198a11 11 0 0 1-.196-.66zm3.114.505c-.326.084-.535.138-.697.169a.8.8 0 0 1-.246.023l-.188 1.488c.248.031.483.006.712-.038c.223-.041.487-.11.793-.19zm-2.554.886c.351.441.865.723 1.423.794l.188-1.488a.67.67 0 0 1-.438-.24zm.885-1.793a11 11 0 0 1-.173-.666a.7.7 0 0 1-.024-.21l-1.486-.204c-.034.252-.006.489.04.713c.044.217.116.475.198.769zm.918-3.095c-.311.08-.65.168-.94.257a5 5 0 0 0-.421.146a1.8 1.8 0 0 0-.405.215l.89 1.207c-.02.016-.008.003.077-.032q.111-.045.299-.102c.25-.077.554-.156.875-.239zm-1.115 2.219a.6.6 0 0 1 .24-.394l-.891-1.207a2.1 2.1 0 0 0-.835 1.397zM16.24 1.49l-2.712.7l.375 1.452l2.711-.7zm3.488 1.958c-.082-.294-.153-.551-.228-.76a2.1 2.1 0 0 0-.332-.631l-1.173.935a.7.7 0 0 1 .092.198c.053.148.108.346.196.66zm-3.114-.505c.326-.084.535-.138.697-.169a.8.8 0 0 1 .246-.023l.188-1.488a2.3 2.3 0 0 0-.712.037c-.223.042-.487.111-.793.19zm2.554-.886a2.17 2.17 0 0 0-1.423-.794l-.188 1.488a.67.67 0 0 1 .438.24zm-1.803 4.888c.311-.08.65-.168.94-.257c.146-.044.291-.093.422-.146c.12-.048.272-.118.404-.215l-.89-1.207c.02-.016.008-.003-.077.032q-.111.045-.299.102c-.25.077-.554.156-.875.239zm.918-3.094c.087.314.142.512.173.666c.03.146.026.195.024.21l1.486.203a2.1 2.1 0 0 0-.04-.713c-.044-.217-.116-.475-.198-.769zm.848 2.476c.454-.335.758-.836.835-1.397l-1.486-.204a.6.6 0 0 1-.24.394zM11.503 5.6c.082.294.153.552.228.76c.077.217.174.433.332.632l1.173-.935a.7.7 0 0 1-.092-.199a11 11 0 0 1-.196-.66zm3.453.418c-.32.083-.624.161-.882.215a4 4 0 0 1-.313.055c-.09.011-.11.006-.087.01l-.188 1.487c.283.036.637-.03.897-.084c.297-.062.636-.15.948-.23zm-2.893.974c.352.44.865.722 1.423.793l.188-1.488a.67.67 0 0 1-.438-.24zm.885-1.794a11 11 0 0 1-.173-.666a.7.7 0 0 1-.024-.21l-1.486-.203c-.034.252-.006.488.04.712c.044.217.117.475.198.769zm.58-3.008c-.307.08-.572.147-.787.218c-.22.073-.44.164-.641.313l.891 1.207a.8.8 0 0 1 .22-.095c.156-.052.365-.106.69-.19zm-.777 2.132a.6.6 0 0 1 .24-.394L12.1 2.721a2.1 2.1 0 0 0-.835 1.398zm1.67 2.624l1.68 6.035l1.445-.402l-1.68-6.036zm5.158 5.109L17.9 6.019l-1.445.402l1.68 6.036z"></svg:path>`,
})
export class SolarDumbbells2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsBoldDuotoneIcon],svg[solar-dumbbells-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.345 8.93l.344-2.84c.08-.662.12-.992.051-1.267a1.42 1.42 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27c-.618-.087-.927-.13-1.184-.055c-.342.099-.634.34-.81.668c-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.094-1.623a1.42 1.42 0 0 0-.624-.868c-.23-.142-.54-.185-1.157-.271c-.618-.086-.927-.13-1.183-.055c-.343.099-.634.34-.811.669c-.133.247-.173.577-.253 1.24l-.344 2.84c-.08.66-.12.992-.052 1.267c.093.366.317.679.625.868c.23.142.54.185 1.157.27c.618.087.926.13 1.183.056c.342-.1.634-.34.81-.669c.133-.247.217-.933.297-1.594l6.131.853c-.08.661-.163 1.347-.094 1.622c.092.367.317.68.624.869c.231.142.54.185 1.158.27c.617.087.926.13 1.183.055c.342-.099.634-.34.81-.668c.133-.247.173-.578.253-1.24"></svg:path><svg:path fill="currentColor" d="m7.761 19.926l-.692-2.767c-.161-.644-.242-.967-.207-1.249c.046-.377.23-.718.512-.95c.21-.173.511-.259 1.113-.432c.602-.172.903-.259 1.166-.221c.352.05.67.246.886.548c.162.226.33.894.49 1.538l5.973-1.714c-.161-.645-.328-1.313-.294-1.595a1.46 1.46 0 0 1 .512-.95c.211-.173.512-.259 1.114-.432c.601-.172.902-.259 1.166-.221c.351.05.67.246.886.548c.162.226.242.548.404 1.192l.692 2.767c.16.644.241.966.207 1.249c-.047.376-.23.718-.512.949c-.21.173-.512.26-1.113.432c-.602.173-.903.26-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.538l-5.972 1.714c.16.644.328 1.312.293 1.595c-.046.376-.23.718-.511.949c-.211.173-.512.26-1.114.432c-.601.173-.902.26-1.166.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.192" opacity=".5"></svg:path>`,
})
export class SolarDumbbellsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsLineDuotoneIcon],svg[solar-dumbbells-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.94 10.513l-.383.639zm-.53-2.491l.743.103a.766.766 0 0 0-.652-.848zm-.094 1.622l-.725.173zm3.776.526l.66.365zm-.81.668l.217.723zm.834-6.884l.383-.639zm.624.869l.726-.173zm-2.964-1.194l-.219-.723zm-1.107 2.263l-.09.744c.41.057.783-.23.833-.64zm.296-1.595l-.66-.365zM2.832 9.106l-.383.639zm-.624-.868l-.726.172zm4.071-1.07l.09-.744a.734.734 0 0 0-.833.641zm-.296 1.595l.66.365zm-.81.669l.217.722zm.834-6.884l.384-.64zm.53 2.49l-.742-.103a.766.766 0 0 0 .652.848zm.095-1.622l.725-.173zM3.667 2.222l-.218-.723zm-.81.669l-.66-.366zm13.09 3.096l-.345 2.84l1.486.207l.344-2.84zm-1.759 4.052c-.32-.044-.52-.073-.67-.105a.7.7 0 0 1-.194-.06l-.767 1.278c.22.135.45.204.673.252c.216.046.48.083.777.124zm-2.52-2.12c-.04.326-.083.68-.107.989c-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096q0-.127.014-.327c.021-.27.06-.588.1-.924zm1.656 1.955a.66.66 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335zm2.278-1.047c-.041.34-.069.56-.1.728a1 1 0 0 1-.07.25l1.32.73a2.3 2.3 0 0 0 .222-.679c.041-.225.075-.501.114-.822zm-1.594 2.701c.298.042.56.079.78.093c.229.015.467.01.711-.06l-.436-1.445a.6.6 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082zm1.424-1.724a.62.62 0 0 1-.369.312l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zm-.563-5.376c.32.044.52.073.67.105c.142.03.183.054.194.06l.766-1.278a2.1 2.1 0 0 0-.672-.252c-.216-.047-.48-.083-.778-.124zm2.563 1.766c.039-.322.073-.598.086-.827a2.4 2.4 0 0 0-.052-.717l-1.451.345a1 1 0 0 1 .009.26c-.01.171-.036.391-.078.732zm-1.7-1.6a.66.66 0 0 1 .283.401l1.45-.345a2.2 2.2 0 0 0-.966-1.335zm-.683-1.655a11 11 0 0 0-.781-.093a2 2 0 0 0-.71.06l.436 1.445a.6.6 0 0 1 .202-.005c.153.01.353.037.673.082zm-1.637 3.056c.04-.335.08-.654.123-.92q.034-.199.064-.32c.024-.092.036-.111.026-.092l-1.32-.731c-.133.248-.201.605-.246.87c-.05.306-.093.66-.133.986zm.145-3.089a2.1 2.1 0 0 0-1.252 1.026l1.32.73a.62.62 0 0 1 .369-.31zM3.002 7.074l.344-2.84l-1.486-.207l-.344 2.84zm1.077 1.558a10 10 0 0 1-.67-.105a.7.7 0 0 1-.194-.06L2.45 9.745c.22.135.448.205.672.253c.216.046.48.082.778.123zM1.516 6.867c-.039.321-.073.597-.086.826a2.3 2.3 0 0 0 .052.717l1.45-.345a1 1 0 0 1-.008-.26c.01-.17.036-.391.078-.731zm1.7 1.6a.66.66 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335zm2.32-1.402c-.04.336-.08.655-.123.92q-.034.199-.064.32c-.024.092-.036.111-.026.093l1.32.73c.133-.248.202-.604.246-.87c.05-.305.093-.66.133-.986zM3.9 10.121c.298.042.56.079.781.093c.228.015.466.011.71-.06L4.954 8.71a.6.6 0 0 1-.202.005a11 11 0 0 1-.673-.082zm1.424-1.723a.62.62 0 0 1-.369.311l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zM4.76 3.02c.32.045.52.073.67.105c.142.03.183.054.194.06l.767-1.277a2.1 2.1 0 0 0-.673-.253c-.216-.046-.48-.082-.778-.124zm2.52 2.12c.04-.325.083-.68.107-.988c.02-.27.04-.633-.03-.91l-1.45.346c-.006-.021.001 0 .002.095q0 .127-.015.328c-.02.269-.059.588-.1.923zM5.624 3.188a.66.66 0 0 1 .282.402l1.45-.346a2.2 2.2 0 0 0-.965-1.334zM4.94 1.532c-.298-.041-.56-.078-.78-.093a2 2 0 0 0-.711.06l.436 1.446a.6.6 0 0 1 .202-.006c.153.01.353.038.673.082zM3.346 4.233c.041-.34.068-.56.1-.728a1 1 0 0 1 .07-.249l-1.32-.73a2.3 2.3 0 0 0-.222.678c-.042.225-.075.501-.114.823zM3.45 1.5a2.1 2.1 0 0 0-1.253 1.026l1.32.731a.62.62 0 0 1 .369-.311zm2.998 4.284l6.132.853l.18-1.489l-6.131-.853zm6.054 1.494L6.37 6.425l-.18 1.49l6.131.852z"></svg:path><svg:path fill="currentColor" d="m11.33 21.012l.457.583zm.219-2.544l-.721.207c-.1-.402.14-.82.539-.935zm.293 1.595l.738.072zm-3.677 1.055l-.605.458zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.512.949l-.738-.072zm2.791-1.603l.124-.75zm1.377 2.086l.182.728a.72.72 0 0 1-.903-.521zm-.49-1.538l.605-.458zm10.637 3.33l.457.584zm.512-.948l.737.072zm-4.168-.483l-.182-.728a.72.72 0 0 1 .903.52zm.49 1.538l-.605.457zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.218 2.544l.72-.207a.78.78 0 0 1-.538.934zm-.294-1.595l-.737-.072zm2.792-1.603l.123-.75zm.886.548l.605-.458zM7.79 16.952l.692 2.767l-1.442.413l-.692-2.766zm2.245 3.765c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.913 1.166c-.2.164-.417.265-.633.344c-.208.076-.464.15-.755.233zm2.235-2.456c.08.318.166.663.227.966c.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4 4 0 0 0-.054-.321a22 22 0 0 0-.213-.901zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.793 1.46zm-2.392-.71c.083.331.137.546.189.707a1 1 0 0 0 .1.235l-1.211.915a2.3 2.3 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8zm1.917 2.453c-.29.083-.546.157-.762.203c-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024c.15-.031.346-.087.657-.176zM8.77 20.66c.107.15.256.235.405.256l-.247 1.499a2.04 2.04 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344c.209-.077.465-.15.755-.233zm-2.322 2.11c-.078-.313-.146-.582-.187-.807a2.4 2.4 0 0 1-.037-.72l1.476.143a1 1 0 0 0 .023.257c.03.167.084.382.167.713zm1.482-1.822a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46zm.475-1.743c.29-.084.547-.158.763-.203c.223-.047.459-.076.709-.04l-.247 1.498a.6.6 0 0 0-.204.023c-.15.032-.346.088-.657.177zm2.005 2.8c-.082-.327-.16-.638-.236-.894a4 4 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83c.088.296.174.641.254.96zm-.532-3.043a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm10.984 2.638l-.692-2.767l1.441-.414l.692 2.767zm-.88 1.696c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.914 1.166a2.1 2.1 0 0 1-.634.344c-.208.076-.464.15-.754.233zm2.321-2.11c.079.313.146.582.188.807c.042.232.067.469.036.72l-1.475-.143a1 1 0 0 0-.024-.257a13 13 0 0 0-.166-.713zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.792 1.46zm-2.478-1.056c.082.326.16.637.236.894q.057.191.103.308c.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831c-.088-.295-.174-.64-.254-.958zm2.004 2.799c-.29.083-.547.157-.763.203a2 2 0 0 1-.71.04l.248-1.498c.013.002.06.006.203-.024c.151-.031.346-.087.658-.176zm-1.63-1.511a.6.6 0 0 0 .405.256l-.247 1.499a2.03 2.03 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344c.208-.077.464-.15.755-.233zm-2.235 2.456c-.08-.318-.166-.663-.227-.966c-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093q.014.126.054.322c.054.264.131.574.213.901zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46zm.474-1.743c.29-.083.547-.157.763-.203a2 2 0 0 1 .71-.04l-.248 1.498a.6.6 0 0 0-.203.023c-.15.032-.346.088-.657.177zm1.918 2.453a13 13 0 0 0-.189-.707a1 1 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644c.07.217.136.486.214.8zm-.446-2.697a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm-2.439 4.676l-5.972 1.714l-.364-1.455l5.972-1.715zm-5.817 2.333l5.972-1.714l.364 1.455l-5.972 1.714z" opacity=".5"></svg:path>`,
})
export class SolarDumbbellsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthBoldDuotoneIcon],svg[solar-earth-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M8.575 9.447C8.388 7.363 6.781 5.421 6 4.711l-.43-.37A9.96 9.96 0 0 1 12 2c2.214 0 4.26.72 5.916 1.936c.234.711-.212 2.196-.68 2.906c-.17.257-.554.577-.976.88c-.95.683-2.15 1.02-2.76 2.278a1.42 1.42 0 0 0-.083 1.016c.06.22.1.459.1.692c.002.755-.762 1.3-1.517 1.292c-1.964-.021-3.25-1.604-3.425-3.553m4.862 8.829c.988-1.862 4.281-1.862 4.281-1.862c3.432-.036 3.896-2.12 4.206-3.173a10.006 10.006 0 0 1-8.535 8.664c-.323-.68-.705-2.21.048-3.629"></svg:path>`,
})
export class SolarEarthBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthLineDuotoneIcon],svg[solar-earth-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737C8.75 11.396 10.035 12.98 12 13c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-3.293 0-4.281 1.862c-.791 1.49-.33 3.103 0 3.724" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEarthLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingBoldDuotoneIcon],svg[solar-electric-refueling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v13.25h13V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3 21.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5zm7.143-10.864a.75.75 0 1 0-1.286-.772l-1.5 2.5A.75.75 0 0 0 8 13.25h1.675l-.818 1.364a.75.75 0 0 0 1.286.772l1.5-2.5A.75.75 0 0 0 11 11.75H9.325zM16 17.75h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582a9 9 0 0 0-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195c.443.397.711.954.745 1.549a6 6 0 0 1 .003.306V8h-.75A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423l1.224.408v4.75a.75.75 0 0 1-1.5 0v-.071a2.18 2.18 0 0 0-2.179-2.179H16z"></svg:path>`,
})
export class SolarElectricRefuelingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingLineDuotoneIcon],svg[solar-electric-refueling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 10L8 12.5h3L9.5 15" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22H2"></svg:path><svg:path fill="currentColor" d="M19.969 3.414a.75.75 0 1 0-.937 1.172zm.764 1.572l.469-.585zM16 16.25a.75.75 0 0 0 0 1.5zm5.003-11.042l-.501.559zm.992 2.066l.75-.042zM22 8.75a.75.75 0 0 0 0-1.5zm-1.974 4.592l-.238.711zm1.737 1.37a.75.75 0 0 0 .474-1.423zM19.03 4.586l1.234.986l.937-1.171l-1.234-.987zm2.219 3.036V18.5h1.5V7.622zM19.75 18.5v-.071h-1.5v.071zm-2.179-2.25H16v1.5h1.571zm2.179 2.179a2.18 2.18 0 0 0-2.179-2.179v1.5c.375 0 .679.304.679.679zm.75.821a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.985-12.928c.144.116.194.156.237.195l1.001-1.117c-.082-.074-.17-.144-.301-.25zm2.485 2.05c0-.168 0-.28-.006-.39l-1.497.084a6 6 0 0 1 .003.306zm-2.248-1.855c.443.397.711.954.745 1.549l1.497-.084a3.75 3.75 0 0 0-1.24-2.582zM22 7.25h-1.5v1.5H22zM18.25 9.5v2.419h1.5V9.5zm1.538 4.553l1.975.658l.474-1.422l-1.974-.659zM18.25 11.92c0 .968.62 1.828 1.538 2.134l.475-1.423a.75.75 0 0 1-.513-.711zm2.25-4.67a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarElectricRefuelingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleBoldDuotoneIcon],svg[solar-emoji-funny-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.898 11.224c.533-.143.792-.908.578-1.708s-.821-1.333-1.355-1.19c-.533.143-.792.907-.577 1.708c.214.8.82 1.333 1.354 1.19m-5.796 1.553c.534-.143.792-.908.578-1.708s-.82-1.333-1.354-1.19s-.792.907-.578 1.708s.82 1.333 1.354 1.19m-.917 2.974a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066c1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078a8.4 8.4 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91"></svg:path>`,
})
export class SolarEmojiFunnyCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleLineDuotoneIcon],svg[solar-emoji-funny-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnyCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareBoldDuotoneIcon],svg[solar-emoji-funny-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.504 21.52c1.633.943 3.706.387 7.853-.724s6.22-1.666 7.163-3.3s.387-3.706-.724-7.853s-1.666-6.22-3.3-7.163s-3.706-.388-7.853.724c-4.147 1.11-6.22 1.666-7.163 3.3s-.388 3.706.724 7.853c1.11 4.147 1.666 6.22 3.3 7.163" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.898 11.224c.533-.143.792-.908.578-1.708s-.821-1.333-1.355-1.19c-.533.143-.792.907-.577 1.708c.214.8.82 1.333 1.354 1.19m-5.796 1.553c.534-.143.792-.908.578-1.708s-.82-1.333-1.354-1.19s-.792.907-.578 1.708s.82 1.333 1.354 1.19m-.917 2.974a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066c1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078a8.4 8.4 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91"></svg:path>`,
})
export class SolarEmojiFunnySquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareLineDuotoneIcon],svg[solar-emoji-funny-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M3.204 14.357c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724s2.19 3.016 3.3 7.163c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163Z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnySquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallBoldDuotoneIcon],svg[solar-end-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12.862v.617c0 .852-.577 1.604-1.42 1.85l-2 .587C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353c.734-.884 2.44-2.507 5.56-3.311zm8 0v.388c0 .957.723 1.77 1.7 1.913l2 .293c1.21.177 2.3-.729 2.3-1.913V11.42c0-.587-.184-1.165-.63-1.563c-.817-.73-2.492-1.88-5.37-2.474z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 11.396c4 0 4 1.466 4 1.466v-5.48C14.862 7.147 13.536 7 12 7s-2.862.184-4 .478v5.384s0-1.466 4-1.466" opacity=".5"></svg:path>`,
})
export class SolarEndCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallLineDuotoneIcon],svg[solar-end-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M8 12.862v.616c0 .852-.577 1.604-1.42 1.851l-2 .586c-1.284.377-2.58-.553-2.58-1.85V12.14c0-.489.125-.97.44-1.352m18.93-.933c.446.398.63.975.63 1.562v2.125c0 1.184-1.09 2.09-2.3 1.913l-2-.294c-.977-.143-1.7-.956-1.7-1.912v-.388"></svg:path><svg:path fill="currentColor" d="M7.25 12.862a.75.75 0 0 0 1.5 0zM12 7v.75zm3.25 5.862a.75.75 0 0 0 1.5 0zM12 11.396v-.75zm-8.982-.129C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06zM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25zm4 5.112c.75 0 .75-.001.75-.002v-.016l-.004-.067a1.5 1.5 0 0 0-.126-.455a2.06 2.06 0 0 0-.677-.798c-.686-.503-1.873-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588c.149.11.19.192.198.21q.007.016.001-.002a.3.3 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002m-4-2.216c-2.07 0-3.257.375-3.943.878c-.351.257-.56.54-.677.798a1.5 1.5 0 0 0-.126.455l-.004.076v.007s0 .002.75.002s.75 0 .75.002v.006l-.006.072q-.005.018.001.001a.6.6 0 0 1 .198-.209c.314-.23 1.127-.588 3.057-.588z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEndCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedBoldDuotoneIcon],svg[solar-end-call-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.947 16.517l-1.34.38C3.782 17.415 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347C4.128 9.376 6 7.908 9 7.292v6.326c0 1.365-.844 2.556-2.053 2.9m8.053-2.9c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.872 9.376 18 7.908 15 7.292z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 13.619s0-1.655 3-1.655s3 1.654 3 1.654V7.292A15 15 0 0 0 12 7c-1.106 0-2.103.108-3 .292z" opacity=".5"></svg:path>`,
})
export class SolarEndCallRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedLineDuotoneIcon],svg[solar-end-call-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.083 10.503C2.277 11.373 2 12.613 2 13.851c0 2.06 1.782 3.564 3.607 3.047l1.34-.38C8.156 16.174 9 14.982 9 13.617m11.917-3.115c.806.87 1.083 2.11 1.083 3.348c0 2.06-1.782 3.564-3.607 3.047l-1.34-.38c-1.209-.343-2.053-1.535-2.053-2.9"></svg:path><svg:path d="M3.083 10.503C4.44 9.04 7.193 7 12 7s7.56 2.039 8.917 3.503M9 13.619s0-1.655 3-1.655s3 1.654 3 1.654" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEndCallRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserBoldDuotoneIcon],svg[solar-eraser-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.952 3c-1.037 0-1.872.835-3.542 2.505l-4.91 4.91l7.085 7.085l4.91-4.91C20.165 10.92 21 10.085 21 9.048c0-1.038-.835-1.873-2.505-3.543S15.99 3 14.952 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.585 17.5L6.5 10.415l-.995.995C3.835 13.08 3 13.915 3 14.952c0 1.038.835 1.873 2.505 3.543S8.01 21 9.048 21c1.037 0 1.872-.835 3.542-2.505z"></svg:path><svg:path fill="currentColor" d="M9.033 21H9zm.03 0c.796-.006 1.476-.506 2.51-1.5H21a.75.75 0 0 1 0 1.5z" opacity=".5"></svg:path>`,
})
export class SolarEraserBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBoldDuotoneIcon],svg[solar-eraser-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.606 7.67C12.72 6.557 13.276 6 13.968 6s1.249.557 2.362 1.67S18 9.34 18 10.032s-.557 1.248-1.67 2.362l-2.619 2.618l-4.723-4.723zm-3.679 3.68l4.724 4.723l-.257.257C11.28 17.443 10.724 18 10.032 18s-1.249-.557-2.362-1.67S6 14.66 6 13.968s.557-1.248 1.67-2.362z"></svg:path>`,
})
export class SolarEraserCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleLineDuotoneIcon],svg[solar-eraser-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEraserCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserLineDuotoneIcon],svg[solar-eraser-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5.505 11.41l.53.53zM3 14.952h-.75zM9.048 21v.75zM11.41 5.505l-.53-.53zm6.555 6.555l-5.905 5.905l1.06 1.06l5.905-5.904zm-11.93-.12l5.905-5.905l-1.06-1.06l-5.905 5.904zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084c.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08c-.38.498-.962 1.083-1.812 1.933zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945z"></svg:path><svg:path fill="currentColor" d="M13.241 17.844a.75.75 0 0 0 1.06-1.06zM7.216 9.698a.75.75 0 1 0-1.06 1.061zm7.086 7.086L7.216 9.698l-1.06 1.061l7.085 7.085z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEraserLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareBoldDuotoneIcon],svg[solar-eraser-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.988 10.289l4.723 4.723l2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362s-.557-1.249-1.67-2.362S14.66 6 13.968 6s-1.248.557-2.362 1.67zm3.406 6.041l.257-.257l-4.724-4.724l-.257.257C6.557 12.72 6 13.276 6 13.968s.557 1.249 1.67 2.362S9.34 18 10.032 18s1.248-.557 2.362-1.67"></svg:path>`,
})
export class SolarEraserSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareLineDuotoneIcon],svg[solar-eraser-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEraserSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroBoldDuotoneIcon],svg[solar-euro-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298a.75.75 0 1 0 .75-1.299a6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596a.75.75 0 1 0-.751-1.298a5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12"></svg:path>`,
})
export class SolarEuroBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroLineDuotoneIcon],svg[solar-euro-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"></svg:path></svg:g>`,
})
export class SolarEuroLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitBoldDuotoneIcon],svg[solar-exit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.052 4.5C9 5.078 9 5.804 9 6.722v10.556c0 .918 0 1.644.052 2.222H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268S5.643 4.5 8 4.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062m3.043 8.545c0-.434-.336-.785-.75-.785s-.75.351-.75.784v2.094c0 .433.336.784.75.784s.75-.351.75-.784z" clip-rule="evenodd"></svg:path>`,
})
export class SolarExitBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitLineDuotoneIcon],svg[solar-exit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h1" opacity=".5"></svg:path><svg:path d="M9 6.476c0-2.293 0-3.44.707-4.067s1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504c.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689c-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062S9 19.817 9 17.524z"></svg:path><svg:path stroke-linecap="round" d="M12 11v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarExitLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitBoldDuotoneIcon],svg[solar-explicit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 8c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 1 0 1.5h-5a.25.25 0 0 0-.25.25v3.25H15a.75.75 0 0 1 0 1.5H9.75V16c0 .138.112.25.25.25h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 1 8.25 16z"></svg:path>`,
})
export class SolarExplicitBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitLineDuotoneIcon],svg[solar-explicit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 7h-5a1 1 0 0 0-1 1v4m6 5h-5a1 1 0 0 1-1-1v-4m0 0h6"></svg:path></svg:g>`,
})
export class SolarExplicitLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportBoldDuotoneIcon],svg[solar-export-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 0 16 0z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 7.53a.75.75 0 0 1-1.06 0l-1.72-1.72V14a.75.75 0 0 1-1.5 0V5.81L9.53 7.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarExportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportLineDuotoneIcon],svg[solar-export-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBoldDuotoneIcon],svg[solar-expressionless-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarExpressionlessCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleLineDuotoneIcon],svg[solar-expressionless-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarExpressionlessCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareBoldDuotoneIcon],svg[solar-expressionless-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 16.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zM15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarExpressionlessSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareLineDuotoneIcon],svg[solar-expressionless-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarExpressionlessSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeBoldDuotoneIcon],svg[solar-eye-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedBoldDuotoneIcon],svg[solar-eye-closed-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.919 6.605a1 1 0 0 0-1.838.79l.002.003l.003.007l.01.021l.032.072q.04.09.12.25c.105.21.262.506.47.857c.41.687 1.027 1.6 1.872 2.52l-.797.797a1 1 0 1 0 1.414 1.414l.84-.84c.565.455 1.197.885 1.897 1.256l-.782 1.202a1 1 0 0 0 1.676 1.091l.985-1.514c.677.208 1.402.355 2.177.425V16.5a1 1 0 0 0 1 1V13c-2.748 0-4.819-1.199-6.304-2.59l-.024-.022a12 12 0 0 1-.564-.569a13.4 13.4 0 0 1-1.67-2.237a12 12 0 0 1-.516-.968zm-1.838.79L2 7c-.92.394-.919.395-.919.395" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.22 12.398A8.7 8.7 0 0 1 12 13v4.5a1 1 0 0 0 1-1v-1.544c.772-.07 1.497-.217 2.176-.425l.986 1.515a1 1 0 0 0 1.676-1.091l-.782-1.203c.701-.37 1.332-.8 1.897-1.256l.84.84a1 1 0 1 0 1.414-1.414l-.797-.798a15.4 15.4 0 0 0 2.302-3.296a10 10 0 0 0 .19-.395l.011-.026l.004-.008l.002-.005a1 1 0 1 0-1.838-.788l-.005.011a5 5 0 0 1-.146.302a13 13 0 0 1-2.614 3.48c-.841.79-1.87 1.517-3.095 2" opacity=".5"></svg:path>`,
})
export class SolarEyeClosedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedLineDuotoneIcon],svg[solar-eye-closed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm7.102-6.034a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm-7 2.121c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351z"></svg:path><svg:path fill="currentColor" d="M12.75 14a.75.75 0 0 0-1.5 0zm3.466-1.08a.75.75 0 1 0-1.257.818zm-7.175.818a.75.75 0 0 0-1.257-.818zm-2.67 1.353a.75.75 0 0 0 1.258.818zm13.16-4.492a.75.75 0 1 0-1.061 1.06zm.439 2.56a.75.75 0 1 0 1.06-1.06zM11.25 16.5a.75.75 0 0 0 1.5 0zm5.121-.59a.75.75 0 1 0 1.258-.819zm-10.84-4.25a.75.75 0 1 0-1.061-1.061zm-2.561.439a.75.75 0 1 0 1.06 1.06zm4.814.82l-1.413 2.172l1.258.818l1.412-2.171zm10.686-1.26l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z" opacity=".5"></svg:path>`,
})
export class SolarEyeClosedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeLineDuotoneIcon],svg[solar-eye-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z" opacity=".5"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarEyeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanBoldDuotoneIcon],svg[solar-eye-scan-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.487.487.7.865.817 1.538c.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922c-.175-1.005-.549-1.656-1.233-2.34c-.749-.75-1.698-1.081-2.87-1.239c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5M2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76c.118.673.33 1.051.817 1.538c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.684-.685-1.058-1.336-1.233-2.341c-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922c-.175 1.005-.549 1.656-1.233 2.34c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.487-.487.7-.865.817-1.538c.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75m-12.056-13H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.487.487-.7.865-.817 1.538c-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922c.175-1.005.549-1.656 1.233-2.34c.749-.75 1.698-1.081 2.87-1.239c1.14-.153 2.595-.153 4.433-.153" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94M9.25 12a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeScanBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanLineDuotoneIcon],svg[solar-eye-scan-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 18.771 2 15m20 0c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22m0-20c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9" opacity=".5"></svg:path><svg:path d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94Z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class SolarEyeScanLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleBoldDuotoneIcon],svg[solar-face-scan-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.94 14.539a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .847 1.142a4.87 4.87 0 0 1-2.912.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m5.547-2.895c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244s-.83.557-.83 1.244s.372 1.244.83 1.244m-4.976 0c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244s-.83.557-.83 1.244s.372 1.244.83 1.244"></svg:path>`,
})
export class SolarFaceScanCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleLineDuotoneIcon],svg[solar-face-scan-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.2 10A10.01 10.01 0 0 1 10 2.2M2.2 14a10.01 10.01 0 0 0 7.8 7.8M21.8 10A10.01 10.01 0 0 0 14 2.2M21.8 14a10.01 10.01 0 0 1-7.8 7.8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareBoldDuotoneIcon],svg[solar-face-scan-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.302 13.163c.386 0 .698.312.698.697v.053c0 1.71 0 3.064-.142 4.123c-.147 1.09-.456 1.974-1.152 2.67s-1.58 1.005-2.67 1.152c-1.06.142-2.414.142-4.123.142h-.053a.698.698 0 0 1 0-1.395c1.774 0 3.034-.002 3.99-.13c.936-.126 1.476-.362 1.87-.756c.393-.393.629-.933.755-1.869c.128-.956.13-2.216.13-3.99c0-.385.312-.697.697-.697m-18.604 0c.385 0 .697.312.697.697c0 1.774.002 3.034.13 3.99c.126.936.362 1.476.756 1.87c.394.393.933.629 1.869.755c.956.128 2.216.13 3.99.13a.698.698 0 1 1 0 1.395h-.053c-1.71 0-3.064 0-4.123-.142c-1.09-.147-1.974-.456-2.67-1.152s-1.005-1.58-1.152-2.67C2 16.976 2 15.622 2 13.913v-.053c0-.385.312-.697.698-.697M10.087 2h.053a.698.698 0 1 1 0 1.395c-1.774 0-3.034.002-3.99.13c-.936.126-1.475.362-1.87.756c-.393.394-.629.933-.755 1.869c-.128.956-.13 2.216-.13 3.99a.698.698 0 0 1-1.395 0v-.053c0-1.71 0-3.064.142-4.123c.147-1.09.456-1.974 1.152-2.67s1.58-1.005 2.67-1.152C7.024 2 8.378 2 10.087 2m7.763 1.525c-.956-.128-2.216-.13-3.99-.13a.698.698 0 0 1 0-1.395h.053c1.71 0 3.064 0 4.123.142c1.09.147 1.974.456 2.67 1.152s1.005 1.58 1.152 2.67C22 7.024 22 8.378 22 10.087v.053a.698.698 0 1 1-1.395 0c0-1.774-.002-3.034-.13-3.99c-.126-.936-.362-1.475-.756-1.87c-.393-.393-.933-.629-1.869-.755" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.373 10.43c0 .675-.364 1.222-.814 1.222s-.814-.547-.814-1.221s.365-1.221.814-1.221c.45 0 .814.547.814 1.22m4.884 0c0 .675-.365 1.222-.814 1.222c-.45 0-.814-.547-.814-1.221s.364-1.221.814-1.221s.814.547.814 1.22m-5.334 3.987a.61.61 0 0 0-.727.981a4.7 4.7 0 0 0 2.805.934a4.7 4.7 0 0 0 2.805-.934a.61.61 0 1 0-.727-.98a3.47 3.47 0 0 1-2.078.693c-.77 0-1.486-.254-2.078-.694"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path d="M10.373 10.43c0 .675-.365 1.222-.814 1.222c-.45 0-.814-.547-.814-1.221c0-.675.364-1.221.814-1.221s.814.546.814 1.22m4.883 0c0 .675-.364 1.222-.814 1.222s-.814-.547-.814-1.221c0-.675.365-1.221.814-1.221c.45 0 .814.546.814 1.22m-5.334 3.987a.61.61 0 0 0-.727.98c.792.588 1.76.935 2.806.935a4.7 4.7 0 0 0 2.805-.934a.61.61 0 1 0-.727-.981a3.47 3.47 0 0 1-2.078.694c-.77 0-1.486-.255-2.079-.694"></svg:path><svg:path fill-rule="evenodd" d="M10.14 4.559h3.72c2.632 0 3.948 0 4.765.817s.817 2.133.817 4.764v3.72c0 2.632 0 3.948-.817 4.765s-2.133.817-4.764.817H10.14c-2.631 0-3.947 0-4.764-.817s-.817-2.133-.817-4.764V10.14c0-2.631 0-3.947.817-4.764s2.133-.817 4.764-.817m-1.072 9.985a.61.61 0 0 1 .854-.127c.593.44 1.308.694 2.079.694c.77 0 1.485-.255 2.078-.694a.61.61 0 1 1 .727.98a4.7 4.7 0 0 1-2.805.935a4.7 4.7 0 0 1-2.806-.934a.61.61 0 0 1-.127-.854m5.374-2.892c.45 0 .814-.547.814-1.221c0-.675-.364-1.221-.814-1.221s-.814.546-.814 1.22c0 .675.365 1.222.814 1.222m-4.883 0c.45 0 .814-.547.814-1.221c0-.675-.365-1.221-.814-1.221c-.45 0-.814.546-.814 1.22c0 .675.364 1.222.814 1.222" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareLineDuotoneIcon],svg[solar-face-scan-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleBoldDuotoneIcon],svg[solar-facemask-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.998 12.193L22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81l2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-.234 10.767l.444-5.776l-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m6.058-7.389l-4.112 1.644l-.38 4.94a10 10 0 0 0 4.492-6.584M6.668 20.461L6.29 15.54l-4.077-1.482a10 10 0 0 0 4.456 6.404"></svg:path>`,
})
export class SolarFacemaskCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleLineDuotoneIcon],svg[solar-facemask-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 20.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarFacemaskCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareBoldDuotoneIcon],svg[solar-facemask-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.8.8 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.272 0L17 14.192l4.721-1.888A.8.8 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m5.996 3.31l-4.281 1.712l-.206 2.88l3.287 1.409a.8.8 0 0 1 .216.141c.834-1.262.964-3.112.984-6.142m-2.108 7.244l-2.492-1.068l-.133 1.86c1.1-.13 1.946-.364 2.625-.792m-4.137.903l.001-.01l.461-6.454l-2.635-1.054a4.25 4.25 0 0 0-3.156 0l-2.635 1.054l.461 6.454v.01C9.303 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.043m-9.014-.112l-.133-1.86l-2.492 1.069c.679.428 1.524.663 2.625.791m-3.749-1.893a.8.8 0 0 1 .217-.141l3.286-1.409l-.205-2.88l-4.282-1.712c.02 3.03.15 4.88.984 6.142"></svg:path>`,
})
export class SolarFacemaskSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareLineDuotoneIcon],svg[solar-facemask-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 21.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5"></svg:path></svg:g>`,
})
export class SolarFacemaskSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedBoldDuotoneIcon],svg[solar-feed-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16zm1-6.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarFeedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedLineDuotoneIcon],svg[solar-feed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 6h5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFeedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBoldDuotoneIcon],svg[solar-ferris-wheel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 11a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.821 12.678l-4.976 8.958a.75.75 0 0 0 1.31.728l4.883-8.787a2.76 2.76 0 0 1-1.217-.9m3.142.9l4.882 8.787a.75.75 0 0 0 1.31-.728l-4.976-8.958c-.31.403-.731.717-1.216.899M12 5.25a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5M2.75 7.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M19.5 5.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m0 8.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m-15 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m5.75 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.637 4.597a1.74 1.74 0 0 1-.335-1.524l-.098.052L5.41 5.739a4 4 0 0 0-.241.143c.491.204.87.624 1.016 1.143zM4.955 9.19a1.75 1.75 0 0 1-1.498-.285l-.002.126v4.938q0 .301.047.593a1.74 1.74 0 0 1 1.48-.245a2 2 0 0 1-.027-.348zm1.295 6.82a1.75 1.75 0 0 1-.653 1.353l4.607 2.512l.098.052a1.75 1.75 0 0 1 .335-1.524zm7.113 2.392a1.74 1.74 0 0 1 .335 1.524l.096-.05l4.608-2.513a1.75 1.75 0 0 1-.652-1.353zm5.653-4.084a1.75 1.75 0 0 1 1.48.243q.048-.292.048-.592V9.03q0-.062-.003-.125a1.74 1.74 0 0 1-1.497.284v4.779q0 .177-.028.349m-1.2-7.293a1.75 1.75 0 0 1 1.015-1.142a4 4 0 0 0-.242-.144l-4.794-2.614l-.097-.051a1.75 1.75 0 0 1-.335 1.524z" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarFerrisWheelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelLineDuotoneIcon],svg[solar-ferris-wheel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="11" r="2"></svg:circle><svg:path d="M20.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></svg:path><svg:path stroke-linecap="round" d="m13.5 13l5 9m-8-9l-5 9" opacity=".5"></svg:path><svg:path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFerrisWheelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBoldDuotoneIcon],svg[solar-figma-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"></svg:path><svg:path fill="currentColor" d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334" opacity=".2"></svg:path><svg:path fill="currentColor" d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z" opacity=".8"></svg:path>`,
})
export class SolarFigmaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileBoldDuotoneIcon],svg[solar-figma-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.376 11.5c-.76 0-1.376.638-1.376 1.424c0 .48.23.905.581 1.163A1.44 1.44 0 0 0 5 15.25c0 .48.23.905.581 1.163A1.44 1.44 0 0 0 5 17.576C5 18.362 5.616 19 6.376 19s1.377-.638 1.377-1.424v-1.223c.237.201.54.321.87.321c.76 0 1.377-.637 1.377-1.424c0-.48-.23-.905-.581-1.163c.351-.258.581-.682.581-1.163c0-.786-.616-1.424-1.376-1.424z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFigmaFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileLineDuotoneIcon],svg[solar-figma-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M5 11.5A1.5 1.5 0 0 1 6.5 10H8v3H6.5A1.5 1.5 0 0 1 5 11.5Zm0 3A1.5 1.5 0 0 1 6.5 13H8v3H6.5A1.5 1.5 0 0 1 5 14.5Zm0 3A1.5 1.5 0 0 1 6.5 16H8v1.5a1.5 1.5 0 0 1-3 0ZM8 10h1.5a1.5 1.5 0 0 1 0 3H8" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 14.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFigmaFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaLineDuotoneIcon],svg[solar-figma-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2H8.667a3.333 3.333 0 0 0 0 6.667H12z" opacity=".5"></svg:path><svg:path d="M12 8.667H8.667a3.333 3.333 0 0 0 0 6.666H12z"></svg:path><svg:path d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z" opacity=".5"></svg:path><svg:path d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"></svg:path></svg:g>`,
})
export class SolarFigmaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileBoldDuotoneIcon],svg[solar-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckBoldDuotoneIcon],svg[solar-file-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.56 15.498a.75.75 0 1 0-1.12-.996l-2.107 2.37l-.772-.87a.75.75 0 0 0-1.122.996l1.334 1.5a.75.75 0 0 0 1.12 0zm.95-13.238l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckLineDuotoneIcon],svg[solar-file-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16.5L7.333 18L10 15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedBoldDuotoneIcon],svg[solar-file-corrupted-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path><svg:path fill="currentColor" d="M2 13.662V9.775C2 6.11 2 4.277 3.172 3.139C4.343 2 6.239 2 10.03 2c.591 0 1.068 0 1.47.015l.01.244l-.01 2.749v.18c0 1.059.003 1.995.105 2.755c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5h.008c.007.357.007.765.007 1.238v1.106l-.012.006a5 5 0 0 0-.267.146a3.17 3.17 0 0 1-3.43 0a2.38 2.38 0 0 0-2.572 0a3.17 3.17 0 0 1-3.43 0a2.38 2.38 0 0 0-2.572 0a3.17 3.17 0 0 1-3.43 0a2.38 2.38 0 0 0-2.572 0c-.138.088-.206.133-.256.158c-.386.194-1.017.027-1.459-.29z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 22h4c3.771 0 5.657 0 6.829-.933c1.096-.874 1.166-2.246 1.171-4.881l-.012.005a5 5 0 0 0-.267.12c-1.039.55-2.392.55-3.43 0a2.82 2.82 0 0 0-2.572 0c-1.039.55-2.392.55-3.43 0a2.82 2.82 0 0 0-2.573 0c-1.038.55-2.39.55-3.43 0a2.82 2.82 0 0 0-2.572 0a4 4 0 0 1-.255.129c-.386.159-1.017.022-1.459-.238c.005 2.625.077 3.993 1.171 4.865C4.343 22 6.23 22 10 22"></svg:path>`,
})
export class SolarFileCorruptedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedLineDuotoneIcon],svg[solar-file-corrupted-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.397 4.054l-.501.557zm3.96 3.563l-.501.557zm2.303 2.537l-.685.305zM3.172 20.828l.53-.53zm17.663 0l-.53-.53zm-2.544-7.97l.416-.625zm3.43 0l-.416-.625zm-12.004 0l-.416-.625zm2.572 0l.416-.625zm-6.002 0l-.416.623zm-2.572 0l-.416-.625zm14.576 4l.416-.625zm3.43 0l.416.623zm-6.002 0l-.416-.625zm-3.43 0l.416-.625zm-2.572 0l-.416-.625zm6.002-4l-.416-.625zm-9.432 4l-.416.623zm-2.572 0l-.416-.625zm-.626.416l.416.625zm-.81 1.84l.729-.173zm19.693-2.116l.749.03zm.028-4.67l.75-.015zM2.214 18.072l.698.274zm-.208-5.83l.746-.084zm1.454.777l.344.666zm10.544 8.23h-4.001v1.5h4zM2.75 11.94V10h-1.5v1.94zm12.146-7.33l3.96 3.563l1.003-1.115l-3.96-3.563zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79zM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645zM10.003 21.25c-1.908 0-3.263-.002-4.291-.14c-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239c1.151.155 2.626.153 4.49.153zm4 1.5c1.866 0 3.34.002 4.491-.153c1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812c-1.027.138-2.383.14-4.29.14zM2.75 10c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06C1.893 3.39 1.56 4.337 1.403 5.51C1.248 6.66 1.25 8.136 1.25 10zm7.282-8.75c-1.875 0-3.356-.002-4.512.153c-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812c1.033-.138 2.396-.14 4.313-.14zm7.843 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.34 2.34 0 0 1-2.598 0zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-.626.418l.626-.418l-.832-1.248l-.626.417zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028a.13.13 0 0 1 .055-.108zm-19.464 3.17a7 7 0 0 0-.657.47a1.7 1.7 0 0 0-.5.677l1.396.55l.01-.019a.5.5 0 0 1 .071-.07c.098-.084.244-.182.512-.36zm.335 2.29a4 4 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796zM1.25 11.94c0 .139-.001.277.01.385l1.492-.166l-.001-.039l-.001-.18zm2.049.293l-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195z"></svg:path></svg:g>`,
})
export class SolarFileCorruptedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadBoldDuotoneIcon],svg[solar-file-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.013 19.047a.75.75 0 0 1-1.026 0l-2-1.875a.75.75 0 0 1 1.026-1.094l.737.69V13.5a.75.75 0 0 1 1.5 0v3.269l.737-.691a.75.75 0 0 1 1.026 1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileDownloadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadLineDuotoneIcon],svg[solar-file-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 13.5v5m0 0l2-1.875m-2 1.875l-2-1.875" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteBoldDuotoneIcon],svg[solar-file-favourite-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.854 14.023l.098.176c.108.194.162.29.247.354s.189.088.398.135l.191.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.116 1.352s-.575.015-1.266-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354l.098-.176C7.526 13.34 7.716 13 8 13s.474.34.854 1.023M11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileFavouriteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteLineDuotoneIcon],svg[solar-file-favourite-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M8.146 13.023C8.526 12.34 8.716 12 9 12s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileFavouriteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftBoldDuotoneIcon],svg[solar-file-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.453 15.487a.75.75 0 0 0 0 1.026l1.875 2a.75.75 0 0 0 1.094-1.026l-.69-.737H11a.75.75 0 0 0 0-1.5H7.731l.691-.737a.75.75 0 0 0-1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftLineDuotoneIcon],svg[solar-file-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16H6m0 0l1.875-2M6 16l1.875 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLineDuotoneIcon],svg[solar-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveBoldDuotoneIcon],svg[solar-file-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.53 14.47a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zm4.98-12.21l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveLineDuotoneIcon],svg[solar-file-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l3-3m0 3l-3-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightBoldDuotoneIcon],svg[solar-file-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightLineDuotoneIcon],svg[solar-file-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16h5m0 0l-1.875-2M11 16l-1.875 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendBoldDuotoneIcon],svg[solar-file-send-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.987 12.953a.75.75 0 0 1 1.026 0l2 1.875a.75.75 0 0 1-1.026 1.094l-.737-.69V18.5a.75.75 0 0 1-1.5 0v-3.269l-.737.691a.75.75 0 0 1-1.026-1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileSendBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendLineDuotoneIcon],svg[solar-file-send-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 18.5v-5m0 0l-2 1.875m2-1.875l2 1.875" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileSendLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileBoldDuotoneIcon],svg[solar-file-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 14.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m1.416 2.376a.75.75 0 0 0-.832 1.248a6.16 6.16 0 0 0 6.832 0a.75.75 0 1 0-.832-1.248a4.66 4.66 0 0 1-5.168 0M18 14.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileSmileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileLineDuotoneIcon],svg[solar-file-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:ellipse cx="17" cy="14.5" fill="currentColor" opacity=".5" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.5a5.41 5.41 0 0 0 6 0" opacity=".5"></svg:path><svg:ellipse cx="7" cy="14.5" fill="currentColor" opacity=".5" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarFileSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextBoldDuotoneIcon],svg[solar-file-text-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm5.51-14.99l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileTextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextLineDuotoneIcon],svg[solar-file-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 14.5h8M6 18h5.5" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterBoldDuotoneIcon],svg[solar-filter-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988" opacity=".5"></svg:path>`,
})
export class SolarFilterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterLineDuotoneIcon],svg[solar-filter-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"></svg:path><svg:path d="M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFilterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBoldDuotoneIcon],svg[solar-filters-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="currentColor" d="M13.58 13.79a6 6 0 0 1-7.16-3.58a6 6 0 1 0 7.16 3.58" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472a6 6 0 1 0 5.58-10.262a6.01 6.01 0 0 1-4 3.58" opacity=".4"></svg:path>`,
})
export class SolarFiltersBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersLineDuotoneIcon],svg[solar-filters-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"></svg:path><svg:path d="M6.5 10.189a6 6 0 1 0 7.106 3.669"></svg:path><svg:path d="M12 20.472a6 6 0 1 0 5.5-10.283" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFiltersLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireBoldDuotoneIcon],svg[solar-fire-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"></svg:path>`,
})
export class SolarFireBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireLineDuotoneIcon],svg[solar-fire-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 13.111C20 20.222 13.956 22 10.933 22C8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716c.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z"></svg:path><svg:path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555c0-1.102-.59-1.845-1.16-2.274c-.398-.299-.957-.03-1.094.449c-.178.624-.823 1.016-1.152.456c-.3-.512-.3-1.28-.3-1.743c0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFireLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticBoldDuotoneIcon],svg[solar-fire-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.477 16.059A8.99 8.99 0 0 1 12 12a8.99 8.99 0 0 1 7.523 4.059A7.1 7.1 0 0 0 20 13.504c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504c0 .897.168 1.757.477 2.555"></svg:path>`,
})
export class SolarFireMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticLineDuotoneIcon],svg[solar-fire-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21Z"></svg:path>`,
})
export class SolarFireMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBoldDuotoneIcon],svg[solar-fire-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667"></svg:path>`,
})
export class SolarFireSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareLineDuotoneIcon],svg[solar-fire-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path d="M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667Z"></svg:path></svg:g>`,
})
export class SolarFireSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2BoldDuotoneIcon],svg[solar-flag-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.558 3.873l-.413-.165a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.084a7.3 7.3 0 0 1-4.482-.305"></svg:path>`,
})
export class SolarFlag2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2LineDuotoneIcon],svg[solar-flag-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 22V2"></svg:path><svg:path d="m5 14l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.084a7.3 7.3 0 0 1-4.482-.305l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlag2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagBoldDuotoneIcon],svg[solar-flag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.349 3.79l-.204-.082a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334"></svg:path>`,
})
export class SolarFlagBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagLineDuotoneIcon],svg[solar-flag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 22V2"></svg:path><svg:path d="m5 14l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameBoldDuotoneIcon],svg[solar-flame-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15c0 4.255-2.618 6.122-4.641 6.751a.44.44 0 0 1-.233.012c-.289-.069-.432-.453-.224-.751c.88-1.266 1.898-3.196 1.898-5.012c0-1.95-1.644-4.253-2.928-5.674c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.202.39-.103.851-.482.77a.5.5 0 0 1-.122-.046C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15"></svg:path><svg:path fill="currentColor" d="M7.733 17.5c0 .93.36 1.905.767 2.69c.202.39-.103.852-.482.77c.482.54 3.658.957 7.108.803c-.289-.069-.432-.453-.224-.751c.88-1.265 1.898-3.196 1.898-5.012c0-1.95-1.644-4.253-2.928-5.674c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.251c-.166-.205-.466-.208-.657-.027c-.747.707-1.792 1.809-1.792 3.18" opacity=".5"></svg:path>`,
})
export class SolarFlameBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameLineDuotoneIcon],svg[solar-flame-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.359 21.751C17.382 21.121 20 19.254 20 15c0-4.622-5.056-9.586-8.427-12.154c-.557-.424-1.357-.119-1.617.53C8.31 7.496 4 11.855 4 15c0 3.107 2.246 5.309 4.081 6.372"></svg:path><svg:path d="M15.359 21.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.251c-.166-.205-.466-.208-.657-.027c-.747.707-1.792 1.809-1.792 3.18c0 .99.472 2.22.958 3.174c.22.433-.189.941-.61.698" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlameLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveBoldDuotoneIcon],svg[solar-flash-drive-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.83 10.441L18.296 12l-.11.11l-.09-.088c-.49-.87-1.446-1.827-2.869-3.25c-1.408-1.407-2.359-2.359-3.221-2.853l1.687-1.714C15.139 2.735 15.863 2 16.76 2c.9 0 1.623.735 3.069 2.205C21.277 5.675 22 6.41 22 7.323s-.724 1.648-2.17 3.118" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.142c0 1.348 1.085 2.433 3.255 4.603S8.509 22 9.857 22s2.434-1.085 4.603-3.255l.767-.767c2.17-2.17 3.255-3.255 3.255-4.603s-1.085-2.433-3.255-4.603s-3.254-3.254-4.602-3.254s-2.433 1.084-4.603 3.254l-.767.767C3.085 11.71 2 12.794 2 14.142m3.785-.53a.75.75 0 0 0-1.06 1.06l4.602 4.604a.75.75 0 1 0 1.061-1.06zm13.462-6.739a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0m-2.121-2.121a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashDriveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveLineDuotoneIcon],svg[solar-flash-drive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14.46 18.745l.53.53zm.767-.767l-.53-.53zm3.255-4.603h.75zM6.022 8.772l.53.53zm4.603-3.254v.75zm-5.37 4.021l-.53-.53zM2 14.142h-.75zm3.785-4.072l.767-.767l-1.06-1.061l-.768.767zm8.912 7.378l-.767.767l1.06 1.06l.768-.767zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375c-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968c.76-.58 1.615-1.437 2.685-2.507zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685z"></svg:path><svg:path fill="currentColor" d="M5.785 13.612a.75.75 0 0 0-1.06 1.06zm3.542 5.664a.75.75 0 1 0 1.061-1.06zm-4.602-4.603l4.602 4.603l1.061-1.06l-4.603-4.604z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.83 10.441l.535.526zm-2.069 1.033a.75.75 0 1 0 1.07 1.052zm2.07-7.27l-.535.527zM22 7.324h.75zm-8.307-3.118l.535.526zM16.762 2v.75zm-5.297 3.4a.75.75 0 0 0 1.07 1.051zm7.83 4.515l-1.534 1.559l1.07 1.052l1.534-1.559zm0-5.184c.739.75 1.238 1.26 1.563 1.692c.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8c-.398-.532-.984-1.124-1.692-1.844zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843c.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9c-.325.432-.824.942-1.562 1.692zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587c.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708c-.523.406-1.106 1.001-1.814 1.72zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72c-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394c.425.33.926.837 1.665 1.587zm-7.206 0l-1.694 1.72l1.07 1.052l1.693-1.72z"></svg:path><svg:path fill="currentColor" d="m14.46 18.745l.53.53zm.767-.767l-.53-.53zm3.255-4.603h.75zM6.022 8.772l.53.53zm-.767.767l-.53-.53zm.53.53l.767-.766l-1.06-1.061l-.768.767zm8.912 7.379l-.767.767l1.06 1.06l.768-.767zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375c-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968c.76-.58 1.615-1.437 2.685-2.507zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.717 7.403l-.707.707m-1.414-2.828l-.707.707" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashDriveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightBoldDuotoneIcon],svg[solar-flashlight-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.657V19c0 .932 0 1.398.153 1.765a2 2 0 0 0 1.082 1.083C10.602 22 11.069 22 12 22c.932 0 1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.153-1.594L15.18 10H8.82q.015.03.028.063C9 10.431 9 10.84 9 11.657" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 12.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20 4.172V4c0-.943 0-1.414-.293-1.707S18.943 2 18 2H6c-.943 0-1.414 0-1.707.293S4 3.057 4 4v.172c0 .408 0 .613.076.796L4.09 5h15.82q.008-.014.014-.032C20 4.785 20 4.58 20 4.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.171 8.828l3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172"></svg:path>`,
})
export class SolarFlashlightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightLineDuotoneIcon],svg[solar-flashlight-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.152-1.594c.153-.367.442-.657 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.618C20 4.785 20 4.58 20 4.172V4c0-.943 0-1.414-.293-1.707S18.943 2 18 2H6c-.943 0-1.414 0-1.707.293S4 3.057 4 4v.172c0 .408 0 .613.076.796s.22.329.51.618l3.242 3.242c.578.578.868.868 1.02 1.235S9 10.84 9 11.657Z"></svg:path><svg:path d="M15 10H9m3 3v2M4.5 5h15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashlightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnBoldDuotoneIcon],svg[solar-flashlight-on-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v-1.343c0-.818 0-1.226-.152-1.594L8.82 16h6.36q-.015.03-.027.063C15 16.431 15 16.84 15 17.657V20c0 .943 0 1.414-.293 1.707C14.416 22 13.944 22 13 22h-2c-.942 0-1.414 0-1.707-.293S9 20.943 9 20z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20 10.172V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v.172c0 .408 0 .613.076.797L4.09 11h15.82l.014-.031c.076-.184.076-.389.076-.797" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.171 14.828l3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-6.22.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zm12 0a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class SolarFlashlightOnBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnLineDuotoneIcon],svg[solar-flashlight-on-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 22v-4.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10v.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-3.242 3.242c-.578.579-.867.867-1.02 1.235c-.152.368-.152.776-.152 1.594V22m0-6H9"></svg:path><svg:path d="M4.5 11h15M12 5V2" opacity=".5"></svg:path><svg:path d="M8 5L6 3m10 2l2-2"></svg:path><svg:path d="M12 19v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashlightOnLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalBoldDuotoneIcon],svg[solar-flip-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.887v12.227c0 1.702 0 2.553-.542 2.832c-.543.28-1.235-.215-2.62-1.205l-1.582-1.13c-.616-.439-.924-.659-1.09-.982S16 16.927 16 16.171V7.83c0-.757 0-1.135.166-1.458c.166-.324.474-.543 1.09-.983l1.581-1.13c1.386-.99 2.078-1.484 2.62-1.205c.543.28.543 1.13.543 2.833m-20 0v12.227c0 1.702 0 2.553.542 2.832c.543.28 1.235-.215 2.62-1.205l1.582-1.13c.616-.439.924-.659 1.09-.982S8 16.927 8 16.171V7.83c0-.757 0-1.135-.166-1.458c-.166-.324-.474-.543-1.09-.983l-1.582-1.13c-1.385-.99-2.077-1.484-2.62-1.205C2 3.334 2 4.184 2 5.887" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75m0-8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75m0-8a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalLineDuotoneIcon],svg[solar-flip-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 18.114V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114Zm20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832Z"></svg:path><svg:path stroke-linecap="round" d="M12 14v-4m0-4V2m0 20v-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlipHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalBoldDuotoneIcon],svg[solar-flip-vertical-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.113 22H5.886c-1.702 0-2.553 0-2.832-.542c-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09S7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166c.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62c-.28.543-1.13.543-2.833.543m-.001-20H5.886c-1.702 0-2.553 0-2.832.542c-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09S7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166c.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipVerticalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalLineDuotoneIcon],svg[solar-flip-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.886 2h12.228c1.702 0 2.553 0 2.832.542c.28.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.982 1.09C17.306 8 16.927 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166s-.543-.474-.983-1.09l-1.13-1.582c-.988-1.385-1.483-2.077-1.204-2.62C3.334 2 4.184 2 5.886 2Zm0 20h12.228c1.702 0 2.553 0 2.832-.542c.28-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.982-1.09C17.306 16 16.927 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166s-.543.474-.983 1.09l-1.13 1.581c-.988 1.386-1.483 2.078-1.204 2.62S4.184 22 5.886 22Z"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m4 0h4M2 12h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlipVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampBoldDuotoneIcon],svg[solar-floor-lamp-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a3 3 0 0 0 2.835-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.017.46-.836.982A3 3 0 0 0 12 7"></svg:path><svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m6.455 10.98l.067-.09a3.12 3.12 0 0 0 .107-3.497c-.305-.48-.968-.398-1.318.05L2.78 10.684c-.35.448-.274 1.118.26 1.305c1.2.42 2.585.055 3.416-1.01"></svg:path><svg:path fill="currentColor" d="M2.439 7.786a2.033 2.033 0 0 1 2.872-.343L2.78 10.684a2.076 2.076 0 0 1-.34-2.898" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.545 10.98l-.067-.09a3.12 3.12 0 0 1-.107-3.497c.305-.48.968-.398 1.318.05l2.532 3.241c.35.448.274 1.118-.26 1.305c-1.2.42-2.585.055-3.416-1.01"></svg:path><svg:path fill="currentColor" d="M21.561 7.786a2.033 2.033 0 0 0-2.872-.343l2.532 3.241a2.076 2.076 0 0 0 .34-2.898" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7q.387 0 .745-.093q.005.045.005.093v6.407q.184-.178.387-.334l.012-.01l3.94-2.892a3.1 3.1 0 0 0 .856 1.232l-3.9 2.864a3.39 3.39 0 0 0-1.294 2.67v4.313h-1.5v-4.347a3.39 3.39 0 0 0-1.296-2.636l-3.9-2.864a3.1 3.1 0 0 0 .856-1.232l3.941 2.893l.012.009q.203.157.386.334V7a1 1 0 0 1 .006-.093q.358.092.744.093m-.002 15.75h.005z" opacity=".55"></svg:path>`,
})
export class SolarFloorLampBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampLineDuotoneIcon],svg[solar-floor-lamp-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0V7"></svg:path><svg:path d="M12 7a3 3 0 0 0 2.836-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.016.46-.836.982A3 3 0 0 0 12 7Z"></svg:path><svg:path d="M10 4a2 2 0 1 1 4 0" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207l-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.05 3.05 0 0 1-3.483-1.098m3.743-.207a2.076 2.076 0 0 0 .34-2.898a2.033 2.033 0 0 0-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 0 0 .107 3.498" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFloorLampLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticBoldDuotoneIcon],svg[solar-floor-lamp-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8"></svg:path><svg:path fill="currentColor" d="M12 2c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m6.455 11.98l.067-.09a3.12 3.12 0 0 0 .107-3.497c-.305-.48-.968-.398-1.318.05L2.78 11.684c-.35.448-.274 1.118.26 1.305c1.2.42 2.585.055 3.416-1.01"></svg:path><svg:path fill="currentColor" d="M12 8q.383 0 .75-.045V21.25h-1.5v-3.347a3.39 3.39 0 0 0-1.295-2.636l-3.9-2.863a3.1 3.1 0 0 0 .856-1.233l3.94 2.893l.012.009q.204.158.387.334V7.955Q11.617 8 12 8m-9.561.786a2.033 2.033 0 0 1 2.872-.343L2.78 11.684a2.076 2.076 0 0 1-.34-2.898" opacity=".5"></svg:path>`,
})
export class SolarFloorLampMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticLineDuotoneIcon],svg[solar-floor-lamp-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0V8"></svg:path><svg:path d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8Z"></svg:path><svg:path d="M12 2c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 19v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 11.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFloorLampMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogBoldDuotoneIcon],svg[solar-fog-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .522.096 1.023.271 1.485h18.92A5.57 5.57 0 0 0 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 15.249a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path>`,
})
export class SolarFogBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogLineDuotoneIcon],svg[solar-fog-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M8 22h8"></svg:path><svg:path stroke-linejoin="round" d="M5 19h14" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M2 16h20"></svg:path></svg:g>`,
})
export class SolarFogLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2BoldDuotoneIcon],svg[solar-folder-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202l-.002-1.048L22 10H2v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14"></svg:path><svg:path fill="currentColor" d="m11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V10h20l-.047-.75c-.072-1.049-.256-1.737-.723-2.256a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4" opacity=".5"></svg:path>`,
})
export class SolarFolder2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2LineDuotoneIcon],svg[solar-folder-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 11H2" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolder2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderBoldDuotoneIcon],svg[solar-folder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarFolderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCheckBoldDuotoneIcon],svg[solar-folder-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.498 11.44a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 1 1 1.122-.996l.772.87l2.107-2.37a.75.75 0 0 1 1.058-.062"></svg:path>`,
})
export class SolarFolderCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCheckLineDuotoneIcon],svg[solar-folder-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 13.5l1.333 1.5L14 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCloudBoldDuotoneIcon],svg[solar-folder-cloud-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 13.882C16 15.052 14.977 16 13.714 16h-4C8.768 16 8 15.289 8 14.412s.768-1.589 1.714-1.589q.171 0 .332.03a2 2 0 0 1-.141-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88c.895.288 1.538 1.075 1.538 2.002"></svg:path>`,
})
export class SolarFolderCloudBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCloudLineDuotoneIcon],svg[solar-folder-cloud-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M12.952 11.885a2.45 2.45 0 0 1 1.51-.004m-4.415.972a2 2 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a2 2 0 0 1-.142-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderCloudLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderErrorBoldDuotoneIcon],svg[solar-folder-error-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.97 11.47a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarFolderErrorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderErrorLineDuotoneIcon],svg[solar-folder-error-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="m10.5 15l3-3m0 3l-3-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderErrorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteBookmarkBoldDuotoneIcon],svg[solar-folder-favourite-bookmark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.853V6h-4v4.853c0 .29 0 .435.095.494s.224-.007.484-.136l1.242-.622c.088-.043.132-.065.179-.065s.091.022.179.065l1.242.622c.26.13.39.194.484.136c.095-.06.095-.204.095-.494"></svg:path><svg:path fill="currentColor" d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" opacity=".5"></svg:path>`,
})
export class SolarFolderFavouriteBookmarkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteBookmarkLineDuotoneIcon],svg[solar-folder-favourite-bookmark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6v4.853c0 .29 0 .435-.095.494s-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065s-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136c-.095-.06-.095-.204-.095-.494V6" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteBookmarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteStarBoldDuotoneIcon],svg[solar-folder-favourite-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.952 11.199l-.098-.176C12.474 10.34 12.284 10 12 10s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354"></svg:path>`,
})
export class SolarFolderFavouriteStarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteStarLineDuotoneIcon],svg[solar-folder-favourite-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 11.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderLineDuotoneIcon],svg[solar-folder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOpenBoldDuotoneIcon],svg[solar-folder-open-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868c.363 1.885.544 2.827 1.172 3.452q.246.244.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472q.298-.185.544-.429c.628-.625.81-1.567 1.172-3.452c.503-2.618.755-3.927.145-4.868a3 3 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a3 3 0 0 0-.57.646m6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.323.765.723s-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.576 12.485q.16-.19.352-.352c.87-.735 2.279-.735 5.094-.735h6.956c2.815 0 4.223 0 5.094.735q.192.162.353.353v-2.73c0-.91 0-1.663-.086-2.264c-.09-.635-.286-1.197-.755-1.66a3 3 0 0 0-.242-.214c-.512-.408-1.125-.575-1.82-.652c-.669-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.334-.006-1.653-.087a2.7 2.7 0 0 1-.536-.196c-.284-.14-.532-.351-1.227-.968l-.474-.42c-.2-.176-.335-.296-.48-.403a4.3 4.3 0 0 0-2.183-.803A8 8 0 0 0 8.414 2h-.117c-.64 0-1.063 0-1.43.061c-1.605.268-2.903 1.39-3.22 2.875c-.071.337-.071.724-.07 1.283z" opacity=".5"></svg:path>`,
})
export class SolarFolderOpenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOpenLineDuotoneIcon],svg[solar-folder-open-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052C6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013c.641.056 1.25.292 1.745.677a7 7 0 0 1 .443.397l.44.413c.653.612.979.918 1.37 1.122q.323.168.678.263c.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577q.095.08.18.168C20 6.387 20 7.375 20 9.348V11.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 17h4" opacity=".5"></svg:path><svg:path d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433q.223-.376.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763q.316.294.54.67c.578.977.34 2.335-.138 5.05c-.343 1.956-.515 2.934-1.11 3.582a3 3 0 0 1-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a3 3 0 0 1-.515-.445c-.595-.648-.767-1.626-1.11-3.581Z"></svg:path></svg:g>`,
})
export class SolarFolderOpenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderPathConnectBoldDuotoneIcon],svg[solar-folder-path-connect-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20a.75.75 0 0 1 .75-.75h8.5V15h1.5v4.25h8.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 20" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 9.8V8.369c0-1.711 0-2.567-.539-3.123q-.075-.077-.157-.146c-.598-.5-1.52-.5-3.362-.5h-.262c-.808 0-1.211 0-1.588-.1a3 3 0 0 1-.594-.228c-.341-.177-.627-.442-1.198-.972l-.385-.358a6 6 0 0 0-.388-.344a2.9 2.9 0 0 0-1.526-.587C8.87 2 8.736 2 8.465 2c-.618 0-.927 0-1.184.045c-1.133.199-2.019 1.021-2.232 2.073C5 4.357 5 4.644 5 5.218V9.8c0 2.451 0 3.677.82 4.438C6.64 15 7.96 15 10.6 15h2.8c2.64 0 3.96 0 4.78-.761c.82-.762.82-1.988.82-4.439m-5.5-3.05a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="20" r="2" fill="currentColor"></svg:circle>`,
})
export class SolarFolderPathConnectBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderPathConnectLineDuotoneIcon],svg[solar-folder-path-connect-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.5 7.5h-3" opacity=".5"></svg:path><svg:path d="M5 5.217c0-.573 0-.86.049-1.099c.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011c.56.049 1.093.254 1.526.587c.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146C19 5.802 19 6.658 19 8.369V9.8c0 2.451 0 3.677-.82 4.438c-.82.762-2.14.762-4.78.762h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8z"></svg:path><svg:path stroke-linecap="round" d="M22 20h-8M2 20h8m2-2v-3" opacity=".5"></svg:path><svg:circle cx="12" cy="20" r="2"></svg:circle></svg:g>`,
})
export class SolarFolderPathConnectLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderSecurityBoldDuotoneIcon],svg[solar-folder-security-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 13a2.75 2.75 0 1 1 3.5 2.646V17.5a.75.75 0 0 1-1.5 0v-1.854a2.75 2.75 0 0 1-2-2.646m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderSecurityBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderSecurityLineDuotoneIcon],svg[solar-folder-security-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 0v2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderSecurityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderWithFilesBoldDuotoneIcon],svg[solar-folder-with-files-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderWithFilesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderWithFilesLineDuotoneIcon],svg[solar-folder-with-files-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5" opacity=".5"></svg:path><svg:path d="M10 3h6.5c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderWithFilesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFootballBoldDuotoneIcon],svg[solar-football-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.658 3.223l-1.32.932c-.698.491-1.18.832-1.6 1.02v4.399l1.55 1.185l4.098-1.696c.033-.457.186-1.027.406-1.848l.417-1.562l.112-.443a9.97 9.97 0 0 1 2.639 7.377l-1.51-.998c-.715-.472-1.209-.799-1.537-1.121l-4.212 1.744l-.582 1.887l2.58 2.984C17.146 17 17.73 17 18.569 17h2.072a10 10 0 0 1-6.522 4.772l.073-.272l.587-1.765c.273-.817.46-1.382.688-1.783L12.915 15h-1.873l-2.323 2.958c.226.4.413.964.684 1.777l.588 1.765l.109.322A10 10 0 0 1 3.336 17h2.277c.846 0 1.435 0 1.884.085l2.357-3.001l-.577-1.87l-4.148-1.747c-.328.322-.823.65-1.537 1.121L2.04 12.615l-.022.015Q2.001 12.317 2 12a9.97 9.97 0 0 1 2.693-6.83l.139.483l.418 1.562c.219.82.371 1.39.405 1.846l4.032 1.7l1.552-1.188V5.158c-.414-.198-.889-.549-1.573-1.054L8.17 3l-.207-.155A9.95 9.95 0 0 1 11.989 2c1.447 0 2.823.308 4.064.863z"></svg:path>`,
})
export class SolarFootballBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFootballLineDuotoneIcon],svg[solar-football-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.185 17.75a.75.75 0 0 0 0-1.5zm-5.406 1.985l-.711-.237zm-1.299 1.528a.75.75 0 0 0 1.423.474zM3.998 16.25a.75.75 0 0 0 0 1.5zm5.405 3.485l.712-.237zm-.124 2.002a.75.75 0 0 0 1.423-.474zm-1.058-4.36l-.44.609zM5.556 5.46a.75.75 0 1 0-1.449.388zM5.25 7.215l-.725.194zM3.592 11.59l-.414-.626zm-1.965.399a.75.75 0 1 0 .828 1.251zm18.307-6.14a.75.75 0 1 0-1.449-.388zm-1.143 1.367l-.724-.194zm1.658 4.374l-.413.625zm1.137 1.65a.75.75 0 1 0 .828-1.251zM16.09 3.836a.75.75 0 1 0-.864-1.226zm-1.752.319l.432.612zm-4.672-.051l-.446.603zm-1.05-1.707a.75.75 0 1 0-.891 1.206zm5.876 8.278a.75.75 0 1 0 .574 1.386zm-3.254-1.417a.75.75 0 0 0 1.5 0zm3.05 5.037a.75.75 0 0 0-1.134.982zm-3.442.954a.75.75 0 1 0-1.18-.926zm-1.94-3.19a.75.75 0 1 0 .583-1.382zm11.279 4.191H18.57v1.5h1.615zm-6.117 3.248l-.588 1.765l1.423.474l.588-1.765zm4.502-3.248c-.678 0-1.25-.001-1.714.052c-.485.055-.93.176-1.333.467l.878 1.217c.12-.087.284-.155.625-.194c.36-.04.832-.042 1.544-.042zm-3.08 3.722c.226-.676.376-1.124.53-1.453c.144-.312.261-.447.38-.533l-.877-1.217c-.404.292-.658.675-.864 1.118c-.197.425-.377.968-.591 1.611zM3.999 17.75h1.615v-1.5H3.998zm4.694 2.222l.587 1.765l1.423-.474l-.587-1.765zm-3.08-2.222c.713 0 1.184.001 1.545.042c.34.04.505.107.625.194l.878-1.217c-.404-.29-.849-.412-1.333-.467c-.465-.053-1.037-.052-1.714-.052zm4.503 1.748c-.215-.643-.394-1.186-.591-1.611c-.206-.442-.46-.826-.864-1.118l-.878 1.217c.12.086.236.22.381.533c.153.33.303.777.529 1.453zM4.107 5.848l.418 1.561l1.45-.388l-.419-1.562zm-.929 5.115l-1.55 1.025l.827 1.251l1.55-1.025zm1.347-3.554c.184.689.305 1.145.359 1.504c.05.34.027.518-.025.656l1.403.532c.176-.466.177-.926.105-1.409c-.069-.463-.218-1.015-.393-1.67zm-.52 4.805c.566-.374 1.043-.688 1.402-.989c.374-.313.678-.659.855-1.124l-1.403-.532c-.052.138-.152.286-.416.507c-.278.233-.67.494-1.265.887zm14.48-6.754l-.418 1.561l1.449.388l.418-1.562zm1.55 6.754l1.552 1.025l.827-1.251l-1.551-1.025zm-1.968-5.193c-.175.656-.324 1.208-.393 1.671c-.072.483-.07.944.105 1.409l1.403-.532c-.052-.138-.075-.315-.025-.656c.054-.36.175-.815.359-1.504zm2.796 3.942c-.594-.393-.987-.654-1.265-.887c-.264-.22-.363-.369-.416-.507l-1.402.532c.176.465.48.811.854 1.124c.359.301.836.616 1.402.99zM15.226 2.61l-1.32.932l.864 1.225l1.32-.93zm-5.115.89L8.615 2.398l-.89 1.206L9.22 4.707zm3.794.042c-.582.41-.968.681-1.286.855c-.302.165-.475.204-.622.203l-.017 1.5c.498.005.93-.153 1.359-.387c.41-.225.877-.555 1.43-.946zM9.22 4.707c.546.403 1.005.743 1.41.977c.423.243.853.41 1.35.416l.017-1.5c-.148-.002-.32-.045-.618-.216c-.315-.181-.695-.46-1.268-.883zm8.974 4.435l-3.702 1.533l.574 1.386l3.702-1.533zm-5.455.116V5.35h-1.5v3.908zm3.79 7.629l-2.24-2.592l-1.135.982l2.24 2.591zm-7.718.954l2.035-2.592l-1.18-.926l-2.035 2.591zm.678-7.164L5.852 9.144l-.583 1.382l3.637 1.533z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.198 11.959l.716-.222zm.348-1.09l-.456-.596zm.373 3.427l-.717.22zm4.139 0l-.717-.222zm.373-3.427l-.455.595zm.348 1.09l.717.22zm-2.184-2.495l.455-.596zm-1.213 0l.456.596zm3.397 1.904l-.716.221zm-1.058 3.418l.464.59zm-3.465 0l-.464.59zm-1.058-3.418l.716.221zm2.941-1.308l1.837 1.404l.911-1.191l-1.837-1.405zm1.924 1.677l-.722 2.337l1.434.443l.721-2.337zm-.96 2.513h-2.23v1.5h2.23zm-2.467-.176l-.722-2.337l-1.433.443l.721 2.337zM10 11.464l1.837-1.404l-.911-1.192l-1.837 1.405zm3.975 0a.25.25 0 0 1 .087.125l1.433-.442a1.75 1.75 0 0 0-.609-.874zm.087.125a.25.25 0 0 1 0 .148l1.433.443a1.75 1.75 0 0 0 0-1.033zM13.05 8.87a1.75 1.75 0 0 0-1.062-.36v1.5q.083 0 .151.05zm-1.062-.36c-.373 0-.748.12-1.061.36l.91 1.19a.25.25 0 0 1 .152-.05zm1.353 5.565a.25.25 0 0 1-.084.123l.928 1.179c.272-.215.482-.511.59-.86zm-.084.123a.25.25 0 0 1-.153.053v1.5c.402 0 .78-.138 1.081-.374zm-2.384.053a.25.25 0 0 1-.153-.053l-.928 1.179c.3.236.679.374 1.081.374zm-.153-.053a.25.25 0 0 1-.084-.123l-1.434.443c.108.348.317.644.59.859zm-.806-2.46a.25.25 0 0 1 0-.148l-1.433-.442a1.75 1.75 0 0 0 0 1.033zm0-.148a.25.25 0 0 1 .087-.125l-.911-1.191a1.75 1.75 0 0 0-.609.874zm11.313.41c0 5.11-4.137 9.25-9.238 9.25v1.5c5.931 0 10.738-4.814 10.738-10.75zm-9.238 9.25c-5.102 0-9.239-4.14-9.239-9.25h-1.5c0 5.936 4.807 10.75 10.739 10.75zM2.75 12c0-5.11 4.137-9.25 9.239-9.25v-1.5C6.057 1.25 1.25 6.064 1.25 12zm9.239-9.25c5.1 0 9.238 4.14 9.238 9.25h1.5c0-5.936-4.807-10.75-10.738-10.75z"></svg:path>`,
})
export class SolarFootballLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenBoldDuotoneIcon],svg[solar-forbidden-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m3.757 17.394l1.425 1.424l1.424 1.425c.868.867 1.301 1.3 1.852 1.529S9.623 22 10.85 22h2.302c1.226 0 1.84 0 2.391-.228c.551-.229.985-.662 1.852-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852c.228-.551.228-1.165.228-2.39v-2.303c0-1.226 0-1.84-.228-2.39c-.228-.552-.662-.986-1.53-1.853l-1.424-1.424l-1.424-1.425c-.867-.867-1.3-1.3-1.852-1.529C14.99 2 14.377 2 13.152 2h-2.303c-1.226 0-1.84 0-2.39.228c-.552.229-.986.662-1.853 1.53L3.757 6.605c-.867.867-1.3 1.3-1.529 1.852S2 9.623 2 10.848v2.303c0 1.226 0 1.84.228 2.39c.229.552.662.986 1.53 1.853" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M18.818 5.182L5.182 18.818"></svg:path></svg:g>`,
})
export class SolarForbiddenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenCircleBoldDuotoneIcon],svg[solar-forbidden-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.521 4.418L4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06"></svg:path>`,
})
export class SolarForbiddenCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenCircleLineDuotoneIcon],svg[solar-forbidden-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarForbiddenCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenLineDuotoneIcon],svg[solar-forbidden-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13" opacity=".5"></svg:path><svg:path d="M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"></svg:path></svg:g>`,
})
export class SolarForbiddenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForward2BoldDuotoneIcon],svg[solar-forward-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 17.53a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L18.44 12l-4.47 4.47a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.69 12.75H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 1 1 1.5 0c0 1.756.715 2.78 1.563 3.391c.887.639 1.974.859 2.687.859h8.19l.75.75zm2.503-.463" opacity=".5"></svg:path>`,
})
export class SolarForward2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForward2LineDuotoneIcon],svg[solar-forward-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.5 17l5-5l-5-5"></svg:path><svg:path d="M19.5 12h-10c-1.667 0-5-1-5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarForward2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForwardBoldDuotoneIcon],svg[solar-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L18.44 12l-4.47-4.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.69 11.25H9.5c-.953 0-2.367.28-3.563 1.141c-1.235.89-2.187 2.365-2.187 4.609a.75.75 0 0 0 1.5 0c0-1.756.715-2.78 1.563-3.391c.887-.639 1.974-.859 2.687-.859h8.19l.75-.75zm2.503.463" opacity=".5"></svg:path>`,
})
export class SolarForwardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForwardLineDuotoneIcon],svg[solar-forward-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.5 7l5 5l-5 5"></svg:path><svg:path d="M19.5 12h-10c-1.667 0-5 1-5 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarForwardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFridgeBoldDuotoneIcon],svg[solar-fridge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 11.5V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-1.5zm13 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v1.5H4z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarFridgeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFridgeLineDuotoneIcon],svg[solar-fridge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"></svg:path><svg:path stroke-linejoin="round" d="M17 21v1h-1v-1m-8 0v1H7v-1" opacity=".5"></svg:path><svg:path d="M20 11.5H4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 7v2m0 5v2"></svg:path></svg:g>`,
})
export class SolarFridgeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFuelBoldDuotoneIcon],svg[solar-fuel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.553 9.147C2 9.942 2 10.991 2 13.087v2.796c0 2.884 0 4.326.879 5.221C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.896c.879-.895.879-2.337.879-5.22v-5.651c0-3.928 0-5.891-1.264-6.805c-1.264-.915-3.082-.266-6.718 1.031l-8 2.855c-1.941.692-2.911 1.038-3.465 1.833" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.016 5.53l-.072-.293a1.65 1.65 0 0 0-1.157-1.18C9.58 4 9.325 4 8.818 4H8c-1.28 0-1.92 0-2.36.345a1.7 1.7 0 0 0-.302.308C5 5.103 5 5.755 5 7.06v.621q.458-.168 1.018-.367zM7.47 9.47a.75.75 0 0 0 0 1.06l1.5 1.5q.058.058.123.1C9 12.564 9 13.156 9 14c0 .831 0 1.418.09 1.85l-1.62 1.62a.75.75 0 1 0 1.06 1.06l1.62-1.62c.432.09 1.019.09 1.85.09s1.418 0 1.85-.09l1.62 1.62a.75.75 0 1 0 1.06-1.06l-1.62-1.62c.09-.432.09-1.019.09-1.85s0-1.418-.09-1.85l1.62-1.62a.75.75 0 1 0-1.06-1.06l-1.62 1.62C13.418 11 12.831 11 12 11c-.844 0-1.436 0-1.87.093a1 1 0 0 0-.1-.123l-1.5-1.5a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class SolarFuelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFuelLineDuotoneIcon],svg[solar-fuel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 13.087c0-2.096 0-3.145.553-3.94c.554-.795 1.524-1.14 3.465-1.833l8-2.855c3.636-1.297 5.454-1.946 6.718-1.031C22 4.342 22 6.305 22 10.233v5.65c0 2.884 0 4.326-.879 5.221C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.896C2 20.21 2 18.767 2 15.884z"></svg:path><svg:path d="M9 14c0-1.414 0-2.121.44-2.56C9.878 11 10.585 11 12 11s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C9 16.122 9 15.415 9 14Z"></svg:path><svg:path stroke-linecap="round" d="m15 11l1-1m-7 1l-1-1m7 7l1 1m-7-1l-1 1M5 7.06c0-1.305 0-1.957.338-2.407q.132-.175.302-.308C6.08 4 6.72 4 8 4h.818c.507 0 .761 0 .97.057a1.65 1.65 0 0 1 1.156 1.18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFuelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenBoldDuotoneIcon],svg[solar-full-screen-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class SolarFullScreenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenCircleBoldDuotoneIcon],svg[solar-full-screen-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.004 6.75a.75.75 0 0 0-.013-1.5c-.85.007-1.577.034-2.179.152c-.623.122-1.167.351-1.613.797s-.675.99-.797 1.613c-.118.602-.145 1.328-.152 2.179a.75.75 0 0 0 1.5.013c.007-.856.035-1.454.124-1.904c.084-.428.212-.666.386-.84s.412-.302.84-.386c.45-.088 1.048-.117 1.904-.124m4.003-1.5a.75.75 0 1 0-.013 1.5c.856.007 1.454.035 1.903.124c.429.084.666.212.84.386c.175.174.303.412.387.84c.088.45.116 1.048.124 1.904a.75.75 0 0 0 1.5-.013c-.008-.85-.034-1.577-.152-2.179c-.122-.623-.352-1.167-.798-1.613s-.99-.675-1.612-.797c-.603-.118-1.329-.145-2.18-.152M6.75 13.994a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179c.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123c-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904m11.998.013a.75.75 0 1 0-1.5-.013c-.008.856-.036 1.454-.124 1.904c-.084.428-.212.666-.386.84s-.412.303-.84.387c-.45.087-1.048.116-1.904.123a.75.75 0 1 0 .013 1.5c.85-.007 1.576-.034 2.179-.152c.623-.122 1.166-.351 1.612-.797s.676-.99.798-1.613c.118-.602.144-1.328.151-2.179"></svg:path>`,
})
export class SolarFullScreenCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenCircleLineDuotoneIcon],svg[solar-full-screen-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarFullScreenCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenLineDuotoneIcon],svg[solar-full-screen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" opacity=".5"></svg:path><svg:path d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"></svg:path><svg:path d="M10 2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10" opacity=".5"></svg:path><svg:path d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarFullScreenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenSquareBoldDuotoneIcon],svg[solar-full-screen-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.004 6.75a.75.75 0 0 0-.013-1.5c-.85.007-1.577.034-2.179.152c-.623.122-1.167.351-1.613.797s-.675.99-.797 1.613c-.118.602-.145 1.328-.152 2.179a.75.75 0 0 0 1.5.013c.007-.856.035-1.454.124-1.904c.084-.428.212-.666.386-.84s.412-.302.84-.386c.45-.088 1.048-.117 1.904-.124m4.003-1.5a.75.75 0 1 0-.013 1.5c.856.007 1.454.035 1.903.124c.429.084.666.212.84.386c.175.174.303.412.387.84c.088.45.116 1.048.124 1.904a.75.75 0 0 0 1.5-.013c-.008-.85-.034-1.577-.152-2.179c-.122-.623-.352-1.167-.798-1.613s-.99-.675-1.612-.797c-.603-.118-1.329-.145-2.18-.152M6.75 13.994a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179c.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123c-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904m11.998.013a.75.75 0 1 0-1.5-.013c-.008.856-.036 1.454-.124 1.904c-.084.428-.212.666-.386.84s-.412.303-.84.387c-.45.087-1.048.116-1.904.123a.75.75 0 1 0 .013 1.5c.85-.007 1.576-.034 2.179-.152c.623-.122 1.166-.351 1.612-.797s.676-.99.798-1.613c.118-.602.144-1.328.151-2.179"></svg:path>`,
})
export class SolarFullScreenSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenSquareLineDuotoneIcon],svg[solar-full-screen-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFullScreenSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryAddBoldDuotoneIcon],svg[solar-gallery-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m.75-6.5a.75.75 0 0 0-1.5 0v1.25H15.5a.75.75 0 0 0 0 1.5h1.25V8.5a.75.75 0 0 0 1.5 0V7.25h1.25a.75.75 0 0 0 0-1.5h-1.25z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path>`,
})
export class SolarGalleryAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryAddLineDuotoneIcon],svg[solar-gallery-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path d="M15 5.5h3.5m0 0H22m-3.5 0V9m0-3.5V2"></svg:path></svg:g>`,
})
export class SolarGalleryAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryBoldDuotoneIcon],svg[solar-gallery-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859" opacity=".4"></svg:path>`,
})
export class SolarGalleryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCheckBoldDuotoneIcon],svg[solar-gallery-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.53-5.47a.75.75 0 0 0-1.06-1.06L16.5 6.94l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCheckLineDuotoneIcon],svg[solar-gallery-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="m13 7l2 2l5-5"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCircleBoldDuotoneIcon],svg[solar-gallery-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.182 15.362l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894c-.017.013-.05.099-.05.338a9.3 9.3 0 0 0 17.025 5.179l-.117-.118l-1.833-1.662a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m19.73-2.23c.209.775.32 1.59.32 2.43A9.3 9.3 0 1 1 3.016 9.787C4.008 5.747 7.654 2.75 12 2.75c4.34 0 7.981 2.989 8.98 7.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCircleLineDuotoneIcon],svg[solar-gallery-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m20 17.6l-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarGalleryCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryDownloadBoldDuotoneIcon],svg[solar-gallery-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryDownloadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryDownloadLineDuotoneIcon],svg[solar-gallery-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M17 11V2m0 9l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarGalleryDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryEditBoldDuotoneIcon],svg[solar-gallery-edit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 8.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187c-.09.043-.188.076-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryEditBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryEditLineDuotoneIcon],svg[solar-gallery-edit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path d="m18.562 2.935l.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0l-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65"></svg:path></svg:g>`,
})
export class SolarGalleryEditLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryFavouriteBoldDuotoneIcon],svg[solar-gallery-favourite-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.904 16.441c.083-1.024.094-2.274.096-3.743a.697.697 0 1 0-1.396 0c-.001 1.477-.012 2.658-.091 3.63c-.084 1.032-.242 1.763-.507 2.32l-2.633-2.37a2.79 2.79 0 0 0-3.471-.21l-.277.196a1.86 1.86 0 0 1-2.386-.207l-3.99-3.99a2.14 2.14 0 0 0-2.922-.097l-.931.814V12c0-2.212 0-3.801.163-5.01c.16-1.19.464-1.907.994-2.437S5.8 3.72 6.99 3.56c1.079-.145 2.458-.161 4.313-.163a.699.699 0 0 0 0-1.396c-1.829.002-3.33.02-4.499.177c-1.343.18-2.404.557-3.236 1.39s-1.21 1.893-1.39 3.236C2 8.116 2 9.8 2 11.947V12q0 .736.002 1.396c.007 1.729.044 3.121.243 4.24c.203 1.14.584 2.058 1.322 2.796c.832.833 1.893 1.21 3.236 1.39C8.116 22 9.8 22 11.947 22h.106c2.148 0 3.83 0 5.144-.177c1.344-.18 2.404-.557 3.236-1.39a4.2 4.2 0 0 0 .73-.983c.445-.825.644-1.82.74-3.009" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.455-2.784c-.765-.67-1.545-1.564-1.545-2.418c0-1.773 1.65-2.435 3-1.065c1.35-1.37 3-.708 3 1.065c0 .854-.78 1.747-1.545 2.418c-.596.523-.894.784-1.455.784c-.56 0-.859-.261-1.455-.784" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryFavouriteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryFavouriteLineDuotoneIcon],svg[solar-gallery-favourite-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.06 8.57l.492-.566zM18 3.968l-.532.529a.75.75 0 0 0 1.064 0zm1.94 4.602l-.492-.566zM18 9.606v-.75zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374c-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122c.435.614.999 1.175 1.533 1.639zM14.75 5.375c0-.933.42-1.404.834-1.557c.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028c-1.136.418-1.816 1.555-1.816 2.964zm5.682 3.761c.533-.464 1.097-1.025 1.532-1.639c.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255c-.34.48-.806.952-1.292 1.374zm2.318-3.76c0-1.41-.68-2.547-1.816-2.965c-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679c.414.153.834.624.834 1.557zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.432-1.22z"></svg:path></svg:g>`,
})
export class SolarGalleryFavouriteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryLineDuotoneIcon],svg[solar-gallery-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryMinimalisticBoldDuotoneIcon],svg[solar-gallery-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.504 13.177a1.55 1.55 0 0 0-2.183-.073l-.81.753a.75.75 0 0 1-1.021-1.1l.81-.752a3.05 3.05 0 0 1 4.296.143l2.647 2.81a.795.795 0 0 0 1.054.092a3.07 3.07 0 0 1 3.953.241l2.268 2.167a.75.75 0 0 1-1.036 1.084l-2.268-2.166a1.57 1.57 0 0 0-2.02-.123a2.295 2.295 0 0 1-3.043-.266zM18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarGalleryMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryMinimalisticLineDuotoneIcon],svg[solar-gallery-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m5 13.307l.81-.753a2.3 2.3 0 0 1 3.24.108l2.647 2.81c.539.572 1.42.649 2.049.18a2.32 2.32 0 0 1 2.986.181L19 18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRemoveBoldDuotoneIcon],svg[solar-gallery-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.47-7.03a.75.75 0 1 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 0 0 1.06 1.06l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06L18.56 6.5l1.47-1.47a.75.75 0 0 0-1.06-1.06L17.5 5.44z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRemoveLineDuotoneIcon],svg[solar-gallery-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path d="m22 2l-6 6m0-6l6 6"></svg:path></svg:g>`,
})
export class SolarGalleryRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundBoldDuotoneIcon],svg[solar-gallery-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.249 13.28l-.222-.03c-2.844-.394-5.446 1.084-6.772 3.313c-1.71-4.325-6.227-7.275-11.274-6.55l-.226.032q-.006.893-.005 1.955q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645c.076-.926.093-2.028.098-3.373" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarGalleryRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundLineDuotoneIcon],svg[solar-gallery-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22M22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGallerySendBoldDuotoneIcon],svg[solar-gallery-send-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.03-5.53l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V8.5a.75.75 0 0 0 1.5 0V6.31l.22.22a.75.75 0 1 0 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGallerySendBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGallerySendLineDuotoneIcon],svg[solar-gallery-send-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M17 2v9m0-9l3 3m-3-3l-3 3"></svg:path></svg:g>`,
})
export class SolarGallerySendLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryWideBoldDuotoneIcon],svg[solar-gallery-wide-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.512 10.077c0 .738-.625 1.337-1.396 1.337s-1.395-.599-1.395-1.337c0-.739.625-1.338 1.395-1.338s1.396.599 1.396 1.338"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.036 5.532c-1.06-.137-2.414-.137-4.123-.136h-3.826c-1.71 0-3.064 0-4.123.136c-1.09.14-1.974.437-2.67 1.104S2.29 8.149 2.142 9.195C2 10.21 2 11.508 2 13.147v.1c0 1.64 0 2.937.142 3.953c.147 1.046.456 1.892 1.152 2.559s1.58.963 2.67 1.104c1.06.136 2.414.136 4.123.136h3.826c1.71 0 3.064 0 4.123-.136c1.09-.14 1.974-.437 2.67-1.104s1.005-1.514 1.152-2.559C22 16.184 22 14.886 22 13.248v-.1c0-1.64 0-2.937-.142-3.953c-.147-1.046-.456-1.892-1.152-2.559s-1.58-.963-2.67-1.104M6.15 6.858c-.936.12-1.475.346-1.87.724c-.393.377-.629.894-.755 1.791c-.1.72-.123 1.619-.128 2.795l.47-.395c1.125-.942 2.819-.888 3.875.124l3.99 3.825a1.2 1.2 0 0 0 1.491.124l.278-.187a3.606 3.606 0 0 1 4.34.25l2.407 2.077c.098-.264.173-.579.227-.964c.128-.916.13-2.124.13-3.824s-.002-2.909-.13-3.825c-.126-.897-.362-1.414-.756-1.791c-.393-.378-.933-.604-1.869-.724c-.956-.124-2.216-.125-3.99-.125h-3.72c-1.774 0-3.034.001-3.99.125" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.087 2.61c-.86-.11-1.955-.11-3.32-.11h-3.09c-1.364 0-2.459 0-3.318.11c-.89.115-1.633.358-2.222.92a2.9 2.9 0 0 0-.724 1.12c.504-.23 1.074-.366 1.714-.45c1.085-.14 2.47-.14 4.22-.14h3.915c1.749 0 3.134 0 4.219.14c.559.073 1.064.186 1.52.366a2.9 2.9 0 0 0-.693-1.035c-.589-.563-1.331-.806-2.221-.92" opacity=".5"></svg:path>`,
})
export class SolarGalleryWideBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryWideLineDuotoneIcon],svg[solar-gallery-wide-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 13.438C2 9.666 2 7.78 3.172 6.609S6.229 5.438 10 5.438h4c3.771 0 5.657 0 6.828 1.171S22 9.666 22 13.438c0 3.77 0 5.656-1.172 6.828S17.771 21.438 14 21.438h-4c-3.771 0-5.657 0-6.828-1.172S2 17.209 2 13.438Z"></svg:path><svg:path d="M3.988 6c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937c.49.489.725 1.132.837 2.063" opacity=".5"></svg:path><svg:circle cx="17.5" cy="9.938" r="1.5" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 13.938l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.221l.299-.21a3 3 0 0 1 3.731.226l3.224 2.9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryWideLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGameboyBoldDuotoneIcon],svg[solar-gameboy-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.25 14a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zm7.083-.167a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m-2.5-.834a.833.833 0 1 0 0-1.666a.833.833 0 0 0 0 1.666M18 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0M7.051 7.112C7 7.302 7 7.535 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06"></svg:path>`,
})
export class SolarGameboyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGameboyLineDuotoneIcon],svg[solar-gameboy-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 14v3M7 15.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.333 13.833a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0M14.667 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0m3.333 0a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGameboyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadBoldDuotoneIcon],svg[solar-gamepad-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class SolarGamepadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadChargeBoldDuotoneIcon],svg[solar-gamepad-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 18.968A1 1 0 0 0 13.5 18v-.727a.38.38 0 0 0-.26-.36a3.92 3.92 0 0 0-2.48 0a.38.38 0 0 0-.26.36V18a1 1 0 0 0 .75.968v3.282a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.41-.268-.77-.616-1.13-.964c-.444-.43-.888-.86-1.424-1.138a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.536.279-.98.709-1.425 1.139c-.36.348-.72.696-1.128.964a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class SolarGamepadChargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadChargeLineDuotoneIcon],svg[solar-gamepad-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.97.504-1.64 1.504-2.553 2.103a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 9v3M6 10.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadLineDuotoneIcon],svg[solar-gamepad-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.97.504-1.64 1.504-2.553 2.103a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 9v3M6 10.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadMinimalisticBoldDuotoneIcon],svg[solar-gamepad-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.172 8c2.539 0 3.808 0 4.784.614q.372.233.684.542c.82.81 1.109 2.047 1.687 4.52l1.022 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.2 3.2 0 0 0-2.876-1.794h-2.005A3.2 3.2 0 0 0 8.12 19.71l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.687-4.519a4 4 0 0 1 .684-.542C7.02 8 8.289 8 10.828 8z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.25 12a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V15a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zM15 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.75 4a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 7v1h1.5V7a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 5z"></svg:path>`,
})
export class SolarGamepadMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadMinimalisticLineDuotoneIcon],svg[solar-gamepad-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 11v3M7 12.5h3" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m21.92 17.377l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666q-.331-.319-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634q-.394.241-.725.56c-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546c1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575c1.631-.37 2.645-1.958 2.264-3.545Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadNoChargeBoldDuotoneIcon],svg[solar-gamepad-no-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.41-.268-.77-.616-1.13-.964c-.444-.43-.888-.86-1.424-1.138a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.536.279-.98.709-1.425 1.139c-.36.348-.72.696-1.128.964a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.47 17.47a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 1 1 1.06 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class SolarGamepadNoChargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadNoChargeLineDuotoneIcon],svg[solar-gamepad-no-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 0 0 1.392-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19c1.615 0 2.385-1.169 2.569-1.753M14 17l-4 4m0-4l4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 9v3M6 10.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadNoChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOldBoldDuotoneIcon],svg[solar-gamepad-old-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 6H14c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.75 2a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 5v1h1.5V5a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 3z"></svg:path>`,
})
export class SolarGamepadOldBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOldLineDuotoneIcon],svg[solar-gamepad-old-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarGamepadOldLineDuotone0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10v4m-2-2h4" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12Z"></svg:path></svg:g><svg:defs><svg:clippath id="solarGamepadOldLineDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarGamepadOldLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGarageBoldDuotoneIcon],svg[solar-garage-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.007 3.772l-6 5.333A3 3 0 0 0 3 11.347v9.903H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1v-9.903a3 3 0 0 0-1.007-2.242l-6-5.333a3 3 0 0 0-3.986 0M10 8.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4.052 3c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v5.302H5.25v-5.302c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.052 11.25H9.948c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.344-.08 2.242v5.302h13.5v-5.302c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 14.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarGarageBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGarageLineDuotoneIcon],svg[solar-garage-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4"></svg:path><svg:path stroke-linecap="round" d="M9 15.5h6m-6 3h6" opacity=".5"></svg:path><svg:path d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGarageLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGasStationBoldDuotoneIcon],svg[solar-gas-station-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 2h-1c-2.828 0-4.243 0-5.121.879C2.75 3.757 2.75 5.172 2.75 8v13.25h13V8c0-2.828 0-4.243-.879-5.121C13.993 2 12.578 2 9.75 2" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.75 21.25h-1a.75.75 0 0 0 0 1.5h15.123a.75.75 0 0 0 0-1.5zM8 6h3c.943 0 1.414 0 1.707.293S13 7.057 13 8s0 1.414-.293 1.707S11.943 10 11 10H8c-.943 0-1.414 0-1.707-.293S6 8.943 6 8s0-1.414.293-1.707S7.057 6 8 6M7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm8.75 1.5h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582a9 9 0 0 0-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195c.443.397.711.954.745 1.549a6 6 0 0 1 .003.306V8h-.75a1.5 1.5 0 0 0-1.5 1.5v2.419a1.5 1.5 0 0 0 1.026 1.423L21 13.75v4.75a.75.75 0 0 1-1.5 0v-.071a2.18 2.18 0 0 0-2.179-2.179H15.75z"></svg:path>`,
})
export class SolarGasStationBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGasStationLineDuotoneIcon],svg[solar-gas-station-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 6H8c-.943 0-1.414 0-1.707.293S6 7.057 6 8s0 1.414.293 1.707S7.057 10 8 10h3c.943 0 1.414 0 1.707-.293S13 8.943 13 8s0-1.414-.293-1.707S11.943 6 11 6Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 17h5" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22H2"></svg:path><svg:path fill="currentColor" d="M19.969 3.414a.75.75 0 1 0-.937 1.172zm.764 1.572l.469-.585zM16 16.25a.75.75 0 0 0 0 1.5zm5.003-11.042l-.501.559zm.992 2.066l.75-.042zM22 8.75a.75.75 0 0 0 0-1.5zm-1.974 4.592l-.238.711zm1.737 1.37a.75.75 0 0 0 .474-1.423zM19.03 4.586l1.234.986l.937-1.171l-1.234-.987zm2.219 3.036V18.5h1.5V7.622zM19.75 18.5v-.071h-1.5v.071zm-2.179-2.25H16v1.5h1.571zm2.179 2.179a2.18 2.18 0 0 0-2.179-2.179v1.5c.375 0 .679.304.679.679zm.75.821a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.985-12.928c.144.116.194.156.237.195l1.001-1.117c-.082-.074-.17-.144-.301-.25zm2.485 2.05c0-.168 0-.28-.006-.39l-1.497.084a6 6 0 0 1 .003.306zm-2.248-1.855c.443.397.711.954.745 1.549l1.497-.084a3.75 3.75 0 0 0-1.24-2.582zM22 7.25h-1.5v1.5H22zM18.25 9.5v2.419h1.5V9.5zm1.538 4.553l1.975.658l.474-1.422l-1.974-.659zM18.25 11.92c0 .968.62 1.828 1.538 2.134l.475-1.423a.75.75 0 0 1-.513-.711zm2.25-4.67a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGasStationLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostBoldDuotoneIcon],svg[solar-ghost-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.206V12c0-5.523-4.477-10-10-10S2 6.477 2 12v7.206a1.727 1.727 0 0 0 2.5 1.544a2.89 2.89 0 0 1 2.896.18a2.89 2.89 0 0 0 3.208 0l.353-.234a1.88 1.88 0 0 1 2.086 0l.353.235a2.89 2.89 0 0 0 3.208 0a2.89 2.89 0 0 1 2.897-.18A1.727 1.727 0 0 0 22 19.206" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path>`,
})
export class SolarGhostBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostLineDuotoneIcon],svg[solar-ghost-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGhostLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostSmileBoldDuotoneIcon],svg[solar-ghost-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544a2.89 2.89 0 0 0-2.896.18a2.89 2.89 0 0 1-3.208 0l-.353-.234a1.88 1.88 0 0 0-2.086 0l-.353.235a2.89 2.89 0 0 1-3.208 0a2.89 2.89 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 14.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852M16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarGhostSmileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostSmileLineDuotoneIcon],svg[solar-ghost-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGhostSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGiftBoldDuotoneIcon],svg[solar-gift-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.914 11.25H2v1.5h8.163A3.25 3.25 0 0 1 7 15.25a.75.75 0 0 0 0 1.5a4.75 4.75 0 0 0 4.25-2.626V22h1.5v-7.876A4.75 4.75 0 0 0 17 16.75a.75.75 0 0 0 0-1.5a3.25 3.25 0 0 1-3.163-2.5H22v-1.5h-4.913c.35-.438.613-.955.756-1.527c.538-2.153-1.413-4.103-3.565-3.565a4 4 0 0 0-1.528.756V2h-1.5v4.914a4 4 0 0 0-1.527-.756C7.57 5.62 5.62 7.57 6.158 9.723c.143.572.405 1.089.756 1.527m4.336 0H9.997a2.5 2.5 0 0 1-2.384-1.891A1.44 1.44 0 0 1 9.36 7.613a2.5 2.5 0 0 1 1.891 2.384zm2.753 0H12.75v-1.245a2.5 2.5 0 0 1 1.891-2.392a1.44 1.44 0 0 1 1.746 1.746a2.5 2.5 0 0 1-2.384 1.891" clip-rule="evenodd"></svg:path>`,
})
export class SolarGiftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGiftLineDuotoneIcon],svg[solar-gift-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12H2M12 2v20" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M13 12a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4"></svg:path><svg:path d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.25 3.25 0 0 0 3.15 2.46H12z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarGiftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlassesBoldDuotoneIcon],svg[solar-glasses-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.712 3.763a.75.75 0 0 1-.475.949l-.518.172c-.617.206-1.024.343-1.326.481c-.286.13-.414.235-.5.343c-.085.107-.157.256-.219.564c-.065.326-.105.753-.164 1.401l-.367 4.037l-.048.532a4.75 4.75 0 0 1 7.585 2.942a4.8 4.8 0 0 1 1.32-.187v1.5c-.37 0-.739.063-1.092.19l-.22.077A4.75 4.75 0 0 1 6 20.75c-2.62 0-4.745-2.14-4.75-4.758q0-.421.072-.823L2.02 7.5c.054-.6.1-1.107.183-1.521c.089-.441.23-.842.515-1.201c.284-.36.642-.59 1.051-.776c.384-.176.868-.337 1.439-.527l.555-.185a.75.75 0 0 1 .949.474" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.905 12.242a4.75 4.75 0 0 0-7.585 2.942a4.8 4.8 0 0 0-1.32-.187v1.5c.37 0 .739.063 1.092.19l.22.077A4.75 4.75 0 0 0 18 20.75c2.62 0 4.744-2.14 4.75-4.758q0-.421-.073-.823L21.98 7.5c-.054-.6-.1-1.107-.183-1.521c-.089-.441-.23-.842-.515-1.201s-.642-.59-1.051-.776c-.384-.176-.868-.337-1.439-.527l-.555-.185a.75.75 0 0 0-.474 1.423l.518.172c.617.206 1.024.343 1.326.481c.286.13.414.235.5.343c.085.107.157.256.219.564c.065.326.105.753.164 1.401z" opacity=".5"></svg:path>`,
})
export class SolarGlassesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlassesLineDuotoneIcon],svg[solar-glasses-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="18" cy="16" r="4"></svg:circle><svg:circle cx="6" cy="16" r="4"></svg:circle><svg:path stroke-linecap="round" d="m14 16.214l-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGlassesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobalBoldDuotoneIcon],svg[solar-global-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.028 11.25A10 10 0 0 1 12 2c-.83 0-1.57.364-2.18.921c-.605.554-1.116 1.328-1.53 2.242c-.416.92-.74 1.996-.959 3.163a20 20 0 0 0-.318 2.924zm0 1.5h4.985c.036 1.002.143 1.988.318 2.924c.22 1.167.543 2.243.959 3.163c.414.914.925 1.688 1.53 2.242c.61.557 1.35.921 2.18.921c-5.27 0-9.589-4.077-9.972-9.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 2c.831 0 1.57.364 2.18.921c.605.554 1.117 1.328 1.53 2.242c.417.92.74 1.996.959 3.163c.175.936.282 1.922.318 2.924h4.985A10 10 0 0 0 12 2m4.669 13.674c-.219 1.167-.542 2.243-.959 3.163c-.413.914-.925 1.688-1.53 2.242c-.61.557-1.349.921-2.18.921c5.27 0 9.589-4.077 9.972-9.25h-4.985a20 20 0 0 1-.318 2.924"></svg:path><svg:path fill="currentColor" d="M12 3.396c-.275 0-.63.117-1.043.495c-.416.38-.833.977-1.201 1.79c-.366.808-.663 1.784-.867 2.873c-.16.859-.26 1.768-.296 2.696h6.814a18.5 18.5 0 0 0-.296-2.696c-.204-1.09-.5-2.065-.867-2.872c-.368-.814-.784-1.41-1.2-1.791c-.414-.378-.769-.495-1.044-.495m-3.111 12.05c.204 1.09.501 2.065.867 2.873c.368.813.785 1.41 1.2 1.79c.414.379.77.496 1.044.496c.275 0 .63-.117 1.044-.495c.416-.381.832-.978 1.2-1.791c.366-.808.663-1.783.867-2.873c.161-.858.261-1.768.296-2.696H8.593c.035.928.135 1.838.296 2.696" opacity=".5"></svg:path>`,
})
export class SolarGlobalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobalLineDuotoneIcon],svg[solar-global-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12h20m-6 0c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" opacity=".5"></svg:path><svg:path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></svg:path></svg:g>`,
})
export class SolarGlobalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobusBoldDuotoneIcon],svg[solar-globus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="10" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M9.602 8.213C9.471 6.754 8.346 5.395 7.8 4.897l-.302-.258A6.97 6.97 0 0 1 12 3c1.55 0 2.98.503 4.14 1.356c.164.497-.148 1.536-.475 2.033c-.12.18-.388.404-.683.616c-.666.478-1.505.715-1.932 1.595a1 1 0 0 0-.058.711c.042.154.069.321.07.485c0 .528-.534.91-1.062.904c-1.375-.015-2.275-1.123-2.398-2.487m3.404 6.181c.691-1.304 2.997-1.304 2.997-1.304c2.402-.025 2.727-1.484 2.944-2.22a7.004 7.004 0 0 1-5.975 6.063c-.226-.475-.493-1.546.034-2.54"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.004 1.5a.75.75 0 0 1 1.058-.059a11.04 11.04 0 0 1 3.688 8.246c0 5.751-4.389 10.478-10 11.013v.55H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.509a11.04 11.04 0 0 1-7.809-3.678a.75.75 0 1 1 1.118-1a9.54 9.54 0 0 0 7.128 3.187a9.563 9.563 0 0 0 9.563-9.563a9.54 9.54 0 0 0-3.188-7.128a.75.75 0 0 1-.059-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlobusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobusLineDuotoneIcon],svg[solar-globus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22v-2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M4 16.562A10.3 10.3 0 0 0 11.687 20C17.383 20 22 15.383 22 9.687C22 6.633 20.672 3.888 18.562 2"></svg:path><svg:path d="M7 4.553c.585.552 1.79 2.063 1.931 3.684c.131 1.515 1.096 2.746 2.569 2.763c.566.006 1.139-.418 1.137-1.005c0-.182-.03-.367-.074-.538a1.14 1.14 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772c.316-.236.604-.484.732-.684c.35-.553.702-1.658.526-2.211m-2.662 13c-.22-.414-.527-1.49 0-2.483c.659-1.241 2.854-1.241 2.854-1.241c1.692-.018 2.302-.782 2.588-1.462M19 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 22h4"></svg:path></svg:g>`,
})
export class SolarGlobusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGolfBoldDuotoneIcon],svg[solar-golf-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="18.5" fill="currentColor" opacity=".5" rx="10" ry="3.5"></svg:ellipse><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504l.054.027c.734.367 1.36.68 1.796.984c.442.309.906.757.906 1.449s-.464 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarGolfBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGolfLineDuotoneIcon],svg[solar-golf-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:ellipse cx="12" cy="18.5" opacity=".5" rx="10" ry="3.5"></svg:ellipse><svg:path stroke-linecap="round" d="M12 18V2m0 1.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"></svg:path></svg:g>`,
})
export class SolarGolfLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGpsBoldDuotoneIcon],svg[solar-gps-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.512a3.488 3.488 0 1 0 0 6.976a3.488 3.488 0 0 0 0-6.976M12.75 2a.75.75 0 0 0-1.5 0v2.035a8 8 0 0 1 1.5 0zm7.215 10.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5zm-8.715 7.215a8 8 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0zM4.035 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class SolarGpsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGpsLineDuotoneIcon],svg[solar-gps-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M2 12h2m16 0h2M12 4V2m0 20v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGpsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphBoldDuotoneIcon],svg[solar-graph-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003l.004-.001q.004 0 .011.004a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1z"></svg:path>`,
})
export class SolarGraphBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownBoldDuotoneIcon],svg[solar-graph-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013H14.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0z"></svg:path>`,
})
export class SolarGraphDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownLineDuotoneIcon],svg[solar-graph-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownNewBoldDuotoneIcon],svg[solar-graph-down-new-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-7.5 8.25a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0L7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013z"></svg:path>`,
})
export class SolarGraphDownNewBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownNewLineDuotoneIcon],svg[solar-graph-down-new-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphDownNewLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphLineDuotoneIcon],svg[solar-graph-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path></svg:g>`,
})
export class SolarGraphLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewBoldDuotoneIcon],svg[solar-graph-new-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003l.004-.001q.004 0 .011.004a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarGraphNewBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewLineDuotoneIcon],svg[solar-graph-new-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphNewLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewUpBoldDuotoneIcon],svg[solar-graph-new-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-7.5 5.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z"></svg:path>`,
})
export class SolarGraphNewUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewUpLineDuotoneIcon],svg[solar-graph-new-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphNewUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphUpBoldDuotoneIcon],svg[solar-graph-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.5 10.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z"></svg:path>`,
})
export class SolarGraphUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphUpLineDuotoneIcon],svg[solar-graph-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuBoldDuotoneIcon],svg[solar-hamburger-menu-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarHamburgerMenuBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuLineDuotoneIcon],svg[solar-hamburger-menu-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 7H4"></svg:path><svg:path d="M20 12H4" opacity=".5"></svg:path><svg:path d="M20 17H4"></svg:path></svg:g>`,
})
export class SolarHamburgerMenuLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandHeartBoldDuotoneIcon],svg[solar-hand-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.83c0 1.547 1.726 3.178 3.15 4.26c.799.606 1.198.91 1.85.91s1.051-.304 1.85-.91C15.274 8.007 17 6.376 17 4.83c0-2.79-2.75-3.833-5-1.677C9.75.997 7 2.039 7 4.829"></svg:path><svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path>`,
})
export class SolarHandHeartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandHeartLineDuotoneIcon],svg[solar-hand-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.15 8.802l-.442.606zM12 3.106l-.508.552a.75.75 0 0 0 1.015 0zm1.85 5.696l.442.606zM12 9.676v.75zm-1.408-1.48c-.69-.503-1.427-1.115-1.983-1.76c-.574-.665-.859-1.254-.859-1.721h-1.5c0 1.017.578 1.954 1.223 2.701c.663.768 1.501 1.457 2.235 1.992zM7.75 4.715c0-1.059.52-1.663 1.146-1.873c.652-.22 1.624-.078 2.596.816l1.015-1.104C11.23 1.38 9.704.988 8.418 1.42C7.105 1.862 6.25 3.096 6.25 4.715zm6.542 4.693c.734-.534 1.572-1.224 2.235-1.992c.645-.747 1.223-1.684 1.223-2.701h-1.5c0 .467-.284 1.056-.859 1.721c-.556.645-1.292 1.257-1.982 1.76zm3.458-4.693c0-1.619-.855-2.853-2.167-3.295c-1.286-.432-2.813-.04-4.09 1.134l1.015 1.104c.972-.894 1.945-1.036 2.597-.816c.625.21 1.145.814 1.145 1.873zM9.708 9.408c.755.55 1.354 1.018 2.292 1.018v-1.5c-.365 0-.565-.115-1.408-.73zm3.7-1.212c-.843.615-1.043.73-1.408.73v1.5c.938 0 1.537-.467 2.292-1.018z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyBoldDuotoneIcon],svg[solar-hand-money-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.586 2.586c-.367.367-.504.873-.555 1.664A2.25 2.25 0 0 0 8.25 2.03c-.79.052-1.297.189-1.664.556m10.828 0c-.367-.367-.873-.504-1.664-.555a2.25 2.25 0 0 0 2.22 2.219c-.052-.79-.189-1.297-.556-1.664m0 6.828c-.367.367-.873.504-1.664.555a2.25 2.25 0 0 1 2.22-2.219c-.052.79-.189 1.297-.556 1.664m-10.828 0c.367.367.873.504 1.664.555A2.25 2.25 0 0 0 6.03 7.75c.052.79.189 1.297.556 1.664"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25zM12 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandMoneyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyLineDuotoneIcon],svg[solar-hand-money-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828Z"></svg:path><svg:path d="M13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandMoneyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandPillsBoldDuotoneIcon],svg[solar-hand-pills-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.36 9.204a2.719 2.719 0 0 0 3.844-3.845l-.724-.723c-.3.605-.803 1.394-1.626 2.218c-.824.823-1.613 1.326-2.218 1.626zm1.28-6.408a2.719 2.719 0 0 0-3.844 3.845l1.086 1.086q.114-.048.245-.11c.523-.253 1.248-.7 2.02-1.47c.77-.772 1.217-1.497 1.47-2.02a6 6 0 0 0 .11-.245z"></svg:path>`,
})
export class SolarHandPillsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandPillsLineDuotoneIcon],svg[solar-hand-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845z"></svg:path><svg:path d="M14 4s-.225 1.168-1.529 2.471S10 8 10 8" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandShakeBoldDuotoneIcon],svg[solar-hand-shake-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.19 3.308c-.213-.367-.837-.59-1.47-.227c-.632.36-.743.997-.533 1.357l2.526 4.331a.75.75 0 0 1-1.296.756L7.049 3.75c-.214-.367-.838-.59-1.471-.227c-.632.36-.743.997-.532 1.357l3.788 6.497a.75.75 0 0 1-1.296.756L5.855 9.245c-.214-.367-.838-.59-1.472-.227c-.631.36-.742.996-.532 1.357l3.789 6.497c1.608 2.759 5.579 3.654 8.946 1.73c3.365-1.923 4.56-5.764 2.955-8.517l-2.525-4.331c-.214-.367-.838-.59-1.472-.228c-.631.361-.742.997-.532 1.358l1.684 2.887a.75.75 0 0 1-.276 1.03c-1.542.88-2.015 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-.912-1.565-.543-3.45.635-4.782c.33-.372.443-.914.192-1.344z"></svg:path><svg:path d="M4.413 17.859a.75.75 0 0 1 1.026.27c.827 1.418 2.091 2.49 3.65 3.186a.75.75 0 0 1-.611 1.37c-1.812-.809-3.332-2.08-4.335-3.8a.75.75 0 0 1 .27-1.026M18.905 3.922c-1.014-1.036-2.46-1.417-3.875-1.015a.75.75 0 1 1-.41-1.442c1.938-.552 3.954-.025 5.357 1.408a.75.75 0 1 1-1.072 1.049" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandShakeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandShakeLineDuotoneIcon],svg[solar-hand-shake-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" opacity=".5"></svg:path><svg:path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z"></svg:path></svg:g>`,
})
export class SolarHandShakeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandStarsBoldDuotoneIcon],svg[solar-hand-stars-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path>`,
})
export class SolarHandStarsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandStarsLineDuotoneIcon],svg[solar-hand-stars-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path><svg:path stroke-linecap="round" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandStarsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHanger2BoldDuotoneIcon],svg[solar-hanger-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18c0-1.886 0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414S15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18"></svg:path><svg:path fill="currentColor" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.112.581-.294.78a11 11 0 0 1-.38.385l-.08.08a9 9 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.3 4.3 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582c.332.866 1.194 1.511 2.306 1.511H6.01c.016-.637.061-1.12.184-1.5h-2.49c-.503 0-.801-.273-.907-.548c-.1-.261-.054-.576.29-.819l7.096-4.99a2.9 2.9 0 0 1 1.628-.513a2.9 2.9 0 0 1 1.655.482l7.433 5.01c.356.241.406.56.308.823c-.103.278-.4.555-.909.555h-2.49c.123.38.168.863.184 1.5h2.306c1.125 0 1.99-.657 2.316-1.533c.33-.891.073-1.948-.877-2.588l-7.433-5.01a4.3 4.3 0 0 0-1.614-.66q.075-.121.205-.274c.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445c.443-.48.69-1.115.69-1.795c0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0" opacity=".5"></svg:path>`,
})
export class SolarHanger2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHanger2LineDuotoneIcon],svg[solar-hanger-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.64 3.64 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6" opacity=".5"></svg:path><svg:path d="M6 18c0-1.886 0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414S15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18Z"></svg:path></svg:g>`,
})
export class SolarHanger2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHangerBoldDuotoneIcon],svg[solar-hanger-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.793 9.88a4.4 4.4 0 0 1 2.51.739l7.433 5.01c.95.64 1.207 1.697.877 2.588c-.325.876-1.191 1.533-2.316 1.533H3.702c-1.112 0-1.974-.645-2.306-1.51c-.338-.88-.1-1.931.828-2.583l7.095-4.991a4.4 4.4 0 0 1 2.473-.786m1.672 1.983a2.9 2.9 0 0 0-1.655-.483a2.9 2.9 0 0 0-1.628.512l-7.095 4.992c-.346.242-.391.557-.29.818c.105.276.403.548.905.548h16.595c.509 0 .806-.277.91-.555c.097-.263.047-.582-.31-.822z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.285 6.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.111.581-.293.78c-.113.122-.238.245-.38.385l-.08.08a9 9 0 0 0-.53.558c-.265.312-.552.724-.658 1.23a4.5 4.5 0 0 1 1.596.016q.075-.12.205-.274a8 8 0 0 1 .441-.464l.074-.072c.141-.14.296-.292.436-.445c.442-.48.69-1.115.69-1.795c0-1.542-1.365-2.659-2.875-2.659S8.785 5.367 8.785 6.91a.75.75 0 1 0 1.5 0" opacity=".5"></svg:path>`,
})
export class SolarHangerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHangerLineDuotoneIcon],svg[solar-hanger-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.881.613 2.75-1.02 2.75H3.703c-1.616 0-2.32-1.835-1.048-2.73l7.096-4.991a3.64 3.64 0 0 1 2.05-.65Z"></svg:path>`,
})
export class SolarHangerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagBoldDuotoneIcon],svg[solar-hashtag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.2 2.277a.75.75 0 0 1 .523.924l-5 18a.75.75 0 0 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522m8.999 0a.75.75 0 0 1 .523.924l-5 18a.75.75 0 1 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522"></svg:path><svg:path d="M3.25 9A.75.75 0 0 1 4 8.25h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9m-2 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagChatBoldDuotoneIcon],svg[solar-hashtag-chat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.814 21.236l-.27.458a.635.635 0 0 1-1.087 0l-.271-.458c-.21-.355-.316-.533-.485-.631s-.381-.102-.806-.11c-.628-.01-1.022-.049-1.352-.185a2.5 2.5 0 0 1-1.353-1.353c-.19-.46-.19-1.042-.19-2.207v-.5c0-1.637 0-2.455.368-3.056a2.5 2.5 0 0 1 .826-.826c.6-.368 1.42-.368 3.056-.368h1.5c1.637 0 2.455 0 3.056.368a2.5 2.5 0 0 1 .826.826c.368.6.368 1.42.368 3.056v.5c0 1.165 0 1.747-.19 2.207a2.5 2.5 0 0 1-1.353 1.353c-.33.137-.724.175-1.352.186c-.425.007-.638.01-.806.109c-.17.098-.274.276-.485.631"></svg:path><svg:path fill="currentColor" d="M10.2 2.277a.75.75 0 0 1 .523.924L9.32 8.25h7.443l1.514-5.45a.75.75 0 1 1 1.446.4L18.32 8.25H22a.75.75 0 0 1 0 1.5h-4.097L17.278 12h-1.556l.625-2.25H8.903l-1.527 5.5h4.628q-.005.44-.004 1v.5H6.959L5.723 21.2a.75.75 0 0 1-1.446-.4l1.125-4.05H2a.75.75 0 1 1 0-1.5h3.819l1.528-5.5H4a.75.75 0 0 1 0-1.5h3.763L9.277 2.8a.75.75 0 0 1 .924-.523m3.227 17.981l-.15.541a.75.75 0 0 0 1.445.402l.195-.705h-.023c-.628-.011-1.022-.05-1.352-.186z" opacity=".5"></svg:path>`,
})
export class SolarHashtagChatBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagChatLineDuotoneIcon],svg[solar-hashtag-chat-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17.543 21.694l-.645-.382zm.271-.458l.646.382zm-1.628 0l-.646.382zm.27.458l.646-.382zm-4.266-2.737l.693-.287zm2.705 1.539l-.013.75zm-1.352-.186l-.287.693zm8.267-1.353l.693.287zm-2.705 1.539l-.013-.75zm1.352-.186l.287.693zm.35-7.942l-.393.64zm.825.826l.64-.392zm-8.438-.826l-.392-.64zm-.826.826l-.64-.392zm3.333 7.411l.377-.648zm2.488 1.47l.27-.457l-1.29-.764l-.271.458zm-2.649-.457l.271.458l1.291-.764l-.271-.458zm1.358-.306A.13.13 0 0 1 17 21.25c.027 0 .075.016.102.062l-1.29.764c.531.899 1.845.899 2.377 0zm-.648-8.562h1.5v-1.5h-1.5zm5 3.5v.5h1.5v-.5zm-8.5.5v-.5h-1.5v.5zm-1.5 0c0 .572 0 1.039.025 1.419c.027.387.083.738.222 1.075l1.386-.574c-.05-.123-.09-.293-.111-.603a22 22 0 0 1-.022-1.317zm3.658 2.996c-.628-.01-.892-.052-1.078-.13l-.574 1.387c.475.196.998.232 1.626.243zm-3.41-.502a3.25 3.25 0 0 0 1.758 1.759l.574-1.386a1.75 1.75 0 0 1-.947-.947zm9.752-2.494c0 .593 0 1-.022 1.317c-.021.31-.06.48-.111.603l1.386.574c.139-.337.195-.688.221-1.075c.026-.38.026-.847.026-1.419zm-2.132 4.496c.628-.011 1.15-.047 1.626-.243l-.574-1.386c-.186.077-.45.118-1.078.129zm1.999-2.576a1.75 1.75 0 0 1-.947.947l.574 1.386a3.25 3.25 0 0 0 1.759-1.76zm-3.367-5.92c.833 0 1.405 0 1.846.043c.429.04.655.115.818.215l.784-1.28c-.438-.268-.921-.377-1.46-.429c-.529-.05-1.184-.049-1.988-.049zm5 3.5c0-.804 0-1.46-.05-1.987c-.05-.54-.16-1.023-.429-1.461l-1.279.784c.1.163.174.39.215.819c.042.44.043 1.012.043 1.845zm-2.336-3.242c.236.144.434.342.578.578l1.28-.784a3.25 3.25 0 0 0-1.074-1.073zM16.25 11.25c-.804 0-1.46 0-1.987.05c-.54.05-1.023.16-1.461.429l.784 1.279c.163-.1.39-.174.819-.215c.44-.042 1.012-.043 1.845-.043zm-3.5 5c0-.833 0-1.405.043-1.845c.04-.43.115-.656.215-.82l-1.28-.783c-.268.438-.377.921-.429 1.46c-.05.529-.049 1.184-.049 1.988zm.052-4.521a3.25 3.25 0 0 0-1.073 1.073l1.279.784c.144-.236.342-.434.578-.578zm4.029 9.125c-.098-.165-.197-.335-.297-.472a1.5 1.5 0 0 0-.456-.425l-.754 1.296c-.037-.021-.04-.04-.002.013c.048.065.106.162.218.352zm-1.95.392c.227.004.346.006.43.016c.071.008.053.014.013-.009l.754-1.296a1.5 1.5 0 0 0-.601-.186c-.17-.019-.37-.022-.57-.025zm3.579.372c.112-.19.17-.287.218-.352c.039-.053.035-.034-.002-.013l-.754-1.296c-.206.12-.347.276-.456.425c-.1.137-.2.306-.297.472zm.632-1.872c-.198.003-.399.006-.569.025c-.184.02-.393.064-.601.186l.754 1.296c-.04.023-.058.017.012.009c.085-.01.204-.012.43-.016z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L5 21M19 3l-1.806 6.5M22 9H4m5 7H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagChatLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagCircleBoldDuotoneIcon],svg[solar-hashtag-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434zm2.374 3.535l-.75 2.5H9.908l.75-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagCircleLineDuotoneIcon],svg[solar-hashtag-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagLineDuotoneIcon],svg[solar-hashtag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 3L5 21M19 3l-5 18"></svg:path><svg:path d="M22 9H4m16 7H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagSquareBoldDuotoneIcon],svg[solar-hashtag-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434zm2.374 3.535l-.75 2.5H9.908l.75-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagSquareLineDuotoneIcon],svg[solar-hashtag-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundBoldDuotoneIcon],svg[solar-headphones-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.793a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.5 0V17h-1v-5a8.25 8.25 0 0 0-16.5 0v5h-1v.5a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1-.707z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 14.05c0-.85 0-1.274-.21-1.57a1.2 1.2 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053c-1.48.134-2.218.202-2.748.571a2.35 2.35 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673c.127.205.286.39.471.547c.495.423 1.217.555 2.662.818c1.016.186 1.525.279 1.9.083q.209-.11.36-.287C8 21.285 8 20.786 8 19.789zm8 0c0-.85 0-1.274.21-1.57c.105-.148.245-.271.409-.358c.325-.174.763-.134 1.64-.053c1.48.134 2.218.202 2.748.571c.268.188.493.426.661.7c.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673c-.127.205-.286.39-.471.547c-.495.423-1.217.555-2.662.818c-1.016.186-1.525.279-1.9.083a1.2 1.2 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789z"></svg:path>`,
})
export class SolarHeadphonesRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundLineDuotoneIcon],svg[solar-headphones-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17v-5a9 9 0 1 0-18 0v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 15.5v2m-20-2v2" opacity=".5"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundSoundBoldDuotoneIcon],svg[solar-headphones-round-sound-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.124C2 6.533 6.477 2 12 2s10 4.533 10 10.124v5.243c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.458.22-1.004.307-1.801.434l-.13.02a13 13 0 0 1-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-4.811-3.853-8.711-8.605-8.711s-8.605 3.9-8.605 8.711v1.174c.267-.203.563-.368.883-.487c.455-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.444-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188c-.118-.405-.139-.857-.142-1.461L2 17.58z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarHeadphonesRoundSoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundSoundLineDuotoneIcon],svg[solar-headphones-round-sound-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 17v-5c0-5.523-4.477-10-10-10S2 6.477 2 12v6" opacity=".5"></svg:path><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundSoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareBoldDuotoneIcon],svg[solar-headphones-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v2.838a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.309.5H20.25v-6c0-1.892-.001-3.25-.115-4.302c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115s-3.25.001-4.302.115c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C3.751 8.75 3.75 10.108 3.75 12v6H2.559a.75.75 0 0 1-1.309-.5v-2a.75.75 0 0 1 1-.707v-2.838c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 14.05c0-.85 0-1.274-.21-1.57a1.2 1.2 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053c-1.48.134-2.218.202-2.748.571a2.35 2.35 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673c.127.205.286.39.471.547c.495.423 1.217.555 2.662.818c1.016.186 1.525.279 1.9.083q.209-.11.36-.287C8 21.285 8 20.786 8 19.789zm8 0c0-.85 0-1.274.21-1.57c.105-.148.245-.271.409-.358c.325-.174.763-.134 1.64-.053c1.48.134 2.218.202 2.748.571c.268.188.493.426.661.7c.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673c-.127.205-.286.39-.471.547c-.495.423-1.217.555-2.662.818c-1.016.186-1.525.279-1.9.083a1.2 1.2 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789z"></svg:path>`,
})
export class SolarHeadphonesSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareLineDuotoneIcon],svg[solar-headphones-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12v6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 15.5v2m-20-2v2" opacity=".5"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareSoundBoldDuotoneIcon],svg[solar-headphones-square-sound-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.053 2c2.148 0 3.83 0 5.143.179c1.345.183 2.405.564 3.237 1.407s1.21 1.916 1.39 3.277C22 8.193 22 9.896 22 12.07v5.297c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.457.22-1.004.307-1.801.434l-.13.02c-.284.046-.526.085-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-2.24-.002-3.848-.165-5.073c-.16-1.204-.463-1.93-.993-2.466S18.2 3.741 17.01 3.579c-1.21-.165-2.799-.166-5.011-.166s-3.801.001-5.01.166c-1.19.162-1.907.47-2.437 1.006S3.72 5.847 3.56 7.051c-.162 1.225-.164 2.833-.164 5.073v1.174c.267-.203.563-.368.883-.487c.456-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.443-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188C2 18.745 2 18.184 2 17.367V12.07c0-2.174 0-3.878.177-5.207c.18-1.36.557-2.434 1.39-3.277S5.46 2.362 6.803 2.18C8.116 2 9.8 2 11.947 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarHeadphonesSquareSoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareSoundLineDuotoneIcon],svg[solar-headphones-square-sound-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path d="M22 17v-5c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareSoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHealthBoldDuotoneIcon],svg[solar-health-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.318c0 3.729 4.02 7.673 6.962 10.06C10.294 20.46 10.96 21 12 21s1.706-.54 3.038-1.621C17.981 16.99 22 13.047 22 9.317c0-6.23-5.5-8.556-10-3.743C7.5.761 2 3.087 2 9.318" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 6.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V11a.75.75 0 0 1-1.5 0V9.75H14.5a.75.75 0 0 1 0-1.5h1.25V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHealthBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHealthLineDuotoneIcon],svg[solar-health-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.962 19.379l-.473.582zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-2.566-2.204c-1.45-1.176-3.142-2.719-4.466-4.408c-1.339-1.707-2.218-3.46-2.218-5.07h-1.5c0 2.117 1.13 4.202 2.537 5.996c1.422 1.813 3.21 3.436 4.702 4.647zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"></svg:path></svg:g>`,
})
export class SolarHealthLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartAngleBoldDuotoneIcon],svg[solar-heart-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9.137c0 4.405 3.298 6.946 6.106 9.11q.44.337.856.664C10 19.729 11 20.5 12 20.5v-15C7.5.826 2 4.275 2 9.138" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m14 7.5l-2-2v15c1 0 2-.77 3.038-1.59q.417-.326.856-.663C18.702 16.083 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63l1.931 1.931A.75.75 0 0 1 14 7.5"></svg:path>`,
})
export class SolarHeartAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartAngleLineDuotoneIcon],svg[solar-heart-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 5.501l2 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"></svg:path></svg:g>`,
})
export class SolarHeartAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBoldDuotoneIcon],svg[solar-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501V20.5c1 0 2-.77 3.038-1.59"></svg:path>`,
})
export class SolarHeartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenBoldDuotoneIcon],svg[solar-heart-broken-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c1 0 2-.77 3.038-1.59"></svg:path><svg:path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" opacity=".5"></svg:path>`,
})
export class SolarHeartBrokenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenLineDuotoneIcon],svg[solar-heart-broken-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"></svg:path><svg:path d="m12 5.5l-1.5 3L14 11l-3 3.5l2 2l-1 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartBrokenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLineDuotoneIcon],svg[solar-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 5.5C7.5.826 2 4.275 2 9.138s4.02 7.454 6.962 9.774C10 19.729 11 20.5 12 20.5"></svg:path><svg:path d="M12 5.5C16.5.826 22 4.275 22 9.138s-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLockBoldDuotoneIcon],svg[solar-heart-lock-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168c4.05-4.074 9-1.069 9 3.168c0 3.839-2.968 6.053-5.496 7.938q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385q-.376-.285-.77-.578" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75M7.75 7c0-1.505.447-2.539 1.139-3.2c.697-.668 1.74-1.05 3.111-1.05c1.37 0 2.414.382 3.111 1.05c.692.661 1.139 1.695 1.139 3.2v.001a4.6 4.6 0 0 1 1.5.288V7c0-1.809-.546-3.275-1.602-4.285C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465C6.796 3.725 6.25 5.191 6.25 7v.29A4.6 4.6 0 0 1 7.75 7"></svg:path>`,
})
export class SolarHeartLockBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLockLineDuotoneIcon],svg[solar-heart-lock-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7m5 5v2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338c-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596c1.294 1.411 2.945 2.54 4.224 3.517zM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016z"></svg:path></svg:g>`,
})
export class SolarHeartLockLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulse2BoldDuotoneIcon],svg[solar-heart-pulse-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.346 11.25A6.3 6.3 0 0 1 2 9.26C2 3.35 7.5.663 12 5.5C16.5.663 22 3.349 22 9.26a6.3 6.3 0 0 1-.346 1.99h-3.13c-.546 0-1.03-.002-1.471.195c-.441.196-.765.557-1.13.963l-.075.084l-1.029 1.143a.25.25 0 0 1-.379-.007l-3.55-4.305c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353a1.24 1.24 0 0 0-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.567c-.103.042-.228.054-.879.054z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.654 11.25h-3.13c-.546-.001-1.03-.002-1.472.194c-.44.197-.764.558-1.129.964l-.075.084l-1.029 1.143a.25.25 0 0 1-.38-.008l-3.55-4.304c-.14-.17-.29-.35-.435-.485a1.24 1.24 0 0 0-.773-.354a1.24 1.24 0 0 0-.81.26c-.161.115-.331.277-.49.428l-1.53 1.457c-.471.45-.57.526-.673.567s-.227.054-.878.054H2.346c1.036 3.105 4.191 6.144 6.615 8.12C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63c2.424-1.976 5.58-5.015 6.616-8.12"></svg:path>`,
})
export class SolarHeartPulse2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulse2LineDuotoneIcon],svg[solar-heart-pulse-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12h-2.364c-.658 0-.987 0-1.278.13s-.512.374-.952.863l-1.03 1.144c-.36.401-.541.602-.77.597c-.23-.005-.401-.213-.744-.63l-3.529-4.276c-.32-.388-.48-.582-.697-.595s-.4.16-.764.507L7.37 11.172c-.43.409-.644.613-.912.72C6.19 12 5.893 12 5.3 12H3"></svg:path><svg:path fill="currentColor" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartPulse2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulseBoldDuotoneIcon],svg[solar-heart-pulse-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26C22 3.35 16.5.663 12 5.5C7.5.663 2 3.349 2 9.26" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.093 10.747q.133-.191.23-.325c.056.097.119.21.194.348l1.71 3.109c.166.302.33.598.493.813c.175.23.482.546.975.555s.813-.294.996-.518c.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.764c.113-.154.179-.204.228-.231s.125-.058.315-.077c.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027a2.2 2.2 0 0 0-.91.264a2.2 2.2 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377l-1.709-3.108c-.154-.28-.307-.56-.463-.764c-.17-.224-.462-.52-.93-.545c-.467-.025-.789.237-.982.442c-.177.186-.36.448-.543.71l-.31.442c-.227.324-.37.526-.493.672a.8.8 0 0 1-.223.203c-.046.024-.118.05-.293.066c-.19.018-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024c.29-.026.571-.085.85-.23c.28-.145.489-.343.676-.564c.173-.205.354-.464.559-.757z"></svg:path>`,
})
export class SolarHeartPulseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulseLineDuotoneIcon],svg[solar-heart-pulse-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 12h-.801c-.83 0-1.245 0-1.589.195c-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989s-.476-.344-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963c-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11c-.326.17-.709.17-1.474.17H6"></svg:path><svg:path fill="currentColor" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartPulseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartShineBoldDuotoneIcon],svg[solar-heart-shine-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill="currentColor" d="M5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06m13.06 0a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0M6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0m10.254 0a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11c.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11s-2.75-4.346-5-1.902c-2.25-2.444-5-.64-5 1.902"></svg:path>`,
})
export class SolarHeartShineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartShineLineDuotoneIcon],svg[solar-heart-shine-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l.343-.343M17.657 6.343L18 6m0 12l-.343-.343M6.343 6.343L6 6"></svg:path><svg:path fill="currentColor" d="m10.785 15.354l.469-.585zM12 9.9l-.545.516a.75.75 0 0 0 1.09 0zm1.215 5.453l.47.585zm-1.961-.585c-.633-.507-1.246-.945-1.738-1.508c-.466-.533-.766-1.123-.766-1.881h-1.5c0 1.218.504 2.144 1.136 2.868c.607.694 1.385 1.255 1.93 1.691zm-2.504-3.39c0-.714.397-1.283.891-1.513c.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88c-1.056.49-1.759 1.611-1.759 2.874zm1.566 4.56c.2.16.444.356.7.508c.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a5 5 0 0 1-.527-.388zm3.368 0c.545-.436 1.323-.997 1.93-1.691c.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881c-.492.563-1.105 1-1.738 1.508zm3.066-4.56c0-1.262-.703-2.383-1.759-2.873c-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55c.494.23.891.799.891 1.514zm-4.004 3.39c-.214.172-.378.3-.527.388s-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303c.255-.152.499-.347.7-.508z"></svg:path></svg:g>`,
})
export class SolarHeartShineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartUnlockBoldDuotoneIcon],svg[solar-heart-unlock-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.501 7.014c.164-.997.554-1.74 1.093-2.27c.739-.726 1.85-1.144 3.302-1.144c1.833 0 3.119.661 3.816 1.791c.224.362.665.451.985.198c.32-.252.4-.751.176-1.114C15.82 2.772 14.009 2 11.896 2c-1.674 0-3.157.481-4.23 1.538c-.945.929-1.504 2.234-1.636 3.839c.46-.197.955-.323 1.471-.363"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168c4.05-4.074 9-1.069 9 3.168c0 3.839-2.968 6.053-5.496 7.938q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385q-.376-.285-.77-.578" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarHeartUnlockBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartUnlockLineDuotoneIcon],svg[solar-heart-unlock-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 7c0-3.314 1.937-5 4.872-5c1.852 0 3.307.672 4.128 2m-4 8v2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338c-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596c1.294 1.411 2.945 2.54 4.224 3.517zM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016z"></svg:path></svg:g>`,
})
export class SolarHeartUnlockLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartsBoldDuotoneIcon],svg[solar-hearts-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112c0 2.56 1.814 4.035 3.358 5.292l.044.036l.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38c-1.075-1.251-2.985-1.556-4.647.268"></svg:path>`,
})
export class SolarHeartsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartsLineDuotoneIcon],svg[solar-hearts-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.829 20.17l.45-.601zm1.671-7.012l-.527.534a.75.75 0 0 0 1.054 0zm1.671 7.011l-.45-.6zm2.976-7.251l.543-.518zm-6.745 6.936l-.443.605zM11.75 15.06c0-.97.576-1.788 1.37-2.133c.757-.329 1.81-.264 2.853.765l1.054-1.067c-1.433-1.415-3.13-1.671-4.504-1.074a3.82 3.82 0 0 0-2.273 3.508zm2.63 5.71c.278.208.598.448.928.63c.33.184.736.35 1.192.35v-1.5c-.094 0-.238-.036-.463-.16a7 7 0 0 1-.758-.521zm4.24 0c.765-.573 1.806-1.273 2.62-2.145c.84-.899 1.51-2.047 1.51-3.565h-1.5c0 1.024-.436 1.824-1.106 2.541c-.695.745-1.568 1.328-2.423 1.968zm-.899-1.201a7 7 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35c.33-.182.65-.422.929-.63zm5.029-4.51a3.84 3.84 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.624zm-1.06-2.66a3.68 3.68 0 0 0-2.643-1.149c-1.044-.005-2.121.434-3.074 1.375l1.054 1.067c.71-.7 1.418-.945 2.013-.942c.603.003 1.159.26 1.565.685zm-6.411 7.17l-.434-.32l-.886 1.21l.42.31zm-.434-.32c-1.626-1.191-3.095-2.307-3.095-4.19h-1.5c0 2.767 2.227 4.315 3.709 5.4z"></svg:path><svg:path fill="currentColor" d="m8.962 19.338l.477-.578zM12 5.317l-.552.508a.75.75 0 0 0 1.104 0zM9.439 18.76C6.385 16.242 2.75 13.773 2.75 9.119h-1.5c0 5.516 4.404 8.465 7.235 10.798zM2.75 9.119c0-2.28 1.232-4.174 2.886-4.964c1.596-.763 3.75-.57 5.812 1.67l1.104-1.016C10.114 2.16 7.268 1.712 4.989 2.8C2.768 3.863 1.25 6.314 1.25 9.12zm5.735 10.798c.512.422 1.062.872 1.62 1.213c.556.34 1.196.62 1.895.62v-1.5c-.301 0-.66-.123-1.114-.4c-.452-.276-.921-.657-1.447-1.09zM22.75 9.12c0-2.805-1.518-5.256-3.74-6.318c-2.278-1.089-5.124-.64-7.562 2.008l1.104 1.016c2.062-2.24 4.216-2.433 5.812-1.67c1.654.79 2.886 2.684 2.886 4.964zm-.926 4.122a9.4 9.4 0 0 0 .926-4.122h-1.5a7.9 7.9 0 0 1-.78 3.475zm-7.885 6.023c-.827.648-1.433.986-1.939.986v1.5c1.083 0 2.065-.679 2.865-1.306z" opacity=".5"></svg:path>`,
})
export class SolarHeartsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHelpBoldDuotoneIcon],svg[solar-help-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m5.479 19.582l4.272-4.273a4 4 0 0 1-1.06-1.06L4.418 18.52q.491.57 1.06 1.06m-1.06-14.1l4.273 4.272a4 4 0 0 1 1.06-1.06L5.48 4.417q-.57.492-1.061 1.061m9.829 3.213L18.52 4.42q.57.49 1.06 1.06l-4.27 4.272a4 4 0 0 0-1.061-1.06m5.332 9.829l-4.273-4.273a4 4 0 0 1-1.06 1.06l4.272 4.274q.571-.491 1.061-1.061"></svg:path>`,
})
export class SolarHelpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHelpLineDuotoneIcon],svg[solar-help-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15 9l4-4M5 19l4-4m0-6L5 5m14 14l-4-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHelpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighDefinitionBoldDuotoneIcon],svg[solar-high-definition-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.5 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.685 7.25c-.81 0-1.713.57-1.713 1.55v6.4c0 .98.903 1.55 1.713 1.55c2.937 0 5.565-2.002 5.565-4.75s-2.628-4.75-5.565-4.75m-.202 1.561l-.01.01v6.358l.01.01a.32.32 0 0 0 .202.061c2.381 0 4.065-1.58 4.065-3.25s-1.684-3.25-4.065-3.25c-.1 0-.169.034-.202.061" clip-rule="evenodd"></svg:path>`,
})
export class SolarHighDefinitionBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighDefinitionLineDuotoneIcon],svg[solar-high-definition-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.315-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.907-.8V8.8h-1.5v6.4zm.213.05a.32.32 0 0 1-.202-.061c-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.32.32 0 0 1 .202-.061zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.815-4v4h1.5V8zm0 4v4h1.5v-4zm-4.065.75h4.815v-1.5H5.5z"></svg:path></svg:g>`,
})
export class SolarHighDefinitionLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighQualityBoldDuotoneIcon],svg[solar-high-quality-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 0 1 1.5 0v7.62a.75.75 0 0 1-1.5 0v-2.87H6.75v2.87a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.111 7.25h-.064c-.385 0-.664 0-.91.038c-.972.153-1.879.782-2.124 1.756c-.06.24-.06.508-.06.792v3.947c0 .284 0 .552.06.792c.245.975 1.152 1.603 2.124 1.756c.246.038.525.038.91.038h.128c.385 0 .665 0 .91-.038c.28-.044.555-.128.81-.248l.64.505a.75.75 0 0 0 .93-1.176l-.445-.353q.124-.225.189-.484c.06-.24.06-.508.06-.792V9.836c0-.284 0-.552-.06-.792c-.245-.974-1.151-1.603-2.124-1.756c-.245-.038-.525-.038-.91-.038zm1.428 6.638l.227.179c.002-.072.003-.18.003-.353v-3.81c0-.398-.006-.46-.015-.495c-.059-.234-.347-.551-.902-.639c-.114-.018-.265-.02-.74-.02c-.477 0-.628.002-.741.02c-.556.088-.844.405-.903.64c-.009.034-.014.096-.014.495v3.81c0 .398.005.46.014.495c.06.234.347.551.902.639c.114.018.265.02.741.02h.323a.75.75 0 0 1 1.105-.981" clip-rule="evenodd"></svg:path>`,
})
export class SolarHighQualityBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighQualityLineDuotoneIcon],svg[solar-high-quality-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03c-.764-.12-1.361-.592-1.513-1.197c-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677c.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03c.764.12 1.361.592 1.514 1.197c.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678c-.152.604-.75 1.076-1.514 1.197c-.186.029-.41.029-.857.029Z"></svg:path></svg:g>`,
})
export class SolarHighQualityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
