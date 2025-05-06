import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleBrokenIcon],svg[solar-clock-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarClockCircleBrokenIcon {
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
  selector: 'svg[solarClockCircleLinearIcon],svg[solar-clock-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path></svg:g>`,
})
export class SolarClockCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleOutlineIcon],svg[solar-clock-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClockCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockSquareBoldIcon],svg[solar-clock-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarClockSquareBold0"><svg:g fill="none"><svg:path fill="#fff" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarClockSquareBold0)"></svg:path>`,
})
export class SolarClockSquareBoldIcon {
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
  selector: 'svg[solarClockSquareBrokenIcon],svg[solar-clock-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarClockSquareBrokenIcon {
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
  selector: 'svg[solarClockSquareLinearIcon],svg[solar-clock-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarClockSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockSquareOutlineIcon],svg[solar-clock-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.134-2.134c-.29-.289-.434-.433-.51-.617s-.076-.388-.076-.797V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClockSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleBoldIcon],svg[solar-close-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloseCircleBoldIcon {
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
  selector: 'svg[solarCloseCircleBrokenIcon],svg[solar-close-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 9.5l-5 5m0-5l5 5M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarCloseCircleBrokenIcon {
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
  selector: 'svg[solarCloseCircleLinearIcon],svg[solar-close-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarCloseCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleOutlineIcon],svg[solar-close-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloseCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseSquareBoldIcon],svg[solar-close-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloseSquareBoldIcon {
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
  selector: 'svg[solarCloseSquareBrokenIcon],svg[solar-close-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 9.5l-5 5m0-5l5 5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarCloseSquareBrokenIcon {
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
  selector: 'svg[solarCloseSquareLinearIcon],svg[solar-close-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarCloseSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseSquareOutlineIcon],svg[solar-close-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloseSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloset2BoldIcon],svg[solar-closet-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2H10C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h1.25zM9 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25M12.75 20H14c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697C22 17.657 22 15.771 22 12v-2c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-1.25zM15 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloset2BoldIcon {
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
  selector: 'svg[solarCloset2BrokenIcon],svg[solar-closet-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5m7-.5v-2m0-16v12m3-5v4M9 9v4m13-3c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828"></svg:path>`,
})
export class SolarCloset2BrokenIcon {
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
  selector: 'svg[solarCloset2LinearIcon],svg[solar-closet-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5m7-.5V2m3 7v4M9 9v4"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path></svg:g>`,
})
export class SolarCloset2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloset2OutlineIcon],svg[solar-closet-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m2.806 18H14c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-1.25zm-1.5-16.5v16.5H10c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289v-2c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14zM9 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25m6 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloset2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClosetBoldIcon],svg[solar-closet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2H10C6.229 2 4.343 2 3.172 3.172c-.844.843-1.08 2.057-1.146 4.078h9.224zM2.002 8.75Q2 9.337 2 10v3q0 .662.002 1.25h9.248v-5.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 19.828c-.844-.843-1.08-2.057-1.146-4.078h9.224V21H10c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m6.5 3H14c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-1.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078H12.75zM15 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM22 13q0 .662-.002 1.25H12.75V2H14c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10zm-7-5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClosetBoldIcon {
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
  selector: 'svg[solarClosetBrokenIcon],svg[solar-closet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-.5M5 22v-.5m7-.5v-7m0-12v8m3-2v2m7 1v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-3c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.809.808 1.06 1.956 1.137 3.828M2 8h10M2 15h20m-7 3h2M7 18h2"></svg:path>`,
})
export class SolarClosetBrokenIcon {
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
  selector: 'svg[solarClosetLinearIcon],svg[solar-closet-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-.5M5 22v-.5m7-.5V2m3 6v2"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v3c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M2 8h10M2 15h20m-7 3h2M7 18h2"></svg:path></svg:g>`,
})
export class SolarClosetLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClosetOutlineIcon],svg[solar-closet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v3.112q.002.992-.007 1.84a.8.8 0 0 1-.003.23c-.016.907-.053 1.69-.143 2.363c-.158 1.172-.49 2.121-1.238 2.87c-.464.464-1.005.768-1.629.97q.02.082.02.171v.5a.75.75 0 0 1-1.5 0v-.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97c-.748-.748-1.08-1.697-1.238-2.869c-.09-.673-.127-1.456-.143-2.363a.8.8 0 0 1-.003-.23q-.009-.848-.007-1.84V9.944q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5Q2.75 9.332 2.75 10v3q0 .668.002 1.25h8.498v-5.5zm8.498-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h1.25zm1.5 7h8.498q.002-.582.002-1.25v-3c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-1.25zm8.474 1.5H12.75v4.5H14c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.06-.445.094-.952.114-1.539m-9.974 4.5v-4.5H2.776c.02.587.054 1.094.114 1.54c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14zm3.75-13a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClosetOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoldIcon],svg[solar-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20z"></svg:path>`,
})
export class SolarCloudBoldIcon {
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
  selector: 'svg[solarCloudBoltBoldIcon],svg[solar-cloud-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.626 17.465l1.148-1.555c.743-1.005 1.114-1.508 1.46-1.401s.346.722.346 1.955v.116c0 .445 0 .667.142.806l.008.008c.145.136.376.136.838.136c.832 0 1.249 0 1.39.252l.006.013c.133.257-.108.583-.59 1.235l-1.148 1.555c-.743 1.005-1.114 1.507-1.46 1.401s-.346-.723-.346-1.955v-.116c0-.445 0-.667-.142-.806l-.008-.008c-.145-.136-.376-.136-.838-.136c-.832 0-1.248 0-1.39-.253l-.006-.012c-.133-.257.108-.583.59-1.235"></svg:path><svg:path fill="currentColor" d="M7.578 18.011c.059-.207.14-.375.199-.486c.157-.296.398-.622.6-.896l1.241-1.68c.327-.442.656-.887.954-1.197c.218-.227.997-1.018 2.102-.679c1.138.35 1.308 1.48 1.35 1.79c.044.334.054.745.056 1.169a6 6 0 0 1 .65.043c.334.047 1.107.203 1.537.977l.029.053c.165.319.215.627.204.902c3.057-.111 5.5-2.597 5.5-5.647c0-2.473-1.607-4.576-3.845-5.342C17.837 4.195 15.415 2 12.476 2C9.32 2 6.762 4.53 6.762 7.651c0 .69.125 1.352.354 1.963a4.4 4.4 0 0 0-.83-.08C3.919 9.535 2 11.433 2 13.774c0 2.34 1.919 4.238 4.286 4.238z"></svg:path>`,
})
export class SolarCloudBoltBoldIcon {
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
  selector: 'svg[solarCloudBoltBrokenIcon],svg[solar-cloud-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path d="m9.626 17.453l1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4s.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137c.832 0 1.249 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4c-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137c-.832 0-1.248 0-1.39-.252l-.006-.013c-.133-.256.108-.582.59-1.234Z"></svg:path></svg:g>`,
})
export class SolarCloudBoltBrokenIcon {
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
  selector: 'svg[solarCloudBoltLinearIcon],svg[solar-cloud-bolt-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path d="m9.626 17.453l1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4s.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137c.832 0 1.249 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4c-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137c-.832 0-1.248 0-1.39-.252l-.006-.013c-.133-.256.108-.582.59-1.234Z"></svg:path></svg:g>`,
})
export class SolarCloudBoltLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltMinimalisticBoldIcon],svg[solar-cloud-bolt-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m.916-5.75a.667.667 0 0 0-.943-.944L9.751 17.53a.667.667 0 0 0 .471 1.138h1.946l-1.084 1.084a.667.667 0 1 0 .943.943l2.222-2.223a.667.667 0 0 0-.471-1.138h-1.946z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 17.91V18h-.214C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52c0-.852-.001-1.631-.087-2.267c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.646-.086-1.44-.086-2.306-.086h-.179c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.619.618-.844 1.37-.94 2.08c-.086.646-.086 1.44-.086 2.305"></svg:path>`,
})
export class SolarCloudBoltMinimalisticBoldIcon {
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
  selector: 'svg[solarCloudBoltMinimalisticBrokenIcon],svg[solar-cloud-bolt-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path stroke-linejoin="round" d="m10 22l4.286-3.692H10l4.286-3.693"></svg:path></svg:g>`,
})
export class SolarCloudBoltMinimalisticBrokenIcon {
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
  selector: 'svg[solarCloudBoltMinimalisticLinearIcon],svg[solar-cloud-bolt-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path stroke-linejoin="round" d="m10 22l4.286-3.692H10l4.286-3.693"></svg:path></svg:g>`,
})
export class SolarCloudBoltMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltMinimalisticOutlineIcon],svg[solar-cloud-bolt-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m2.378 11.376a.75.75 0 0 1-.079 1.057l-2.755 2.375h2.266a.75.75 0 0 1 .49 1.318l-4.286 3.692a.75.75 0 0 1-.98-1.136l2.756-2.374H10a.75.75 0 0 1-.49-1.318l4.286-3.693a.75.75 0 0 1 1.058.079" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudBoltMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltOutlineIcon],svg[solar-cloud-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264"></svg:path><svg:path d="M12.454 13.783c-.64-.196-1.118.249-1.342.48l-.91 1.149l-.03.042l-1.15 1.554l-.028.04l-.555.819c-.135.252-.312.696-.069 1.166l.018.033c.25.45.706.559.986.598c.278.039.635.039 1.01.039h.285v.37c0 .569 0 1.073.05 1.444c.043.316.172.971.827 1.172c.64.196 1.118-.249 1.342-.48c.263-.274.565-.683.91-1.149l1.18-1.596l.028-.04l.04-.054c.202-.272.393-.535.515-.765c.135-.252.312-.696.069-1.166l-.018-.033c-.25-.45-.706-.559-.986-.598c-.278-.039-.635-.039-1.01-.039h-.285v-.37c0-.569 0-1.073-.05-1.444c-.043-.316-.172-.971-.827-1.172m-.627 1.962a45 45 0 0 0-.45.601L10.23 17.9l-.221.301q.175.002.424.002h.033c.202 0 .418 0 .6.023c.21.027.484.096.72.317l.005.005l.013.013c.235.23.312.506.342.721c.025.181.025.395.025.586v.15c0 .28 0 .513.003.709c.126-.163.273-.362.45-.601l1.148-1.554q.126-.169.221-.301l-.424-.002h-.033c-.202 0-.418 0-.6-.023a1.25 1.25 0 0 1-.72-.317l-.005-.005l-.013-.013a1.2 1.2 0 0 1-.342-.721a5 5 0 0 1-.025-.586v-.15c0-.28 0-.513-.003-.709"></svg:path></svg:g>`,
})
export class SolarCloudBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBrokenIcon],svg[solar-cloud-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14.353C22 17.472 19.442 20 16.286 20H11m3.381-10.973a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20H7m.116-8.391a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 10.061"></svg:path>`,
})
export class SolarCloudBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCheckBoldIcon],svg[solar-cloud-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m2.25-4.862a.667.667 0 0 0-.944-.943l-2.195 2.195l-.417-.417a.667.667 0 0 0-.943.943l.889.889c.26.26.682.26.942 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudCheckBoldIcon {
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
  selector: 'svg[solarCloudCheckBrokenIcon],svg[solar-cloud-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061"></svg:path><svg:path stroke-linejoin="round" d="m10 19.8l1.143 1.2L14 18"></svg:path></svg:g>`,
})
export class SolarCloudCheckBrokenIcon {
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
  selector: 'svg[solarCloudCheckLinearIcon],svg[solar-cloud-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path stroke-linejoin="round" d="m10 19.8l1.143 1.2L14 18"></svg:path></svg:g>`,
})
export class SolarCloudCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCheckOutlineIcon],svg[solar-cloud-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m2.041 13.707c.3.286.312.76.026 1.06l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCrossBoldIcon],svg[solar-cloud-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.306-6.25a.667.667 0 0 0-.943.944L11.057 18l-1.306 1.306a.667.667 0 0 0 .943.943L12 18.943l1.306 1.306a.667.667 0 0 0 .943-.943L12.943 18l1.306-1.306a.667.667 0 0 0-.943-.943L12 17.057z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudCrossBoldIcon {
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
  selector: 'svg[solarCloudCrossBrokenIcon],svg[solar-cloud-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M13.5 17.5L12 19m0 0l-1.5 1.5M12 19l-1.5-1.5M12 19l1.5 1.5"></svg:path>`,
})
export class SolarCloudCrossBrokenIcon {
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
  selector: 'svg[solarCloudCrossLinearIcon],svg[solar-cloud-cross-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52m-4-1.373L12 19m0 0l-1.5 1.5M12 19l-1.5-1.5M12 19l1.5 1.5"></svg:path>`,
})
export class SolarCloudCrossLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCrossOutlineIcon],svg[solar-cloud-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264M9.97 16.97a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudDownloadBoldIcon],svg[solar-cloud-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m1.805-3.084l-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudDownloadBoldIcon {
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
  selector: 'svg[solarCloudDownloadBrokenIcon],svg[solar-cloud-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 22v-6m0 6l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudDownloadBrokenIcon {
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
  selector: 'svg[solarCloudDownloadLinearIcon],svg[solar-cloud-download-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path stroke-linejoin="round" d="M12 22v-6m0 6l2-2m-2 2l-2-2"></svg:path></svg:g>`,
})
export class SolarCloudDownloadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudDownloadOutlineIcon],svg[solar-cloud-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 15.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V16a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.226 3.5c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486S4.075 18 6.036 18a.75.75 0 0 1 0 1.5C3.263 19.5 1 17.276 1 14.515c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135C5.762 4.856 8.664 2 12.226 2c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305A4.96 4.96 0 0 0 12.226 3.5"></svg:path>`,
})
export class SolarCloudDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudFileBoldIcon],svg[solar-cloud-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m1-4c1.105 0 2-.79 2-1.765c0-.772-.562-1.429-1.346-1.668c-.111-.882-.958-1.567-1.987-1.567c-1.105 0-2 .79-2 1.765c0 .215.043.422.124.613a2 2 0 0 0-.291-.025c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudFileBoldIcon {
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
  selector: 'svg[solarCloudFileBrokenIcon],svg[solar-cloud-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a2 2 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765c0-.772-.562-1.429-1.346-1.668m-3.863.81a1.6 1.6 0 0 1-.124-.612c0-.975.895-1.765 2-1.765c1.029 0 1.876.685 1.987 1.567m-3.863.81q.297.054.542.199"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarCloudFileBrokenIcon {
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
  selector: 'svg[solarCloudFileLinearIcon],svg[solar-cloud-file-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a2 2 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765c0-.772-.562-1.429-1.346-1.668m-3.863.81a1.6 1.6 0 0 1-.124-.612c0-.975.895-1.765 2-1.765c1.029 0 1.876.685 1.987 1.567m-3.863.81q.297.054.542.199"></svg:path></svg:g>`,
})
export class SolarCloudFileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudFileOutlineIcon],svg[solar-cloud-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M9.667 13.75c-.782 0-1.25.54-1.25 1.015v.017q.155.064.298.148a.75.75 0 1 1-.763 1.292a.86.86 0 0 0-.452-.119c-.505 0-.75.342-.75.573c0 .232.245.574.75.574H11c.781 0 1.25-.54 1.25-1.015c0-.382-.285-.789-.815-.95a1.5 1.5 0 0 0-.878.002a.75.75 0 1 1-.384-1.45a1.5 1.5 0 0 0-.506-.087m2.627.266c-.36-1.068-1.451-1.766-2.627-1.766c-1.399 0-2.696.998-2.749 2.425c-.914.228-1.668.982-1.668 2.002c0 1.23 1.098 2.073 2.25 2.073H11c1.428 0 2.75-1.04 2.75-2.515c0-1-.622-1.81-1.456-2.22"></svg:path></svg:g>`,
})
export class SolarCloudFileOutlineIcon {
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
  selector: 'svg[solarCloudLinearIcon],svg[solar-cloud-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.381 9.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20h10C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634"></svg:path>`,
})
export class SolarCloudLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudMinusBoldIcon],svg[solar-cloud-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.778-3.333h3.556a.667.667 0 0 0 0-1.334h-3.556a.667.667 0 0 0 0 1.334" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudMinusBoldIcon {
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
  selector: 'svg[solarCloudMinusBrokenIcon],svg[solar-cloud-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M14 19h-4"></svg:path>`,
})
export class SolarCloudMinusBrokenIcon {
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
  selector: 'svg[solarCloudMinusLinearIcon],svg[solar-cloud-minus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52M14 19h-4"></svg:path>`,
})
export class SolarCloudMinusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudMinusOutlineIcon],svg[solar-cloud-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264M9.25 19a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudOutlineIcon],svg[solar-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 4.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m6.355 3.721c-.559-2.977-3.197-5.221-6.355-5.221c-3.562 0-6.464 2.856-6.464 6.397q0 .582.102 1.135c-2.694.09-4.864 2.278-4.864 4.983c0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397c0-2.644-1.619-4.905-3.919-5.882" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudPlusBoldIcon],svg[solar-cloud-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m.667-5.778a.667.667 0 0 0-1.334 0v1.111h-1.11a.667.667 0 0 0 0 1.334h1.11v1.11a.667.667 0 0 0 1.334 0v-1.11h1.11a.667.667 0 0 0 0-1.334h-1.11z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudPlusBoldIcon {
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
  selector: 'svg[solarCloudPlusBrokenIcon],svg[solar-cloud-plus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M14 19h-2m0 0h-2m2 0v-2m0 2v2"></svg:path>`,
})
export class SolarCloudPlusBrokenIcon {
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
  selector: 'svg[solarCloudPlusLinearIcon],svg[solar-cloud-plus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52M14 19h-2m0 0h-2m2 0v-2m0 2v2"></svg:path>`,
})
export class SolarCloudPlusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudPlusOutlineIcon],svg[solar-cloud-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264M12 16.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V21a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V17a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudRainBoldIcon],svg[solar-cloud-rain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.124 18.255a2.24 2.24 0 0 0-1.351-1.369a2.25 2.25 0 0 0-3.364-2.977l-.802.801a2.25 2.25 0 0 0-3.698-.801l-2 2a2.24 2.24 0 0 0-.532.844c-.534.03-1.06.248-1.468.656l-1.268 1.268C3.091 18.04 2 16.528 2 14.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902"></svg:path><svg:path fill="currentColor" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.746.746 0 0 1-1.06 0a.746.746 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m3.44 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06"></svg:path>`,
})
export class SolarCloudRainBoldIcon {
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
  selector: 'svg[solarCloudRainBrokenIcon],svg[solar-cloud-rain-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 1.94-.99 3.653-2.5 4.67m-5.119-9.996a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M17 19l-2 2m1-5.5l-2 2M12 20l-2 2m1.5-6.5l-2 2m-2 1.5l-2 2"></svg:path>`,
})
export class SolarCloudRainBrokenIcon {
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
  selector: 'svg[solarCloudRainLinearIcon],svg[solar-cloud-rain-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 1.94-.99 3.653-2.5 4.67M17 19l-2 2m1-5.5l-2 2M12 20l-2 2m1.5-6.5l-2 2m-2 1.5l-2 2"></svg:path>`,
})
export class SolarCloudRainLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudRainOutlineIcon],svg[solar-cloud-rain-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486c0 1.074.492 2.036 1.273 2.678a.75.75 0 1 1-.952 1.159a4.96 4.96 0 0 1-1.821-3.837c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882a6.37 6.37 0 0 1-2.831 5.292a.75.75 0 0 1-.838-1.244a4.87 4.87 0 0 0 2.169-4.048c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264"></svg:path>`,
})
export class SolarCloudRainOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallBoldIcon],svg[solar-cloud-snowfall-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.001 14.25a.75.75 0 0 1 .75.75v2.163l1.873-1.081a.75.75 0 1 1 .75 1.299l-1.873 1.081l1.876 1.083a.75.75 0 1 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083l-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.564 18.462a2.25 2.25 0 0 1 2.218-3.841a2.25 2.25 0 0 1 4.437 0a2.25 2.25 0 0 1 2.218 3.841L16 19l.889-.031C19.76 18.671 22 16.27 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19H8z"></svg:path>`,
})
export class SolarCloudSnowfallBoldIcon {
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
  selector: 'svg[solarCloudSnowfallBrokenIcon],svg[solar-cloud-snowfall-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.001 15v7m-2.998-5.269l5.999 3.464m-.003-3.464L9 20.195m13-6.842c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061"></svg:path>`,
})
export class SolarCloudSnowfallBrokenIcon {
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
  selector: 'svg[solarCloudSnowfallLinearIcon],svg[solar-cloud-snowfall-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52M12.001 15v7m-2.998-5.269l5.999 3.464m-.003-3.464L9 20.195"></svg:path>`,
})
export class SolarCloudSnowfallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallMinimalisticBoldIcon],svg[solar-cloud-snowfall-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M12 19a1 1 0 0 0 .781-.376a.997.997 0 0 0-.182-1.425a.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19"></svg:path><svg:path fill="currentColor" d="M22 13.353c0 2.733-1.965 5.013-4.576 5.535A2.5 2.5 0 0 0 17 18a2.5 2.5 0 1 0-4.33-2.41a2.5 2.5 0 0 0-1.34 0A2.501 2.501 0 1 0 7 18c-.219.29-.375.63-.45 1h-.264C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353"></svg:path><svg:path fill="currentColor" d="M15 17.5a1 1 0 0 1-.781-.376A1 1 0 1 1 15 17.5m-6-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarCloudSnowfallMinimalisticBoldIcon {
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
  selector: 'svg[solarCloudSnowfallMinimalisticBrokenIcon],svg[solar-cloud-snowfall-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 19.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudSnowfallMinimalisticBrokenIcon {
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
  selector: 'svg[solarCloudSnowfallMinimalisticLinearIcon],svg[solar-cloud-snowfall-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 19.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path></svg:g>`,
})
export class SolarCloudSnowfallMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallMinimalisticOutlineIcon],svg[solar-cloud-snowfall-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudSnowfallMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallOutlineIcon],svg[solar-cloud-snowfall-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m-.475 10.5a.75.75 0 0 1 .75.75v2.163l1.873-1.081a.75.75 0 1 1 .75 1.299l-1.873 1.081l1.876 1.083a.75.75 0 1 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083l-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264"></svg:path>`,
})
export class SolarCloudSnowfallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStorageBoldIcon],svg[solar-cloud-storage-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.94 14.44c-.44.439-.44 1.146-.44 2.56v2c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56v-2c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 18v-1.082c0-.636 0-1.254.068-1.764c.078-.575.266-1.23.81-1.775c.546-.545 1.201-.733 1.776-.81c.51-.07 1.128-.07 1.764-.069h1.164c.636 0 1.254 0 1.764.068c.575.078 1.23.266 1.775.81c.545.546.733 1.201.81 1.776c.07.51.07 1.128.069 1.764v1.038c2.819-.347 5-2.723 5-5.603c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudStorageBoldIcon {
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
  selector: 'svg[solarCloudStorageBrokenIcon],svg[solar-cloud-storage-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path d="M8.5 17c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 18h2"></svg:path></svg:g>`,
})
export class SolarCloudStorageBrokenIcon {
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
  selector: 'svg[solarCloudStorageLinearIcon],svg[solar-cloud-storage-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path d="M8.5 17c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 18h2"></svg:path></svg:g>`,
})
export class SolarCloudStorageLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStorageOutlineIcon],svg[solar-cloud-storage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m-1.025 10.5h1.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v2.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.853.531-1.345.597c-.459.062-1.032.062-1.697.062h-1.098c-.665 0-1.238 0-1.697-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-2.098c0-.665 0-1.238.062-1.697c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062m-1.497 1.548c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v2c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-2c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudStorageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStormBoldIcon],svg[solar-cloud-storm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.854 14.51a.75.75 0 0 1-.079 1.058L8.02 17.943h2.267a.75.75 0 0 1 .49 1.318L6.49 22.953a.75.75 0 1 1-.98-1.136l2.756-2.374H6a.75.75 0 0 1-.49-1.319l4.286-3.692a.75.75 0 0 1 1.058.078m4.676.46a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m2 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-4 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.124 18.255a2.245 2.245 0 0 0-2.255-1.501a2.25 2.25 0 0 0-3.46-2.845l-.883.883a2.25 2.25 0 0 0-3.71-1.496l-4.285 3.692c-.379.327-.629.76-.73 1.228A4.22 4.22 0 0 1 2 14.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902"></svg:path>`,
})
export class SolarCloudStormBoldIcon {
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
  selector: 'svg[solarCloudStormBrokenIcon],svg[solar-cloud-storm-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 13.353c0 1.94-.99 3.653-2.5 4.67m-5.119-9.996a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M17 19l-2 2m0-5.5l-2 2m0 2.5l-2 2"></svg:path><svg:path stroke-linejoin="round" d="m6 22.385l4.286-3.692H6L10.286 15"></svg:path></svg:g>`,
})
export class SolarCloudStormBrokenIcon {
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
  selector: 'svg[solarCloudStormLinearIcon],svg[solar-cloud-storm-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 1.94-.99 3.653-2.5 4.67M17 19l-2 2m0-5.5l-2 2m0 2.5l-2 2"></svg:path><svg:path stroke-linejoin="round" d="m6 22.385l4.286-3.692H6L10.286 15"></svg:path></svg:g>`,
})
export class SolarCloudStormLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStormOutlineIcon],svg[solar-cloud-storm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486c0 1.074.492 2.036 1.273 2.678a.75.75 0 1 1-.952 1.159a4.96 4.96 0 0 1-1.821-3.837c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882a6.37 6.37 0 0 1-2.831 5.292a.75.75 0 0 1-.838-1.244a4.87 4.87 0 0 0 2.169-4.048c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m-1.622 10.76a.75.75 0 0 1-.079 1.058L8.02 17.943h2.267a.75.75 0 0 1 .49 1.318L6.49 22.953a.75.75 0 1 1-.98-1.136l2.756-2.374H6a.75.75 0 0 1-.49-1.319l4.286-3.692a.75.75 0 0 1 1.058.078m4.676.46a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m2 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-4 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486c0 1.074.492 2.036 1.273 2.678a.75.75 0 1 1-.952 1.159a4.96 4.96 0 0 1-1.821-3.837c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882a6.37 6.37 0 0 1-2.831 5.292a.75.75 0 0 1-.838-1.244a4.87 4.87 0 0 0 2.169-4.048c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264"></svg:path>`,
})
export class SolarCloudStormOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSun2BoldIcon],svg[solar-cloud-sun-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6C9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22zM9.81 5.004a3.5 3.5 0 0 0-4.426 5.322c.46-2.437 2.165-4.43 4.427-5.322"></svg:path>`,
})
export class SolarCloudSun2BoldIcon {
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
  selector: 'svg[solarCloudSun2BrokenIcon],svg[solar-cloud-sun-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16.353C22 19.472 19.442 22 16.286 22H11m3.381-10.973a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22H7m.116-8.391a5.6 5.6 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 12.061"></svg:path><svg:path d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696"></svg:path><svg:path stroke-linecap="round" d="M7.5 2v.5m-5 5H2m9.389-3.889l-.216.216m-7.346 7.346l-.216.216m.216-7.562l-.216-.216"></svg:path></svg:g>`,
})
export class SolarCloudSun2BrokenIcon {
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
  selector: 'svg[solarCloudSun2LinearIcon],svg[solar-cloud-sun-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.381 11.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22h10C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338M7.116 13.609a5.6 5.6 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634"></svg:path><svg:path d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696"></svg:path><svg:path stroke-linecap="round" d="M7.5 2v.5m-5 5H2m9.389-3.889l-.216.216m-7.346 7.346l-.216.216m.216-7.562l-.216-.216"></svg:path></svg:g>`,
})
export class SolarCloudSun2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSun2OutlineIcon],svg[solar-cloud-sun-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0M8 5.25a2.73 2.73 0 0 0-1.925.786A2.74 2.74 0 0 0 5.25 8c0 .833.37 1.58.956 2.084a6.43 6.43 0 0 1 3.518-4.227q-.074-.06-.153-.115A2.73 2.73 0 0 0 8 5.25m3.324.101a4.3 4.3 0 0 0-.895-.839A4.23 4.23 0 0 0 8 3.75a4.23 4.23 0 0 0-2.974 1.214a4.25 4.25 0 0 0 .987 6.793q.01.525.1 1.025c-2.693.09-4.863 2.278-4.863 4.983c0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397c0-2.644-1.619-4.906-3.919-5.882c-.559-2.977-3.197-5.221-6.355-5.221q-.59.001-1.152.101m5.834 4.663a4.96 4.96 0 0 0-4.682-3.264c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudSun2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSunBoldIcon],svg[solar-cloud-sun-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20z"></svg:path><svg:path fill="currentColor" d="M9.94 2.955a5 5 0 0 0-6.327 7.723a5.8 5.8 0 0 1 1.664-.561a7 7 0 0 1-.015-.47c0-3.073 1.951-5.677 4.678-6.692"></svg:path>`,
})
export class SolarCloudSunBoldIcon {
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
  selector: 'svg[solarCloudSunBrokenIcon],svg[solar-cloud-sun-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14.353C22 17.472 19.442 20 16.286 20H11m3.381-10.973a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20H7m.116-8.391a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 10.061"></svg:path><svg:path d="M11 4a5 5 0 1 0-6 7.584"></svg:path></svg:g>`,
})
export class SolarCloudSunBrokenIcon {
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
  selector: 'svg[solarCloudSunLinearIcon],svg[solar-cloud-sun-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.381 9.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20h10C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634"></svg:path><svg:path d="M11 4a5 5 0 1 0-6 7.584"></svg:path></svg:g>`,
})
export class SolarCloudSunLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSunOutlineIcon],svg[solar-cloud-sun-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2.75a4.25 4.25 0 0 0-1.734 8.132q.413-.084.848-.1a6.4 6.4 0 0 1-.102-1.135c0-2.599 1.563-4.829 3.803-5.831A4.23 4.23 0 0 0 7 2.75m4.43.584a5.75 5.75 0 1 0-7.895 8.255a4.97 4.97 0 0 0-2.285 4.176c0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397c0-2.644-1.619-4.905-3.919-5.882c-.559-2.977-3.197-5.221-6.355-5.221a6.6 6.6 0 0 0-1.046.084m5.728 4.68a4.96 4.96 0 0 0-4.682-3.264c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-2.56-.183c-.407.077-.835-.124-.971-.515c-.137-.39.07-.823.473-.914a6.6 6.6 0 0 1 2.304-.1" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudSunOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudUploadBoldIcon],svg[solar-cloud-upload-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 14c-1.886 0-2.828 0-3.414.586S8 16.114 8 18s0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18s0-2.828-.586-3.414S13.886 14 12 14m1.805 3.084l-1.334-1.333a.667.667 0 0 0-.942 0l-1.334 1.333a.667.667 0 1 0 .943.943l.195-.195v1.946a.667.667 0 0 0 1.334 0v-1.946l.195.195a.667.667 0 0 0 .943-.943" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudUploadBoldIcon {
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
  selector: 'svg[solarCloudUploadBrokenIcon],svg[solar-cloud-upload-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 16v6m0-6l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudUploadBrokenIcon {
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
  selector: 'svg[solarCloudUploadLinearIcon],svg[solar-cloud-upload-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path stroke-linejoin="round" d="M12 16v6m0-6l2 2m-2-2l-2 2"></svg:path></svg:g>`,
})
export class SolarCloudUploadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudUploadOutlineIcon],svg[solar-cloud-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.47 15.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V22a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264"></svg:path>`,
})
export class SolarCloudUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropBoldIcon],svg[solar-cloud-waterdrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96"></svg:path><svg:path fill="currentColor" d="M9.72 15.08c-.449.462-.968 1.048-1.384 1.674c-.372.559-.808 1.362-.835 2.246H6.286C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 3.048-2.444 5.533-5.501 5.643c-.028-.882-.464-1.684-.835-2.242c-.416-.626-.935-1.212-1.384-1.674a3.165 3.165 0 0 0-4.56 0"></svg:path>`,
})
export class SolarCloudWaterdropBoldIcon {
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
  selector: 'svg[solarCloudWaterdropBrokenIcon],svg[solar-cloud-waterdrop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z"></svg:path><svg:path stroke-linecap="round" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropBrokenIcon {
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
  selector: 'svg[solarCloudWaterdropLinearIcon],svg[solar-cloud-waterdrop-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"></svg:path><svg:path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropOutlineIcon],svg[solar-cloud-waterdrop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m.19 12.897a.916.916 0 0 0-1.332 0c-.402.413-.816.888-1.124 1.352c-.326.49-.46.859-.46 1.084c0 1.177.987 2.167 2.25 2.167s2.25-.99 2.25-2.167c0-.225-.134-.594-.46-1.084c-.308-.464-.722-.939-1.124-1.352m-2.408-1.045a2.415 2.415 0 0 1 3.484 0c.433.445.917.994 1.298 1.567c.363.547.71 1.228.71 1.914c0 2.045-1.699 3.667-3.75 3.667s-3.75-1.622-3.75-3.667c0-.686.347-1.367.71-1.914c.38-.573.865-1.122 1.298-1.567" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudWaterdropOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsBoldIcon],svg[solar-cloud-waterdrops-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645m5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645m-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645"></svg:path><svg:path fill="currentColor" d="M6.846 19q.066-.131.127-.238a7.3 7.3 0 0 1 .736-1.036a2.33 2.33 0 0 1 1.68-.839A3.3 3.3 0 0 1 9 15.334c0-.648.27-1.215.473-1.572c.226-.395.502-.757.736-1.036a2.328 2.328 0 0 1 3.582 0c.234.28.51.64.736 1.036c.204.357.473.924.473 1.572a3.3 3.3 0 0 1-.39 1.553c.624.03 1.238.31 1.681.84c.234.279.51.64.735 1.035q.048.081.097.178c2.76-.4 4.877-2.75 4.877-5.587c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z"></svg:path>`,
})
export class SolarCloudWaterdropsBoldIcon {
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
  selector: 'svg[solarCloudWaterdropsBrokenIcon],svg[solar-cloud-waterdrops-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path><svg:path d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropsBrokenIcon {
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
  selector: 'svg[solarCloudWaterdropsLinearIcon],svg[solar-cloud-waterdrops-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.343-1.444 4.353-3.5 5.207"></svg:path><svg:path d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsOutlineIcon],svg[solar-cloud-waterdrops-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 3.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486c0 1.553 1.034 2.878 2.472 3.325a.75.75 0 1 1-.444 1.432c-2.04-.632-3.528-2.518-3.528-4.757c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882c0 2.66-1.64 4.934-3.962 5.9a.75.75 0 1 1-.576-1.385c1.79-.744 3.038-2.49 3.038-4.515c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264M12 14.135c-.018 0-.041.006-.066.035a5 5 0 0 0-.506.706c-.144.252-.178.402-.178.457c0 .583.408.917.75.917s.75-.334.75-.917c0-.055-.034-.205-.178-.457a5 5 0 0 0-.506-.706c-.025-.03-.048-.036-.066-.036m-1.216-.928a1.578 1.578 0 0 1 2.432 0c.22.262.465.585.659.926c.184.322.375.75.375 1.2c0 1.259-.935 2.417-2.25 2.417s-2.25-1.158-2.25-2.417c0-.45.191-.878.375-1.2c.194-.341.44-.664.659-.926M9.5 19.134c-.018 0-.041.007-.066.036a5 5 0 0 0-.506.706c-.144.252-.178.402-.178.457c0 .583.408.917.75.917s.75-.334.75-.917c0-.055-.034-.205-.178-.457a5 5 0 0 0-.506-.706c-.025-.03-.048-.036-.066-.036m-1.216-.927a1.578 1.578 0 0 1 2.432 0c.22.262.465.585.659.926c.184.322.375.75.375 1.2c0 1.259-.935 2.417-2.25 2.417s-2.25-1.158-2.25-2.417c0-.45.191-.878.375-1.2c.194-.341.44-.664.659-.926m6.216.927c-.018 0-.041.007-.066.036a5 5 0 0 0-.506.706c-.144.252-.178.402-.178.457c0 .583.408.917.75.917s.75-.334.75-.917c0-.055-.034-.205-.178-.457a5 5 0 0 0-.506-.706c-.025-.03-.048-.036-.066-.036m-1.216-.927a1.578 1.578 0 0 1 2.432 0c.22.262.465.585.659.926c.184.322.375.75.375 1.2c0 1.259-.935 2.417-2.25 2.417s-2.25-1.158-2.25-2.417c0-.45.191-.878.375-1.2c.194-.341.44-.664.659-.926" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudWaterdropsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudsBoldIcon],svg[solar-clouds-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22z"></svg:path><svg:path fill="currentColor" d="M21.551 14.55a5 5 0 0 0-.751-.486c-.66-2.101-2.686-3.564-4.99-3.564c-2.754 0-5.124 2.1-5.212 4.87c-1.321.37-2.41 1.342-2.867 2.63H6.286C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 .78-.16 1.522-.449 2.197"></svg:path>`,
})
export class SolarCloudsBoldIcon {
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
  selector: 'svg[solarCloudsBrokenIcon],svg[solar-clouds-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m8.383 4.899c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.176 1.622a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227c0-1.949 1.662-3.529 3.714-3.529c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path>`,
})
export class SolarCloudsBrokenIcon {
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
  selector: 'svg[solarCloudsLinearIcon],svg[solar-clouds-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m8.383 4.899c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.176 1.622a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227c0-1.949 1.662-3.529 3.714-3.529c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path>`,
})
export class SolarCloudsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudsOutlineIcon],svg[solar-clouds-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486s1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985c0-2.705 2.17-4.893 4.864-4.983a6.4 6.4 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397c3.158 0 5.796 2.244 6.355 5.221c2.3.977 3.919 3.238 3.919 5.882a.75.75 0 1 1-1.5 0c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m3.333 10c-1.673 0-2.964 1.28-2.964 2.78q0 .311.07.603q.44.143.82.386a.75.75 0 0 1-.804 1.266a2.1 2.1 0 0 0-1.145-.33c-1.161 0-2.036.886-2.036 1.898s.875 1.897 2.036 1.897h6.5c1.673 0 2.964-1.28 2.964-2.78c0-1.19-.807-2.236-1.983-2.623a3.1 3.1 0 0 0-.981-.156c-.353 0-.689.058-1 .162a.75.75 0 1 1-.477-1.422a4.6 4.6 0 0 1 1.599-.238c-.499-.85-1.462-1.443-2.599-1.443m4.357 1.838c-.452-1.934-2.254-3.338-4.357-3.338c-2.428 0-4.464 1.88-4.464 4.28q0 .227.025.45c-1.73.196-3.12 1.601-3.12 3.373c0 1.912 1.62 3.397 3.536 3.397h6.5c2.429 0 4.464-1.88 4.464-4.28c0-1.737-1.074-3.208-2.584-3.882" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudyMoonBoldIcon],svg[solar-cloudy-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353S3.247 22 4.786 22z"></svg:path><svg:path fill="currentColor" d="M2.716 15.723q.418-.224.882-.354C3.686 12.6 6.056 10.5 8.81 10.5q.259 0 .511.024A6.5 6.5 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .716 3.723M22 12c0 4.266-2.671 7.908-6.432 9.345a4.87 4.87 0 0 0 .932-2.874a4.9 4.9 0 0 0-1.457-3.487q.227.015.457.016a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143"></svg:path>`,
})
export class SolarCloudyMoonBoldIcon {
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
  selector: 'svg[solarCloudyMoonBrokenIcon],svg[solar-cloudy-moon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zM15.5 14.25a.75.75 0 0 0 0 1.5zM8.25 8.5a.75.75 0 0 0 1.5 0zm3.893-5.567l-.388-.642zm-10.4 12.292a.75.75 0 1 0 1.43-.45zm14.882 4.788a.75.75 0 1 0 .75 1.298zM3.987 7.376a.75.75 0 0 0-1.298-.752zm2.637-4.687a.75.75 0 1 0 .752 1.298zm13.801 8.78A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm-6.577 6.275A9.3 9.3 0 0 1 2.75 12h-1.5c0 1.122.172 2.206.492 3.225zM21.25 12a9.25 9.25 0 0 1-4.625 8.013l.75 1.298A10.75 10.75 0 0 0 22.75 12zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM2.75 12c0-1.686.45-3.265 1.237-4.624l-1.298-.752A10.7 10.7 0 0 0 1.25 12zm4.626-8.013A9.2 9.2 0 0 1 12 2.75v-1.5c-1.957 0-3.794.524-5.376 1.439z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.048 15.142c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.175 1.622a3 3 0 0 0-.54-.05C3.247 16.706 2 17.89 2 19.353S3.247 22 4.786 22h6.5C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227C5.095 13.58 6.757 12 8.81 12c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path></svg:g>`,
})
export class SolarCloudyMoonBrokenIcon {
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
  selector: 'svg[solarCloudyMoonLinearIcon],svg[solar-cloudy-moon-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zM15.5 14.25a.75.75 0 0 0 0 1.5zM8.25 8.5a.75.75 0 0 0 1.5 0zm3.893-5.567l-.388-.642zm-10.4 12.292a.75.75 0 1 0 1.43-.45zm14.882 4.788a.75.75 0 1 0 .75 1.298zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm17.675-.531A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm-6.577 6.275A9.3 9.3 0 0 1 2.75 12h-1.5c0 1.122.172 2.206.492 3.225zM21.25 12a9.25 9.25 0 0 1-4.625 8.013l.75 1.298A10.75 10.75 0 0 0 22.75 12zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.048 15.142c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.175 1.622a3 3 0 0 0-.54-.05C3.247 16.706 2 17.89 2 19.353S3.247 22 4.786 22h6.5C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227C5.095 13.58 6.757 12 8.81 12c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path></svg:g>`,
})
export class SolarCloudyMoonLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudyMoonOutlineIcon],svg[solar-cloudy-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.017 2.802A9.25 9.25 0 0 0 2.75 12c0 .968.148 1.9.423 2.775a.75.75 0 1 1-1.43.45A10.8 10.8 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026c.059.438-.103.995-.606 1.299A5.75 5.75 0 0 0 9.75 8.5a.75.75 0 0 1-1.5 0a7.24 7.24 0 0 1 2.767-5.698m10.181 10.18a9.25 9.25 0 0 1-4.573 7.031a.75.75 0 1 0 .75 1.298A10.75 10.75 0 0 0 22.75 12c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606A5.75 5.75 0 0 1 15.5 14.25a.75.75 0 0 0 0 1.5a7.24 7.24 0 0 0 5.698-2.767M8.81 12.75c-1.674 0-2.965 1.28-2.965 2.78q0 .311.07.603q.44.143.82.386a.75.75 0 0 1-.804 1.266a2.1 2.1 0 0 0-1.145-.33c-1.161 0-2.036.886-2.036 1.898s.875 1.897 2.036 1.897h6.5c1.673 0 2.964-1.28 2.964-2.78c0-1.19-.807-2.236-1.983-2.623a3.1 3.1 0 0 0-.981-.156c-.352 0-.689.058-1 .162a.75.75 0 1 1-.477-1.422a4.6 4.6 0 0 1 1.599-.238c-.499-.85-1.462-1.443-2.598-1.443m4.356 1.838c-.452-1.934-2.254-3.338-4.356-3.338c-2.43 0-4.465 1.88-4.465 4.28q0 .227.025.45c-1.73.196-3.12 1.601-3.12 3.373c0 1.912 1.62 3.397 3.536 3.397h6.5c2.429 0 4.464-1.88 4.464-4.28c0-1.737-1.074-3.208-2.584-3.882" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudyMoonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCode2BoldIcon],svg[solar-code-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.502 5.387a.75.75 0 0 0-1.004-1.115L5.761 5.836c-.737.663-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 1 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.817c0-.196.072-.425.402-.818c.344-.409.875-.889 1.663-1.598zm5.678-1.112a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 1 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532m1.263 6.223a.75.75 0 0 1 1.059-.055l1.737 1.563c.737.663 1.347 1.213 1.767 1.711c.44.524.754 1.088.754 1.783s-.313 1.259-.754 1.783c-.42.498-1.03 1.048-1.767 1.71l-1.737 1.565a.75.75 0 1 1-1.004-1.116l1.697-1.526c.788-.71 1.319-1.19 1.663-1.599c.33-.392.402-.622.402-.817s-.072-.425-.402-.817c-.344-.41-.875-.89-1.663-1.599l-1.697-1.527a.75.75 0 0 1-.055-1.059"></svg:path>`,
})
export class SolarCode2BoldIcon {
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
  selector: 'svg[solarCode2BrokenIcon],svg[solar-code-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16 11l1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973c0 .89-.771 1.585-2.314 2.973L16 20M8 4.83L6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33s.771 1.585 2.314 2.973L8 13.83M13.987 5l-.994 3.707M11.843 13l-1.83 6.83"></svg:path>`,
})
export class SolarCode2BrokenIcon {
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
  selector: 'svg[solarCode2LinearIcon],svg[solar-code-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16 11l1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973c0 .89-.771 1.585-2.314 2.973L16 20M13.987 5l-1.994 7.5L10 20M8 4.83L6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33s.771 1.585 2.314 2.973L8 13.83"></svg:path>`,
})
export class SolarCode2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCode2OutlineIcon],svg[solar-code-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.558 4.328a.75.75 0 0 1-.056 1.06L6.805 6.913c-.788.709-1.319 1.19-1.663 1.598c-.33.393-.402.622-.402.818s.072.424.402.817c.344.409.875.89 1.663 1.598l1.697 1.527a.75.75 0 0 1-1.004 1.115l-1.737-1.564c-.737-.662-1.347-1.212-1.767-1.71c-.44-.525-.754-1.088-.754-1.783c0-.696.313-1.259.754-1.783c.42-.499 1.03-1.048 1.767-1.711l.04-.037l1.697-1.527a.75.75 0 0 1 1.06.056m5.622-.053a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 0 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532m1.263 6.223a.75.75 0 0 1 1.059-.055l1.737 1.563c.737.663 1.347 1.213 1.767 1.711c.44.524.754 1.088.754 1.783s-.313 1.259-.754 1.783c-.42.498-1.03 1.048-1.767 1.71l-1.737 1.565a.75.75 0 0 1-1.004-1.116l1.697-1.526c.788-.71 1.319-1.19 1.663-1.599c.33-.392.402-.622.402-.817s-.072-.425-.402-.817c-.344-.41-.875-.89-1.663-1.599l-1.697-1.527a.75.75 0 0 1-.055-1.059" clip-rule="evenodd"></svg:path>`,
})
export class SolarCode2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeBoldIcon],svg[solar-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.18 4.276a.75.75 0 0 1 .531.918l-3.973 14.83a.75.75 0 0 1-1.45-.389l3.974-14.83a.75.75 0 0 1 .919-.53m2.262 3.053a.75.75 0 0 1 1.059-.056l1.737 1.564c.737.662 1.347 1.212 1.767 1.71c.44.525.754 1.088.754 1.784c0 .695-.313 1.258-.754 1.782c-.42.499-1.03 1.049-1.767 1.711l-1.737 1.564a.75.75 0 0 1-1.004-1.115l1.697-1.527c.788-.709 1.319-1.19 1.663-1.598c.33-.393.402-.622.402-.818s-.072-.424-.402-.817c-.344-.409-.875-.89-1.663-1.598l-1.697-1.527a.75.75 0 0 1-.056-1.06m-8.94 1.06a.75.75 0 1 0-1.004-1.115L4.761 8.836c-.737.662-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 0 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.818s.072-.424.402-.817c.344-.409.875-.89 1.663-1.598z"></svg:path>`,
})
export class SolarCodeBoldIcon {
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
  selector: 'svg[solarCodeBrokenIcon],svg[solar-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5l-.994 3.707M11.843 13l-1.83 6.83M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83"></svg:path>`,
})
export class SolarCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeCircleBoldIcon],svg[solar-code-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.512-5.554a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeCircleBoldIcon {
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
  selector: 'svg[solarCodeCircleBrokenIcon],svg[solar-code-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCodeCircleBrokenIcon {
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
  selector: 'svg[solarCodeCircleLinearIcon],svg[solar-code-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15"></svg:path></svg:g>`,
})
export class SolarCodeCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeCircleOutlineIcon],svg[solar-code-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.03 8.47a.75.75 0 1 0-1.06 1.06l.171.172c.682.682 1.139 1.14 1.434 1.528c.283.37.347.586.347.77s-.064.4-.347.77c-.295.387-.752.846-1.434 1.528l-.171.172a.75.75 0 1 0 1.06 1.06l.209-.208c.635-.635 1.165-1.165 1.529-1.642c.384-.504.654-1.036.654-1.68s-.27-1.176-.654-1.68c-.364-.477-.894-1.007-1.53-1.642zm-2.542-2.024a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M9.03 8.47a.75.75 0 0 0-1.06 0l-.208.208c-.636.635-1.166 1.165-1.53 1.642c-.384.504-.653 1.036-.653 1.68s.27 1.176.653 1.68c.364.477.894 1.007 1.53 1.642l.208.208a.75.75 0 0 0 1.06-1.06l-.171-.172c-.682-.682-1.138-1.14-1.434-1.528c-.283-.37-.346-.586-.346-.77s.063-.4.346-.77c.296-.387.752-.846 1.434-1.528l.172-.172a.75.75 0 0 0 0-1.06"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeFileBoldIcon],svg[solar-code-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m.97-6.53a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06m-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 1 0 1.404.526zM7.53 13.47a.75.75 0 0 1 0 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeFileBoldIcon {
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
  selector: 'svg[solarCodeFileBrokenIcon],svg[solar-code-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 14l-1 1l1 1m4.5 0l1 1l-1 1M10 14l-1.5 4"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarCodeFileBrokenIcon {
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
  selector: 'svg[solarCodeFileLinearIcon],svg[solar-code-file-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 14l-1 1l1 1m4.5 0l1 1l-1 1M10 14l-1.5 4"></svg:path></svg:g>`,
})
export class SolarCodeFileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeFileOutlineIcon],svg[solar-code-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M10.263 13.298a.75.75 0 0 1 .44.965l-1.5 4a.75.75 0 0 1-1.405-.526l1.5-4a.75.75 0 0 1 .965-.44m-2.733.172a.75.75 0 0 1 0 1.06l-.47.47l.47.47a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0m3.44 2a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class SolarCodeFileOutlineIcon {
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
  selector: 'svg[solarCodeLinearIcon],svg[solar-code-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5L12 12.415l-1.987 7.415M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83"></svg:path>`,
})
export class SolarCodeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeOutlineIcon],svg[solar-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.18 4.276a.75.75 0 0 1 .531.918l-3.973 14.83a.75.75 0 0 1-1.45-.389l3.974-14.83a.75.75 0 0 1 .919-.53m2.262 3.053a.75.75 0 0 1 1.059-.056l1.737 1.564c.737.662 1.347 1.212 1.767 1.71c.44.525.754 1.088.754 1.784c0 .695-.313 1.258-.754 1.782c-.42.499-1.03 1.049-1.767 1.711l-1.737 1.564a.75.75 0 0 1-1.004-1.115l1.697-1.527c.788-.709 1.319-1.19 1.663-1.598c.33-.393.402-.622.402-.818s-.072-.424-.402-.817c-.344-.409-.875-.89-1.663-1.598l-1.697-1.527a.75.75 0 0 1-.056-1.06m-8.94 1.06a.75.75 0 1 0-1.004-1.115L4.761 8.836c-.737.662-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 0 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.818s.072-.424.402-.817c.344-.409.875-.89 1.663-1.598z"></svg:path>`,
})
export class SolarCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeScanBoldIcon],svg[solar-code-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289a.75.75 0 0 0 1.5 0v-.056c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5m-4.056-1.5H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153"></svg:path><svg:path fill="currentColor" d="M5.527 5.527C5 6.054 5 6.903 5 8.6c0 1.131 0 1.697.351 2.049C5.703 11 6.27 11 7.4 11h1.2c1.131 0 1.697 0 2.049-.351C11 10.297 11 9.73 11 8.6V7.4c0-1.131 0-1.697-.351-2.049C10.297 5 9.73 5 8.6 5c-1.697 0-2.546 0-3.073.527m0 12.946C5 17.946 5 17.097 5 15.4c0-1.131 0-1.697.351-2.049C5.703 13 6.27 13 7.4 13h1.2c1.131 0 1.697 0 2.049.351c.351.352.351.918.351 2.049v1.2c0 1.131 0 1.697-.351 2.048C10.297 19 9.73 19 8.6 19c-1.697 0-2.546 0-3.073-.527M13 7.4c0-1.131 0-1.697.351-2.049C13.704 5 14.27 5 15.4 5c1.697 0 2.546 0 3.073.527S19 6.903 19 8.6c0 1.131 0 1.697-.352 2.049c-.35.351-.917.351-2.048.351h-1.2c-1.131 0-1.697 0-2.049-.351C13 10.297 13 9.73 13 8.6zm.352 11.249C13 18.297 13 17.73 13 16.6v-1.2c0-1.131 0-1.697.351-2.049C13.704 13 14.27 13 15.4 13h1.2c1.131 0 1.697 0 2.048.351c.352.352.352.918.352 2.049c0 1.697 0 2.546-.527 3.073S17.097 19 15.4 19c-1.131 0-1.697 0-2.049-.352"></svg:path><svg:path fill="currentColor" d="M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M2.75 14a.75.75 0 0 0-1.5 0v.056c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289"></svg:path>`,
})
export class SolarCodeScanBoldIcon {
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
  selector: 'svg[solarCodeScanBrokenIcon],svg[solar-code-scan-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.5 15.5c0-.943 0-1.414.293-1.707S6.557 13.5 7.5 13.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293c-1.414 0-2.121 0-2.56-.44"></svg:path><svg:path d="M5.5 8.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S5.5 9.443 5.5 8.5Zm8 7c0-.943 0-1.414.293-1.707s.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707z"></svg:path><svg:path stroke-linecap="round" d="M18.5 8.5c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S13.5 9.443 13.5 8.5v-1c0-.943 0-1.414.293-1.707S14.557 5.5 15.5 5.5c1.414 0 2.121 0 2.56.44M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172C2.518 3.825 2.229 4.7 2.102 6M2 10V9"></svg:path><svg:path stroke-linecap="round" d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarCodeScanBrokenIcon {
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
  selector: 'svg[solarCodeScanLinearIcon],svg[solar-code-scan-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.5 15.5c0-.943 0-1.414.293-1.707S6.557 13.5 7.5 13.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56Zm0-7c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S5.5 9.443 5.5 8.5Zm8 7c0-.943 0-1.414.293-1.707s.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707zm0-8c0-.943 0-1.414.293-1.707S14.557 5.5 15.5 5.5c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S13.5 9.443 13.5 8.5z"></svg:path><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarCodeScanLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeScanOutlineIcon],svg[solar-code-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M9.497 6.28c-.21-.028-.504-.03-.997-.03c-.728 0-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546c0 .493.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03h1c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997v-1c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.037-.167l-.002-.004l-.003-.006l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037m.2-1.487c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v1.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-1.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152V8.45c0-.664 0-1.237.062-1.696c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.094c.433 0 .83 0 1.152.043m5.758-.043h.094c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v.094c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-1.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-1.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v1c0 .493.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03h1c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048c-.493 0-.787.002-.997.03a.7.7 0 0 0-.167.037l-.005.002zm-6.87 6.428h1.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v1.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043H8.45c-.665 0-1.238 0-1.697-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-.094c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997v-1c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03h-1c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042m9.13-1.572h1.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.094c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.697.062h-.094c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-1.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.13 1.572l-.002.001l-.001.003l-.002.004l-.003.006a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v1c0 .493.002.787.03.997a.7.7 0 0 0 .04.174l.002.003l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03h-1c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeScanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeSquareBoldIcon],svg[solar-code-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.024 2.982a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeSquareBoldIcon {
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
  selector: 'svg[solarCodeSquareBrokenIcon],svg[solar-code-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCodeSquareBrokenIcon {
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
  selector: 'svg[solarCodeSquareLinearIcon],svg[solar-code-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.171.172c-1.334 1.333-2 2-2 2.828s.666 1.495 2 2.828L8.5 15"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarCodeSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeSquareOutlineIcon],svg[solar-code-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.018 7.364a.75.75 0 1 0-1.449-.388l-2.588 9.66a.75.75 0 1 0 1.45.388zM16.03 8.47a.75.75 0 1 0-1.06 1.06l.171.172c.682.682 1.139 1.14 1.434 1.528c.283.37.347.586.347.77s-.064.4-.347.77c-.295.387-.752.846-1.434 1.528l-.171.172a.75.75 0 1 0 1.06 1.06l.209-.208c.635-.635 1.165-1.165 1.529-1.642c.384-.504.654-1.036.654-1.68s-.27-1.176-.654-1.68c-.364-.477-.894-1.007-1.53-1.642zm-8.06 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingBoldIcon],svg[solar-colour-tuneing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172m4.74 5.545a3.8 3.8 0 0 1 .835-1.483c.36-.383.65-.484.776-.484c.305 0 .716.178 1.09 1.016c.379.849.637 2.228.637 4.234c0 2.099.265 3.72.767 4.845c.507 1.135 1.335 1.905 2.46 1.905c.724 0 1.384-.441 1.868-.955a5.3 5.3 0 0 0 1.178-2.078a.75.75 0 1 0-1.436-.434a3.8 3.8 0 0 1-.834 1.483c-.36.383-.65.484-.776.484c-.305 0-.716-.178-1.09-1.016c-.379-.849-.637-2.228-.637-4.234c0-2.099-.265-3.72-.767-4.845c-.507-1.135-1.335-1.905-2.46-1.905c-.724 0-1.384.441-1.868.955a5.3 5.3 0 0 0-1.178 2.078a.75.75 0 0 0 1.436.434M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm8.5 0a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarColourTuneingBoldIcon {
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
  selector: 'svg[solarColourTuneingBrokenIcon],svg[solar-colour-tuneing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12h7.5M22 12h-7.5m5.5 3.684C20 19 17.735 22 16 22c-1.257 0-2.328-.97-3.032-3M4.144 8.316C4.144 5 6.41 2 8.144 2c2.269 0 3.928 3.158 3.928 10q.002 1.64.123 3"></svg:path>`,
})
export class SolarColourTuneingBrokenIcon {
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
  selector: 'svg[solarColourTuneingLinearIcon],svg[solar-colour-tuneing-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12h7.5M22 12h-7.5m5.5 3.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10S10.412 2 8.144 2c-1.734 0-4 3-4 6.316"></svg:path>`,
})
export class SolarColourTuneingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingOutlineIcon],svg[solar-colour-tuneing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.116 4.333a7.3 7.3 0 0 0-1.222 3.983a.75.75 0 0 1-1.5 0c0-1.822.62-3.544 1.477-4.82c.43-.64.934-1.187 1.474-1.581c.534-.39 1.153-.665 1.8-.665c1.564 0 2.749 1.113 3.504 2.891c.756 1.779 1.173 4.395 1.173 7.859c0 3.378.412 5.762 1.054 7.273c.641 1.51 1.42 1.977 2.124 1.977c.222 0 .536-.1.915-.376c.372-.272.76-.682 1.113-1.207a7.3 7.3 0 0 0 1.222-3.983a.75.75 0 1 1 1.5 0c0 1.822-.619 3.544-1.477 4.82c-.43.64-.933 1.187-1.474 1.581c-.534.39-1.153.665-1.799.665c-1.565 0-2.75-1.113-3.505-2.891S11.322 15.464 11.322 12c0-3.378-.412-5.762-1.053-7.273c-.642-1.51-1.421-1.977-2.125-1.977c-.222 0-.536.1-.914.376c-.373.272-.76.682-1.114 1.207M1.25 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m12.5 0a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarColourTuneingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCommandBoldIcon],svg[solar-command-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8h3a3 3 0 1 0-3-3zH8V5a3 3 0 1 0-3 3h3v8h8zm0 8h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"></svg:path>`,
})
export class SolarCommandBoldIcon {
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
  selector: 'svg[solarCommandBrokenIcon],svg[solar-command-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8 13v3h8V8H8v1"></svg:path><svg:path d="M16 16.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"></svg:path></svg:g>`,
})
export class SolarCommandBrokenIcon {
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
  selector: 'svg[solarCommandLinearIcon],svg[solar-command-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M8 8h8v8H8zm8 8.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"></svg:path>`,
})
export class SolarCommandLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCommandOutlineIcon],svg[solar-command-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.25 5A3.75 3.75 0 1 1 19 8.75h-2.25v6.5H19a3.75 3.75 0 1 1-3.75 3.751V16.75h-6.5v2.251a3.75 3.75 0 1 1-3.749-3.75H7.25v-6.5H5.001A3.75 3.75 0 1 1 8.751 5v2.25h6.5zm-8 2.25V5A2.25 2.25 0 1 0 5 7.25zM19 2.75A2.25 2.25 0 0 0 16.75 5v2.25H19a2.25 2.25 0 1 0 0-4.5m-10.25 6v6.5h6.5v-6.5zM21.25 19A2.25 2.25 0 0 0 19 16.75h-2.25V19a2.25 2.25 0 1 0 4.5 0m-18.5 0A2.25 2.25 0 0 1 5 16.75h2.25V19a2.25 2.25 0 1 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCommandOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigBoldIcon],svg[solar-compass-big-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554c1.342-.537 2.013-.806 2.54-1.267q.201-.177.378-.378c.461-.527.73-1.198 1.267-2.54c2.515-6.293 3.775-9.44 2.554-11.236a4.1 4.1 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554c-1.342.537-2.013.806-2.54 1.267q-.201.177-.378.378c-.461.527-.73 1.198-1.267 2.54c-2.517 6.292-3.775 9.439-2.554 11.236c.29.426.657.793 1.083 1.083M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassBigBoldIcon {
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
  selector: 'svg[solarCompassBigBrokenIcon],svg[solar-compass-big-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5.025 9.21c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c.951 1.4.398 3.619-1.083 7.506a256 256 0 0 1-1.471 3.73c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267c-6.293 2.515-9.44 3.775-11.236 2.554a4.1 4.1 0 0 1-1.083-1.083c-.946-1.393-.403-3.596 1.06-7.446"></svg:path><svg:path d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5"></svg:path></svg:g>`,
})
export class SolarCompassBigBrokenIcon {
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
  selector: 'svg[solarCompassBigLinearIcon],svg[solar-compass-big-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.1 4.1 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c1.221 1.797-.038 4.943-2.554 11.236c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267Z"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class SolarCompassBigLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigOutlineIcon],svg[solar-compass-big-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.706 3.071c-1.743.462-4.052 1.384-7.217 2.65c-1.391.557-1.917.778-2.324 1.135q-.165.145-.309.309c-.357.407-.578.933-1.134 2.324c-1.267 3.165-2.189 5.474-2.65 7.217c-.47 1.768-.393 2.71.02 3.318c.236.348.536.648.884.884c.607.413 1.55.49 3.318.02c1.743-.462 4.052-1.384 7.217-2.65c1.391-.556 1.917-.777 2.324-1.134l.459.523l-.459-.523q.165-.145.309-.309l.529.464l-.53-.464c.358-.407.579-.933 1.135-2.324c1.267-3.165 2.189-5.474 2.65-7.217c.47-1.768.393-2.71-.02-3.318a3.3 3.3 0 0 0-.884-.885c-.607-.412-1.55-.488-3.318-.02m-.384-1.45c1.827-.484 3.356-.579 4.545.23c.505.343.94.777 1.282 1.282c.809 1.19.714 2.718.23 4.545c-.489 1.842-1.446 4.236-2.686 7.336l-.022.054l-.05.127c-.488 1.22-.802 2.005-1.35 2.629q-.208.238-.447.447c-.624.548-1.409.861-2.63 1.35l-.126.05l-.054.022c-3.1 1.24-5.494 2.197-7.335 2.685c-1.828.485-3.357.58-4.546-.229a4.8 4.8 0 0 1-1.282-1.282l.62-.421l-.62.421c-.809-1.19-.714-2.718-.23-4.546c.489-1.841 1.446-4.235 2.686-7.335l.022-.054l.05-.127c.489-1.22.802-2.005 1.35-2.629q.209-.238.447-.448c.624-.547 1.409-.86 2.63-1.348l.126-.051l.054-.022c3.1-1.24 5.494-2.197 7.336-2.685M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassBigOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBoldIcon],svg[solar-compass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassBoldIcon {
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
  selector: 'svg[solarCompassBrokenIcon],svg[solar-compass-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCompassBrokenIcon {
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
  selector: 'svg[solarCompassLinearIcon],svg[solar-compass-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path></svg:g>`,
})
export class SolarCompassLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassOutlineIcon],svg[solar-compass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m12.599-2.819c-.605.16-1.42.485-2.595.955c-.541.217-.642.268-.716.333a1 1 0 0 0-.07.069c-.064.074-.115.175-.332.716c-.47 1.175-.794 1.99-.955 2.595c-.167.63-.085.79-.059.83a.8.8 0 0 0 .2.198c.038.027.199.108.829-.059c.605-.16 1.42-.484 2.594-.954c.542-.217.643-.268.717-.333l.494.564l-.494-.564a1 1 0 0 0 .07-.07l.563.495l-.564-.494c.065-.074.116-.175.333-.717c.47-1.174.794-1.99.954-2.594c.168-.63.086-.791.06-.83a.8.8 0 0 0-.2-.199c-.038-.026-.2-.108-.83.06m-.384-1.45c.69-.183 1.436-.271 2.057.15c.234.16.437.362.596.597c.422.621.333 1.367.15 2.057c-.186.704-.546 1.605-.991 2.717l-.02.05l-.034.084c-.163.41-.308.772-.564 1.065a2 2 0 0 1-.208.208c-.293.256-.655.4-1.065.564l-.083.033l-.279-.696l.279.697l-.05.02c-1.113.445-2.014.805-2.718.991c-.69.183-1.436.272-2.057-.15l.422-.62l-.422.62a2.3 2.3 0 0 1-.596-.596c-.422-.621-.334-1.368-.15-2.057c.186-.705.546-1.605.991-2.717l.02-.05l.034-.085c.163-.41.307-.771.564-1.064q.097-.11.208-.208c.293-.257.655-.401 1.064-.564l.084-.034l.05-.02c1.113-.445 2.013-.805 2.718-.992" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassSquareBoldIcon],svg[solar-compass-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.932q.065-.075.139-.14c.193-.169.44-.267.932-.464c2.31-.924 3.465-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.74-.465.932q-.065.075-.139.14" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassSquareBoldIcon {
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
  selector: 'svg[solarCompassSquareBrokenIcon],svg[solar-compass-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCompassSquareBrokenIcon {
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
  selector: 'svg[solarCompassSquareLinearIcon],svg[solar-compass-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarCompassSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassSquareOutlineIcon],svg[solar-compass-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m7.236 6.255c-.605.16-1.42.485-2.594.955c-.542.217-.643.268-.717.333a1 1 0 0 0-.07.07c-.064.073-.115.174-.332.716c-.47 1.174-.794 1.99-.955 2.594c-.167.63-.085.791-.058.83a.8.8 0 0 0 .198.198c.039.027.2.109.83-.058c.605-.16 1.42-.485 2.595-.955c.541-.217.642-.268.716-.333a1 1 0 0 0 .07-.07c.064-.073.115-.174.332-.716c.47-1.174.794-1.99.955-2.594c.167-.63.085-.791.058-.83a.8.8 0 0 0-.198-.198c-.039-.027-.2-.109-.83.058m-.384-1.45c.69-.182 1.436-.271 2.057.15c.234.16.437.363.596.597c.422.621.333 1.367.15 2.057c-.186.705-.546 1.605-.991 2.717l-.02.05l-.034.085c-.163.409-.307.771-.564 1.064a2 2 0 0 1-.208.208c-.293.257-.655.401-1.065.564l-.083.034l-.05.02c-1.113.445-2.013.805-2.718.992c-.69.182-1.436.271-2.057-.15a2.3 2.3 0 0 1-.596-.597c-.422-.621-.333-1.367-.15-2.057c.186-.705.546-1.605.991-2.717l.02-.05l.034-.085c.163-.409.307-.771.564-1.064q.097-.11.208-.208c.293-.257.655-.401 1.065-.564l.083-.034l.05-.02c1.113-.445 2.013-.805 2.718-.992" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2BoldIcon],svg[solar-condicioner-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 5.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828c.518.52 1.177.808 2.078.97c0-.832.004-1.531.08-2.092c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.075.56.08 1.26.08 2.091c.9-.16 1.56-.45 2.078-.969C22 16.657 22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5H8c-2.828 0-4.243 0-5.121.879M5.25 11.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.25 18.953c0-.938-.003-1.572-.067-2.048c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.066c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.063.475-.066 1.109-.066 2.047C7.645 19 8.712 19 10 19h4c1.288 0 2.355 0 3.25-.047"></svg:path>`,
})
export class SolarCondicioner2BoldIcon {
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
  selector: 'svg[solarCondicioner2BrokenIcon],svg[solar-condicioner-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 5c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5h-4"></svg:path><svg:path d="M18 18.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5m0-7h2m10 0h-6M6 9h6m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCondicioner2BrokenIcon {
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
  selector: 'svg[solarCondicioner2LinearIcon],svg[solar-condicioner-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19h-4c-3.771 0-5.657 0-6.828-1.172S2 14.771 2 11Z"></svg:path><svg:path stroke-linecap="round" d="M18 18.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5m0-7h12M6 9h12"></svg:path></svg:g>`,
})
export class SolarCondicioner2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2OutlineIcon],svg[solar-condicioner-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.945 4.25h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.111c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.11c0-1.368 0-2.47.117-3.338c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.808 5.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.354.354.817.59 1.548.736c.002-.483.01-.9.046-1.253c.048-.473.153-.913.417-1.309c.201-.3.459-.558.76-.758c.395-.265.835-.37 1.308-.418c.452-.046 1.011-.046 1.68-.046h5.077c.67 0 1.229 0 1.681.046c.473.048.913.153 1.309.418c.3.2.558.458.759.758c.264.396.369.836.417 1.309c.036.353.044.77.046 1.253c.73-.146 1.194-.382 1.548-.736c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103m12.442 12.35c-.001-.558-.006-.956-.038-1.27c-.036-.355-.1-.519-.173-.628a1.3 1.3 0 0 0-.344-.344c-.109-.073-.273-.137-.628-.173c-.367-.037-.85-.038-1.567-.038h-5c-.718 0-1.2 0-1.567.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.344c-.073.109-.137.273-.173.628c-.032.314-.037.712-.038 1.27c.867.046 1.925.047 3.25.047h4c1.325 0 2.383 0 3.25-.047M5.25 9A.75.75 0 0 1 6 8.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 9m0 2.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCondicioner2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerBoldIcon],svg[solar-condicioner-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267a1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267a1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m11 .001a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267a1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267a1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m-5.419.047a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774a2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774a2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208M6 2h12c1.886 0 2.828 0 3.414.586S22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121c-.53.531-1.258.742-2.374.825c-.005-.67-.02-1.402-.059-1.692c-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692c-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2m-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 15H8q-.675.001-1.247-.004c.004-.648.016-1.322.045-1.542c.044-.325.115-.427.172-.484s.159-.128.484-.172c.347-.046.818-.048 1.546-.048h6c.728 0 1.2.002 1.546.048c.325.044.427.115.484.172s.128.159.172.484c.03.22.04.894.045 1.542q-.573.005-1.247.004"></svg:path>`,
})
export class SolarCondicionerBoldIcon {
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
  selector: 'svg[solarCondicionerBrokenIcon],svg[solar-condicioner-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.429 2c2.414 0 3.62 0 4.442.655q.263.21.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923q-.28.352-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571c0-2.414 0-3.62.655-4.441q.21-.264.475-.475C3.95 2 5.157 2 7.57 2H12M7 17.5l-.307.46A1.32 1.32 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L12 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L17 22"></svg:path><svg:path d="M18 14.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265M6 8.5h2m10 0h-6M6 6h6m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCondicionerBrokenIcon {
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
  selector: 'svg[solarCondicionerLinearIcon],svg[solar-condicioner-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 7.571c0-2.414 0-3.62.655-4.441q.21-.264.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655q.263.21.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923q-.28.352-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571Z"></svg:path><svg:path stroke-linecap="round" d="m7 17.5l-.307.46A1.32 1.32 0 0 0 7 19.75c.56.42.695 1.206.306 1.79L7 22m5-4.5l-.307.46A1.32 1.32 0 0 0 12 19.75c.56.42.695 1.206.306 1.79L12 22m5-4.5l-.307.46A1.32 1.32 0 0 0 17 19.75c.56.42.695 1.206.306 1.79L17 22m1-7.5c0-.465 0-.697-.039-.89a2 2 0 0 0-1.571-1.572C16.197 12 15.964 12 15.5 12H9c-.932 0-1.398 0-1.766.152a2 2 0 0 0-1.082 1.083c-.122.295-.146.653-.151 1.265M6 8.5h12M6 6h12"></svg:path></svg:g>`,
})
export class SolarCondicionerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerOutlineIcon],svg[solar-condicioner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 8.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 5.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.525 1.25h8.95c1.168 0 2.109 0 2.858.087c.776.09 1.44.28 2.005.731q.33.263.594.594c.45.565.641 1.23.731 2.005c.087.749.087 1.69.087 2.858v.094c0 1.57 0 2.812-.114 3.797c-.117 1.01-.363 1.844-.922 2.546q-.334.418-.752.752c-.702.56-1.536.805-2.546.922c-.985.114-2.228.114-3.797.114H9.381c-1.57 0-2.812 0-3.797-.114c-1.01-.117-1.844-.363-2.546-.922a4.8 4.8 0 0 1-.752-.752c-.56-.702-.805-1.536-.922-2.546c-.114-.985-.114-2.228-.114-3.797v-.094c0-1.168 0-2.109.087-2.858c.09-.776.28-1.44.731-2.005a3.8 3.8 0 0 1 .594-.594c.565-.45 1.23-.641 2.005-.731c.749-.087 1.69-.087 2.858-.087M4.839 2.827c-.637.074-.986.21-1.242.414a2.3 2.3 0 0 0-.356.356c-.204.256-.34.605-.414 1.242c-.076.653-.077 1.507-.077 2.732c0 1.628.001 2.784.104 3.672c.101.872.292 1.39.605 1.783q.228.286.515.515c.311.248.702.42 1.285.53c.015-.414.06-.784.2-1.123a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.305-.021.676-.021 1.12-.021h6.6c.392 0 .695 0 .962.053a2.75 2.75 0 0 1 2.161 2.16c.036.181.047.378.051.607c.58-.11.968-.282 1.278-.529q.286-.228.515-.515c.313-.392.504-.91.605-1.783c.103-.888.104-2.044.104-3.672c0-1.225-.001-2.079-.077-2.732c-.074-.637-.21-.986-.414-1.242a2.3 2.3 0 0 0-.356-.356c-.256-.204-.605-.34-1.242-.414c-.653-.076-1.507-.077-2.732-.077H7.57c-1.225 0-2.079.001-2.732.077m12.41 11.392c-.002-.28-.007-.383-.023-.463a1.25 1.25 0 0 0-.982-.982c-.103-.02-.244-.024-.744-.024H9c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.436.078a1.25 1.25 0 0 0-.676.677c-.048.115-.078.282-.09.697c.724.03 1.595.031 2.674.031h5.142c1.08 0 1.954 0 2.678-.031" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.416 16.876a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774a2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774a2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208m5 0a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774a2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774a2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208m5 0a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774a2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774a2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208"></svg:path>`,
})
export class SolarCondicionerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiBoldIcon],svg[solar-confetti-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.186 2.139a.75.75 0 0 1 .249 1.031a.65.65 0 0 0 .095.8l.098.097c.588.589.805 1.454.565 2.25a.75.75 0 0 1-1.436-.433a.76.76 0 0 0-.19-.756L9.47 5.03a2.15 2.15 0 0 1-.314-2.642a.75.75 0 0 1 1.031-.25m7.503 2.583a.75.75 0 0 1 .587.883l-.144.72c-.198.99-.912 1.8-1.87 2.119c-.448.15-.782.527-.874.99l-.144.72a.75.75 0 1 1-1.471-.294l.144-.72c.198-.991.912-1.8 1.87-2.12c.448-.148.782-.526.875-.99l.143-.72a.75.75 0 0 1 .883-.588m3.72 8.839a1.01 1.01 0 0 0-1.078.17a2.51 2.51 0 0 1-2.924.295l-.213-.122a.75.75 0 0 1 .75-1.3l.213.123c.378.218.852.17 1.179-.119a2.51 2.51 0 0 1 2.673-.422l.292.127a.75.75 0 0 1-.601 1.375zM6.928 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m5.988 3.217a.536.536 0 1 0-.759.759a.536.536 0 0 0 .759-.76m4.241 3.001a.536.536 0 1 1 .759.758a.536.536 0 0 1-.759-.758m2.66 5.156a.536.536 0 1 0-.759.759a.536.536 0 0 0 .759-.759M7.472 20.241c-2.262.746-3.454 1.058-4.113.399c-.73-.73-.269-2.113.653-4.878l1.69-5.069c.632-1.896 1.003-3.01 1.622-3.462l-.005.026a26 26 0 0 0-.138.73a51 51 0 0 0-.31 1.939c-.216 1.533-.415 3.492-.312 5.057c.062.947.259 2.122.435 3.04a51 51 0 0 0 .312 1.503l.02.093zm5.567-1.855l.267-.089c2.298-.766 3.447-1.149 3.66-2.055c.215-.906-.642-1.763-2.355-3.476l-1.689-1.689l-.005.015l-.082.267c-.068.23-.16.55-.251.916c-.187.749-.357 1.622-.357 2.28s.17 1.531.357 2.28a21 21 0 0 0 .356 1.253l.005.017l.002.004zM8.8 7.504l.05-.245c.613.36 1.339 1.085 2.382 2.129l.503.502l-.212.64l-.01.028l-.025.08l-.09.291c-.073.246-.171.59-.27.983c-.192.769-.401 1.791-.401 2.643s.21 1.874.401 2.643a22 22 0 0 0 .385 1.354l.103.309l-2.715.905l-.107-.46l-.005-.022l-.02-.087l-.073-.33c-.06-.282-.143-.676-.23-1.126c-.173-.907-.355-2.006-.41-2.856c-.093-1.404.087-3.236.3-4.75a50 50 0 0 1 .434-2.582l.007-.037l.002-.01zm6.154-5.294c.151-.02.428-.03.647.19s.21.496.19.648a4 4 0 0 1-.114.479l-.036.126l.065.102c.087.139.181.288.239.42c.065.15.139.402 0 .666c-.137.26-.382.346-.537.381c-.142.032-.319.046-.487.06l-.127.01h-.011l-.092.112c-.11.133-.223.271-.33.37c-.114.103-.328.263-.625.223c-.307-.042-.467-.265-.544-.404a3.4 3.4 0 0 1-.188-.446l-.04-.11l-.11-.04a3.4 3.4 0 0 1-.445-.187c-.14-.078-.362-.237-.404-.544c-.04-.298.12-.511.223-.625c.098-.107.237-.22.37-.33l.112-.092v-.01l.01-.128c.013-.169.027-.346.06-.487c.035-.156.12-.4.38-.537c.265-.14.517-.065.666 0c.133.057.282.151.42.239l.103.064l.126-.035c.164-.047.335-.096.479-.115m7.186 8.282c.467-.467.64-1.096.384-1.65c-.195-.42-.587-.693-1.07-.796c-.102-.483-.376-.875-.796-1.07c-.554-.255-1.183-.083-1.65.385c-.27.27-.393.633-.45.957c-.06.33-.06.68-.041.986a7 7 0 0 0 .163 1.115c.045.18.192.35.372.394h.002l.027.007a5 5 0 0 0 .317.065c.205.036.489.079.798.098c.306.02.656.019.986-.04c.324-.057.687-.18.958-.45"></svg:path>`,
})
export class SolarConfettiBoldIcon {
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
  selector: 'svg[solarConfettiBrokenIcon],svg[solar-confetti-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m13.306 18.298l-5.069 1.689c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581m6.445 2.653l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 7.796l.212.123c.657.38 1.483.296 2.051-.207a1.76 1.76 0 0 1 1.876-.297L22 13M9.795 2.779A1.4 1.4 0 0 0 10 4.5l.098.098c.393.393.538.97.377 1.503"></svg:path><svg:path fill="currentColor" d="M6.928 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m5.229 3.217a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m5 3a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m1.901 5.156a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" d="M19.362 7.714c-.67.67-.19 2.614-.19 2.614s1.944.481 2.614-.19c.71-.71.308-1.64-.786-1.638c.003-1.094-.929-1.496-1.639-.786Z"></svg:path><svg:path stroke="currentColor" d="m15.188 3.417l-.027.098c-.03.106-.046.16-.038.212c.007.052.035.098.093.189l.052.082c.202.32.303.48.234.611s-.262.146-.648.176l-.1.008c-.11.009-.164.013-.212.038s-.083.068-.155.155l-.064.079c-.251.304-.376.456-.52.437c-.142-.02-.208-.198-.34-.555l-.034-.092c-.037-.102-.056-.152-.093-.19c-.037-.036-.087-.055-.189-.092l-.092-.034c-.357-.132-.535-.198-.555-.34c-.02-.144.133-.27.437-.52l.079-.065c.086-.07.13-.106.155-.154s.03-.103.038-.213l.008-.1c.03-.385.045-.578.176-.647c.13-.069.29.032.61.234l.083.052c.091.058.137.086.189.093s.106-.008.212-.038l.098-.027c.375-.107.563-.16.663-.06s.047.288-.06.663Z"></svg:path></svg:g>`,
})
export class SolarConfettiBrokenIcon {
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
  selector: 'svg[solarConfettiLinearIcon],svg[solar-confetti-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475s-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581m6.445 2.653l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 7.796l.212.123c.657.38 1.483.296 2.051-.207a1.76 1.76 0 0 1 1.876-.297L22 13M9.795 2.779A1.4 1.4 0 0 0 10 4.5l.097.098c.394.393.539.97.378 1.503"></svg:path><svg:path fill="currentColor" d="M6.928 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m5.229 3.217a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m5 3a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m1.901 5.156a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" d="M19.362 7.714c-.67.67-.19 2.614-.19 2.614s1.944.481 2.614-.19c.71-.71.308-1.64-.786-1.638c.003-1.094-.928-1.496-1.638-.786Z"></svg:path><svg:path stroke="currentColor" d="m15.188 3.417l-.027.098c-.03.106-.046.16-.039.212s.036.098.093.189l.053.082c.201.32.302.48.234.611c-.07.131-.262.146-.648.176l-.1.008c-.11.009-.164.013-.212.038s-.084.068-.155.155l-.065.079c-.25.304-.375.456-.518.437s-.21-.198-.341-.555l-.034-.092c-.038-.102-.056-.152-.093-.19c-.037-.036-.088-.055-.189-.092l-.092-.034c-.357-.132-.535-.198-.555-.34c-.02-.144.133-.27.437-.52l.079-.065c.086-.07.13-.106.155-.154s.03-.103.038-.213l.008-.1c.03-.385.045-.578.175-.647c.131-.069.291.032.611.234l.083.052c.09.058.136.086.189.093s.105-.008.212-.038l.097-.027c.376-.107.563-.16.664-.06c.1.1.047.288-.06.663Z"></svg:path></svg:g>`,
})
export class SolarConfettiLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiMinimalisticBoldIcon],svg[solar-confetti-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.039 18.386l.267-.088c2.298-.767 3.447-1.15 3.66-2.056c.215-.906-.642-1.763-2.355-3.475l-1.689-1.69l-.005.015l-.082.267c-.068.23-.16.55-.251.916c-.187.75-.357 1.622-.357 2.28s.17 1.531.357 2.28a21 21 0 0 0 .356 1.253l.005.017l.002.004zm-5.567 1.855c-2.262.746-3.454 1.058-4.113.399c-.73-.73-.269-2.113.653-4.878l1.69-5.069c.632-1.896 1.003-3.01 1.622-3.461l-.005.025a26 26 0 0 0-.138.73a51 51 0 0 0-.31 1.939c-.216 1.533-.415 3.492-.312 5.057c.062.948.259 2.123.435 3.04a51 51 0 0 0 .312 1.503l.02.093zM8.85 7.259l-.05.245v.003l-.003.009l-.007.037a25 25 0 0 0-.133.7a50 50 0 0 0-.301 1.881c-.213 1.515-.393 3.347-.3 4.751c.055.85.237 1.95.41 2.857a49 49 0 0 0 .303 1.455l.02.088l.005.022l.107.459l2.715-.905l-.103-.309a10 10 0 0 1-.115-.37c-.073-.247-.171-.59-.27-.983c-.192-.77-.401-1.792-.401-2.644s.21-1.874.401-2.643a22 22 0 0 1 .385-1.354l.01-.027l.212-.64l-.503-.503C10.19 8.344 9.463 7.618 8.85 7.259m2.076-4.899a.75.75 0 0 1 .25 1.031a.65.65 0 0 0 .094.8l.098.098c.589.588.806 1.453.565 2.25a.75.75 0 1 1-1.436-.434a.76.76 0 0 0-.19-.756l-.098-.098a2.15 2.15 0 0 1-.314-2.642a.75.75 0 0 1 1.031-.249m2.635 2.037c.201-.201.302-.302.418-.339a.5.5 0 0 1 .302 0c.116.037.217.138.418.339c.2.2.301.301.338.417a.5.5 0 0 1 0 .303c-.037.116-.137.216-.338.417s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.417a.5.5 0 0 1 0-.303c.036-.116.137-.216.338-.417M6.927 3.94a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76m13.048 3.107c-.139.053-.261.176-.507.421c-.245.246-.368.368-.421.507a.7.7 0 0 0 0 .503c.053.138.176.261.421.507c.246.245.368.368.507.421a.7.7 0 0 0 .503 0c.138-.053.261-.176.507-.421c.245-.246.368-.369.421-.507a.7.7 0 0 0 0-.503c-.053-.139-.176-.261-.421-.507c-.246-.245-.369-.368-.507-.421a.7.7 0 0 0-.503 0m-.917 8.266a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759M17.69 4.722a.75.75 0 0 1 .588.882l-.144.72a2.82 2.82 0 0 1-1.871 2.12a1.31 1.31 0 0 0-.874.99l-.144.72a.75.75 0 0 1-1.471-.295l.144-.72c.198-.99.912-1.8 1.87-2.119c.448-.15.782-.527.875-.99l.144-.72a.75.75 0 0 1 .882-.588m3.719 7.838a1.01 1.01 0 0 0-1.078.17a2.51 2.51 0 0 1-2.923.296l-.213-.123a.75.75 0 0 1 .75-1.299l.213.123c.377.218.852.17 1.178-.12a2.51 2.51 0 0 1 2.674-.422l.292.128a.75.75 0 0 1-.601 1.374zM17.5 9.742a.536.536 0 1 1 .759.758a.536.536 0 0 1-.759-.758"></svg:path>`,
})
export class SolarConfettiMinimalisticBoldIcon {
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
  selector: 'svg[solarConfettiMinimalisticBrokenIcon],svg[solar-confetti-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m13.306 18.298l-5.069 1.689c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581m6.445 2.653l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 6.796l.212.123a1.76 1.76 0 0 0 2.05-.207a1.76 1.76 0 0 1 1.877-.297L22 12M10.535 3a1.4 1.4 0 0 0 .205 1.721l.098.098c.393.393.538.97.377 1.503"></svg:path><svg:path fill="currentColor" d="M13.561 4.396c.201-.2.302-.301.418-.338a.5.5 0 0 1 .302 0c.116.037.217.137.418.338c.2.202.301.302.338.418a.5.5 0 0 1 0 .302c-.037.117-.137.217-.338.418s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.418a.5.5 0 0 1 0-.302c.036-.116.137-.216.338-.418m5.907 3.072c.246-.245.368-.368.507-.421a.7.7 0 0 1 .503 0c.138.053.261.176.507.421c.245.246.368.368.421.507a.7.7 0 0 1 0 .503c-.053.138-.176.261-.421.507c-.246.245-.369.368-.507.421a.7.7 0 0 1-.503 0c-.139-.053-.261-.176-.507-.421c-.245-.246-.368-.369-.421-.507a.7.7 0 0 1 0-.503c.053-.139.176-.261.421-.507M6.927 3.94a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76m12.131 11.373a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759M17.5 9.741a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76"></svg:path></svg:g>`,
})
export class SolarConfettiMinimalisticBrokenIcon {
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
  selector: 'svg[solarConfettiMinimalisticLinearIcon],svg[solar-confetti-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475s-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581m6.445 2.653l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.027 6.796l.213.123a1.76 1.76 0 0 0 2.05-.207a1.76 1.76 0 0 1 1.877-.297L22 12M10.535 3a1.4 1.4 0 0 0 .205 1.721l.098.098c.393.393.538.97.377 1.503"></svg:path><svg:path fill="currentColor" d="M13.561 4.396c.201-.2.302-.301.418-.338a.5.5 0 0 1 .302 0c.116.037.217.137.418.338c.2.202.301.302.338.418a.5.5 0 0 1 0 .302c-.037.117-.137.217-.338.418s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.418a.5.5 0 0 1 0-.302c.036-.116.137-.216.338-.418m5.907 3.072c.246-.245.368-.368.507-.421a.7.7 0 0 1 .503 0c.138.053.261.176.507.421c.245.246.368.368.421.507a.7.7 0 0 1 0 .503c-.053.138-.176.261-.421.507c-.246.245-.369.368-.507.421a.7.7 0 0 1-.503 0c-.139-.053-.261-.176-.507-.421c-.245-.246-.368-.369-.421-.507a.7.7 0 0 1 0-.503c.053-.139.176-.261.421-.507M6.927 3.94a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76m12.131 11.373a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759M17.5 9.741a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76"></svg:path></svg:g>`,
})
export class SolarConfettiMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiMinimalisticOutlineIcon],svg[solar-confetti-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.927 2.36a.75.75 0 0 1 .248 1.031a.65.65 0 0 0 .095.8l.098.098c.589.588.806 1.453.565 2.25a.75.75 0 1 1-1.436-.434a.76.76 0 0 0-.19-.756l-.097-.098a2.15 2.15 0 0 1-.315-2.642a.75.75 0 0 1 1.032-.249m6.763 2.362a.75.75 0 0 1 .588.882l-.144.72a2.82 2.82 0 0 1-1.871 2.12a1.31 1.31 0 0 0-.874.99l-.144.72a.75.75 0 0 1-1.471-.295l.144-.72c.198-.99.912-1.8 1.87-2.119c.448-.15.782-.527.875-.99l.144-.72a.75.75 0 0 1 .882-.588"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.719 8.813c-.82-.819-1.494-1.493-2.08-1.928c-.606-.45-1.279-.766-2.054-.583c-.776.183-1.236.768-1.577 1.44c-.33.651-.632 1.556-.998 2.655l-1.73 5.19c-.443 1.33-.803 2.409-.952 3.246c-.15.844-.135 1.701.501 2.337s1.493.651 2.337.501c.837-.149 1.916-.508 3.246-.952l5.19-1.73c1.099-.366 2.004-.668 2.655-.998c.673-.34 1.257-.801 1.44-1.576c.183-.776-.134-1.449-.583-2.055c-.434-.586-1.11-1.26-1.928-2.08zm-3.025-.76l.052.037c.486.36 1.082.954 1.956 1.828l.76.76l-.05.133c-.077.211-.178.512-.279.88a11 11 0 0 0-.406 2.864c0 1.063.206 2.08.405 2.82c.083.308.166.573.235.778l-2.635.879a44 44 0 0 1-.265-1.29c-.174-.907-.356-2.007-.411-2.857c-.092-1.403.087-3.235.3-4.75a50 50 0 0 1 .338-2.082m-1.74 1.3c-.158.431-.332.95-.54 1.578l-1.69 5.068c-.47 1.407-.792 2.381-.92 3.097c-.127.72-.008.92.086 1.014c.093.093.293.213 1.014.085c.59-.106 1.357-.344 2.398-.687l-.072-.324c-.062-.29-.147-.697-.236-1.16c-.176-.918-.373-2.093-.435-3.04c-.103-1.566.096-3.525.312-5.058q.04-.296.083-.572m5.836 8.326l.279-.093c1.172-.39 1.97-.659 2.51-.932c.53-.269.627-.453.658-.584c.03-.131.026-.34-.328-.816c-.36-.486-.954-1.083-1.828-1.957l-1.436-1.437q-.033.108-.066.228a9.5 9.5 0 0 0-.352 2.468c0 .618.085 1.235.198 1.778a12 12 0 0 0 .365 1.345" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.33 12.73a1.01 1.01 0 0 1 1.078-.17l.292.127a.75.75 0 1 0 .6-1.374l-.29-.128a2.51 2.51 0 0 0-2.675.423c-.326.289-.8.337-1.178.119l-.213-.123a.75.75 0 1 0-.75 1.3l.213.122c.937.54 2.114.422 2.924-.296m-6.352-8.672c-.116.037-.217.137-.418.338s-.302.302-.338.418a.5.5 0 0 0 0 .302c.036.117.137.217.338.418s.302.302.418.339a.5.5 0 0 0 .302 0c.116-.037.217-.138.418-.339c.201-.2.302-.301.338-.418a.5.5 0 0 0 0-.302c-.037-.116-.137-.217-.338-.418s-.302-.301-.418-.338a.5.5 0 0 0-.302 0m5.489 3.41c.246-.245.368-.368.507-.421a.7.7 0 0 1 .503 0c.139.053.261.176.507.421c.245.246.368.368.421.507a.7.7 0 0 1 0 .503c-.053.139-.176.261-.421.507c-.246.245-.368.368-.507.421a.7.7 0 0 1-.503 0c-.139-.053-.261-.176-.507-.421c-.245-.246-.368-.368-.421-.507a.7.7 0 0 1 0-.503c.053-.139.176-.261.421-.507M7.686 3.94a.536.536 0 1 0-.759.76a.536.536 0 0 0 .759-.76m11.372 11.374a.536.536 0 1 1 .759.758a.536.536 0 0 1-.759-.758m-.799-5.572a.536.536 0 1 0-.759.758a.536.536 0 0 0 .759-.758"></svg:path>`,
})
export class SolarConfettiMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiOutlineIcon],svg[solar-confetti-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.602 2.4c-.22-.22-.497-.21-.648-.19c-.144.02-.316.068-.48.115l-.125.035l-.103-.064a3.4 3.4 0 0 0-.42-.24c-.149-.064-.4-.138-.666.001c-.26.137-.345.381-.38.537a4 4 0 0 0-.06.487l-.01.127v.01l-.112.093c-.133.11-.272.223-.37.33c-.104.114-.264.327-.223.625c.042.307.265.466.404.544c.126.07.291.13.446.188l.109.04l.04.109c.057.154.118.32.188.446c.077.14.237.362.544.404c.297.04.51-.12.624-.224c.108-.098.221-.236.331-.37l.092-.111h.01l.128-.01c.168-.014.345-.028.487-.06c.155-.035.4-.12.537-.38c.139-.265.065-.518 0-.667a3.4 3.4 0 0 0-.24-.42l-.064-.102l.036-.126a3.5 3.5 0 0 0 .114-.479c.02-.152.03-.428-.19-.648m-.9.9l-.078.022l-.02.006a1 1 0 0 1-.397.047a.9.9 0 0 1-.37-.155l-.018-.011l-.1-.064l-.011.141l-.002.022a1 1 0 0 1-.092.384a1 1 0 0 1-.263.294L13.334 4l-.09.075l.076.029l.02.006c.071.026.23.082.35.202s.176.278.201.35l.007.02l.029.077l.075-.091l.013-.017c.051-.063.151-.188.295-.263a1 1 0 0 1 .384-.092l.022-.002l.14-.01l-.063-.102l-.011-.017a.9.9 0 0 1-.155-.37a1 1 0 0 1 .047-.397l.006-.02z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.435 3.17a.75.75 0 1 0-1.28-.782A2.15 2.15 0 0 0 9.47 5.03l.097.098a.76.76 0 0 1 .19.756a.75.75 0 0 0 1.436.434a2.26 2.26 0 0 0-.565-2.25l-.098-.098a.65.65 0 0 1-.095-.8m-2.749.77a.536.536 0 1 0-.758.76a.536.536 0 0 0 .758-.76m10.592 1.664a.75.75 0 0 0-1.471-.294l-.144.72c-.093.463-.427.84-.874.99a2.82 2.82 0 0 0-1.871 2.119l-.144.72a.75.75 0 0 0 1.47.294l.145-.72c.092-.463.426-.84.874-.99a2.82 2.82 0 0 0 1.87-2.12z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.524 8.842c.255.554.083 1.183-.384 1.65c-.271.27-.634.393-.957.451c-.331.059-.68.06-.987.04a7 7 0 0 1-1.045-.147l-.046-.01l-.024-.006l-.02-.005l-.006-.001h-.002l.12-.486l-.12.485a.5.5 0 0 1-.366-.365v-.003l-.002-.006l-.005-.02a5 5 0 0 1-.064-.317a7 7 0 0 1-.1-.798a4.2 4.2 0 0 1 .041-.986c.058-.324.18-.687.451-.958c.467-.467 1.096-.64 1.65-.383c.42.194.694.586.796 1.069c.483.103.875.376 1.07.796m-2.928 1.062c.178.031.413.065.664.081c.263.017.525.013.747-.027c.23-.04.361-.109.425-.173c.243-.243.225-.435.184-.524c-.045-.096-.204-.262-.614-.261a.5.5 0 0 1-.502-.502c.002-.41-.165-.57-.261-.614c-.089-.04-.281-.06-.524.184c-.064.064-.133.195-.173.425a3.2 3.2 0 0 0-.027.747c.016.25.05.486.081.664" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.33 13.73a1.01 1.01 0 0 1 1.079-.17l.291.127a.75.75 0 0 0 .601-1.375l-.291-.127a2.51 2.51 0 0 0-2.674.422c-.326.29-.801.338-1.179.12l-.212-.123a.75.75 0 0 0-.75 1.299l.212.122a2.51 2.51 0 0 0 2.924-.296m-1.273 1.584a.537.537 0 1 1 .759.76a.537.537 0 0 1-.759-.76m-6.142-8.156a.536.536 0 1 0-.759.759a.536.536 0 0 0 .759-.76m4.241 3.001a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.76"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.639 6.885c.586.434 1.26 1.11 2.08 1.928l3.467 3.467c.819.82 1.494 1.494 1.928 2.08c.45.606.766 1.279.583 2.054c-.183.776-.767 1.236-1.44 1.577c-.651.33-1.556.632-2.654.998l-5.19 1.73c-1.33.443-2.41.803-3.247.952c-.844.15-1.7.135-2.337-.501c-.636-.636-.651-1.493-.501-2.338c.149-.836.509-1.916.952-3.246l1.73-5.19c.366-1.098.668-2.003.998-2.654c.34-.673.801-1.257 1.577-1.44s1.448.134 2.054.583M8.746 8.09l-.052-.038l-.036.2a50 50 0 0 0-.302 1.882c-.213 1.515-.392 3.347-.3 4.751c.055.85.237 1.95.411 2.857a49 49 0 0 0 .265 1.29l2.635-.88c-.07-.205-.152-.47-.235-.777c-.199-.74-.405-1.758-.405-2.82a11 11 0 0 1 .406-2.864a11 11 0 0 1 .329-1.014l-.76-.76c-.874-.873-1.47-1.467-1.956-1.827m-2.333 2.84a58 58 0 0 1 .541-1.577l-.083.573c-.216 1.533-.415 3.492-.312 5.057c.062.948.259 2.123.435 3.04a51 51 0 0 0 .308 1.484c-1.041.344-1.808.582-2.398.687c-.721.128-.92.009-1.014-.085s-.213-.293-.085-1.014c.127-.715.45-1.69.919-3.096zm6.656 6.656l-.279.093a12 12 0 0 1-.365-1.345a9 9 0 0 1-.198-1.779a9.5 9.5 0 0 1 .418-2.695l1.436 1.437c.874.874 1.468 1.47 1.828 1.956c.354.478.359.686.328.817s-.128.315-.658.583c-.54.274-1.338.542-2.51.933" clip-rule="evenodd"></svg:path>`,
})
export class SolarConfettiOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleBoldIcon],svg[solar-confounded-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarConfoundedCircleBoldIcon {
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
  selector: 'svg[solarConfoundedCircleBrokenIcon],svg[solar-confounded-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m-1 7l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarConfoundedCircleBrokenIcon {
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
  selector: 'svg[solarConfoundedCircleLinearIcon],svg[solar-confounded-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"></svg:path></svg:g>`,
})
export class SolarConfoundedCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleOutlineIcon],svg[solar-confounded-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12"></svg:path><svg:path d="M7.4 8.55a.75.75 0 0 1 1.05-.15l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9l-1.2-.9a.75.75 0 0 1-.15-1.05m9.2 0a.75.75 0 0 0-1.05-.15l-2 1.5a.75.75 0 0 0 0 1.2l2 1.5a.75.75 0 1 0 .9-1.2l-1.2-.9l1.2-.9a.75.75 0 0 0 .15-1.05m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47l-.47.47a.75.75 0 0 1-1.06 0l-.47-.47l-.47.47a.75.75 0 0 1-1.06 0l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06"></svg:path></svg:g>`,
})
export class SolarConfoundedCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedSquareBoldIcon],svg[solar-confounded-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarConfoundedSquareBoldIcon {
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
  selector: 'svg[solarConfoundedSquareBrokenIcon],svg[solar-confounded-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m-1 7l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarConfoundedSquareBrokenIcon {
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
  selector: 'svg[solarConfoundedSquareLinearIcon],svg[solar-confounded-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"></svg:path></svg:g>`,
})
export class SolarConfoundedSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedSquareOutlineIcon],svg[solar-confounded-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M7.4 8.55a.75.75 0 0 1 1.05-.15l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9l-1.2-.9a.75.75 0 0 1-.15-1.05m9.2 0a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-8.13 6.92l1-1a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 0 1-1.06 0l-.47-.47l-.47.47a.75.75 0 0 1-1.06 0l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarConfoundedSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyBoldIcon],svg[solar-copy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"></svg:path><svg:path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"></svg:path>`,
})
export class SolarCopyBoldIcon {
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
  selector: 'svg[solarCopyBrokenIcon],svg[solar-copy-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"></svg:path><svg:path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6"></svg:path></svg:g>`,
})
export class SolarCopyBrokenIcon {
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
  selector: 'svg[solarCopyLinearIcon],svg[solar-copy-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"></svg:path></svg:g>`,
})
export class SolarCopyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyOutlineIcon],svg[solar-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.75 3.75 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.75 3.75 0 0 0 15 1.25m2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S4.025 4.705 3.89 5.71c-.138 1.029-.14 2.383-.14 4.29v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021M7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399" clip-rule="evenodd"></svg:path>`,
})
export class SolarCopyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyrightBoldIcon],svg[solar-copyright-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m.286-13.25c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278" clip-rule="evenodd"></svg:path>`,
})
export class SolarCopyrightBoldIcon {
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
  selector: 'svg[solarCopyrightBrokenIcon],svg[solar-copyright-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 15.667a4.5 4.5 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCopyrightBrokenIcon {
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
  selector: 'svg[solarCopyrightLinearIcon],svg[solar-copyright-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M14 15.667a4.5 4.5 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path></svg:g>`,
})
export class SolarCopyrightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyrightOutlineIcon],svg[solar-copyright-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5"></svg:path><svg:path d="M12.286 8.75c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278"></svg:path></svg:g>`,
})
export class SolarCopyrightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCorkscrewBoldIcon],svg[solar-corkscrew-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.357 8.383a3.65 3.65 0 0 0-3.117 3.078l-1.32-1.32l-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-4.618-3.218l4.944 7.094c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884l.65 1.37c.333.705.19 1.543-.362 2.095L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.552-2.553a.34.34 0 0 0 .067-.39l-.95-2.005c-.556-1.176.771-2.348 1.87-1.65l5.855 3.718l-5.016-7.197c-.828-1.188.618-2.634 1.807-1.806l4.75 3.31l-.137-.221a1.845 1.845 0 0 1 .267-2.272l1.324-1.324l-3.341-3.341a2.19 2.19 0 1 1 3.097-3.098z"></svg:path><svg:path fill="currentColor" d="M21.359 13.482c.419-.419.633-.966.64-1.515a2.15 2.15 0 1 0-3.174 1.923a2.19 2.19 0 0 0 2.534-.408"></svg:path>`,
})
export class SolarCorkscrewBoldIcon {
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
  selector: 'svg[solarCorkscrewBrokenIcon],svg[solar-corkscrew-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.261 13.482l-.53.53zM10.518 5.74l.53-.53zm3.097-3.098l-.53.53l.001.002zm7.743 7.744l-.532.528l.002.002zM1.47 21.47a.75.75 0 1 0 1.06 1.06zm3.082-2.022l-.53-.53zm.215-1.243l-.678.321zm-.95-2.004l-.677.321zm.79-.696l-.403.633zm6.706 4.259l.402-.633zm.743-.775l-.615.428zm-5.593-8.024l-.615.428zm.763-.763l.429-.615zm5.548 3.867l-.43.615zm.779-.736l-.639.393zm-.646-1.05l.639-.393zm2.013-2.142a.75.75 0 1 0-1.06-1.06zm-6.96 7.493l-.402.633zm.684-2.229a.75.75 0 0 0 1.231-.857zm3.338 2.166a.75.75 0 1 0-1.23.858zm-3.423-3.6l.615-.428zm9.973-7.5a.75.75 0 0 0-1.064 1.057zm-4.06-1.921a.75.75 0 1 0 1.057-1.064zM9.986 6.27l7.744 7.743l1.06-1.061l-7.743-7.743zm7.744 7.743a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0zM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157zM2.53 22.53l2.553-2.552l-1.061-1.06L1.47 21.47zm2.915-4.646l-.95-2.004l-1.355.642l.95 2.004zm1.352-7.066l5.548 3.866l.857-1.23l-5.547-3.867zm7.395 2.122l-.646-1.05l-1.278.786l.646 1.05zm-.597-1.475l1.325-1.324l-1.06-1.06l-1.325 1.324zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.271zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.22.22 0 0 1-.022-.144a.2.2 0 0 1 .056-.11a.2.2 0 0 1 .112-.049a.22.22 0 0 1 .142.03zm-5.266-4.148a.22.22 0 0 1 .03.146a.2.2 0 0 1-.053.113a.2.2 0 0 1-.113.052a.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806zm3.832 9.861c1.197.76 2.57-.675 1.76-1.837l-1.23.857a.22.22 0 0 1-.03-.143a.2.2 0 0 1 .05-.112a.2.2 0 0 1 .11-.055a.22.22 0 0 1 .144.024zM4.496 15.88a.21.21 0 0 1-.05.239a.21.21 0 0 1-.243.02l.805-1.267c-1.098-.698-2.425.475-1.868 1.65zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.34.34 0 0 1-.067.391zm-.879-3.84l3.354 2.13L8.362 17l-3.354-2.13zm3.354 2.13l3.353 2.129l.804-1.266L8.362 17zm5.113.292l-.689-.989l-1.23.858l.689.988zm-2.796-4.012l-.7-1.005l-1.231.857l.7 1.005zm-.7-1.005l-2.096-3.007l-1.23.857L7.943 14.4zM21.89 9.857l-3.359-3.385l-1.064 1.056l3.358 3.385zm-6.362-6.37L14.144 2.11l-1.058 1.063l1.385 1.377z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M22 12a2.15 2.15 0 1 1-4.3 0a2.15 2.15 0 0 1 4.3 0Z"></svg:path></svg:g>`,
})
export class SolarCorkscrewBrokenIcon {
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
  selector: 'svg[solarCorkscrewLinearIcon],svg[solar-corkscrew-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.261 13.482l.53-.53zM10.518 5.74l-.53.53zm3.097-3.098l-.53.53zm7.743 7.744l.53-.53zM1.47 21.47a.75.75 0 1 0 1.06 1.06zm3.082-2.022l-.53-.53zm.215-1.243l-.678.321zm-.95-2.004l-.677.321zm.79-.696l-.403.633zm6.706 4.259l.402-.633zm.743-.775l-.615.428zm-5.593-8.024l-.615.428zm.763-.763l.429-.615zm5.548 3.867l-.43.615zm.779-.736l-.639.393zm-.646-1.05l.639-.393zm2.013-2.142a.75.75 0 1 0-1.06-1.06zm6.969-.286L14.145 2.11l-1.06 1.06l7.743 7.744zM9.987 6.269l7.744 7.744l1.06-1.061l-7.743-7.743zm7.744 7.744a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0zM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157zM2.53 22.53l2.553-2.552l-1.061-1.06L1.47 21.47zm2.915-4.646l-.95-2.004l-1.355.642l.95 2.004zm-1.241-1.746l6.707 4.259l.804-1.266l-6.707-4.26zm8.467 2.422L7.08 10.536l-1.23.857l5.592 8.024zm-5.874-7.742l5.548 3.866l.857-1.23l-5.547-3.867zm7.395 2.122l-.646-1.05l-1.278.786l.646 1.05zm-.597-1.475l1.325-1.324l-1.06-1.06l-1.325 1.324zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.271zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.22.22 0 0 1-.022-.144a.2.2 0 0 1 .056-.11a.2.2 0 0 1 .112-.049a.22.22 0 0 1 .142.03zm-5.266-4.148a.22.22 0 0 1 .03.146a.2.2 0 0 1-.053.113a.2.2 0 0 1-.113.052a.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806zm3.832 9.861c1.197.76 2.57-.675 1.76-1.837l-1.23.857a.22.22 0 0 1-.03-.143a.2.2 0 0 1 .05-.112a.2.2 0 0 1 .11-.055a.22.22 0 0 1 .144.024zM4.496 15.88a.21.21 0 0 1-.05.239a.21.21 0 0 1-.243.02l.805-1.267c-1.098-.698-2.425.475-1.868 1.65zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.34.34 0 0 1-.067.391z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M22 12a2.15 2.15 0 1 1-4.3 0a2.15 2.15 0 0 1 4.3 0Z"></svg:path></svg:g>`,
})
export class SolarCorkscrewLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCorkscrewOutlineIcon],svg[solar-corkscrew-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.987 2.111a2.94 2.94 0 0 1 4.158 0l7.744 7.744A2.93 2.93 0 0 1 22.75 12a2.9 2.9 0 0 1-4.268 2.558a3 3 0 0 1-.751-.545l-3.342-3.342l-.793.794a.345.345 0 0 0-.05.425l.646 1.05c.737 1.198-.693 2.549-1.847 1.744l-4.618-3.218l4.944 7.094c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884l.65 1.371c.333.704.19 1.542-.362 2.094L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.552-2.553a.34.34 0 0 0 .067-.39l-.95-2.005l.662-.313l-.661.313c-.557-1.175.77-2.348 1.868-1.65l5.856 3.718l-5.016-7.197c-.828-1.188.618-2.634 1.807-1.806l4.75 3.31l-.137-.22a1.845 1.845 0 0 1 .267-2.272l.794-.794l-3.342-3.342a2.94 2.94 0 0 1 0-4.158M14.92 9.08l2.137 2.137a2.9 2.9 0 0 1 2.052-2.021l-6.024-6.024a1.44 1.44 0 0 0-2.037 2.037zm6.33 2.883a1.4 1.4 0 1 0-2.076 1.263a1.44 1.44 0 0 0 2.077-1.263M4.205 16.138" clip-rule="evenodd"></svg:path>`,
})
export class SolarCorkscrewOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticBoldIcon],svg[solar-cosmetic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0zm1-2h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8 0a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m4.75 7.21a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z"></svg:path>`,
})
export class SolarCosmeticBoldIcon {
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
  selector: 'svg[solarCosmeticBrokenIcon],svg[solar-cosmetic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 16a5.5 5.5 0 1 1 3.858-1.58"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 20v-4m0 4h3m-3 0h-3"></svg:path><svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm.75 6a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM2 11.75h6v-1.5H2zM2.75 17v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17zm0-6v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"></svg:path></svg:g>`,
})
export class SolarCosmeticBrokenIcon {
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
  selector: 'svg[solarCosmeticLinearIcon],svg[solar-cosmetic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M11 10.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 20v-4m0 4h3m-3 0h-3"></svg:path><svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm-6 .75h6v-1.5H2zM7.25 11v6h1.5v-6zm-4.5 6v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"></svg:path></svg:g>`,
})
export class SolarCosmeticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticOutlineIcon],svg[solar-cosmetic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 5.618a1.75 1.75 0 0 0-2.533-1.565l-2 1a1.75 1.75 0 0 0-.967 1.565v3.632H2a.75.75 0 0 0-.75.75v6a3.75 3.75 0 1 0 7.5 0v-6a.75.75 0 0 0-.75-.75h-.25zm-5 6.132h4.5V17a2.25 2.25 0 1 1-4.5 0zm3.5-1.5V5.618a.25.25 0 0 0-.362-.224l-2 1a.25.25 0 0 0-.138.224v3.632zm10.25-6a6.25 6.25 0 0 0-.75 12.455v2.545H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.545A6.251 6.251 0 0 0 16.5 4.25m0 11a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCosmeticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseDownBoldIcon],svg[solar-course-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.469 6.47a.75.75 0 0 1 1.06-.001l3.919 3.902c.514.511.847.84 1.124 1.052c.26.197.382.22.462.22s.203-.022.463-.22c.278-.21.61-.54 1.125-1.051l.274-.273c.47-.466.873-.868 1.24-1.146c.394-.299.83-.525 1.369-.525c.538 0 .975.226 1.369.524c.367.279.771.68 1.24 1.147l6.136 6.098v-3.743a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-.75.75h-5.582a.75.75 0 1 1 0-1.5h3.764l-6.09-6.053c-.514-.51-.847-.84-1.125-1.05c-.26-.197-.381-.219-.462-.219c-.08 0-.202.022-.462.22c-.277.21-.61.539-1.124 1.05l-.274.272c-.47.467-.874.87-1.241 1.148c-.394.299-.831.525-1.37.525s-.976-.227-1.37-.526c-.367-.279-.77-.682-1.24-1.149l-.035-.034L1.471 7.53a.75.75 0 0 1-.002-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCourseDownBoldIcon {
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
  selector: 'svg[solarCourseDownBrokenIcon],svg[solar-course-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.62 10.665c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582M22 18l-4.5-4.5"></svg:path>`,
})
export class SolarCourseDownBrokenIcon {
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
  selector: 'svg[solarCourseDownLinearIcon],svg[solar-course-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 18l-7.38-7.335c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582"></svg:path>`,
})
export class SolarCourseDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseDownOutlineIcon],svg[solar-course-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.469 6.47a.75.75 0 0 1 1.06-.001l3.919 3.902c.514.511.847.84 1.124 1.052c.26.197.382.22.462.22s.203-.022.463-.22c.278-.21.61-.54 1.125-1.051l.274-.273c.47-.466.873-.868 1.24-1.146c.394-.299.83-.525 1.369-.525c.538 0 .975.226 1.369.524c.367.279.771.68 1.24 1.147l6.136 6.098v-3.743a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-.75.75h-5.582a.75.75 0 1 1 0-1.5h3.764l-6.09-6.053c-.514-.51-.847-.84-1.125-1.05c-.26-.197-.381-.219-.462-.219c-.08 0-.202.022-.462.22c-.277.21-.61.539-1.124 1.05l-.274.272c-.47.467-.874.87-1.241 1.148c-.394.299-.831.525-1.37.525s-.976-.227-1.37-.526c-.367-.279-.77-.682-1.24-1.149l-.035-.034L1.471 7.53a.75.75 0 0 1-.002-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCourseDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseUpBoldIcon],svg[solar-course-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.668 7a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V8.803L15.114 14.9c-.469.466-.873.868-1.24 1.147c-.394.298-.83.524-1.369.524c-.538 0-.975-.226-1.369-.525c-.367-.278-.77-.68-1.24-1.146l-.274-.273c-.514-.511-.847-.84-1.125-1.051c-.26-.198-.382-.22-.463-.22c-.08 0-.202.023-.462.22c-.277.211-.61.54-1.124 1.052L2.529 18.53a.75.75 0 0 1-1.058-1.062l3.953-3.938c.47-.466.873-.869 1.24-1.148c.394-.3.831-.525 1.37-.526c.539 0 .976.226 1.37.525c.367.279.771.681 1.24 1.148l.275.272c.514.511.847.84 1.124 1.05c.26.198.382.22.462.22s.202-.022.462-.22c.278-.21.61-.539 1.125-1.05l6.09-6.052h-3.764a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCourseUpBoldIcon {
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
  selector: 'svg[solarCourseUpBrokenIcon],svg[solar-course-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7v5.546M22 7h-5.582M22 7l-4.5 4.5m-2.88 2.835c-.997.991-1.496 1.487-2.115 1.487s-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18"></svg:path>`,
})
export class SolarCourseUpBrokenIcon {
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
  selector: 'svg[solarCourseUpLinearIcon],svg[solar-course-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 7l-7.38 7.335c-.997.991-1.496 1.487-2.115 1.487s-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18M22 7v5.546M22 7h-5.582"></svg:path>`,
})
export class SolarCourseUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseUpOutlineIcon],svg[solar-course-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.668 7a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V8.803L15.114 14.9c-.469.466-.873.868-1.24 1.147c-.394.298-.83.524-1.369.524c-.538 0-.975-.226-1.369-.525c-.367-.278-.77-.68-1.24-1.146l-.274-.273c-.514-.511-.847-.84-1.125-1.051c-.26-.198-.382-.22-.463-.22c-.08 0-.202.023-.462.22c-.277.211-.61.54-1.124 1.052L2.529 18.53a.75.75 0 0 1-1.058-1.062l3.953-3.938c.47-.466.873-.869 1.24-1.148c.394-.3.831-.525 1.37-.526c.539 0 .976.226 1.37.525c.367.279.771.681 1.24 1.148l.275.272c.514.511.847.84 1.124 1.05c.26.198.382.22.462.22s.202-.022.462-.22c.278-.21.61-.539 1.125-1.05l6.09-6.052h-3.764a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCourseUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoldIcon],svg[solar-cpu-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCpuBoldIcon {
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
  selector: 'svg[solarCpuBoltBoldIcon],svg[solar-cpu-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.632 9.022c-.303.04-.398.106-.45.16c-.054.052-.12.147-.16.45c-.044.322-.045.76-.045 1.438v1.86c0 .678.001 1.116.045 1.438c.04.303.106.398.16.45c.052.054.147.12.45.16c.322.044.76.045 1.438.045h1.86c.678 0 1.116-.001 1.438-.045c.303-.04.398-.106.45-.16c.054-.052.12-.147.16-.45c.044-.322.045-.76.045-1.438v-1.86c0-.678-.001-1.116-.045-1.438c-.04-.303-.106-.398-.16-.45c-.052-.054-.147-.12-.45-.16c-.322-.044-.76-.045-1.438-.045h-1.86c-.678 0-1.116.001-1.438.045m3.334 1.523a.698.698 0 0 0-1.135-.81l-1.329 1.86a.698.698 0 0 0 .568 1.103h.505l-.541.757a.698.698 0 0 0 1.135.811l1.329-1.86a.698.698 0 0 0-.568-1.104h-.505z"></svg:path><svg:path d="M12.698 2.698a.698.698 0 0 0-1.396 0v2.79q-.764 0-1.395.017V2.698a.698.698 0 0 0-1.395 0v2.79q0 .056.008.108c-.936.115-1.585.353-2.078.846s-.731 1.142-.846 2.078a1 1 0 0 0-.108-.008h-2.79a.698.698 0 0 0 0 1.395h2.807q-.016.63-.016 1.395H2.698a.698.698 0 0 0 0 1.396h2.79q0 .764.017 1.395H2.698a.698.698 0 0 0 0 1.395h2.79a1 1 0 0 0 .108-.008c.115.936.353 1.585.846 2.078s1.142.731 2.078.846a1 1 0 0 0-.008.108v2.79a.698.698 0 0 0 1.395 0v-2.807q.63.016 1.395.016v2.791a.698.698 0 0 0 1.396 0v-2.79q.764 0 1.395-.017v2.807a.698.698 0 0 0 1.395 0v-2.79a1 1 0 0 0-.008-.108c.936-.115 1.585-.353 2.078-.846s.731-1.142.846-2.078q.053.009.108.008h2.79a.698.698 0 0 0 0-1.395h-2.807q.016-.63.016-1.395h2.791a.698.698 0 0 0 0-1.396h-2.79q0-.764-.017-1.395h2.807a.698.698 0 0 0 0-1.395h-2.79a1 1 0 0 0-.108.008c-.115-.936-.353-1.585-.846-2.078s-1.142-.731-2.078-.846a1 1 0 0 0 .008-.108v-2.79a.698.698 0 0 0-1.395 0v2.807a56 56 0 0 0-1.395-.016zm-3.252 4.94c.426-.057.96-.057 1.578-.057h1.952c.619 0 1.151 0 1.578.058c.458.061.896.2 1.252.555c.355.356.494.794.555 1.252c.058.426.058.96.058 1.578v1.952c0 .619 0 1.151-.058 1.578c-.061.458-.2.896-.555 1.252c-.356.355-.794.494-1.252.555c-.427.058-.96.058-1.578.058h-1.952c-.619 0-1.152 0-1.578-.058c-.458-.061-.896-.2-1.252-.555c-.355-.356-.494-.794-.555-1.252c-.058-.427-.058-.96-.058-1.578v-1.952c0-.619 0-1.152.058-1.578c.061-.458.2-.896.555-1.252c.356-.355.794-.494 1.252-.555"></svg:path></svg:g>`,
})
export class SolarCpuBoltBoldIcon {
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
  selector: 'svg[solarCpuBoltBrokenIcon],svg[solar-cpu-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.429 10L11 12h2l-1.429 2"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2m2 10c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"></svg:path></svg:g>`,
})
export class SolarCpuBoltBrokenIcon {
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
  selector: 'svg[solarCpuBoltLinearIcon],svg[solar-cpu-bolt-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.429 10L11 12h2l-1.429 2"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"></svg:path></svg:g>`,
})
export class SolarCpuBoltLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoltOutlineIcon],svg[solar-cpu-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.25a.75.75 0 0 1 .75.75v1.263a86 86 0 0 1 1.5-.013V2a.75.75 0 0 1 1.5 0v1.25q.802 0 1.5.013V2a.75.75 0 0 1 1.5 0v1.327q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.046.35.076.739H22a.75.75 0 0 1 0 1.5h-1.263q.013.698.013 1.5H22a.75.75 0 0 1 0 1.5h-1.25q0 .802-.013 1.5H22a.75.75 0 0 1 0 1.5h-1.327q-.03.39-.076.739c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238q-.35.046-.739.076V22a.75.75 0 0 1-1.5 0v-1.263q-.698.013-1.5.013V22a.75.75 0 0 1-1.5 0v-1.25q-.802 0-1.5-.013V22a.75.75 0 0 1-1.5 0v-1.327q-.39-.03-.739-.076c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87q-.046-.35-.076-.739H2a.75.75 0 0 1 0-1.5h1.263a86 86 0 0 1-.013-1.5H2a.75.75 0 0 1 0-1.5h1.25q0-.802.013-1.5H2a.75.75 0 0 1 0-1.5h1.327q.03-.39.076-.739c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2A.75.75 0 0 1 9 1.25M7.71 4.89c-1.005.135-1.585.389-2.008.812S5.025 6.705 4.89 7.71c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14m2.24 1.36h4.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v4.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.697.062H9.951c-.665 0-1.238 0-1.697-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697V9.951c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062M8.455 7.798c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h4c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-4c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-4c-.728 0-1.2.002-1.546.048m4.41 1.592a.75.75 0 0 1 .175 1.046l-.582.814H13a.75.75 0 0 1 .61 1.186l-1.428 2a.75.75 0 1 1-1.22-.872l.58-.814H11a.75.75 0 0 1-.61-1.186l1.428-2a.75.75 0 0 1 1.047-.174" clip-rule="evenodd"></svg:path>`,
})
export class SolarCpuBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBrokenIcon],svg[solar-cpu-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"></svg:path></svg:g>`,
})
export class SolarCpuBrokenIcon {
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
  selector: 'svg[solarCpuLinearIcon],svg[solar-cpu-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14z"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"></svg:path></svg:g>`,
})
export class SolarCpuLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuOutlineIcon],svg[solar-cpu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.25a.75.75 0 0 1 .75.75v1.263a86 86 0 0 1 1.5-.013V2a.75.75 0 0 1 1.5 0v1.25q.802 0 1.5.013V2a.75.75 0 0 1 1.5 0v1.327q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.046.35.076.739H22a.75.75 0 0 1 0 1.5h-1.263q.013.698.013 1.5H22a.75.75 0 0 1 0 1.5h-1.25q0 .802-.013 1.5H22a.75.75 0 0 1 0 1.5h-1.327q-.03.39-.076.739c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238q-.35.046-.739.076V22a.75.75 0 0 1-1.5 0v-1.263q-.698.013-1.5.013V22a.75.75 0 0 1-1.5 0v-1.25q-.802 0-1.5-.013V22a.75.75 0 0 1-1.5 0v-1.327q-.39-.03-.739-.076c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87q-.046-.35-.076-.739H2a.75.75 0 0 1 0-1.5h1.263a86 86 0 0 1-.013-1.5H2a.75.75 0 0 1 0-1.5h1.25q0-.802.013-1.5H2a.75.75 0 0 1 0-1.5h1.327q.03-.39.076-.739c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2A.75.75 0 0 1 9 1.25M7.71 4.89c-1.005.135-1.585.389-2.008.812S5.025 6.705 4.89 7.71c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14m2.24 1.36h4.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v4.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.697.062H9.951c-.665 0-1.238 0-1.697-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697V9.951c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062M8.455 7.798c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h4c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-4c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-4c-.728 0-1.2.002-1.546.048" clip-rule="evenodd"></svg:path>`,
})
export class SolarCpuOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCreativeCommonsBoldIcon],svg[solar-creative-commons-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m11.75 0c0-1.747 1.533-3.25 3.536-3.25c.511 0 .995.1 1.43.277a.75.75 0 0 0 .567-1.389a5.3 5.3 0 0 0-1.997-.388c-2.732 0-5.036 2.079-5.036 4.75s2.304 4.75 5.036 4.75a5.3 5.3 0 0 0 1.997-.388a.75.75 0 1 0-.566-1.39c-.436.178-.92.278-1.431.278c-2.003 0-3.536-1.503-3.536-3.25M9.286 8.75C7.283 8.75 5.75 10.253 5.75 12s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278" clip-rule="evenodd"></svg:path>`,
})
export class SolarCreativeCommonsBoldIcon {
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
  selector: 'svg[solarCreativeCommonsBrokenIcon],svg[solar-creative-commons-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 15.667A4.5 4.5 0 0 1 9.286 16C6.919 16 5 14.21 5 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333m8 7.334a4.5 4.5 0 0 1-1.714.333C14.919 16 13 14.21 13 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCreativeCommonsBrokenIcon {
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
  selector: 'svg[solarCreativeCommonsLinearIcon],svg[solar-creative-commons-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M11 15.667A4.5 4.5 0 0 1 9.286 16C6.919 16 5 14.21 5 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333m8 7.334a4.5 4.5 0 0 1-1.714.333C14.919 16 13 14.21 13 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path></svg:g>`,
})
export class SolarCreativeCommonsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCreativeCommonsOutlineIcon],svg[solar-creative-commons-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M9.286 8.75C7.283 8.75 5.75 10.253 5.75 12s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278m8 0c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278"></svg:path></svg:g>`,
})
export class SolarCreativeCommonsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropBoldIcon],svg[solar-crop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v9c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h9a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25h-5.306c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V5.75H2a.75.75 0 0 1 0-1.5h2.25V2A.75.75 0 0 1 5 1.25m10.29 4.64c-1.028-.138-2.383-.14-4.29-.14H8a.75.75 0 0 1 0-1.5h3.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V16a.75.75 0 0 1-1.5 0v-3c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path>`,
})
export class SolarCropBoldIcon {
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
  selector: 'svg[solarCropBrokenIcon],svg[solar-crop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path><svg:path stroke-linecap="round" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M5 11V2m3 3h3c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"></svg:path></svg:g>`,
})
export class SolarCropBrokenIcon {
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
  selector: 'svg[solarCropLinearIcon],svg[solar-crop-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"></svg:path><svg:path stroke-linecap="round" d="M8 5h3c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v3M2 5h3m14 14v3"></svg:path><svg:path d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path></svg:g>`,
})
export class SolarCropLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticBoldIcon],svg[solar-crop-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.302c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h3.302V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.964 0-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zM12 8.75c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v1.47a.75.75 0 0 0 1.5 0v-1.522c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08h-1.523a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCropMinimalisticBoldIcon {
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
  selector: 'svg[solarCropMinimalisticBrokenIcon],svg[solar-crop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M5 11V2m3 3h3c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"></svg:path>`,
})
export class SolarCropMinimalisticBrokenIcon {
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
  selector: 'svg[solarCropMinimalisticLinearIcon],svg[solar-crop-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"></svg:path><svg:path d="M8 5h3c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v3M2 5h3m14 14v3"></svg:path></svg:g>`,
})
export class SolarCropMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticOutlineIcon],svg[solar-crop-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v9c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h9a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25h-5.306c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V5.75H2a.75.75 0 0 1 0-1.5h2.25V2A.75.75 0 0 1 5 1.25m10.29 4.64c-1.028-.138-2.383-.14-4.29-.14H8a.75.75 0 0 1 0-1.5h3.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V16a.75.75 0 0 1-1.5 0v-3c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812" clip-rule="evenodd"></svg:path>`,
})
export class SolarCropMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropOutlineIcon],svg[solar-crop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v9c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h9a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25h-5.306c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V5.75H2a.75.75 0 0 1 0-1.5h2.25V2A.75.75 0 0 1 5 1.25m10.29 4.64c-1.028-.138-2.383-.14-4.29-.14H8a.75.75 0 0 1 0-1.5h3.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V16a.75.75 0 0 1-1.5 0v-3c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812m-3.84 1.86h1.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v1.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.853.531-1.345.597c-.459.062-1.032.062-1.697.062H11.45c-.665 0-1.238 0-1.697-.062c-.491-.066-.963-.215-1.345-.597s-.531-.853-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-1.098c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062M9.955 9.298c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v1c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-1c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048" clip-rule="evenodd"></svg:path>`,
})
export class SolarCropOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownBoldIcon],svg[solar-crown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.092 14.326l.193-1.894c.103-1.011.17-1.678.117-2.099h.02c.871 0 1.578-.746 1.578-1.666S21.293 7 20.421 7s-1.579.746-1.579 1.667c0 .416.145.797.384 1.089c-.343.223-.792.695-1.468 1.405c-.52.547-.78.82-1.07.863a.84.84 0 0 1-.473-.07c-.268-.124-.447-.462-.804-1.139L13.527 7.25c-.22-.417-.405-.766-.572-1.047c.683-.368 1.15-1.117 1.15-1.98C14.105 2.994 13.163 2 12 2s-2.105.995-2.105 2.222c0 .864.467 1.613 1.15 1.98c-.167.282-.351.631-.572 1.048L8.59 10.816c-.358.676-.537 1.014-.805 1.139a.84.84 0 0 1-.473.07c-.29-.043-.55-.317-1.07-.864c-.676-.71-1.125-1.182-1.468-1.405c.24-.292.384-.673.384-1.09C5.158 7.747 4.45 7 3.578 7C2.708 7 2 7.746 2 8.667c0 .92.707 1.666 1.579 1.666h.019c-.054.42.014 1.088.117 2.099l.193 1.894c.107 1.051.196 2.051.306 2.952h15.572c.11-.9.199-1.901.306-2.952M10.855 22h2.29c2.985 0 4.478 0 5.474-.94c.434-.412.71-1.152.908-2.116H4.473c.198.964.473 1.704.908 2.115C6.377 22 7.87 22 10.855 22"></svg:path>`,
})
export class SolarCrownBoldIcon {
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
  selector: 'svg[solarCrownBrokenIcon],svg[solar-crown-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20.433 14.173a.75.75 0 0 0-1.491-.16zm-16.12-.08l-.746.08zm-.184-1.705l.746-.08zm4.631-1.454l.655.365zm1.79-3.209l-.655-.365zm2.9 0l-.655.366zm1.79 3.209l.655-.365zm.764 1.025l-.303.687zm1.467-.714l-.53-.531zm-1.018.777l-.102-.743zm-9.923-.777l-.53.532zm1.017.777l.102-.743zm.45-.063l.301.687zm-2.285 8.194l.5-.559zm12.576 0l-.5-.559zm1.694-9.653l-.008.75zm-1.117-.52l.567-.49zm-5.957-3.197l-.341-.668zm-1.816 0l.341-.668zm1.996 13.467h-2.176v1.5h2.176zm-8.03-6.237l-.183-1.705l-1.491.16l.183 1.705zm4.357-2.714l1.79-3.208l-1.31-.73l-1.79 3.208zm3.38-3.208l1.79 3.208l1.31-.73l-1.79-3.209zm1.79 3.208c.162.29.31.56.455.765c.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8 8 0 0 1-.372-.633zm2.356-.585c-.258.258-.412.41-.533.507c-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378c.195-.158.412-.376.648-.61zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.1.1 0 0 1-.045-.006zm-9.7-.87c.235.235.452.453.647.61c.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8 8 0 0 1-.533-.507zm2.104-1.207a8 8 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582c.144-.206.293-.475.455-.765zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.1.1 0 0 1-.045.006zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1c-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926c.886.113 2.006.112 3.404.112zm-7.345-6.077c.148 1.378.266 2.727.466 3.821c.101.552.229 1.072.405 1.523c.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623q-.19-.488-.326-1.247c-.188-1.022-.297-2.28-.45-3.711zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71q-.138.76-.327 1.248c-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195c.176-.451.304-.971.405-1.523c.2-1.094.318-2.443.466-3.82zm-5.854 7.737c1.398 0 2.518.001 3.404-.112c.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556c-.768.099-1.775.1-3.213.1zM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5zM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25zM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75zM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25zM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9zM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75zm16 1.5h-.009l-.017 1.5H20zm-.009 0a.75.75 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78zm-.559-.26A.74.74 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47zM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372zM4.75 9a.74.74 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159zM4.568 9.49a.75.75 0 0 1-.559.26l.017 1.5a2.25 2.25 0 0 0 1.677-.78zm-.559.26H4v1.5h.026zm.866 2.558a33 33 0 0 1-.109-1.116a3 3 0 0 1-.005-.592l-1.487-.2a4.6 4.6 0 0 0-.004.898c.023.328.065.72.114 1.17zM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5zm-.683 1.115c-.17.086-.361.135-.567.135v1.5a2.74 2.74 0 0 0 1.249-.3zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91zM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 17.5h14"></svg:path></svg:g>`,
})
export class SolarCrownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineBoldIcon],svg[solar-crown-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownLineBoldIcon {
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
  selector: 'svg[solarCrownLineBrokenIcon],svg[solar-crown-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79M9 18h6"></svg:path>`,
})
export class SolarCrownLineBrokenIcon {
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
  selector: 'svg[solarCrownLineLinearIcon],svg[solar-crown-line-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></svg:path><svg:path stroke-linecap="round" d="M9 18h6"></svg:path></svg:g>`,
})
export class SolarCrownLineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineOutlineIcon],svg[solar-crown-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.706 0-1.155.5-1.457.947c-.306.455-.625 1.11-1.004 1.886L7.276 8.72c-.219.448-.36.735-.482.934a1 1 0 0 1-.142.192a.2.2 0 0 1-.087.017a1 1 0 0 1-.156-.122c-.162-.15-.364-.379-.684-.743l-.029-.033C5.124 8.313 4.656 7.78 4.27 7.42a3.3 3.3 0 0 0-.623-.477a1.4 1.4 0 0 0-.819-.196a1.74 1.74 0 0 0-1.187.637c-.355.429-.395 1.029-.39 1.547c.004.56.074 1.303.16 2.227l.238 2.522c.185 1.966.33 3.505.58 4.701c.256 1.218.64 2.183 1.375 2.933c.745.763 1.66 1.111 2.792 1.277c1.088.159 2.463.159 4.185.159h2.838c1.722 0 3.097 0 4.185-.16c1.132-.165 2.047-.513 2.792-1.276c.734-.75 1.119-1.715 1.374-2.933c.251-1.196.396-2.735.581-4.701l.238-2.522c.087-.924.157-1.667.16-2.227c.005-.518-.035-1.118-.39-1.547a1.74 1.74 0 0 0-1.187-.637a1.4 1.4 0 0 0-.819.196a3.3 3.3 0 0 0-.623.477c-.386.36-.854.893-1.426 1.545l-.03.033c-.32.364-.521.593-.683.743a1 1 0 0 1-.155.122a.2.2 0 0 1-.088-.017a1 1 0 0 1-.142-.192c-.122-.199-.263-.486-.482-.934l-2.263-4.637c-.379-.777-.698-1.431-1.004-1.886c-.302-.448-.75-.947-1.457-.947m-1.139 3.544c.412-.844.686-1.402.926-1.759A1.5 1.5 0 0 1 12 2.772c.04.037.11.112.213.263c.24.357.514.915.926 1.759l2.253 4.616c.198.407.371.76.536 1.03c.17.275.392.568.74.743c.313.158.666.216 1.016.16c.393-.062.691-.285.925-.501c.227-.21.48-.498.768-.826l.025-.028c.608-.693 1.027-1.169 1.352-1.472c.16-.15.266-.227.331-.263a.3.3 0 0 1 .113.08l.001.007c.01.03.054.172.05.58c-.003.487-.066 1.165-.157 2.136l-.23 2.435c-.19 2.024-.328 3.479-.56 4.582c-.229 1.09-.53 1.734-.978 2.193c-.438.448-1 .704-1.937.84c-.967.142-2.232.144-4.027.144h-2.72c-1.795 0-3.06-.002-4.027-.143c-.937-.137-1.499-.393-1.937-.841c-.448-.459-.75-1.103-.978-2.193c-.232-1.103-.37-2.558-.56-4.582l-.23-2.435c-.09-.971-.154-1.65-.158-2.137c-.003-.407.042-.55.05-.58l.003-.005a.3.3 0 0 1 .111-.082h.001c.065.037.17.114.331.264c.325.303.744.779 1.352 1.472l.025.028c.288.328.541.617.768.826c.234.216.532.44.925.502c.35.055.703-.003 1.016-.161c.348-.175.57-.468.74-.743c.165-.27.338-.623.536-1.03zm10.337 3.54l.005.006zM12.044 2.74l-.01.004q.01-.006.01-.004m-.079.004l-.009-.004z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownLineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLinearIcon],svg[solar-crown-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.87 12.388l-.745-.08zm-.183 1.705l.746.08zm-15.374 0l-.746.08zm-.184-1.705l.746-.08zm4.631-1.454l.655.365zm1.79-3.209l-.655-.365zm2.9 0l-.655.366zm1.79 3.209l.655-.365zm.764 1.025l-.303.687zm1.467-.714l-.53-.531zm-1.018.777l-.102-.743zm-9.923-.777l-.53.532zm1.017.777l.102-.743zm.45-.063l.301.687zm-2.285 8.194l.5-.559zm12.576 0l-.5-.559zm.576-10.173l.568-.49zm-5.956-3.197l-.341-.668zm-1.816 0l.341-.668zm8.033 5.525l-.183 1.705l1.49.16l.184-1.704zm-6.037 7.942h-2.176v1.5h2.176zm-8.03-6.237l-.183-1.705l-1.491.16l.183 1.705zm4.357-2.714l1.79-3.208l-1.31-.73l-1.79 3.208zm3.38-3.208l1.79 3.208l1.31-.73l-1.79-3.209zm1.79 3.208c.162.29.31.56.455.765c.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8 8 0 0 1-.372-.633zm2.356-.585c-.258.258-.412.41-.533.507c-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378c.195-.158.412-.376.648-.61zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.1.1 0 0 1-.045-.006zm-9.7-.87c.235.235.452.453.647.61c.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8 8 0 0 1-.533-.507zm2.104-1.207a8 8 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582c.144-.206.293-.475.455-.765zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.1.1 0 0 1-.045.006zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1c-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926c.886.113 2.006.112 3.404.112zm-7.345-6.077c.148 1.378.266 2.727.466 3.821c.101.552.229 1.072.405 1.523c.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623q-.19-.488-.326-1.247c-.188-1.022-.297-2.28-.45-3.711zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71q-.138.76-.327 1.248c-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195c.176-.451.304-.971.405-1.523c.2-1.094.318-2.443.466-3.82zm-5.854 7.737c1.398 0 2.518.001 3.404-.112c.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556c-.768.099-1.775.1-3.213.1zM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5zM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25zM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75zM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25zM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9zM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75zm16 1.5h-.009l-.017 1.5H20zm.616 2.719c.049-.45.091-.843.114-1.171a4.6 4.6 0 0 0-.004-.898l-1.487.2c.015.11.016.29-.005.592c-.02.294-.06.657-.11 1.116zm-.625-2.719a.75.75 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78zm-.559-.26A.74.74 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47zM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372zM4.75 9a.74.74 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159zM4.568 9.49a.75.75 0 0 1-.559.26l.017 1.5a2.25 2.25 0 0 0 1.677-.78zm-.559.26H4v1.5h.026zm.866 2.558a33 33 0 0 1-.109-1.116a3 3 0 0 1-.005-.592l-1.487-.2a4.6 4.6 0 0 0-.004.898c.023.328.065.72.114 1.17zM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5zm-.683 1.115c-.17.086-.361.135-.567.135v1.5a2.74 2.74 0 0 0 1.249-.3zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91zM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 17.5h14"></svg:path></svg:g>`,
})
export class SolarCrownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownMinimalisticBoldIcon],svg[solar-crown-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228"></svg:path>`,
})
export class SolarCrownMinimalisticBoldIcon {
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
  selector: 'svg[solarCrownMinimalisticBrokenIcon],svg[solar-crown-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79"></svg:path>`,
})
export class SolarCrownMinimalisticBrokenIcon {
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
  selector: 'svg[solarCrownMinimalisticLinearIcon],svg[solar-crown-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></svg:path>`,
})
export class SolarCrownMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownMinimalisticOutlineIcon],svg[solar-crown-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.787 3.035c-.24.357-.514.915-.926 1.759L8.608 9.41a13 13 0 0 1-.536 1.03c-.17.275-.392.568-.74.743a1.67 1.67 0 0 1-1.016.16c-.393-.062-.691-.285-.925-.501c-.227-.21-.48-.498-.768-.826l-.025-.028c-.608-.693-1.027-1.169-1.352-1.472a2 2 0 0 0-.33-.263h-.002a.3.3 0 0 0-.111.08c.002.002-.056.12-.053.586c.004.488.067 1.166.159 2.137l.229 2.435c.19 2.024.328 3.479.56 4.582c.229 1.09.53 1.734.978 2.193c.438.448 1 .704 1.937.84c.967.142 2.232.144 4.027.144h2.72c1.795 0 3.06-.002 4.027-.143c.937-.137 1.5-.393 1.937-.841c.448-.459.75-1.103.978-2.193c.232-1.103.37-2.558.56-4.582l.23-2.435c.09-.971.154-1.65.158-2.137c.003-.465-.055-.584-.053-.586l.006.007a.3.3 0 0 0-.117-.088h-.001c-.065.037-.17.114-.331.264c-.325.303-.744.779-1.352 1.472l-.025.028c-.288.328-.541.617-.768.826c-.234.216-.532.44-.925.502a1.67 1.67 0 0 1-1.016-.161c-.348-.175-.57-.468-.74-.743c-.165-.27-.338-.623-.536-1.03l-2.253-4.616c-.412-.844-.686-1.402-.926-1.759A1.4 1.4 0 0 0 12 2.772c-.04.037-.11.112-.213.263m.257-.294l-.01.004q.01-.006.01-.004m-.079.004l-.009-.004zm-1.422-.548c.302-.448.75-.947 1.457-.947c.706 0 1.155.5 1.457.947c.306.455.625 1.11 1.004 1.886l2.263 4.637c.219.448.36.735.482.934a1 1 0 0 0 .142.192q.047.022.088.017a1 1 0 0 0 .155-.122c.162-.15.364-.379.684-.743l.029-.033c.573-.652 1.04-1.185 1.426-1.545a3.3 3.3 0 0 1 .623-.477c.222-.124.5-.223.819-.196c.473.042.892.281 1.187.637c.355.429.395 1.029.39 1.547c-.003.56-.073 1.303-.16 2.227l-.238 2.522c-.185 1.966-.33 3.505-.58 4.701c-.256 1.218-.64 2.183-1.375 2.933c-.745.763-1.66 1.111-2.792 1.277c-1.088.159-2.463.159-4.185.159h-2.838c-1.722 0-3.097 0-4.185-.16c-1.132-.165-2.047-.513-2.792-1.276c-.734-.75-1.119-1.715-1.374-2.933c-.251-1.196-.396-2.735-.581-4.701l-.237-2.522c-.087-.924-.157-1.667-.162-2.227c-.004-.518.036-1.118.391-1.547a1.74 1.74 0 0 1 1.187-.637c.318-.027.597.072.819.196c.218.122.426.293.623.477c.386.36.854.893 1.426 1.545l.03.033c.32.364.521.593.683.743a1 1 0 0 0 .156.122a.2.2 0 0 0 .087-.017a1 1 0 0 0 .142-.192c.122-.199.263-.486.482-.934L9.54 4.083c.379-.777.698-1.431 1.004-1.886" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownOutlineIcon],svg[solar-crown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25a2.75 2.75 0 0 0-1.898 4.74l-.2.356l-1.797 3.223a8 8 0 0 1-.373.633a1 1 0 0 1-.06.077a1 1 0 0 1-.08-.058a8 8 0 0 1-.533-.507l-.08-.079a24 24 0 0 0-.872-.844a2.25 2.25 0 1 0-2.848 1.334l.01.173c.024.325.066.714.113 1.158l.185 1.717l.087.83c.112 1.083.22 2.118.38 2.991c.1.552.228 1.072.404 1.523c.175.448.417.875.774 1.195c.63.564 1.39.81 2.296.926c.875.112 1.978.112 3.352.112h2.28c1.374 0 2.477 0 3.352-.112c.907-.116 1.666-.362 2.296-.926c.357-.32.599-.747.774-1.195c.176-.451.304-.971.405-1.523c.16-.873.267-1.908.379-2.99l.087-.83l.185-1.717c.047-.445.09-.834.112-1.159l.011-.173a2.25 2.25 0 1 0-2.848-1.334c-.264.237-.554.526-.873.844l-.079.079c-.258.258-.412.41-.533.507a1 1 0 0 1-.08.058a1 1 0 0 1-.06-.077a8 8 0 0 1-.373-.633l-1.797-3.223l-.2-.356A2.75 2.75 0 0 0 12 2.25M10.75 5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m.455 3.09q.12-.217.224-.4a2.8 2.8 0 0 0 1.142 0q.104.183.224.4l1.807 3.24c.155.278.298.535.438.734c.149.211.351.445.662.582c.268.118.564.159.854.119c.336-.047.595-.216.796-.378c.188-.153.397-.361.624-.586l.024-.024c.375-.374.65-.645.86-.837q.18.106.379.178l-.005.074c-.02.294-.06.657-.11 1.116l-.182 1.705l-.092.87c-.07.67-.134 1.295-.209 1.867H5.359a72 72 0 0 1-.21-1.868l-.09-.87l-.184-1.704a34 34 0 0 1-.114-1.19q.2-.073.38-.178c.21.192.484.463.86.837l.023.024c.227.225.436.433.624.586c.201.162.46.331.796.378c.29.04.586-.001.854-.12c.31-.136.514-.37.662-.581a9 9 0 0 0 .438-.735zM5.618 18.25q.097.414.217.72c.13.33.261.52.377.624c.317.283.739.46 1.487.556c.768.099 1.775.1 3.213.1h2.176c1.438 0 2.445-.001 3.213-.1c.748-.095 1.17-.273 1.487-.556c.116-.104.248-.294.377-.623q.12-.307.217-.721zM3.25 9a.75.75 0 1 1 .759.75H4A.75.75 0 0 1 3.25 9m16 0a.75.75 0 1 1 .75.75h-.009A.747.747 0 0 1 19.25 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownStarBoldIcon],svg[solar-crown-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264M12.952 12.7l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.341-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.136l-.19.043c-.738.167-1.107.25-1.195.533c-.088.282.164.576.667 1.164l.13.152c.143.168.215.251.247.354c.032.104.021.215 0 .438l-.02.204c-.076.784-.114 1.177.115 1.351c.23.175.576.016 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.478 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.437c.032-.104.104-.187.247-.355l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.043c-.21-.048-.315-.072-.4-.136c-.084-.063-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownStarBoldIcon {
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
  selector: 'svg[solarCrownStarBrokenIcon],svg[solar-crown-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 12.523c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79"></svg:path></svg:g>`,
})
export class SolarCrownStarBrokenIcon {
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
  selector: 'svg[solarCrownStarLinearIcon],svg[solar-crown-star-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></svg:path><svg:path d="M11.146 12.523c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path></svg:g>`,
})
export class SolarCrownStarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownStarOutlineIcon],svg[solar-crown-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 10.75c-.502 0-.814.325-.986.55c-.165.214-.33.511-.5.816l-.121.218l-.057.1l-.099.023l-.238.054c-.327.074-.653.148-.903.246c-.276.109-.65.32-.795.785c-.142.456.037.841.193 1.09c.145.23.365.486.59.749l.16.188l.083.097l-.013.135l-.024.25c-.034.352-.067.692-.055.964c.012.285.08.717.468 1.01c.4.304.84.238 1.12.158c.258-.074.563-.215.87-.356l.222-.103l.085-.038l.037.017l.048.021l.223.103c.306.141.611.282.869.356c.28.08.72.146 1.12-.157c.387-.294.456-.726.468-1.011c.012-.272-.02-.613-.055-.965l-.024-.249l-.012-.135q.03-.039.082-.097l.16-.188c.225-.263.445-.52.59-.75c.156-.248.335-.633.193-1.09c-.144-.463-.519-.675-.795-.784c-.25-.098-.576-.172-.903-.246l-.238-.054l-.1-.023l-.056-.1l-.121-.218c-.17-.305-.335-.602-.5-.816c-.172-.225-.484-.55-.986-.55m-.199 2.138q.112-.204.199-.353q.086.149.199.353l.098.176l.023.04c.078.144.208.382.425.547c.221.168.488.226.643.26l.044.01l.19.042c.176.04.319.072.44.103c-.079.098-.182.219-.316.376l-.13.152l-.03.035c-.108.124-.282.325-.363.584c-.08.256-.052.52-.035.686l.005.047l.02.203c.018.188.032.338.042.46c-.105-.045-.223-.1-.364-.165l-.179-.082l-.04-.019c-.144-.068-.393-.185-.672-.185s-.528.117-.672.185l-.04.019l-.179.082q-.209.097-.364.166c.01-.123.024-.273.042-.461l.02-.203l.005-.047c.017-.166.045-.43-.035-.686c-.08-.26-.255-.46-.363-.584l-.03-.035l-.13-.152a21 21 0 0 1-.316-.376c.121-.03.264-.063.44-.103l.19-.043l.044-.01c.155-.033.422-.091.643-.26c.217-.164.347-.402.425-.545l.023-.04zm-1.062 4.124v-.003zm2.522 0v-.003z"></svg:path><svg:path d="M12 1.25c-.706 0-1.155.5-1.457.947c-.306.455-.625 1.11-1.004 1.886L7.276 8.72c-.219.448-.36.735-.482.934a1 1 0 0 1-.142.192a.2.2 0 0 1-.087.017a1 1 0 0 1-.156-.122c-.162-.15-.364-.379-.684-.743l-.029-.033C5.124 8.313 4.656 7.78 4.27 7.42a3.3 3.3 0 0 0-.623-.477a1.4 1.4 0 0 0-.819-.196a1.74 1.74 0 0 0-1.187.637c-.355.429-.395 1.029-.39 1.547c.004.56.074 1.303.16 2.227l.238 2.522c.185 1.966.33 3.505.58 4.701c.256 1.218.64 2.183 1.375 2.933c.745.763 1.66 1.111 2.792 1.277c1.088.159 2.463.159 4.185.159h2.838c1.722 0 3.097 0 4.185-.16c1.132-.165 2.047-.513 2.792-1.276c.734-.75 1.119-1.715 1.374-2.933c.251-1.196.396-2.735.581-4.701l.238-2.522c.087-.924.157-1.667.16-2.227c.005-.518-.035-1.118-.39-1.547a1.74 1.74 0 0 0-1.187-.637a1.4 1.4 0 0 0-.819.196a3.3 3.3 0 0 0-.623.477c-.386.36-.854.893-1.426 1.545l-.03.033c-.32.364-.521.593-.683.743a1 1 0 0 1-.155.122a.2.2 0 0 1-.088-.017a1 1 0 0 1-.142-.192c-.122-.199-.263-.486-.482-.934l-2.263-4.637c-.379-.777-.698-1.431-1.004-1.886c-.302-.448-.75-.947-1.457-.947m-1.139 3.544c.412-.844.686-1.402.926-1.759A1.5 1.5 0 0 1 12 2.772c.04.037.11.112.213.263c.24.357.514.915.926 1.759l2.253 4.616c.198.407.371.76.536 1.03c.17.275.392.568.74.743c.313.158.666.216 1.016.16c.393-.062.691-.285.925-.501c.227-.21.48-.498.768-.826l.025-.028c.608-.693 1.027-1.169 1.352-1.472c.16-.15.266-.227.331-.263a.3.3 0 0 1 .113.08l.001.007c.01.03.054.172.05.58c-.003.487-.066 1.165-.157 2.136l-.23 2.435c-.19 2.024-.328 3.479-.56 4.582c-.229 1.09-.53 1.734-.978 2.193c-.438.448-1 .704-1.937.84c-.967.142-2.232.144-4.027.144h-2.72c-1.795 0-3.06-.002-4.027-.143c-.937-.137-1.499-.393-1.937-.841c-.448-.459-.75-1.103-.978-2.193c-.232-1.103-.37-2.558-.56-4.582l-.23-2.435c-.09-.971-.154-1.65-.158-2.137c-.003-.407.042-.55.05-.58l.003-.005a.3.3 0 0 1 .111-.082h.001c.065.037.17.114.331.264c.325.303.744.779 1.352 1.472l.025.028c.288.328.541.617.768.826c.234.216.532.44.925.502c.35.055.703-.003 1.016-.161c.348-.175.57-.468.74-.743c.165-.27.338-.623.536-1.03zm10.337 3.54l.005.006zM12.044 2.74l-.01.004q.01-.006.01-.004m-.079.004l-.009-.004z"></svg:path></svg:g>`,
})
export class SolarCrownStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupBoldIcon],svg[solar-cup-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.377 2.347A26.4 26.4 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupBoldIcon {
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
  selector: 'svg[solarCupBrokenIcon],svg[solar-cup-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 17v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6"></svg:path></svg:g>`,
})
export class SolarCupBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupFirstBoldIcon],svg[solar-cup-first-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.377 2.347A26.4 26.4 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874m-3.59 3.46a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupFirstBoldIcon {
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
  selector: 'svg[solarCupFirstBrokenIcon],svg[solar-cup-first-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 8l1.5-1.5v4"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path></svg:g>`,
})
export class SolarCupFirstBrokenIcon {
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
  selector: 'svg[solarCupFirstLinearIcon],svg[solar-cup-first-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 8l1.5-1.5v4"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6"></svg:path></svg:g>`,
})
export class SolarCupFirstLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupFirstOutlineIcon],svg[solar-cup-first-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.787 5.807a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.498 1.607A27 27 0 0 1 12 1.25c1.828 0 3.339.161 4.502.357l.135.023c1.01.169 1.85.31 2.506 1.118c.421.519.557 1.08.588 1.705l.492.164c.463.154.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.27v.144c0 .402 0 .757-.03 1.054c-.032.321-.103.634-.28.936c-.179.303-.418.517-.683.701c-.245.17-.555.343-.907.538l-2.64 1.467c-.54 1.061-1.28 2.007-2.3 2.69c-.875.587-1.922.959-3.16 1.065v2.031h1.43a1.75 1.75 0 0 1 1.716 1.407l.219 1.093H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1.885l.219-1.093A1.75 1.75 0 0 1 9.82 18.75h1.43v-2.031c-1.238-.106-2.285-.478-3.16-1.064c-1.019-.684-1.76-1.63-2.3-2.691l-2.64-1.467a11 11 0 0 1-.907-.538a2.2 2.2 0 0 1-.682-.7a2.2 2.2 0 0 1-.281-.937c-.03-.297-.03-.652-.03-1.054v-.145c0-.488 0-.916.04-1.269c.044-.381.14-.75.385-1.088c.244-.339.563-.547.91-.71c.323-.15.729-.285 1.192-.439l.492-.164c.031-.626.167-1.186.588-1.705c.657-.809 1.496-.95 2.507-1.118zM9.415 21.25h5.17l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201zM4.302 6.023c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475c-.162-.113-.215-.18-.244-.23c-.03-.05-.062-.128-.082-.324a11 11 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138c.028-.238.072-.327.112-.381c.039-.055.109-.125.326-.226c.236-.11.56-.219 1.07-.39zm14.725 4.77l1.066-.591c.389-.217.633-.353.809-.475c.162-.113.215-.18.244-.23c.03-.05.062-.128.082-.324c.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.014-.004c-.071 1.52-.243 3.2-.67 4.77M12 2.75c-1.74 0-3.167.153-4.252.336c-1.207.204-1.46.28-1.726.608c-.262.322-.287.628-.234 1.983c.09 2.258.388 4.696 1.31 6.55c.456.914 1.052 1.662 1.828 2.182c.77.517 1.765.841 3.074.841c1.31 0 2.304-.324 3.075-.841c.776-.52 1.371-1.268 1.826-2.183c.923-1.853 1.221-4.29 1.31-6.55c.055-1.354.03-1.66-.232-1.982c-.266-.328-.52-.404-1.727-.608A25.6 25.6 0 0 0 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupFirstOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupHotBoldIcon],svg[solar-cup-hot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.162.173.275.374.35.616H17c2.526 0 4.75 1.812 4.75 4.25s-2.224 4.25-4.75 4.25h-.65l-.035.5H3.685q-.029-.4-.058-.85zM16.45 15.25H17c1.892 0 3.25-1.322 3.25-2.75S18.892 9.75 17 9.75h-.2c-.012.43-.045.93-.084 1.516z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.819 18.75h12.362c-.144 1.177-.378 1.917-.938 2.44c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.56-.523-.794-1.263-.938-2.44"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupHotBoldIcon {
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
  selector: 'svg[solarCupHotBrokenIcon],svg[solar-cup-hot-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.627 16.4c.177 2.654.265 3.982 1.13 4.79c.865.81 2.196.81 4.856.81h.774c2.66 0 3.99 0 4.856-.81c.865-.809.953-2.136 1.13-4.79l.343-5.134c.133-2 .2-2.999-.393-3.632C15.73 7 14.728 7 12.725 7h-5.45c-2.003 0-3.005 0-3.598.634c-.593.633-.526 1.633-.393 3.632l.058.867"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 17h1a4 4 0 0 0 0-8h-1"></svg:path><svg:path fill="currentColor" d="M10 18.75a.75.75 0 0 0 0-1.5zm3.5-1.5a.75.75 0 0 0 0 1.5zm-3.5 0H4v1.5h6zm6 0h-2.5v1.5H16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6.05 5.061l.411-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m-4.49 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575"></svg:path></svg:g>`,
})
export class SolarCupHotBrokenIcon {
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
  selector: 'svg[solarCupHotLinearIcon],svg[solar-cup-hot-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.593.633.526 1.633.393 3.632l-.343 5.133c-.177 2.655-.265 3.982-1.13 4.792S13.047 22 10.387 22h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79zM17 17h1a4 4 0 0 0 0-8h-1m-1 9H4"></svg:path><svg:path stroke-linecap="round" d="m6.05 5.061l.411-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m-4.49 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575"></svg:path></svg:g>`,
})
export class SolarCupHotLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupHotOutlineIcon],svg[solar-cup-hot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.305-2.007l.41-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175M7.221 6.25h5.557c.956 0 1.75 0 2.377.086c.66.091 1.253.291 1.715.785c.31.331.484.713.58 1.129H18a4.75 4.75 0 0 1 0 9.5h-.97l-.03.368v.632h-.064q-.054.48-.134.884c-.169.845-.455 1.55-1.047 2.104s-1.315.793-2.17.904c-.822.108-1.86.108-3.146.108H9.56c-1.285 0-2.324 0-3.146-.108c-.854-.111-1.578-.35-2.17-.904c-.591-.553-.877-1.26-1.046-2.104c-.162-.814-.23-1.85-.316-3.133l-.35-5.239c-.063-.954-.116-1.746-.072-2.377c.047-.664.207-1.27.67-1.764c.462-.494 1.055-.694 1.715-.785c.626-.086 1.42-.086 2.376-.086m9.914 10H18a3.25 3.25 0 0 0 0-6.5h-.45a41 41 0 0 1-.083 1.512zm-1.572 1H4.436q-.03-.417-.061-.9l-.342-5.134c-.068-1.021-.113-1.71-.076-2.226c.034-.493.137-.704.268-.844c.13-.14.334-.256.825-.324c.511-.07 1.202-.072 2.225-.072h5.45c1.023 0 1.713.002 2.225.072c.49.068.694.184.825.324c.13.14.233.35.268.844c.037.516-.008 1.205-.076 2.226l-.342 5.133zm-10.988 1.5h10.85q-.042.32-.095.59c-.136.685-.326 1.047-.6 1.303s-.647.422-1.34.512c-.713.093-1.653.095-3.003.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303a9 9 0 0 1-.094-.59" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupHotOutlineIcon {
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
  selector: 'svg[solarCupLinearIcon],svg[solar-cup-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h6c1.886 0 2.828 0 3.414.586S17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12zm14 6h1a4 4 0 0 0 0-8h-1m0 8H3"></svg:path><svg:path stroke-linecap="round" d="M22 21H2"></svg:path></svg:g>`,
})
export class SolarCupLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupMusicBoldIcon],svg[solar-cup-music-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.316 11.267a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m1.5 2.75a.75.75 0 0 0-1.5 0v3.378a2.25 2.25 0 1 0 1.5 2.122V7.2c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162m20 0v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958"></svg:path>`,
})
export class SolarCupMusicBoldIcon {
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
  selector: 'svg[solarCupMusicBrokenIcon],svg[solar-cup-music-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 10.5V5"></svg:path><svg:circle cx="11.5" cy="10.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M15 7a2 2 0 0 1-2-2"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path></svg:g>`,
})
export class SolarCupMusicBrokenIcon {
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
  selector: 'svg[solarCupMusicLinearIcon],svg[solar-cup-music-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></svg:path><svg:path stroke-linecap="round" d="M13 10.5V5"></svg:path><svg:circle cx="11.5" cy="10.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M15 7a2 2 0 0 1-2-2"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6"></svg:path></svg:g>`,
})
export class SolarCupMusicLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupMusicOutlineIcon],svg[solar-cup-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 4.25a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5c-.45 0-.875-.108-1.25-.3v3.05a2.25 2.25 0 1 1-1.5-2.122V5a.75.75 0 0 1 .75-.75m-.75 6.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path><svg:path d="M7.498 1.607A27 27 0 0 1 12 1.25c1.828 0 3.339.161 4.502.357l.135.023c1.01.169 1.85.31 2.506 1.118c.421.519.557 1.08.588 1.705l.492.164c.463.154.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.27v.144c0 .402 0 .757-.03 1.054c-.032.321-.103.634-.28.936c-.179.303-.418.517-.683.701c-.245.17-.555.343-.907.538l-2.64 1.467c-.54 1.061-1.28 2.007-2.3 2.69c-.875.587-1.922.959-3.16 1.065v2.031h1.43a1.75 1.75 0 0 1 1.716 1.407l.219 1.093H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1.885l.219-1.093A1.75 1.75 0 0 1 9.82 18.75h1.43v-2.031c-1.238-.106-2.285-.478-3.16-1.064c-1.019-.684-1.76-1.63-2.3-2.691l-2.64-1.467a11 11 0 0 1-.907-.538a2.2 2.2 0 0 1-.682-.7a2.2 2.2 0 0 1-.281-.937c-.03-.297-.03-.652-.03-1.054v-.145c0-.488 0-.916.04-1.269c.044-.381.14-.75.385-1.088c.244-.339.563-.547.91-.71c.323-.15.729-.285 1.192-.439l.492-.164c.031-.626.167-1.186.588-1.705c.657-.809 1.496-.95 2.507-1.118zM9.415 21.25h5.17l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201zM4.302 6.023c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475c-.162-.113-.215-.18-.244-.23c-.03-.05-.062-.128-.082-.324a11 11 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138c.028-.238.072-.327.112-.381c.039-.055.109-.125.326-.226c.236-.11.56-.219 1.07-.39zm14.725 4.77l1.066-.591c.389-.217.633-.353.809-.475c.162-.113.215-.18.244-.23c.03-.05.062-.128.082-.324c.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.014-.004c-.071 1.52-.243 3.2-.67 4.77M12 2.75c-1.74 0-3.167.153-4.252.336c-1.207.204-1.46.28-1.726.608c-.262.322-.287.628-.234 1.983c.09 2.258.388 4.696 1.31 6.55c.456.914 1.052 1.662 1.828 2.182c.77.517 1.765.841 3.074.841c1.31 0 2.304-.324 3.075-.841c.776-.52 1.371-1.268 1.826-2.183c.923-1.853 1.221-4.29 1.31-6.55c.055-1.354.03-1.66-.232-1.982c-.266-.328-.52-.404-1.727-.608A25.6 25.6 0 0 0 12 2.75"></svg:path></svg:g>`,
})
export class SolarCupMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupOutlineIcon],svg[solar-cup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-1.828 0-3.339.161-4.502.357l-.134.023c-1.01.169-1.85.31-2.507 1.118c-.42.519-.557 1.08-.588 1.705l-.492.164c-.463.154-.87.29-1.191.44c-.348.162-.667.37-.911.709s-.341.707-.385 1.088c-.04.353-.04.78-.04 1.269v.145c0 .402 0 .757.03 1.054c.032.321.103.634.28.936c.179.303.417.517.683.701c.245.17.555.343.907.538l2.64 1.467c.54 1.061 1.281 2.007 2.3 2.69c.887.596 1.952.97 3.213 1.069a.8.8 0 0 0-.053.277v1.75H9.82a1.75 1.75 0 0 0-1.716 1.407l-.219 1.093H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-1.885l-.219-1.093a1.75 1.75 0 0 0-1.716-1.407h-1.43V17a.8.8 0 0 0-.053-.277c1.261-.1 2.326-.473 3.213-1.068c1.02-.684 1.76-1.63 2.3-2.691l2.64-1.467c.352-.195.662-.368.907-.538c.265-.184.504-.398.682-.7c.178-.303.25-.616.281-.937c.03-.297.03-.652.03-1.054v-.145c0-.488 0-.916-.04-1.269c-.044-.381-.14-.75-.385-1.088c-.244-.339-.563-.547-.91-.71c-.323-.15-.729-.285-1.192-.439l-.492-.164c-.03-.626-.167-1.186-.588-1.705c-.656-.809-1.496-.95-2.506-1.118l-.135-.023A27 27 0 0 0 12 1.25m2.585 20l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201l-.16.799zM4.288 6.028l.014-.005c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475c-.162-.113-.215-.18-.244-.23c-.03-.05-.062-.128-.082-.324a11 11 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138c.028-.238.072-.327.112-.381c.039-.055.109-.125.326-.226c.236-.11.56-.219 1.07-.39m15.41-.005c-.071 1.52-.243 3.2-.67 4.77l1.065-.591c.389-.217.633-.353.809-.475c.162-.113.215-.18.244-.23c.03-.05.062-.128.082-.324c.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39zM7.748 3.086A25.6 25.6 0 0 1 12 2.75c1.74 0 3.167.153 4.252.336c1.207.204 1.46.28 1.727.608c.262.322.287.628.233 1.983c-.09 2.258-.388 4.696-1.31 6.55c-.456.914-1.052 1.662-1.827 2.182c-.771.517-1.766.841-3.075.841s-2.303-.324-3.074-.841c-.776-.52-1.372-1.268-1.827-2.183c-.923-1.853-1.22-4.29-1.31-6.55c-.054-1.354-.03-1.66.233-1.982c.266-.328.519-.404 1.726-.608" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupPaperBoldIcon],svg[solar-cup-paper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.185 2h5.63c1.838 0 2.757 0 3.48.444a3 3 0 0 1 .355.257c.65.545.941 1.416 1.523 3.16l.036.107c.319.955.478 1.433.31 1.794a1 1 0 0 1-.22.303c-.288.274-.792.274-1.799.274l-.426 2.911H5.926L5.5 8.34c-1.007 0-1.51 0-1.8-.275a1 1 0 0 1-.218-.303c-.169-.361-.01-.839.31-1.794l.035-.107C4.41 4.117 4.7 3.246 5.35 2.7q.168-.141.356-.257C6.429 2 7.347 2 9.186 2m8.156 14.25H6.658l-.512-3.5h11.708zM13.043 22h-2.086c-1.649 0-2.473 0-3.036-.487s-.683-1.302-.922-2.934l-.121-.829h10.244l-.121.83c-.239 1.63-.359 2.446-.922 2.933S14.692 22 13.043 22"></svg:path>`,
})
export class SolarCupPaperBoldIcon {
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
  selector: 'svg[solarCupPaperBrokenIcon],svg[solar-cup-paper-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20.92 5.73a.75.75 0 0 0-1.423.475zm-17.129.238l.712.237zm.036-.107l-.711-.238zM7 18.58l-.742.108zm10.002 0l.742.108zm-.922 2.933l.49.568zM3.482 7.762l.68-.317zm.218.303l.516-.544zm16.819-.303l.68.317zm-.22.303l-.515-.544zm-2.398-4.982a.75.75 0 1 0 .786-1.278zm-9.98 18.43l-.49.568zM5.706 2.444l-.393-.639zm-.356.257l.482.575zM10 21.995l-.013.75H10zm4 0v.75h.013zM9.185 2.75h5.63v-1.5h-5.63zM4.503 6.205l.036-.107l-1.423-.475l-.036.108zM18.5 7.59h-13v1.5h13zm-13.742.859l1.5 10.24l1.483-.217L6.242 8.23zm12.985 10.24l1.5-10.24l-1.485-.217l-1.5 10.24zm-1.484-.217c-.122.835-.205 1.391-.32 1.804c-.109.392-.223.56-.35.67l.98 1.136c.437-.377.664-.86.815-1.405c.146-.525.242-1.192.359-1.988zM3.08 5.73c-.153.459-.29.867-.36 1.205c-.072.347-.103.747.082 1.143l1.36-.634c.015.034-.02.016.026-.206c.048-.23.15-.538.315-1.034zM5.5 7.589c-.523 0-.847 0-1.08-.029c-.225-.026-.232-.065-.204-.04L3.184 8.61c.317.3.707.398 1.058.44c.343.04.774.04 1.258.04zm-2.698.49c.093.2.223.38.382.53l1.032-1.088a.3.3 0 0 1-.055-.076zm16.695-1.874c.166.496.267.804.315 1.034c.046.222.01.24.027.206l1.36.634c.184-.396.153-.796.082-1.143c-.07-.338-.207-.746-.36-1.205zM18.5 9.09c.485 0 .915.002 1.258-.04c.351-.04.74-.139 1.058-.44l-1.032-1.088c.028-.026.021.013-.203.04c-.234.027-.558.028-1.08.028zm1.339-1.644a.3.3 0 0 1-.055.076l1.032 1.089c.16-.152.29-.332.382-.531zM14.815 2.75c.934 0 1.579 0 2.082.052c.488.049.775.14 1.005.281l.785-1.278c-.493-.303-1.027-.434-1.639-.496c-.596-.06-1.33-.059-2.233-.059zM6.257 18.688c.117.796.213 1.463.359 1.988c.151.545.378 1.028.814 1.405l.981-1.135c-.127-.11-.241-.279-.35-.671c-.115-.413-.197-.97-.32-1.804zM9.185 1.25c-.903 0-1.637 0-2.233.06c-.612.061-1.146.192-1.639.495L6.1 3.083c.23-.14.516-.232 1.004-.281c.503-.051 1.148-.052 2.082-.052zM4.54 6.098c.295-.886.5-1.498.708-1.959c.201-.447.378-.69.585-.863l-.964-1.15c-.443.372-.737.837-.989 1.398c-.246.546-.477 1.242-.763 2.1zm.774-4.293a4 4 0 0 0-.445.32l.964 1.15a2 2 0 0 1 .267-.192zm4.7 19.44c-1.063-.018-1.392-.118-1.602-.3l-.98 1.136c.673.582 1.549.647 2.556.664zm4 1.5c1.007-.017 1.883-.082 2.557-.664l-.981-1.135c-.21.181-.54.281-1.602.3zm-4.013 0h4v-1.5h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 12H12m5.5 0H16m-9 5h10"></svg:path></svg:g>`,
})
export class SolarCupPaperBrokenIcon {
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
  selector: 'svg[solarCupPaperLinearIcon],svg[solar-cup-paper-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.173 5.86l.711-.237zm.036.108l-.712.237zm-16.418 0l.712.237zm.036-.107l-.711-.238zM7 18.58l-.742.108zm10.002 0l.742.108zM3.48 7.761l.68-.317zm.22.303l.515-.544zm16.818-.303l.68.317zm-.22.303l-.515-.544zm-2.005-5.62l.393-.64zm.356.256l-.482.575zM7.92 21.513l-.49.568zM5.707 2.444l-.393-.639zm-.356.257l.482.575zm3.835.049h5.63v-1.5h-5.63zm10.277 3.348l.035.107l1.423-.474l-.036-.108zm-14.96.107l.037-.107l-1.423-.475l-.036.108zm6.455 16.545h2.086v-1.5h-2.086zM18.5 7.59h-13v1.5h13zm-13.742.858l1.5 10.24l1.483-.217L6.242 8.23zm12.985 10.24l1.5-10.24l-1.485-.217l-1.5 10.24zm-4.7 4.062c.805 0 1.479.001 2.019-.067c.561-.07 1.072-.226 1.508-.602l-.981-1.135c-.127.11-.31.198-.715.249c-.424.054-.987.055-1.831.055zm3.216-4.28c-.122.836-.205 1.392-.32 1.805c-.109.392-.223.56-.35.67l.98 1.136c.437-.377.664-.86.815-1.405c.146-.525.242-1.192.359-1.988zM3.08 5.73c-.153.46-.29.868-.36 1.206c-.072.347-.103.747.082 1.143l1.36-.634c.015.034-.02.016.026-.206c.048-.23.15-.538.315-1.034zM5.5 7.59c-.523 0-.847-.002-1.08-.03c-.225-.026-.232-.065-.204-.04L3.184 8.61c.317.3.707.398 1.058.44c.343.04.774.04 1.258.04zm-2.698.489c.093.2.223.38.382.53l1.032-1.088a.3.3 0 0 1-.055-.076zm16.695-1.874c.166.496.267.804.315 1.034c.046.222.01.24.027.206l1.36.634c.184-.396.153-.796.082-1.143c-.07-.338-.207-.746-.36-1.205zM18.5 9.09c.485 0 .915.002 1.258-.04c.351-.04.74-.139 1.058-.44l-1.032-1.088c.028-.026.021.013-.203.04c-.234.027-.558.028-1.08.028zm1.339-1.644a.3.3 0 0 1-.055.076l1.032 1.089c.16-.152.29-.332.382-.531zM14.815 2.75c.934 0 1.579 0 2.082.052c.488.049.775.14 1.005.281l.785-1.278c-.493-.303-1.027-.434-1.639-.496c-.596-.06-1.33-.059-2.233-.059zm6.07 2.873c-.287-.857-.518-1.553-.764-2.1c-.252-.56-.545-1.025-.99-1.397l-.963 1.15c.207.173.384.416.585.863c.208.461.413 1.073.709 1.959zM17.9 3.083q.141.087.267.193l.964-1.15a4 4 0 0 0-.445-.32zM10.958 21.25c-.844 0-1.406-.001-1.831-.055c-.404-.05-.588-.14-.715-.25l-.98 1.136c.435.377.946.532 1.507.602c.54.068 1.214.067 2.02.067zm-4.7-2.562c.117.796.213 1.463.359 1.988c.151.545.378 1.028.814 1.405l.981-1.135c-.127-.11-.241-.279-.35-.671c-.115-.413-.197-.97-.32-1.804zM9.185 1.25c-.903 0-1.637 0-2.233.06c-.612.061-1.146.192-1.639.495L6.1 3.083c.23-.14.516-.232 1.004-.281c.503-.051 1.148-.052 2.082-.052zM4.54 6.098c.295-.886.5-1.498.708-1.959c.201-.447.378-.69.585-.863l-.964-1.15c-.443.372-.737.837-.989 1.398c-.246.546-.477 1.242-.763 2.1zm.774-4.293a4 4 0 0 0-.445.32l.964 1.15a2 2 0 0 1 .267-.192z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 12h11M7 17h10"></svg:path></svg:g>`,
})
export class SolarCupPaperLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupPaperOutlineIcon],svg[solar-cup-paper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.147 1.25h5.707c.886 0 1.607 0 2.194.06c.612.061 1.146.192 1.64.495q.233.144.444.32c.444.373.737.838.99 1.399c.241.538.47 1.222.75 2.062l.012.037l.05.148c.147.443.279.837.347 1.165c.071.347.102.747-.083 1.143c-.093.2-.223.38-.382.53c-.317.301-.707.4-1.058.44q-.271.031-.61.037l-1.412 9.649c-.114.776-.209 1.427-.352 1.941c-.15.545-.378 1.028-.814 1.405s-.947.532-1.508.602c-.53.067-1.188.067-1.972.067h-2.18c-.784 0-1.442 0-1.972-.067c-.561-.07-1.072-.226-1.508-.602c-.436-.377-.663-.86-.814-1.405c-.143-.514-.238-1.165-.352-1.941l-1.413-9.65a6 6 0 0 1-.609-.035c-.351-.042-.74-.14-1.058-.44a1.8 1.8 0 0 1-.382-.531c-.185-.396-.154-.796-.083-1.143c.068-.328.2-.722.348-1.165l.013-.04l.048-.145c.28-.84.509-1.524.751-2.062c.252-.561.546-1.026.99-1.398q.21-.177.444-.32c.493-.304 1.027-.435 1.639-.497c.588-.059 1.309-.059 2.195-.059m-2.78 7.84l.317 2.16h10.632l.316-2.16zm10.73 3.66H6.903l.512 3.5h9.168zm-.733 5H7.636l.105.72c.123.836.205 1.392.32 1.805c.109.392.223.56.35.67s.31.2.715.25c.425.054.987.055 1.831.055h2.086c.844 0 1.407-.001 1.831-.055c.404-.05.588-.14.715-.25s.241-.278.35-.67c.115-.413.198-.97.32-1.804zM7.103 2.802c-.488.049-.775.14-1.004.281a2 2 0 0 0-.267.193c-.207.173-.384.416-.585.863c-.208.461-.413 1.073-.708 1.959l-.036.107c-.166.496-.267.804-.315 1.034a.8.8 0 0 0-.023.213a.3.3 0 0 0 .046.064a.8.8 0 0 0 .209.044c.233.028.557.03 1.08.03h13c.523 0 .847-.002 1.08-.03a.8.8 0 0 0 .21-.044a.3.3 0 0 0 .045-.064a.8.8 0 0 0-.023-.213c-.048-.23-.15-.538-.315-1.034l-.035-.107c-.296-.886-.501-1.498-.709-1.959c-.2-.447-.378-.69-.585-.863a2 2 0 0 0-.267-.193c-.23-.14-.516-.232-1.004-.281c-.503-.051-1.148-.052-2.082-.052h-5.63c-.934 0-1.579 0-2.082.052" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupPaperOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupStarBoldIcon],svg[solar-cup-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupStarBoldIcon {
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
  selector: 'svg[solarCupStarBrokenIcon],svg[solar-cup-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path></svg:g>`,
})
export class SolarCupStarBrokenIcon {
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
  selector: 'svg[solarCupStarLinearIcon],svg[solar-cup-star-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6"></svg:path></svg:g>`,
})
export class SolarCupStarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupStarOutlineIcon],svg[solar-cup-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.014 4.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.121.218l.057.1l.099.023l.238.054c.327.074.653.147.903.246c.276.109.65.32.795.785c.142.455-.037.841-.193 1.09c-.145.23-.365.486-.59.749l-.16.188l-.082.097c.002.036.007.078.012.135l.024.25c.034.351.067.691.055.963c-.012.286-.08.718-.468 1.011c-.4.304-.84.238-1.12.157c-.258-.073-.563-.214-.87-.355l-.222-.103l-.085-.039l-.085.04l-.223.102c-.306.141-.611.282-.869.355c-.28.08-.72.147-1.12-.157c-.387-.293-.456-.725-.468-1.01c-.012-.273.02-.613.055-.965l.024-.25l.013-.134l-.083-.097l-.16-.188c-.225-.263-.445-.52-.59-.75c-.156-.248-.335-.634-.193-1.09c.144-.463.519-.675.795-.784c.25-.099.576-.172.903-.246l.238-.054l.1-.023l.056-.1l.121-.218c.17-.305.335-.602.5-.816M12 6.034q-.086.15-.199.354l-.098.176l-.023.04c-.078.144-.208.382-.425.547c-.221.168-.488.226-.643.26l-.044.009l-.19.043c-.176.04-.319.072-.44.103c.079.097.182.219.316.376l.13.152l.03.034c.108.125.282.325.363.585c.08.256.052.52.035.686l-.005.047l-.02.203a25 25 0 0 0-.042.46c.105-.046.223-.1.364-.165l.179-.082l.04-.02c.144-.067.393-.185.672-.185s.528.118.672.186l.04.019l.179.082q.209.097.364.165a25 25 0 0 0-.042-.46l-.02-.203l-.005-.047c-.017-.167-.045-.43.035-.686c.08-.26.255-.46.363-.585l.03-.034l.13-.152c.134-.157.237-.279.316-.376c-.121-.03-.264-.063-.44-.103l-.19-.043l-.044-.01c-.155-.033-.422-.091-.643-.26c-.217-.164-.347-.402-.425-.545l-.023-.041l-.098-.176q-.112-.204-.199-.354m-1.26 4.478l-.001-.004zm2.52 0l.001-.004z"></svg:path><svg:path d="M7.498 1.607A27 27 0 0 1 12 1.25c1.828 0 3.339.161 4.502.357l.135.023c1.01.169 1.85.31 2.506 1.118c.421.519.557 1.08.588 1.705l.492.164c.463.154.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.27v.144c0 .402 0 .757-.03 1.054c-.032.321-.103.634-.28.936c-.179.303-.418.517-.683.701c-.245.17-.555.343-.907.538l-2.64 1.467c-.54 1.061-1.28 2.007-2.3 2.69c-.875.587-1.922.959-3.16 1.065v2.031h1.43a1.75 1.75 0 0 1 1.716 1.407l.219 1.093H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1.885l.219-1.093A1.75 1.75 0 0 1 9.82 18.75h1.43v-2.031c-1.238-.106-2.285-.478-3.16-1.064c-1.019-.684-1.76-1.63-2.3-2.691l-2.64-1.467a11 11 0 0 1-.907-.538a2.2 2.2 0 0 1-.682-.7a2.2 2.2 0 0 1-.281-.937c-.03-.297-.03-.652-.03-1.054v-.145c0-.488 0-.916.04-1.269c.044-.381.14-.75.385-1.088c.244-.339.563-.547.91-.71c.323-.15.729-.285 1.192-.439l.492-.164c.031-.626.167-1.186.588-1.705c.657-.809 1.496-.95 2.507-1.118zM9.415 21.25h5.17l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201zM4.302 6.023l-.014.005c-.51.17-.834.28-1.07.389c-.217.1-.287.171-.326.226s-.084.143-.111.381c-.03.258-.031.6-.031 1.138v.073c0 .445 0 .724.022.938c.02.196.052.275.082.325c.029.05.082.116.244.229c.176.122.42.258.81.475l1.065.592c-.428-1.57-.6-3.25-.67-4.77m14.725 4.77c.428-1.57.6-3.25.671-4.77l.014.005c.51.17.834.28 1.07.389c.217.1.287.171.326.226s.084.143.111.381c.03.258.031.6.031 1.138v.073c0 .445 0 .724-.022.938c-.02.196-.052.275-.082.325c-.029.05-.082.116-.244.229c-.177.122-.42.258-.81.475zM12 2.75c-1.74 0-3.167.153-4.252.336c-1.207.204-1.46.28-1.726.608c-.262.322-.287.628-.234 1.983c.09 2.258.388 4.696 1.31 6.55c.456.914 1.052 1.662 1.828 2.182c.77.517 1.765.841 3.074.841c1.31 0 2.304-.324 3.075-.841c.776-.52 1.371-1.268 1.826-2.183c.923-1.853 1.221-4.29 1.31-6.55c.055-1.354.03-1.66-.232-1.982c-.266-.328-.52-.404-1.727-.608A25.6 25.6 0 0 0 12 2.75"></svg:path></svg:g>`,
})
export class SolarCupStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorBoldIcon],svg[solar-cursor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.574 19.2l-3.938-3.938l-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702s-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392s2.47-.24 5.73.962l5.45 2.006c1.633.602 2.45.903 2.596 1.565s-.47 1.277-1.702 2.508l-1.202 1.203l3.938 3.938c.408.408.612.612.706.84c.125.303.125.643 0 .947c-.094.227-.298.431-.706.839s-.612.612-.84.706a1.24 1.24 0 0 1-.947 0c-.227-.094-.43-.298-.839-.706"></svg:path>`,
})
export class SolarCursorBoldIcon {
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
  selector: 'svg[solarCursorBrokenIcon],svg[solar-cursor-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 4.942c-2.524-.915-3.871-1.288-4.609-.55c-.84.84-.24 2.47.962 5.728l2.007 5.45c.602 1.633.903 2.45 1.565 2.596s1.277-.47 2.508-1.702l1.203-1.202l3.938 3.938c.408.408.612.612.84.706c.303.125.643.125.947 0c.227-.094.431-.298.839-.706s.612-.612.706-.84a1.24 1.24 0 0 0 0-.947c-.094-.227-.298-.43-.706-.839l-3.938-3.938l1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508s-.963-.963-2.596-1.565L13 6.414"></svg:path>`,
})
export class SolarCursorBrokenIcon {
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
  selector: 'svg[solarCursorLinearIcon],svg[solar-cursor-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.574 19.2l-3.938-3.938l-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702s-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392s2.47-.24 5.73.962l5.45 2.006c1.633.602 2.45.903 2.596 1.565s-.47 1.277-1.702 2.508l-1.202 1.203l3.938 3.938c.408.408.612.612.706.84c.125.303.125.643 0 .947c-.094.227-.298.431-.706.839s-.612.612-.84.706a1.24 1.24 0 0 1-.947 0c-.227-.094-.43-.298-.839-.706"></svg:path>`,
})
export class SolarCursorLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorOutlineIcon],svg[solar-cursor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.317 4.626l5.567 2.051c.77.284 1.426.525 1.902.785c.498.273.97.656 1.112 1.302s-.126 1.192-.464 1.648c-.323.436-.818.93-1.398 1.51l-.714.714l3.425 3.424c.19.19.358.359.489.509c.139.159.271.337.363.558a2 2 0 0 1 0 1.52a2 2 0 0 1-.363.559c-.131.15-.3.318-.49.508l-.032.033c-.19.19-.358.358-.508.489a2 2 0 0 1-.558.363a2 2 0 0 1-1.521 0a2 2 0 0 1-.558-.363c-.15-.131-.319-.3-.509-.49l-3.424-3.424l-.714.714c-.58.58-1.074 1.075-1.51 1.398c-.456.338-1.002.606-1.648.464s-1.03-.614-1.302-1.112c-.26-.476-.501-1.132-.785-1.902l-2.051-5.567c-.58-1.576-1.046-2.84-1.253-3.813c-.206-.971-.218-1.937.488-2.643s1.672-.694 2.643-.488c.973.207 2.237.672 3.813 1.253m-4.124.215c-.868-.185-1.137-.053-1.271.08c-.134.135-.266.404-.081 1.272c.18.854.606 2.015 1.216 3.668l2.007 5.45c.31.84.514 1.39.714 1.755c.188.344.286.363.306.367h.004c.02.006.116.03.43-.204c.336-.249.752-.662 1.385-1.295l1.203-1.203a.75.75 0 0 1 1.06 0l3.939 3.939c.21.21.343.342.45.435a.6.6 0 0 0 .146.108c.12.05.253.05.373 0a.6.6 0 0 0 .146-.108c.106-.093.239-.224.45-.435c.21-.212.342-.344.435-.45a.6.6 0 0 0 .108-.146a.5.5 0 0 0 0-.373a.6.6 0 0 0-.108-.146a10 10 0 0 0-.435-.45l-3.939-3.939a.75.75 0 0 1 0-1.06l1.203-1.203c.633-.633 1.046-1.049 1.295-1.384c.233-.315.21-.411.205-.431v-.002l-.001-.002c-.004-.02-.023-.118-.367-.306c-.366-.2-.915-.404-1.755-.714L9.86 6.057c-1.653-.61-2.814-1.035-3.668-1.216" clip-rule="evenodd"></svg:path>`,
})
export class SolarCursorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorSquareBoldIcon],svg[solar-cursor-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m8.934 10.575l2.461 2.46c.255.256.382.383.524.442c.19.079.403.079.593 0c.142-.059.27-.186.524-.441c.255-.255.382-.382.441-.524a.77.77 0 0 0 0-.593c-.059-.142-.186-.27-.441-.524l-2.461-2.461l.751-.752c.77-.77 1.154-1.154 1.064-1.568c-.091-.413-.602-.602-1.623-.978l-3.406-1.255c-2.037-.75-3.055-1.125-3.58-.6s-.15 1.543.6 3.58L9.1 14.231c.376 1.021.565 1.532.978 1.623s.798-.294 1.568-1.064z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCursorSquareBoldIcon {
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
  selector: 'svg[solarCursorSquareBrokenIcon],svg[solar-cursor-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.859 16.5l-2.461-2.461l-.752.751c-.77.77-1.154 1.154-1.568 1.064c-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58s1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978s-.294.798-1.064 1.568l-.751.752l2.46 2.461c.256.255.383.382.442.524a.77.77 0 0 1 0 .593c-.059.142-.186.27-.441.524c-.255.255-.382.382-.524.441a.77.77 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCursorSquareBrokenIcon {
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
  selector: 'svg[solarCursorSquareLinearIcon],svg[solar-cursor-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14.859 16.5l-2.461-2.461l-.752.751c-.77.77-1.154 1.154-1.568 1.064c-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58s1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978s-.294.798-1.064 1.568l-.751.752l2.46 2.461c.256.255.383.382.442.524a.77.77 0 0 1 0 .593c-.059.142-.186.27-.441.524c-.255.255-.382.382-.524.441a.77.77 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarCursorSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorSquareOutlineIcon],svg[solar-cursor-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.026 7.12c-.969-.357-1.774-.654-2.402-.787c-.627-.133-1.361-.167-1.91.381c-.548.549-.514 1.283-.38 1.91c.132.628.43 1.433.786 2.402l1.295 3.514c.172.468.33.895.502 1.21c.185.34.478.721 1 .836s.949-.11 1.258-.34c.29-.214.611-.536.964-.888l.259-.259l1.945 1.945c.115.116.226.227.328.315c.11.096.248.201.425.275a1.52 1.52 0 0 0 1.166 0c.178-.074.316-.178.426-.275c.102-.088.213-.2.328-.315l.029-.028c.115-.115.226-.226.314-.327c.096-.11.201-.249.275-.427a1.52 1.52 0 0 0 0-1.166a1.6 1.6 0 0 0-.275-.425c-.088-.102-.2-.213-.315-.328L15.1 12.398l.259-.26c.352-.352.674-.674.889-.963c.23-.31.454-.736.34-1.258c-.116-.522-.498-.815-.836-1c-.316-.173-.743-.33-1.211-.502zm-3.271.719c.008-.059.02-.064.02-.064s.005-.012.064-.02c.08-.01.225-.007.473.045c.51.108 1.212.365 2.254.75l3.406 1.254c.534.197.853.316 1.06.43l.032.018l-.022.03c-.14.188-.38.431-.782.834l-.752.751a.75.75 0 0 0 0 1.06l2.462 2.462a6 6 0 0 1 .278.29l-.02.023a6 6 0 0 1-.258.268a6 6 0 0 1-.28.27l-.01.008l-.024-.02a6 6 0 0 1-.267-.258l-2.461-2.462a.75.75 0 0 0-1.06 0l-.752.752c-.403.402-.646.642-.834.782l-.03.022l-.019-.033c-.113-.206-.232-.525-.43-1.06L8.55 10.567c-.384-1.042-.64-1.745-.749-2.254c-.052-.248-.056-.393-.045-.473"></svg:path><svg:path d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"></svg:path></svg:g>`,
})
export class SolarCursorSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerBoldIcon],svg[solar-danger-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerBoldIcon {
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
  selector: 'svg[solarDangerBrokenIcon],svg[solar-danger-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.216 3c1.18-.667 1.954-1 2.784-1c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7C3.996 6.22 4.719 5.682 6 4.9"></svg:path></svg:g>`,
})
export class SolarDangerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerCircleBoldIcon],svg[solar-danger-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerCircleBoldIcon {
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
  selector: 'svg[solarDangerCircleBrokenIcon],svg[solar-danger-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarDangerCircleBrokenIcon {
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
  selector: 'svg[solarDangerCircleLinearIcon],svg[solar-danger-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarDangerCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerCircleOutlineIcon],svg[solar-danger-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerCircleOutlineIcon {
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
  selector: 'svg[solarDangerLinearIcon],svg[solar-danger-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792z"></svg:path></svg:g>`,
})
export class SolarDangerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerOutlineIcon],svg[solar-danger-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c-.705 0-1.348.194-2.051.52c-.68.317-1.469.783-2.454 1.367l-.754.446c-.986.584-1.773 1.05-2.38 1.496c-.628.462-1.11.934-1.458 1.553s-.505 1.279-.58 2.063c-.073.76-.073 1.691-.073 2.861v.888c0 1.17 0 2.1.073 2.86c.075.785.232 1.446.58 2.064c.349.619.83 1.091 1.458 1.553c.607.446 1.394.912 2.38 1.496l.754.446c.985.584 1.773 1.05 2.454 1.367c.703.326 1.346.52 2.051.52s1.348-.194 2.051-.52c.68-.317 1.469-.783 2.454-1.367l.754-.446c.986-.584 1.773-1.05 2.38-1.496c.628-.462 1.11-.934 1.458-1.553s.505-1.279.58-2.063c.073-.76.073-1.691.073-2.86v-.889c0-1.17 0-2.1-.073-2.86c-.075-.785-.232-1.446-.58-2.064c-.349-.619-.83-1.091-1.458-1.553c-.607-.446-1.394-.912-2.38-1.496l-.754-.446c-.985-.584-1.773-1.05-2.454-1.367c-.703-.326-1.346-.52-2.051-.52M8.225 4.447c1.027-.608 1.751-1.035 2.356-1.316c.59-.274 1.01-.381 1.419-.381s.83.107 1.42.38c.604.282 1.328.71 2.355 1.317l.686.407c1.027.608 1.75 1.037 2.29 1.434c.526.387.83.71 1.038 1.08c.21.371.33.806.395 1.47c.065.68.066 1.54.066 2.756v.812c0 1.216 0 2.075-.066 2.755c-.064.665-.185 1.1-.395 1.471c-.208.37-.512.693-1.038 1.08c-.54.397-1.263.826-2.29 1.434l-.686.407c-1.027.608-1.751 1.035-2.356 1.316c-.59.274-1.01.381-1.419.381s-.83-.107-1.42-.38c-.604-.282-1.328-.71-2.355-1.317l-.686-.407c-1.027-.608-1.75-1.037-2.29-1.434c-.526-.387-.83-.71-1.038-1.08c-.21-.371-.331-.806-.395-1.47c-.065-.68-.066-1.54-.066-2.756v-.812c0-1.216 0-2.075.066-2.755c.064-.665.185-1.1.394-1.471c.209-.37.513-.693 1.04-1.08c.54-.397 1.262-.826 2.29-1.434z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerSquareBoldIcon],svg[solar-danger-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m0 4.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerSquareBoldIcon {
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
  selector: 'svg[solarDangerSquareBrokenIcon],svg[solar-danger-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarDangerSquareBrokenIcon {
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
  selector: 'svg[solarDangerSquareLinearIcon],svg[solar-danger-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarDangerSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerSquareOutlineIcon],svg[solar-danger-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerTriangleBoldIcon],svg[solar-danger-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022zM12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerTriangleBoldIcon {
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
  selector: 'svg[solarDangerTriangleBrokenIcon],svg[solar-danger-triangle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.31 9C8.594 5 9.967 3 12 3c2.31 0 3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572c-.951-1.364-.163-3.165 1.648-6.428M12 8v5"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarDangerTriangleBrokenIcon {
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
  selector: 'svg[solarDangerTriangleLinearIcon],svg[solar-danger-triangle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 8v5"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarDangerTriangleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerTriangleOutlineIcon],svg[solar-danger-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.294 4.476C9.366 3.115 10.502 2.25 12 2.25s2.634.865 3.706 2.226c1.054 1.34 2.17 3.32 3.6 5.855l.436.772c1.181 2.095 2.115 3.75 2.605 5.077c.5 1.358.62 2.59-.138 3.677c-.735 1.055-1.962 1.486-3.51 1.69c-1.541.203-3.615.203-6.274.203h-.85c-2.66 0-4.733 0-6.274-.203c-1.548-.204-2.775-.635-3.51-1.69c-.758-1.087-.639-2.32-.138-3.677c.49-1.328 1.424-2.982 2.605-5.077l.436-.772c1.429-2.535 2.546-4.516 3.6-5.855m1.179.928C8.499 6.641 7.437 8.52 5.965 11.13l-.364.645c-1.226 2.174-2.097 3.724-2.54 4.925c-.438 1.186-.378 1.814-.04 2.3c.361.516 1.038.87 2.476 1.06c1.432.188 3.406.19 6.14.19h.727c2.733 0 4.707-.002 6.14-.19c1.437-.19 2.114-.544 2.474-1.06c.339-.486.4-1.114-.038-2.3c-.444-1.201-1.315-2.751-2.541-4.925l-.364-.645c-1.472-2.61-2.534-4.489-3.508-5.726C13.562 4.18 12.813 3.75 12 3.75s-1.562.429-2.527 1.654" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseBoldIcon],svg[solar-database-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4v-4.026c.502.617 1.215 1.129 2.008 1.525C7.58 16.285 9.7 16.75 12 16.75s4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526z"></svg:path><svg:path fill="currentColor" d="M12 10.75c2.3 0 4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526V12c0 .5-1.786 1.591-2.679 2.158c-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.5 13.568 4 12.5 4 12V7.974c.502.617 1.215 1.129 2.008 1.525C7.58 10.285 9.7 10.75 12 10.75"></svg:path><svg:path fill="currentColor" d="M17.321 8.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092c-.515-.202-1.673-.843-2.477-1.879a.8.8 0 0 1-.162-.621c.023-.148.055-.301.096-.396C4.828 3.406 8.086 2 12 2s7.172 1.406 7.864 3.262c.041.095.073.248.096.396a.8.8 0 0 1-.162.621c-.804 1.036-1.962 1.677-2.477 1.879"></svg:path>`,
})
export class SolarDatabaseBoldIcon {
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
  selector: 'svg[solarDatabaseBrokenIcon],svg[solar-database-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 18V6m16 6v6"></svg:path><svg:path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Z"></svg:path><svg:path stroke-linecap="round" d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path><svg:path d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path></svg:g>`,
})
export class SolarDatabaseBrokenIcon {
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
  selector: 'svg[solarDatabaseLinearIcon],svg[solar-database-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 18V6m16 0v12"></svg:path><svg:path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Zm8 2c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 6c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path></svg:g>`,
})
export class SolarDatabaseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseOutlineIcon],svg[solar-database-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 6c0-1.542 1.23-2.736 2.758-3.5C7.58 1.716 9.7 1.25 12 1.25s4.42.465 5.992 1.25c1.528.764 2.758 1.958 2.758 3.5v12c0 1.542-1.23 2.735-2.758 3.5c-1.572.785-3.692 1.25-5.992 1.25s-4.42-.465-5.992-1.25C4.48 20.734 3.25 19.541 3.25 18zm1.5 0c0-.667.56-1.474 1.929-2.158C8.002 3.181 9.882 2.75 12 2.75s3.998.43 5.321 1.092C18.69 4.526 19.25 5.332 19.25 6s-.56 1.474-1.929 2.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092C5.31 7.474 4.75 6.668 4.75 6m0 12c0 .667.56 1.474 1.929 2.158c1.323.661 3.203 1.092 5.321 1.092s3.998-.43 5.321-1.092c1.368-.684 1.929-1.49 1.929-2.158v-3.293c-.377.3-.804.565-1.258.792C16.42 16.285 14.3 16.75 12 16.75s-4.42-.465-5.992-1.25a7 7 0 0 1-1.258-.793zm14.5-9.293V12c0 .667-.56 1.474-1.929 2.158c-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.31 13.474 4.75 12.668 4.75 12V8.707c.377.3.804.565 1.258.792C7.58 10.285 9.7 10.75 12 10.75s4.42-.465 5.992-1.25a7 7 0 0 0 1.258-.793" clip-rule="evenodd"></svg:path>`,
})
export class SolarDatabaseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDeliveryBoldIcon],svg[solar-delivery-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324"></svg:path><svg:path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"></svg:path>`,
})
export class SolarDeliveryBoldIcon {
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
  selector: 'svg[solarDeliveryBrokenIcon],svg[solar-delivery-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.165 6.236c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.226-.38.255-.816.154-1.423"></svg:path></svg:g>`,
})
export class SolarDeliveryBrokenIcon {
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
  selector: 'svg[solarDeliveryLinearIcon],svg[solar-delivery-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324c.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307c.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325c-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306c-.713-.4-.955-1.277-1.44-3.032z"></svg:path></svg:g>`,
})
export class SolarDeliveryLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDeliveryOutlineIcon],svg[solar-delivery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.09 2.549c-.552-.31-1.14-.34-1.761-.263c-.59.074-1.309.26-2.172.485l-2.019.524c-.863.225-1.581.411-2.13.634c-.579.234-1.079.548-1.403 1.093c-.326.548-.358 1.134-.277 1.746c.077.577.27 1.277.5 2.111l.543 1.964c.23.835.424 1.534.655 2.07c.245.57.572 1.055 1.128 1.367c.552.309 1.14.34 1.762.262c.59-.073 1.309-.26 2.172-.485l2.019-.524c.863-.224 1.581-.411 2.13-.634c.579-.234 1.079-.548 1.403-1.093c.326-.548.358-1.134.277-1.745c-.077-.577-.27-1.278-.5-2.112l-.543-1.964c-.23-.834-.424-1.534-.655-2.07c-.245-.57-.573-1.055-1.128-1.366m-3.605 1.686c.925-.24 1.548-.4 2.03-.46c.461-.058.682-.007.843.083c.157.088.308.241.483.65c.185.43.353 1.029.601 1.927l.514 1.863c.249.898.413 1.498.474 1.96c.058.439.006.638-.08.781c-.087.147-.245.296-.675.47c-.448.181-1.07.345-1.995.585l-1.92.499c-.925.24-1.548.4-2.03.46c-.462.059-.682.008-.843-.082c-.157-.088-.308-.242-.483-.65c-.185-.43-.353-1.03-.601-1.928l-.514-1.862c-.249-.9-.413-1.499-.474-1.96c-.058-.44-.006-.638.08-.782c.087-.147.245-.296.675-.47c.448-.181 1.07-.344 1.995-.585z"></svg:path><svg:path d="M3.2 4.725a.75.75 0 0 0-.4 1.445l1.703.473c.426.118.743.44.851.831l1.952 7.063q-.113.022-.225.052c-1.977.513-3.185 2.502-2.643 4.467c.54 1.955 2.594 3.082 4.563 2.57c1.724-.447 2.863-2.016 2.767-3.712l8.42-2.188a.75.75 0 0 0-.377-1.452l-8.438 2.193a3.72 3.72 0 0 0-2.506-1.91L6.8 7.074a2.71 2.71 0 0 0-1.896-1.878zM7.459 16.04c1.212-.314 2.428.389 2.74 1.519c.31 1.12-.37 2.303-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616"></svg:path></svg:g>`,
})
export class SolarDeliveryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDevicesBoldIcon],svg[solar-devices-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22c-1.7 0-3.015 0-4.056-.107c.335-.525.454-1.082.506-1.598c.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729c-.054-.533-.18-1.11-.54-1.65a3.5 3.5 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A14 14 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10m-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDevicesBoldIcon {
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
  selector: 'svg[solarDevicesBrokenIcon],svg[solar-devices-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10c0-3.771 0-5.657-1.172-6.828S17.772 2 14 2S8.343 2 7.172 3.172C6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"></svg:path><svg:path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></svg:path><svg:path stroke-linecap="round" d="M17 19h-5"></svg:path></svg:g>`,
})
export class SolarDevicesBrokenIcon {
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
  selector: 'svg[solarDevicesLinearIcon],svg[solar-devices-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6.009 8c.036-2.48.22-3.885 1.163-4.828C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"></svg:path><svg:path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></svg:path><svg:path stroke-linecap="round" d="M17 19h-5"></svg:path></svg:g>`,
})
export class SolarDevicesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDevicesOutlineIcon],svg[solar-devices-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H12a.75.75 0 0 1 0-1.5h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.139-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14s-3.261.002-4.289.14c-1.006.135-1.586.389-2.009.812c-.696.696-.907 1.777-.943 4.309a.75.75 0 1 1-1.5-.022c.035-2.427.192-4.158 1.382-5.348c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-8.482 9h.076c.67 0 1.229 0 1.681.046c.473.048.913.153 1.309.418c.3.2.558.458.759.758c.264.396.369.835.417 1.309c.046.452.046 1.011.046 1.68v4.077c0 .67 0 1.229-.046 1.681c-.048.473-.153.913-.417 1.309a2.8 2.8 0 0 1-.76.759c-.395.264-.835.369-1.308.417c-.452.046-1.011.046-1.68.046h-.077c-.67 0-1.229 0-1.681-.046c-.473-.048-.913-.153-1.309-.418a2.8 2.8 0 0 1-.759-.758c-.264-.396-.369-.835-.417-1.309c-.046-.452-.046-1.011-.046-1.68v-4.077c0-.67 0-1.229.046-1.681c.048-.474.153-.913.417-1.309c.201-.3.459-.558.76-.758c.395-.265.835-.37 1.308-.418c.452-.046 1.011-.046 1.68-.046m-1.53 1.538c-.354.036-.518.1-.626.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567v4c0 .718 0 1.2.038 1.567c.036.355.1.519.173.628c.09.136.208.253.345.344c.108.073.272.137.627.173c.367.037.85.038 1.567.038c.718 0 1.2 0 1.567-.038c.355-.036.519-.1.627-.173c.137-.09.254-.208.345-.344c.073-.109.137-.273.173-.628c.037-.367.038-.85.038-1.567v-4c0-.718 0-1.2-.038-1.567c-.036-.355-.1-.519-.173-.627a1.3 1.3 0 0 0-.345-.345c-.108-.073-.272-.137-.627-.173c-.367-.037-.85-.038-1.567-.038c-.718 0-1.2 0-1.567.038M11.25 19a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDevicesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramDownBoldIcon],svg[solar-diagram-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z"></svg:path><svg:path fill="currentColor" d="M6.587 6.534a.75.75 0 0 0-1.174.932l3.133 3.946c.226.284.418.527.59.714c.177.196.373.379.62.51a2.25 2.25 0 0 0 2.033.045c.252-.121.456-.296.642-.483c.179-.18.382-.414.62-.688l.016-.018c.258-.298.428-.493.566-.633c.136-.136.199-.174.227-.187a.75.75 0 0 1 .678.014c.028.015.088.056.218.198c.133.145.294.347.539.656l3.118 3.926a.75.75 0 0 0 1.174-.932l-3.133-3.946a15 15 0 0 0-.589-.714a2.3 2.3 0 0 0-.62-.51a2.25 2.25 0 0 0-2.034-.045a2.4 2.4 0 0 0-.642.483c-.179.18-.381.414-.62.688l-.015.018c-.259.298-.428.493-.567.633c-.136.136-.198.174-.227.188a.75.75 0 0 1-.678-.015a1 1 0 0 1-.218-.198a14 14 0 0 1-.538-.656z"></svg:path>`,
})
export class SolarDiagramDownBoldIcon {
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
  selector: 'svg[solarDiagramDownBrokenIcon],svg[solar-diagram-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19 15l-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005s-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7m16 15H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V9m0-7v3"></svg:path>`,
})
export class SolarDiagramDownBrokenIcon {
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
  selector: 'svg[solarDiagramDownLinearIcon],svg[solar-diagram-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2"></svg:path><svg:path d="m19 15l-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005s-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7"></svg:path></svg:g>`,
})
export class SolarDiagramDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramDownOutlineIcon],svg[solar-diagram-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z"></svg:path><svg:path fill="currentColor" d="M19.588 14.534a.75.75 0 1 1-1.175.932l-3.118-3.926c-.245-.309-.406-.51-.539-.656c-.13-.143-.19-.183-.218-.198a.75.75 0 0 0-.678-.014c-.028.013-.09.05-.227.187c-.138.14-.308.335-.566.633l-.017.018c-.237.274-.44.508-.62.688a2.3 2.3 0 0 1-.64.483a2.25 2.25 0 0 1-2.035-.044a2.3 2.3 0 0 1-.62-.51c-.17-.188-.363-.43-.589-.715L5.413 7.466a.75.75 0 0 1 1.174-.932l3.119 3.926c.245.309.406.51.538.656c.13.143.19.183.218.198a.75.75 0 0 0 .678.014c.029-.013.091-.05.227-.187c.139-.14.308-.335.567-.633l.016-.018c.238-.274.44-.508.62-.688c.185-.187.389-.362.64-.483a2.25 2.25 0 0 1 2.035.044c.247.132.442.316.62.51c.17.188.363.43.59.715z"></svg:path>`,
})
export class SolarDiagramDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramUpBoldIcon],svg[solar-diagram-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z"></svg:path><svg:path fill="currentColor" d="M19.588 7.466a.75.75 0 1 0-1.175-.932l-3.118 3.926c-.245.309-.406.51-.539.656c-.13.143-.19.183-.218.198a.75.75 0 0 1-.678.014c-.028-.013-.09-.05-.227-.187c-.138-.14-.308-.335-.566-.633l-.017-.018c-.237-.274-.44-.508-.62-.688a2.3 2.3 0 0 0-.64-.483a2.25 2.25 0 0 0-2.035.044a2.3 2.3 0 0 0-.62.51c-.17.188-.363.43-.589.715l-3.133 3.946a.75.75 0 1 0 1.174.932l3.119-3.926c.245-.309.406-.51.538-.656c.13-.143.19-.183.218-.198a.75.75 0 0 1 .678-.014c.029.013.091.05.227.187c.139.14.308.335.567.633l.016.018c.238.274.44.508.62.688c.185.187.389.362.64.483a2.25 2.25 0 0 0 2.035-.044a2.4 2.4 0 0 0 .62-.51c.17-.188.363-.43.59-.715z"></svg:path>`,
})
export class SolarDiagramUpBoldIcon {
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
  selector: 'svg[solarDiagramUpBrokenIcon],svg[solar-diagram-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V9m0-7v3"></svg:path><svg:path d="m19 7l-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005s-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"></svg:path></svg:g>`,
})
export class SolarDiagramUpBrokenIcon {
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
  selector: 'svg[solarDiagramUpLinearIcon],svg[solar-diagram-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2"></svg:path><svg:path d="m19 7l-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005s-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"></svg:path></svg:g>`,
})
export class SolarDiagramUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramUpOutlineIcon],svg[solar-diagram-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z"></svg:path><svg:path fill="currentColor" d="M19.588 7.466a.75.75 0 1 0-1.175-.932l-3.118 3.926c-.245.309-.406.51-.539.656c-.13.143-.19.183-.218.198a.75.75 0 0 1-.678.014c-.028-.013-.09-.05-.227-.187c-.138-.14-.308-.335-.566-.633l-.017-.018c-.237-.274-.44-.508-.62-.688a2.3 2.3 0 0 0-.64-.483a2.25 2.25 0 0 0-2.035.044a2.3 2.3 0 0 0-.62.51c-.17.188-.363.43-.589.715l-3.133 3.946a.75.75 0 1 0 1.174.932l3.119-3.926c.245-.309.406-.51.538-.656c.13-.143.19-.183.218-.198a.75.75 0 0 1 .678-.014c.029.013.091.05.227.187c.139.14.308.335.567.633l.016.018c.238.274.44.508.62.688c.185.187.389.362.64.483a2.25 2.25 0 0 0 2.035-.044a2.4 2.4 0 0 0 .62-.51c.17-.188.363-.43.59-.715z"></svg:path>`,
})
export class SolarDiagramUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialog2BoldIcon],svg[solar-dialog-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.549 21.528l.25-.423c.4-.677.6-1.015.92-1.204s.736-.202 1.568-.229c.781-.025 1.306-.093 1.755-.279a3.86 3.86 0 0 0 2.086-2.086c.294-.709.294-1.607.294-3.403v-.772c0-2.524 0-3.786-.568-4.713a3.86 3.86 0 0 0-1.273-1.273c-.927-.568-2.19-.568-4.713-.568H8.554c-2.524 0-3.786 0-4.713.568A3.86 3.86 0 0 0 2.568 8.42C2 9.346 2 10.61 2 13.132v.771c0 1.797 0 2.695.293 3.404a3.86 3.86 0 0 0 2.087 2.086c.449.186.973.254 1.754.28c.833.026 1.25.039 1.569.228s.52.527.92 1.204l.25.423a.98.98 0 0 0 1.676 0m2.535-7.239a.964.964 0 1 0 0-1.928a.964.964 0 0 0 0 1.928m-2.41-.964a.964.964 0 1 1-1.927 0a.964.964 0 0 1 1.928 0m-4.337.964a.964.964 0 1 0 0-1.928a.964.964 0 0 0 0 1.928" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.17 2c1.151 0 2.067 0 2.802.07c.753.071 1.39.222 1.957.57a4.34 4.34 0 0 1 1.431 1.43c.348.567.498 1.204.57 1.957c.07.736.07 1.651.07 2.803v.787c0 .82 0 1.472-.036 2c-.037.541-.114 1.006-.294 1.44a4.34 4.34 0 0 1-2.428 2.38q-.191.074-.334.122c.014-.469.014-1.003.014-1.605v-.893c0-1.201 0-2.208-.078-3.026c-.082-.857-.259-1.66-.712-2.4a5.36 5.36 0 0 0-1.768-1.768c-.738-.452-1.542-.63-2.4-.711c-.817-.078-1.824-.078-3.026-.078H8.483c-.816 0-1.542 0-2.18.024c.03-.103.07-.22.118-.36q.12-.352.315-.67a4.34 4.34 0 0 1 1.431-1.433c.568-.347 1.205-.498 1.958-.57C10.859 2 11.775 2 12.927 2z"></svg:path>`,
})
export class SolarDialog2BoldIcon {
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
  selector: 'svg[solarDialog2BrokenIcon],svg[solar-dialog-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.87 21.51l.645.382zm.259-.438l-.646-.382zm-2.258 0l.646-.382zm.26.438l-.646.382zM1.25 12.8a.75.75 0 0 0 1.5 0zm1.747 4.044a.75.75 0 0 0-1.385.574zm3.292 2.741l.024-.75zm-1.82-.29l-.287.693zm13.226-2.164l.693.287zm-3.984 2.454l-.024-.75zm1.82-.29l.287.693zM3.91 6.59l-.392-.639zM2.59 7.91l-.64-.392zm5.326 11.912l-.381.646zm6.932-12.908a.75.75 0 1 0 .304-1.47zm3.707 1.934a.75.75 0 1 0-1.469.304zm-7.04 13.044l.26-.438l-1.292-.764l-.26.438zm-3.29-.438l.26.438l1.291-.764l-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122a.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zM6.313 18.835c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138c-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578c.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM8.8 5.25c-1.295 0-2.319 0-3.137.077c-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409c.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995c.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145c-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.2 2.2 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23c.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05c.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28c-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756c.11-.153.174-.203.22-.23l-.763-1.291a2.2 2.2 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061c-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083c.216-.026.501-.036.947-.05zM11.2 6.75c1.798 0 2.873.004 3.648.164l.304-1.47c-.963-.198-2.227-.194-3.952-.194zm7.55 6.05c0-1.725.004-2.989-.195-3.952l-1.469.304c.16.775.164 1.85.164 3.648z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.033 6c.052-.992.183-1.661.52-2.21A3.75 3.75 0 0 1 8.79 2.554C9.692 2 10.92 2 13.375 2h2.25c1.528 0 2.58 0 3.375.133m-1 12.602c.748-.025 1.253-.091 1.685-.27a3.75 3.75 0 0 0 2.03-2.03c.285-.689.285-1.563.285-3.31v-.75c0-1.528 0-2.58-.133-3.375"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.51 13h.008M10 13h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialog2BrokenIcon {
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
  selector: 'svg[solarDialog2LinearIcon],svg[solar-dialog-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.87 21.51l.645.382zm.259-.438l-.646-.382zm-2.258 0l.646-.382zm.26.438l-.646.382zm-6.827-4.38l.693-.286zm3.985 2.455l.024-.75zm-1.82-.29l-.287.693zm13.226-2.164l.693.287zm-3.984 2.454l-.024-.75zm1.82-.29l.287.693zM16.09 6.59l.392-.639zm1.32 1.321l.64-.392zM3.91 6.59l-.392-.64zM2.59 7.91l-.64-.392zm5.326 11.912l-.381.646zm3.599 2.07l.26-.438l-1.292-.764l-.26.438zm-3.29-.438l.26.438l1.291-.764l-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122a.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zm-14.5.8v-.8h-1.5v.8zm-1.5 0c0 .922 0 1.65.04 2.24c.04.596.125 1.104.322 1.578l1.385-.574c-.108-.261-.175-.587-.21-1.106c-.037-.527-.037-1.196-.037-2.138zm5.063 5.235c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138c-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578c.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM11.2 6.75c1.324 0 2.264 0 2.995.07c.72.069 1.16.199 1.503.409l.784-1.279c-.619-.38-1.315-.544-2.145-.623c-.818-.078-1.842-.077-3.137-.077zm7.55 6.05c0-1.295 0-2.319-.077-3.137c-.079-.83-.244-1.526-.623-2.145l-1.279.784c.21.343.34.783.409 1.503c.07.73.07 1.671.07 2.995zm-3.052-5.571a3.25 3.25 0 0 1 1.073 1.073l1.279-.784a4.75 4.75 0 0 0-1.568-1.568zM8.8 5.25c-1.295 0-2.319 0-3.137.077c-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409c.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995c.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145c-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.2 2.2 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23c.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05c.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28c-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756c.11-.153.174-.203.22-.23l-.763-1.291a2.2 2.2 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061c-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083c.216-.026.501-.036.947-.05z"></svg:path><svg:path fill="currentColor" d="m21.715 12.435l.692.287zm-2.03 2.03l.287.693zm.524-11.912l-.392.64zm1.238 1.238l.64-.392zM8.791 2.553l-.392-.64zM7.553 3.79l-.64-.392zm5.822-1.041h2.25v-1.5h-2.25zm7.875 5.625v.75h1.5v-.75zm0 .75c0 .884 0 1.51-.034 2c-.033.486-.096.785-.194 1.023l1.385.574c.187-.451.267-.933.305-1.494c.038-.554.038-1.24.038-2.103zm-.228 3.023a3 3 0 0 1-1.624 1.624l.574 1.386a4.5 4.5 0 0 0 2.435-2.436zM15.625 2.75c1.242 0 2.12 0 2.804.066c.671.064 1.075.184 1.388.376l.784-1.279c-.588-.36-1.249-.516-2.03-.59c-.77-.074-1.733-.073-2.946-.073zm7.125 5.625c0-1.213 0-2.175-.073-2.946c-.074-.781-.23-1.442-.59-2.03l-1.28.784c.193.313.313.717.377 1.388c.065.683.066 1.562.066 2.804zm-2.933-5.183a3 3 0 0 1 .99.99l1.28-.783A4.5 4.5 0 0 0 20.6 1.913zM13.375 1.25c-1.213 0-2.175 0-2.946.072c-.781.075-1.442.23-2.03.591l.783 1.28c.314-.193.718-.313 1.39-.377c.682-.065 1.56-.066 2.803-.066zm-4.976.663A4.5 4.5 0 0 0 6.913 3.4l1.279.784a3 3 0 0 1 .99-.99zM7.782 6.04c.05-.96.175-1.473.41-1.856L6.913 3.4c-.437.713-.576 1.538-.629 2.562zm10.243 9.446c.767-.026 1.384-.094 1.947-.327l-.574-1.386c-.302.125-.694.19-1.423.214z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.51 13h.008M10 13h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialog2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialog2OutlineIcon],svg[solar-dialog-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.337 1.25h2.326c1.195 0 2.146 0 2.908.072c.781.075 1.442.23 2.03.591A4.5 4.5 0 0 1 22.087 3.4c.36.588.516 1.249.59 2.03c.073.762.073 1.713.073 2.908v.815c0 .85 0 1.527-.038 2.076c-.038.561-.118 1.043-.305 1.494a4.5 4.5 0 0 1-2.435 2.436c-.38.157-.783.239-1.241.284q-.009.21-.02.398c-.041.596-.126 1.104-.323 1.578a4.75 4.75 0 0 1-2.57 2.57c-.597.248-1.255.32-2.083.347c-.446.014-.73.024-.947.05c-.204.025-.281.058-.323.083c-.046.027-.11.077-.22.23c-.12.165-.256.393-.47.756l-.26.438c-.677 1.144-2.353 1.144-3.03 0l-.26-.438c-.214-.363-.35-.591-.47-.756c-.11-.153-.174-.203-.22-.23c-.042-.025-.119-.058-.323-.083a12 12 0 0 0-.947-.05c-.828-.027-1.486-.1-2.083-.347a4.75 4.75 0 0 1-2.57-2.57c-.197-.474-.282-.982-.322-1.578c-.04-.584-.04-1.304-.04-2.213v-.866c0-1.276 0-2.288.077-3.098c.079-.83.244-1.526.623-2.145A4.75 4.75 0 0 1 3.518 5.95c.619-.38 1.315-.544 2.145-.623q.315-.03.675-.046c.08-.72.24-1.334.575-1.882A4.5 4.5 0 0 1 8.4 1.913c.588-.36 1.249-.516 2.03-.59c.762-.073 1.713-.073 2.907-.073M7.852 5.251l.908-.001h2.478c1.276 0 2.288 0 3.098.077c.83.079 1.526.244 2.145.623a4.75 4.75 0 0 1 1.568 1.568c.38.619.544 1.315.623 2.145c.077.81.077 1.822.077 3.098v1.169a2.5 2.5 0 0 0 .648-.158a3 3 0 0 0 1.624-1.624c.098-.238.16-.537.194-1.022c.034-.492.034-1.117.034-2.001v-.75c0-1.242 0-2.12-.066-2.804c-.064-.671-.184-1.075-.376-1.388a3 3 0 0 0-.99-.99c-.314-.193-.718-.313-1.39-.377c-.682-.065-1.561-.066-2.803-.066h-2.25c-1.242 0-2.121 0-2.804.066c-.671.064-1.075.184-1.389.376a3 3 0 0 0-.99.99c-.16.263-.27.585-.339 1.07m-2.048 1.57c-.72.068-1.16.198-1.503.408a3.25 3.25 0 0 0-1.073 1.073c-.21.343-.34.783-.409 1.503c-.07.73-.07 1.671-.07 2.995v.8c0 .942 0 1.611.036 2.138c.036.52.103.845.211 1.106a3.25 3.25 0 0 0 1.76 1.759c.333.138.764.207 1.556.232l.031.001c.406.013.758.025 1.05.06c.31.038.615.11.904.28c.285.17.491.393.67.64c.167.23.338.519.533.847l.275.465a.25.25 0 0 0 .224.122a.25.25 0 0 0 .224-.122l.275-.465c.194-.328.366-.618.532-.847a2.2 2.2 0 0 1 .67-.64c.29-.17.595-.242.906-.28a13 13 0 0 1 1.049-.06h.03c.793-.026 1.223-.095 1.558-.233a3.25 3.25 0 0 0 1.759-1.76c.108-.26.175-.586.21-1.105c.037-.527.037-1.196.037-2.138v-.8c0-1.324 0-2.264-.07-2.995c-.069-.72-.199-1.16-.409-1.503a3.25 3.25 0 0 0-1.073-1.073c-.343-.21-.783-.34-1.503-.409c-.73-.07-1.671-.07-2.995-.07H8.8c-1.324 0-2.264 0-2.995.07" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarDialog2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialogBoldIcon],svg[solar-dialog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.5a6.5 6.5 0 0 0-11.626-3.993A9.5 9.5 0 0 1 19.5 14q0 .165-.006.33l.333.088a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14a8 8 0 0 1-11.45 7.22a1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDialogBoldIcon {
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
  selector: 'svg[solarDialogBrokenIcon],svg[solar-dialog-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M14 7.07A8 8 0 0 0 2.835 17.562c.142.285.189.61.107.918l-.477 1.781a1.04 1.04 0 0 0 1.274 1.274l1.78-.477a1.3 1.3 0 0 1 .919.107A8 8 0 0 0 16.93 10"></svg:path><svg:path stroke-width="1.5" d="m18 14.502l.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5a6.47 6.47 0 0 0-1-3.466m-11.5.962A6.502 6.502 0 0 1 19 3.022"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M6.518 14h.01m3.481 0h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialogBrokenIcon {
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
  selector: 'svg[solarDialogLinearIcon],svg[solar-dialog-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M10 22a8 8 0 1 0-7.22-4.55c.172.36.232.766.13 1.15l-.328 1.227a1.3 1.3 0 0 0 1.591 1.592L5.4 21.09a1.67 1.67 0 0 1 1.15.13c1.045.5 2.215.78 3.451.78Z"></svg:path><svg:path stroke-width="1.5" d="m18 14.502l.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 1 0 9.5 5.996"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.518 14h.01m3.481 0h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialogLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialogOutlineIcon],svg[solar-dialog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.989 5.308a7.25 7.25 0 0 1 13.109 6.202c-.11.239-.131.465-.082.647l.127.476c.408 1.524-.986 2.918-2.51 2.51l-.476-.127a.9.9 0 0 0-.467.015a8.75 8.75 0 0 1-12.464 6.865a.92.92 0 0 0-.633-.081l-1.226.328c-1.524.408-2.918-.986-2.51-2.51l.328-1.226a.92.92 0 0 0-.081-.633A8.75 8.75 0 0 1 8.989 5.308m1.746-.028a8.75 8.75 0 0 1 8.001 8.222a2.3 2.3 0 0 1 .808.065l.476.127a.55.55 0 0 0 .674-.674l-.127-.476c-.157-.587-.055-1.173.166-1.658a5.75 5.75 0 0 0-9.998-5.606M10 6.75a7.25 7.25 0 0 0-6.543 10.376a2.42 2.42 0 0 1 .177 1.668l-.328 1.226a.55.55 0 0 0 .673.674l1.227-.328a2.42 2.42 0 0 1 1.668.177A7.25 7.25 0 1 0 10 6.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarDialogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaBoldIcon],svg[solar-diploma-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.476.477-1.11.695-2.04.795a3 3 0 0 0-.195-.234a11 11 0 0 0-.406-.414l-1.493-1.472l-.551-.558a4.501 4.501 0 0 0-8.872 0l-.55.558l-1.494 1.472c-.143.141-.29.286-.406.414c-.05.055-.12.134-.194.234c-.931-.1-1.565-.318-2.041-.795C2 16.243 2 14.828 2 12m7-6.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6.25 9.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M9.001 15.917L9 16a3 3 0 1 0 .001-.083M7.676 17.25l-1.08 1.065c-.325.32-.487.48-.543.614a.643.643 0 0 0 .26.813c.122.071.342.093.783.138c.248.025.373.037.477.075a.84.84 0 0 1 .5.494c.039.103.052.225.077.47c.045.435.068.652.14.773a.66.66 0 0 0 .824.256c.137-.056.3-.215.623-.535l1.08-1.07a4.51 4.51 0 0 1-3.141-3.094m5.507 3.094l1.08 1.07c.324.32.486.48.623.535c.313.126.66.018.824-.256c.072-.12.095-.338.14-.772c.025-.246.038-.368.077-.47a.84.84 0 0 1 .5-.495c.105-.038.229-.05.477-.075c.44-.045.661-.067.783-.138a.643.643 0 0 0 .26-.812c-.056-.136-.218-.296-.542-.615l-1.08-1.066a4.51 4.51 0 0 1-3.142 3.094"></svg:path>`,
})
export class SolarDiplomaBoldIcon {
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
  selector: 'svg[solarDiplomaBrokenIcon],svg[solar-diploma-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="16" r="3"></svg:circle><svg:path d="m12 19.26l-2.263 2.17c-.324.31-.486.465-.623.52c-.313.122-.66.017-.824-.25c-.072-.117-.095-.328-.14-.75c-.025-.239-.038-.358-.077-.458a.83.83 0 0 0-.5-.48c-.104-.037-.229-.049-.477-.073c-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.52c.313.122.66.017.824-.25c.072-.117.095-.328.14-.75c.025-.239.038-.358.077-.458a.83.83 0 0 1 .5-.48c.105-.037.229-.049.477-.073c.44-.043.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17L15 16.073"></svg:path><svg:path stroke-linecap="round" d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879c.49.49.707 1.146.803 2.121M9 6h6M7 9.5h2m8 0h-4.5"></svg:path></svg:g>`,
})
export class SolarDiplomaBrokenIcon {
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
  selector: 'svg[solarDiplomaLinearIcon],svg[solar-diploma-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="16" r="3"></svg:circle><svg:path d="m12 19.26l-2.263 2.17c-.324.31-.486.465-.623.52c-.313.122-.66.017-.824-.25c-.072-.117-.095-.328-.14-.75c-.025-.239-.038-.358-.077-.458a.83.83 0 0 0-.5-.48c-.104-.037-.229-.049-.477-.073c-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.52c.313.122.66.017.824-.25c.072-.117.095-.328.14-.75c.025-.239.038-.358.077-.458a.83.83 0 0 1 .5-.48c.105-.037.229-.049.477-.073c.44-.043.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17L15 16.073"></svg:path><svg:path d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v4c0 2.828 0 4.243.879 5.121c.768.769 1.946.865 4.121.877"></svg:path><svg:path stroke-linecap="round" d="M9 6h6M7 9.5h10"></svg:path></svg:g>`,
})
export class SolarDiplomaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaOutlineIcon],svg[solar-diploma-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.945 1.25h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.498.498-1.105.763-1.816.907a9 9 0 0 1-1.206.146l.007.016c.273.64.04 1.385-.58 1.736a1.5 1.5 0 0 1-.527.166c-.146.022-.33.04-.533.06l-.02.002a7 7 0 0 0-.303.036a.1.1 0 0 0-.033.02l-.012.015l-.005.028c-.007.05-.015.119-.028.245l-.003.02c-.02.194-.039.372-.063.515a1.5 1.5 0 0 1-.181.53c-.375.607-1.122.794-1.736.553a1.6 1.6 0 0 1-.457-.293a11 11 0 0 1-.398-.37L12 20.299l-1.758 1.685c-.15.144-.284.272-.398.37a1.6 1.6 0 0 1-.457.294c-.614.24-1.361.053-1.736-.554a1.5 1.5 0 0 1-.18-.53a8 8 0 0 1-.064-.514l-.003-.02a6 6 0 0 0-.033-.274l-.012-.015a.1.1 0 0 0-.033-.02l-.043-.008a7 7 0 0 0-.26-.028l-.02-.002c-.204-.02-.387-.038-.533-.06a1.5 1.5 0 0 1-.527-.166a1.367 1.367 0 0 1-.58-1.736l.007-.016a9 9 0 0 1-1.094-.124c-.758-.14-1.403-.404-1.928-.93c-.602-.601-.86-1.36-.981-2.26c-.117-.866-.117-1.969-.117-3.336v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M6.733 17.246l.816-.782l.709-.71a3.75 3.75 0 0 1 7.484 0l.71.71l.86.825v-.043c.986-.01 1.69-.048 2.225-.156c.514-.105.822-.267 1.054-.499c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v4c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.243.243.572.41 1.138.515c.539.099 1.234.13 2.186.14m8.683.303a3.76 3.76 0 0 1-2.078 1.955l1.444 1.384c.128.123.219.21.29.274c.009-.076.02-.17.032-.292l.005-.05c.02-.184.042-.401.118-.598c.168-.435.518-.764.95-.917c.194-.069.409-.09.602-.108l.321-.032l-.214-.206zm-3.386.7l-.03-.028l-.03.029a2.25 2.25 0 1 1 .06 0m-1.368 1.255l-1.444 1.384c-.128.123-.219.21-.29.274l-.032-.292l-.005-.05c-.02-.184-.042-.401-.118-.598a1.58 1.58 0 0 0-.95-.917a2.5 2.5 0 0 0-.602-.108l-.32-.032q.083-.083.213-.206l1.47-1.41a3.76 3.76 0 0 0 2.078 1.955M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6m-2 3.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDiplomaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaVerifiedBoldIcon],svg[solar-diploma-verified-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.646.647-1.582.818-3.158.863a3.2 3.2 0 0 0-.767-2.066a.2.2 0 0 1-.05-.12a3.21 3.21 0 0 0-2.944-2.945a.2.2 0 0 1-.12-.05a3.21 3.21 0 0 0-4.164 0a.2.2 0 0 1-.12.05a3.21 3.21 0 0 0-2.945 2.945a.2.2 0 0 1-.05.12a3.2 3.2 0 0 0-.766 2.066c-1.576-.045-2.512-.216-3.158-.863C2 16.243 2 14.828 2 12m6.25-6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6M7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path><svg:path d="M13.11 13.945a1.71 1.71 0 0 0-2.22 0a1.7 1.7 0 0 1-.973.403a1.71 1.71 0 0 0-1.569 1.57c-.028.358-.17.698-.403.973a1.71 1.71 0 0 0 0 2.218c.234.274.375.615.403.973a1.71 1.71 0 0 0 1.57 1.57c.358.028.699.169.973.402a1.71 1.71 0 0 0 2.218 0a1.7 1.7 0 0 1 .973-.403a1.71 1.71 0 0 0 1.57-1.569a1.7 1.7 0 0 1 .402-.973a1.71 1.71 0 0 0 0-2.219a1.7 1.7 0 0 1-.403-.973a1.71 1.71 0 0 0-1.569-1.569a1.7 1.7 0 0 1-.973-.403m.902 3.603a.75.75 0 1 0-1.024-1.096l-1.63 1.522l-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0z"></svg:path></svg:g>`,
})
export class SolarDiplomaVerifiedBoldIcon {
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
  selector: 'svg[solarDiplomaVerifiedBrokenIcon],svg[solar-diploma-verified-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879c.49.49.707 1.146.803 2.121M16.5 17.998l.82-.002c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M9 6h6M7 9.5h2m8 0h-4.5"></svg:path><svg:path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.404a1.71 1.71 0 0 1 1.569 1.568c.028.36.17.7.403.974a1.71 1.71 0 0 1 0 2.218a1.7 1.7 0 0 0-.403.974a1.71 1.71 0 0 1-1.57 1.569a1.7 1.7 0 0 0-.973.403a1.71 1.71 0 0 1-2.218 0a1.7 1.7 0 0 0-.974-.404a1.71 1.71 0 0 1-1.568-1.568a1.7 1.7 0 0 0-.404-.974a1.71 1.71 0 0 1 0-2.218a1.7 1.7 0 0 0 .404-.974a1.71 1.71 0 0 1 1.568-1.568c.36-.029.7-.17.974-.404Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarDiplomaVerifiedBrokenIcon {
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
  selector: 'svg[solarDiplomaVerifiedLinearIcon],svg[solar-diploma-verified-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.73.73-1.829.854-3.801.875l-.82.002"></svg:path><svg:path stroke-linecap="round" d="M9 6h6M7 9.5h10"></svg:path><svg:path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.972.404a1.71 1.71 0 0 1 1.57 1.568c.028.36.169.7.402.974a1.71 1.71 0 0 1 0 2.218a1.7 1.7 0 0 0-.403.974a1.71 1.71 0 0 1-1.569 1.569a1.7 1.7 0 0 0-.973.403a1.71 1.71 0 0 1-2.219 0a1.7 1.7 0 0 0-.973-.404a1.71 1.71 0 0 1-1.569-1.568a1.7 1.7 0 0 0-.403-.974a1.71 1.71 0 0 1 0-2.218a1.7 1.7 0 0 0 .403-.974a1.71 1.71 0 0 1 1.57-1.568c.358-.029.699-.17.973-.404Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarDiplomaVerifiedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaVerifiedOutlineIcon],svg[solar-diploma-verified-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.945 1.25h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.498.498-1.105.763-1.816.907c-.69.14-1.523.176-2.508.187h-.23a2.5 2.5 0 0 1-.473.85a.96.96 0 0 0-.226.546a2.46 2.46 0 0 1-2.257 2.257a.96.96 0 0 0-.546.226a2.46 2.46 0 0 1-3.192 0a.96.96 0 0 0-.546-.226A2.46 2.46 0 0 1 7.6 20.142a.96.96 0 0 0-.226-.546a2.5 2.5 0 0 1-.472-.848c-1.04-.007-1.911-.036-2.627-.167c-.758-.14-1.403-.404-1.928-.93c-.602-.601-.86-1.36-.981-2.26c-.117-.866-.117-1.969-.117-3.336v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117m-1.04 15.998c.096-.302.253-.59.47-.844a.96.96 0 0 0 .226-.546A2.46 2.46 0 0 1 9.858 13.6a.96.96 0 0 0 .546-.227a2.46 2.46 0 0 1 3.192 0a.96.96 0 0 0 .546.227a2.46 2.46 0 0 1 2.257 2.257a.96.96 0 0 0 .226.546c.217.254.373.54.47.842h.22c.985-.01 1.687-.048 2.222-.156c.514-.105.822-.267 1.054-.499c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v4c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.243.243.572.41 1.138.515c.57.104 1.316.134 2.357.142M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6m-2 3.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m6.373 5.016a.96.96 0 0 0-1.246 0a2.46 2.46 0 0 1-1.4.58a.96.96 0 0 0-.88.881a2.46 2.46 0 0 1-.58 1.4a.96.96 0 0 0 0 1.246c.335.394.538.884.58 1.4a.96.96 0 0 0 .88.88a2.46 2.46 0 0 1 1.4.58a.96.96 0 0 0 1.246 0a2.46 2.46 0 0 1 1.4-.58a.96.96 0 0 0 .88-.88a2.46 2.46 0 0 1 .58-1.4a.96.96 0 0 0 0-1.246a2.46 2.46 0 0 1-.58-1.4a.96.96 0 0 0-.88-.88a2.46 2.46 0 0 1-1.4-.58m.365 1.936a.75.75 0 1 1 1.024 1.096l-2.143 2a.75.75 0 0 1-1.024 0l-.857-.8a.75.75 0 0 1 1.024-1.096l.345.322z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDiplomaVerifiedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisketteBoldIcon],svg[solar-diskette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c.685.685 1.563 1.05 2.786 1.243v-.83c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.83c1.223-.194 2.102-.558 2.785-1.242M6.25 8A.75.75 0 0 1 7 7.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.183 18.905c.065.483.067 1.131.067 2.095v.931C15.094 22 13.7 22 12 22s-3.094 0-4.25-.069V21c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066h2c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788"></svg:path>`,
})
export class SolarDisketteBoldIcon {
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
  selector: 'svg[solarDisketteBrokenIcon],svg[solar-diskette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 22v-1c0-1.886 0-2.828-.586-3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586S7 19.114 7 21v1"></svg:path><svg:path stroke-linecap="round" d="M7 8h6M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path></svg:g>`,
})
export class SolarDisketteBrokenIcon {
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
  selector: 'svg[solarDisketteLinearIcon],svg[solar-diskette-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path d="M17 22v-1c0-1.886 0-2.828-.586-3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586S7 19.114 7 21v1"></svg:path><svg:path stroke-linecap="round" d="M7 8h6"></svg:path></svg:g>`,
})
export class SolarDisketteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisketteOutlineIcon],svg[solar-diskette-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.62 2.762A8 8 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.513.513 1.19.829 2.255 1.012v-.07c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.07c1.065-.183 1.742-.5 2.255-1.013c.57-.57.897-1.34 1.069-2.619c.174-1.3.176-3.008.176-5.386c0-.353 0-.487-.012-.62a3.3 3.3 0 0 0-.749-1.807a8 8 0 0 0-.439-.457L14.884 3.95a8 8 0 0 0-.457-.44a3.3 3.3 0 0 0-1.806-.748m3.63 18.418V21c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v.18c1.126.07 2.508.07 4.25.07s3.124 0 4.25-.07m-4.22-19.93c.312 0 .513 0 .72.018a4.8 4.8 0 0 1 2.64 1.094c.16.133.305.279.53.504l.024.023l5.19 5.19c.224.225.37.37.503.53a4.8 4.8 0 0 1 1.094 2.64c.018.207.018.408.018.72v.088c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19zM6.25 8A.75.75 0 0 1 7 7.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8" clip-rule="evenodd"></svg:path>`,
})
export class SolarDisketteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDislikeBoldIcon],svg[solar-dislike-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDislikeBoldIcon {
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
  selector: 'svg[solarDislikeBrokenIcon],svg[solar-dislike-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zM3.971 2.529l-.748-.064zM3 13.766l.747.064a.75.75 0 0 1-1.497-.064zm17.236-1.823l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A7 7 0 0 0 9.2 17.89zm2.06 3.991a.89.89 0 0 0 .596-.61l1.452.376a2.38 2.38 0 0 1-1.589 1.662zm-.863-.313a.51.51 0 0 0 .28.33l-.651 1.351a2.01 2.01 0 0 1-1.081-1.305zm.28.33a.6.6 0 0 0 .438.03l.459 1.428a2.1 2.1 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm11.511 16.192c.125.76.09 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.897-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zM3.487 2.75a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237zm9.105 12.105a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.92.92 0 0 0 .316.774l-.98 1.137a2.42 2.42 0 0 1-.83-2.04z"></svg:path>`,
})
export class SolarDislikeBrokenIcon {
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
  selector: 'svg[solarDislikeLinearIcon],svg[solar-dislike-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zM3.971 2.529l-.748-.064zM3 13.766l.747.064a.75.75 0 0 1-1.497-.064zm17.236-1.823l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A7 7 0 0 0 9.2 17.89zm2.06 3.991a.89.89 0 0 0 .596-.61l1.452.376a2.38 2.38 0 0 1-1.589 1.662zm-.863-.313a.51.51 0 0 0 .28.33l-.651 1.351a2.01 2.01 0 0 1-1.081-1.305zm.28.33a.6.6 0 0 0 .438.03l.459 1.428a2.1 2.1 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm11.511 16.192c.125.76.09 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.897-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zM3.487 2.75a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237zm9.105 12.105a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.92.92 0 0 0 .316.774l-.98 1.137a2.42 2.42 0 0 1-.83-2.04z"></svg:path>`,
})
export class SolarDislikeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDislikeOutlineIcon],svg[solar-dislike-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.438 21.222a.6.6 0 0 1-.438-.03a.52.52 0 0 1-.28-.33l-.476-1.834a8.4 8.4 0 0 0-.72-1.844c-.485-.907-1.218-1.604-1.898-2.19l-1.438-1.24a.92.92 0 0 1-.315-.774l.812-9.392a.916.916 0 0 1 .911-.838h4.649c3.136 0 5.779 2.182 6.286 5.113l.705 4.08a.916.916 0 0 1-.901 1.073h-5.181c-.977 0-1.72.876-1.562 1.84l.663 4.044c.09.554.065 1.12-.076 1.664a.89.89 0 0 1-.596.611zl.23.714zm-1.09 1.321a2.1 2.1 0 0 0 1.549.107l.145-.047l-.23-.714l.23.714a2.38 2.38 0 0 0 1.589-1.662a5.5 5.5 0 0 0 .104-2.284l-.663-4.044a.083.083 0 0 1 .082-.097h5.18c1.5 0 2.636-1.352 2.38-2.829l-.705-4.08C20.37 3.92 17.07 1.25 13.245 1.25H8.596c-1.253 0-2.297.96-2.405 2.208l-.813 9.393a2.42 2.42 0 0 0 .83 2.04l1.44 1.24c.655.564 1.206 1.111 1.552 1.76c.257.48.456.988.592 1.514l.476 1.833a2.01 2.01 0 0 0 1.08 1.305m-8.38-8.028a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDislikeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisplayBoldIcon],svg[solar-display-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.76c0-2.715 0-4.073.879-4.916C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.844c.879.843.879 2.2.879 4.916v.96c0 2.715 0 4.073-.879 4.916c-.878.844-2.293.844-5.121.844h-3.25v2.36l5.487 1.757a.714.714 0 0 1 .475.91a.76.76 0 0 1-.95.456L12 19.119l-5.763 1.844a.757.757 0 0 1-.949-.456a.714.714 0 0 1 .475-.91l5.487-1.756V15.48H8c-2.828 0-4.243 0-5.121-.844C2 13.793 2 12.436 2 9.72z"></svg:path>`,
})
export class SolarDisplayBoldIcon {
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
  selector: 'svg[solarDisplayBrokenIcon],svg[solar-display-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879c-.3.3-.498.662-.628 1.121M2 9v1c0 2.828 0 4.243.879 5.121C3.757 16 5.172 16 8 16h8c2.828 0 4.243 0 5.121-.879c.3-.3.498-.662.628-1.121M12 19v-2.5m0 2.5l6 2m-6-2l-6 2"></svg:path>`,
})
export class SolarDisplayBrokenIcon {
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
  selector: 'svg[solarDisplayLinearIcon],svg[solar-display-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 9c0-2.828 0-4.243.879-5.121C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.879C22 4.757 22 6.172 22 9v1c0 2.828 0 4.243-.879 5.121C20.243 16 18.828 16 16 16H8c-2.828 0-4.243 0-5.121-.879C2 14.243 2 12.828 2 10z"></svg:path><svg:path stroke-linecap="round" d="M12 19v-2.5m0 2.5l6 2m-6-2l-6 2"></svg:path></svg:g>`,
})
export class SolarDisplayLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisplayOutlineIcon],svg[solar-display-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.945 2.25h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v1.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116H12.75v1.71l5.487 1.828a.75.75 0 0 1-.474 1.424L12 19.79l-5.763 1.92a.75.75 0 1 1-.474-1.422l5.487-1.83V16.75H7.945c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-1.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.808 3.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 6.562 2.75 7.564 2.75 9v1c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V9c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103" clip-rule="evenodd"></svg:path>`,
})
export class SolarDisplayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaBoldIcon],svg[solar-dna-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.03 1.47a.75.75 0 0 1 0 1.06q-.624.626-1.12 1.32l1.207 1.207a.75.75 0 0 1-1.06 1.06l-.948-.948q-.316.622-.535 1.266l4.879 4.878a1 1 0 0 1 .096.118a10 10 0 0 0 1.207-.502L15.748 7.92a.75.75 0 1 1 1.06-1.06l3.276 3.275q.73-.512 1.386-1.166a.75.75 0 1 1 1.06 1.06c-2.622 2.623-6.264 3.854-9.556 3.213c.75 3.175-.4 6.744-2.944 9.287a.75.75 0 1 1-1.06-1.06a10 10 0 0 0 1.158-1.395l-1.354-1.353a.75.75 0 1 1 1.061-1.06l1.063 1.062q.279-.606.463-1.228l-.048-.044L6.5 12.64q-.66.195-1.302.499l2.831 2.83a.75.75 0 0 1-1.06 1.062l-3.112-3.113q-.7.488-1.328 1.112a.75.75 0 0 1-1.06-1.06c2.543-2.544 6.112-3.693 9.287-2.944c-.64-3.292.59-6.934 3.213-9.556a.75.75 0 0 1 1.06 0m.82 10.362l-3.68-3.682c-.159 1.17-.073 2.334.271 3.412c1.078.344 2.242.43 3.412.271m-4.52 1.122c.299.867.413 1.8.353 2.747l-3.384-3.384c.947-.06 1.88.054 2.747.353l.212.072z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDnaBoldIcon {
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
  selector: 'svg[solarDnaBrokenIcon],svg[solar-dna-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29m.5-7l1.843 1.922m-5.078-5.079L8 13.08m3.844-6.315L14 9m2 2l.922.843M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4"></svg:path>`,
})
export class SolarDnaBrokenIcon {
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
