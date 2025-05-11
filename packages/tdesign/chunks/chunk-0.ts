import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignActivityFilledIcon],svg[tdesign-activity-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v9h-4.554l-2.021 3.233l-5.865-7.82L5.546 11H2z"></svg:path><svg:path fill="currentColor" d="M2 13v9h20v-9h-3.446l-2.979 4.767l-6.135-8.18L6.454 13z"></svg:path>`,
})
export class TdesignActivityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAccessibilityIcon],svg[tdesign-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 2M8.75 3.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0m-6.5 6.375A2.625 2.625 0 0 1 4.875 7h14.25a2.625 2.625 0 0 1 0 5.25h-2.628l1.823 8.208a2.5 2.5 0 0 1-2.44 3.042h-2.142L12 17.198L10.261 23.5H8.12a2.5 2.5 0 0 1-2.44-3.042l1.823-8.208H4.875A2.625 2.625 0 0 1 2.25 9.625M4.875 9a.625.625 0 1 0 0 1.25h5.122L7.632 20.892a.5.5 0 0 0 .488.608h.619l2-7.25h2.522l2 7.25h.62a.5.5 0 0 0 .487-.608L14.003 10.25h5.122a.625.625 0 1 0 0-1.25z"></svg:path>`,
})
export class TdesignAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignActivityIcon],svg[tdesign-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-2 2v7h-2.554l-2.021 3.233l-5.865-7.82L5.546 11H4V4zM4 13h2.454L9.44 9.587l6.135 8.18L18.555 13H20v7H4z"></svg:path>`,
})
export class TdesignActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAccessibilityFilledIcon],svg[tdesign-accessibility-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5A2.25 2.25 0 1 0 12 0a2.25 2.25 0 0 0 0 4.5M21.75 7V5.5H2.25V7l6.5 1.75L9 12L4.75 22.75l1.5.75l5.745-9h.01l5.745 9l1.5-.75L15 12l.25-3.25z"></svg:path>`,
})
export class TdesignAccessibilityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddCircleFilledIcon],svg[tdesign-add-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m1 12v4.5h-2V13H6.5v-2H11V6.5h2V11h4.5v2z"></svg:path>`,
})
export class TdesignAddCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddCircleIcon],svg[tdesign-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-5.5V11h4.5v2H13v4.5h-2V13H6.5v-2H11V6.5z"></svg:path>`,
})
export class TdesignAddCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddRectangleIcon],svg[tdesign-add-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm9 2.5V11h4.5v2H13v4.5h-2V13H6.5v-2H11V6.5z"></svg:path>`,
})
export class TdesignAddRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddIcon],svg[tdesign-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z"></svg:path>`,
})
export class TdesignAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddAndSubtractIcon],svg[tdesign-add-and-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v8h8v2h-8v8h-2v-8H3V9h8V1zM3 20h18v2H3z"></svg:path>`,
})
export class TdesignAddAndSubtractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddRectangleFilledIcon],svg[tdesign-add-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm11 4.5h-2V11H6.5v2H11v4.5h2V13h4.5v-2H13z"></svg:path>`,
})
export class TdesignAddRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddressBookIcon],svg[tdesign-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a4 4 0 0 1 4-4h14v20H7a4 4 0 0 1-4-4zm2 8.535A4 4 0 0 1 7 14h12V4h-2v6.766l-3.5-2.1l-3.5 2.1V4H7a2 2 0 0 0-2 2zM19 16H7a2 2 0 1 0 0 4h12zM15 4h-3v3.234l1.5-.9l1.5.9z"></svg:path>`,
})
export class TdesignAddressBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAddressBookFilledIcon],svg[tdesign-address-book-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14V2zm10 7.75l-2.5-2.062L12 9.75V4h5zM5 18a2 2 0 0 1 2-2h12v4H7a2 2 0 0 1-2-2"></svg:path>`,
})
export class TdesignAddressBookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAdjustmentIcon],svg[tdesign-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5.17 4a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2V4zm8 7a3.001 3.001 0 0 1 5.66 0H22v2h-3.17a3.001 3.001 0 0 1-5.66 0H2v-2zM16 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2v-2z"></svg:path>`,
})
export class TdesignAdjustmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAdjustmentFilledIcon],svg[tdesign-adjustment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.17 4a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2V4zm8 7a3.001 3.001 0 0 1 5.66 0H22v2h-3.17a3.001 3.001 0 0 1-5.66 0H2v-2zm-8 7a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2v-2z"></svg:path>`,
})
export class TdesignAdjustmentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAirplayWaveIcon],svg[tdesign-airplay-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v17h-5.5v-2H21V5H3l.001 13h3.5v2H1zm15.95 10.383a7 7 0 0 0-9.9 0l-.706.707l-1.414-1.414l.707-.707a9 9 0 0 1 12.728 0l.707.707l-1.415 1.414zm-2.828 2.828a3 3 0 0 0-4.243 0l-.707.707l-1.414-1.414l.707-.707a5 5 0 0 1 7.07 0l.708.707l-1.414 1.414zM12 18.086L15.914 22H8.086z"></svg:path>`,
})
export class TdesignAirplayWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAirplayWaveFilledIcon],svg[tdesign-airplay-wave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1l.001 17h6.964L12 15.964L16.036 20H23zm-6.05 8.383a7 7 0 0 0-9.899 0l-.707.707l-1.414-1.414l.707-.707a9 9 0 0 1 12.728 0l.707.707l-1.414 1.414zm-2.828 2.828a3 3 0 0 0-4.243 0l-.707.707l-1.414-1.414l.707-.707a5 5 0 0 1 7.071 0l.707.707l-1.414 1.414z"></svg:path><svg:path fill="currentColor" d="M15.914 22L12 18.086L8.086 22z"></svg:path>`,
})
export class TdesignAirplayWaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmIcon],svg[tdesign-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.914 2.5L1.5 7.914L.086 6.5L5.5 1.086zM18.5 1.086L23.914 6.5L22.5 7.914L17.086 2.5zM12 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 13C2 7.477 6.477 3 12 3s10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13m11-5.5v5.086L16.414 16L15 17.414l-4-4V7.5z"></svg:path>`,
})
export class TdesignAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmAddIcon],svg[tdesign-alarm-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.914 2.5L1.5 7.914L.086 6.5L5.5 1.086zM18.5 1.086L23.914 6.5L22.5 7.914L17.086 2.5zM12 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 13C2 7.477 6.477 3 12 3s10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13m11-5v4h4v2h-4v4h-2v-4H7v-2h4V8z"></svg:path>`,
})
export class TdesignAlarmAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmAddFilledIcon],svg[tdesign-alarm-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 7.914L6.914 2.5L5.5 1.086L.086 6.5zM23.914 6.5L18.5 1.086L17.086 2.5L22.5 7.914zM12 3C6.477 3 2 7.477 2 13s4.477 10 10 10s10-4.477 10-10S17.523 3 12 3m5 11h-4v4h-2v-4H7v-2h4V8h2v4h4z"></svg:path>`,
})
export class TdesignAlarmAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmFilledIcon],svg[tdesign-alarm-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 7.914L6.914 2.5L5.5 1.086L.086 6.5zM23.914 6.5L18.5 1.086L17.086 2.5L22.5 7.914zM12 3C6.477 3 2 7.477 2 13s4.477 10 10 10s10-4.477 10-10S17.523 3 12 3m3 14.414l-4-4V7.5h2v5.086L16.414 16z"></svg:path>`,
})
export class TdesignAlarmFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmOffIcon],svg[tdesign-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.086 6.5l2.5-2.5l-2-2L2 .586l2 2l1.5-1.5L6.914 2.5L5.414 4l18 18L22 23.414l-3.139-3.139A9.97 9.97 0 0 1 12.001 23C6.476 23 2 18.523 2 13a9.97 9.97 0 0 1 2.724-6.861L4 5.414l-2.5 2.5zM6.14 7.554A8 8 0 0 0 17.446 18.86zm2.421-4l.97-.246A10 10 0 0 1 12 3c5.523 0 10 4.477 10 10c0 .851-.107 1.679-.308 2.47l-.246.969l-1.938-.493l.246-.969a8 8 0 0 0-9.731-9.731l-.97.246zm9.94-2.468L23.913 6.5L22.5 7.914L17.086 2.5z"></svg:path>`,
})
export class TdesignAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmOffFilledIcon],svg[tdesign-alarm-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l2 2l-2.5 2.5L1.5 7.914l2.5-2.5l.725.725A9.97 9.97 0 0 0 2 13c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 6.861-2.725l3.14 3.14l1.41-1.41L2 .594zm19.184 16.364A10 10 0 0 0 22 13c0-5.523-4.477-10-10-10a10 10 0 0 0-3.954.812zM18.5 1.086L23.914 6.5L22.5 7.914L17.086 2.5z"></svg:path>`,
})
export class TdesignAlarmOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlignTopIcon],svg[tdesign-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm9 2.586l-.707.707l-4 4l-.707.707L8 12.414l.707-.707L11 9.414V21h2V9.414l2.293 2.293l.707.707L17.414 11l-.707-.707l-4-4z"></svg:path>`,
})
export class TdesignAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlignVerticalIcon],svg[tdesign-align-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.586V0h-2v6.586L9.707 5.293L9 4.586L7.586 6l.707.707l3 3l.707.707l.707-.707l3-3L16.414 6L15 4.586l-.707.707zM21 13H3v-2h18zm-9 .586l.707.707l3 3l.707.707L15 19.414l-.707-.707L13 17.414V24h-2v-6.586l-1.293 1.293l-.707.707L7.586 18l.707-.707l3-3z"></svg:path>`,
})
export class TdesignAlignVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAlphaIcon],svg[tdesign-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v3.866l5.336-3.24l1.038 1.71L14 8.206v8.588l6.374 3.87l-1.038 1.71L14 19.134V22h-2v-4.08L3.073 12.5L12 7.08V2zm-2 7.42L6.927 12.5L12 15.58z"></svg:path>`,
})
export class TdesignAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnalyticsIcon],svg[tdesign-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm14 4v3h-2V8zm-5 2v3h-2v-3zm-5 2v6H6v-6zm10 1v5h-2v-5zm-5 2v3h-2v-3z"></svg:path>`,
})
export class TdesignAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnalyticsFilledIcon],svg[tdesign-analytics-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm-4 9V8h-2v3zm-5 2v-3h-2v3zm-5 5v-6H6v6zm10 0v-5h-2v5zm-5 0v-3h-2v3z"></svg:path>`,
})
export class TdesignAnalyticsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnchorIcon],svg[tdesign-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M8 5a4 4 0 1 1 5 3.874V10.5h4.5v2H13v8.458c3.133-.267 5.643-1.796 6.802-4.228l-1.23-1.23l4.048-4.048l-.135 2.6C22.19 19.74 17.455 23 12 23S1.81 19.74 1.515 14.052l-.135-2.6L5.427 15.5l-1.23 1.23c1.159 2.432 3.67 3.96 6.802 4.228V12.5H6.5v-2H11V8.874A4 4 0 0 1 8 5"></svg:path>`,
})
export class TdesignAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAngryIcon],svg[tdesign-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM7.67 15.499A5 5 0 0 1 12 13a5 5 0 0 1 4.33 2.5l.501.865l-1.731 1.001l-.5-.865A3 3 0 0 0 12 15a3 3 0 0 0-2.6 1.5l-.5.866l-1.731-1.001z"></svg:path>`,
})
export class TdesignAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAngryFilledIcon],svg[tdesign-angry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zM11.999 13a5 5 0 0 0-4.33 2.5l-.5.865l1.73 1.001l.502-.866C9.92 15.601 10.89 15 12 15s2.079.601 2.6 1.5l.5.866l1.731-1.001l-.5-.866A5 5 0 0 0 12 13"></svg:path>`,
})
export class TdesignAngryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimationIcon],svg[tdesign-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.09 7.054l.11-.46q.027-.091.057-.181l.371-.841a5 5 0 1 1 6.491 6.958l-.532.213l-.117.037l-.511.128Q16.493 13 16 13a5 5 0 0 1-4.91-5.946M9.47 5.471a7.02 7.02 0 0 0-4 4A7.002 7.002 0 0 0 8 23a7 7 0 0 0 6.529-4.47q.198-.078.39-.166l.338-.135l-.01-.026a7.03 7.03 0 0 0 3.282-3.674q.198-.076.392-.165l.336-.135l-.01-.026A7 7 0 1 0 9.47 5.471M16 15a5 5 0 0 1-1.882 1.53l-.53.212l-.12.04l-.507.126q-.467.091-.961.092a5 5 0 0 1-4.91-5.946l.11-.46q.027-.091.057-.181l.372-.842A5 5 0 0 1 9 7.999V8a7 7 0 0 0 7 7M5 12a7 7 0 0 0 7 7a5 5 0 1 1-7-7"></svg:path>`,
})
export class TdesignAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimation1Icon],svg[tdesign-animation-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.41.06l3.716 6.174l7.02 1.626l-4.724 5.44l.623 7.18l-6.635-2.812l-6.634 2.811l.623-7.178L.676 7.86l7.02-1.626zm0 3.88L8.972 7.99L4.365 9.058l3.1 3.572l-.41 4.711l4.355-1.845l4.355 1.845l-.409-4.711l3.1-3.572l-4.607-1.067zm9.453 10.071l2.475 2.475l-1.414 1.414l-2.475-2.474zm-8.296 6.116l2.474 2.475l-1.414 1.414l-2.475-2.475zm6.578 0l2.474 2.475l-1.414 1.414l-2.475-2.475z"></svg:path>`,
})
export class TdesignAnimation1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimation1FilledIcon],svg[tdesign-animation-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.41.06l3.716 6.174l7.019 1.626l-4.723 5.44l.623 7.18l-6.635-2.812l-6.634 2.811l.623-7.178L.676 7.86l7.019-1.626zm9.453 13.951l2.475 2.475l-1.414 1.414l-2.475-2.474zm-8.297 6.116l2.475 2.475l-1.414 1.414l-2.475-2.475zm6.578 0l2.475 2.475l-1.414 1.414l-2.475-2.475z"></svg:path>`,
})
export class TdesignAnimation1FilledIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimationFilledIcon],svg[tdesign-animation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path fill="currentColor" d="M17.143 15.976a8.5 8.5 0 0 1-9.119-9.118a6.5 6.5 0 1 0 9.119 9.118"></svg:path><svg:path fill="currentColor" d="M12.642 20.476a8.5 8.5 0 0 1-9.118-9.119a6.5 6.5 0 1 0 9.118 9.119"></svg:path>`,
})
export class TdesignAnimationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnticlockwiseIcon],svg[tdesign-anticlockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.333 5a3 3 0 0 1 3-3H13v2H7.333a1 1 0 0 0-1 1v6.5H4.34L.586 7.446l1.467-1.36l2.28 2.462zM8 6h15v15H8zm2 2v11h11V8z"></svg:path>`,
})
export class TdesignAnticlockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAnticlockwiseFilledIcon],svg[tdesign-anticlockwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.333 5a3 3 0 0 1 3-3H13v2H7.333a1 1 0 0 0-1 1v6.5H4.34L.586 7.446l1.467-1.36l2.28 2.462zM8 6h15v15H8z"></svg:path>`,
})
export class TdesignAnticlockwiseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignApiIcon],svg[tdesign-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.586 12L5 7.586L6.414 9l-3 3l3 3L5 16.414zm7-7L12 .586L16.414 5L15 6.414l-3-3l-3 3zM9 17.586l3 3l3-3L16.414 19L12 23.414L7.586 19zm1.998-4.584v-2.004h2.004v2.004zM17.586 15l3-3l-3-3L19 7.586L23.414 12L19 16.414z"></svg:path>`,
})
export class TdesignApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAppIcon],svg[tdesign-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0M2 2h9v9H2zm2 2v5h5V4zm-2 9h9v9H2zm2 2v5h5v-5zm9-2h9v9h-9zm7 2h-5v5h5z"></svg:path>`,
})
export class TdesignAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAppFilledIcon],svg[tdesign-app-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 6.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0M2 2h9v9H2zm0 11h9v9H2zm11 0h9v9h-9z"></svg:path>`,
})
export class TdesignAppFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAppleIcon],svg[tdesign-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v2.404l.152-.025l.275-.05c.329-.059.698-.126 1.065-.165c1.025-.111 2.153-.03 3.492.711C20.622 6.335 22 9.1 22 12.5c0 4.28-2.71 8.3-6.189 9.439c-1.04.34-1.785.156-2.404-.072l-.272-.102c-.416-.159-.695-.265-1.135-.265s-.718.106-1.134.265l-.272.103c-.62.228-1.366.413-2.407.07C4.72 20.797 2 16.782 2 12.5c0-3.4 1.378-6.16 4.015-7.624c1.34-.744 2.468-.825 3.494-.714c.366.04.736.107 1.064.167l.275.05l.152.025V2zm-2 4.427q-.258-.036-.494-.078l-.34-.061a12 12 0 0 0-.873-.137c-.7-.076-1.397-.032-2.308.473C5.12 7.66 4 9.657 4 12.5c0 3.557 2.288 6.708 4.813 7.538c.458.151.711.092 1.09-.047l.19-.073c.429-.168 1.068-.418 1.907-.418s1.478.25 1.906.417l.19.073c.38.14.634.198 1.093.048C17.718 19.21 20 16.058 20 12.5c0-2.844-1.12-4.843-2.985-5.875c-.91-.505-1.608-.549-2.308-.473c-.29.031-.562.08-.874.137q-.161.03-.34.06q-.235.041-.493.078v1.402q.261-.093.5-.23l.865-.5l1.001 1.73l-.866.501A5 5 0 0 1 12 10c-.91 0-1.764-.244-2.5-.67l-.866-.5l1.001-1.731l.866.5q.237.137.499.23z"></svg:path>`,
})
export class TdesignAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAppleFilledIcon],svg[tdesign-apple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.404V2h-2v2.404l-.152-.026l-.275-.05c-.328-.059-.698-.126-1.064-.166c-1.026-.111-2.155-.03-3.494.714C3.378 6.339 2 9.1 2 12.5c0 4.282 2.719 8.297 6.187 9.438c1.041.343 1.787.158 2.407-.07q.146-.054.272-.103c.416-.159.695-.265 1.134-.265c.44 0 .719.106 1.135.265h.001l.27.102c.62.227 1.365.412 2.405.072C19.291 20.799 22 16.78 22 12.5c0-3.4-1.38-6.165-4.015-7.625c-1.34-.742-2.468-.822-3.493-.712c-.367.04-.737.107-1.065.166zM9 6s1.875.636 3 .636S15 6 15 6s-.742 2-3 2s-3-2-3-2"></svg:path>`,
})
export class TdesignAppleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignApplicationIcon],svg[tdesign-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L4.34 7.577v8.846L12 20.845l7.66-4.422V7.577zM8.723 8.613L12 10.798l3.277-2.185l1.11 1.664L13 12.535V16h-2v-3.465l-3.387-2.258z"></svg:path>`,
})
export class TdesignApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignApplicationFilledIcon],svg[tdesign-application-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.66 6.423v11.154L12 23.155l-9.66-5.578V6.423L12 .845zM12 10.798L8.723 8.613l-1.11 1.664L11 12.535V16h2v-3.465l3.387-2.258l-1.11-1.664z"></svg:path>`,
})
export class TdesignApplicationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArchitectureHuiStyleIcon],svg[tdesign-architecture-hui-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.8 1.4L12 .333L11.2 1.4l-.004.005l-.012.016l-.049.065l-.19.249a77 77 0 0 1-2.948 3.607c-.865.988-1.77 1.952-2.568 2.66c-.4.356-.75.627-1.035.803c-.246.151-.37.185-.396.193v-.002l-.004-1l-2 .008l.004 1c.001.405.106.908.459 1.327c.378.45.928.67 1.543.67v9H2v2h20v-2h-2v-9c.614 0 1.165-.22 1.543-.67c.353-.42.457-.924.457-1.33V8h-2v.996a1.6 1.6 0 0 1-.394-.192a8 8 0 0 1-1.036-.802c-.797-.71-1.703-1.673-2.568-2.661a73 73 0 0 1-3.138-3.856l-.049-.065l-.012-.016zM16.704 9H7.295a38 38 0 0 0 2.207-2.34A75 75 0 0 0 12 3.637l.184.234a75 75 0 0 0 2.313 2.788A38 38 0 0 0 16.704 9M6 11h12v9h-3v-3a3 3 0 0 0-6 0v3H6zm7 9h-2v-3a1 1 0 1 1 2 0z"></svg:path>`,
})
export class TdesignArchitectureHuiStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArchitectureHuiStyleFilledIcon],svg[tdesign-architecture-hui-style-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .333l.803 1.072l.012.016l.05.065q.064.086.19.249a78 78 0 0 0 2.947 3.607c.865.988 1.77 1.952 2.568 2.66c.4.356.75.627 1.036.803c.238.147.362.183.393.192V8h2v1c0 .407-.104.91-.456 1.33c-.378.451-.93.67-1.544.67H4c-.614 0-1.165-.22-1.543-.669c-.352-.419-.457-.922-.458-1.327l-.004-1l2-.008l.004 1v.002H4c.03-.01.154-.046.393-.193a8 8 0 0 0 1.036-.802c.797-.71 1.703-1.673 2.568-2.661a74 74 0 0 0 3.138-3.856l.049-.065l.012-.016zM4 13v7H2v2h7v-3a3 3 0 0 1 6 0v3h7v-2h-2v-7z"></svg:path><svg:path fill="currentColor" d="M12 18a1 1 0 0 0-1 1v3h2v-3a1 1 0 0 0-1-1"></svg:path>`,
})
export class TdesignArchitectureHuiStyleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArchwayIcon],svg[tdesign-archway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v1h12V2h2v1h1v2h-.78l.6 3H22v2h-1v10h1v2H2v-2h1V10H2V8h1.18l.6-3H3V3h1V2zm-.18 3l-.6 3h13.56l-.6-3zM19 10h-3v10h3zm-5 10V10h-4v10zm-6 0V10H5v10z"></svg:path>`,
})
export class TdesignArchwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArchway1Icon],svg[tdesign-archway-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v5h-2.915l.385 3H22v2h-2.274l1.393 10.865l-1.984.254L17.71 12H6.258l-1.39 11.116l-1.984-.248L4.242 12H2v-2h2.492l.375-3H2zm4.883 5l-.375 3H11V7zM13 7v3h4.454l-.385-3zM4 4v1h16V4z"></svg:path>`,
})
export class TdesignArchway1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArchway1FilledIcon],svg[tdesign-archway-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v5h-2.915l.385 3H22v2h-2.274l1.393 10.865l-1.984.254L17.71 12H6.258l-1.39 11.116l-1.984-.248L4.242 12H2v-2h2.492l.375-3H2zm4.883 5l-.375 3H11V7zM13 7v3h4.454l-.385-3z"></svg:path>`,
})
export class TdesignArchway1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArchwayFilledIcon],svg[tdesign-archway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v1h12V2h2v1h1v2h-.78l.6 3H22v2h-1v10h1v2H2v-2h1V10H2V8h1.18l.6-3H3V3h1V2zm13 8h-3v10h3zm-5 10V10h-4v10zm-6 0V10H5v10z"></svg:path>`,
})
export class TdesignArchwayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownIcon],svg[tdesign-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.5v11.586l-4.5-4.5L5.086 13L12 19.914L18.914 13L17.5 11.586l-4.5 4.5V4.5z"></svg:path>`,
})
export class TdesignArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownCircleIcon],svg[tdesign-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-5.5v7.586l3-3l1.414 1.414L12 17.914L6.586 12.5L8 11.086l3 3V6.5z"></svg:path>`,
})
export class TdesignArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownCircleFilledIcon],svg[tdesign-arrow-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-7 0l-4 6.25L8 12h3V6h2v6z"></svg:path>`,
})
export class TdesignArrowDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownRectangleIcon],svg[tdesign-arrow-down-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm9 2.5v7.586l3-3l1.414 1.414L12 17.914L6.586 12.5L8 11.086l3 3V6.5z"></svg:path>`,
})
export class TdesignArrowDownRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownRectangleFilledIcon],svg[tdesign-arrow-down-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm10 16.25L16 12h-3V6h-2v6H8z"></svg:path>`,
})
export class TdesignArrowDownRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftIcon],svg[tdesign-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 13H7.914l4.5 4.5L11 18.914L4.086 12L11 5.086L12.414 6.5l-4.5 4.5H19.5z"></svg:path>`,
})
export class TdesignArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftCircleIcon],svg[tdesign-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12a9 9 0 1 0-18 0a9 9 0 0 0 18 0M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m5.5 12H9.914l3 3l-1.414 1.414L6.086 12L11.5 6.586L12.914 8l-3 3H17.5z"></svg:path>`,
})
export class TdesignArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftCircleFilledIcon],svg[tdesign-arrow-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m0 7l-6.25 4L12 16v-3h6v-2h-6z"></svg:path>`,
})
export class TdesignArrowLeftCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftDownIcon],svg[tdesign-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.01 7.404l-8.19 8.192h6.364v2h-9.78V7.818h2v6.364l8.193-8.192z"></svg:path>`,
})
export class TdesignArrowLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftDownCircleIcon],svg[tdesign-arrow-left-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 11C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-4.182-6.819V8.524h2v4.243l5.364-5.364l1.414 1.414l-5.364 5.364h4.243v2z"></svg:path>`,
})
export class TdesignArrowLeftDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftDownCircleFilledIcon],svg[tdesign-arrow-left-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556m4.95 4.95L7.58 16.419l7.247-1.59l-2.12-2.122l4.242-4.243l-1.414-1.414l-4.243 4.243z"></svg:path>`,
})
export class TdesignArrowLeftDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRight1Icon],svg[tdesign-arrow-left-right-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.586 16.5L8.5 11.586L9.914 13l-2.5 2.5H19.5v2H7.414l2.5 2.5L8.5 21.414zm.914-10h12.086l-2.5-2.5L15.5 2.586L20.414 7.5L15.5 12.414L14.086 11l2.5-2.5H4.5z"></svg:path>`,
})
export class TdesignArrowLeftRight1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRight2Icon],svg[tdesign-arrow-left-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 17.5h-8.586l3 3l-1.414 1.414L9.086 16.5l5.414-5.414l1.414 1.414l-3 3H21.5zm-6.586-10L9.5 12.914L8.086 11.5l3-3H2.5v-2h8.586l-3-3L9.5 2.086z"></svg:path>`,
})
export class TdesignArrowLeftRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRight3Icon],svg[tdesign-arrow-left-right-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.914 7.5L15.5 12.914L14.086 11.5l3-3H8.5v-2h8.586l-3-3L15.5 2.086zm-5.414 10H6.914l3 3L8.5 21.914L3.086 16.5L8.5 11.086L9.914 12.5l-3 3H15.5z"></svg:path>`,
})
export class TdesignArrowLeftRight3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRightCircleIcon],svg[tdesign-arrow-left-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 11C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-6.914-8L9 11.086l1.414 1.414l-1.5 1.5H14v2H8.914l1.5 1.5L9 18.914zM10 8h5.086l-1.5-1.5L15 5.086L18.914 9L15 12.914L13.586 11.5l1.5-1.5H10z"></svg:path>`,
})
export class TdesignArrowLeftRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRightCircleFilledIcon],svg[tdesign-arrow-left-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-13.5-.5V14H14v2H9.5v2.5L5 15zM19 9l-4.5 3.5V10H10V8h4.5V5.5z"></svg:path>`,
})
export class TdesignArrowLeftRightCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftUpIcon],svg[tdesign-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 18.01L8.403 9.818v6.364h-2V6.404h9.779v2H9.817l8.192 8.192z"></svg:path>`,
})
export class TdesignArrowLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftUpCircleIcon],svg[tdesign-arrow-left-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.818-4.182h7.657v2h-4.243l5.364 5.364l-1.414 1.414l-5.364-5.364v4.243h-2z"></svg:path>`,
})
export class TdesignArrowLeftUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftUpCircleFilledIcon],svg[tdesign-arrow-left-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.778 4.222c4.296 4.296 4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556s11.26-4.296 15.556 0m-4.95 4.95L7.581 7.58l1.59 7.247l2.122-2.12l4.243 4.242l1.414-1.414l-4.243-4.243z"></svg:path>`,
})
export class TdesignArrowLeftUpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightIcon],svg[tdesign-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></svg:path>`,
})
export class TdesignArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightCircleIcon],svg[tdesign-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M6.5 13h7.586l-3 3l1.414 1.414L17.914 12L12.5 6.586L11.086 8l3 3H6.5z"></svg:path>`,
})
export class TdesignArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightCircleFilledIcon],svg[tdesign-arrow-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m0-7l6.25-4L12 8v3H6v2h6z"></svg:path>`,
})
export class TdesignArrowRightCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightDownIcon],svg[tdesign-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.403 5.99l8.193 8.192V7.818h2v9.778H7.818v-2h6.364L5.989 7.404z"></svg:path>`,
})
export class TdesignArrowRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightDownCircleIcon],svg[tdesign-arrow-right-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8.818.768V8.525h2v7.657H8.525v-2h4.243L7.404 8.818l1.414-1.414z"></svg:path>`,
})
export class TdesignArrowRightDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightDownCircleFilledIcon],svg[tdesign-arrow-right-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0m4.95-4.95l7.247 1.591l-1.59-7.247l-2.122 2.12L8.464 7.05L7.05 8.464l4.243 4.243z"></svg:path>`,
})
export class TdesignArrowRightDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightUpIcon],svg[tdesign-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z"></svg:path>`,
})
export class TdesignArrowRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightUpCircleIcon],svg[tdesign-arrow-right-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12a9 9 0 1 0-18 0a9 9 0 0 0 18 0M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m.768 8.819H8.525v-2h7.657v7.657h-2v-4.243l-5.364 5.364l-1.414-1.414z"></svg:path>`,
})
export class TdesignArrowRightUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightUpCircleFilledIcon],svg[tdesign-arrow-right-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556m-4.95-4.95l1.591-7.247l-7.247 1.59l2.12 2.122l-4.242 4.243l1.414 1.414l4.243-4.243z"></svg:path>`,
})
export class TdesignArrowRightUpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowTriangleDownIcon],svg[tdesign-arrow-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12V2h6v10h4.5L12 22L4.5 12zm-.5 2l3.5 4.667L15.5 14H13V4h-2v10z"></svg:path>`,
})
export class TdesignArrowTriangleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowTriangleDownFilledIcon],svg[tdesign-arrow-triangle-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h4.5L12 22L4.5 12H9V2h6z"></svg:path>`,
})
export class TdesignArrowTriangleDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowTriangleUpIcon],svg[tdesign-arrow-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12v10h6V12h4.5L12 2L4.5 12zm-.5-2L12 5.333L15.5 10H13v10h-2V10z"></svg:path>`,
})
export class TdesignArrowTriangleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowTriangleUpFilledIcon],svg[tdesign-arrow-triangle-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h4.5L12 2L4.5 12H9v10h6z"></svg:path>`,
})
export class TdesignArrowTriangleUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpIcon],svg[tdesign-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5z"></svg:path>`,
})
export class TdesignArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpCircleIcon],svg[tdesign-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-5.914l5.414 5.414L16 12.914l-3-3V17.5h-2V9.914l-3 3L6.586 11.5z"></svg:path>`,
})
export class TdesignArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpCircleFilledIcon],svg[tdesign-arrow-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-7 0l-4-6.25L8 12h3v6h2v-6z"></svg:path>`,
})
export class TdesignArrowUpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDown1Icon],svg[tdesign-arrow-up-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20.414L11.586 15.5L13 14.086l2.5 2.5V4.5h2v12.086l2.5-2.5l1.414 1.414zm-10-.914V7.414L4 9.914L2.586 8.5L7.5 3.586L12.414 8.5L11 9.914l-2.5-2.5V19.5z"></svg:path>`,
})
export class TdesignArrowUpDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDown2Icon],svg[tdesign-arrow-up-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5v8.586l3-3L21.914 9.5L16.5 14.914L11.086 9.5L12.5 8.086l3 3V2.5zm-10 6.586l5.414 5.414l-1.414 1.414l-3-3V21.5h-2v-8.586l-3 3L2.086 14.5z"></svg:path>`,
})
export class TdesignArrowUpDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDown3Icon],svg[tdesign-arrow-up-down-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3.086L12.914 8.5L11.5 9.914l-3-3V15.5h-2V6.914l-3 3L2.086 8.5zm10 5.414v8.586l3-3l1.414 1.414l-5.414 5.414l-5.414-5.414l1.414-1.414l3 3V8.5z"></svg:path>`,
})
export class TdesignArrowUpDown3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDownCircleIcon],svg[tdesign-arrow-up-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8 6.914L11.086 15l1.414-1.414l1.5 1.5V10h2v5.086l1.5-1.5L18.914 15zM8 14V8.914l-1.5 1.5L5.086 9L9 5.086L12.914 9L11.5 10.414l-1.5-1.5V14z"></svg:path>`,
})
export class TdesignArrowUpDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowUpDownCircleFilledIcon],svg[tdesign-arrow-up-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m.5-13.5H10V14H8V9.5H5.5L9 5zM15 19l-3.5-4.5H14V10h2v4.5h2.5z"></svg:path>`,
})
export class TdesignArrowUpDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArtboardIcon],svg[tdesign-artboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v4h8V2h2v4h4v2h-4v8h4v2h-4v4h-2v-4H8v4H6v-4H2v-2h4V8H2V6h4V2zm0 6v8h8V8z"></svg:path>`,
})
export class TdesignArtboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArticleIcon],svg[tdesign-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2h19v20h-19zm2 2v16h15V4zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class TdesignArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignArticleFilledIcon],svg[tdesign-article-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19v20h19zM17 7v2H7V7zm0 4v2H7v-2zm-3 6H7v-2h7z"></svg:path>`,
})
export class TdesignArticleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentIcon],svg[tdesign-assignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 0-1.376.9l-.262.6H4.5v16h15V4h-5.862l-.262-.6A1.5 1.5 0 0 0 12 2.5M9.128 2A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class TdesignAssignmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCheckedIcon],svg[tdesign-assignment-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 0-1.376.9l-.262.6H4.5v16h15V4h-5.862l-.262-.6A1.5 1.5 0 0 0 12 2.5M9.128 2A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2zm8.53 7.586l-7.072 7.07l-4.242-4.242L7.758 11l2.828 2.829l5.657-5.657z"></svg:path>`,
})
export class TdesignAssignmentCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCheckedFilledIcon],svg[tdesign-assignment-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5m-1.414 16.157l7.071-7.071l-1.414-1.414l-5.657 5.656L7.758 11l-1.414 1.414z"></svg:path>`,
})
export class TdesignAssignmentCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCodeIcon],svg[tdesign-assignment-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2h6.628A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19zm2 18h15V4h-5.862l-.262-.6a1.5 1.5 0 0 0-2.752 0l-.262.6H4.5zm1.086-8L9.5 8.086L10.914 9.5l-2.5 2.5l2.5 2.5L9.5 15.914zM14.5 8.086L18.414 12L14.5 15.914L13.086 14.5l2.5-2.5l-2.5-2.5z"></svg:path>`,
})
export class TdesignAssignmentCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCodeFilledIcon],svg[tdesign-assignment-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5M9.5 8.086L5.586 12L9.5 15.914l1.414-1.414l-2.5-2.5l2.5-2.5zM18.414 12L14.5 8.086L13.086 9.5l2.5 2.5l-2.5 2.5l1.414 1.414z"></svg:path>`,
})
export class TdesignAssignmentCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentErrorIcon],svg[tdesign-assignment-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 0-1.376.9l-.262.6H4.5v16h15V4h-5.862l-.262-.6A1.5 1.5 0 0 0 12 2.5M9.128 2A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2zM13 7.5v6h-2v-6zm-2 7.496h2.004V17H11z"></svg:path>`,
})
export class TdesignAssignmentErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentErrorFilledIcon],svg[tdesign-assignment-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5m1 13v-6h-2v6zm.004 1.496H11V17h2.004z"></svg:path>`,
})
export class TdesignAssignmentErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentFilledIcon],svg[tdesign-assignment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c-1.19 0-2.24.594-2.872 1.5H2.5v20h19V2h-6.628A3.5 3.5 0 0 0 12 .5M17 7v2H7V7zm0 4v2H7v-2zm-3 6H7v-2h7z"></svg:path>`,
})
export class TdesignAssignmentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentUserIcon],svg[tdesign-assignment-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 0-1.376.9l-.262.6H4.5v16h15V4h-5.862l-.262-.6A1.5 1.5 0 0 0 12 2.5M9.128 2A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2zM12 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M6 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1h-2v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H6z"></svg:path>`,
})
export class TdesignAssignmentUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentUserFilledIcon],svg[tdesign-assignment-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c-1.19 0-2.24.594-2.872 1.5H2.5v20h19V2h-6.628A3.5 3.5 0 0 0 12 .5m-3 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0M6 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H6z"></svg:path>`,
})
export class TdesignAssignmentUserFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAttachIcon],svg[tdesign-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.314 3.121a5 5 0 1 1 7.07 7.071l-7.777 7.778a3 3 0 1 1-4.243-4.242l7.778-7.778l1.414 1.414l-7.778 7.778a1 1 0 1 0 1.414 1.414l7.779-7.778a3 3 0 1 0-4.243-4.243L4.95 12.314a5 5 0 0 0 7.07 7.07l8.486-8.485l1.414 1.415l-8.485 8.485a7 7 0 0 1-9.9-9.9z"></svg:path>`,
})
export class TdesignAttachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAtticIcon],svg[tdesign-attic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.81 1.414L12 .294l-.81 1.12l-.002.003l-.009.011l-.033.046l-.133.18a55 55 0 0 1-2.214 2.774c-.687.803-1.45 1.64-2.206 2.364c-.767.735-1.48 1.306-2.067 1.622a7.5 7.5 0 0 1-1.002.459C3.231 8.977 3.062 9 3 9H2v2h1c.328 0 .671-.074 1-.178V20H2v2h20v-2h-2v-9.178c.328.104.672.178 1 .178h1V9h-1c-.062 0-.23-.023-.524-.127a7.5 7.5 0 0 1-1.002-.46c-.587-.315-1.3-.886-2.067-1.62a33 33 0 0 1-2.206-2.365a55 55 0 0 1-2.347-2.954l-.033-.046l-.008-.011zM16.867 9H7.133c.285-.242.568-.5.843-.763a35 35 0 0 0 2.343-2.509A56 56 0 0 0 12 3.66a57 57 0 0 0 1.681 2.068a35 35 0 0 0 2.343 2.509q.414.397.843.763M6 11h12v9h-3v-3a3 3 0 0 0-6 0v3H6zm5 9v-3a1 1 0 1 1 2 0v3z"></svg:path>`,
})
export class TdesignAtticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAttic1Icon],svg[tdesign-attic-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.169 1.444L11.999.2l.832 1.243l.005.008l.02.03l.087.125a28 28 0 0 0 1.6 2.04c1.071 1.239 2.484 2.638 3.954 3.486c.466.269.956.367 1.501.367h1v2h-1c-.326 0-.66-.025-1-.087V17h2v2h-1v3h-2v-3h-5v3h-2v-3h-5v3h-2v-3h-1v-2H5l-.002-7.586a5.6 5.6 0 0 1-1 .086h-1v-2h1c.545 0 1.035-.098 1.501-.367c1.471-.847 2.885-2.247 3.956-3.486a28 28 0 0 0 1.601-2.04l.087-.125l.02-.03zM6.999 9L7 17h2v-2.2a3 3 0 0 1 6 0V17h1.998V9zm8.007-2a24 24 0 0 1-1.976-2.045c-.4-.462-.747-.895-1.03-1.261a31 31 0 0 1-1.032 1.262A24 24 0 0 1 8.99 7zM13 17v-2.2a1 1 0 1 0-2 0V17z"></svg:path>`,
})
export class TdesignAttic1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAttic1FilledIcon],svg[tdesign-attic-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .201l-.831 1.243h-.001l-.005.007l-.02.03l-.087.126a28 28 0 0 1-1.6 2.04C8.383 4.887 6.97 6.286 5.498 7.133c-.466.269-.956.367-1.5.367H2.997v2h2L5 17H2.998v2h1v3h2v-3h5v3h2v-3h5v3h2v-3h1v-2h-2V9.5h2v-2h-1c-.545 0-1.035-.098-1.5-.367c-1.471-.848-2.884-2.247-3.955-3.486a28 28 0 0 1-1.6-2.04l-.086-.125l-.021-.03l-.005-.008zM9 14a3 3 0 1 1 6 0v3h-2v-3a1 1 0 1 0-2 0v3H9z"></svg:path>`,
})
export class TdesignAttic1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAtticFilledIcon],svg[tdesign-attic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .293l.81 1.121l.002.003l.009.011l.033.046l.133.18a55 55 0 0 0 2.214 2.774c.687.803 1.45 1.64 2.206 2.364c.767.735 1.48 1.306 2.067 1.622c.384.206.723.36 1.002.459c.293.104.462.127.524.127h1v2h-1.01a3.4 3.4 0 0 1-.99-.178V11H4v-.178a3.4 3.4 0 0 1-.99.178H2V9h1c.062 0 .23-.023.524-.127c.28-.1.618-.253 1.002-.46c.587-.315 1.3-.886 2.067-1.62a33 33 0 0 0 2.205-2.365a55 55 0 0 0 2.348-2.954l.033-.046l.008-.011l.003-.003zM4 13v7H2v2h7v-3a3 3 0 1 1 6 0v3h7v-2h-2v-7z"></svg:path><svg:path fill="currentColor" d="M12 18a1 1 0 0 0-1 1v3h2v-3a1 1 0 0 0-1-1"></svg:path>`,
})
export class TdesignAtticFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAudioIcon],svg[tdesign-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v18h14V3zm5.996 1.996H13V7h-2.004zM12 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAudioFilledIcon],svg[tdesign-audio-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 15a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path fill="currentColor" d="M21 1H3v22h18zm-9 8.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5m-1.004-4.754H13V7h-2.004z"></svg:path>`,
})
export class TdesignAudioFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAwkwardIcon],svg[tdesign-awkward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm2 3v2.667h-2V12zm3 0v3h-2v-3z"></svg:path>`,
})
export class TdesignAwkwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignAwkwardFilledIcon],svg[tdesign-awkward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-2 5.667V12h-2v2.667zM19 15v-3h-2v3z"></svg:path>`,
})
export class TdesignAwkwardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBacktopIcon],svg[tdesign-backtop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16v2H4zm8 3.586l6.914 6.914l-1.414 1.414l-4.5-4.5V21h-2v-9.586l-4.5 4.5L5.086 14.5z"></svg:path>`,
})
export class TdesignBacktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBacktopRectangleIcon],svg[tdesign-backtop-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm13.5 4h-11V6h11zm-5.5.808l4.596 4.596l-1.414 1.414L13 12.636V18.5h-2v-5.864l-2.182 2.182l-1.414-1.414z"></svg:path>`,
})
export class TdesignBacktopRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBacktopRectangleFilledIcon],svg[tdesign-backtop-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM6.5 8V6h11v2zM12 9l4 5h-3v4.5h-2V14H8z"></svg:path>`,
})
export class TdesignBacktopRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBackupIcon],svg[tdesign-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a5.5 5.5 0 0 0-5.49 5.15l-.048.783l-.77.14A4.502 4.502 0 0 0 6.5 19h11a4.5 4.5 0 0 0 .809-8.928l-.771-.14l-.049-.781A5.5 5.5 0 0 0 12 4M4.598 8.283a7.502 7.502 0 0 1 14.804 0A6.502 6.502 0 0 1 17.5 21h-11A6.5 6.5 0 0 1 4.598 8.283M12 7.086l4.414 4.414L15 12.914l-2-2V17h-2v-6.086l-2 2L7.586 11.5z"></svg:path>`,
})
export class TdesignBackupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBackupFilledIcon],svg[tdesign-backup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.728 0 6.82 2.72 7.402 6.283A6.502 6.502 0 0 1 17.5 21h-11A6.5 6.5 0 0 1 4.598 8.283A7.5 7.5 0 0 1 12 2m3 10.914l1.414-1.414L12 7.086L7.586 11.5L9 12.914l2-2V17h2v-6.086z"></svg:path>`,
})
export class TdesignBackupFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBackwardIcon],svg[tdesign-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 4.336v7l7-7v15.328l-7-7v7L3.586 12zM6.414 12l2.836 2.836V9.164zm7 0l2.836 2.836V9.164z"></svg:path>`,
})
export class TdesignBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBackwardFilledIcon],svg[tdesign-backward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 4.336v7l7-7v15.328l-7-7v7L3.586 12z"></svg:path>`,
})
export class TdesignBackwardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBadLaughIcon],svg[tdesign-bad-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM7 13h10v1a5 5 0 0 1-10 0zm2.17 2a3.001 3.001 0 0 0 5.66 0z"></svg:path>`,
})
export class TdesignBadLaughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBadLaughFilledIcon],svg[tdesign-bad-laugh-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zM11.999 19a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5"></svg:path>`,
})
export class TdesignBadLaughFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBambooShootIcon],svg[tdesign-bamboo-shoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.843 4.228l-.211.037a21 21 0 0 0-3.178.866l.53 2.621c.09.45.173.854.238 1.173l1.167.117c.74-1.766 1.136-3.216 1.347-4.244q.064-.312.107-.57M17.5 10.963l-1.24-.124l-7.036-1.13l1.796 10.362c3.124-3.37 5.157-6.49 6.48-9.108M9.029 20.29L7.291 10.265a47 47 0 0 0-4.19 3.64a18 18 0 0 0 3.028 4.037a18.4 18.4 0 0 0 2.9 2.348m1.666-12.37l4.427.71l-.097-.48l-.46-2.268a32.5 32.5 0 0 0-3.87 2.037m11.3-5.844l-.018 1.087l-.005.116a9 9 0 0 1-.036.414c-.037.355-.107.864-.24 1.508c-.265 1.287-.777 3.111-1.767 5.318c-1.532 3.412-4.202 7.726-8.85 12.373l-.478.479l-.623-.267c-.933-.4-3.187-1.672-5.263-3.748C2.64 17.28 1.368 15.026.968 14.092l-.268-.62l.479-.479C3.352 10.82 5.452 9.08 7.422 7.685c2.839-2.01 5.403-3.298 7.52-4.124c1.81-.706 3.29-1.072 4.33-1.263c.52-.095.93-.145 1.216-.173a8 8 0 0 1 .43-.03z"></svg:path>`,
})
export class TdesignBambooShootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBambooShootFilledIcon],svg[tdesign-bamboo-shoot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.99 2.442l.005-.366l-.363.004c-.27.002-.54.004-.81.019q-.118.006-.334.025c-.286.028-.696.078-1.216.173a23 23 0 0 0-3.362.906l1.31 5.801l3.07.673c.758-1.83 1.175-3.357 1.405-4.476c.133-.644.203-1.153.24-1.508q.029-.266.036-.414c.016-.278.018-.558.02-.837m-2.543 9.098l-3.273-.717l-7.67-1.618l2.975 13.281c3.96-4.042 6.43-7.817 7.968-10.947M9.52 22.89L6.299 8.506a50 50 0 0 0-5.12 4.486L.7 13.47l.267.623c.4.933 1.672 3.187 3.747 5.262c1.79 1.79 3.712 2.982 4.807 3.533M8.256 7.109l6.81 1.436l-1.04-4.61c-1.704.731-3.653 1.751-5.77 3.174"></svg:path>`,
})
export class TdesignBambooShootFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBananaIcon],svg[tdesign-banana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.487.613v7.15c-.304.593-.731 1.264-1.504 1.847c-.862.648-2.243 1.253-4.556 1.392c-2.553.154-4.66-1.15-5.241-1.717c-.591-.577-1.42-.503-1.96-.064c-.51.415-.739 1.082-.739 1.78c0 .727.071 1.403.264 2.023a1.6 1.6 0 0 0-.818-.102a1.52 1.52 0 0 0-.916.492c-.41.452-.53 1.072-.53 1.586c0 4.238 5.048 9.767 13.323 6.947l.024-.008l.023-.01c4.425-1.759 6.656-4.465 7.589-7.23c.887-2.633.562-5.2.041-6.856V2.279zM8.755 14.625c-1.475-.467-2.242-.918-2.666-1.409c-.359-.417-.564-.975-.597-1.931c1.236.861 3.458 1.87 6.055 1.713c1.607-.096 2.898-.397 3.94-.83c-.619.884-1.27 1.498-1.928 1.913c-1.41.89-3.023.97-4.804.544M20.487 3.721v4.442l.052.153c.45 1.353.754 3.542.011 5.743c-.725 2.15-2.489 4.438-6.409 6.003c-6.968 2.361-10.556-2.177-10.652-4.948c1.404.644 2.984 1.021 4.31 1.339l.453.108c2.11.512 4.343.494 6.375-.79c2.009-1.267 3.636-3.657 4.816-7.476l.044-.144V3.388z"></svg:path>`,
})
export class TdesignBananaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBananaFilledIcon],svg[tdesign-banana-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.6 1.501l3.3 1.5v5.5c3.04 3.828-.448 11.442-7.691 13.122C6.965 23.304 1 19.5 1 15.501C1 14 1.738 13.195 3 14s3.098 1.683 4.86 2.072C13.223 17.253 17.919 14.5 18.6 8.5z"></svg:path><svg:path fill="currentColor" d="M8.237 15.072C13.11 16.253 17.379 13.5 18 7.5c-.678 1.385-2.064 3.703-7 4c-2.883.173-5.449-.803-6.183-1.152c-.734-.35-1.137.152-.921 1.026s1.26 2.727 4.34 3.697"></svg:path>`,
})
export class TdesignBananaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBarbecueIcon],svg[tdesign-barbecue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.316 2.796a2.717 2.717 0 0 1 3.842 0l1.316 1.316l1.619-1.619l1.414 1.414l-1.619 1.619l1.316 1.316a2.717 2.717 0 0 1 0 3.842l-1.214 1.214c-.46.46-1.045.72-1.645.782a2.7 2.7 0 0 1-.782 1.646l-1.214 1.213c-.46.46-1.045.722-1.646.782a2.7 2.7 0 0 1-.782 1.646l-1.214 1.214a2.717 2.717 0 0 1-3.842 0L7.55 17.865l-1.618 1.619l-.708-.708a.717.717 0 1 0-.267 1.183l.943-.332l.665 1.887l-.944.332a2.717 2.717 0 1 1 .176-5.056l.339-.34l-1.316-1.315a2.717 2.717 0 0 1 0-3.842l1.214-1.214a2.7 2.7 0 0 1 1.646-.782c.06-.6.321-1.185.781-1.646l1.214-1.214a2.7 2.7 0 0 1 1.646-.781a2.7 2.7 0 0 1 .782-1.646zm.2 3.641l4.047 4.047c.28.28.733.28 1.013 0L19.79 9.27a.717.717 0 0 0 0-1.014L18.474 6.94l-.974.974L16.086 6.5l.974-.974l-1.316-1.316a.717.717 0 0 0-1.014 0l-1.214 1.214a.717.717 0 0 0 0 1.013m2.632 5.46l-4.046-4.045a.717.717 0 0 0-1.013 0L9.875 9.065a.717.717 0 0 0 0 1.014l4.046 4.046c.28.28.734.28 1.014 0l1.213-1.214a.717.717 0 0 0 0-1.013m-3.641 3.643L8.46 11.493a.717.717 0 0 0-1.014 0l-1.214 1.214a.717.717 0 0 0 0 1.014l4.046 4.046c.28.28.734.28 1.014 0l1.214-1.214a.717.717 0 0 0 0-1.014"></svg:path>`,
})
export class TdesignBarbecueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBarbecueFilledIcon],svg[tdesign-barbecue-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.316 2.796a2.717 2.717 0 0 1 3.842 0l1.316 1.316l1.619-1.619l1.414 1.414l-1.619 1.619l1.316 1.316a2.717 2.717 0 0 1 0 3.842l-1.214 1.214c-.46.46-1.045.72-1.645.782a2.7 2.7 0 0 1-.782 1.646l-1.214 1.213c-.46.46-1.045.722-1.646.782a2.7 2.7 0 0 1-.782 1.646l-1.214 1.214a2.717 2.717 0 0 1-3.842 0L7.55 17.865l-1.618 1.619l-.708-.708a.717.717 0 1 0-.267 1.183l.943-.332l.665 1.887l-.944.332a2.717 2.717 0 1 1 .176-5.056l.339-.34l-1.316-1.315a2.717 2.717 0 0 1 0-3.842l1.214-1.214a2.7 2.7 0 0 1 1.646-.782c.06-.6.321-1.185.781-1.646l1.214-1.214a2.7 2.7 0 0 1 1.646-.781a2.7 2.7 0 0 1 .782-1.646zm.2 3.641l4.047 4.047c.28.28.733.28 1.013 0L19.79 9.27a.717.717 0 0 0 0-1.014L18.474 6.94l-.974.974L16.086 6.5l.974-.974l-1.316-1.316a.717.717 0 0 0-1.014 0l-1.214 1.214a.717.717 0 0 0 0 1.013m-1.01 9.103L8.46 11.493a.717.717 0 0 0-1.013 0l-1.214 1.214a.717.717 0 0 0 0 1.014l4.046 4.046c.28.28.734.28 1.014 0l1.214-1.214a.717.717 0 0 0 0-1.014"></svg:path>`,
})
export class TdesignBarbecueFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBarcodeIcon],svg[tdesign-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h3v19H2zm6.75 0v19h-2V2zm1.75 0h3v19h-3zm6.75 0v19h-2V2zM19 2h3v19h-3z"></svg:path>`,
})
export class TdesignBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBarcode1Icon],svg[tdesign-barcode-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zM9 8v8H7V8zm4 0v8h-2V8zm4 0v8h-2V8zM4 15v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignBarcode1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBaseStationIcon],svg[tdesign-base-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.344 3.93l-.707.707a9 9 0 0 0 0 12.728l.707.707l-1.414 1.414l-.707-.707c-4.296-4.296-4.296-11.26 0-15.557l.707-.707zM19.07 2.515l.708.707c4.295 4.296 4.295 11.261 0 15.557l-.707.707l-1.415-1.414l.707-.707a9 9 0 0 0 0-12.728l-.707-.707zM9.526 7.111l-.707.707a4.5 4.5 0 0 0 0 6.364l.707.707l-1.414 1.415l-.708-.707a6.5 6.5 0 0 1 0-9.193l.708-.707zm6.363-1.414l.707.707a6.5 6.5 0 0 1 0 9.193l-.707.707l-1.414-1.415l.707-.707a4.5 4.5 0 0 0 0-6.364l-.707-.707zM10 11a2 2 0 1 1 3 1.732V23h-2V12.732A2 2 0 0 1 10 11"></svg:path>`,
})
export class TdesignBaseStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryIcon],svg[tdesign-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h21v14H0zm2 2v10h17V7zm22 2v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryAddIcon],svg[tdesign-battery-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 .5h8V3h5v20.5H3V3h5zm2 2V5H5v16.5h14V5h-5V2.5zm3 7v3h3v2h-3v3h-2v-3H8v-2h3v-3z"></svg:path>`,
})
export class TdesignBatteryAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryAddFilledIcon],svg[tdesign-battery-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 .5H8V3H3v20.5h18V3h-5zm0 14h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class TdesignBatteryAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryChargingIcon],svg[tdesign-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.376 5.172L8.79 11h6l-5.462 8.876l-1.704-1.048L11.21 13h-6l5.462-8.876zM0 5h7.5v2H2v10h4v2H0zm14 0h7v14h-8v-2h6V7h-5zm10 4v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryChargingFilledIcon],svg[tdesign-battery-charging-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.375 5.172l-1.703-1.048L5.21 13h6l-3.586 5.828l1.703 1.048L14.79 11h-6z"></svg:path><svg:path fill="currentColor" d="M0 5h8.372l-5.846 9.5h6L5.756 19H0zm21 14h-9.373l5.846-9.5h-6l2.77-4.5H21zm3-10v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryChargingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryFilledIcon],svg[tdesign-battery-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h21v14H0zm24 4v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryLowIcon],svg[tdesign-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h21v14H0zm2 2v10h17V7zm4 2v6H4V9zm18 0v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryLowFilledIcon],svg[tdesign-battery-low-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H0v14h21zM6 15H4V9h2zm18 0V9h-2v6z"></svg:path>`,
})
export class TdesignBatteryLowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBeanIcon],svg[tdesign-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.164 2.636C13.166 2.118 14.28 2 15.56 2c1.908 0 3.603.782 4.777 2.173c1.169 1.385 1.77 3.306 1.646 5.514c-.218 3.917-1.81 7.018-4.259 9.132C15.288 20.923 12.063 22 8.645 22a8.4 8.4 0 0 1-5.165-1.82C2.042 19.029 1 17.34 1 15.317c0-1.39.34-2.598 1.07-3.615c.722-1.005 1.767-1.742 3.041-2.304q.516-.227 1.087-.42c1.353-.46 1.88-.817 2.137-1.34c.457-.935.878-1.727 1.289-2.392c.755-1.22 1.526-2.085 2.54-2.61m-.433 3.05c1.702 2.194 1.298 4.748-.243 6.224a4.1 4.1 0 0 1-3.228 1.142c-1.045-.098-2.074-.596-2.986-1.508c-.714.392-1.227.832-1.58 1.324C3.25 13.486 3 14.265 3 15.316c0 1.29.658 2.444 1.731 3.304A6.4 6.4 0 0 0 8.645 20c3.006 0 5.748-.945 7.773-2.694c2.014-1.74 3.38-4.323 3.57-7.73c.099-1.785-.39-3.18-1.178-4.113C18.028 4.537 16.899 4 15.56 4c-1.193 0-1.912.12-2.479.412c-.438.227-.864.599-1.35 1.274M7.373 10.68c.386.238.752.35 1.075.38a2.1 2.1 0 0 0 1.657-.595c.646-.619 1.006-1.695.479-2.85q-.217.418-.453.9c-.563 1.15-1.603 1.73-2.758 2.165"></svg:path>`,
})
export class TdesignBeanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBeanFilledIcon],svg[tdesign-bean-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.55 2.174c-1.628-.657-3.088-.668-4.348-.203c-1.238.456-2.18 1.332-2.873 2.271c-.485.658-.786 1.397-1.035 2.007l-.11.27c-.29.695-.561 1.246-1.024 1.708c-.456.456-1.003.727-1.7 1.018l-.271.113c-.611.25-1.35.553-2.01 1.035c-.961.703-1.852 1.648-2.309 2.89c-.465 1.266-.437 2.724.24 4.346c1.178 2.817 3.988 4.446 7.085 4.69c3.113.246 6.61-.884 9.392-3.665c2.946-2.947 4.105-6.457 3.815-9.558c-.29-3.09-2.035-5.786-4.852-6.922m-10.782 8.86a3 3 0 0 1-.193-.212l.164-.068l.301-.124c.723-.303 1.505-.666 2.181-1.342c.683-.683 1.046-1.468 1.347-2.192l.123-.299l.089-.214q.12.097.23.208a3 3 0 1 1-4.242 4.243"></svg:path>`,
})
export class TdesignBeanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBeerIcon],svg[tdesign-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.152 4c.52-1.695 2.316-3 4.348-3c.988 0 1.915.316 2.664.77A5 5 0 0 1 13.55 3h.95A3.5 3.5 0 0 1 18 6.5v.014c0 .237 0 .863-.117 1.486H19c.497 0 1.054.126 1.474.56c.415.428.526.98.526 1.457V18c0 .476-.111 1.031-.535 1.457c-.424.428-.981.543-1.465.543h-2v1c0 .476-.111 1.031-.535 1.457c-.424.428-.981.543-1.465.543H6c-.484 0-1.04-.115-1.466-.543C4.111 22.032 4 21.476 4 21v-5.17A3 3 0 0 1 2 13V7a3 3 0 0 1 3-3zM6 15.83V21h9V10H8v3a3 3 0 0 1-2 2.83M17 10v8h2v-8zm-1.185-2q.04-.091.084-.28c.098-.441.101-.963.101-1.22A1.5 1.5 0 0 0 14.5 5h-2.118l-.276-.553c-.147-.294-.483-.666-.98-.967C10.64 3.184 10.067 3 9.5 3C7.973 3 7 4.154 7 5v1H5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V8z"></svg:path>`,
})
export class TdesignBeerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBeerFilledIcon],svg[tdesign-beer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.652 4C6.172 2.305 7.968 1 10 1c.988 0 1.915.316 2.664.77A5 5 0 0 1 14.05 3H15a3.5 3.5 0 0 1 3.5 3.5v.014c0 .237 0 .863-.117 1.486H19.5c.497 0 1.054.126 1.474.56c.415.428.526.98.526 1.457V18c0 .476-.111 1.031-.535 1.457c-.424.428-.981.543-1.465.543h-2v1c0 .476-.111 1.031-.535 1.457c-.424.428-.981.543-1.465.543h-9c-.484 0-1.04-.115-1.466-.543c-.423-.426-.534-.981-.534-1.457v-5.17a3 3 0 0 1-2-2.83V7a3 3 0 0 1 3-3zM17.5 10v8h2v-8zm-1.185-2q.04-.091.084-.28c.098-.441.101-.963.101-1.22A1.5 1.5 0 0 0 15 5h-2.118l-.276-.553c-.147-.294-.483-.666-.98-.967C11.14 3.184 10.567 3 10 3C8.473 3 7.5 4.154 7.5 5v1h-2a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V8z"></svg:path>`,
})
export class TdesignBeerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBetaIcon],svg[tdesign-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.491v18.51H4v-2h14v-3.058L3.49 9.476zm-2 11.263V5.509L8.51 9.524z"></svg:path>`,
})
export class TdesignBetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBifurcateIcon],svg[tdesign-bifurcate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3 5a3 3 0 1 1 4.086 2.797c.128.667.412 1.506.934 2.256C8.752 11.103 9.958 12 12 12s3.248-.897 3.98-1.947a6 6 0 0 0 .934-2.256a3.001 3.001 0 1 1 2.019.055a8 8 0 0 1-1.312 3.345c-.934 1.34-2.421 2.478-4.621 2.744v2.23a3.001 3.001 0 1 1-2 0v-2.23c-2.2-.266-3.687-1.405-4.62-2.744a8 8 0 0 1-1.313-3.345A3 3 0 0 1 3 5m15-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TdesignBifurcateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBifurcateFilledIcon],svg[tdesign-bifurcate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a3 3 0 1 1 4.086 2.797c.128.667.412 1.506.934 2.256C8.752 11.103 9.958 12 12 12s3.248-.897 3.98-1.947a6 6 0 0 0 .934-2.256a3.001 3.001 0 1 1 2.019.055a8 8 0 0 1-1.312 3.345c-.934 1.34-2.421 2.478-4.621 2.744v2.23a3.001 3.001 0 1 1-2 0v-2.23c-2.2-.266-3.687-1.405-4.62-2.744a8 8 0 0 1-1.313-3.345A3 3 0 0 1 3 5"></svg:path>`,
})
export class TdesignBifurcateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBillIcon],svg[tdesign-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2h-2v18.08l-1.625-1.3l-1.841-1.472l-1.62 1.44l-.664.59l-.664-.59L12 19.337l-1.586 1.41l-.664.59l-.664-.59l-1.62-1.44l-1.841 1.473L4 22.08V4H2zm4 2v13.92l.875-.7l.659-.528l.63.56l1.586 1.41l1.586-1.41l.664-.59l.664.59l1.586 1.41l1.586-1.41l.63-.56l.659.527l.875.7V4zm2 3h8v2H8zm2 4H9v2h6v-2z"></svg:path>`,
})
export class TdesignBillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBillFilledIcon],svg[tdesign-bill-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v2h2v18.08l3.466-2.772l2.284 2.03l2.25-2l2.25 2l2.284-2.03L20 22.08V4h2V2zm14 7H8V7h8zm-7 4v-2h6v2z"></svg:path>`,
})
export class TdesignBillFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBlockchainIcon],svg[tdesign-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2.5h6V2h7v7h-2.5v6H22v7h-7v-2.5H9V22H2v-7h2.5V9H2zm5 5V4H4v3zm-.5 2v6H9v2.5h6V15h2.5V9H15V6.5H9V9zM17 17v3h3v-3zM7 17H4v3h3zM17 4v3h3V4z"></svg:path>`,
})
export class TdesignBlockchainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBluetoothIcon],svg[tdesign-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 .255l7.453 6.707L13.414 12l5.039 5.038L11 23.745v-9.33l-4 4L5.586 17l5-5l-5-5L7 5.586l4 4zm2 14.16v4.84l2.548-2.293zm0-4.83l2.548-2.547L13 4.745z"></svg:path>`,
})
export class TdesignBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBoneIcon],svg[tdesign-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3a1.5 1.5 0 0 0-1.318 2.217l.358.657L5.874 16.54l-.657-.358a1.5 1.5 0 1 0-.993 2.793l.676.125l.125.676a1.5 1.5 0 1 0 2.793-.993l-.358-.657L18.126 7.46l.657.358a1.5 1.5 0 1 0 .993-2.793L19.1 4.9l-.125-.676A1.5 1.5 0 0 0 17.5 3M14 4.5a3.5 3.5 0 0 1 6.764-1.264a3.5 3.5 0 0 1-2.218 6.632l-8.678 8.678a3.5 3.5 0 0 1-6.633 2.218a3.5 3.5 0 0 1 2.219-6.632l8.678-8.678A3.5 3.5 0 0 1 14 4.5"></svg:path>`,
})
export class TdesignBoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBoneFilledIcon],svg[tdesign-bone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 1a3.5 3.5 0 0 0-3.177 4.97L5.97 14.323a3.5 3.5 0 1 0-2.735 6.441a3.5 3.5 0 1 0 6.442-2.734l8.353-8.353a3.5 3.5 0 1 0 2.734-6.441A3.5 3.5 0 0 0 17.5 1"></svg:path>`,
})
export class TdesignBoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookIcon],svg[tdesign-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a4 4 0 0 1 4-4h14v20H7a4 4 0 0 1-4-4zm2 8.535A4 4 0 0 1 7 14h12V4H7a2 2 0 0 0-2 2zM19 16H7a2 2 0 1 0 0 4h12zM10 6h7v2h-7z"></svg:path>`,
})
export class TdesignBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookFilledIcon],svg[tdesign-book-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14V2zm4 3h7v2h-7zM5 18a2 2 0 0 1 2-2h12v4H7a2 2 0 0 1-2-2"></svg:path>`,
})
export class TdesignBookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookOpenIcon],svg[tdesign-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h8a4 4 0 0 1 3 1.354A4 4 0 0 1 15 2h8v19h-1c-2.944 0-5.14.245-6.586.486c-.723.12-1.26.24-1.609.328a11 11 0 0 0-.472.13l-.017.005h-.002l-.152.051h-2.324l-.152-.05l-.001-.001h-.001l-.017-.006l-.088-.026a11 11 0 0 0-.384-.103a21 21 0 0 0-1.61-.328C7.14 21.246 4.946 21 2 21H1zm2 2v15.01c2.563.047 4.535.274 5.914.504c.777.13 1.366.26 1.766.36q.188.047.32.084V6a2 2 0 0 0-2-2zm10 2v13.958q.132-.037.32-.084c.4-.1.989-.23 1.766-.36c1.379-.23 3.35-.457 5.914-.505V4h-6a2 2 0 0 0-2 2m2 2h4v2h-4zm0 3h4v2h-4z"></svg:path>`,
})
export class TdesignBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookOpenFilledIcon],svg[tdesign-book-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H1v19h1c2.944 0 5.14.245 6.586.486c.723.12 1.26.24 1.609.328a11 11 0 0 1 .472.13l.017.005h.002l.152.051h2.324l.152-.05l.002-.001l.017-.006l.088-.026q.122-.037.384-.103c.35-.087.886-.207 1.61-.328C16.86 21.246 19.054 21 22 21h1V2h-8a4 4 0 0 0-3 1.354A4 4 0 0 0 9 2M3 19.01V4h6a2 2 0 0 1 2 2v13.958l-.32-.084c-.4-.1-.989-.23-1.766-.36c-1.379-.23-3.35-.457-5.914-.505M19 10h-4V8h4zm0 3h-4v-2h4z"></svg:path>`,
})
export class TdesignBookOpenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookUnknownIcon],svg[tdesign-book-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h8a4 4 0 0 1 3 1.354A4 4 0 0 1 15 2h8v19h-1c-2.944 0-5.14.245-6.586.486c-.723.12-1.26.24-1.609.328a11 11 0 0 0-.472.13l-.017.005h-.002l-.152.051h-2.324l-.152-.05l-.001-.001h-.001l-.017-.006l-.088-.026a11 11 0 0 0-.384-.103a21 21 0 0 0-1.61-.328C7.14 21.246 4.946 21 2 21H1zm2 2v15.01c2.563.047 4.535.274 5.914.504c.777.13 1.366.26 1.766.36q.188.047.32.084V6a2 2 0 0 0-2-2zm10 2v13.958q.132-.037.32-.084c.4-.1.989-.23 1.766-.36c1.379-.23 3.35-.457 5.914-.505V4h-6a2 2 0 0 0-2 2"></svg:path><svg:path fill="currentColor" d="M17 9.5a1 1 0 0 0-1 1v1h-2v-1a3 3 0 1 1 6 0c0 .676-.172 1.246-.474 1.71a2.96 2.96 0 0 1-1.029.95a4 4 0 0 1-.494.238v.352h-2v-1c0-.424.245-.687.361-.79c.12-.105.24-.165.296-.192c.107-.05.233-.094.309-.12l.018-.007c.19-.066.36-.127.52-.218a.96.96 0 0 0 .343-.305c.072-.11.15-.294.15-.618a1 1 0 0 0-1-1m-1 5h2.004v2.004H16z"></svg:path>`,
})
export class TdesignBookUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookUnknownFilledIcon],svg[tdesign-book-unknown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H1v19h1c2.944 0 5.14.245 6.586.486c.723.12 1.26.24 1.609.328a11 11 0 0 1 .472.13l.017.005h.002l.152.051h2.324l.152-.05l.002-.001l.017-.006l.088-.026q.122-.037.384-.103c.35-.087.886-.207 1.61-.328C16.86 21.246 19.054 21 22 21h1V2h-8a4 4 0 0 0-3 1.354A4 4 0 0 0 9 2M3 19.01V4h6a2 2 0 0 1 2 2v13.958l-.32-.084c-.4-.1-.989-.23-1.766-.36c-1.379-.23-3.35-.457-5.914-.505m13-8.51v1h-2v-1a3 3 0 1 1 6 0c0 .676-.172 1.246-.474 1.71a2.96 2.96 0 0 1-1.029.95a4 4 0 0 1-.494.238v.352h-2v-1c0-.424.245-.687.361-.79c.12-.105.24-.165.296-.192c.107-.05.233-.094.309-.12l.018-.007c.19-.066.36-.127.52-.218a.96.96 0 0 0 .343-.305c.072-.11.15-.294.15-.618a1 1 0 1 0-2 0m2.004 4v2.004H16V14.5z"></svg:path>`,
})
export class TdesignBookUnknownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkIcon],svg[tdesign-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714zm2 2v14.057l6-4.286l6 4.286V5z"></svg:path>`,
})
export class TdesignBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkAddIcon],svg[tdesign-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0v3h3v2h-3v3h-2V5h-3V3h3V0zM4 3h9v2H6v14.057l6-4.286l6 4.286V10h2v12.943l-8-5.714l-8 5.714z"></svg:path>`,
})
export class TdesignBookmarkAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkAddFilledIcon],svg[tdesign-bookmark-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3V0h-2v3h-3v2h3v3h2V5h3V3z"></svg:path><svg:path fill="currentColor" d="M13.5 4q0-.513.09-1H4v19.943l8-5.714l8 5.714V9.41q-.487.09-1 .091A5.5 5.5 0 0 1 13.5 4"></svg:path>`,
})
export class TdesignBookmarkAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkCheckedIcon],svg[tdesign-bookmark-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.596 2.94L16.94 8.595L13.405 5.06l1.414-1.415l2.121 2.122l4.243-4.243zM4 3h8v2H6v14.057l6-4.286l6 4.286V10h2v12.943l-8-5.714l-8 5.714z"></svg:path>`,
})
export class TdesignBookmarkCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkCheckedFilledIcon],svg[tdesign-bookmark-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.403 5.06l3.536 3.536l5.657-5.657l-1.415-1.414l-4.242 4.243l-2.121-2.122z"></svg:path><svg:path fill="currentColor" d="M12.5 5c0-.706.133-1.38.375-2H4v19.943l8-5.714l8 5.714V10.125A5.5 5.5 0 0 1 12.5 5"></svg:path>`,
})
export class TdesignBookmarkCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkDoubleIcon],svg[tdesign-bookmark-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 0l.003 18.419L21 16.415V2.001l-10.999.001v-2zM3 4h16v19.943l-8-5.714l-8 5.714zm2 2v14.057l6-4.286l6 4.286V6z"></svg:path>`,
})
export class TdesignBookmarkDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkDoubleFilledIcon],svg[tdesign-bookmark-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.003 18.419L23 0L10.001.002v2H21v14.413z"></svg:path><svg:path fill="currentColor" d="M19 4H3v19.943l8-5.714l8 5.714z"></svg:path>`,
})
export class TdesignBookmarkDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkFilledIcon],svg[tdesign-bookmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714z"></svg:path>`,
})
export class TdesignBookmarkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkMinusIcon],svg[tdesign-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h9v2H6v14.057l6-4.286l6 4.286V7h2v15.943l-8-5.714l-8 5.714zm11 0h8v2h-8z"></svg:path>`,
})
export class TdesignBookmarkMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkMinusFilledIcon],svg[tdesign-bookmark-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 4q0-.513.09-1H4v19.943l8-5.714l8 5.714V9.41q-.487.09-1 .091A5.5 5.5 0 0 1 13.5 4"></svg:path><svg:path fill="currentColor" d="M23 3h-8v2h8z"></svg:path>`,
})
export class TdesignBookmarkMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBracesIcon],svg[tdesign-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 17.6A3.4 3.4 0 0 0 5.9 21H7v-2H5.9a1.4 1.4 0 0 1-1.4-1.4V14c0-.768-.288-1.47-.764-2c.476-.53.764-1.232.764-2V6.4A1.4 1.4 0 0 1 5.9 5H7V3H5.9a3.4 3.4 0 0 0-3.4 3.4V10a1 1 0 0 1-1 1H.4v2h1.1a1 1 0 0 1 1 1zM17 21h1.1a3.4 3.4 0 0 0 3.4-3.4V14a1 1 0 0 1 1-1h1.1v-2h-1.1a1 1 0 0 1-1-1V6.4A3.4 3.4 0 0 0 18.1 3H17v2h1.1a1.4 1.4 0 0 1 1.4 1.4V10c0 .768.288 1.47.764 2a3 3 0 0 0-.764 2v3.6a1.4 1.4 0 0 1-1.4 1.4H17z"></svg:path>`,
})
export class TdesignBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBracketsIcon],svg[tdesign-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.5h5v2H4v13h3v2H2zm15 0h5v17h-5v-2h3v-13h-3z"></svg:path>`,
})
export class TdesignBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBreadIcon],svg[tdesign-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.023 11.278c-.051.463.064.86.387 1.183l3.776 3.776l-1.414 1.414l-3.627-3.627l-.03.082c-.558 1.52-.036 3.24 1.175 4.527c1.213 1.289 2.943 1.955 4.538 1.55c2.124-.538 4.425-2.026 6.429-3.946c1.92-2.004 3.407-4.305 3.946-6.429c.405-1.595-.261-3.325-1.55-4.538c-1.287-1.211-3.006-1.733-4.527-1.176l-.082.03l3.627 3.628l-1.414 1.414L12.48 5.39c-.323-.323-.72-.438-1.183-.387c-.489.054-1.03.297-1.49.677c-.463.383-.757.832-.853 1.209c-.085.328-.031.6.23.863l4.243 4.242l-1.414 1.414l-4.242-4.242c-.262-.262-.535-.316-.863-.231c-.377.096-.826.39-1.21.854c-.379.46-.622 1-.676 1.489m1.906-4.369a3 3 0 0 1 .088-.518c.229-.888.82-1.676 1.518-2.253c.702-.58 1.599-1.02 2.544-1.123c.31-.035.627-.032.941.014c.146-.167.312-.285.445-.368c.267-.167.604-.31.973-.445c2.413-.883 4.904.015 6.586 1.598c1.681 1.582 2.743 4.022 2.118 6.486c-.656 2.587-2.395 5.19-4.457 7.337l-.014.014l-.014.014c-2.147 2.062-4.75 3.8-7.337 4.457c-2.464.625-4.904-.437-6.486-2.118c-1.583-1.682-2.481-4.173-1.598-6.586c.136-.37.278-.706.445-.973c.083-.133.201-.299.368-.445a3.7 3.7 0 0 1-.014-.941c.104-.945.543-1.842 1.123-2.544c.577-.698 1.365-1.29 2.253-1.518a3 3 0 0 1 .518-.088"></svg:path>`,
})
export class TdesignBreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBreadFilledIcon],svg[tdesign-bread-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.436 13.003c-.273.22-.386.508-.432.72c-.512 2.362.233 4.645 1.884 6.353c1.582 1.637 3.987 2.66 6.415 2.043c2.587-.656 5.19-2.395 7.337-4.456l.014-.015l.014-.014c2.062-2.147 3.8-4.75 4.457-7.336c.616-2.428-.406-4.833-2.043-6.415c-1.444-1.396-3.29-2.18-5.314-2.038c-.752.053-1.17.58-1.363.913l3.9 3.9l-1.415 1.414l-4.519-4.519a3.34 3.34 0 0 0-2.126.172c-.509.216-.95.547-1.24.919c-.142.18-.293.428-.356.725c-.066.308-.044.76.3 1.125l4.76 4.76l-1.415 1.414L6.536 7.91a1.24 1.24 0 0 0-1.129-.3a1.8 1.8 0 0 0-.722.356c-.371.291-.701.73-.918 1.239a3.34 3.34 0 0 0-.172 2.128l4.517 4.517l-1.414 1.414z"></svg:path>`,
})
export class TdesignBreadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridgeIcon],svg[tdesign-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v3.413q.172.086.406.192c.61.27 1.547.62 2.81.9C8.482 6.786 10.076 7 12 7s3.52-.214 4.783-.495c1.264-.28 2.2-.63 2.81-.9q.236-.106.407-.192V2h2v13h1v2h-1v5h-2v-5H4v5H2v-5H1v-2h1V2zm0 13h2V8.267a17 17 0 0 1-2-.662zm4-6.31V15h3V8.982a24 24 0 0 1-3-.291m5 .292V15h3V8.69c-.893.145-1.893.251-3 .292m5-.715V15h2V7.605c-.531.215-1.198.449-2 .662m2.446-3.1l.003-.002l-.002.002z"></svg:path>`,
})
export class TdesignBridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge1Icon],svg[tdesign-bridge-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1.999h6V5.53c.208.154.524.363.947.575c.878.438 2.226.894 4.053.894s3.175-.456 4.053-.894c.423-.212.739-.42.947-.575V2h6v20h-6v-5H7v5H1zm6 13h4v-6.04c-1.686-.134-3.004-.594-3.947-1.066L7 7.867zm6-6.04V15h4V7.867l-.053.026c-.943.472-2.26.932-3.947 1.067M3 4v16h2V4zm16 0v16h2V4z"></svg:path>`,
})
export class TdesignBridge1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge1FilledIcon],svg[tdesign-bridge-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1.999h6V5.53c.208.154.524.363.947.575c.878.438 2.226.894 4.053.894s3.175-.456 4.053-.894c.423-.212.739-.42.947-.575V2h6v20h-6v-5H7v5H1zm6 13h4v-6.04c-1.686-.134-3.004-.594-3.947-1.066L7 7.867zm6-6.04V15h4V7.867l-.053.026c-.943.472-2.26.932-3.947 1.067"></svg:path>`,
})
export class TdesignBridge1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge2Icon],svg[tdesign-bridge-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.298 6.49c-1.208 1.098-2.383 2.927-3.35 5.826c-.082.248-.168.524-.26.817c-.244.783-.525 1.684-.87 2.47c-.39.882-.944 1.836-1.818 2.433V19h6v-5a4 4 0 0 1 8 0v5h6v-.964c-.874-.597-1.429-1.55-1.817-2.433c-.346-.786-.627-1.687-.872-2.47c-.09-.293-.177-.57-.26-.817c-.966-2.9-2.141-4.728-3.349-5.826C14.515 5.41 13.256 5 12 5s-2.515.41-3.702 1.49M6.952 5.01C8.515 3.59 10.256 3 12 3s3.485.59 5.048 2.01c1.542 1.402 2.867 3.573 3.9 6.674q.162.487.31.969c.232.743.458 1.468.756 2.144c.428.974.877 1.523 1.368 1.726l.618.255V21H14v-7a2 2 0 1 0-4 0v7H0v-4.222l.618-.255c.491-.203.94-.752 1.368-1.726c.298-.676.524-1.401.756-2.144q.148-.481.31-.97c1.033-3.1 2.358-5.27 3.9-6.673"></svg:path>`,
})
export class TdesignBridge2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge2FilledIcon],svg[tdesign-bridge-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-1.744 0-3.485.59-5.048 2.01c-1.542 1.402-2.867 3.573-3.9 6.674q-.162.487-.31.969c-.232.743-.458 1.468-.756 2.144c-.428.974-.877 1.523-1.368 1.726L0 16.778V21h9v-7a3 3 0 1 1 6 0v7h9v-4.222l-.618-.255c-.491-.203-.94-.752-1.369-1.726c-.297-.676-.523-1.401-.755-2.144q-.148-.481-.31-.97c-1.033-3.1-2.358-5.27-3.9-6.673C15.485 3.59 13.744 3 12 3"></svg:path>`,
})
export class TdesignBridge2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge3Icon],svg[tdesign-bridge-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v3.465l7 4.667V2h2v8.132l7-4.667V2h2v13h1v2h-1v5h-2v-5H4v5H2v-5H1v-2h1V2zm0 13h7v-2.465L4 7.87zm9 0h7V7.87l-7 4.666z"></svg:path>`,
})
export class TdesignBridge3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge4Icon],svg[tdesign-bridge-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2.001v2h-1.18L21 8.098V22h-2V7.901l.78-3.9h-3.56L17 7.9V22h-2V8.099L14.18 4H9.82L9 8.1V22H7V7.902l.78-3.9H4.22L5 7.9V22H3V8.099L2.18 4L1 4.001v-2z"></svg:path>`,
})
export class TdesignBridge4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge5Icon],svg[tdesign-bridge-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v18.001h-6v-7.603l-.14-.132a8.4 8.4 0 0 0-1.206-.92A8.64 8.64 0 0 0 12 11c-2.02 0-3.586.671-4.654 1.345A8.4 8.4 0 0 0 6 13.398V21H0zm6 7.836q.134-.09.279-.181A10.64 10.64 0 0 1 12 9a10.64 10.64 0 0 1 6 1.836V5.001h-.625L12 5H6zm14-5.835v14h2v-14zM4 5H2v14h2z"></svg:path>`,
})
export class TdesignBridge5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge5FilledIcon],svg[tdesign-bridge-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v18.001h-6v-7.603l-.14-.132a8.4 8.4 0 0 0-1.206-.92A8.64 8.64 0 0 0 12 11c-2.02 0-3.586.671-4.654 1.345A8.4 8.4 0 0 0 6 13.398V21H0zm6 7.836q.134-.09.279-.181A10.64 10.64 0 0 1 12 9a10.64 10.64 0 0 1 6 1.836V5.001L6 5z"></svg:path>`,
})
export class TdesignBridge5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge6Icon],svg[tdesign-bridge-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 1.754l11 9.9l11-9.9V21h-2v-7h-2v7h-2v-7H7v7H5v-7H3v7H1zM3 12h6.394L3 6.245zm11.606 0h6.393L21 6.245z"></svg:path>`,
})
export class TdesignBridge6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge6FilledIcon],svg[tdesign-bridge-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 1.754l-11 9.9l-11-9.9V21h2v-7h2v7h2v-7h10v7h2v-7h2v7h2z"></svg:path>`,
})
export class TdesignBridge6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightnessIcon],svg[tdesign-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .086l3.49 3.49h4.935V8.51l3.49 3.49l-3.49 3.49v4.934H15.49L12 23.914l-3.49-3.49H3.577V15.49L.086 12l3.49-3.49V3.575H8.51zm0 2.828L9.34 5.575H5.576V9.34L2.914 12l2.662 2.662v3.763h3.763L12 21.086l2.661-2.661h3.764V14.66l2.66-2.66l-2.66-2.661V5.575H14.66zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0"></svg:path>`,
})
export class TdesignBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightness1Icon],svg[tdesign-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .086l3.49 3.49h4.935V8.51l3.49 3.49l-3.49 3.49v4.934H15.49L12 23.914l-3.49-3.49H3.577V15.49L.086 12l3.49-3.49V3.575H8.51zm0 2.828L9.34 5.575H5.576V9.34L2.914 12l2.662 2.662v3.763h3.763L12 21.086l2.661-2.661h3.764V14.66l2.66-2.66l-2.66-2.661V5.575H14.66zM12.065 8A9 9 0 0 1 13 12a9 9 0 0 1-.936 4a4 4 0 0 0 0-8m-1.939-1.7a6 6 0 1 1 0 11.402l-1.314-.432l.823-1.113A6.96 6.96 0 0 0 11 12a6.96 6.96 0 0 0-1.367-4.157L8.81 6.731z"></svg:path>`,
})
export class TdesignBrightness1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightness1FilledIcon],svg[tdesign-brightness-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.49 3.575L12 .085l-3.49 3.49H3.577V8.51L.086 12l3.49 3.49v4.934H8.51l3.49 3.49l3.489-3.49h4.935V15.49l3.49-3.49l-3.49-3.49V3.575zM12 17c-.63 0-1.232-.116-1.787-.33A6.97 6.97 0 0 0 11.999 12a6.97 6.97 0 0 0-1.786-4.67A5 5 0 1 1 12 17"></svg:path>`,
})
export class TdesignBrightness1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrightnessFilledIcon],svg[tdesign-brightness-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.49 3.575L12 .085l-3.49 3.49H3.577V8.51L.086 12l3.49 3.49v4.934H8.51l3.49 3.49l3.489-3.49h4.935V15.49l3.49-3.49l-3.49-3.49V3.575zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class TdesignBrightnessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBroccoliIcon],svg[tdesign-broccoli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.616 4.17c1.303-1.124 3.213-1.07 4.373.091a3.11 3.11 0 0 1 .893 2.46a5 5 0 0 0-.374.047l-.029.005l-.01.002h-.003l-.003.002l-.981.194l.388 1.962l.977-.194h.005l.04-.007a2.6 2.6 0 0 1 .662-.01a3.07 3.07 0 0 1 1.746.87c1.218 1.219 1.218 3.261-.084 4.563a3.4 3.4 0 0 1-.971.68l-.805.373l.274.844c.283.868.071 1.89-.653 2.615c-1.023 1.023-2.62 1.017-3.566.07c-.377-.376-.614-.896-.683-1.471c-.08-.668.074-1.351.43-1.876l.464-.684l-1.832-1.832l-.437-1.31l-1.311-.438l-1.016-1.016l-.62.261c-.873.369-1.803.278-2.628-.222a3.8 3.8 0 0 1-.704-.556C4.94 8.375 4.94 6.333 6.242 5.03c1.21-1.21 3.11-1.195 4.387-.06q.067.06.132.125c.723.722.856 1.32.954 2.083l.128.991l1.983-.254l-.127-.992c-.108-.843-.296-1.771-1.083-2.753M19.865 7a5.11 5.11 0 0 0-1.462-4.153c-2.008-2.009-5.256-1.963-7.307.002c-1.956-1.142-4.52-.982-6.268.767c-2.045 2.045-2.12 5.354-.084 7.39a6 6 0 0 0 .578.509a6 6 0 0 1-.141.624a15 15 0 0 1-.649 1.813c-.569 1.339-1.257 2.53-1.724 2.998l-.707.707L6.343 21.9l.707-.707a18.5 18.5 0 0 1 2.458-2.001c.567-.38 1.129-.692 1.626-.874c.378-.139.643-.174.816-.164a4.4 4.4 0 0 0 1.13 1.997c1.765 1.766 4.629 1.697 6.395-.07a4.6 4.6 0 0 0 1.324-3.83a5.4 5.4 0 0 0 .831-.682c2.046-2.045 2.12-5.354.084-7.39a5.05 5.05 0 0 0-1.849-1.18m-8.014 9.152c-.495.008-.979.132-1.405.288c-.706.259-1.416.666-2.05 1.09a20 20 0 0 0-2.026 1.568l-1.514-1.514c.555-.799 1.097-1.86 1.517-2.85c.3-.705.56-1.425.736-2.065l.062-.234c.788.21 1.62.22 2.44.004l.268.268l-1.414 1.414l1.414 1.415l1.414-1.415l.887.888a4.8 4.8 0 0 0-.33 1.143"></svg:path>`,
})
export class TdesignBroccoliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBroccoliFilledIcon],svg[tdesign-broccoli-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.865 6.996a5.222 5.222 0 0 1-3.714 9.76a5.2 5.2 0 0 0 2.832.834c.647 0 1.266-.118 1.838-.333a4.532 4.532 0 0 1-8.88.896c-.172-.008-.435.028-.807.165c-.498.182-1.06.494-1.626.874a18.5 18.5 0 0 0-2.458 2l-.707.708L2.1 17.657l.707-.707c.468-.468 1.156-1.66 1.725-2.998c.275-.646.502-1.28.648-1.814c.073-.263.118-.475.144-.636a5.22 5.22 0 0 1 5.822-8.648l.006-.006l.25.17a5.22 5.22 0 0 1 2.257 3.71l.004.028q.032-.33.032-.666a6.7 6.7 0 0 0-1.395-4.1a5.125 5.125 0 0 1 7.566 5.007m-7.792 8.284q.049-.137.107-.271l-.887-.888l-1.415 1.415l-1.414-1.415l1.414-1.414l-.268-.268a4.74 4.74 0 0 1-2.44-.004q-.03.119-.061.233a17 17 0 0 1-.736 2.067c-.42.989-.962 2.05-1.517 2.85l1.514 1.513a20 20 0 0 1 2.026-1.569c.633-.423 1.343-.83 2.05-1.09c.42-.154.899-.277 1.387-.286a4.5 4.5 0 0 1 .24-.873"></svg:path>`,
})
export class TdesignBroccoliFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseIcon],svg[tdesign-browse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.097 12c1.441 4.08 5.332 7 9.903 7c4.57 0 8.46-2.92 9.902-7C20.461 7.92 16.57 5 12 5s-8.462 2.92-9.903 7m-2.008-.304C1.7 6.654 6.421 3 12 3c5.58 0 10.302 3.654 11.91 8.696l.098.304l-.097.304C22.3 17.346 17.578 21 12 21S1.698 17.346.09 12.304L-.009 12zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignBrowseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseFilledIcon],svg[tdesign-browse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path fill="currentColor" d="M12 3C6.42 3 1.698 6.654.09 11.696L-.009 12l.097.304C1.7 17.346 6.421 21 12 21s10.302-3.654 11.91-8.696l.098-.304l-.097-.304C22.3 6.654 17.578 3 12 3m0 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class TdesignBrowseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseGalleryIcon],svg[tdesign-browse-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.41 1.586l.692.722A13.96 13.96 0 0 1 24 12c0 3.761-1.485 7.178-3.898 9.692l-.692.722l-1.443-1.385l.692-.721A11.96 11.96 0 0 0 22 12c0-3.225-1.27-6.15-3.34-8.308l-.693-.721zM10 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 12C0 6.477 4.477 2 10 2s10 4.477 10 10s-4.477 10-10 10S0 17.523 0 12m11-5.5v5.086L14.414 15L13 16.414l-4-4V6.5z"></svg:path>`,
})
export class TdesignBrowseGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseGalleryFilledIcon],svg[tdesign-browse-gallery-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.102 2.308l-.692-.722l-1.443 1.385l.692.721A11.96 11.96 0 0 1 22 12c0 3.225-1.27 6.15-3.34 8.308l-.693.721l1.443 1.385l.692-.722A13.96 13.96 0 0 0 24 12c0-3.761-1.485-7.178-3.898-9.692"></svg:path><svg:path fill="currentColor" d="M10 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 17.523 0 12S4.477 2 10 2m3 14.414L14.414 15L11 11.586V6.5H9v5.914z"></svg:path>`,
})
export class TdesignBrowseGalleryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseOffIcon],svg[tdesign-browse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 1.586l6.171 6.172l7.072 7.07L23.413 21L22 22.414l-2.965-2.965A12.45 12.45 0 0 1 13 21c-5.58 0-10.302-3.654-11.91-8.696L.991 12l.097-.304A12.5 12.5 0 0 1 5.265 5.68L2.585 3zm2.691 5.52A10.53 10.53 0 0 0 3.097 12c1.441 4.08 5.332 7 9.903 7c1.631 0 3.174-.372 4.55-1.035l-1.793-1.793a5 5 0 0 1-6.929-6.929zm3.601 3.6a3 3 0 0 0 4.001 4.001zM13 5q-.866 0-1.692.135l-.987.16l-.32-1.974l.988-.16A12.6 12.6 0 0 1 13 3c5.579 0 10.301 3.654 11.91 8.696l.097.304l-.097.304a12.5 12.5 0 0 1-1.817 3.572l-.591.807l-1.614-1.181l.59-.807A10.5 10.5 0 0 0 22.904 12C21.46 7.92 17.57 5 13 5m.513 1.926l.956.294a5.01 5.01 0 0 1 3.312 3.311l.293.956l-1.912.587l-.293-.956a3.01 3.01 0 0 0-1.987-1.986l-.956-.294z"></svg:path>`,
})
export class TdesignBrowseOffIcon {
  readonly viewBox = input("0 0 26 24")
  readonly width = input("1.09em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseOffFilledIcon],svg[tdesign-browse-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.004 1.59L3 1.586L1.586 3l2.68 2.68a12.5 12.5 0 0 0-4.177 6.016L-.008 12l.097.304C1.7 17.346 6.421 21 12 21c2.19 0 4.247-.563 6.036-1.55L21 22.413l1.41-1.41L3 1.594zM7 12c0-1.02.305-1.967.828-2.757l1.464 1.464a3 3 0 0 0 4 4.001l1.465 1.464A5 5 0 0 1 7 12m14.198 4.964a12.5 12.5 0 0 0 2.712-4.66l.097-.304l-.097-.304C22.3 6.654 17.578 3 12 3c-1.43 0-2.804.24-4.084.682l3.369 3.369Q11.635 7 12 7a5 5 0 0 1 4.95 5.715z"></svg:path><svg:path fill="currentColor" d="M14.253 10.02a3 3 0 0 0-.272-.273z"></svg:path>`,
})
export class TdesignBrowseOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrushIcon],svg[tdesign-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.92 23.494L.794 12.368L10.3 2.86l2.833 2.833l3.274-3.275L21.87 7.88l-3.274 3.275l2.832 2.832zm3.074-5.903L6.697 9.293l-3.075 3.075l8.298 8.297zM8.111 7.879l8.297 8.298l2.191-2.19l-2.833-2.833l3.275-3.275l-2.633-2.632l-3.274 3.274l-2.833-2.832z"></svg:path>`,
})
export class TdesignBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBrushFilledIcon],svg[tdesign-brush-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.794 12.368L11.92 23.494l4.489-4.489L5.283 7.88zm17.029 5.222l3.605-3.604l-2.833-2.832l3.274-3.275l-5.46-5.46l-3.275 3.274l-2.832-2.833l-3.605 3.605z"></svg:path>`,
})
export class TdesignBrushFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBugIcon],svg[tdesign-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.17 5h5.66a3.001 3.001 0 0 0-5.66 0M7 6a5 5 0 0 1 10 0v1H7zM5 4v2.586L6.414 8h11.172L19 6.586V4h2v3.414l-3 3V12h3v2h-3v1.586l3 3V22h-2v-2.586l-1.36-1.36A6.01 6.01 0 0 1 13 21.917V22h-1a6 6 0 0 1-5.64-3.946L5 19.414V22H3v-3.414l3-3V14H3v-2h3v-1.586l-3-3V4zm3 6.414V16a4 4 0 0 0 3 3.874V10H8.414zM13 10v9.874c1.725-.444 3-2.01 3-3.874v-5.586L15.586 10z"></svg:path>`,
})
export class TdesignBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBugFilledIcon],svg[tdesign-bug-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.998a5 5 0 0 1 10 0z"></svg:path><svg:path fill="currentColor" d="M6.414 8L5 6.586V4H3v3.414l3 3V12H3v2h3v1.586l-3 3V22h2v-2.586l1.36-1.36c.729 2 2.49 3.503 4.64 3.863V8zM13 8v13.917a6.01 6.01 0 0 0 4.64-3.863l1.36 1.36V22h2v-3.414l-3-3V14h3v-2h-3v-1.586l3-3V4h-2v2.586L17.586 8z"></svg:path>`,
})
export class TdesignBugFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBugReportIcon],svg[tdesign-bug-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.128 1.592L9.493 4.43A7.5 7.5 0 0 1 12 4c.878 0 1.722.151 2.507.43l2.365-2.838l1.536 1.28l-2.083 2.5A7.5 7.5 0 0 1 19.073 9H22v2h-2.516q.015.248.016.5v5q0 .252-.016.5H22v2h-2.927a7.503 7.503 0 0 1-14.146 0H2v-2h2.516a8 8 0 0 1-.016-.5v-5q0-.252.016-.5H2V9h2.927a7.5 7.5 0 0 1 2.748-3.628l-2.083-2.5zM12 6a5.5 5.5 0 0 0-5.5 5.5v5a5.5 5.5 0 0 0 11 0v-5A5.5 5.5 0 0 0 12 6m-3 4h6v2H9zm0 6h6v2H9z"></svg:path>`,
})
export class TdesignBugReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBugReportFilledIcon],svg[tdesign-bug-report-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.493 4.43A7.5 7.5 0 0 1 12 4c.878 0 1.722.151 2.507.43l2.365-2.838l1.536 1.28l-2.083 2.5A7.5 7.5 0 0 1 19.073 9H22v2h-2.516q.015.248.016.5v5q0 .252-.016.5H22v2h-2.927a7.503 7.503 0 0 1-14.146 0H2v-2h2.516a8 8 0 0 1-.016-.5v-5q0-.252.016-.5H2V9h2.927a7.5 7.5 0 0 1 2.748-3.628l-2.083-2.5l1.536-1.28zM15 12v-2H9v2zm0 6v-2H9v2z"></svg:path>`,
})
export class TdesignBugReportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuildingIcon],svg[tdesign-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v3h3v4h2v2h-1v9h1v2H2v-2h1v-9H2V9h2V5h3zm2 3h6V4H9zm-4 6v9h3v-6h8v6h3v-9zm13-2V7H6v2zm-4 11v-4h-4v4z"></svg:path>`,
})
export class TdesignBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding1Icon],svg[tdesign-building-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1.5v1.625q.595.16 1.065.51c.549.407.897.951 1.113 1.494c.247.615.344 1.277.364 1.871H11.5v2H10v1h12v12H3V9H1.5V7h1.458c.02-.594.117-1.256.363-1.871c.217-.543.565-1.087 1.114-1.494q.47-.35 1.065-.51V1.5zM4.96 7h3.08c-.018-.389-.083-.789-.219-1.129c-.116-.29-.268-.497-.449-.63C7.201 5.112 6.937 5 6.5 5s-.7.113-.873.24c-.18.134-.332.34-.449.631c-.135.34-.2.74-.219 1.129M8 9H5v11h3zm2 11h2v-5h6v5h2v-8H10zm6 0v-3h-2v3z"></svg:path>`,
})
export class TdesignBuilding1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding1FilledIcon],svg[tdesign-building-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1.5v1.625q.595.16 1.065.51c.549.407.897.951 1.113 1.494c.247.615.344 1.277.364 1.871H11.5v2H10v1h12v12h-3.5v-6h-7v6H3V9H1.5V7h1.458c.02-.594.117-1.256.363-1.871c.217-.543.565-1.087 1.114-1.494q.47-.35 1.065-.51V1.5zM4.96 7h3.08c-.018-.389-.083-.789-.219-1.129c-.116-.29-.268-.497-.449-.63C7.201 5.112 6.937 5 6.5 5s-.7.113-.873.24c-.18.134-.332.34-.449.631c-.135.34-.2.74-.219 1.129M5 9v11h3V9z"></svg:path><svg:path fill="currentColor" d="M16.5 22h-3v-4h3z"></svg:path>`,
})
export class TdesignBuilding1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding2Icon],svg[tdesign-building-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .834l6.372 3.823l-1.029 1.715L17 6.166V8h5v14H2V8h5V6.166l-.343.206l-1.029-1.715zM9 4.966V8h6V4.966l-3-1.8zm2 .032h2.004v2.004H11zM4 10v10h4v-7h8v7h4V10zm10 10v-5h-4v5z"></svg:path>`,
})
export class TdesignBuilding2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding2FilledIcon],svg[tdesign-building-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .834l6.373 3.823l-1.03 1.715l-.342-.206V8H7V6.166l-.343.206l-1.03-1.715zm-1 3.164v2.004h2.004V3.998zM22 10H2v12h6v-7h8v7h6z"></svg:path><svg:path fill="currentColor" d="M10 17v5h4v-5z"></svg:path>`,
})
export class TdesignBuilding2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding3Icon],svg[tdesign-building-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v3h3v4h3v13H2V9h3V5h3zm2 3h4V4h-4zM7 9h10V7H7zm-3 2v9h4v-6h8v6h4v-9zm10 9v-4h-4v4z"></svg:path>`,
})
export class TdesignBuilding3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding3FilledIcon],svg[tdesign-building-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8v3H5v4h14V5h-3zM2 11h20v11h-6v-6H8v6H2z"></svg:path><svg:path fill="currentColor" d="M10 22v-4h4v4z"></svg:path>`,
})
export class TdesignBuilding3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding4Icon],svg[tdesign-building-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h12v2h-1v4h2v14H2V8h8V4H9zm3 2v4h6V4zm8 6H4v10h4v-6h8v6h4zm-6 10v-4h-4v4zM13 4.998h2.004v2.004H13z"></svg:path>`,
})
export class TdesignBuilding4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding4FilledIcon],svg[tdesign-building-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h20v12h-6v-6H8v6H2z"></svg:path><svg:path fill="currentColor" d="M10 22v-4h4v4zM21 2H9v2h1v4h10V4h1zm-5.996 2.998v2.004H13V4.998z"></svg:path>`,
})
export class TdesignBuilding4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding5Icon],svg[tdesign-building-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998.811l8.384 5.388L19.3 7.882l-.3-.193v3.417l3.375 2.062l-1.043 1.707l-.332-.203V22H3v-7.328l-.332.203l-1.043-1.707L5 11.106V7.689l-.3.193L3.617 6.2zM7 6.403v3.48l5-3.055l5 3.055v-3.48L11.998 3.19zM5 13.45V20h6v-4h2v4h6v-6.55l-7-4.278z"></svg:path>`,
})
export class TdesignBuilding5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding5FilledIcon],svg[tdesign-building-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.382 6.2L11.998.81L3.618 6.2l1.081 1.682l.3-.193v3.417l-3.374 2.062l1.043 1.707l.332-.203V22h8v-6h2v6h8v-7.328l.332.203l1.043-1.707L19 11.106V7.689l.3.193zM7 9.882v-3.48l4.998-3.214L17 6.403v3.48l-5-3.055z"></svg:path>`,
})
export class TdesignBuilding5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBuildingFilledIcon],svg[tdesign-building-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v3h3v4H4V5h3zm15 11v-2H2v2h1v7H2v2h6v-6h8v6h6v-2h-1v-7z"></svg:path><svg:path fill="currentColor" d="M14 22h-4v-4h4z"></svg:path>`,
})
export class TdesignBuildingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignBulletpointIcon],svg[tdesign-bulletpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.004H2V4h2.004v2.004zm0 7H2V11h2.004v2.004zm-1 7h2.004V18H2zM8 4H7v2h15V4zm-1 7h15v2H7zm1 7H7v2h15v-2z"></svg:path>`,
})
export class TdesignBulletpointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignButtonIcon],svg[tdesign-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v10h16V7zm2 2h12v6H6zm2 2v2h8v-2z"></svg:path>`,
})
export class TdesignButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignButtonFilledIcon],svg[tdesign-button-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v10h16V7zm2 2h12v6H6z"></svg:path>`,
})
export class TdesignButtonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCabbageIcon],svg[tdesign-cabbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.116 3.468a4 4 0 0 0-1.363-1.28c-1.508-.865-3.451-.713-5.244.291C3.18 4.344 1 7.85 1 12c0 5.54 4.01 10.013 9.247 10.86q.858.139 1.753.14a10.96 10.96 0 0 0 11-11.085c-.023-1.932-.798-4.303-2.023-6.198c-1.22-1.888-3.096-3.608-5.427-3.586c-1.138.002-1.915.628-2.434 1.338m6.655 4.145a4.8 4.8 0 0 0-1.263-.033l-1.16-1.95L15.63 6.65l.892 1.5a7 7 0 0 0-1.065.625l-.018-.058c-.267-.81-.783-1.475-1.471-2.136l.004-.02c.069-.323.179-.74.344-1.145c.373-.916.806-1.287 1.24-1.287h.011c1.291-.014 2.636.977 3.731 2.672q.255.394.474.81M13.61 10.61c-.33.008-.669.045-1 .117l-.032-.052a3.8 3.8 0 0 0-1.03-1.093c-.79-.555-1.872-.83-3.042-.393a14 14 0 0 0-.324-.181l3.233-3.169l-1.4-1.428L6.18 8.17c-.81-.235-1.567-.319-2.247-.225a8.7 8.7 0 0 1 3.555-3.722c1.364-.764 2.537-.722 3.271-.301c.7.401 1.281 1.311 1.135 2.937l-.045.503l.378.335c.822.727 1.164 1.197 1.312 1.646c.104.315.138.696.071 1.267m-2.81 1.005c-.854.715-1.427 1.718-1.76 2.802l-2.974-3.265L4.587 12.5l4.088 4.488c-.005 1.192.148 2.412.37 3.515A8.95 8.95 0 0 1 3 12c0-1.04.289-1.607.629-1.855c.321-.236 1.026-.429 2.47.104c.522.193 1.126.489 1.817.919l.502.312l.516-.29c.623-.35 1.099-.226 1.464.03c.16.112.297.252.402.395m1.765 9.367l7.292-8.037l-1.481-1.344l-2.932 3.231l.007-1.014l-2-.014l-.023 3.25l-2.483 2.737c-.187-1.021-.3-2.118-.264-3.147c.064-1.755.765-3.197 1.802-3.768c.43-.237 1.189-.33 1.789-.224l.89.155l.245-.869c.128-.453.467-.938.997-1.37a4.8 4.8 0 0 1 1.834-.916c.801-.196 1.484-.094 1.934.216c.393.27.788.822.825 1.954v.018L21 12a8.96 8.96 0 0 1-8.435 8.982"></svg:path>`,
})
export class TdesignCabbageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCabbageFilledIcon],svg[tdesign-cabbage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.09 4.094l-.171 2.456a5.82 5.82 0 0 1 1.626 3.163a6.8 6.8 0 0 1 2.297-1.022l-1.213-2.04l1.72-1.022l1.787 3.006c.795.114 1.622.365 2.357.8q.083.048.162.1a13.4 13.4 0 0 0-1.678-3.82c-.88-1.36-2.1-2.634-3.585-3.23c-1.595-.64-3.19-.04-3.298 1.558zm-2.007.027l-.226 3.25l.369.327c1.165 1.03 1.556 2.294 1.377 3.913a5.4 5.4 0 0 0-.995.117l-.031-.052a3.8 3.8 0 0 0-1.03-1.093c-.79-.555-1.873-.83-3.042-.393a11.4 11.4 0 0 0-1.715-.817l-.238-.084l2.854-3.533L7.85 4.5L4.288 8.91a6.55 6.55 0 0 0-2.645.51q-.2.086-.392.188A10.7 10.7 0 0 1 6.509 2.48c1.046-.585 2.143-.881 3.175-.854c1.75.045 2.498.91 2.402 2.375zM1.024 12.74c.318 4.865 3.746 8.785 8.29 9.926a20 20 0 0 1-.59-3.414l-5.138-5.194l1.421-1.407l3.785 3.825c.243-1.472.88-2.918 2.008-3.86a1.8 1.8 0 0 0-.403-.396c-.365-.256-.84-.38-1.463-.03l-.516.29l-.502-.312c-.691-.43-1.295-.726-1.818-.919c-1.349-.498-2.694-.411-3.664.007c-.853.367-1.305.922-1.41 1.485m12.403 6.313l-2.315 2.552c-.282-1.234-.478-2.653-.43-3.962c.062-1.754.763-3.197 1.8-3.768c.43-.237 1.19-.33 1.79-.224l.889.155l.245-.868c.128-.453.468-.94.998-1.371a4.8 4.8 0 0 1 1.834-.915c.765-.188 2.189-.117 3.238.504c.498.294.884.695 1.103 1.23c.22.539.31 1.306.052 2.399l.017.004a10.96 10.96 0 0 1-10.087 8.196l7.295-8.04l-1.481-1.344l-2.932 3.23l.007-1.014l-2-.014z"></svg:path>`,
})
export class TdesignCabbageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCakeIcon],svg[tdesign-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.998 1.998h2.004v2.004H6.998zm4 0h2.004v2.004h-2.004zm4 0h2.004v2.004h-2.004zM9 5v5h2V5h2v5h2V5h2v5h4v10h2v2H1v-2h2V10h4V5zm-4 7v3h1.162L9 15.946l3-1l3 1L17.838 15H19v-3zm14 5h-.838L15 18.054l-3-1l-3 1L5.838 17H5v3h14z"></svg:path>`,
})
export class TdesignCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCakeFilledIcon],svg[tdesign-cake-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.002 1.998H6.998v2.004h2.004zm4 0h-2.004v2.004h2.004zm4 0h-2.004v2.004h2.004zM9 10V5H7v5H3v5h3.162L9 15.946l3-1l3 1L17.838 15H21v-5h-4V5h-2v5h-2V5h-2v5zm12 7h-2.838L15 18.054l-3-1l-3 1L5.838 17H3v3H1v2h22v-2h-2z"></svg:path>`,
})
export class TdesignCakeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculationIcon],svg[tdesign-calculation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2v3.5H11v2H7.5V11h-2V7.5H2v-2h3.5V2zM13 5.5h9v2h-9zm-2.224 9.511L7.948 17.84l2.989 2.988l-1.415 1.415l-2.989-2.99l-2.828 2.83l-1.414-1.415l2.828-2.828l-2.668-2.668l1.415-1.415l2.667 2.668l2.829-2.828zm5.724-1.013h2.004v2.004H16.5zM13 17h9v2h-9zm3.5 2.998h2.004v2.004H16.5z"></svg:path>`,
})
export class TdesignCalculationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculation1Icon],svg[tdesign-calculation-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v22H1zm2 2v18h18V3zm6 2v2h2v2H9v2H7V9H5V7h2V5zm4 2h6v2h-6zm-6.414 6.172L8 14.586l1.414-1.414l1.414 1.414L9.414 16l1.415 1.414l-1.415 1.415L8 17.414L6.586 18.83L5.17 17.414L6.586 16l-1.414-1.414zM13 13.5h6v2h-6zm0 3h6v2h-6z"></svg:path>`,
})
export class TdesignCalculation1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculation1FilledIcon],svg[tdesign-calculation-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1v22H1V1zM9 7V5H7v2H5v2h2v2h2V9h2V7zm10 0h-6v2h6zM8 14.586l-1.414-1.414l-1.414 1.414L6.586 16L5.17 17.414l1.415 1.415L8 17.414l1.414 1.415l1.415-1.415L9.414 16l1.414-1.414l-1.414-1.414zM19 13.5h-6v2h6zm0 3h-6v2h6z"></svg:path>`,
})
export class TdesignCalculation1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculatorIcon],svg[tdesign-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v4h14V3zm14 6H5v12h14zM7 12h4v2H7zm6 0h4v2h-4zm-6 4h4v2H7zm6 0h4v2h-4z"></svg:path>`,
})
export class TdesignCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculator1Icon],svg[tdesign-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v20H4zm2 2v4h12V4zm12 6h-3v2h3zm0 4h-3v2h3zm0 4h-3v2h3zm-5 2v-2h-2v2zm-4 0v-2H6v2zm-3-4h3v-2H6zm0-4h3v-2H6zm5-2v2h2v-2zm2 4h-2v2h2z"></svg:path>`,
})
export class TdesignCalculator1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculatorFilledIcon],svg[tdesign-calculator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v6H3zm0 7.996h18V23H3zm8 6.002v-2H7v2zm6 0v-2h-4v2zm-6 2H7v2h4zm6 2v-2h-4v2z"></svg:path>`,
})
export class TdesignCalculatorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarIcon],svg[tdesign-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4V1.5h2V4h8V1.5h2V4h4v18H2V4zM4 6v3h16V6zm16 5H4v9h16z"></svg:path>`,
})
export class TdesignCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar1Icon],svg[tdesign-calendar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v3h8V1h2v3h4v18H2V4h4V1zM4 6v3h16V6zm16 5H4v9h16zM7 13h2.004v2.004H7zm4 0h2.004v2.004H11zm4 0h2.004v2.004H15zm-8 3h2.004v2.004H7zm4 0h2.004v2.004H11zm4 0h2.004v2.004H15z"></svg:path>`,
})
export class TdesignCalendar1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar1FilledIcon],svg[tdesign-calendar-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h8V1h2v3h4v5H2V4h4V1h2zm14 7v11H2V11zM9.004 13.497H7v2.004h2.004zm4 0H11v2.004h2.004zm4 0H15v2.004h2.004zm-8 4H7v2.004h2.004zm4 0H11v2.004h2.004zm4 0H15v2.004h2.004z"></svg:path>`,
})
export class TdesignCalendar1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar2Icon],svg[tdesign-calendar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v3h8V1h2v3h4v18H2V4h4V1zM4 6v3h16V6zm16 5H4v9h16z"></svg:path><svg:path fill="currentColor" d="m16.914 13.25l-5.657 5.657l-3.535-3.536l1.414-1.414l2.121 2.121l4.243-4.242z"></svg:path>`,
})
export class TdesignCalendar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendar2FilledIcon],svg[tdesign-calendar-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h8V1h2v3h4v5H2V4h4V1h2zm14 7.004V22H2V11.004zm-10.743 8.903l5.657-5.657l-1.414-1.414l-4.243 4.242l-2.121-2.121l-1.414 1.414z"></svg:path>`,
})
export class TdesignCalendar2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEditIcon],svg[tdesign-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v3h8V1h2v3h4v2.001h.001l-.001 6L20 12v-1H4v9h8v2H2V4h4V1zM4 9h16V6H4zm15.287 4.086l4.127 4.127l-5.286 5.287H14v-4.128zm-.672 3.5l1.299 1.3l.672-.673l-1.3-1.299zm-.115 2.713L17.2 18L16 19.2v1.3h1.3z"></svg:path>`,
})
export class TdesignCalendarEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEditFilledIcon],svg[tdesign-calendar-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8V1H6v3H2v5h20V4h-4V1h-2zm6 9v-2H2v11h10v-1a8 8 0 0 1 8-8z"></svg:path><svg:path fill="currentColor" d="m23.414 18.213l-4.127-4.127L14 19.372l.001 4.128h4.127zM17.201 19l1.299 1.3l-1.2 1.2H16v-1.3z"></svg:path>`,
})
export class TdesignCalendarEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEventIcon],svg[tdesign-calendar-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v3h8V1h2v3h4v18H2V4h4V1zM4 6v3h16V6zm16 5H4v9h16zm-7.5 1.5h6v6h-6zm2 2v2h2v-2z"></svg:path>`,
})
export class TdesignCalendarEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEventFilledIcon],svg[tdesign-calendar-event-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h8V1h2v3h4v5H2V4h4V1h2zm14 7v11H2V11zm-3.5 3.5h-4v4h4z"></svg:path>`,
})
export class TdesignCalendarEventFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarFilledIcon],svg[tdesign-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.5V4H2v5h20V4h-4V1.5h-2V4H8V1.5zM22 22V11H2v11z"></svg:path>`,
})
export class TdesignCalendarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallIcon],svg[tdesign-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4z"></svg:path>`,
})
export class TdesignCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCall1Icon],svg[tdesign-call-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.052 1.787l.966.261a7 7 0 0 1 4.93 4.934l.26.965l-1.93.521l-.261-.965a5 5 0 0 0-3.522-3.524l-.965-.262zM1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4zm12.111 1.165l.966.261a3.5 3.5 0 0 1 2.465 2.467l.26.965l-1.93.521l-.261-.965a1.5 1.5 0 0 0-1.057-1.057l-.965-.261z"></svg:path>`,
})
export class TdesignCall1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCall1FilledIcon],svg[tdesign-call-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.018 2.048l-.965-.261l-.523 1.93l.966.262a5 5 0 0 1 3.521 3.524l.26.965l1.931-.521l-.26-.965a7 7 0 0 0-4.93-4.934m-.914 3.378l-.965-.261l-.523 1.93l.966.262a1.5 1.5 0 0 1 1.056 1.057l.26.965l1.931-.52l-.26-.966a3.5 3.5 0 0 0-2.465-2.467"></svg:path><svg:path fill="currentColor" d="M9.58 2H1v1a19.9 19.9 0 0 0 3.196 10.85a20.1 20.1 0 0 0 5.954 5.954A19.9 19.9 0 0 0 21 23h1v-8.58l-6.69-1.487l-1.86 1.86a14.1 14.1 0 0 1-4.242-4.243l1.859-1.86z"></svg:path>`,
})
export class TdesignCall1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallCancelIcon],svg[tdesign-call-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.38 1.966l2.12 2.121l2.121-2.121l1.415 1.414l-2.122 2.121l2.122 2.122l-1.415 1.414l-2.12-2.121l-2.122 2.12l-1.414-1.413L17.087 5.5l-2.121-2.12zM1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4z"></svg:path>`,
})
export class TdesignCallCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallCancelFilledIcon],svg[tdesign-call-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.501 4.087L16.38 1.966L14.966 3.38l2.121 2.121l-2.121 2.122l1.414 1.414l2.121-2.121l2.122 2.12l1.414-1.413L19.916 5.5l2.12-2.121l-1.413-1.414z"></svg:path><svg:path fill="currentColor" d="M9.58 2H1v1a19.9 19.9 0 0 0 3.196 10.85a20.1 20.1 0 0 0 5.954 5.954A19.9 19.9 0 0 0 21 23h1v-8.58l-6.69-1.487l-1.86 1.86a14.1 14.1 0 0 1-4.242-4.243l1.859-1.86z"></svg:path>`,
})
export class TdesignCallCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallFilledIcon],svg[tdesign-call-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3z"></svg:path>`,
})
export class TdesignCallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallForwardedIcon],svg[tdesign-call-forwarded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4zm13.159-1.716l5.418.116l.117 5.419l-2 .043l-.045-2.119l-3.293 3.293l-1.415-1.414l3.294-3.293l-2.12-.046z"></svg:path>`,
})
export class TdesignCallForwardedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallForwardedFilledIcon],svg[tdesign-call-forwarded-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.58 2H1v1a19.9 19.9 0 0 0 3.196 10.85a20.1 20.1 0 0 0 5.954 5.954A19.9 19.9 0 0 0 21 23h1v-8.58l-6.69-1.487l-1.86 1.86a14.1 14.1 0 0 1-4.242-4.243l1.859-1.86z"></svg:path><svg:path fill="currentColor" d="m21.605 2.4l-5.419-.116l-.043 2l2.119.045l-3.293 3.293l1.414 1.414l3.293-3.293l.046 2.119l2-.043z"></svg:path>`,
})
export class TdesignCallForwardedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallIncomingIcon],svg[tdesign-call-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.032 3.378L18.738 6.67l2.12.046l-.044 2l-5.418-.117l-.117-5.419l2-.043l.045 2.119l3.293-3.293zM1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.974v-4.948l-4.053-.901l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4z"></svg:path>`,
})
export class TdesignCallIncomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallIncomingFilledIcon],svg[tdesign-call-incoming-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.739 6.671l3.293-3.293l-1.414-1.414l-3.294 3.293l-.045-2.119l-2 .043l.117 5.419l5.418.116l.043-2z"></svg:path><svg:path fill="currentColor" d="M9.58 2H1v1a19.9 19.9 0 0 0 3.196 10.85a20.1 20.1 0 0 0 5.954 5.954A19.9 19.9 0 0 0 21 23h1v-8.58l-6.69-1.487l-1.86 1.86a14.1 14.1 0 0 1-4.242-4.243l1.859-1.86z"></svg:path>`,
})
export class TdesignCallIncomingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallOffIcon],svg[tdesign-call-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.414 3L11.833 13.58q.764.662 1.617 1.211l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.197a20 20 0 0 1-2.567-1.971L3 22.414L1.586 21L21 1.586zM9 16.415a18 18 0 0 0 2.237 1.71A17.9 17.9 0 0 0 20 20.972v-4.949l-4.053-.9l-2.174 2.175l-.663-.377A16 16 0 0 1 10.415 15zM1 2h8.58l1.487 6.69l-1.865 1.866l.297.504l-1.723 1.015l-1.084-1.839l2.184-2.183L7.976 4H3.027a17.9 17.9 0 0 0 3.097 9.138l.564.825l-1.652 1.128l-.564-.825A19.9 19.9 0 0 1 1 3z"></svg:path>`,
})
export class TdesignCallOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCallOffFilledIcon],svg[tdesign-call-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.213 10.557l-.005-.007l1.859-1.86L9.58 2H1v1a19.9 19.9 0 0 0 3.901 11.87zM1.594 21.005l19.41-19.41L21 1.59l.004-.004L22.418 3L11.835 13.583q.763.661 1.615 1.21l1.86-1.86L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20 20 0 0 1-2.565-1.97l-4.58 4.58z"></svg:path>`,
})
export class TdesignCallOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalmIcon],svg[tdesign-calm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-6.5 6H16v2h-5.5z"></svg:path>`,
})
export class TdesignCalmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalm1Icon],svg[tdesign-calm-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H9v2H7v-2H6zm8 0h4v2h-1v2h-2v-2h-1zm-3 5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignCalm1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalm1FilledIcon],svg[tdesign-calm-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h1v2h2v-2h1zm8 0h-4v2h1v2h2v-2h1zm-4.996 5H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCalm1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCalmFilledIcon],svg[tdesign-calm-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-1 2h-5.5v2H16z"></svg:path>`,
})
export class TdesignCalmFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraIcon],svg[tdesign-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.882 2h8.236l1.5 3H23v16H1V5h5.382zm1.236 2l-1.5 3H3v12h18V7h-4.618l-1.5-3zM12 9.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera1Icon],svg[tdesign-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-9 7a9 9 0 1 1 13.148 7.989L16.805 21H19v2H5v-2h2.195l.657-3.011A9 9 0 0 1 3 10m6.74 8.714L9.243 21h5.516l-.499-2.286A9 9 0 0 1 12 19c-.78 0-1.537-.1-2.26-.286M12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class TdesignCamera1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera1FilledIcon],svg[tdesign-camera-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill="currentColor" d="M3 10c0 3.476 1.97 6.49 4.852 7.989L7.195 21H5v2h14v-2h-2.195l-.657-3.011A9 9 0 1 0 3 10m6.74 8.714a9.06 9.06 0 0 0 4.52 0L14.757 21H9.242zM7.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class TdesignCamera1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera2Icon],svg[tdesign-camera-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-9 7a9 9 0 1 1 10 8.945v1.506a9.94 9.94 0 0 0 4.75-1.769l.818-.575l1.151 1.635l-.817.576A11.95 11.95 0 0 1 12 23a11.95 11.95 0 0 1-6.902-2.182l-.818-.576l1.152-1.635l.818.575A9.94 9.94 0 0 0 11 20.951v-1.506A9 9 0 0 1 3 10.5m9-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class TdesignCamera2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCamera2FilledIcon],svg[tdesign-camera-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.5a9 9 0 1 1 10 8.945v1.506a9.94 9.94 0 0 0 4.75-1.769l.818-.575l1.151 1.635l-.817.576A11.95 11.95 0 0 1 12 23a11.95 11.95 0 0 1-6.902-2.182l-.818-.576l1.152-1.635l.818.575A9.94 9.94 0 0 0 11 20.951v-1.506A9 9 0 0 1 3 10.5m4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m2 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path>`,
})
export class TdesignCamera2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraFilledIcon],svg[tdesign-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 12.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path fill="currentColor" d="M7.882 2h8.236l1.5 3H23v16H1V5h5.382zM6.75 12.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 0 0-10.5 0"></svg:path>`,
})
export class TdesignCameraFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraOffIcon],svg[tdesign-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 .586L22.414 21L21 22.414L19.586 21H1V5h2.586l-3-3zM5.586 7H3v12h14.586l-2.537-2.537a5 5 0 0 1-7.012-7.012zm3.885 3.885a3 3 0 0 0 4.144 4.144zM7.882 2h8.236l1.5 3H23v14h-2V7h-4.618l-1.5-3H9.118l-.64 1.279l-1.788-.894z"></svg:path>`,
})
export class TdesignCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraOffFilledIcon],svg[tdesign-camera-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l3 3H1v16h18.586L22 23.414l1.41-1.41L2 .595zM6.75 12.75c0-1.28.459-2.454 1.22-3.365l1.424 1.423a3.25 3.25 0 0 0 4.548 4.548l1.423 1.424a5.25 5.25 0 0 1-8.615-4.03M23 18.766V5h-5.382l-1.5-3H7.882l-.55 1.099l4.408 4.407a5.25 5.25 0 0 1 5.503 5.503z"></svg:path>`,
})
export class TdesignCameraOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCandyIcon],svg[tdesign-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.31 3.536c.154-1.69 2.208-2.433 3.407-1.234l3.98 3.981c1.2 1.199.456 3.253-1.233 3.406l-1.314.12a3 3 0 0 1-.357 3.812l-5.172 5.172a3 3 0 0 1-3.812.357l-.12 1.314c-.153 1.689-2.207 2.432-3.406 1.233l-3.98-3.98c-1.2-1.2-.456-3.253 1.233-3.406l1.314-.12a3 3 0 0 1 .357-3.812l5.172-5.172a3 3 0 0 1 3.812-.357zm2.058 3.418l.001.001l.676.675l.001.002a1 1 0 0 0 .796.287l2.441-.222l-3.98-3.98l-.223 2.44a1 1 0 0 0 .288.797m-1.415 1.413l-1.746-1.746a1 1 0 0 0-1.414 0L9.914 8.5l5.586 5.586l1.878-1.88a1 1 0 0 0 0-1.413l-1.745-1.746l-.003-.002l-.675-.676zm-.867 7.133L8.5 9.914l-1.88 1.879a1 1 0 0 0 0 1.414l4.172 4.171a1 1 0 0 0 1.414 0zm-7.462.538l-2.907.264l3.98 3.981l.265-2.907z"></svg:path>`,
})
export class TdesignCandyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCandyFilledIcon],svg[tdesign-candy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.716 2.308a1 1 0 0 0-1.703.617l-.306 3.364l-1.082-1.082a3 3 0 0 0-4.243 0l-1.88 1.88l8.415 8.413l1.88-1.879a3 3 0 0 0 0-4.242l-1.082-1.081l3.365-.306a1 1 0 0 0 .616-1.703zm-15.41 15.41a1 1 0 0 1 .617-1.703l3.373-.307l2 2l-.306 3.374a1 1 0 0 1-1.703.616zm13.197-.803l-1.878 1.878a3 3 0 0 1-4.243 0L5.21 14.62a3 3 0 0 1 0-4.242L7.09 8.5z"></svg:path>`,
})
export class TdesignCandyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCardIcon],svg[tdesign-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v2h4v14h-4v2H6v-2H2V5h4zm0 4H4v10h2zm2 12h8V5H8zM18 7v10h2V7z"></svg:path>`,
})
export class TdesignCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCardFilledIcon],svg[tdesign-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v2h4v14h-4v2H6v-2H2V5h4zm0 4H4v10h2zm12 0v10h2V7z"></svg:path>`,
})
export class TdesignCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCardmembershipIcon],svg[tdesign-cardmembership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v18H1V3zm-2 2H3v4h18zm0 6h-2v6.766l-3.5-2.1l-3.5 2.1V11H3v8h18zm-4 0h-3v3.234l1.5-.9l1.5.9z"></svg:path>`,
})
export class TdesignCardmembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCardmembershipFilledIcon],svg[tdesign-cardmembership-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V3H1v6zm0 2v10H1V11h12v5.497l2.5-2.163l2.5 2.163V11z"></svg:path>`,
})
export class TdesignCardmembershipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretDownIcon],svg[tdesign-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.914L21.414 8.5H2.586zM7.414 10.5h9.172L12 15.086z"></svg:path>`,
})
export class TdesignCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretDownSmallIcon],svg[tdesign-caret-down-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15l5.5-5.5h-11z"></svg:path>`,
})
export class TdesignCaretDownSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretLeftIcon],svg[tdesign-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2.586v18.828L6.086 12zM8.914 12l4.586 4.586V7.414z"></svg:path>`,
})
export class TdesignCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretLeftSmallIcon],svg[tdesign-caret-left-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 6.5v11L9 12z"></svg:path>`,
})
export class TdesignCaretLeftSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretRightIcon],svg[tdesign-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 21.414L17.914 12L8.5 2.586zm2-4.828V7.414L15.086 12z"></svg:path>`,
})
export class TdesignCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretRightSmallIcon],svg[tdesign-caret-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12L9.5 6.5v11z"></svg:path>`,
})
export class TdesignCaretRightSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretUpIcon],svg[tdesign-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.086l9.414 9.414H2.586zM7.414 13.5h9.172L12 8.914z"></svg:path>`,
})
export class TdesignCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretUpSmallIcon],svg[tdesign-caret-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9l5.5 5.5h-11z"></svg:path>`,
})
export class TdesignCaretUpSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCartIcon],svg[tdesign-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCartAddIcon],svg[tdesign-cart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h4.764l3 11h10.515l3.089-9.265l1.897.633L19.72 14H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm14 1v3h3v2h-3v3h-2V7H9V5h3V2zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignCartAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCartAddFilledIcon],svg[tdesign-cart-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.764 1H0v2h3.236l2.73 10.011L4.72 18H22v-2H7.28l.5-2h11.94l3.667-11H5.31zM17 9.5h-2.5V12h-2V9.5H10v-2h2.5V5h2v2.5H17zM6 19a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignCartAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCartFilledIcon],svg[tdesign-cart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignCartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastIcon],svg[tdesign-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H13v-2h8V5H3v4H1zm0 8h1a9 9 0 0 1 9 9v1H9v-1a7 7 0 0 0-7-7H1zm0 4h1a5 5 0 0 1 5 5v1H5v-1a3 3 0 0 0-3-3H1zm0 4h2.004v2.004H1z"></svg:path>`,
})
export class TdesignCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastFilledIcon],svg[tdesign-cast-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H13v-.996c0-6.075-4.925-11-11-11h-.996L1 9z"></svg:path><svg:path fill="currentColor" d="M1 11h1a9 9 0 0 1 9 9v1H9v-1a7 7 0 0 0-7-7H1z"></svg:path><svg:path fill="currentColor" d="M1 15h1a5 5 0 0 1 5 5v1H5v-1a3 3 0 0 0-3-3H1z"></svg:path><svg:path fill="currentColor" d="M3.004 19H1v2.004h2.004z"></svg:path>`,
})
export class TdesignCastFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastleIcon],svg[tdesign-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h2V2h2v2h2V2h2v2h2V2h2v12h2v-1h2v9H1v-9h2v1h2V2zM5 16H3v4h2zm2 4h2v-7h6v7h2V6H7zm12 0h2v-4h-2zm-6 0v-5h-2v5z"></svg:path>`,
})
export class TdesignCastleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle1Icon],svg[tdesign-castle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h2V2h2v2h2V2h2v2h2V2h2v4h-1v8h3v-1h2v9H1v-9h2v1h3V6H5V2zm1 4v14h3v-7h2v7h3V6zm10 14h3v-4h-3zM6 20v-4H3v4zM9 7.998h2.004v2.004H9zm4 0h2.004v2.004H13z"></svg:path>`,
})
export class TdesignCastle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle1FilledIcon],svg[tdesign-castle-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V2H5v4h1v8H3v-1H1v9h10v-9h2v9h10v-9h-2v1h-3V6h1V2h-2v2h-2V2h-2v2h-2V2H9v2zm4.004 3.998v2.004H9V7.998zm4 0v2.004H13V7.998z"></svg:path>`,
})
export class TdesignCastle1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle2Icon],svg[tdesign-castle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v1.083A6 6 0 0 0 6 9a5 5 0 0 0-5 5v8h22v-8a5 5 0 0 0-5-5a6 6 0 0 0-5-5.917V2zm7 9a3 3 0 0 1 3 3v6h-3zm-2 9h-3v-5h-2v5H8V10h8zM6 20H3v-6a3 3 0 0 1 3-3zM8.126 8a4.002 4.002 0 0 1 7.748 0z"></svg:path>`,
})
export class TdesignCastle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle2FilledIcon],svg[tdesign-castle-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.083V2h2v1.083c2.838.476 5 2.944 5 5.917a5 5 0 0 1 5 5v8H13v-7h-2v7H1v-8a5 5 0 0 1 5-5a6 6 0 0 1 5-5.917M21 14a3 3 0 0 0-3-3v9h3zM3 20h3v-9a3 3 0 0 0-3 3z"></svg:path>`,
})
export class TdesignCastle2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle3Icon],svg[tdesign-castle-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v1h-4V2h-2v8h-4V2H8v1H4V2H2v20h20V2zM4 5h4v5H6v10H4zm4 15v-8h8v8h-3v-5h-2v5zm10 0V10h-2V5h4v15z"></svg:path>`,
})
export class TdesignCastle3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle3FilledIcon],svg[tdesign-castle-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3V2h2v20h-9v-7h-2v7H2V2h2v1h4V2h2v8h4V2h2v1zM8 5H4v15h2V10h2zm8 5h2v10h2V5h-4z"></svg:path>`,
})
export class TdesignCastle3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle4Icon],svg[tdesign-castle-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-8v6.342a6 6 0 0 0-1-.259V7h-2v1.083a6 6 0 0 0-1 .259V2H2v20h20zM8 9.528A6 6 0 0 0 6 14v6H4V4h4zM8 20v-5h8v5h-3v-3h-2v3zm10 0v-6a6 6 0 0 0-2-4.472V4h4v16zm-2.126-7H8.126a4.003 4.003 0 0 1 7.748 0"></svg:path>`,
})
export class TdesignCastle4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle4FilledIcon],svg[tdesign-castle-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h8v20h-9v-5h-2v5H2V2h8v6.342q.483-.172 1-.259V7h2v1.083q.517.088 1 .259zM6 14c0-1.778.774-3.374 2-4.472V4H4v16h2zm10-4.472A6 6 0 0 1 18 14v6h2V4h-4zM8.126 13h7.748a4.004 4.004 0 0 0-6.273-2.2A4 4 0 0 0 8.126 13"></svg:path>`,
})
export class TdesignCastle4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle5Icon],svg[tdesign-castle-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v1h-4V2h-2v7.131l-2-1.333l-2 1.333V2H8v1H4V2H2v20h20V2zM4 5h4v5H6v10H4zm4 15v-8h1.303L12 10.202L14.697 12H16v8h-3v-5h-2v5zm10 0V10h-2V5h4v15z"></svg:path>`,
})
export class TdesignCastle5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle5FilledIcon],svg[tdesign-castle-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3V2h2v20h-9v-7h-2v7H2V2h2v1h4V2h2v7.131l2-1.333l2 1.333V2h2v1zM8 5H4v15h2V10h2zm8 5h2v10h2V5h-4z"></svg:path>`,
})
export class TdesignCastle5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle6Icon],svg[tdesign-castle-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4h5v14H2V8h5V4H6zm3 2v4h2V6h2v2h2V4zm-5 8.535A4 4 0 0 1 6 12a4 4 0 0 1 3 1.354A4 4 0 0 1 12 12a4 4 0 0 1 3 1.354A4 4 0 0 1 18 12c.729 0 1.412.195 2 .535V10H4zM8 16a2 2 0 1 0-4 0v4h4zm2 4h4v-4a2 2 0 1 0-4 0zm6 0h4v-4a2 2 0 1 0-4 0z"></svg:path>`,
})
export class TdesignCastle6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle6FilledIcon],svg[tdesign-castle-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4h5v4.836A4.64 4.64 0 0 0 19.333 12a4.66 4.66 0 0 0-3.666 1.78A4.66 4.66 0 0 0 12 12a4.66 4.66 0 0 0-3.667 1.78A4.66 4.66 0 0 0 4.667 12c-.992 0-1.911.31-2.667.836V8h5V4H6zm5.02 6h2.002V6.004H11.02zm8.313 6A2.667 2.667 0 0 1 22 16.667V22h-5.333v-5.333A2.667 2.667 0 0 1 19.333 14m-4.666 2.667V22H9.333v-5.333a2.667 2.667 0 1 1 5.334 0m-7.334 0V22H2v-5.333a2.667 2.667 0 1 1 5.333 0"></svg:path>`,
})
export class TdesignCastle6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle7Icon],svg[tdesign-castle-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1.083c2.838.476 5 2.944 5 5.917h4v14H2V8h4a6 6 0 0 1 5-5.917V1zM8 8h8a4 4 0 0 0-8 0m-4 4.535A4 4 0 0 1 6 12a4 4 0 0 1 3 1.354A4 4 0 0 1 12 12a4 4 0 0 1 3 1.354A4 4 0 0 1 18 12c.729 0 1.412.195 2 .535V10H4zM8 16a2 2 0 1 0-4 0v4h4zm2 4h4v-4a2 2 0 1 0-4 0zm6 0h4v-4a2 2 0 1 0-4 0z"></svg:path>`,
})
export class TdesignCastle7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle7FilledIcon],svg[tdesign-castle-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1.083c2.838.476 5 2.944 5 5.917H6a6 6 0 0 1 5-5.917V1zm9 7H2v4.836A4.64 4.64 0 0 1 4.667 12c1.487 0 2.812.696 3.666 1.78A4.66 4.66 0 0 1 12 12a4.66 4.66 0 0 1 3.667 1.78A4.66 4.66 0 0 1 19.333 12c.992 0 1.911.31 2.667.836zm0 8.663a2.667 2.667 0 0 0-5.333.004V22H22zM14.667 22v-5.333a2.667 2.667 0 1 0-5.334 0V22zm-7.334 0v-5.333a2.667 2.667 0 1 0-5.333 0V22z"></svg:path>`,
})
export class TdesignCastle7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCastleFilledIcon],svg[tdesign-castle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h2V2h2v2h2V2h2v2h2V2h2v12h2v-1h2v9h-7.5v-8h-7v8H1v-9h2v1h2V2z"></svg:path><svg:path fill="currentColor" d="M13.5 22v-6h-3v6z"></svg:path>`,
})
export class TdesignCastleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCatIcon],svg[tdesign-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 .661L7.48 2.58c1.38-.605 2.911-.941 4.52-.941s3.14.336 4.52.94L23 .662v12.053h-.007C22.778 18.458 17.91 23 12 23S1.222 18.458 1.007 12.714H1zm2 5.516a11 11 0 0 1 2.137-2.205L3 3.339zm0 6.143C3 17.083 6.999 21 12 21s9-3.917 9-8.68c0-3.39-2.017-6.344-4.99-7.774A9.2 9.2 0 0 0 12 3.64a9.2 9.2 0 0 0-4.01.907C5.016 5.976 3 8.93 3 12.32m18-6.143V3.34l-2.137.633A11 11 0 0 1 21 6.177M9 9v3H7V9zm8 0v3h-2V9zm-5 3.264l.894 1.789c.379.757.857.985 1.189 1.013c.34.028.759-.131 1.085-.62l.555-.833l1.664 1.11l-.555.832c-.674 1.01-1.755 1.6-2.915 1.504c-.713-.06-1.371-.37-1.917-.885c-.546.515-1.204.826-1.917.885c-1.16.097-2.241-.493-2.915-1.504l-.555-.832l1.664-1.11l.555.832c.326.49.745.65 1.085.621c.332-.028.81-.256 1.189-1.013z"></svg:path>`,
})
export class TdesignCatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCatFilledIcon],svg[tdesign-cat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.48 2.58L1 .66v12.053h.007C1.222 18.458 6.091 23 12 23s10.778-4.542 10.993-10.286H23V.661L16.52 2.58A11.2 11.2 0 0 0 12 1.639c-1.609 0-3.14.336-4.52.94M5.137 3.972A11 11 0 0 0 3 6.177V3.34zM21 3.339v2.838a11 11 0 0 0-2.137-2.205zM9 12H7V9h2zm8 0h-2V9h2zm-4.105 2.053c.378.757.856.985 1.188 1.013c.34.028.759-.131 1.085-.62l.555-.833l1.664 1.11l-.555.832c-.674 1.01-1.755 1.6-2.915 1.504c-.713-.06-1.37-.37-1.917-.885c-.546.515-1.204.826-1.917.885c-1.16.097-2.241-.494-2.915-1.504l-.555-.832l1.664-1.11l.555.832c.326.49.745.65 1.085.621c.332-.028.81-.256 1.189-1.013l.894-1.79z"></svg:path>`,
})
export class TdesignCatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCatalogIcon],svg[tdesign-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v18h14V3zm3 4h8v2H8zm0 4h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class TdesignCatalogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCatalogFilledIcon],svg[tdesign-catalog-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v22H3V1zm-5 6H8v2h8zm0 4H8v2h8zm0 4H8v2h8z"></svg:path>`,
})
export class TdesignCatalogFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCdIcon],svg[tdesign-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m10-8h1a8 8 0 0 1 8 8v1h-2v-1a6 6 0 0 0-6-6h-1zm1 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class TdesignCdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCdFilledIcon],svg[tdesign-cd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m14.5 0a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0M12 4.5h-.5v1h.5a6.5 6.5 0 0 1 6.5 6.5v.5h1V12A7.5 7.5 0 0 0 12 4.5"></svg:path>`,
})
export class TdesignCdFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCelsiusIcon],svg[tdesign-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M4 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m7-.5a2 2 0 0 1 2-2h7v2h-7v12h7v2h-7a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignCelsiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCenterFocusStrongIcon],svg[tdesign-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zm-3 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-4 3v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignCenterFocusStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCenterFocusStrongFilledIcon],svg[tdesign-center-focus-strong-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zM8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-4 3v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignCenterFocusStrongFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCentimeterIcon],svg[tdesign-centimeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h10a2 2 0 0 1 2 2v14h-2V6h-3v14h-2V6h-3v14h-2zM1 6a2 2 0 0 1 2-2h7v2H3v12h7v2H3a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignCentimeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificateIcon],svg[tdesign-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5h-2v6.5l-3-2.25l-3 2.25V5zm12 0v2.5l1-.75l1 .75V5zM5 11h6v2H5zm0 4h14v2H5z"></svg:path>`,
})
export class TdesignCertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificate1Icon],svg[tdesign-certificate-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v22H3V1zm-8 2v6.5l-3-2.25L7 9.5V3H5v18h14V3zM9 3v2.5l1-.75l1 .75V3zm-2 9h10v2H7zm0 4h8v2H7z"></svg:path>`,
})
export class TdesignCertificate1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificate1FilledIcon],svg[tdesign-certificate-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v22H3V1zm-4 12H7v2h10zm-2 4H7v2h8zM11 3H7v5.5l2-1.65l2 1.65z"></svg:path>`,
})
export class TdesignCertificate1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificateFilledIcon],svg[tdesign-certificate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm4 8v2h6v-2zm0 4v2h14v-2zm11.502-6.312L19 10.75V5h-4.996v5.75z"></svg:path>`,
})
export class TdesignCertificateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartIcon],svg[tdesign-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm9 3v11h-2V7zm-5 4v7H6v-7zm10 2v5h-2v-5z"></svg:path>`,
})
export class TdesignChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChart3dIcon],svg[tdesign-chart-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L5.34 7L12 10.845L18.66 7zm7.66 5.577L13 12.577v7.69l6.66-3.844zM11 20.268v-7.69L4.34 8.731v7.69zM13 5v4h-2V5zm-3.098 9.366l-3.464 2l-1-1.732l3.464-2zm5.196-1.732l3.464 2l-1 1.732l-3.464-2z"></svg:path>`,
})
export class TdesignChart3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChart3dFilledIcon],svg[tdesign-chart-3d-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.665 5.847L12 .845L3.338 5.847L12 10.846zM13 3.93v4h-2v-4zm8.66 3.652L13 12.578v10l8.66-5zm-5.634 5.587l3.464 2l-1 1.732l-3.464-2zM11 22.577v-10L2.34 7.58v9.997zM8.975 14.9l-3.464 2l-1-1.732l3.464-2z"></svg:path>`,
})
export class TdesignChart3dFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAddIcon],svg[tdesign-chart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0v3h3v2h-3v3h-2V5h-3V3h3V0zM2 2h11v2H4v16h16V10h2v12H2zm11 6v10h-2V8zm-5 3v7H6v-7zm10 2v5h-2v-5z"></svg:path>`,
})
export class TdesignChartAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAddFilledIcon],svg[tdesign-chart-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3V0h-2v3h-3v2h3v3h2V5h3V3z"></svg:path><svg:path fill="currentColor" d="M13.5 4c0-.706.132-1.38.374-2H2v20h20V8.61A5.5 5.5 0 0 1 13.5 4M13 18h-2V8h2zm-5 0H6v-7h2zm8 0v-5h2v5z"></svg:path>`,
})
export class TdesignChartAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAnalyticsIcon],svg[tdesign-chart-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm12 4h6v6h-2V9.423l-1.579 1.575l-2.714 2.708l-.707.707l-4-4l-5 5L4.586 14L11 7.585l4 4l2.009-2.003L18.594 8H16z"></svg:path>`,
})
export class TdesignChartAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaIcon],svg[tdesign-chart-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17 2.086V18.21H6v-6.152l6.59-5.99l2.967 3.461zm-2 4.828l-3.556 3.557l-3.033-3.538L8 12.943v3.267h11z"></svg:path>`,
})
export class TdesignChartAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaFilledIcon],svg[tdesign-chart-area-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17 2.086V18.21H6v-6.152l6.59-5.99l2.967 3.461z"></svg:path>`,
})
export class TdesignChartAreaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaMultiIcon],svg[tdesign-chart-area-multi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17 2.086V18.21H6v-6.152l6.59-5.99l2.967 3.461zM8.258 16.21H19v-3.796l-3.73 3.73l-3.034-3.539zM19 9.586v-.672l-3.556 3.557l-3.033-3.538L8 12.943v.801l4.415-4.001l2.967 3.46z"></svg:path>`,
})
export class TdesignChartAreaMultiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaMultiFilledIcon],svg[tdesign-chart-area-multi-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V2H2v20h20v-2z"></svg:path><svg:path fill="currentColor" d="M21 18.21V8.586l-5.617 5.617l-2.967-3.46L6 16.557v1.653z"></svg:path><svg:path fill="currentColor" d="M6 14.761V12.06l6.59-5.99l2.967 3.46L21 4.086V6.91l-5.558 5.558l-3.031-3.535z"></svg:path>`,
})
export class TdesignChartAreaMultiFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartBarIcon],svg[tdesign-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h2V9h6v11h2V5h6v15h2v2H2V2zm14 18V7h-2v13zm-8 0v-9H8v9z"></svg:path>`,
})
export class TdesignChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartBarFilledIcon],svg[tdesign-chart-bar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h3V9h5v11h3V5h5v15h2v2H2V2z"></svg:path>`,
})
export class TdesignChartBarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartBubbleIcon],svg[tdesign-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm12 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-3 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m11 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignChartBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartBubbleFilledIcon],svg[tdesign-chart-bubble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm9 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-7 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0m11 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignChartBubbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartColumnIcon],svg[tdesign-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v2h15v6H4v2h11v6H4v2h18v2H2V2zm0 14h9v-2H4zm0-8h13V6H4z"></svg:path>`,
})
export class TdesignChartColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartColumnFilledIcon],svg[tdesign-chart-column-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20H4v-3h11v-5H4V9h15V4H4V2H2v20h20z"></svg:path>`,
})
export class TdesignChartColumnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartComboIcon],svg[tdesign-chart-combo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h2v-6h6v6h2v-9h6v9h2v2H2V2zm14 18v-7h-2v7zm-8 0v-4H8v4zm6.673-16.273L21.246 8.3l-1.414 1.414l-3.163-3.163l-6.782 6.74l-4.594-4.594l1.414-1.415l3.184 3.185z"></svg:path>`,
})
export class TdesignChartComboIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartComboFilledIcon],svg[tdesign-chart-combo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h3v-6h5v6h3v-9h5v9h2v2H2V2zm12.673 1.727L21.246 8.3l-1.414 1.414l-3.163-3.163l-6.782 6.74l-4.594-4.594l1.414-1.415l3.184 3.185z"></svg:path>`,
})
export class TdesignChartComboFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartFilledIcon],svg[tdesign-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-9 16h-2V7h2zm-5 0H6v-7h2zm8 0v-5h2v5z"></svg:path>`,
})
export class TdesignChartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartLineIcon],svg[tdesign-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17.914 6L15.5 14.414l-4-4l-5 5L5.086 14L11.5 7.586l4 4l5-5z"></svg:path>`,
})
export class TdesignChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartLineDataIcon],svg[tdesign-chart-line-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm15.5 5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 1.026 2.02l-8.041 4.696a2.5 2.5 0 1 1-1.003-1.73l8.035-4.693A3 3 0 0 1 17 7.5m-9.067 6.75a.5.5 0 1 0-.866.5a.5.5 0 0 0 .866-.5"></svg:path>`,
})
export class TdesignChartLineDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartLineData1Icon],svg[tdesign-chart-line-data-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm16.307 5.27l1.782.91l-.454.89l-.891-.454l.89.454v.002l-.003.005l-.007.015l-.027.05l-.099.184a19 19 0 0 1-.364.635c-.31.516-.756 1.205-1.291 1.878c-.527.663-1.18 1.36-1.914 1.844c-.73.482-1.68.842-2.703.54c-1.704-.504-2.248-1.847-2.615-2.751l-.032-.078c-.39-.962-.626-1.434-1.375-1.646c-.236-.067-.572-.024-1.06.299c-.484.32-.985.833-1.454 1.423a16 16 0 0 0-1.138 1.662a17 17 0 0 0-.407.72l-.02.038l-.005.009l-.453.892l-1.783-.904l.452-.892l.892.452l-.892-.452l.001-.003l.003-.004l.007-.015l.027-.051l.098-.184c.085-.155.208-.374.364-.633a17.5 17.5 0 0 1 1.288-1.879c.528-.664 1.181-1.36 1.918-1.848c.732-.484 1.683-.845 2.708-.554c1.738.492 2.288 1.846 2.66 2.76l.022.056c.396.972.626 1.447 1.362 1.665c.222.066.547.03 1.033-.29c.48-.319.98-.83 1.45-1.421c.463-.582.86-1.193 1.142-1.663a17 17 0 0 0 .409-.721l.02-.039l.005-.008v-.001z"></svg:path>`,
})
export class TdesignChartLineData1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartLineMultiIcon],svg[tdesign-chart-line-multi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17.914 3.5L15.5 11.914l-4-4l-5 5L5.086 11.5L11.5 5.086l4 4l5-5zm0 5L15.5 16.914l-4-4l-5 5L5.086 16.5l6.414-6.414l4 4l5-5z"></svg:path>`,
})
export class TdesignChartLineMultiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartMaximumIcon],svg[tdesign-chart-maximum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm1.998.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm-2.567 5.789C14.816 8.304 14.035 7.999 13 8c-1.034 0-1.816.306-2.432.79c-.63.495-1.136 1.218-1.53 2.116C8.247 12.721 8 15.059 8 16.998v1H6v-1c0-2.047.252-4.707 1.207-6.893c.482-1.102 1.163-2.131 2.127-2.888C10.312 6.448 11.532 6 12.999 6s2.688.445 3.667 1.214c.964.757 1.645 1.787 2.127 2.89c.955 2.189 1.207 4.852 1.207 6.9v1h-2v-1c0-1.94-.246-4.282-1.04-6.1c-.393-.899-.899-1.622-1.53-2.117"></svg:path>`,
})
export class TdesignChartMaximumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartMedianIcon],svg[tdesign-chart-median-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm12 2.404c-1.075 0-2 .909-2 2.096v2.998h.004v2.004H14v3.07C14 16.887 12.33 19 10 19s-4-2.112-4-4.429v-1h2v1C8 16.042 9.017 17 10 17s2-.958 2-2.429V6.5c0-2.233 1.762-4.096 4-4.096s4 1.863 4 4.096v1h-2v-1c0-1.187-.925-2.096-2-2.096M6 9.496h2.004V11.5H6zm2.996.002H11v2.004H8.996zm6 0H17v2.004h-2.004zm3.004 0h2.004v2.004H18z"></svg:path>`,
})
export class TdesignChartMedianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartMinimumIcon],svg[tdesign-chart-minimum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm16 1v1c0 2.048-.252 4.71-1.207 6.899c-.482 1.103-1.163 2.133-2.127 2.89c-.979.77-2.199 1.216-3.667 1.215c-1.468-.002-2.687-.449-3.665-1.217C8.37 13.03 7.689 12 7.207 10.899C6.252 8.712 6 6.053 6 4.006v-1h2v1c0 1.939.246 4.276 1.04 6.092c.393.898.899 1.62 1.53 2.116c.615.484 1.396.789 2.43.79c1.034 0 1.816-.304 2.43-.787c.631-.495 1.137-1.219 1.53-2.118C17.754 8.28 18 5.94 18 3.999V3zM5.998 15.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignChartMinimumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartPieIcon],svg[tdesign-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11zm2 0V11h7.945A9.004 9.004 0 0 0 13 3.055M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"></svg:path>`,
})
export class TdesignChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartPieFilledIcon],svg[tdesign-chart-pie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1.045V11h9.955A11 11 0 0 0 13 1.045"></svg:path><svg:path fill="currentColor" d="M11 1.045V13h11.955C22.45 18.607 17.738 23 12 23C5.925 23 1 18.075 1 12C1 6.262 5.394 1.55 11 1.045"></svg:path>`,
})
export class TdesignChartPieFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRadarIcon],svg[tdesign-chart-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .764L23.186 8.89l-4.273 13.15H5.087L.814 8.89zM3.548 10.83l2.61 8.035l4.224-5.814zm4.228 9.21h8.448L12 14.226zm5.842-6.99l4.224 5.815l2.61-8.035zm6.216-4.122L13 3.963v7.186zM11 3.963L4.166 8.928L11 11.148z"></svg:path>`,
})
export class TdesignChartRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRadarFilledIcon],svg[tdesign-chart-radar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.001 1.49L1.815 8.164L11 11.15zm-9.805 8.576l3.51 10.8l5.677-7.815zM6.324 22.04h11.354l-5.677-7.813zm12.971-1.176l3.508-10.797l-9.184 2.984zm2.891-12.699L13 1.492v9.657z"></svg:path>`,
})
export class TdesignChartRadarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRadialIcon],svg[tdesign-chart-radial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 9 9v-1h2v1c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1h1v2zm0 4a5 5 0 1 0 3.515 1.444l-.711-.703l1.406-1.423l.71.703A7 7 0 1 1 12 5h1v2zm0 4q-.133 0-.25.031A1 1 0 1 0 13 12v-1h2v1a3 3 0 1 1-3-3h1v2z"></svg:path>`,
})
export class TdesignChartRadialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRingIcon],svg[tdesign-chart-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.055a9.001 9.001 0 1 0 6.631 15.966l-2.123-2.153A6 6 0 1 1 11 6.083zm2 0v3.028A6.005 6.005 0 0 1 17.917 11h3.028A9.004 9.004 0 0 0 13 3.055M20.945 13h-3.028a6 6 0 0 1-1.004 2.445l2.13 2.16A8.96 8.96 0 0 0 20.945 13M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class TdesignChartRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRing1Icon],svg[tdesign-chart-ring-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.174 2.983l-.98.2a9 9 0 1 0 3.612 17.635a9 9 0 0 0 7.057-7.237l.176-.984l1.969.351l-.176.985c-.769 4.302-4.079 7.913-8.625 8.844c-5.951 1.22-11.764-2.617-12.983-8.569C.004 8.257 3.841 2.444 9.793 1.225l.98-.201zM13.31 1.03l.978.209a11 11 0 0 1 8.488 8.555l.201.98l-1.96.4l-.2-.98a9 9 0 0 0-6.946-7l-.978-.208zm2.61 10.168a4 4 0 1 0-7.838 1.605a4 4 0 0 0 7.838-1.605m-5.123-5.076a6 6 0 1 1 2.408 11.756a6 6 0 0 1-2.408-11.756"></svg:path>`,
})
export class TdesignChartRing1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRing1FilledIcon],svg[tdesign-chart-ring-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.184 13.807a9 9 0 0 1 7.011-10.623l.98-.2l-.401-1.96l-.98.2C3.842 2.445.006 8.258 1.224 14.209c1.22 5.952 7.033 9.788 12.985 8.57c4.546-.932 7.855-4.543 8.624-8.845l.176-.985l-1.97-.351l-.175.984a9 9 0 0 1-7.057 7.237a9 9 0 0 1-10.623-7.011"></svg:path><svg:path fill="currentColor" d="m14.289 1.239l-.979-.209l-.416 1.956l.978.209a9 9 0 0 1 6.946 7l.2.98l1.96-.402l-.2-.98a11 11 0 0 0-8.49-8.554M12.001 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class TdesignChartRing1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRingFilledIcon],svg[tdesign-chart-ring-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1.045v6.567A4.51 4.51 0 0 1 16.389 11h6.566A11 11 0 0 0 13 1.045m10 10.85v.21zM22.955 13H16.39a4.5 4.5 0 0 1-.58 1.396l4.644 4.643A10.95 10.95 0 0 0 22.955 13m-3.105 6.706l-.144.144z"></svg:path><svg:path fill="currentColor" d="m19.039 20.454l-4.644-4.644A4.5 4.5 0 1 1 11 7.612V1.045C5.393 1.55 1 6.262 1 12c0 6.075 4.925 11 11 11c2.677 0 5.131-.956 7.039-2.547"></svg:path>`,
})
export class TdesignChartRingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartScatterIcon],svg[tdesign-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm13 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-6.002-1h2.004v2.004h-2.004zm-5 3h2.004v2.004H5.998zm9 2h2.004v2.004h-2.004zM9 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7.998 2h2.004v2.004h-2.004zm-11 1h2.004v2.004H5.998z"></svg:path>`,
})
export class TdesignChartScatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartStackedIcon],svg[tdesign-chart-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h2V9h6v11h2V5h6v15h2v2H2V2zm14 18v-3.5h-2V20zm-2-5.5h2V7h-2zM10 20v-3.5H8V20zm-2-5.5h2V11H8z"></svg:path>`,
})
export class TdesignChartStackedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChartStackedFilledIcon],svg[tdesign-chart-stacked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V2H2v20h20v-2h-2v-3.5h-6V20h-2v-3.5H6V20z"></svg:path><svg:path fill="currentColor" d="M6 14.5h6V9H6zm8 0h6V5h-6z"></svg:path>`,
})
export class TdesignChartStackedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatIcon],svg[tdesign-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4z"></svg:path>`,
})
export class TdesignChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatAddIcon],svg[tdesign-chat-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0v3h3v2h-3v3h-2V5h-3V3h3V0zM1.5 2H14v2H3.5v14.296L6.124 16H20.5v-6h2v8H6.876L1.5 22.704z"></svg:path>`,
})
export class TdesignChatAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatAddFilledIcon],svg[tdesign-chat-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3V0h-2v3h-3v2h3v3h2V5h3V3z"></svg:path><svg:path fill="currentColor" d="M20 9.5c.9 0 1.75-.216 2.5-.6V18H6.876L1.5 22.704V2h13.375A5.5 5.5 0 0 0 20 9.5"></svg:path>`,
})
export class TdesignChatAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleIcon],svg[tdesign-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12"></svg:path>`,
})
export class TdesignChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubble1Icon],svg[tdesign-chat-bubble-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12m7-3h8v2H8zm0 4h6v2H8z"></svg:path>`,
})
export class TdesignChatBubble1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubble1FilledIcon],svg[tdesign-chat-bubble-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m4 10H8V9h8zm-2 4H8v-2h6z"></svg:path>`,
})
export class TdesignChatBubble1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleAddIcon],svg[tdesign-chat-bubble-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12m12-4v3h3v2h-3v3h-2v-3H8v-2h3V8z"></svg:path>`,
})
export class TdesignChatBubbleAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleAddFilledIcon],svg[tdesign-chat-bubble-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m1 12v3h-2v-3H8v-2h3V8h2v3h3v2z"></svg:path>`,
})
export class TdesignChatBubbleAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleErrorIcon],svg[tdesign-chat-bubble-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12m12-5.5V14h-2V6.5zm-2 9h2.004v2.004H11z"></svg:path>`,
})
export class TdesignChatBubbleErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleErrorFilledIcon],svg[tdesign-chat-bubble-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12C1 5.925 5.925 1 12 1m-1 5.5V14h2V6.5zm2.004 9H11v2.004h2.004z"></svg:path>`,
})
export class TdesignChatBubbleErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleFilledIcon],svg[tdesign-chat-bubble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12"></svg:path>`,
})
export class TdesignChatBubbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleHelpIcon],svg[tdesign-chat-bubble-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12m11-4.5a2 2 0 0 0-1.886 1.333l-.334.943l-1.885-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.431.34-.817.666-1.096 1.009c-.274.338-.378.61-.378.848v1.25h-2V14.5c0-.867.39-1.573.826-2.11c.432-.53.974-.974 1.41-1.318A2 2 0 0 0 12 7.5m-1 9.25h2.004v2.004H11z"></svg:path>`,
})
export class TdesignChatBubbleHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleHelpFilledIcon],svg[tdesign-chat-bubble-help-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m-1.886 7.833l-.334.943l-1.885-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.432.34-.817.666-1.096 1.009c-.275.338-.378.61-.378.848v1.25h-2V14.5c0-.867.39-1.573.826-2.11c.432-.53.974-.974 1.41-1.318a2 2 0 1 0-3.123-2.24m2.89 7.917v2.004H11V16.75z"></svg:path>`,
})
export class TdesignChatBubbleHelpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleHistoryIcon],svg[tdesign-chat-bubble-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12m12-6.5v6.086L16.414 15L15 16.414l-4-4V5.5z"></svg:path>`,
})
export class TdesignChatBubbleHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleHistoryFilledIcon],svg[tdesign-chat-bubble-history-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m1 10.586L16.414 15L15 16.414l-4-4V5.5h2z"></svg:path>`,
})
export class TdesignChatBubbleHistoryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleLockedIcon],svg[tdesign-chat-bubble-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 2.397.935 4.573 2.463 6.186l.504.532L4.7 21H12a9 9 0 1 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12m11-3.5c.69 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0v.75H7.499V17h9v-6.5zm-.751 2V15h-5v-2.5z"></svg:path>`,
})
export class TdesignChatBubbleLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleLockedFilledIcon],svg[tdesign-chat-bubble-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 9.75a1.25 1.25 0 1 0-2.5 0v.75h2.5z"></svg:path><svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m3.25 8.75v.75h1.248V17h-9v-6.5H8.75v-.75a3.25 3.25 0 0 1 6.5 0"></svg:path>`,
})
export class TdesignChatBubbleLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleSmileIcon],svg[tdesign-chat-bubble-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.333 13.6l-.4-.917l-1.833.801l.4.916a6.001 6.001 0 0 0 11 0l.401-.916l-1.833-.8l-.4.916a4.001 4.001 0 0 1-7.335 0"></svg:path><svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 9 9H4.7l1.267-2.282l-.504-.532A8.97 8.97 0 0 1 3 12"></svg:path>`,
})
export class TdesignChatBubbleSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleSmileFilledIcon],svg[tdesign-chat-bubble-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1M8.333 13.6a4.001 4.001 0 0 0 7.335 0l.4-.917l1.833.801l-.4.916a6.001 6.001 0 0 1-11.001 0l-.4-.916l1.832-.8z"></svg:path>`,
})
export class TdesignChatBubbleSmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatCheckedIcon],svg[tdesign-chat-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zm14.157 3.586l-7.071 7.07l-4.243-4.242L7.757 9l2.829 2.828l5.657-5.657z"></svg:path>`,
})
export class TdesignChatCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatCheckedFilledIcon],svg[tdesign-chat-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM10.585 14.657l7.072-7.071l-1.415-1.414l-5.657 5.656L7.757 9l-1.414 1.414z"></svg:path>`,
})
export class TdesignChatCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatClearIcon],svg[tdesign-chat-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zm5.671 1.757L12 8.586l2.828-2.829l1.414 1.415L13.414 10l2.828 2.828l-1.414 1.415L12 11.414l-2.83 2.829l-1.414-1.415L10.585 10L7.757 7.172z"></svg:path>`,
})
export class TdesignChatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatClearFilledIcon],svg[tdesign-chat-clear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM12 8.586L9.17 5.757L7.757 7.172L10.585 10l-2.828 2.828l1.414 1.415L12 11.414l2.828 2.829l1.414-1.415L13.414 10l2.828-2.828l-1.414-1.415z"></svg:path>`,
})
export class TdesignChatClearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatDoubleIcon],svg[tdesign-chat-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h19v14H5.82L1 19.443zm2 2v11.557L5.18 14H18V4zm20.5.5v18.443L18.68 19.5H7.5v-2h11.82l2.18 1.557V4.5z"></svg:path>`,
})
export class TdesignChatDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatDoubleFilledIcon],svg[tdesign-chat-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h19v14H5.82L1 19.443zm22.5 2.5v18.443L18.68 19.5H7.5v-2h11.82l2.18 1.557V4.5z"></svg:path>`,
})
export class TdesignChatDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatErrorIcon],svg[tdesign-chat-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zM13 6v5h-2V6zm-2 6h2.004v2.004H11z"></svg:path>`,
})
export class TdesignChatErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatErrorFilledIcon],svg[tdesign-chat-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM13 11V6h-2v5zm.004 1H11v2.004h2.004z"></svg:path>`,
})
export class TdesignChatErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatFilledIcon],svg[tdesign-chat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704z"></svg:path>`,
})
export class TdesignChatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatHeartIcon],svg[tdesign-chat-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zM12 5.772a3.251 3.251 0 0 0-4.065 5.026L12 14.864l4.065-4.066A3.25 3.25 0 0 0 12 5.772m-.883 1.844L12 8.5l.884-.884a1.25 1.25 0 0 1 1.768 1.768l-2.651 2.652l-2.652-2.652a1.25 1.25 0 0 1 1.768-1.768"></svg:path>`,
})
export class TdesignChatHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatHeartFilledIcon],svg[tdesign-chat-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2h-21v20.704L6.876 18H22.5zM8.288 6.555A2.75 2.75 0 0 1 12 6.393a2.75 2.75 0 0 1 3.713 4.052L12 14.157l-3.712-3.713a2.75 2.75 0 0 1 0-3.889"></svg:path>`,
})
export class TdesignChatHeartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatMessageIcon],svg[tdesign-chat-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 22.704V2h21v16H6.876zm2-4.408L6.124 16H20.5V4h-17zM13.004 11H11V8.996h2.004zm-5 0H6V8.996h2.004zm10 0H16V8.996h2.004z"></svg:path>`,
})
export class TdesignChatMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatMessageFilledIcon],svg[tdesign-chat-message-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM11 11h2.004V8.996H11zm-5 0h2.004V8.996H6zm10 0h2.004V8.996H16z"></svg:path>`,
})
export class TdesignChatMessageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatOffIcon],svg[tdesign-chat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.414 22.001L2 .587L.586 2l.914.914v19.79L6.876 18h9.71L22 23.415zm-8.828-6H6.124L3.5 18.297V4.915zM22.503 18L22.5 2H9.655l-3.418-.003L8.24 4H20.5v11.995z"></svg:path>`,
})
export class TdesignChatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatOffFilledIcon],svg[tdesign-chat-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.234 18l-16-16H22.5v16zm1.176 4.005L22 23.415L16.586 18h-9.71L1.5 22.704V2.914L.586 2L2 .586l.004.004L2 .594z"></svg:path>`,
})
export class TdesignChatOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatPollIcon],svg[tdesign-chat-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zM13 6v8h-2V6zm5 3v5h-2V9zM8 11v3H6v-3z"></svg:path>`,
})
export class TdesignChatPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatPollFilledIcon],svg[tdesign-chat-poll-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM13 14V6h-2v8zm5 0V9h-2v5zM8 14v-3H6v3z"></svg:path>`,
})
export class TdesignChatPollFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatSettingIcon],svg[tdesign-chat-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v9h-2V4h-17v14.296L6.124 16H13v2H6.876L1.5 22.704zM20 12.5v1.14a3.5 3.5 0 0 1 1.405.814l.99-.571l1 1.732l-.99.571a3.5 3.5 0 0 1 0 1.623l.99.572l-1 1.732l-.993-.573a3.5 3.5 0 0 1-1.403.81v1.145h-2V20.35a3.5 3.5 0 0 1-1.403-.81l-.992.573l-1-1.732l.99-.572a3.5 3.5 0 0 1 0-1.623l-.99-.571l1-1.732l.989.57a3.5 3.5 0 0 1 1.406-.813V12.5zm-1 2.995a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignChatSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChatSettingFilledIcon],svg[tdesign-chat-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v10.126A6 6 0 0 0 13.083 18H6.876L1.5 22.704z"></svg:path><svg:path fill="currentColor" d="M19.999 13.64V12.5h-2v1.14a3.5 3.5 0 0 0-1.407.814l-.988-.571l-1 1.732l.989.571a3.5 3.5 0 0 0 0 1.623l-.99.572l1 1.732l.992-.573c.393.371.872.652 1.404.81v1.145h2V20.35a3.5 3.5 0 0 0 1.403-.81l.992.573l1-1.732l-.99-.572a3.5 3.5 0 0 0 0-1.623l.99-.571l-1-1.732l-.99.57A3.5 3.5 0 0 0 20 13.64m-2.5 3.355a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class TdesignChatSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckIcon],svg[tdesign-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.985 7.378L10.38 17.985l-6.364-6.364l1.414-1.414l4.95 4.95l9.192-9.193z"></svg:path>`,
})
export class TdesignCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckCircleIcon],svg[tdesign-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-12.5 4.414L6.086 12L7.5 10.586l3 3l6-6L17.914 9z"></svg:path>`,
})
export class TdesignCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckCircleFilledIcon],svg[tdesign-check-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M7.5 10.586l3 3l6-6L17.914 9L10.5 16.414L6.086 12z"></svg:path>`,
})
export class TdesignCheckCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckDoubleIcon],svg[tdesign-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 7.171l-5.303 5.304l-1.414-1.415l5.303-5.303zm5.657 0L12.708 17.778l-6.364-6.364L7.758 10l4.95 4.95L21.9 5.757zM2.101 10l4.95 4.95l.353-.354l1.414 1.414l-1.768 1.768l-6.363-6.364z"></svg:path>`,
})
export class TdesignCheckDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckRectangleIcon],svg[tdesign-check-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm13.914 5L10.5 16.414L6.086 12L7.5 10.586l3 3l6-6z"></svg:path>`,
})
export class TdesignCheckRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckRectangleFilledIcon],svg[tdesign-check-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM6.086 12L7.5 10.586l3 3l6-6L17.915 9L10.5 16.414z"></svg:path>`,
})
export class TdesignCheckRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheeseIcon],svg[tdesign-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.533 1.467l-3.998 12.658l-.833-.112a1.5 1.5 0 0 0-.89 2.82l.746.387l-1.885 5.968l-1.662-.395c-6.318-1.505-11.29-6.446-12.795-12.769L.812 8.327l10.97-3.465l.266 1.018a1.501 1.501 0 1 0 2.858-.903l-.366-.986zm-5.538 3.846A3.5 3.5 0 0 1 13.5 9a3.5 3.5 0 0 1-2.969-1.646L3.19 9.674c1.349 5.48 5.657 9.774 11.138 11.137l.85-2.693a3.5 3.5 0 0 1 1.925-6.096l2.365-7.49zM9.5 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M6 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class TdesignCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCheeseFilledIcon],svg[tdesign-cheese-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.5a2.5 2.5 0 0 0 2.314 2.493l-1.64 5.195l-1.663-.395c-6.318-1.505-11.29-6.446-12.795-12.769L.812 8.327l10.22-3.228Q11 5.295 11 5.5a2.5 2.5 0 1 0 4.29-1.746l7.243-2.287l-3.754 11.885A2.5 2.5 0 0 0 15 15.5M9.5 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class TdesignCheeseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCherryIcon],svg[tdesign-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 .586L23.414 7L22 8.414L20.056 6.47c-.645.8-1.5 1.978-2.26 3.343c-1.03 1.845-1.819 3.908-1.809 5.788c1.472 1.773 1.378 4.448-.28 6.106c-1.758 1.758-4.657 1.758-6.414 0c-1.758-1.757-1.758-4.657 0-6.414c1.283-1.283 3.176-1.63 4.788-1.038c.27-1.939 1.085-3.835 1.967-5.417a26 26 0 0 1 1.71-2.658a27 27 0 0 0-2.1.341c-2.172.445-4.572 1.237-6.296 2.604c1.065 1.745.847 4.08-.655 5.582c-1.758 1.758-4.657 1.758-6.414 0c-1.758-1.757-1.758-4.657 0-6.414c1.525-1.526 3.912-1.727 5.664-.603c2.124-1.756 4.988-2.655 7.3-3.128a29 29 0 0 1 2.495-.396L15.586 2zM7.293 9.707c-.977-.976-2.61-.976-3.586 0c-.976.977-.976 2.61 0 3.586s2.61.976 3.586 0s.976-2.61 0-3.586m7 7c-.977-.976-2.61-.976-3.586 0c-.976.977-.976 2.61 0 3.586s2.61.976 3.586 0s.976-2.61 0-3.586"></svg:path>`,
})
export class TdesignCherryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCherryFilledIcon],svg[tdesign-cherry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 .586L23.414 7L22 8.414L20.056 6.47c-.645.8-1.5 1.978-2.26 3.343c-1.03 1.845-1.819 3.908-1.809 5.788c1.472 1.773 1.378 4.448-.28 6.106c-1.758 1.758-4.657 1.758-6.414 0c-1.758-1.757-1.758-4.657 0-6.414c1.283-1.283 3.176-1.63 4.788-1.038c.27-1.939 1.085-3.835 1.967-5.417a26 26 0 0 1 1.71-2.658a27 27 0 0 0-2.1.341c-2.172.445-4.572 1.237-6.296 2.604c1.065 1.745.847 4.08-.655 5.582c-1.758 1.758-4.657 1.758-6.414 0c-1.758-1.757-1.758-4.657 0-6.414c1.525-1.526 3.912-1.727 5.664-.603c2.124-1.756 4.988-2.655 7.3-3.128a29 29 0 0 1 2.495-.396L15.586 2z"></svg:path>`,
})
export class TdesignCherryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownIcon],svg[tdesign-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.5 8.086l-5.5 5.5l-5.5-5.5L5.086 9.5L12 16.414L18.914 9.5z"></svg:path>`,
})
export class TdesignChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownCircleIcon],svg[tdesign-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m7-2.914l4 4l4-4l1.414 1.414L12 15.914L6.586 10.5z"></svg:path>`,
})
export class TdesignChevronDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownCircleFilledIcon],svg[tdesign-chevron-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m0 14.5l4.25-5.5h-8.5z"></svg:path>`,
})
export class TdesignChevronDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownDoubleIcon],svg[tdesign-chevron-down-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 5.586l-4.5 4.5l-4.5-4.5L6.086 7L12 12.914L17.914 7zm0 6.5l-4.5 4.5l-4.5-4.5L6.086 13.5L12 19.414l5.914-5.914z"></svg:path>`,
})
export class TdesignChevronDownDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownDoubleSIcon],svg[tdesign-chevron-down-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.909l-4.95-4.95l1.415-1.414l3.536 3.535l3.535-3.535l1.414 1.414zm0-5.461l-4.95-4.95l1.415-1.414l3.536 3.535l3.535-3.535l1.414 1.414z"></svg:path>`,
})
export class TdesignChevronDownDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownRectangleIcon],svg[tdesign-chevron-down-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm4 5.086l4 4l4-4l1.414 1.414L12 15.914L6.586 10.5z"></svg:path>`,
})
export class TdesignChevronDownRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownRectangleFilledIcon],svg[tdesign-chevron-down-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2V2h20zm-10-6.5l4.25-5.5h-8.5z"></svg:path>`,
})
export class TdesignChevronDownRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownSIcon],svg[tdesign-chevron-down-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.684l-4.95-4.95L8.464 9.32L12 12.856l3.535-3.536l1.414 1.414z"></svg:path>`,
})
export class TdesignChevronDownSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftIcon],svg[tdesign-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.914 17.5l-5.5-5.5l5.5-5.5L14.5 5.086L7.586 12l6.914 6.914z"></svg:path>`,
})
export class TdesignChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftCircleIcon],svg[tdesign-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m13.914-4l-4 4l4 4l-1.414 1.414L8.086 12L13.5 6.586z"></svg:path>`,
})
export class TdesignChevronLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftCircleFilledIcon],svg[tdesign-chevron-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11M8.5 12L14 7.75v8.5z"></svg:path>`,
})
export class TdesignChevronLeftCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftDoubleIcon],svg[tdesign-chevron-left-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.414 7.5l-4.5 4.5l4.5 4.5L17 17.914L11.086 12L17 6.086zm-6.5 0l-4.5 4.5l4.5 4.5l-1.414 1.414L4.586 12L10.5 6.086z"></svg:path>`,
})
export class TdesignChevronLeftDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftDoubleSIcon],svg[tdesign-chevron-left-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.088 11.498l4.95-4.95l1.414 1.415l-3.536 3.535l3.536 3.536l-1.414 1.414zm5.46 0l4.95-4.95l1.415 1.415l-3.536 3.535l3.536 3.536l-1.414 1.414z"></svg:path>`,
})
export class TdesignChevronLeftDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftRectangleIcon],svg[tdesign-chevron-left-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm10.914 4l-4 4l4 4l-1.414 1.414L8.086 12L13.5 6.586z"></svg:path>`,
})
export class TdesignChevronLeftRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftRectangleFilledIcon],svg[tdesign-chevron-left-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V2h20v20zm6.5-10l5.5 4.25v-8.5z"></svg:path>`,
})
export class TdesignChevronLeftRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftSIcon],svg[tdesign-chevron-left-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.315 12l4.95-4.95l1.414 1.415L11.144 12l3.535 3.536l-1.414 1.414z"></svg:path>`,
})
export class TdesignChevronLeftSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightIcon],svg[tdesign-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.086 17.5l5.5-5.5l-5.5-5.5L9.5 5.086L16.414 12L9.5 18.914z"></svg:path>`,
})
export class TdesignChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightCircleIcon],svg[tdesign-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m9.5-5.414L15.914 12L10.5 17.414L9.086 16l4-4l-4-4z"></svg:path>`,
})
export class TdesignChevronRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightCircleFilledIcon],svg[tdesign-chevron-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m14.5 0L10 7.75v8.5z"></svg:path>`,
})
export class TdesignChevronRightCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightDoubleIcon],svg[tdesign-chevron-right-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.586 16.5l4.5-4.5l-4.5-4.5L7 6.086L12.914 12L7 17.914zm6.5 0l4.5-4.5l-4.5-4.5L13.5 6.086L19.414 12L13.5 17.914z"></svg:path>`,
})
export class TdesignChevronRightDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightDoubleSIcon],svg[tdesign-chevron-right-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.912 11.498l-4.95 4.95l-1.414-1.414l3.535-3.536l-3.535-3.535l1.414-1.415zm-5.461 0l-4.95 4.95l-1.414-1.414l3.535-3.536l-3.535-3.535L7.5 6.548z"></svg:path>`,
})
export class TdesignChevronRightDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightRectangleIcon],svg[tdesign-chevron-right-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm6.5 2.586L15.914 12L10.5 17.414L9.086 16l4-4l-4-4z"></svg:path>`,
})
export class TdesignChevronRightRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightRectangleFilledIcon],svg[tdesign-chevron-right-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h20V2H2zm13.5-10L10 16.25v-8.5z"></svg:path>`,
})
export class TdesignChevronRightRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightSIcon],svg[tdesign-chevron-right-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.684 12l-4.95 4.95l-1.414-1.414L12.856 12L9.32 8.465l1.415-1.415z"></svg:path>`,
})
export class TdesignChevronRightSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpIcon],svg[tdesign-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.5 15.914l-5.5-5.5l-5.5 5.5L5.086 14.5L12 7.586l6.914 6.914z"></svg:path>`,
})
export class TdesignChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpCircleIcon],svg[tdesign-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-3.914l5.414 5.414L16 14.914l-4-4l-4 4L6.586 13.5z"></svg:path>`,
})
export class TdesignChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpCircleFilledIcon],svg[tdesign-chevron-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-14.5l4.25 5.5h-8.5z"></svg:path>`,
})
export class TdesignChevronUpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpDoubleIcon],svg[tdesign-chevron-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 18.414l-4.5-4.5l-4.5 4.5L6.086 17L12 11.086L17.914 17zm0-6.5l-4.5-4.5l-4.5 4.5L6.086 10.5L12 4.586l5.914 5.914z"></svg:path>`,
})
export class TdesignChevronUpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpDoubleSIcon],svg[tdesign-chevron-up-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.084l4.95 4.95l-1.414 1.414l-3.535-3.536l-3.536 3.536l-1.414-1.414zm0 5.46l4.95 4.95l-1.414 1.415l-3.535-3.536l-3.536 3.536l-1.414-1.415z"></svg:path>`,
})
export class TdesignChevronUpDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpRectangleIcon],svg[tdesign-chevron-up-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm8 4.086l5.414 5.414L16 14.914l-4-4l-4 4L6.586 13.5z"></svg:path>`,
})
export class TdesignChevronUpRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpRectangleFilledIcon],svg[tdesign-chevron-up-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM12 8.5l4.25 5.5h-8.5z"></svg:path>`,
})
export class TdesignChevronUpRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpSIcon],svg[tdesign-chevron-up-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.316l4.95 4.95l-1.415 1.414L12 11.144L8.464 14.68L7.05 13.265z"></svg:path>`,
})
export class TdesignChevronUpSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChickenIcon],svg[tdesign-chicken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.032 3.38a4 4 0 0 1 .473.01a2.65 2.65 0 0 1 1.25.416c.446.299.782.757.931 1.367c.144.59.083 1.15-.178 1.642c-.247.467-.63.789-.99 1.012c-.529.327-1.167.531-1.654.667l-1.072 1.855A5.99 5.99 0 0 1 21 14.999a5.98 5.98 0 0 1-1.528 4H22v2H2v-2h2.708a8 8 0 0 1 5.293-14H13v2h-2.999a6 6 0 0 0-.001 12h5a4 4 0 1 0-.43-7.977A3.973 3.973 0 0 0 11 14.999v1H9v-1a5.976 5.976 0 0 1 4.945-5.91l1.738-3.009c-.127-.49-.27-1.144-.251-1.765c.012-.424.1-.916.381-1.363c.296-.47.751-.803 1.331-.975c.604-.178 1.17-.12 1.654.118c.458.224.776.573.988.877a4 4 0 0 1 .245.408m-3.798 5.746q.42.088.82.234l1.493-2.583l.4-.107c.57-.153 1.129-.303 1.519-.544c.181-.112.25-.2.275-.247c.011-.021.04-.076.002-.23c-.033-.135-.078-.166-.101-.181a.7.7 0 0 0-.311-.085a2 2 0 0 0-.668.06l-.99.283l-.248-1.002v-.002l-.01-.035a2.2 2.2 0 0 0-.27-.571a.7.7 0 0 0-.226-.225c-.024-.011-.073-.036-.207.004c-.158.047-.192.1-.206.122c-.027.044-.069.147-.075.358c-.014.452.134 1.003.287 1.576l.11.412z"></svg:path>`,
})
export class TdesignChickenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChiliIcon],svg[tdesign-chili-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.701 2.129L19.226 4.1a5.5 5.5 0 0 1 2.76 5.714q-.088.522-.18 1.032c-.38 2.076-1.605 6.033-4.1 8.527c-2.72 2.72-6.304 3.235-9.076 3.12a19.4 19.4 0 0 1-4.558-.755a11 11 0 0 1-.372-.117l-.023-.008l-.007-.003l-.004-.001l-3.19-1.128l3.285-.786h.001l.005-.002l.04-.011q.061-.016.191-.06c.173-.059.43-.155.746-.304a9.7 9.7 0 0 0 2.379-1.6c1.748-1.586 3.66-4.426 3.99-9.447l.01-.155v-.01c.215-3.16 3.337-5.04 6.199-4.64l.435-1.807zM7.008 20.335c.521.076 1.096.135 1.704.16c2.51.104 5.425-.38 7.58-2.535c1.897-1.897 3-4.978 3.442-6.961l-.862-.85l-1.655 1.104l-1-1.5l-1.5 1l-1.164-1.745l-.504.126c-.495 5.098-2.542 8.214-4.581 10.067c-.5.453-.995.827-1.46 1.134m6.549-13.39l.879-.22l.836 1.255l1.5-1l1 1.5l1.345-.897l.918.904a3.505 3.505 0 0 0-2.901-3.026c-1.473-.245-2.884.413-3.577 1.484"></svg:path>`,
})
export class TdesignChiliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChiliFilledIcon],svg[tdesign-chili-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.701 2.129L19.226 4.1a5.5 5.5 0 0 1 2.76 5.714q-.088.522-.18 1.032c-.38 2.076-1.605 6.033-4.1 8.527c-2.72 2.72-6.304 3.235-9.076 3.12a19.4 19.4 0 0 1-4.558-.755a11 11 0 0 1-.372-.117l-.023-.008l-.007-.003l-.004-.001l-3.19-1.128l3.285-.786h.001l.005-.002l.04-.011q.061-.016.191-.06c.173-.059.43-.155.746-.304a9.7 9.7 0 0 0 2.379-1.6c1.748-1.586 3.66-4.426 3.99-9.447l.01-.155v-.01c.215-3.16 3.337-5.04 6.199-4.64l.435-1.807zM7.008 20.335c.521.076 1.096.135 1.704.16c2.51.104 5.425-.38 7.58-2.535c1.897-1.897 3-4.978 3.442-6.961l-.862-.85l-1.655 1.104l-1-1.5l-1.5 1l-1.164-1.745l-.504.126c-.495 5.098-2.542 8.214-4.581 10.067c-.5.453-.995.827-1.46 1.134"></svg:path>`,
})
export class TdesignChiliFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChimneyIcon],svg[tdesign-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.719 2H13.28l-1.27 5.08l.358 4.118L15 9.882l7 3.5V22H1.927L2.99 7.088zM4.93 8l-.857 12H8v-6.618l2.444-1.223L10.083 8zm5.288-2l.5-2H4.28l.5 2zm-.22 14h4v-3h2v3h4v-5.382l-5-2.5l-5 2.5z"></svg:path>`,
})
export class TdesignChimneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney1Icon],svg[tdesign-chimney-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.28 2H1.72l1.27 5.088L1.926 22H22V10h-9.661l-.326-2.932zm-3.175 6l.222 2H8v10H4.074L4.93 8zM4.78 6l-.5-2h6.439l-.5 2zM10 20v-8h10v8h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignChimney1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney1FilledIcon],svg[tdesign-chimney-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.719 2H13.28l-1.267 5.068L12.34 10H22v12h-6v-6h-2v6H1.926L2.99 7.088zm8.608 8l-.223-2H4.932l-.857 12H8V10zM4.28 4l.5 2h5.439l.5-2z"></svg:path>`,
})
export class TdesignChimney1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney2Icon],svg[tdesign-chimney-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H4v5.924L1.834 22H22V10H11.32L11 7.924zM9 4v4.076L9.296 10H8v10H4.165L6 8.076V4zm1 16v-8h10v8h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignChimney2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney2FilledIcon],svg[tdesign-chimney-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h7v5.924L11.32 10H22v12h-6v-6h-2v6H1.834L4 7.924zm5 6.076V4H6v4.076L4.165 20H8V10h1.296z"></svg:path>`,
})
export class TdesignChimney2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChimneyFilledIcon],svg[tdesign-chimney-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.28 2H1.72l1.27 5.088L1.926 22H14v-5h2v5h6v-8.618l-7-3.5l-2.632 1.316l-.358-4.118zM4.074 20L4.93 8h5.152l.361 4.16L8 13.381V20zm6.645-16l-.5 2H4.78l-.5-2z"></svg:path>`,
})
export class TdesignChimneyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChineseCabbageIcon],svg[tdesign-chinese-cabbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.412 3.71C10.11 4.127 10 4.66 10 5v.52l-.427.3c-.366.256-.77.71-1.007 1.333l-.033.086c-.229.6-.407 1.067-.402 1.593c.004.484.174 1.125.952 1.964c.45.428.766.644 1.146.896l.06.04c.165.108.342.225.54.365L11 11.76v-1.346L8.586 8L10 6.586l1 1V5h2v2.586l1-1L15.414 8L13 10.414v1.345l.172.338c.197-.14.374-.257.538-.366l.06-.04a7.4 7.4 0 0 0 1.147-.895c.778-.839.948-1.48.952-1.964c.005-.526-.173-.994-.402-1.593l-.033-.086a2.9 2.9 0 0 0-1.007-1.334L14 5.521V5c0-.34-.11-.872-.412-1.29C13.324 3.341 12.874 3 12 3s-1.324.342-1.588.71m5.86 8.557a9.3 9.3 0 0 1-1.455 1.13q-.183.12-.376.253c.392-.11.802-.24 1.218-.391l.371-.135c1.344-.485 2.557-.924 3.486-1.552C20.46 10.932 21 10.172 21 9c0-.905-.195-1.39-.386-1.645c-.177-.234-.425-.375-.794-.43c-.614-.09-1.419.087-2.198.396c.117.377.217.809.242 1.277l1.344-.997l1.19 1.607zm.547-6.78c.992-.4 2.192-.702 3.292-.54c.779.115 1.547.47 2.101 1.207c.54.717.788 1.68.788 2.846c0 2.006-1.026 3.324-2.364 4.229c-.916.62-2.03 1.079-3.096 1.475c.276.425.546.864.785 1.302c.439.803.831 1.7.918 2.569c.094.933-.17 1.892-1.084 2.558c-.742.541-1.801.801-3.137.856C14.325 22.629 13.319 23 12 23c-1.32 0-2.326-.37-3.022-1.011c-1.336-.055-2.395-.315-3.137-.856c-.914-.666-1.178-1.625-1.084-2.558c.087-.869.48-1.766.918-2.569c.24-.438.51-.877.785-1.303c-1.067-.395-2.18-.854-3.096-1.474C2.026 12.324 1 11.006 1 9c0-1.167.249-2.13.788-2.846c.554-.738 1.322-1.092 2.1-1.207c1.101-.162 2.3.14 3.293.54a5 5 0 0 1 .853-.996a4.3 4.3 0 0 1 .754-1.95C9.424 1.658 10.474 1 12 1s2.576.658 3.211 1.54a4.3 4.3 0 0 1 .755 1.951c.308.273.6.607.853.997M6.38 7.322c-.78-.309-1.585-.486-2.199-.395c-.369.054-.618.195-.794.43C3.195 7.61 3 8.094 3 9c0 1.172.54 1.933 1.484 2.572c.929.628 2.142 1.067 3.486 1.552l.371.135c.416.15.826.28 1.218.39a23 23 0 0 0-.435-.29a9.3 9.3 0 0 1-1.397-1.092l-4.126-3.06l1.191-1.606l1.344.997c.025-.468.125-.9.242-1.277m2.913 8.33a20 20 0 0 1-.89-.26c-.353.528-.69 1.058-.972 1.574c-.403.738-.637 1.35-.683 1.81c-.04.394.056.585.272.742c.167.122.446.25.89.343a3.9 3.9 0 0 1 .142-1.676l.022-.065zM12 14.32l-.319 1.01l-1.749 3.54a2 2 0 0 0-.045.688c.033.307.133.592.313.816c.226.282.705.625 1.8.625s1.574-.343 1.8-.625c.18-.224.28-.509.313-.816c.03-.279-.002-.53-.045-.689l-1.75-3.54zm4.091 5.539c.444-.093.723-.22.89-.343c.216-.157.312-.348.272-.743c-.046-.46-.28-1.07-.683-1.809a21 21 0 0 0-.971-1.574a20 20 0 0 1-.892.26l1.22 2.468l.022.065c.14.419.225 1.027.142 1.676"></svg:path>`,
})
export class TdesignChineseCabbageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChineseCabbageFilledIcon],svg[tdesign-chinese-cabbage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.183 5.632c.244-.397.53-.767.846-1.1c.072-.605.29-1.34.76-1.991C9.423 1.658 10.473 1 11.998 1c1.527 0 2.577.658 3.212 1.54c.47.652.687 1.387.76 1.992q.495.517.859 1.097q.096-.024.202-.047c.569-.126 1.36-.256 2.175-.237c.8.018 1.75.183 2.518.766C22.546 6.735 23 7.712 23 9c0 1.125-.532 2.073-1.188 2.815c-.657.743-1.501 1.355-2.297 1.833c-.683.411-1.361.742-1.912.986l.038.053c.467.668 1.048 1.61 1.38 2.593c.319.948.495 2.218-.29 3.259c-.714.947-1.992 1.39-3.713 1.453C14.322 22.63 13.318 23 12 23s-2.323-.37-3.018-1.008c-1.722-.062-2.999-.506-3.713-1.453c-.785-1.041-.609-2.31-.29-3.26c.332-.983.913-1.924 1.38-2.591l.038-.054a18 18 0 0 1-1.912-.986c-.796-.478-1.64-1.09-2.297-1.833C1.532 11.073 1 10.125 1 9c0-1.288.454-2.265 1.275-2.889c.769-.583 1.719-.748 2.518-.766c.815-.02 1.606.11 2.175.237q.113.025.215.05M11 12.303c.56.4 1 .697 1 .697s.44-.296 1-.697v-1.889L15.414 8L14 6.586l-1 1V5h-2v2.586l-1-1L8.586 8L11 10.414zm-2.929.219c-1.042-1.009-1.76-2.196-1.778-3.808l-1.5-1.113L3.6 9.208zm9.635-3.808c-.019 1.61-.742 2.804-1.787 3.816l4.48-3.322L19.208 7.6zm-8.412 6.878l-.93-.256q-.167.214-.367.499c-.425.608-.88 1.366-1.122 2.083c-.253.752-.186 1.183-.01 1.417c.12.158.403.382 1.044.526a3.9 3.9 0 0 1 .142-1.677c.073-.22.238-.575.404-.92a66 66 0 0 1 .839-1.672m.963 2.54a9 9 0 0 0-.308.684c-.051.152-.095.43-.062.743c.033.307.133.592.313.816c.226.282.705.625 1.8.625s1.574-.343 1.8-.625c.18-.224.28-.509.313-.816a1.9 1.9 0 0 0-.062-.743a9 9 0 0 0-.308-.683a89 89 0 0 0-1.42-2.79L12 14.32l-.323 1.021c-.484.924-.967 1.85-1.42 2.79m5.379-2.796l-.93.256l.237.463c.208.409.424.84.602 1.21c.166.344.33.7.404.919c.14.42.225 1.027.142 1.677c.64-.144.924-.368 1.043-.526c.176-.234.244-.665-.01-1.417c-.24-.717-.696-1.475-1.122-2.083a14 14 0 0 0-.366-.499"></svg:path>`,
})
export class TdesignChineseCabbageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChurchIcon],svg[tdesign-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v2H9v2h2v.98l-5 3.5V12H2v10h20V12h-4V9.48l-5-3.5V5h2V3h-2V1zm1 6.72l4 2.8V20h-1v-4a3 3 0 1 0-6 0v4H8v-9.48zM6 20H4v-6h2zm5 0v-4a1 1 0 1 1 2 0v4zm7 0v-6h2v6z"></svg:path>`,
})
export class TdesignChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignChurchFilledIcon],svg[tdesign-church-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v2H9v2h2v.98l-5 3.5V12H2v10h6.5v-4.5a3.5 3.5 0 1 1 7 0V22H22V12h-4V9.48l-5-3.5V5h2V3h-2V1zM6 20H4v-6h2zm12 0v-6h2v6z"></svg:path><svg:path fill="currentColor" d="M12 16a1.5 1.5 0 0 0-1.5 1.5V22h3v-4.5A1.5 1.5 0 0 0 12 16"></svg:path>`,
})
export class TdesignChurchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCircleIcon],svg[tdesign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"></svg:path>`,
})
export class TdesignCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCircleFilledIcon],svg[tdesign-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"></svg:path>`,
})
export class TdesignCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityIcon],svg[tdesign-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1.5l8 3.333V10h12v12H2zM10 12v8h2v-5h6v5h2v-8zm6 8v-3h-2v3zm-8 0V6.167L4 4.5V20z"></svg:path>`,
})
export class TdesignCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity1Icon],svg[tdesign-city-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h10v8h10v12H2zm10 10v8h4v-5h4v-3zm8 5h-2v3h2zm-10 3V4H4v16zM8.004 6v2.004H6v-2h.004V6zm0 5v2.004H6v-2h.004V11zm0 5v2.004H6v-2h.004V16z"></svg:path>`,
})
export class TdesignCity1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity1FilledIcon],svg[tdesign-city-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.004 8.004V6h-2v.004H6v2zm0 5V11h-2v.004H6v2zm0 5V16h-2v.004H6v2z"></svg:path><svg:path fill="currentColor" d="M12 2H2v20h15v-6h5v-6H12zm-2 2v16H4V4z"></svg:path><svg:path fill="currentColor" d="M22 18h-3v4h3z"></svg:path>`,
})
export class TdesignCity1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity10Icon],svg[tdesign-city-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 .72V10h8v12H2V3.72zM14 20h2v-5h2v5h2v-8h-6zM4 5.28V20h8V3.28zm2 2.718h2.004v2.004H6z"></svg:path>`,
})
export class TdesignCity10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity10FilledIcon],svg[tdesign-city-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.004 7.998H6v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M14 10V.72l-12 3V22h14v-7h2v7h4V10zm-2-6.72V20H4V5.28z"></svg:path>`,
})
export class TdesignCity10FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity11Icon],svg[tdesign-city-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h20v-9.72l-7-2.334l-1 .333zm-2 8.946l-4 1.333V20H4V4h8zM10 20v-6.28l5-1.666l5 1.667V20h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignCity11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity11FilledIcon],svg[tdesign-city-11-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v8.28l1-.334l7 2.333V22h-6v-6h-2v6H2zm6 10.28l4-1.334V4H4v16h4z"></svg:path>`,
})
export class TdesignCity11FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity12Icon],svg[tdesign-city-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H2v20h20V5h-8v5h-4zM8 12h8v8h-3v-5h-2v5H8zm-2 8H4V4h4v6H6zm12 0V10h-2V7h4v13z"></svg:path>`,
})
export class TdesignCity12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity12FilledIcon],svg[tdesign-city-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h8v8h4V5h8v17h-9v-7h-2v7H2zm2 18h2V10h2V4H4zm12-10h2v10h2V7h-4z"></svg:path>`,
})
export class TdesignCity12FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity13Icon],svg[tdesign-city-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h1v4H1v14h22V8h-6V4h1zm-3 2v16h-2v-5h-2v5H9V4zM7 20H3V10h4zm10 0V10h4v10zM13.004 5.998H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity13Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity13FilledIcon],svg[tdesign-city-13-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4h6v14H13v-7h-2v7H1V8h6V4H6zM3 20h4V10H3zm18-10h-4v10h4zm-7.996-4.002H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity13FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity14Icon],svg[tdesign-city-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.923l-6.3 2.52l.743 1.857L7 6.077V8H1v14h22V8h-6V6.077l.557.223l.743-1.857zm3 3.354V20h-2v-5h-2v5H9V5.277l3-1.2zM7 20H3V10h4zm10 0V10h4v10zM13.004 6.998H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity14Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity14FilledIcon],svg[tdesign-city-14-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.7 4.443l6.3-2.52l6.3 2.52l-.743 1.857L17 6.077V8h6v14H13v-7h-2v7H1V8h6V6.077l-.557.223zM3 20h4V10H3zm14-10v10h4V10zm-3.996-3.002H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity14FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity15Icon],svg[tdesign-city-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h20V10.687L14 9.02zm-2 6.604L8 7.77V20H4V4h8zM10 20v-9.77l10 2.083V20h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignCity15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity15FilledIcon],svg[tdesign-city-15-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v7.02l8 1.667V22h-6v-6h-2v6H2zm6 5.77l4 .834V4H4v16h4z"></svg:path>`,
})
export class TdesignCity15FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity2Icon],svg[tdesign-city-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 .698l4 3.334v6.833l5-4.167l7 5.834V22H2V4.032zM10 20h2v-6h6v6h2v-6.532l-5-4.166l-5 4.166zm6 0v-4h-2v4zm-8 0V4.968L6 3.302L4 4.968V20z"></svg:path>`,
})
export class TdesignCity2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity2FilledIcon],svg[tdesign-city-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 .698l4 3.334v6.833l5-4.167l7 5.834V22h-3.5v-7h-7v7H2V4.032zM8 20V4.968L6 3.302L4 4.968V20z"></svg:path><svg:path fill="currentColor" d="M13.5 22v-5h3v5z"></svg:path>`,
})
export class TdesignCity2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity3Icon],svg[tdesign-city-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-7v5H9V2H2v20h20zM9 9h6v11h-2v-4h-2v4H9zM7 20H4V4h3zm10 0V4h3v16zm-3-9h-4v2h4z"></svg:path>`,
})
export class TdesignCity3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity3FilledIcon],svg[tdesign-city-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h7v20h-9v-6h-2v6H2V2h7v5h6zM4 20h3V4H4zM17 4v16h3V4zm-3 7h-4v2h4z"></svg:path>`,
})
export class TdesignCity3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity4Icon],svg[tdesign-city-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.72L15 4.52v3.862l-3-1.5l-3 1.5V4.519l-3.5-2.8L2 4.52V22h20V4.52zM9 10.617l3-1.5l3 1.5V20h-2v-4h-2v4H9zM7 20H4V5.48l1.5-1.2L7 5.48zm10 0V5.48l1.5-1.2l1.5 1.2V20zm-3-8h-4v2h4z"></svg:path>`,
})
export class TdesignCity4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity4FilledIcon],svg[tdesign-city-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 4.52l3.5-2.8l3.5 2.8V22h-9v-6h-2v6H2V4.52l3.5-2.8L9 4.52v3.862l3-1.5l3 1.5zM4 5.48V20h3V5.48l-1.5-1.2zm13 0V20h3V5.48l-1.5-1.2zM14 12h-4v2h4z"></svg:path>`,
})
export class TdesignCity4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity5Icon],svg[tdesign-city-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.72L15 4.52v5.108a4.124 4.124 0 0 1-6 0V4.519l-3.5-2.8L2 4.52V22h20V4.52zM9 12.14a6.15 6.15 0 0 0 6 0V20h-2v-5h-2v5H9zM7 20H4V5.48l1.5-1.2L7 5.48zm10 0V5.48l1.5-1.2l1.5 1.2V20z"></svg:path>`,
})
export class TdesignCity5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity5FilledIcon],svg[tdesign-city-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 4.52l3.5-2.8l3.5 2.8V22h-9v-7h-2v7H2V4.52l3.5-2.8L9 4.52v5.108a4.124 4.124 0 0 0 6 0zM4 5.48V20h3V5.48l-1.5-1.2zm13 0V20h3V5.48l-1.5-1.2z"></svg:path>`,
})
export class TdesignCity5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity6Icon],svg[tdesign-city-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v6H1v14h22V6h-5zm0 6h3v12h-3zm-2 12h-3v-5h-2v5H8V4h8zM6 20H3V10h3z"></svg:path>`,
})
export class TdesignCity6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity6FilledIcon],svg[tdesign-city-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4h5v16H13v-7h-2v7H1V8h5zm15 6h-3v12h3zM3 20h3V10H3z"></svg:path>`,
})
export class TdesignCity6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity7Icon],svg[tdesign-city-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h20V10h-8zm-2 8H8v10H4V4h8zm-2 10v-8h10v8h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignCity7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity7FilledIcon],svg[tdesign-city-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v8h8v12h-6v-6h-2v6H2zm6 8h4V4H4v16h4z"></svg:path>`,
})
export class TdesignCity7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity8Icon],svg[tdesign-city-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v8h8v12H2zm10 8V8H9v2zm-3 2v2h3v-2zm-2-2V8H4v2zm-3 2v2h3v-2zm0 4v4h8v-4zm10 4h2v-4h2v4h2v-8h-6zM4 6h3V4H4zm5-2v2h3V4z"></svg:path>`,
})
export class TdesignCity8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity8FilledIcon],svg[tdesign-city-8-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v20h14v-6h2v6h4V10h-8zm-2 8H9V8h3zm0 10H4v-4h8zm0-6H9v-2h3zM7 8v2H4V8zm-3 6v-2h3v2zm3-8H4V4h3zm2 0V4h3v2z"></svg:path>`,
})
export class TdesignCity8FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity9Icon],svg[tdesign-city-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.01 1.828l3.988 2.492l3.99-2.492l6.384 3.829l-1.029 1.715L21 7.166V22H2.997V7.166l-.343.206l-1.029-1.715zM4.996 5.967V20H7v-5h2v5h1.997V6.053l-3.01-1.88zM13 20h2v-5h2v5h2V5.967l-2.991-1.794l-3.01 1.88zM7 8.998h2.004v2.004H7zm8 0h2.004v2.004H15z"></svg:path>`,
})
export class TdesignCity9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCity9FilledIcon],svg[tdesign-city-9-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 4.32L8.01 1.828L1.625 5.657l1.029 1.715l.343-.206V22H7v-7h2v7h6v-7h2v7h4V7.166l.343.206l1.029-1.715l-6.384-3.83zM7 8.998h2.004v2.004H7zm10.004 0v2.004H15V8.998z"></svg:path>`,
})
export class TdesignCity9FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncientIcon],svg[tdesign-city-ancient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.146 1.483l.856-1.417l.857 1.419l.005.01l.024.039l.097.154a36 36 0 0 0 1.59 2.333c.49.66 1.024 1.32 1.54 1.852c.544.559.97.87 1.233.967c.337.125.554.16.652.16h1v2h-1v2h4v2h-1v9H3v-9H2v-2h4.002V9H5V7h1c.098 0 .316-.035.654-.16c.264-.099.69-.41 1.233-.968A19 19 0 0 0 9.43 4.02a36 36 0 0 0 1.686-2.487l.024-.04l.005-.01zM8.002 9v2H16V9zm6.427-2a22 22 0 0 1-1.46-1.785c-.361-.486-.691-.96-.968-1.37c-.276.41-.606.883-.967 1.369A22 22 0 0 1 9.573 7zM5 13v7h3v-5h8v5h3v-7zm9 7v-3h-4v3z"></svg:path>`,
})
export class TdesignCityAncientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient1Icon],svg[tdesign-city-ancient-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.52 4.915c.922-.936 1.482-1.96 1.482-2.915h2c0 .956.56 1.98 1.482 2.916c.91.923 2.037 1.617 2.864 1.924c.337.125.554.16.652.16h1v2h-1v2h4v2h-1v7h1v2H2v-2h1v-7H2v-2h4.002V9H5V7h1c.098 0 .316-.035.654-.16c.827-.308 1.955-1.002 2.865-1.925M8.001 9v2H16V9zM13.8 7q-.385-.32-.74-.68a8.7 8.7 0 0 1-1.058-1.291a8.7 8.7 0 0 1-1.058 1.29q-.355.36-.74.681zM5 13v7h6.002v-4h2v4H19v-7z"></svg:path>`,
})
export class TdesignCityAncient1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient1FilledIcon],svg[tdesign-city-ancient-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.52 4.915c.922-.936 1.482-1.96 1.482-2.915h2c0 .956.56 1.98 1.482 2.916c.91.923 2.037 1.617 2.864 1.924c.337.125.554.16.652.16h1v2h-1v2H6.002V9H5V7h1c.098 0 .316-.035.654-.16c.827-.308 1.955-1.002 2.865-1.925M2 13v2h1v5H2v2h9.002v-4h2v4H22v-2h-1v-5h1v-2z"></svg:path>`,
})
export class TdesignCityAncient1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient2Icon],svg[tdesign-city-ancient-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.999.802l6.053 3.993L17 6.39V9.5l3.334 2.5h1.667v2h-1v8h-18v-8h-1v-2h1.667L7 9.5V6.39L5.948 4.794zm-3 4.375V9h6V5.177l-3-1.98zM15.667 11H8.333L7 12h10zm3.335 3h-14v6H11v-3h2v3h6zm-8-9.002h2.004v2.004H11z"></svg:path>`,
})
export class TdesignCityAncient2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient2FilledIcon],svg[tdesign-city-ancient-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .802l6.053 3.993L17 6.39V9.5l3.334 2.5h1.667v2h-1v8H13v-5h-2v5H3.002v-8h-1v-2h1.667L7 9.5V6.39L5.949 4.794zM15.666 11H8.334l-1.333 1h10zm-2.661-6.002h-2.004v2.004h2.004z"></svg:path>`,
})
export class TdesignCityAncient2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncientFilledIcon],svg[tdesign-city-ancient-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.002.066l-.856 1.417l-.002.002l-.005.01l-.024.038l-.096.155a36 36 0 0 1-1.59 2.332c-.49.66-1.025 1.32-1.542 1.852c-.543.559-.969.87-1.233.968C6.316 6.965 6.098 7 6 7H5v2h1.002v2H18V9h1V7h-1c-.098 0-.315-.035-.652-.16c-.264-.098-.689-.408-1.232-.967c-.517-.531-1.052-1.192-1.542-1.852a36 36 0 0 1-1.685-2.487l-.024-.04l-.006-.009zM2 13h20v2h-1v7h-5v-5H8v5H3v-7H2z"></svg:path><svg:path fill="currentColor" d="M10 22v-3h4v3z"></svg:path>`,
})
export class TdesignCityAncientFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCityFilledIcon],svg[tdesign-city-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1.5l8 3.333V10h12v12h-3.5v-6h-7v6H2zM8 20V6.167L4 4.5V20z"></svg:path><svg:path fill="currentColor" d="M16.5 22h-3v-4h3z"></svg:path>`,
})
export class TdesignCityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignClearIcon],svg[tdesign-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h6v8.5h6V23H3V9.5h6zm2 2v8.5H5V14h14v-2.5h-6V3zm8 13H5v5h9v-3h2v3h3z"></svg:path>`,
})
export class TdesignClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFilledIcon],svg[tdesign-clear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h6v8.5h6V14H3V9.5h6zM3 16h18v7h-5v-3h-2v3H3z"></svg:path>`,
})
export class TdesignClearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFormattingIcon],svg[tdesign-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.031 1.888l9.657 9.657l-8.345 8.345l-.27.272H20v2H6.748L.253 15.667zm.322 16.164l6.507-6.507l-6.829-6.828l-6.828 6.828l6.828 6.828l.32-.323zM5.788 12.96l-2.707 2.707l4.495 4.495h4.68l.365-.37z"></svg:path>`,
})
export class TdesignClearFormattingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFormatting1Icon],svg[tdesign-clear-formatting-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.03 1.889l9.657 9.657l-8.345 8.345l-.27.27H20v2H6.747l-3.666-3.666a4 4 0 0 1 0-5.657zm.322 16.163l6.507-6.506l-6.829-6.829l-6.828 6.829l6.828 6.828l.32-.323zM5.788 12.96l-1.293 1.293a2 2 0 0 0 0 2.828l3.08 3.08h4.68l.366-.368z"></svg:path>`,
})
export class TdesignClearFormatting1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFormatting1FilledIcon],svg[tdesign-clear-formatting-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.03 1.889l9.657 9.657l-8.345 8.345l-.27.27H20v2H6.747l-3.666-3.666a4 4 0 0 1 0-5.657zm-8.242 11.07l-1.293 1.294a2 2 0 0 0 0 2.828l3.08 3.08h4.68l.366-.368z"></svg:path>`,
})
export class TdesignClearFormatting1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFormattingFilledIcon],svg[tdesign-clear-formatting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.031 1.888l9.657 9.657l-8.345 8.345l-.27.272H20v2H6.748L.253 15.667zM5.788 12.96l-2.707 2.707l4.495 4.495h4.68l.365-.37z"></svg:path>`,
})
export class TdesignClearFormattingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseIcon],svg[tdesign-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 5.636l4.95 4.95l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95z"></svg:path>`,
})
export class TdesignCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseCircleIcon],svg[tdesign-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M7.403 15.182L10.586 12L7.403 8.818l1.415-1.415L12 10.586l3.182-3.182l1.414 1.414L13.414 12l3.182 3.182l-1.414 1.414L12 13.414l-3.182 3.182z"></svg:path>`,
})
export class TdesignCloseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseCircleFilledIcon],svg[tdesign-close-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M8.818 7.403L12 10.586l3.182-3.182l1.414 1.414L13.414 12l3.182 3.182l-1.415 1.414L12 13.414l-3.182 3.182l-1.415-1.414L10.586 12L7.403 8.818z"></svg:path>`,
})
export class TdesignCloseCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseOctagonIcon],svg[tdesign-close-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.35 1.5l6.15 6.15v8.699l-6.15 6.15h-8.7L1.5 16.35v-8.7L7.65 1.5zm-.83 2H8.48L3.5 8.479v7.041l4.98 4.98h7.04l4.98-4.98V8.48zm1.076 5.318L13.414 12l3.182 3.181l-1.414 1.415L12 13.414l-3.182 3.182l-1.415-1.414L10.586 12L7.403 8.817l1.415-1.414L12 10.585l3.182-3.181z"></svg:path>`,
})
export class TdesignCloseOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseOctagonFilledIcon],svg[tdesign-close-octagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 7.65L16.35 1.5h-8.7L1.5 7.65v8.699l6.15 6.15h8.7l6.15-6.15zm-5.904 1.168L13.414 12l3.182 3.181l-1.415 1.415L12 13.414l-3.182 3.182l-1.415-1.414L10.586 12L7.403 8.817l1.415-1.414L12 10.585l3.182-3.181z"></svg:path>`,
})
export class TdesignCloseOctagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseRectangleIcon],svg[tdesign-close-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm5.172 3.757L12 10.586l2.828-2.829l1.415 1.415L13.414 12l2.829 2.828l-1.415 1.415L12 13.414l-2.828 2.829l-1.415-1.415L10.586 12L7.757 9.172z"></svg:path>`,
})
export class TdesignCloseRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseRectangleFilledIcon],svg[tdesign-close-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm-5.757 7.172L14.83 7.757L12 10.586L9.172 7.757L7.758 9.172L10.586 12l-2.828 2.828l1.414 1.415l2.829-2.829l2.828 2.829l1.414-1.415L13.415 12z"></svg:path>`,
})
export class TdesignCloseRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudIcon],svg[tdesign-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5a5 5 0 0 0-4.916 5.919l.175.942l-.934.215A3.001 3.001 0 0 0 6 18h11a4 4 0 1 0-.067-8l-.86.014l-.142-.848A5 5 0 0 0 11 5m-7 5a7 7 0 0 1 13.723-1.957A6.001 6.001 0 0 1 17 20H6a5 5 0 0 1-1.988-9.589A7 7 0 0 1 4 10"></svg:path>`,
})
export class TdesignCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudDownloadIcon],svg[tdesign-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.598 6.283a7.502 7.502 0 0 1 14.804 0a6.502 6.502 0 0 1 1.053 12.008l-.89.455l-.91-1.78l.89-.456a4.502 4.502 0 0 0-1.236-8.438l-.771-.14l-.049-.781a5.5 5.5 0 0 0-10.978 0l-.049.782l-.77.14a4.502 4.502 0 0 0-1.237 8.437l.89.455l-.91 1.78l-.89-.454A6.502 6.502 0 0 1 4.599 6.283M13 10v9.586l3-3L17.414 18L12 23.414L6.586 18L8 16.586l3 3V10z"></svg:path>`,
})
export class TdesignCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudFilledIcon],svg[tdesign-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a7 7 0 0 1 13.723-1.957A6.001 6.001 0 0 1 17 20H6a5 5 0 0 1-1.988-9.589A7 7 0 0 1 4 10"></svg:path>`,
})
export class TdesignCloudFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudUploadIcon],svg[tdesign-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.598 6.283a7.502 7.502 0 0 1 14.804 0a6.502 6.502 0 0 1 1.053 12.008l-.89.455l-.91-1.78l.89-.456a4.502 4.502 0 0 0-1.236-8.438l-.771-.14l-.049-.781a5.5 5.5 0 0 0-10.978 0l-.049.782l-.77.14a4.502 4.502 0 0 0-1.237 8.437l.89.455l-.91 1.78l-.89-.454A6.502 6.502 0 0 1 4.599 6.283M12 9.586L17.414 15L16 16.414l-3-3V23h-2v-9.586l-3 3L6.586 15z"></svg:path>`,
})
export class TdesignCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudyDayIcon],svg[tdesign-cloudy-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 6.005A5 5 0 0 1 18.584 6A4.5 4.5 0 0 1 23 10.5c0 1.216-.617 2.33-1.387 3.113a5 5 0 0 1-1.69 1.139q.076.446.077.915C20 18.594 17.668 21 14.75 21H5.4C2.952 21 1 18.982 1 16.533a4.47 4.47 0 0 1 2.556-4.056a6 6 0 0 1-.006-.277c0-3.326 2.588-6.07 5.864-6.195m2.114.294c1.895.622 3.376 2.158 3.956 4.086a5.25 5.25 0 0 1 3.74 2.492a2.9 2.9 0 0 0 .963-.667c.518-.527.813-1.163.813-1.71a2.5 2.5 0 0 0-2.939-2.462l-.924.163l-.221-.912a3.002 3.002 0 0 0-5.388-.99M9.65 8c-2.246 0-4.1 1.862-4.1 4.2q0 .4.07.776l.17.935l-.926.217C3.808 14.375 3 15.348 3 16.533C3 17.914 4.093 19 5.4 19h9.35c1.777 0 3.25-1.474 3.25-3.333c0-.46-.09-.894-.251-1.288c-.496-1.212-1.66-2.046-2.999-2.046h-.054l-.863.015l-.14-.852c-.308-1.872-1.82-3.306-3.665-3.478A4 4 0 0 0 9.65 8"></svg:path>`,
})
export class TdesignCloudyDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudyDayFilledIcon],svg[tdesign-cloudy-day-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 6.005A5 5 0 0 1 18.584 6A4.5 4.5 0 0 1 23 10.5c0 1.216-.617 2.33-1.387 3.113a5 5 0 0 1-1.69 1.139q.076.446.077.915C20 18.594 17.668 21 14.75 21H5.4C2.952 21 1 18.982 1 16.533a4.47 4.47 0 0 1 2.556-4.056a6 6 0 0 1-.006-.277c0-3.326 2.588-6.07 5.864-6.195M9.65 8c-2.246 0-4.1 1.862-4.1 4.2q0 .4.07.776l.17.935l-.926.217C3.808 14.375 3 15.348 3 16.533C3 17.914 4.093 19 5.4 19h9.35c1.777 0 3.25-1.474 3.25-3.333c0-.46-.09-.894-.251-1.288c-.496-1.212-1.66-2.046-2.999-2.046h-.054l-.863.015l-.14-.852c-.308-1.872-1.82-3.306-3.665-3.478A4 4 0 0 0 9.65 8"></svg:path>`,
})
export class TdesignCloudyDayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudyNightIcon],svg[tdesign-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.133.92l-.102 1.186q-.017.194-.017.393a4.506 4.506 0 0 0 4.9 4.49l1.185-.103l-.103 1.185a6.5 6.5 0 0 1-2.162 4.3a5.2 5.2 0 0 1 1.186 3.31c0 2.983-2.501 5.338-5.505 5.338H6.604C4.097 21.019 2 19.052 2 16.549c0-1.833 1.126-3.38 2.709-4.076a6 6 0 0 1-.006-.263c0-3.147 2.398-5.7 5.464-6.139a6.51 6.51 0 0 1 5.782-5.048zM12.232 6.1q.235.04.464.097c2.15.53 3.883 2.121 4.538 4.19c.723.092 1.404.32 2.013.658l.032.018a4.5 4.5 0 0 0 1.5-2.1a6.51 6.51 0 0 1-5.723-5.723a4.52 4.52 0 0 0-2.824 2.86m-1.123 1.904h-.064c-2.44.034-4.342 1.938-4.342 4.206q0 .395.073.766l.184.956l-.95.21C4.833 14.402 4 15.403 4 16.548c0 1.33 1.13 2.47 2.604 2.47h9.91c1.972 0 3.506-1.53 3.506-3.338c0-1.052-.512-2-1.333-2.62a3.6 3.6 0 0 0-2.231-.718l-.855.014l-.146-.841c-.283-1.624-1.553-2.96-3.239-3.377a4.6 4.6 0 0 0-1.107-.134"></svg:path>`,
})
export class TdesignCloudyNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudyNightFilledIcon],svg[tdesign-cloudy-night-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.133.92l-.102 1.186q-.017.194-.017.393a4.506 4.506 0 0 0 4.9 4.49l1.185-.103l-.103 1.185a6.5 6.5 0 0 1-2.162 4.3a5.2 5.2 0 0 1 1.186 3.31c0 2.983-2.501 5.338-5.505 5.338H5.604C3.097 21.019 1 19.052 1 16.549c0-1.833 1.126-3.38 2.709-4.076a6 6 0 0 1-.006-.263c0-3.147 2.399-5.7 5.464-6.139a6.51 6.51 0 0 1 5.782-5.048zM10.11 8.005h-.064c-2.44.034-4.342 1.938-4.342 4.206q0 .395.073.766l.184.956l-.95.21C3.833 14.402 3 15.403 3 16.548c0 1.33 1.13 2.47 2.604 2.47h9.91c1.972 0 3.506-1.53 3.506-3.338c0-1.052-.512-2-1.333-2.62a3.6 3.6 0 0 0-2.231-.718l-.855.014l-.146-.841c-.283-1.624-1.553-2.96-3.239-3.377a4.6 4.6 0 0 0-1.107-.134"></svg:path>`,
})
export class TdesignCloudyNightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
