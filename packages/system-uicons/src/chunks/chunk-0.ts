import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsAirplayIcon],svg[system-uicons-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6.5 14.5l-1-.035c-1.102-.003-2-.932-2-2.034V6.465a2 2 0 0 1 2-2l10-.002a2 2 0 0 1 2 2v6.002a2 2 0 0 1-2 2l-1 .037"></svg:path><svg:path d="m10.5 13.5l-3 3h6z"></svg:path></svg:g>`,
})
export class SystemUiconsAirplayIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsAlignHorizontalIcon],svg[system-uicons-align-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 5.5l3 3l3-3m-3-4v7m-3 7l3-3l3 3m-3-3v7m-7-9h14"></svg:path>`,
})
export class SystemUiconsAlignHorizontalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsAlarmClockIcon],svg[system-uicons-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 4.565h-2a6 6 0 0 0-6 6V12.5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-1.935a6 6 0 0 0-6-6m3.032-1.068c.884-.639 2.089-.71 2.968.003c.906.734 1.258 1.96.822 2.969M6.532 3.544C5.642 2.862 4.4 2.77 3.5 3.5c-.906.734-1.258 1.96-.822 2.97"></svg:path><svg:path d="M10.5 7.5v4H14M5 17l-2 2m13-2l2 2"></svg:path></svg:g>`,
})
export class SystemUiconsAlarmClockIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsAlignVerticalIcon],svg[system-uicons-align-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 7.5l-3 3l3 3m4-3h-7m-7-3l3 3l-3 3m3-3h-7m9-7v14"></svg:path>`,
})
export class SystemUiconsAlignVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsAngleIcon],svg[system-uicons-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 16.5a5 5 0 0 0-5-5"></svg:path><svg:path d="M5.5 5.5v11h11"></svg:path></svg:g>`,
})
export class SystemUiconsAngleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowDownIcon],svg[system-uicons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 13.499l4 4.001l4-4.001m-4 4.001v-13"></svg:path>`,
})
export class SystemUiconsArrowDownIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowBottomLeftIcon],svg[system-uicons-arrow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 7.5v7h7m1-8l-8 8"></svg:path>`,
})
export class SystemUiconsArrowBottomLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowBottomRightIcon],svg[system-uicons-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 7.5v7h-7m-1-8l8 8"></svg:path>`,
})
export class SystemUiconsArrowBottomRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowLeftCircleIcon],svg[system-uicons-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m7.5 11.5l-3-3l3-3m5 3h-8"></svg:path></svg:g>`,
})
export class SystemUiconsArrowLeftCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowDownCircleIcon],svg[system-uicons-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m5.5 9.5l3 3l3-3m-3 3v-8"></svg:path></svg:g>`,
})
export class SystemUiconsArrowDownCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowLeftIcon],svg[system-uicons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.499 6.497L3.5 10.499l4 4.001m9-4h-13"></svg:path>`,
})
export class SystemUiconsArrowLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowRightIcon],svg[system-uicons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13"></svg:path>`,
})
export class SystemUiconsArrowRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArchiveIcon],svg[system-uicons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h14v7.998a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2zm0-3.978h14a1 1 0 0 1 1 1V6.5a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V4.522a1 1 0 0 1 1-1m5 6.978h4"></svg:path>`,
})
export class SystemUiconsArchiveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowTopRightIcon],svg[system-uicons-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v-7h-7m7 0l-8 8"></svg:path>`,
})
export class SystemUiconsArrowTopRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowTopLeftIcon],svg[system-uicons-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 13.5v-7h7m-7 0l8 8"></svg:path>`,
})
export class SystemUiconsArrowTopLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowUpIcon],svg[system-uicons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 7.5l-4-4l-4.029 4m4.029-4v13"></svg:path>`,
})
export class SystemUiconsArrowUpIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowUpCircleIcon],svg[system-uicons-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m11.5 7.5l-3-3l-3 3m3-3v8"></svg:path></svg:g>`,
})
export class SystemUiconsArrowUpCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsArrowRightCircleIcon],svg[system-uicons-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m9.5 11.5l3-3l-3-3m3 3h-8"></svg:path></svg:g>`,
})
export class SystemUiconsArrowRightCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsAudioWaveIcon],svg[system-uicons-audio-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.5v4m2-6v9m2-6v2m2-4v6.814m2-9.814v12"></svg:path>`,
})
export class SystemUiconsAudioWaveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBackspaceIcon],svg[system-uicons-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.328 15.5H15.5a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H8.328a2 2 0 0 0-1.414.586L3.207 9.793a1 1 0 0 0 0 1.414l3.707 3.707a2 2 0 0 0 1.414.586m1.172-3l4-4m-4 0l4 4"></svg:path>`,
})
export class SystemUiconsBackspaceIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBackwardIcon],svg[system-uicons-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 7.5q7.779-.705 10 6c-2.825-3.14-6.341-3.718-10-2v3l-5-5l5-5z"></svg:path>`,
})
export class SystemUiconsBackwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBagIcon],svg[system-uicons-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.426 4.503L14.52 4.5a1 1 0 0 1 .997.92l.894 10.999a1 1 0 0 1-.916 1.078l-.08.003H5.58a1 1 0 0 1-1-1l.003-.077l.846-10.997a1 1 0 0 1 .997-.923"></svg:path><svg:path d="M13.5 8.5v.645c0 1.105-1.895 1.355-3 1.355s-3-.395-3-1.5v-.5"></svg:path></svg:g>`,
})
export class SystemUiconsBagIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBattery75Icon],svg[system-uicons-battery-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5 8h7a1 1 0 0 1 1 1v2.046a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 8.5v3"></svg:path></svg:g>`,
})
export class SystemUiconsBattery75Icon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBatteryChargingIcon],svg[system-uicons-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12.5 6.5l2-.001c1.105-.002 2 .893 2.001 1.997l-.001 3.001a2 2 0 0 1-2 2l-2 .003m-5 0H4.487a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2H6.5"></svg:path><svg:path d="M10.5 9.5H13L9.4 16l.1-5.5h-3l4-6zm8-1v3"></svg:path></svg:g>`,
})
export class SystemUiconsBatteryChargingIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBatteryEmptyIcon],svg[system-uicons-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m14 2v3"></svg:path>`,
})
export class SystemUiconsBatteryEmptyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBatteryFullIcon],svg[system-uicons-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5 8h9a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 8.5v3"></svg:path></svg:g>`,
})
export class SystemUiconsBatteryFullIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBatteryHalfIcon],svg[system-uicons-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 8.5v3"></svg:path></svg:g>`,
})
export class SystemUiconsBatteryHalfIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBatteryLowIcon],svg[system-uicons-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.497h10a2 2 0 0 1 2 2V11.5a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V8.497a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5 8a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 8.5v3"></svg:path></svg:g>`,
})
export class SystemUiconsBatteryLowIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBellIcon],svg[system-uicons-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.5 10.5 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5M13 17q-1 1.5-2.5 1.5C9 18.5 8.667 18 8 17"></svg:path>`,
})
export class SystemUiconsBellIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBellDisabledIcon],svg[system-uicons-bell-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 15.5H5.415A1.65 1.65 0 0 1 4 13a10.5 10.5 0 0 0 1.5-5.415V6.5c0-.274-.053-.741 0-1m1.363-2.008A4 4 0 0 1 9.5 2.5h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415c.238.397.29.854.181 1.269M17.5 17.5l-14-14M13 17q-1 1.5-2.5 1.5C9 18.5 8.667 18 8 17"></svg:path>`,
})
export class SystemUiconsBellDisabledIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBellRingingIcon],svg[system-uicons-bell-ringing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.5 10.5 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5m1.915-11q-.4-1.4-1-2c-.6-.6-1.066-.733-2-1m-10.912 3q.313-1.4.912-2c.599-.6 1.096-.733 2.088-1M13 17q-1 1.5-2.5 1.5C9 18.5 8.667 18 8 17"></svg:path>`,
})
export class SystemUiconsBellRingingIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBellSnoozeIcon],svg[system-uicons-bell-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 7.585c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.416 2.5H5.415A1.65 1.65 0 0 1 4 13a10.5 10.5 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 2.178.645"></svg:path><svg:path d="M10.5 5.5h2l-2 3h2m2-7h3l-3 4h3M13 17q-1 1.5-2.5 1.5C9 18.5 8.667 18 8 17"></svg:path></svg:g>`,
})
export class SystemUiconsBellSnoozeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBluetoothIcon],svg[system-uicons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 6.75l7 7.5L10.5 18V3L14 6.75l-7 7.5"></svg:path>`,
})
export class SystemUiconsBluetoothIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBookIcon],svg[system-uicons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1zm-8 0q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z"></svg:path>`,
})
export class SystemUiconsBookIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBookClosedIcon],svg[system-uicons-book-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3.5h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-9a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path d="M6.5 13.5h10v3a1 1 0 0 1-1 1h-9a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class SystemUiconsBookClosedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBookTextIcon],svg[system-uicons-book-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z"></svg:path><svg:path d="M16.556 7.788Q15.529 7.5 14.5 7.5c-1.029 0-1.37.096-2.056.288m4.112 2Q15.529 9.5 14.5 9.5c-1.029 0-1.37.096-2.056.288m4.112 2Q15.529 11.5 14.5 11.5c-1.029 0-1.37.096-2.056.288m4.112 2Q15.529 13.5 14.5 13.5c-1.029 0-1.37.096-2.056.288m-3.888-6Q7.529 7.5 6.5 7.5c-1.029 0-1.37.096-2.056.288m4.112 2Q7.529 9.5 6.5 9.5c-1.029 0-1.37.096-2.056.288m4.112 2Q7.529 11.5 6.5 11.5c-1.029 0-1.37.096-2.056.288m4.112 2Q7.529 13.5 6.5 13.5c-1.029 0-1.37.096-2.056.288"></svg:path><svg:path d="M10.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z"></svg:path></svg:g>`,
})
export class SystemUiconsBookTextIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBookmarkIcon],svg[system-uicons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5h6a1 1 0 0 1 1 1v12l-4-4l-4 4v-12a1 1 0 0 1 1-1"></svg:path>`,
})
export class SystemUiconsBookmarkIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBookmarkBookIcon],svg[system-uicons-bookmark-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3.5h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path d="M7.5 3.5h4v5.012L9.5 6.5l-2 2.012z"></svg:path></svg:g>`,
})
export class SystemUiconsBookmarkBookIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxIcon],svg[system-uicons-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.492 4.067l5 2.857A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339V8.661a2 2 0 0 1 1.008-1.737l5-2.857a2 2 0 0 1 1.984 0M14 9.5l-7-4"></svg:path><svg:path d="m4 8l5.552 2.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18"></svg:path></svg:g>`,
})
export class SystemUiconsBoxIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxAddIcon],svg[system-uicons-box-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.492 4.067l5 2.857A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339V8.661a2 2 0 0 1 1.008-1.737l5-2.857a2 2 0 0 1 1.984 0M17.5 1.5v4m2-2h-4m-1.5 6l-7-4"></svg:path><svg:path d="m4 8l5.552 2.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18"></svg:path></svg:g>`,
})
export class SystemUiconsBoxAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxDownloadIcon],svg[system-uicons-box-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 13.5v-8a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-3"></svg:path><svg:path d="m7.5 10.5l3 3l3-3"></svg:path></svg:g>`,
})
export class SystemUiconsBoxDownloadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxOpenIcon],svg[system-uicons-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 7.5l7-4l5.992 3.424A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339v-2.802"></svg:path><svg:path d="M9.552 10.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18"></svg:path><svg:path d="m3.5 7.5l7 4l-3 1l-7-4zm7-4l7 4l2-2l-7-4z"></svg:path></svg:g>`,
})
export class SystemUiconsBoxOpenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxRemoveIcon],svg[system-uicons-box-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.492 4.067l5 2.857A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339V8.661a2 2 0 0 1 1.008-1.737l5-2.857a2 2 0 0 1 1.984 0M19.5 3.5h-4m-1.5 6l-7-4"></svg:path><svg:path d="m4 8l5.552 2.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18"></svg:path></svg:g>`,
})
export class SystemUiconsBoxRemoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBoxesIcon],svg[system-uicons-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 15.429l3.548 1.837a1 1 0 0 0 .907.006l2.992-1.496a1 1 0 0 0 .553-.894v-2.764a1 1 0 0 0-.553-.894L14.5 9.5l-3.46 1.792a1 1 0 0 0-.54.888z"></svg:path><svg:path d="m3.04 15.708l3.008 1.558a1 1 0 0 0 .907.006L10.5 15.5v-3.382a1 1 0 0 0-.553-.894L6.5 9.5l-3.46 1.792a1 1 0 0 0-.54.888v2.64a1 1 0 0 0 .54.888M6.5 9.429l3.548 1.837a1 1 0 0 0 .907.006L14.5 9.5V6.118a1 1 0 0 0-.553-.894l-2.992-1.496a1 1 0 0 0-.907.006L7.04 5.292a1 1 0 0 0-.54.888z"></svg:path><svg:path d="m6.846 5.673l3.207 1.603a1 1 0 0 0 .894 0L14.12 5.69h0M8.799 4.649L12.5 6.5m.299 4.149L16.5 12.5M4.799 10.649L8.5 12.5m2.346-.827l3.207 1.603a1 1 0 0 0 .894 0l3.172-1.586h0m-15.273-.017l3.207 1.603a1 1 0 0 0 .894 0l3.172-1.586h0M10.5 7.5v4m4 2V17m-8-3.5V17"></svg:path></svg:g>`,
})
export class SystemUiconsBoxesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBranchIcon],svg[system-uicons-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 8.5v-5h5"></svg:path><svg:path d="m4.5 3.5l6 6v8m2-10l4-4"></svg:path></svg:g>`,
})
export class SystemUiconsBranchIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBriefcaseIcon],svg[system-uicons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 7.5h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m4-3h2a2 2 0 0 1 2 2v1h-6v-1a2 2 0 0 1 2-2"></svg:path>`,
})
export class SystemUiconsBriefcaseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBrowserIcon],svg[system-uicons-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 14.5v-9a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></svg:path><svg:path d="M16.5 13.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1m-8-7.002h8M4.5 6.5h2"></svg:path></svg:g>`,
})
export class SystemUiconsBrowserIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBrowserAltIcon],svg[system-uicons-browser-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 14.5v-9a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></svg:path><svg:path d="M8.5 13.5v-7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m8-6v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m0 6v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsBrowserAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsButtonAddIcon],svg[system-uicons-button-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.5v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-6-7v6.056m3-3.056h-6"></svg:path>`,
})
export class SystemUiconsButtonAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsButtonMinusIcon],svg[system-uicons-button-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.5v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-3-4h-6"></svg:path>`,
})
export class SystemUiconsButtonMinusIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalculatorIcon],svg[system-uicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m-2 5h10"></svg:path><svg:g fill="currentColor" transform="translate(5 4)"><svg:circle cx="2.5" cy="7.5" r="1"></svg:circle><svg:circle cx="4.5" cy="7.5" r="1"></svg:circle><svg:circle cx="6.5" cy="7.5" r="1"></svg:circle><svg:circle cx="8.5" cy="7.5" r="1"></svg:circle><svg:circle cx="2.5" cy="9.5" r="1"></svg:circle><svg:circle cx="4.5" cy="9.5" r="1"></svg:circle><svg:circle cx="6.5" cy="9.5" r="1"></svg:circle><svg:circle cx="8.5" cy="9.5" r="1"></svg:circle><svg:circle cx="2.5" cy="11.5" r="1"></svg:circle><svg:circle cx="4.5" cy="11.5" r="1"></svg:circle><svg:circle cx="6.5" cy="11.5" r="1"></svg:circle><svg:circle cx="8.5" cy="11.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsCalculatorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarIcon],svg[system-uicons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16"></svg:path>`,
})
export class SystemUiconsCalendarIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarAddIcon],svg[system-uicons-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16m-8 3v6.056m3-3.056h-6"></svg:path>`,
})
export class SystemUiconsCalendarAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarDateIcon],svg[system-uicons-calendar-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v11.99a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2m-1.841 4H18.5"></svg:path><svg:path fill="currentColor" d="M6.816 13.155v-1.079h.88c.668 0 1.122-.395 1.122-.972c0-.527-.415-.927-1.103-.927c-.713 0-1.152.366-1.201.996H5.15C5.201 9.874 6.201 9 7.788 9c1.563 0 2.432.864 2.427 1.895c-.005.854-.542 1.416-1.299 1.601v.093c.981.141 1.577.766 1.577 1.709c0 1.235-1.162 2.11-2.754 2.11S5.063 15.537 5 14.204h1.411c.044.596.552.977 1.309.977c.747 0 1.27-.406 1.27-1.016c0-.625-.489-1.01-1.28-1.01zm6.7 3.072v-5.611h-.087L11.7 11.808v-1.372l1.821-1.255h1.47v7.046z"></svg:path></svg:g>`,
})
export class SystemUiconsCalendarDateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarDayIcon],svg[system-uicons-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h12.027a2 2 0 0 1 2 2v11.99a2 2 0 0 1-1.85 1.995l-.16.006l-12.027-.058a2 2 0 0 1-1.99-2V2.5a2 2 0 0 1 2-2m-2 4h16.027"></svg:path><svg:circle cx="4.5" cy="8.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsCalendarDayIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarDaysIcon],svg[system-uicons-calendar-days-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16"></svg:path><svg:g fill="currentColor" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="1"></svg:circle><svg:circle cx="4.5" cy="8.5" r="1"></svg:circle><svg:circle cx="4.5" cy="12.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsCalendarDaysIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarLastDayIcon],svg[system-uicons-calendar-last-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h12.027a2 2 0 0 1 2 2v11.99a2 2 0 0 1-1.85 1.995l-.16.006l-12.027-.058a2 2 0 0 1-1.99-2V2.5a2 2 0 0 1 2-2m-2 4h16.027"></svg:path><svg:circle cx="12.5" cy="12.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsCalendarLastDayIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarMonthIcon],svg[system-uicons-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16"></svg:path><svg:g fill="currentColor" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="1"></svg:circle><svg:circle cx="4.5" cy="8.5" r="1"></svg:circle><svg:circle cx="12.5" cy="8.5" r="1"></svg:circle><svg:circle cx="8.5" cy="12.5" r="1"></svg:circle><svg:circle cx="4.5" cy="12.5" r="1"></svg:circle><svg:circle cx="12.5" cy="12.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsCalendarMonthIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarMoveIcon],svg[system-uicons-calendar-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 10.462v-6.03a2 2 0 0 1 2-2h.01l12 .058a2 2 0 0 1 1.99 2v12a2 2 0 0 1-2 2h-.01l-12-.057a2 2 0 0 1-1.99-2V14.5m0-8h16"></svg:path><svg:path d="m8.5 15.5l3-3l-3-3m3 3h-10"></svg:path></svg:g>`,
})
export class SystemUiconsCalendarMoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarRemoveIcon],svg[system-uicons-calendar-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16m-5 6h-6"></svg:path>`,
})
export class SystemUiconsCalendarRemoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarSplitIcon],svg[system-uicons-calendar-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16m-8 0v12"></svg:path>`,
})
export class SystemUiconsCalendarSplitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarWeekIcon],svg[system-uicons-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16m-13 3v6m2-6v6m2-6v6m2-6v6m2-6v6m2-6v6"></svg:path>`,
})
export class SystemUiconsCalendarWeekIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCameraIcon],svg[system-uicons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 14.5v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" d="M17 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 11.5a3 3 0 1 0-6 0a3 3 0 0 0 6 0m-4-7h2a1 1 0 0 1 1 1v1h-4v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsCameraIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCameraAltIcon],svg[system-uicons-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 14.5v-6a2 2 0 0 1 2-2h2l2.079-2h3.92l1.92 2H16.5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2"></svg:path><svg:path d="M13.5 11.5a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class SystemUiconsCameraAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCameraNoflashIcon],svg[system-uicons-camera-noflash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 6.5h8a2 2 0 0 1 2 2v6c0 .559-.229 1.064-.598 1.427M15.5 16.5h-11a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1m-2-2l14 14"></svg:path><svg:path fill="currentColor" d="M17 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.215 9.557a3 3 0 0 0 4.27 4.193M13.5 11.5a3 3 0 0 0-3-3m-1-4h2a1 1 0 0 1 1 1v1h-4v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsCameraNoflashIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCameraNoflashAltIcon],svg[system-uicons-camera-noflash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.54 5.5l1.039-1h3.92l1.92 2H16.5a2 2 0 0 1 2 2v6c0 .502-.185.961-.49 1.312m-2.51.688h-11a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1m-2-2l14 14"></svg:path><svg:path d="M8.306 9.454a3 3 0 0 0 4.202 4.275M13.5 11.5a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SystemUiconsCameraNoflashAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCaptureIcon],svg[system-uicons-capture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 7.5V4.494a2 2 0 0 0-1.994-2L13.5 2.485m5 11.015v3a2 2 0 0 1-2 2h-3m-6-16.015l-3.006.01a2 2 0 0 0-1.994 2V7.5m5 11h-3a2 2 0 0 1-2-2v-3"></svg:path>`,
})
export class SystemUiconsCaptureIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCardTimelineIcon],svg[system-uicons-card-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 5.5h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m13 0h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-5-1h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"></svg:path>`,
})
export class SystemUiconsCardTimelineIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCardViewIcon],svg[system-uicons-card-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m8 2.5h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1zm-10 0h-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1z"></svg:path>`,
})
export class SystemUiconsCardViewIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCarouselIcon],svg[system-uicons-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 5.5h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m4 0v10m-16-10v10"></svg:path>`,
})
export class SystemUiconsCarouselIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCartIcon],svg[system-uicons-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 6.5h12.5l-1.586 5.55a2 2 0 0 1-1.923 1.45h-6.7a2 2 0 0 1-1.989-1.78L4.5 4.5h-2"></svg:path><svg:g fill="currentColor" transform="translate(2 4)"><svg:circle cx="5" cy="12" r="1"></svg:circle><svg:circle cx="13" cy="12" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsCartIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCastIcon],svg[system-uicons-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m-2 0a8 8 0 0 0-8-8m5 8a5 5 0 0 0-5-5m2 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class SystemUiconsCastIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChainIcon],svg[system-uicons-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4c-1.136-1.157-2.864-1.157-4 0l-2 2"></svg:path><svg:path d="M11.5 10.57c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025c1.136 1.157 2.864 1.157 4 0l2-2"></svg:path></svg:g>`,
})
export class SystemUiconsChainIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChatAddIcon],svg[system-uicons-chat-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.418 4.214A9.3 9.3 0 0 0 10.5 3.75c-4.418 0-8 3.026-8 6.759c0 1.457.546 2.807 1.475 3.91L3 19l3.916-2.447a9.2 9.2 0 0 0 3.584.714c4.418 0 8-3.026 8-6.758c0-.685-.12-1.346-.345-1.969M16.5 3.5v4m2-2h-4"></svg:path>`,
})
export class SystemUiconsChatAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCheckIcon],svg[system-uicons-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 11.5l3 3l8.028-8"></svg:path>`,
})
export class SystemUiconsCheckIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCheckCircleIcon],svg[system-uicons-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m5.5 9.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SystemUiconsCheckCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCheckCircleOutsideIcon],svg[system-uicons-check-circle-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.857 3.79a8 8 0 1 0 2.852 3.24"></svg:path><svg:path d="m6.5 9.5l3 3l8-8"></svg:path></svg:g>`,
})
export class SystemUiconsCheckCircleOutsideIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCheckboxCheckedIcon],svg[system-uicons-checkbox-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path d="m7.5 10.5l2 2l4-4"></svg:path></svg:g>`,
})
export class SystemUiconsCheckboxCheckedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCheckboxEmptyIcon],svg[system-uicons-checkbox-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path>`,
})
export class SystemUiconsCheckboxEmptyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronCloseIcon],svg[system-uicons-chevron-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 15.5l3-3l3 3m-6-9l3 3l3-3"></svg:path>`,
})
export class SystemUiconsChevronCloseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronDownIcon],svg[system-uicons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 8.5l-4 4l-4-4"></svg:path>`,
})
export class SystemUiconsChevronDownIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronDownCircleIcon],svg[system-uicons-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m5.466 7.466l3 3.068l3-3.068"></svg:path></svg:g>`,
})
export class SystemUiconsChevronDownCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronDownDoubleIcon],svg[system-uicons-chevron-down-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 6.5l-4 4l-4-4m8 4l-4 4l-4-4"></svg:path>`,
})
export class SystemUiconsChevronDownDoubleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronLeftIcon],svg[system-uicons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 14.5l-4-4l4-4"></svg:path>`,
})
export class SystemUiconsChevronLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronLeftCircleIcon],svg[system-uicons-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m9.55 11.4l-3-2.9l3-3"></svg:path></svg:g>`,
})
export class SystemUiconsChevronLeftCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronLeftDoubleIcon],svg[system-uicons-chevron-left-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 14.5l-4-4l4-4m-4 8l-4-4l4-4"></svg:path>`,
})
export class SystemUiconsChevronLeftDoubleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronOpenIcon],svg[system-uicons-chevron-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 8.5l3-3l3 3m-6 5l3 3l3-3"></svg:path>`,
})
export class SystemUiconsChevronOpenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronRightIcon],svg[system-uicons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 14.5l4-4l-4-4"></svg:path>`,
})
export class SystemUiconsChevronRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronRightCircleIcon],svg[system-uicons-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m7.5 11.5l3-3l-3.068-3"></svg:path></svg:g>`,
})
export class SystemUiconsChevronRightCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronRightDoubleIcon],svg[system-uicons-chevron-right-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 14.5l4-4l-4-4m4 8l4-4l-4-4"></svg:path>`,
})
export class SystemUiconsChevronRightDoubleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronUpIcon],svg[system-uicons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 12.5l4-4l4 4"></svg:path>`,
})
export class SystemUiconsChevronUpIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronUpCircleIcon],svg[system-uicons-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m11.5 9.5l-3-3l-3 3"></svg:path></svg:g>`,
})
export class SystemUiconsChevronUpCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsChevronUpDoubleIcon],svg[system-uicons-chevron-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 14.5l4-4l4 4m-8-4l4-4l4 4"></svg:path>`,
})
export class SystemUiconsChevronUpDoubleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCircleIcon],svg[system-uicons-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.5" cy="10.5" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class SystemUiconsCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCircleMenuIcon],svg[system-uicons-circle-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="currentColor" d="M8.5 9.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m-4 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m8 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"></svg:path></svg:g>`,
})
export class SystemUiconsCircleMenuIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCircleSplitIcon],svg[system-uicons-circle-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m8.527.5l-.027 16"></svg:path></svg:g>`,
})
export class SystemUiconsCircleSplitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardIcon],svg[system-uicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 4.5c-.441 0-1.039-.004-1.998-.005a1 1 0 0 0-.995.881l-.007.12v10.997a1 1 0 0 0 1 1l10 .006a1 1 0 0 0 .994-.882l.006-.117v-11a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m-2 5h5m-5 2h7m-7 2h3m-3 2h6"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardAddIcon],svg[system-uicons-clipboard-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m2 5v6.056m3-3.056h-6"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardCheckIcon],svg[system-uicons-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m-1 8l2 2l5-5"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardCheckIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardCopyIcon],svg[system-uicons-clipboard-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 14.5l-3-3l3-3m-3 3h11"></svg:path><svg:path d="M16.5 9.5V5.495a1 1 0 0 0-.883-.993l-.12-.007L13.5 4.5m-6 0l-1.998-.005a1 1 0 0 0-.995.881l-.007.12v10.997a1 1 0 0 0 1 1l10 .006a1 1 0 0 0 .994-.882l.006-.117V14"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardCopyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardCrossIcon],svg[system-uicons-clipboard-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m-1 5l6 6m0-6l-6 6"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardCrossIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardNotesIcon],svg[system-uicons-clipboard-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m1 5h5m-5 3h5m-5 3h5m-8-6h1m-1 3h1m-1 3h1"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardNotesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClipboardRemoveIcon],svg[system-uicons-clipboard-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"></svg:path><svg:path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m5 8h-6"></svg:path></svg:g>`,
})
export class SystemUiconsClipboardRemoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsClockIcon],svg[system-uicons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 19 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="M8.5 5.5v4H5"></svg:path></svg:g>`,
})
export class SystemUiconsClockIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloseIcon],svg[system-uicons-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 7.5l6 6m0-6l-6 6"></svg:path>`,
})
export class SystemUiconsCloseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloudIcon],svg[system-uicons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 5.5a5 5 0 0 1 4.802 6.399A2 2 0 1 1 16.5 15.5h-11a3 3 0 1 1 .1-5.998A5 5 0 0 1 10.5 5.5"></svg:path>`,
})
export class SystemUiconsCloudIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloudDisconnectIcon],svg[system-uicons-cloud-disconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.739 5.819a5 5 0 0 1 6.563 6.08a2 2 0 1 1 2.234 3.312m-2.104.289H5.5a3 3 0 1 1 .1-5.998a5 5 0 0 1 1.286-2.457M4 4l13 13.071"></svg:path>`,
})
export class SystemUiconsCloudDisconnectIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloudDownloadIcon],svg[system-uicons-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 5.5a5 5 0 0 1 4.802 6.399A2 2 0 1 1 16.5 15.5h-11a3 3 0 1 1 .1-5.998A5 5 0 0 1 10.5 5.5"></svg:path><svg:path d="m12.5 11.5l-2 2l-2-2m2-4v6"></svg:path></svg:g>`,
})
export class SystemUiconsCloudDownloadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloudDownloadAltIcon],svg[system-uicons-cloud-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 15.5h-4c-1.152-.419-2-1.703-2-3a3 3 0 0 1 3.1-2.998a5.002 5.002 0 1 1 9.702 2.397A2 2 0 1 1 16.5 15.5h-4m-4 2l2 2l2-2m-2-8v10"></svg:path>`,
})
export class SystemUiconsCloudDownloadAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloudUploadIcon],svg[system-uicons-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 5.5a5 5 0 0 1 4.802 6.399A2 2 0 1 1 16.5 15.5h-11a3 3 0 1 1 .1-5.998A5 5 0 0 1 10.5 5.5"></svg:path><svg:path d="m8.5 9.5l2-2l2 2m-2-2v6"></svg:path></svg:g>`,
})
export class SystemUiconsCloudUploadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCloudUploadAltIcon],svg[system-uicons-cloud-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.578 6.56A4.99 4.99 0 0 1 15.5 10.5c0 .485-.07.955-.198 1.399A2 2 0 1 1 16.5 15.5h-11a3 3 0 1 1 .1-5.998A5 5 0 0 1 7.447 6.54M8.5 4.5l2-2l2 2m-2-2v9"></svg:path>`,
})
export class SystemUiconsCloudUploadAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCodeIcon],svg[system-uicons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 3.5l-4 14m-2-5l-4-4l4-4m8 12l4-4l-4-4"></svg:path>`,
})
export class SystemUiconsCodeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCoffeeIcon],svg[system-uicons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.5h6a2 2 0 0 1 2 2V13a4.5 4.5 0 0 1-4.5 4.5H9A4.5 4.5 0 0 1 4.5 13v-2.5a2 2 0 0 1 2-2m8 2h1a2 2 0 1 1 0 4h-1m-6-8v-4m2 4v-2"></svg:path>`,
})
export class SystemUiconsCoffeeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCoinIcon],svg[system-uicons-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 9.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3z"></svg:path><svg:path d="M10.5 12.484c3.866 0 7-1.606 7-2.986S14.366 6.5 10.5 6.5s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986"></svg:path></svg:g>`,
})
export class SystemUiconsCoinIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCoinsIcon],svg[system-uicons-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 11.5v3c0 1.3-3.134 3-7 3s-7-1.7-7-3V12"></svg:path><svg:path d="M4.794 12.259c.865 1.148 3.54 2.225 6.706 2.225c3.866 0 7-1.606 7-2.986c0-.775-.987-1.624-2.536-2.22"></svg:path><svg:path d="M15.5 6.5v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3"></svg:path><svg:path d="M8.5 9.484c3.866 0 7-1.606 7-2.986S12.366 3.5 8.5 3.5s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986"></svg:path></svg:g>`,
})
export class SystemUiconsCoinsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCompassIcon],svg[system-uicons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m10.5 9.5l-4 3v-5l4-3z"></svg:path></svg:g>`,
})
export class SystemUiconsCompassIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsComponentAddIcon],svg[system-uicons-component-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-4m0-8v6m3-3h-6"></svg:path>`,
})
export class SystemUiconsComponentAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsContactsIcon],svg[system-uicons-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="7.5" cy="5.5" r="2"></svg:circle><svg:path d="M.5 3.5h1v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1h-1m0-4h1m-1-2h1m-1 4h1"></svg:path><svg:path d="M10.5 10.5v-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsContactsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsContractIcon],svg[system-uicons-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 16.5v-4.978l-5-.022m14-9l-7 7m5 0l-5 .023V4.5m-2 7l-7 7"></svg:path>`,
})
export class SystemUiconsContractIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCreateIcon],svg[system-uicons-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 4.5H5.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V11"></svg:path><svg:path d="M17.5 3.467a1.46 1.46 0 0 1-.017 2.05L10.5 12.5l-3 1l1-3l6.987-7.046a1.41 1.41 0 0 1 1.885-.104zm-2 2.033l.953 1"></svg:path></svg:g>`,
})
export class SystemUiconsCreateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCreditCardIcon],svg[system-uicons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 5.5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M2 9h17v2H2z"></svg:path></svg:g>`,
})
export class SystemUiconsCreditCardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCropIcon],svg[system-uicons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 7.5h4v4m0 2v3m-6-9H4"></svg:path><svg:path d="M7.5 4.5v9h9"></svg:path></svg:g>`,
})
export class SystemUiconsCropIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCrossIcon],svg[system-uicons-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 15.5l-10-10zm0-10l-10 10"></svg:path>`,
})
export class SystemUiconsCrossIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCrossCircleIcon],svg[system-uicons-cross-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m5.5 5.5l6 6m0-6l-6 6"></svg:path></svg:g>`,
})
export class SystemUiconsCrossCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCrosshairIcon],svg[system-uicons-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 16.5c3.329 0 6-2.645 6-5.973S13.829 4.5 10.5 4.5s-6 2.698-6 6.027s2.671 5.973 6 5.973m-6-6h2m8 0h2m-6-6v2m0 8v2"></svg:path>`,
})
export class SystemUiconsCrosshairIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCubeIcon],svg[system-uicons-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.492 4.067l5 2.857A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339V8.661a2 2 0 0 1 1.008-1.737l5-2.857a2 2 0 0 1 1.984 0M10.5 11.5V18"></svg:path><svg:path d="m4 8l5.552 2.99a2 2 0 0 0 1.896 0L17 8"></svg:path></svg:g>`,
})
export class SystemUiconsCubeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCubesIcon],svg[system-uicons-cubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 15.429l3.548 1.837a1 1 0 0 0 .907.006l2.992-1.496a1 1 0 0 0 .553-.894v-2.764a1 1 0 0 0-.553-.894L14.5 9.5l-3.46 1.792a1 1 0 0 0-.54.888z"></svg:path><svg:path d="m3.04 15.708l3.008 1.558a1 1 0 0 0 .907.006L10.5 15.5v-3.382a1 1 0 0 0-.553-.894L6.5 9.5l-3.46 1.792a1 1 0 0 0-.54.888v2.64a1 1 0 0 0 .54.888M6.5 9.429l3.548 1.837a1 1 0 0 0 .907.006L14.5 9.5V6.118a1 1 0 0 0-.553-.894l-2.992-1.496a1 1 0 0 0-.907.006L7.04 5.292a1 1 0 0 0-.54.888z"></svg:path><svg:path d="m6.846 5.673l3.207 1.603a1 1 0 0 0 .894 0L14.12 5.69h0m-3.274 5.983l3.207 1.603a1 1 0 0 0 .894 0l3.172-1.586h0m-15.273-.017l3.207 1.603a1 1 0 0 0 .894 0l3.172-1.586h0M10.5 7.5v4m4 2V17m-8-3.5V17"></svg:path></svg:g>`,
})
export class SystemUiconsCubesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCylinderIcon],svg[system-uicons-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 5.353c0-1.3 2-2.853 5-2.853s5 1.553 5 2.853v10.294c0 1.3-2 2.853-5 2.853s-5-1.553-5-2.853z"></svg:path><svg:path d="M5.5 5.5c0 1.38 2 3 5 3s5-1.62 5-3"></svg:path></svg:g>`,
})
export class SystemUiconsCylinderIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDatabaseIcon],svg[system-uicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 5.206c0-1.3 2.5-2.741 6-2.706s6 1.553 6 2.853v10.294c0 1.3-2.5 2.853-6 2.853s-6-1.7-6-3z"></svg:path><svg:path d="M4.5 5.5c0 1.38 2 3 6 3s6-1.637 6-3.018M4.5 10.5c0 1.38 2 3 6 3s6-1.637 6-3.018"></svg:path></svg:g>`,
})
export class SystemUiconsDatabaseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDiamondIcon],svg[system-uicons-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m15.5 4l3 4l-8 10l-8-10l3.009-4zm-13 4h16m-11 0l3 10m3-10l-3 10"></svg:path><svg:path d="M5.509 4L7.5 8l3-4l3 4l2-4"></svg:path></svg:g>`,
})
export class SystemUiconsDiamondIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDirectionsIcon],svg[system-uicons-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h11l2 2l-2 2h-11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m12 7h-11l-2 2l2 2h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-6-3v3m0 4v3"></svg:path>`,
})
export class SystemUiconsDirectionsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDiscIcon],svg[system-uicons-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:circle cx="10.5" cy="10.5" r="2"></svg:circle></svg:g>`,
})
export class SystemUiconsDiscIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDisplayIcon],svg[system-uicons-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 3.5h11a2 2 0 0 1 2 2v6.049a2 2 0 0 1-1.85 1.994l-.158.006l-11-.042a2 2 0 0 1-1.992-2V5.5a2 2 0 0 1 2-2m.464 12H15.5m-8 2h6"></svg:path>`,
})
export class SystemUiconsDisplayIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDisplayAltIcon],svg[system-uicons-display-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 7.5h11a2 2 0 0 1 2 2v6.049a2 2 0 0 1-1.85 1.994l-.158.006l-11-.042a2 2 0 0 1-1.992-2V9.5a2 2 0 0 1 2-2m.464-2H15.5m-8-2h6"></svg:path>`,
})
export class SystemUiconsDisplayAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDocumentIcon],svg[system-uicons-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.5 15.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-10-5h5m-5 2h7m-7 2h3"></svg:path><svg:path d="M11.5 3.5v3a2 2 0 0 0 2 2h3"></svg:path></svg:g>`,
})
export class SystemUiconsDocumentIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDocumentJustifiedIcon],svg[system-uicons-document-justified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="systemUiconsDocumentJustified0" d="M16.5 15.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-9-8h6m-6 3h6m-6 3h6"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:use href="#systemUiconsDocumentJustified0"></svg:use><svg:use href="#systemUiconsDocumentJustified0"></svg:use></svg:g>`,
})
export class SystemUiconsDocumentJustifiedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDocumentListIcon],svg[system-uicons-document-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 15.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-7-8h5m-8 0h1m2 3h5m-8 0h1m2 3h5m-8 0h1"></svg:path>`,
})
export class SystemUiconsDocumentListIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDocumentStackIcon],svg[system-uicons-document-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 14.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="m5.305 4.935l-2.004.73a2 2 0 0 0-1.195 2.563l3.42 9.397A2 2 0 0 0 8.09 18.82l5.568-2.198M8.5 7.5h5m-5 2h6m-6 2h3"></svg:path></svg:g>`,
})
export class SystemUiconsDocumentStackIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDocumentWordsIcon],svg[system-uicons-document-words-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 15.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m-9-7h5m-5 2h6m-6 2h3"></svg:path>`,
})
export class SystemUiconsDocumentWordsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDoorIcon],svg[system-uicons-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(4 3)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.202 14.5l-3.645-1.948A2 2 0 0 1 5.5 10.788V4.212a2 2 0 0 1 1.057-1.764L10.202.5"></svg:path><svg:circle cx="7.5" cy="7.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsDoorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDoorAltIcon],svg[system-uicons-door-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(4 1)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5h2v14h-2a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2M7.202.513l4 1.5A2 2 0 0 1 12.5 3.886v11.228a2 2 0 0 1-1.298 1.873l-4 1.5A2 2 0 0 1 4.5 16.614V2.386A2 2 0 0 1 7.202.513"></svg:path><svg:circle cx="6.5" cy="9.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsDoorAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDownloadIcon],svg[system-uicons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 10.5l4 4.232l4-4.191m-4-7.041v11m-6 3h12"></svg:path>`,
})
export class SystemUiconsDownloadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDownloadAltIcon],svg[system-uicons-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.5 11.5l-3.978 4l-4.022-4m4.022-7.979V15.5"></svg:path><svg:path d="M3.5 12v4.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V12"></svg:path></svg:g>`,
})
export class SystemUiconsDownloadAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDownwardIcon],svg[system-uicons-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.23 10.23Q12.125 4.544 17.5 6.5q-5.328.968-7.371 6.63L12.5 15.5h-8v-8z"></svg:path>`,
})
export class SystemUiconsDownwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDragIcon],svg[system-uicons-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h12m-12.002 3h11.997M4.5 13.5h11.995"></svg:path>`,
})
export class SystemUiconsDragIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDragCircleIcon],svg[system-uicons-drag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:path d="M6.5 8.5h8m-8 2h8m-8 2h8"></svg:path></svg:g>`,
})
export class SystemUiconsDragCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDragVerticalIcon],svg[system-uicons-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5h2v2H7zm5 0h2v2h-2zM7 9h2v2H7zm5 0h2v2h-2zm-5 4h2v2H7zm5 0h2v2h-2z"></svg:path>`,
})
export class SystemUiconsDragVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDuplicateIcon],svg[system-uicons-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 12.5v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="M6.5 6.503h-2a2 2 0 0 0-2 2V16.5a2 2 0 0 0 2 2h.003l8-.014a2 2 0 0 0 1.997-2v-1.983m-2-9.003v6m3-3h-6"></svg:path></svg:g>`,
})
export class SystemUiconsDuplicateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDuplicateAltIcon],svg[system-uicons-duplicate-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 16.5v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="M14.5 14.5h2a2 2 0 0 0 2-2V4.503a2 2 0 0 0-2-2h-.003l-8 .014a2 2 0 0 0-1.997 2V6.5m2 3v6m3-3h-6"></svg:path></svg:g>`,
})
export class SystemUiconsDuplicateAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEnterIcon],svg[system-uicons-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.5 13.5l3-3l-3-3m3 3h-9"></svg:path><svg:path d="M4.5 8.5V5.492a2 2 0 0 1 1.992-2l7.952-.032a2 2 0 0 1 2.008 1.993l.04 10.029A2 2 0 0 1 14.5 17.49h-8a2 2 0 0 1-2-2V12.5"></svg:path></svg:g>`,
})
export class SystemUiconsEnterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEnterAltIcon],svg[system-uicons-enter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 13.535l-3-3.035l3-3m7 3h-10"></svg:path><svg:path d="M16.5 8.5V5.54a2 2 0 0 0-1.992-2l-8-.032A2 2 0 0 0 4.5 5.5v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"></svg:path></svg:g>`,
})
export class SystemUiconsEnterAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEpisodesIcon],svg[system-uicons-episodes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 16.5v-6a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2"></svg:path><svg:path d="M16.5 16.5V9.505a3 3 0 0 0-3-3h-.005L4.5 6.521"></svg:path><svg:path d="M18.5 14.5V8.507a4 4 0 0 0-4-4h-.007L6.5 4.52"></svg:path></svg:g>`,
})
export class SystemUiconsEpisodesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsExitLeftIcon],svg[system-uicons-exit-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.405 13.5l-2.905-3l2.905-3m-2.905 3h9m-6-7l8 .002c1.104.001 2 .896 2 2v9.995a2 2 0 0 1-2 2l-8 .003"></svg:path>`,
})
export class SystemUiconsExitLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsExitRightIcon],svg[system-uicons-exit-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.595 13.5l2.905-3l-2.905-3m2.905 3h-9m6-7l-8 .002c-1.104.001-2 .896-2 2v9.995a2 2 0 0 0 2 2h8.095"></svg:path>`,
})
export class SystemUiconsExitRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsExpandIcon],svg[system-uicons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 7.5v-5h-5m5 0l-6 5.929M7.5 18.5l-5 .023V13.5m6-1l-6 6"></svg:path>`,
})
export class SystemUiconsExpandIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsExpandHeightIcon],svg[system-uicons-expand-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.51 1.51H2.49m16.02 18H2.49m4.006-5.992l4 4l4.015-4m-8.015-6l4-4l4.015 4M10.51 17.51v-14"></svg:path>`,
})
export class SystemUiconsExpandHeightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsExpandWidthIcon],svg[system-uicons-expand-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5v16.021M19.5 2.5v16.021m-5.993-4.006l4-4l-4-4.015m-6 8.015l-4-4l4-4.015m9.993 4h-14"></svg:path>`,
})
export class SystemUiconsExpandWidthIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsExternalIcon],svg[system-uicons-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 8.5v-5h-5m5 0l-7 7m-1-7h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4"></svg:path>`,
})
export class SystemUiconsExternalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEyeIcon],svg[system-uicons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 16q4.695 0 8.5-5.5Q15.195 5 10.5 5T2 10.5Q5.805 16 10.5 16"></svg:path><svg:path d="M10.5 7q.277 0 .543.042a2.5 2.5 0 0 0 2.915 2.916q.042.264.042.542A3.5 3.5 0 1 1 10.5 7"></svg:path></svg:g>`,
})
export class SystemUiconsEyeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEyeClosedIcon],svg[system-uicons-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 10.5Q5.805 16 10.5 16t8.5-5.5M4.5 13.423l-2 2.077m14-2.077l2 2.077m-6 .5l1 2.5m-5-2.5l-1 2.5"></svg:path>`,
})
export class SystemUiconsEyeClosedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEyeNoIcon],svg[system-uicons-eye-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.211 6.26Q3.985 7.63 2 10.5Q5.805 16 10.5 16q2.135 0 4.085-1.137m1.588-1.14Q17.643 12.46 19 10.5Q15.195 5 10.5 5q-1.245 0-2.429.387M4 4l13 13.071"></svg:path>`,
})
export class SystemUiconsEyeNoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFaceDelightedIcon],svg[system-uicons-face-delighted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5q1 3 4 3t4-3z"></svg:path></svg:g>`,
})
export class SystemUiconsFaceDelightedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFaceHappyIcon],svg[system-uicons-face-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.5q.904 2 3 2c2.096 0 2.397-.667 3-2"></svg:path></svg:g>`,
})
export class SystemUiconsFaceHappyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFaceNeutralIcon],svg[system-uicons-face-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.5h6"></svg:path></svg:g>`,
})
export class SystemUiconsFaceNeutralIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFaceSadIcon],svg[system-uicons-face-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 16.5a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.5q.904-2 3-2c2.096 0 2.397.667 3 2"></svg:path></svg:g>`,
})
export class SystemUiconsFaceSadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFileDownloadIcon],svg[system-uicons-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 3.5H6.498a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l.002-8l-4-4"></svg:path><svg:path d="m13.5 10.586l-3 2.914l-3-2.914m3-8.086v11"></svg:path></svg:g>`,
})
export class SystemUiconsFileDownloadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFileUploadIcon],svg[system-uicons-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 17.5h2a2 2 0 0 0 2-2v-8l-4-4h-6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2"></svg:path><svg:path d="m7.5 10.5l3-3l3 3m-3-3v11"></svg:path></svg:g>`,
})
export class SystemUiconsFileUploadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilesHistoryIcon],svg[system-uicons-files-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 14.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="M11.5 6.5v4h3m-9-6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SystemUiconsFilesHistoryIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilesMultiIcon],svg[system-uicons-files-multi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 14.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="M3.5 4.5v10a4 4 0 0 0 4 4h8m-3-16v3a2 2 0 0 0 2 2h3"></svg:path></svg:g>`,
})
export class SystemUiconsFilesMultiIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilesStackIcon],svg[system-uicons-files-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 14.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="M12.5 2.5v3a2 2 0 0 0 2 2h3m-12-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SystemUiconsFilesStackIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilmIcon],svg[system-uicons-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m1 0v12m8-12v12m0-9h3m-3 6h3m-14-6h3m-3 3h14m-14 3h3"></svg:path>`,
})
export class SystemUiconsFilmIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilterIcon],svg[system-uicons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h12m-10 3h8m-6 3h4"></svg:path>`,
})
export class SystemUiconsFilterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilterCircleIcon],svg[system-uicons-filter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:path d="M6.5 8.5h8m-6 2h4m-3 2h2"></svg:path></svg:g>`,
})
export class SystemUiconsFilterCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilterSingleIcon],svg[system-uicons-filter-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 8V2.5m0 16V13"></svg:path><svg:circle cx="10.5" cy="10.5" r="2.5"></svg:circle></svg:g>`,
})
export class SystemUiconsFilterSingleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFilteringIcon],svg[system-uicons-filtering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m4 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m12-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-1 2h-11m16 0h-3"></svg:path>`,
})
export class SystemUiconsFilteringIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFingerprintIcon],svg[system-uicons-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.5 12.53c0 2.745-1.255 5.97-6 5.97a8.2 8.2 0 0 1-2.015-.232m-1.761-.781C5.034 16.317 4.5 14.32 4.5 12.53V8.5c0-1.566.655-2.98 1.705-3.981m1.672-1.354A5.5 5.5 0 0 1 10.5 2.5c1.753 0 3.493.723 4.5 2m1.206 1.22c.19.559.294 1.157.294 1.78v3"></svg:path><svg:path d="M10.5 16.5q-2-1-2-2.97V8.5a2 2 0 1 1 4 0v4.03q0 1 1 1c1 0 1-.333 1-1V8.066a3 3 0 0 0-.304-1.316Q13.098 4.5 10.5 4.5T6.804 6.75A3 3 0 0 0 6.5 8.066V13.5q0 1.5.5 2"></svg:path><svg:path d="M10.5 8.5v4.03q0 2.97 3 2.97"></svg:path></svg:g>`,
})
export class SystemUiconsFingerprintIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFlagIcon],svg[system-uicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.5v-11m0 0q1-2 3-2c2 0 2 2 4 2q2 0 3-1v6q-1 1-3 1c-2 0-2-2-4-2q-2 0-3 2z"></svg:path>`,
})
export class SystemUiconsFlagIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFlameIcon],svg[system-uicons-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 19c3.038 0 5.5-2.429 5.5-6.714Q16 8 10.5 3Q5 8 5 12.286C5 16.57 7.462 19 10.5 19"></svg:path><svg:path d="M10.5 19c1.519 0 2.75-1.214 2.75-3.357q0-2.143-2.75-4.643q-2.75 2.5-2.75 4.643C7.75 17.786 8.981 19 10.5 19"></svg:path></svg:g>`,
})
export class SystemUiconsFlameIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFlameAltIcon],svg[system-uicons-flame-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 3Q16 8 16 12.286c0 3.078-1.27 5.198-3.111 6.148c.23-.491.361-1.092.361-1.791q0-2.143-2.75-4.643q-2.75 2.5-2.75 4.643c0 .7.131 1.3.36 1.791c-1.84-.95-3.11-3.07-3.11-6.148Q5 8 10.5 3"></svg:path>`,
})
export class SystemUiconsFlameAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFlipViewIcon],svg[system-uicons-flip-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.69 16.743l.5-2a1 1 0 0 0-.97-1.243H3.78a1 1 0 0 0-.97 1.243l.5 2a1 1 0 0 0 .97.757h12.44a1 1 0 0 0 .97-.757M17.5 11.5l.56-1.682a1 1 0 0 0-.95-1.316l-13.22.017a1 1 0 0 0-.947 1.318L3.5 11.5m14-5l.306-1.836A1 1 0 0 0 16.82 3.5H4.18a1 1 0 0 0-.986 1.164L3.5 6.5"></svg:path>`,
})
export class SystemUiconsFlipViewIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFloppyIcon],svg[system-uicons-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 4.5h7l3 3v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"></svg:path><svg:path d="M8.5 12.5h4a1 1 0 0 1 1 1v3h-6v-3a1 1 0 0 1 1-1m-1-5h2v2h-2z"></svg:path></svg:g>`,
})
export class SystemUiconsFloppyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFolderAddIcon],svg[system-uicons-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.5v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.497a2 2 0 0 0-2-1.999l-5 .002l-2-2h-4a1 1 0 0 0-1 1m5 6h4m-2 2.056V9.5"></svg:path>`,
})
export class SystemUiconsFolderAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFolderClosedIcon],svg[system-uicons-folder-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.5v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.497a2 2 0 0 0-1.85-1.994l-.15-.005l-5 .002l-2-2h-4a1 1 0 0 0-1 1m0 1h7"></svg:path>`,
})
export class SystemUiconsFolderClosedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFolderMinusIcon],svg[system-uicons-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.5v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.497a2 2 0 0 0-1.85-1.994l-.15-.005l-5 .002l-2-2h-4a1 1 0 0 0-1 1m5 6h4"></svg:path>`,
})
export class SystemUiconsFolderMinusIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFolderOpenIcon],svg[system-uicons-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 8.5a2 2 0 0 0-2-2.003l-5 .003l-2-2h-4a1 1 0 0 0-1 1v3"></svg:path><svg:path d="m2.81 9.742l1.311 5.243a2 2 0 0 0 1.94 1.515h8.877a2 2 0 0 0 1.94-1.515L18.19 9.74a1 1 0 0 0-.97-1.243L3.781 8.5a1 1 0 0 0-.97 1.243"></svg:path></svg:g>`,
})
export class SystemUiconsFolderOpenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsForkGitIcon],svg[system-uicons-fork-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.5 3.5l3 3l-3 3"></svg:path><svg:path d="M17.5 6.5h-5l-4 5.086m6 .914l3 3l-3 3"></svg:path><svg:path d="M17.5 15.5h-5l-4-4h-6"></svg:path></svg:g>`,
})
export class SystemUiconsForkGitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsForwardIcon],svg[system-uicons-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 7.5q-7.779-.705-10 6c2.825-3.14 6.341-3.718 10-2v3l5-5l-5-5z"></svg:path>`,
})
export class SystemUiconsForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFrameIcon],svg[system-uicons-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4v14m8-14v14M3.5 7h14m-14 8h14"></svg:path>`,
})
export class SystemUiconsFrameIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFullscreenIcon],svg[system-uicons-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 7.5V2.522l-5.5.014m5.5-.014l-6 5.907m.5 10.092l5.5.002l-.013-5.5m.013 5.406l-6-5.907M2.5 7.5v-5H8m.5 5.929l-6-5.907M8 18.516l-5.5.007V13.5m6-1l-6 6"></svg:path>`,
})
export class SystemUiconsFullscreenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFunnelIcon],svg[system-uicons-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h12l-4 7v3l-3 3v-6z"></svg:path>`,
})
export class SystemUiconsFunnelIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGaugeIcon],svg[system-uicons-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 3)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 14c1.448-1.448 2.5-3.29 2.5-5.5a8 8 0 1 0-16 0c0 2.21 1.052 4.052 2.5 5.5m5.5-5.5l-4-4"></svg:path><svg:circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsGaugeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGiftIcon],svg[system-uicons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 10.5h12v5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm6-3v10"></svg:path><svg:path d="M7.5 7.5h3v-2c0-1.5-2.219-1.781-3-1s-.781 2.219 0 3m6 0h-3v-2c0-1.5 2.219-1.781 3-1s.781 2.219 0 3m-9 0h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsGiftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGlobeIcon],svg[system-uicons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 19c4.438 0 8-3.526 8-7.964S14.438 3 10 3s-8 3.598-8 8.036S5.562 19 10 19M3 8h14M3 14h14"></svg:path><svg:path d="M10 19c2.219 0 4-3.526 4-7.964S12.219 3 10 3s-4 3.598-4 8.036S7.781 19 10 19"></svg:path></svg:g>`,
})
export class SystemUiconsGlobeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGpsIcon],svg[system-uicons-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 14.5c3.329 0 6-2.645 6-5.973c0-3.329-2.671-6.027-6-6.027s-6 2.698-6 6.027c0 3.328 2.671 5.973 6 5.973"></svg:path><svg:circle cx="8.5" cy="8.5" r="3.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h2m12 0h2m-8-8v2m0 12v2"></svg:path></svg:g>`,
})
export class SystemUiconsGpsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGrabIcon],svg[system-uicons-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.35 9.505L7.5 9.5v-1a1 1 0 1 1 2 0v-1a1 1 0 1 1 2 0v1a1 1 0 1 1 2 0v1a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H10A4.5 4.5 0 0 1 5.5 14v-2.5a2 2 0 0 1 1.85-1.995M7.5 8.5v3m2-4v2m2-2v2m2-1v2"></svg:path>`,
})
export class SystemUiconsGrabIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGraphBarIcon],svg[system-uicons-graph-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 3.5v12a2 2 0 0 0 2 2H17m-10.5-6v3m4-6v6m4-9v9"></svg:path>`,
})
export class SystemUiconsGraphBarIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGraphBoxIcon],svg[system-uicons-graph-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m2 10.935V6.5m3 7.985V10.5m3 4v-6"></svg:path>`,
})
export class SystemUiconsGraphBoxIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGraphIncreaseIcon],svg[system-uicons-graph-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 3.5v11a2 2 0 0 0 2 2h11"></svg:path><svg:path d="m6.5 12.5l3-3l2 2l5-5"></svg:path><svg:path d="M16.5 9.5v-3h-3"></svg:path></svg:g>`,
})
export class SystemUiconsGraphIncreaseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridIcon],svg[system-uicons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m-8 0h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m8 8h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m-8 0h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class SystemUiconsGridIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridCirclesIcon],svg[system-uicons-grid-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7.5" cy="7.5" r="2"></svg:circle><svg:circle cx="13.5" cy="7.5" r="2"></svg:circle><svg:circle cx="7.5" cy="13.5" r="2"></svg:circle><svg:circle cx="13.5" cy="13.5" r="2"></svg:circle></svg:g>`,
})
export class SystemUiconsGridCirclesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridCirclesAddIcon],svg[system-uicons-grid-circles-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="13.5" cy="7.5" r="2"></svg:circle><svg:circle cx="7.5" cy="7.5" r="2"></svg:circle><svg:circle cx="7.5" cy="13.5" r="2"></svg:circle><svg:path d="M13.5 11.5v4m2-2h-4"></svg:path></svg:g>`,
})
export class SystemUiconsGridCirclesAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridSmallIcon],svg[system-uicons-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m0-4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m4 4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m0-4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m0 8h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m-4 0h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1M6 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m0-4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m0 8h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class SystemUiconsGridSmallIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridSquaresIcon],svg[system-uicons-grid-squares-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.499 5.5l-2 .003a1 1 0 0 0-1 1V8.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1V6.501a1 1 0 0 0-.884-.994zm6 0l-2 .003a1 1 0 0 0-1 1V8.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1V6.501a1 1 0 0 0-.884-.994zm-6 6l-2 .003a1 1 0 0 0-1 1V14.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1v-1.996a1 1 0 0 0-.884-.994zm6 0l-2 .003a1 1 0 0 0-1 1V14.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1v-1.996a1 1 0 0 0-.884-.994z"></svg:path>`,
})
export class SystemUiconsGridSquaresIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGridSquaresAddIcon],svg[system-uicons-grid-squares-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.499 5.5l-2 .003a1 1 0 0 0-1 1V8.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1V6.501a1 1 0 0 0-.884-.994zm6 0l-2 .003a1 1 0 0 0-1 1V8.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1V6.501a1 1 0 0 0-.884-.994zm-6 6l-2 .003a1 1 0 0 0-1 1V14.5a1 1 0 0 0 .884.993l.118.007l2-.003a1 1 0 0 0 .999-1v-1.996a1 1 0 0 0-.884-.994zm5.001 0v4m2-2h-4"></svg:path>`,
})
export class SystemUiconsGridSquaresAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHandIcon],svg[system-uicons-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.25 9.25a1.53 1.53 0 0 1 1.723.934L7.5 11.5v-6a1 1 0 1 1 2 0V4a1 1 0 1 1 2 0v1a1 1 0 1 1 2 0v1.5a1 1 0 1 1 2 0v8a4 4 0 0 1-4 4c-2.35 0-4.4-1.6-4.97-3.88l-.03-.12l-1.93-3.86a.974.974 0 0 1 .68-1.39M9.5 4.5v6m2-6v5m2-3v4"></svg:path>`,
})
export class SystemUiconsHandIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHarddriveIcon],svg[system-uicons-harddrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="rotate(-90 10 8)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h4l5.788 2.48A2 2 0 0 1 13.5 4.82v7.362a2 2 0 0 1-1.212 1.838L6.5 16.5h-4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2"></svg:path><svg:circle cx="4" cy="3" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 1v15"></svg:path></svg:g>`,
})
export class SystemUiconsHarddriveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHashIcon],svg[system-uicons-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 5.5l-2 10m-2-10l-2 10m-1-7h9m-10 4h9"></svg:path>`,
})
export class SystemUiconsHashIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHeartIcon],svg[system-uicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5c.5-2.5 4.343-2.657 6-1c1.603 1.603 1.5 4.334 0 6l-6 6l-6-6a4.243 4.243 0 0 1 0-6c1.55-1.55 5.5-1.5 6 1"></svg:path>`,
})
export class SystemUiconsHeartIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHeartRateIcon],svg[system-uicons-heart-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 10.5h2l2.5-6l2 12l3-9l2.095 6l1.405-3h2"></svg:path>`,
})
export class SystemUiconsHeartRateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHeartRemoveIcon],svg[system-uicons-heart-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.929 14.07l-3.43 3.43l-6-6a4.243 4.243 0 0 1 0-6a3 3 0 0 1 .567-.438m2.453-.605c1.388.034 2.706.668 2.98 2.043c.5-2.5 4.344-2.657 6-1c1.604 1.603 1.5 4.334 0 6l-.937.937M4 4l13 13.071"></svg:path>`,
})
export class SystemUiconsHeartRemoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHeightIcon],svg[system-uicons-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.519 5.497l-4-4l-4.015 4m8.015 10l-4 4l-4.015-4m4-13.993v18"></svg:path>`,
})
export class SystemUiconsHeightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHierarchyIcon],svg[system-uicons-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5h6v5h-6zm5 11h6v5h-6zm-10 0h6v5h-6zm2.998 0v-3h10v3m-4.998-3v-3"></svg:path>`,
})
export class SystemUiconsHierarchyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHomeIcon],svg[system-uicons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 10.5l9-9l9 9"></svg:path><svg:path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></svg:path></svg:g>`,
})
export class SystemUiconsHomeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHomeAltIcon],svg[system-uicons-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 10.5l9-9l9 9m-16 1v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"></svg:path>`,
})
export class SystemUiconsHomeAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHomeCheckIcon],svg[system-uicons-home-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 10.5l9-9l9 9"></svg:path><svg:path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></svg:path><svg:path d="m7.5 11.5l2 2l4-4"></svg:path></svg:g>`,
})
export class SystemUiconsHomeCheckIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsHomeDoorIcon],svg[system-uicons-home-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 10.5l9-9l9 9"></svg:path><svg:path d="M3.5 8.5v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8"></svg:path></svg:g>`,
})
export class SystemUiconsHomeDoorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsImportIcon],svg[system-uicons-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 3.5h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10"></svg:path><svg:path d="m13.5 10.5l-3 3l-3-3"></svg:path><svg:path d="M17.5 3.5h-4a3 3 0 0 0-3 3v7"></svg:path></svg:g>`,
})
export class SystemUiconsImportIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsInboxIcon],svg[system-uicons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.16 4.5h8.68a1 1 0 0 1 .92.606L18.5 11.5v4a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-4l2.74-6.394a1 1 0 0 1 .92-.606"></svg:path><svg:path d="M2.5 11.5h4a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h4"></svg:path></svg:g>`,
})
export class SystemUiconsInboxIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsInboxAltIcon],svg[system-uicons-inbox-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 4.5h2.34a1 1 0 0 1 .92.606L18.5 11.5v4a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-4l2.74-6.394a1 1 0 0 1 .92-.606H8.5"></svg:path><svg:path d="m13.5 7.586l-3 2.914l-3-2.914m3-6.086v9m-8 1h4a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h4"></svg:path></svg:g>`,
})
export class SystemUiconsInboxAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsInfoCircleIcon],svg[system-uicons-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="M8.5 12.5v-4h-1m0 4h2"></svg:path></svg:g><svg:circle cx="8.5" cy="5.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsInfoCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsIphoneLandscapeIcon],svg[system-uicons-iphone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(3 5)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"></svg:path><svg:circle cx="11.5" cy="5.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsIphoneLandscapeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsIphonePortraitIcon],svg[system-uicons-iphone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(5 3)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:circle cx="5.5" cy="11.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsIphonePortraitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsJumpBackwardIcon],svg[system-uicons-jump-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 14.5v-2a3 3 0 0 0-3-3h-8m0 3l-3.001-3l3.001-3"></svg:path><svg:path d="m9.5 12.5l-3.001-3l3.001-3"></svg:path></svg:g>`,
})
export class SystemUiconsJumpBackwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsJumpForwardIcon],svg[system-uicons-jump-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 14.5v-2a3 3 0 0 1 3-3h8"></svg:path><svg:path d="m11.499 12.5l3.001-3l-3.001-3"></svg:path><svg:path d="m14.499 12.5l3.001-3l-3.001-3"></svg:path></svg:g>`,
})
export class SystemUiconsJumpForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsJumpLeftIcon],svg[system-uicons-jump-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 14.5v-2a3 3 0 0 0-3-3h-8"></svg:path><svg:path d="m7.5 12.5l-3.001-3l3.001-3"></svg:path></svg:g>`,
})
export class SystemUiconsJumpLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsJumpRightIcon],svg[system-uicons-jump-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 14.5v-2a3 3 0 0 1 3-3h8"></svg:path><svg:path d="m13.499 12.5l3.001-3l-3.001-3"></svg:path></svg:g>`,
})
export class SystemUiconsJumpRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsKeyboardIcon],svg[system-uicons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5v-6a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"></svg:path><svg:g fill="currentColor" transform="translate(1 5)"><svg:circle cx="3.5" cy="2.5" r="1"></svg:circle><svg:circle cx="6.5" cy="2.5" r="1"></svg:circle><svg:circle cx="9.5" cy="2.5" r="1"></svg:circle><svg:circle cx="12.5" cy="2.5" r="1"></svg:circle><svg:circle cx="15.5" cy="2.5" r="1"></svg:circle><svg:circle cx="3.5" cy="4.5" r="1"></svg:circle><svg:circle cx="6.5" cy="4.5" r="1"></svg:circle><svg:circle cx="9.5" cy="4.5" r="1"></svg:circle><svg:circle cx="12.5" cy="4.5" r="1"></svg:circle><svg:circle cx="15.5" cy="4.5" r="1"></svg:circle><svg:circle cx="3.5" cy="6.5" r="1"></svg:circle><svg:circle cx="6.5" cy="6.5" r="1"></svg:circle><svg:circle cx="9.5" cy="6.5" r="1"></svg:circle><svg:circle cx="12.5" cy="6.5" r="1"></svg:circle><svg:circle cx="15.5" cy="6.5" r="1"></svg:circle><svg:circle cx="3.5" cy="8.5" r="1"></svg:circle><svg:circle cx="15.5" cy="8.5" r="1"></svg:circle></svg:g><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 13.5h6"></svg:path></svg:g>`,
})
export class SystemUiconsKeyboardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLaptopIcon],svg[system-uicons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.485h11a1 1 0 0 1 1 1V13.5h-13V5.485a1 1 0 0 1 1-1M3.118 17.5h13.764a1 1 0 0 0 .894-1.447L16.5 13.5h-13l-1.276 2.553a1 1 0 0 0 .894 1.447"></svg:path>`,
})
export class SystemUiconsLaptopIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLightbulbIcon],svg[system-uicons-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 18.5h4M10.5 5a4.5 4.5 0 0 1 2.001 8.532l-.001.968a2 2 0 1 1-4 0v-.968A4.5 4.5 0 0 1 10.5 5"></svg:path>`,
})
export class SystemUiconsLightbulbIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLightbulbOnIcon],svg[system-uicons-lightbulb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 18.5h4M10.5 5a4.5 4.5 0 0 1 2.001 8.532l-.001.968a2 2 0 1 1-4 0v-.968A4.5 4.5 0 0 1 10.5 5m0-2.5v-1m5 3l1-1m-11 1l-1-1m11 10l1 1m-11-1l-1 1m-1-6h-1m16 0h-1"></svg:path>`,
})
export class SystemUiconsLightbulbOnIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLightningIcon],svg[system-uicons-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 9.5h4l-6 9v-6.997l-4-.003l6-9z"></svg:path>`,
})
export class SystemUiconsLightningIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLightningAltIcon],svg[system-uicons-lightning-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8.5h5l-6 8.997V11.5h-4l2-9h5z"></svg:path>`,
})
export class SystemUiconsLightningAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLineweightIcon],svg[system-uicons-lineweight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor"><svg:rect width="14" height="2" x="3.5" y="6.5" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M3.5 11.5h14v1h-14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.5 15.5h13.981"></svg:path></svg:g>`,
})
export class SystemUiconsLineweightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLinkIcon],svg[system-uicons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"></svg:path>`,
})
export class SystemUiconsLinkIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLinkAltIcon],svg[system-uicons-link-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.388 11.69A3.043 3.043 0 0 1 6.543 6.5h4.914A3.043 3.043 0 0 1 14.5 9.543c0 1.68-1.362 2.957-3.043 2.957H9"></svg:path><svg:path d="M16.612 10.31a3.043 3.043 0 0 1-2.155 5.19H9.543A3.043 3.043 0 0 1 6.5 12.457c0-1.68 1.362-2.957 3.043-2.957H12"></svg:path></svg:g>`,
})
export class SystemUiconsLinkAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLinkBrokenIcon],svg[system-uicons-link-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 7.328l1-1a2.828 2.828 0 0 1 4 4l-1 1M10.328 14.5l-1 1a2.828 2.828 0 1 1-4-4l1-1m1.172-5v-3m-5 5h3m8 11v-3m2-2h3"></svg:path>`,
})
export class SystemUiconsLinkBrokenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLinkHorizontalIcon],svg[system-uicons-link-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 14.5h-1a4 4 0 1 1 0-8h1m4 0h1a4 4 0 1 1 0 8h-1m1-4h-6"></svg:path>`,
})
export class SystemUiconsLinkHorizontalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLinkVerticalIcon],svg[system-uicons-link-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v1a4 4 0 1 1-8 0v-1m0-4v-1a4 4 0 1 1 8 0v1m-4-1v6"></svg:path>`,
})
export class SystemUiconsLinkVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsListIcon],svg[system-uicons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 10.5h-7m7 4h-7m7-8h-7"></svg:path><svg:path fill="currentColor" d="M5.499 7.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"></svg:path></svg:g>`,
})
export class SystemUiconsListIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsListAddIcon],svg[system-uicons-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-12 4h12m-12 4h7m2 0h4zm2 2v-4z"></svg:path>`,
})
export class SystemUiconsListAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsListNumberedIcon],svg[system-uicons-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 10.5h-7m7 4h-7m7-8h-7"></svg:path><svg:path fill="currentColor" d="M5.88 8V5.828h-.037l-.68.459V5.67l.717-.488h.717V8zm-.98 2.068c0-.572.45-.963 1.109-.963c.652 0 1.04.354 1.04.836c0 .334-.148.555-.597.961l-.555.502v.037h1.186V12H4.94v-.479l1.008-.912c.348-.318.406-.44.406-.605c0-.195-.136-.358-.382-.358c-.262 0-.416.178-.416.422zm.712 4.73v-.484h.362c.238 0 .392-.138.392-.341c0-.192-.146-.332-.388-.332c-.254 0-.409.134-.42.363h-.653c.01-.541.438-.899 1.108-.899c.66 0 1.021.346 1.02.766c0 .34-.22.565-.528.637v.037c.406.057.64.309.64.68c0 .504-.48.851-1.158.851c-.67 0-1.125-.361-1.15-.916h.684c.01.217.185.352.457.352c.261 0 .439-.143.439-.356c0-.222-.168-.357-.443-.357z"></svg:path></svg:g>`,
})
export class SystemUiconsListNumberedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLoaderIcon],svg[system-uicons-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 3.5v2m5 0L14 7M5.5 5.5L7 7m3.5 10.5v-2m5 0L14 14m-8.5 1.5L7 14m-3.5-3.5h2m10 0h2"></svg:path>`,
})
export class SystemUiconsLoaderIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLocationIcon],svg[system-uicons-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)"><svg:path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05"></svg:path><svg:circle cx="6.5" cy="6.5" r="2.5"></svg:circle></svg:g>`,
})
export class SystemUiconsLocationIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLockIcon],svg[system-uicons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(4 1)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 8.5l-.006-1.995Q2.484.5 6.5.5c4.016 0 4.011 2.002 4 6.005V8.5m-8 0h8.023a2 2 0 0 1 1.994 1.85l.006.156l-.017 6a2 2 0 0 1-2 1.994H2.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"></svg:path><svg:circle cx="6.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsLockIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLockOpenIcon],svg[system-uicons-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(4 1)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 8.5l-.006-1.995Q2.484.5 6.5.5c2.191 0 3.61 1.32 4 4m-8 4h8.023a2 2 0 0 1 1.994 1.85l.006.156l-.017 6a2 2 0 0 1-2 1.994H2.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"></svg:path><svg:circle cx="6.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsLockOpenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailIcon],svg[system-uicons-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 6.5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2"></svg:path><svg:path d="m5.5 7.5l5 3l5-3"></svg:path></svg:g>`,
})
export class SystemUiconsMailIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailAddIcon],svg[system-uicons-mail-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 5.5h-8a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"></svg:path><svg:path d="m4.5 8.5l5 3l5-3m2-5v4m-2-2h4"></svg:path></svg:g>`,
})
export class SystemUiconsMailAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailDeleteIcon],svg[system-uicons-mail-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.508 4.067l-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0M13.5 8.5l-6 6m0-6l6 6"></svg:path>`,
})
export class SystemUiconsMailDeleteIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailMinusIcon],svg[system-uicons-mail-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 5.5h-8a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></svg:path><svg:path d="m4.5 8.5l5 3l5-3m0-3h4"></svg:path></svg:g>`,
})
export class SystemUiconsMailMinusIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailNewIcon],svg[system-uicons-mail-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.508 4.067l-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0M10.5 8.5v6m-3-3h6"></svg:path>`,
})
export class SystemUiconsMailNewIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailOpenIcon],svg[system-uicons-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 6.819V14.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.819a2 2 0 0 0-1.212-1.838l-5-2.143a2 2 0 0 0-1.576 0l-5 2.143A2 2 0 0 0 3.5 6.819"></svg:path><svg:path d="m5.5 7.5l5 3l5-3"></svg:path></svg:g>`,
})
export class SystemUiconsMailOpenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMailRemoveIcon],svg[system-uicons-mail-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.508 4.067l-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0M7.5 11.5h6"></svg:path>`,
})
export class SystemUiconsMailRemoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMarqueeIcon],svg[system-uicons-marquee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5.5v-1a2 2 0 0 1 2-2h1m0 16h-1a2 2 0 0 1-2-2v-1m16-10v-1a2 2 0 0 0-2-2h-1m0 16h1a2 2 0 0 0 2-2v-1m-11-13h2m2 0h2m-6 16h2m2 0h2m5-11.002V9.5m0 1.998V13.5m-16-6.002V9.5m0 1.998V13.5"></svg:path>`,
})
export class SystemUiconsMarqueeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMaximiseIcon],svg[system-uicons-maximise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 16.5v-12a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></svg:path><svg:path d="M2.5 14.5h10a2 2 0 0 0 2-2v-10"></svg:path><svg:path d="M2.5 10.5h7a1 1 0 0 0 1-1v-7"></svg:path></svg:g>`,
})
export class SystemUiconsMaximiseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMenuHamburgerIcon],svg[system-uicons-menu-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"></svg:path>`,
})
export class SystemUiconsMenuHamburgerIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMenuHorizontalIcon],svg[system-uicons-menu-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:circle cx="10.5" cy="10.5" r="1"></svg:circle><svg:circle cx="5.5" cy="10.5" r="1"></svg:circle><svg:circle cx="15.5" cy="10.5" r="1"></svg:circle></svg:g>`,
})
export class SystemUiconsMenuHorizontalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMenuVerticalIcon],svg[system-uicons-menu-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:circle cx="10.5" cy="10.5" r="1"></svg:circle><svg:circle cx="10.5" cy="5.5" r="1"></svg:circle><svg:circle cx="10.5" cy="15.5" r="1"></svg:circle></svg:g>`,
})
export class SystemUiconsMenuVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMessageIcon],svg[system-uicons-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2l-2.999-.001l-2.294 2.294a1 1 0 0 1-1.32.083l-.094-.083l-2.294-2.294L4.5 17.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2zm-1 5h-6"></svg:path><svg:path fill="currentColor" d="M6.499 9.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 12.5h-6"></svg:path></svg:g>`,
})
export class SystemUiconsMessageIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMessageWritingIcon],svg[system-uicons-message-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2l-2.999-.001l-2.294 2.294a1 1 0 0 1-1.32.083l-.094-.083l-2.294-2.294L4.5 17.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z"></svg:path><svg:path fill="currentColor" d="M10.499 11.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m-4 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m8 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"></svg:path></svg:g>`,
})
export class SystemUiconsMessageWritingIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMicrophoneIcon],svg[system-uicons-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.39 2.615l.11-.004a2.893 2.893 0 0 1 3 2.891V9.5a3 3 0 1 1-6 0V5.613a3 3 0 0 1 2.89-2.998"></svg:path><svg:path d="M15.5 9.5a5 5 0 0 1-9.995.217L5.5 9.5m5 5v4"></svg:path></svg:g>`,
})
export class SystemUiconsMicrophoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMicrophoneDisabledIcon],svg[system-uicons-microphone-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 9.5c0 .918-.247 1.778-.68 2.518m-1.424 1.558A5 5 0 0 1 5.5 9.5m2.196-4.955a3 3 0 0 1 2.693-1.93l.111-.004a2.893 2.893 0 0 1 3 2.891V9.5c0 .388-.074.759-.208 1.099"></svg:path><svg:path d="M11.957 12.123A3 3 0 0 1 7.5 9.5v-2m-4-4l14 14m-7-3v4"></svg:path></svg:g>`,
})
export class SystemUiconsMicrophoneDisabledIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMicrophoneMutedIcon],svg[system-uicons-microphone-muted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 8l.001 1.5q-.322 3-3.001 3c-2.679 0-2.785-1-2.999-3L7.5 6c0-2 1.857-3.231 2.5-3.5m1.5 4l4-4m0 4l-4-4z"></svg:path><svg:path d="M15.5 9.5a5 5 0 0 1-9.995.217L5.5 9.5m5.022 5v4"></svg:path></svg:g>`,
})
export class SystemUiconsMicrophoneMutedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMidpointIcon],svg[system-uicons-midpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 7.5v-3a2 2 0 0 0-2-2h-3m-3 10v-4m-2 2h4m6 3v3a2 2 0 0 1-2 2h-3m-6-16h-3a2 2 0 0 0-2 2v3m5 11h-3a2 2 0 0 1-2-2v-3"></svg:path>`,
})
export class SystemUiconsMidpointIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMiniPlayerIcon],svg[system-uicons-mini-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.5h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M12.5 10.5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsMiniPlayerIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMinimiseIcon],svg[system-uicons-minimise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 17.5v-5h-5m14 0h-5v5m-9-9h5v-5m4 0v5h5"></svg:path>`,
})
export class SystemUiconsMinimiseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMinusIcon],svg[system-uicons-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.5h10"></svg:path>`,
})
export class SystemUiconsMinusIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMinusCircleIcon],svg[system-uicons-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 19c4.438 0 8-3.526 8-7.964S14.438 3 10 3s-8 3.598-8 8.036S5.562 19 10 19m-4-8h8"></svg:path>`,
})
export class SystemUiconsMinusCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMoonIcon],svg[system-uicons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 3.5c1.328 0 2.57.37 3.628 1.012a6 6 0 0 0-.001 11.977A7 7 0 1 1 11.5 3.5"></svg:path>`,
})
export class SystemUiconsMoonIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMoveIcon],svg[system-uicons-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5h-18m9-9v18m6-6l3-3l-3-3m-12 6l-3-3l3-3m3-3l3-3l3 3m-6 12l3 3l3-3"></svg:path>`,
})
export class SystemUiconsMoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsNewspaperIcon],svg[system-uicons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 7.165h9m-8.019 3.038l1-.018a1 1 0 0 1 1.01.864l.009.135v.984a1 1 0 0 1-.981 1l-1 .018a1 1 0 0 1-1.01-.864l-.009-.136v-.983a1 1 0 0 1 .981-1"></svg:path><svg:path d="M3.5 4.15h11a2 2 0 0 1 2 2v10.015h-13a2 2 0 0 1-2-2V6.151a2 2 0 0 1 2-2m6 6.014h4m-4 3h4"></svg:path><svg:path d="M16 16.165a2.5 2.5 0 0 0 2.5-2.5v-6.5h-2"></svg:path></svg:g>`,
})
export class SystemUiconsNewspaperIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsNoSignIcon],svg[system-uicons-no-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="M14 3L3 14"></svg:path></svg:g>`,
})
export class SystemUiconsNoSignIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsNotebookIcon],svg[system-uicons-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.5h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m1 14v-14"></svg:path>`,
})
export class SystemUiconsNotebookIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsNotificationIcon],svg[system-uicons-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><svg:path d="M14.5 6.5v7a2 2 0 0 1-2 2H2.543a2 2 0 0 1-2-1.991l-.043-10A2 2 0 0 1 2.49 1.5H9.5"></svg:path><svg:circle cx="14" cy="2" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsNotificationIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsNutIcon],svg[system-uicons-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><svg:path d="m6.5.5l6 4v6l-6 4l-6-4v-6z"></svg:path><svg:circle cx="6.5" cy="7.5" r="3"></svg:circle></svg:g>`,
})
export class SystemUiconsNutIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPagesIcon],svg[system-uicons-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 3.5h-7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2"></svg:path><svg:path d="M6.5 5.5a2 2 0 0 0-2 2v8a3 3 0 0 0 3 3h6a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SystemUiconsPagesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPanelBottomIcon],svg[system-uicons-panel-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m1 12h8"></svg:path>`,
})
export class SystemUiconsPanelBottomIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPanelCenterIcon],svg[system-uicons-panel-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path d="M8.5 7.5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsPanelCenterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPanelLeftIcon],svg[system-uicons-panel-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m0 11v-8"></svg:path>`,
})
export class SystemUiconsPanelLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPanelRightIcon],svg[system-uicons-panel-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m10 11v-8"></svg:path>`,
})
export class SystemUiconsPanelRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPanelSectionedIcon],svg[system-uicons-panel-sectioned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.498 15.498l-.01-10a2 2 0 0 0-2-1.998h-10a2 2 0 0 0-1.995 1.85l-.006.152l.01 10a2 2 0 0 0 2 1.998h10a2 2 0 0 0 1.995-1.85zM10.5 3.5v13.817m7-6.817h-14"></svg:path>`,
})
export class SystemUiconsPanelSectionedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPanelTopIcon],svg[system-uicons-panel-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m1 2h8"></svg:path>`,
})
export class SystemUiconsPanelTopIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPaperIcon],svg[system-uicons-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 15.5v-8l-4-4h-6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path>`,
})
export class SystemUiconsPaperIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPaperFoldedIcon],svg[system-uicons-paper-folded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.5 15.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path><svg:path d="M11.5 3.5v3a2 2 0 0 0 2 2h3"></svg:path></svg:g>`,
})
export class SystemUiconsPaperFoldedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPaperPlaneIcon],svg[system-uicons-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 9l16-6.535L14.7 17zm16-6.5l-11 10m0 0v5l3-3"></svg:path>`,
})
export class SystemUiconsPaperPlaneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPaperPlaneAltIcon],svg[system-uicons-paper-plane-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.5 2.465l-8 8.033m3 8.002l-3-8.002l-7-2.998l15-5z"></svg:path>`,
})
export class SystemUiconsPaperPlaneAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPaperclipIcon],svg[system-uicons-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.5 11.5l-5 5q-3.781 4.144-7 1q-3.22-3.145 1-7l5-5q2.878-3.122 5-1c2.122 2.122 1.08 3.08-1 5l-5 5Q8.082 16.082 7 15c-1.082-1.082-.555-1.555.5-2.5l5-5"></svg:path>`,
})
export class SystemUiconsPaperclipIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsParagraphCenterIcon],svg[system-uicons-paragraph-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-9.002 4h5.997m-7.995 4h9.995"></svg:path>`,
})
export class SystemUiconsParagraphCenterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsParagraphEndIcon],svg[system-uicons-paragraph-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.5h13.978M3.5 7.5h13.978M3.5 9.5h13.978M3.5 11.5h13.978M3.5 13.5h13.978M3.5 15.5h7"></svg:path>`,
})
export class SystemUiconsParagraphEndIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsParagraphLeftIcon],svg[system-uicons-paragraph-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-12.002 4h5.997m-5.995 4h9.995"></svg:path>`,
})
export class SystemUiconsParagraphLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsParagraphRightIcon],svg[system-uicons-paragraph-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-6.002 4h5.997m-9.995 4h9.995"></svg:path>`,
})
export class SystemUiconsParagraphRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsParagraphStartIcon],svg[system-uicons-paragraph-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h13.978M3.5 9.5h13.978M3.5 11.5h13.978M3.5 5.5h7m-7 8h13.978M3.5 15.5h13.978"></svg:path>`,
})
export class SystemUiconsParagraphStartIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPenIcon],svg[system-uicons-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 4a2.12 2.12 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zm-1.5 2.5l1 1"></svg:path>`,
})
export class SystemUiconsPenIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPhoneLandscapeIcon],svg[system-uicons-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 14.475V8.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-1.85 1.994l-.155.006l-10-.025a2 2 0 0 1-1.995-2m12-4.975v4"></svg:path>`,
})
export class SystemUiconsPhoneLandscapeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPhonePortraitIcon],svg[system-uicons-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m1 12h4"></svg:path>`,
})
export class SystemUiconsPhonePortraitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPictureIcon],svg[system-uicons-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(3 3)"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path d="m14.5 10.5l-3-3l-3 2.985m4 4.015l-9-9l-3 3"></svg:path></svg:g><svg:circle cx="11" cy="4" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsPictureIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPieHalfIcon],svg[system-uicons-pie-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.519 2.747a8.003 8.003 0 0 0-.045 15.494M18.5 10.5a8 8 0 0 1-8 8v-16a8 8 0 0 1 8 8"></svg:path>`,
})
export class SystemUiconsPieHalfIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPieQuarterIcon],svg[system-uicons-pie-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.519 2.747a8 8 0 1 0 9.705 9.845"></svg:path><svg:path d="M18.5 10.5a8 8 0 0 0-8-8v8z"></svg:path></svg:g>`,
})
export class SystemUiconsPieQuarterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPieThirdIcon],svg[system-uicons-pie-third-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.519 2.747a8.01 8.01 0 0 0-5.791 5.849M10.5 2.5a8 8 0 1 1 0 16c-4.418 0-8-3.5-8-8h8z"></svg:path>`,
})
export class SystemUiconsPieThirdIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPillIcon],svg[system-uicons-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 7.5v5.817m-7-2.817a3 3 0 0 0 3 3h8a3 3 0 0 0 0-6h-8a3 3 0 0 0-3 3"></svg:path>`,
})
export class SystemUiconsPillIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPlayButtonIcon],svg[system-uicons-play-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.494 5.535l12-.038a2 2 0 0 1 2 1.845l.006.155V13.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V7.535a2 2 0 0 1 1.994-2"></svg:path><svg:path fill="currentColor" d="m9.5 12.5l3-2l-3-2z"></svg:path></svg:g>`,
})
export class SystemUiconsPlayButtonIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPlusIcon],svg[system-uicons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.5h10m-5-5v10"></svg:path>`,
})
export class SystemUiconsPlusIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPlusCircleIcon],svg[system-uicons-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 19c4.438 0 8-3.526 8-7.964S14.438 3 10 3s-8 3.598-8 8.036S5.562 19 10 19m-4-8h8m-4 4.056V7z"></svg:path>`,
})
export class SystemUiconsPlusCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPostcardIcon],svg[system-uicons-postcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.5h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"></svg:path><svg:path d="M13.5 6.5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m-8 5h5m-5 2h5"></svg:path></svg:g>`,
})
export class SystemUiconsPostcardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPrinterIcon],svg[system-uicons-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="rotate(-90 10.5 8.5)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.384V2.486a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V14.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 4.5h5.001v8H1.5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m12 0h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2"></svg:path><svg:circle cx="9" cy="14" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsPrinterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsProjectorIcon],svg[system-uicons-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 14.5V4.485h-14V14.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1m-9 1l-2 3.5m6-3.5l2 3m-13-14h18"></svg:path><svg:path d="M10.499 2.498a2.005 2.005 0 0 1 1.995 1.853l.006.149l-4-.002c-.001-1.105.894-2 1.999-2"></svg:path></svg:g>`,
})
export class SystemUiconsProjectorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPullDownIcon],svg[system-uicons-pull-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 13.5l4 4l4-4m-4-7v11m-7-14h14"></svg:path>`,
})
export class SystemUiconsPullDownIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPullLeftIcon],svg[system-uicons-pull-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 6.5l-4 4l4 4m7-4h-11m14-7v14"></svg:path>`,
})
export class SystemUiconsPullLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPullRightIcon],svg[system-uicons-pull-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 14.5l4-4l-4-4m4 4h-11m-3-7v14"></svg:path>`,
})
export class SystemUiconsPullRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPullUpIcon],svg[system-uicons-pull-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 7.753l4-4.253l4 4.212m-4-4.212v11m-7 3h14"></svg:path>`,
})
export class SystemUiconsPullUpIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPushDownIcon],svg[system-uicons-push-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 10.5l4 4l4-4m-4-7v11m-7 3h14"></svg:path>`,
})
export class SystemUiconsPushDownIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPushLeftIcon],svg[system-uicons-push-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 6.5l-4 4l4 4m7-4h-11m-3-7v14"></svg:path>`,
})
export class SystemUiconsPushLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPushRightIcon],svg[system-uicons-push-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 6.5l4 4l-4 4m4-4h-11m14-7v14"></svg:path>`,
})
export class SystemUiconsPushRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPushUpIcon],svg[system-uicons-push-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 10.5l4-4l4 4m-4-4v11m-7-14h14"></svg:path>`,
})
export class SystemUiconsPushUpIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsQuestionCircleIcon],svg[system-uicons-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5v-1l1.414-1.414a2 2 0 0 0 .586-1.414V5.5c0-.613-.346-1.173-.894-1.447l-.212-.106a2 2 0 0 0-1.788 0L7.5 4c-.613.306-1 .933-1 1.618V6.5"></svg:path><svg:circle cx="8.5" cy="12.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsQuestionCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRadioOnIcon],svg[system-uicons-radio-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:circle cx="10.5" cy="10.5" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsRadioOnIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReceiptIcon],svg[system-uicons-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 8.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2"></svg:path><svg:path d="M5.5 4.5h10V16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1z"></svg:path><svg:path d="m8.5 11.5l2 2l2-2m-2 2v-6"></svg:path></svg:g>`,
})
export class SystemUiconsReceiptIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRecordIcon],svg[system-uicons-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="5"></svg:circle><svg:circle cx="10.5" cy="10.5" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsRecordIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRedoIcon],svg[system-uicons-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 13.5q-4.755-6-9-6t-7 3"></svg:path><svg:path d="M13.5 13.5h5v-5"></svg:path></svg:g>`,
})
export class SystemUiconsRedoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRefreshIcon],svg[system-uicons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3.5c-2.412 1.378-4 4.024-4 7a8 8 0 0 0 8 8m4-1c2.287-1.408 4-4.118 4-7a8 8 0 0 0-8-8"></svg:path><svg:path d="M6.5 7.5v-4h-4m12 10v4h4"></svg:path></svg:g>`,
})
export class SystemUiconsRefreshIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRefreshAltIcon],svg[system-uicons-refresh-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 6.5c1.378-2.412 4.024-4 7-4a8 8 0 0 1 8 8m-1 4c-1.408 2.287-4.118 4-7 4a8 8 0 0 1-8-8"></svg:path><svg:path d="M8.5 6.5h-5v-5m9 13h5v5"></svg:path></svg:g>`,
})
export class SystemUiconsRefreshAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReplicateIcon],svg[system-uicons-replicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 12.5v-7a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2"></svg:path><svg:path d="M6.5 14.5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1"></svg:path></svg:g>`,
})
export class SystemUiconsReplicateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReplicateAltIcon],svg[system-uicons-replicate-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 12.5v-7a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2"></svg:path><svg:path d="M14.5 14.5v1a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1"></svg:path></svg:g>`,
})
export class SystemUiconsReplicateAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetIcon],svg[system-uicons-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"></svg:path><svg:path d="M7.5 6.5h-4v-4"></svg:path></svg:g>`,
})
export class SystemUiconsResetIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetAltIcon],svg[system-uicons-reset-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 3.5c2.414 1.377 4 4.022 4 7a8 8 0 1 1-8-8"></svg:path><svg:path d="M14.5 7.5v-4h4"></svg:path></svg:g>`,
})
export class SystemUiconsResetAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetForwardIcon],svg[system-uicons-reset-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3.5c-2.414 1.377-4 4.022-4 7a8 8 0 1 0 8-8"></svg:path><svg:path d="M6.5 7.5v-4h-4"></svg:path></svg:g>`,
})
export class SystemUiconsResetForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetHardIcon],svg[system-uicons-reset-hard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 5.5l-3-3h6a8 8 0 0 1 7.427 5.02c.37.921.573 1.927.573 2.98a8 8 0 1 1-16 0c0-1.49.37-3.472 1.538-5.091M7.5 7.5l6 6m-6 0l6-6"></svg:path>`,
})
export class SystemUiconsResetHardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetTemporaryIcon],svg[system-uicons-reset-temporary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><svg:path d="M3.987 1.078A8 8 0 1 0 8 0"></svg:path><svg:circle cx="8" cy="8" r="2" fill="currentColor"></svg:circle><svg:path d="M4 5V1H0"></svg:path></svg:g>`,
})
export class SystemUiconsResetTemporaryIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRetweetIcon],svg[system-uicons-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 13.5l3 3l3-3"></svg:path><svg:path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"></svg:path><svg:path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"></svg:path></svg:g>`,
})
export class SystemUiconsRetweetIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReuseIcon],svg[system-uicons-reuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 2.5h5v5"></svg:path><svg:path d="M8.5 2.5q-5 4.255-5 8.5t3 7.5m11 0h-5v-5"></svg:path><svg:path d="M12.5 18.5q5-4.255 5-8.5t-3-7.5"></svg:path></svg:g>`,
})
export class SystemUiconsReuseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReverseIcon],svg[system-uicons-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 10.5l-4 4l4 4m8-4h-12m8-12l4 4l-4 4m4-4h-12"></svg:path>`,
})
export class SystemUiconsReverseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReverseAltIcon],svg[system-uicons-reverse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 9.5l-4 4l4 4m8-4h-12m6-10l4 4l-4 4m4-4h-12"></svg:path>`,
})
export class SystemUiconsReverseAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRevertIcon],svg[system-uicons-revert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.5 5.5l-3-3h6a8 8 0 0 1 7.427 5.02c.37.921.573 1.927.573 2.98a8 8 0 1 1-16 0c0-1.49.37-3.472 1.538-5.091"></svg:path><svg:path d="M10.5 5.5v5h3"></svg:path></svg:g>`,
})
export class SystemUiconsRevertIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRocketIcon],svg[system-uicons-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 1)"><svg:path d="M6.5 18.5c3-2.502 4-5.502 4-9s-1-6.498-4-9c-3 2.502-4 5.502-4 9s1 6.498 4 9"></svg:path><svg:path d="M10.062 13.362q.636.368 1.171.902q1.679 1.678 1.714 4.365c-2.509-.11-3.882-.765-4.926-1.647m-5.115-3.62a5.7 5.7 0 0 0-1.172.902Q.056 15.942.021 18.629c2.508-.11 3.882-.765 4.926-1.647"></svg:path><svg:circle cx="6.5" cy="6.5" r="2"></svg:circle></svg:g>`,
})
export class SystemUiconsRocketIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRulerIcon],svg[system-uicons-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 8.5h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m2 .5v2.5m2-2.5v2.5m2-2.5v3.5m2-3.5v2.5m2-2.5v2.5m2-2.5v3.5"></svg:path>`,
})
export class SystemUiconsRulerIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsScaleIcon],svg[system-uicons-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.5 7.5v-4h-4m-4 4v4h4m4-8l-8 8"></svg:path><svg:path d="M11.5 3.5h-6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"></svg:path></svg:g>`,
})
export class SystemUiconsScaleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsScaleContractIcon],svg[system-uicons-scale-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 9.5l-4 .022V5.5m-2 10.023v-4l-4-.023"></svg:path>`,
})
export class SystemUiconsScaleContractIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsScaleExtendIcon],svg[system-uicons-scale-extend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 9.5V5.522l-4-.022m-2 10.023h-4V11.5"></svg:path>`,
})
export class SystemUiconsScaleExtendIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsScalpelIcon],svg[system-uicons-scalpel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 15l7-7a1.414 1.414 0 0 0-2-2L3.5 16.5h7L7 13"></svg:path>`,
})
export class SystemUiconsScalpelIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSearchIcon],svg[system-uicons-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.5" cy="8.5" r="5"></svg:circle><svg:path d="M17.571 17.5L12 12"></svg:path></svg:g>`,
})
export class SystemUiconsSearchIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsServerIcon],svg[system-uicons-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 14.5v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" d="M6.5 13.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 8.494l.01-2a2 2 0 0 1 2-1.994H16.5a2 2 0 0 1 1.994 1.85l.006.156l-.01 2a2 2 0 0 1-2 1.994H4.5a2 2 0 0 1-1.995-1.85z"></svg:path><svg:path fill="currentColor" d="M6.5 7.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path></svg:g>`,
})
export class SystemUiconsServerIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSettingsIcon],svg[system-uicons-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:path stroke-width=".933" d="M7.5.5q.527 0 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447q.333.596.514 1.27l1.53.533a7 7 0 0 1-.017 1.948l-1.539.508a5.6 5.6 0 0 1-.536 1.26l.704 1.46a7 7 0 0 1-1.389 1.365l-1.447-.73a5.5 5.5 0 0 1-1.27.514l-.533 1.53a7 7 0 0 1-1.948-.017l-.508-1.539a5.6 5.6 0 0 1-1.26-.536l-1.46.704a7 7 0 0 1-1.365-1.389l.73-1.447a5.6 5.6 0 0 1-.514-1.27l-1.53-.534a7 7 0 0 1 .017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7 7 0 0 1 1.389-1.365l1.447.73a5.5 5.5 0 0 1 1.27-.514l.534-1.53Q7.036.5 7.5.5"></svg:path><svg:circle cx="7.5" cy="7.5" r="3"></svg:circle></svg:g>`,
})
export class SystemUiconsSettingsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsShareIcon],svg[system-uicons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 7.5l-3.978-4l-4.022 4m4.022-3.979V15.5m-3.022-5h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"></svg:path>`,
})
export class SystemUiconsShareIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsShareAltIcon],svg[system-uicons-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 4.5l-1.978-2l-2.022 2m2-2v9m-3-5h-1a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1"></svg:path>`,
})
export class SystemUiconsShareAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsShuffleIcon],svg[system-uicons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.501 11.5l-3.001 3l3.001 3"></svg:path><svg:path d="M16.5 9.5v2a3 3 0 0 1-3 3h-8m6.999-5l3.001-3l-3.001-3"></svg:path><svg:path d="M4.5 11.5v-2a3 3 0 0 1 3-3h8"></svg:path></svg:g>`,
})
export class SystemUiconsShuffleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSideMenuIcon],svg[system-uicons-side-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 6.5h8m-8 3.998h5m-5 4.002h8"></svg:path><svg:path fill="currentColor" d="M4.499 7.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"></svg:path></svg:g>`,
})
export class SystemUiconsSideMenuIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSignalFullIcon],svg[system-uicons-signal-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16.5v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0m4 0v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0m4 0v-9a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0"></svg:path>`,
})
export class SystemUiconsSignalFullIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSignalLowIcon],svg[system-uicons-signal-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path fill="currentColor" d="M5.5 16.5v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0"></svg:path><svg:path d="M9.5 16.5v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0m4 0v-9a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0"></svg:path></svg:g>`,
})
export class SystemUiconsSignalLowIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSignalMediumIcon],svg[system-uicons-signal-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path fill="currentColor" d="M5.5 16.5v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0m4 0v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0"></svg:path><svg:path d="M13.5 16.5v-9a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0"></svg:path></svg:g>`,
})
export class SystemUiconsSignalMediumIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSignalNoneIcon],svg[system-uicons-signal-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16.5v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0m4 0v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0m4 0v-9a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0"></svg:path>`,
})
export class SystemUiconsSignalNoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSlashBackwardIcon],svg[system-uicons-slash-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 3.5l4 14"></svg:path>`,
})
export class SystemUiconsSlashBackwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSlashForwardIcon],svg[system-uicons-slash-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 3.5l-4 14"></svg:path>`,
})
export class SystemUiconsSlashForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSlidersIcon],svg[system-uicons-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 9V2.5m0 16V14"></svg:path><svg:circle cx="14.5" cy="11.5" r="2.5"></svg:circle><svg:path d="M6.5 5V2.5m0 16V10"></svg:path><svg:circle cx="6.5" cy="7.5" r="2.5"></svg:circle></svg:g>`,
})
export class SystemUiconsSlidersIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSortIcon],svg[system-uicons-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 12.5l4 4.107l4-4.107m-8-4l-4-4l-4 3.997m4-3.997v12m8-12v12"></svg:path>`,
})
export class SystemUiconsSortIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSortAltIcon],svg[system-uicons-sort-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 8.5l4 4l4-4m-4-6v10m-4 .044L6.5 8.5l-4 4.044m4-4.044v10"></svg:path>`,
})
export class SystemUiconsSortAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSpeakerIcon],svg[system-uicons-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(5 3)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:circle cx="5.5" cy="9.5" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="5.5" cy="3.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsSpeakerIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSpeechBubbleIcon],svg[system-uicons-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 16.517c4.418 0 8-3.284 8-7.017S15.418 3 11 3S3 6.026 3 9.759c0 1.457.546 2.807 1.475 3.91L3.5 18.25l3.916-2.447a9.2 9.2 0 0 0 3.584.714"></svg:path>`,
})
export class SystemUiconsSpeechBubbleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSpeechTypingIcon],svg[system-uicons-speech-typing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 16.517c4.418 0 8-3.026 8-6.758S15.418 3 11 3S3 6.026 3 9.759c0 1.457.546 2.807 1.475 3.91L3.5 18.25l3.916-2.447a9.2 9.2 0 0 0 3.584.714"></svg:path><svg:path fill="currentColor" d="M10.999 11c.5 0 1-.5 1-1s-.5-1-1-1S10 9.5 10 10s.499 1 .999 1m-4 0c.5 0 1-.5 1-1s-.5-1-1-1S6 9.5 6 10s.499 1 .999 1m8 0c.5 0 1.001-.5 1.001-1s-.5-1-1-1s-1 .5-1 1s.5 1 1 1"></svg:path></svg:g>`,
})
export class SystemUiconsSpeechTypingIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSplitIcon],svg[system-uicons-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 5.5h-10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-5 0v10"></svg:path>`,
})
export class SystemUiconsSplitIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSplitThreeIcon],svg[system-uicons-split-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 5.5h-12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-9 0v10m6-10v10"></svg:path>`,
})
export class SystemUiconsSplitThreeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsStarIcon],svg[system-uicons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 14.5l-5 3l2-5.131l-4-3.869h5l2-5l2 5h5l-4 4l2 5z"></svg:path>`,
})
export class SystemUiconsStarIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSunIcon],svg[system-uicons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4s1.781 4 4 4M4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></svg:path><svg:g transform="translate(-210 -1)"><svg:path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></svg:path><svg:circle cx="220.5" cy="11.5" r="4"></svg:circle><svg:path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></svg:path></svg:g></svg:g>`,
})
export class SystemUiconsSunIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSupportIcon],svg[system-uicons-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:circle cx="10.5" cy="10.5" r="4"></svg:circle><svg:path d="M13.5 7.5L16 5m-2.5 8.5L16 16m-8.5-2.5L5 16m2.5-8.5L5 5"></svg:path></svg:g>`,
})
export class SystemUiconsSupportIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSwapIcon],svg[system-uicons-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 8h5V3"></svg:path><svg:path d="M18 8q-4.255-5-8.5-5T2 6m4.5 5.5h-5v5"></svg:path><svg:path d="M1.5 11.5q4.255 5 8.5 5t7.5-3"></svg:path></svg:g>`,
})
export class SystemUiconsSwapIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSwitchIcon],svg[system-uicons-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 3)"><svg:path d="M1.5.5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1"></svg:path><svg:circle cx="4.5" cy="4" r="1.5"></svg:circle><svg:path d="M.5 7.5h8m-4 2v3"></svg:path></svg:g>`,
})
export class SystemUiconsSwitchIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTableIcon],svg[system-uicons-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.498 15.498l-.01-10a2 2 0 0 0-2-1.998h-10a2 2 0 0 0-1.995 1.85l-.006.152l.01 10a2 2 0 0 0 2 1.998h10a2 2 0 0 0 1.995-1.85zM7.5 3.5v13.817m10-9.817h-14"></svg:path>`,
})
export class SystemUiconsTableIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTableHeaderIcon],svg[system-uicons-table-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.498 15.498l-.01-10a2 2 0 0 0-2-1.998h-10a2 2 0 0 0-1.995 1.85l-.006.152l.01 10a2 2 0 0 0 2 1.998h10a2 2 0 0 0 1.995-1.85zM7.5 7.5v9.817m10-9.817h-14"></svg:path>`,
})
export class SystemUiconsTableHeaderIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTagIcon],svg[system-uicons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(3 3)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.914.5H12.5a2 2 0 0 1 2 2v3.586a1 1 0 0 1-.293.707l-6.793 6.793a2 2 0 0 1-2.828 0l-3.172-3.172a2 2 0 0 1 0-2.828L8.207.793A1 1 0 0 1 8.914.5"></svg:path><svg:circle cx="12" cy="3" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsTagIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTagMilestoneIcon],svg[system-uicons-tag-milestone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.224V15.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.224a2 2 0 0 0-.464-1.28l-3.768-4.522a1 1 0 0 0-1.536 0L5.964 7.944a2 2 0 0 0-.464 1.28"></svg:path>`,
})
export class SystemUiconsTagMilestoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTagsIcon],svg[system-uicons-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(1 3)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.914.5H15.5a2 2 0 0 1 2 2v3.586a1 1 0 0 1-.293.707l-6.793 6.793a2 2 0 0 1-2.828 0l-3.172-3.172a2 2 0 0 1 0-2.828L11.207.793A1 1 0 0 1 11.914.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 13.5l-2.013 1.006A2 2 0 0 1 2.72 13.42L1.105 9.114a2 2 0 0 1 .901-2.45L9.5 2.5"></svg:path><svg:rect width="2" height="2" x="14" y="2" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class SystemUiconsTagsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTargetIcon],svg[system-uicons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:circle cx="10.5" cy="10.5" r="2"></svg:circle><svg:circle cx="10.5" cy="10.5" r="5"></svg:circle></svg:g>`,
})
export class SystemUiconsTargetIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTerminalIcon],svg[system-uicons-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.5h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m5 9h3"></svg:path><svg:path d="m6.5 12.5l2-2l-2-2"></svg:path></svg:g>`,
})
export class SystemUiconsTerminalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsThreadIcon],svg[system-uicons-thread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3l2.468-.001l1.715 2.43a1 1 0 0 0 .696.415l.121.008a1 1 0 0 0 .993-.884l.007-.116l.001-1.853l.999.001a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3z"></svg:path><svg:path d="m6.5 13.5l-2 2v-4h-.906a2 2 0 0 1-2-1.977l-.07-6a2 2 0 0 1 2-2.023H12.5a2 2 0 0 1 2 2v2"></svg:path></svg:g>`,
})
export class SystemUiconsThreadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsThumbsDownIcon],svg[system-uicons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.643 4.243L10.499 5.5h-4v7h2L11.3 18q.87 0 1.485-.615T13.4 15.9l-.9-2.4l4.031-1.344a2 2 0 0 0 1.309-2.38l-.069-.22l-1.553-4.142a2 2 0 0 0-2.575-1.17"></svg:path><svg:path d="M3.5 13.5h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class SystemUiconsThumbsDownIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsThumbsUpIcon],svg[system-uicons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.643 16.757L10.499 15.5h-4v-7h2L11.3 3q.87 0 1.485.615T13.4 5.1l-.9 2.4l4.031 1.344a2 2 0 0 1 1.309 2.38l-.069.22l-1.553 4.142a2 2 0 0 1-2.575 1.17"></svg:path><svg:path d="M3.5 7.5h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsThumbsUpIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTicketIcon],svg[system-uicons-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 2.486V2.5a2 2 0 1 0 4 0l-.001-.015H14.5a1 1 0 0 1 1 1V16.5a1 1 0 0 1-1 1H12a2 2 0 1 0-4 0H5.5a1 1 0 0 1-1-1V3.485a1 1 0 0 1 1-1zM6.5 6.5h1m2 0h1m2 0h1m-7 7h1m2 0h1m2 0h1"></svg:path>`,
})
export class SystemUiconsTicketIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTimelineIcon],svg[system-uicons-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h7m-3.002 4h6.669m-6.669-2H12.5m-3.002 4H17.5"></svg:path>`,
})
export class SystemUiconsTimelineIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTodoIcon],svg[system-uicons-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:g fill="currentColor" transform="translate(3 3)"><svg:circle cx="7.5" cy="7.5" r="1" transform="matrix(-1 0 0 1 15 0)"></svg:circle><svg:circle cx="3.5" cy="7.5" r="1"></svg:circle><svg:circle cx="11.5" cy="7.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsTodoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsToggleIcon],svg[system-uicons-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 7)"><svg:circle cx="3.5" cy="3.5" r="3"></svg:circle><svg:path d="M6 1.5h6.5c.828 0 2 .325 2 2s-1.172 2-2 2H6"></svg:path></svg:g>`,
})
export class SystemUiconsToggleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTogglesIcon],svg[system-uicons-toggles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 4)"><svg:circle cx="3.5" cy="3.5" r="3"></svg:circle><svg:path d="M6 1.5h6.5c.828 0 2 .325 2 2s-1.172 2-2 2H6m5.5 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path d="M9 8.5H2.5c-.828 0-2 .325-2 2s1.172 2 2 2H9"></svg:path></svg:g>`,
})
export class SystemUiconsTogglesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTranslateIcon],svg[system-uicons-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 10.5v-6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2"></svg:path><svg:path d="M6.5 8.503h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.003l6-.01a2 2 0 0 0 1.997-2V14.5m-5-1.997h-3"></svg:path><svg:path d="m9 14l-1 1q-.5.5-2.5 1.5"></svg:path><svg:path d="M5.5 12.503q.501 1.75 1.5 2.499C8 15.75 8.5 16 9.5 16.5m4-12l-3 6m3-6l3 6m-1-2h-4"></svg:path></svg:g>`,
})
export class SystemUiconsTranslateIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTrashIcon],svg[system-uicons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4.5h10v12a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm5-2a2 2 0 0 1 1.995 1.85l.005.15h-4a2 2 0 0 1 2-2m-7 2h14m-9 3v8m4-8v8"></svg:path>`,
})
export class SystemUiconsTrashIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTrashAltIcon],svg[system-uicons-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.043 4.773Q8 4.02 10.5 4.01t4.457.763a3 3 0 0 1 2.14 3.341l-1.075 6.994a4 4 0 0 1-3.954 3.392H8.932a4 4 0 0 1-3.954-3.392L3.902 8.114a3 3 0 0 1 2.141-3.34"></svg:path><svg:path fill="currentColor" d="M10.5 10c3.556 0 5-1.5 5-2.5s-1.444-2.25-5-2.25s-5 1.25-5 2.25s1.444 2.5 5 2.5"></svg:path></svg:g>`,
})
export class SystemUiconsTrashAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTrophyIcon],svg[system-uicons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h6a1 1 0 0 1 1 1v5a4 4 0 1 1-8 0v-5a1 1 0 0 1 1-1m3 10v3m-3 0h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2m7-11h2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1zm-8 0h-2a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1z"></svg:path>`,
})
export class SystemUiconsTrophyIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTvModeIcon],svg[system-uicons-tv-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.493 5.534l10-.036a2 2 0 0 1 2.007 2V12.5a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V7.534a2 2 0 0 1 1.993-2"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="M12.467 9.6L9.8 7.6A.5.5 0 0 0 9 8v4a.5.5 0 0 0 .8.4l2.667-2a.5.5 0 0 0 0-.8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.464 16.5H15.5"></svg:path></svg:g>`,
})
export class SystemUiconsTvModeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUnarchiveIcon],svg[system-uicons-unarchive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 7.5h14v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2zm0-3.978h14a1 1 0 0 1 1 1V6.5a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V4.522a1 1 0 0 1 1-1"></svg:path><svg:path d="m7.5 13.5l3-3l3 3"></svg:path></svg:g>`,
})
export class SystemUiconsUnarchiveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUndoIcon],svg[system-uicons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 13.5q5-6 9-6t7 3"></svg:path><svg:path d="M2.5 8.5v5h5"></svg:path></svg:g>`,
})
export class SystemUiconsUndoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUndoHistoryIcon],svg[system-uicons-undo-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 10.55a8 8 0 1 1 1.073 3.952"></svg:path><svg:path fill="currentColor" fill-rule="nonzero" d="m2.5 13.5l2.5-3H0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5v5h3"></svg:path></svg:g>`,
})
export class SystemUiconsUndoHistoryIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUnlinkHorizontalIcon],svg[system-uicons-unlink-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 14.5h-1a4 4 0 1 1 0-8h1m4 0h1a4 4 0 1 1 0 8h-1"></svg:path>`,
})
export class SystemUiconsUnlinkHorizontalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUnlinkVerticalIcon],svg[system-uicons-unlink-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v1a4 4 0 1 1-8 0v-1m0-4v-1a4 4 0 1 1 8 0v1"></svg:path>`,
})
export class SystemUiconsUnlinkVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUploadIcon],svg[system-uicons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 7.753l4-4.232l4 4.191m-4-4.212v11m-6 3h12"></svg:path>`,
})
export class SystemUiconsUploadIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUploadAltIcon],svg[system-uicons-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 7.5l-3.978-4l-4.022 4m4.022-3.979V15.5M3.5 12v4.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V12"></svg:path>`,
})
export class SystemUiconsUploadAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUpwardIcon],svg[system-uicons-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.21 10.211Q9.103 15.99 3.5 14.492q5.567-1.486 7.711-7.28L8.5 4.5h8v8z"></svg:path>`,
})
export class SystemUiconsUpwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUserIcon],svg[system-uicons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="m11.5 4.5l2 2v1a3 3 0 0 1-5.995.176L7.5 6.5z"></svg:path><svg:path d="M5.5 12V7.5a5 5 0 1 1 10 0V12"></svg:path><svg:path stroke-linecap="round" d="M17.5 16.5v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsUserIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUserAddIcon],svg[system-uicons-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m7 2v4m2-2h-4"></svg:path><svg:path d="M17.5 16.5v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsUserAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUserCircleIcon],svg[system-uicons-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="m9.5 4.5l2 2v1a3 3 0 0 1-6 0v-1z"></svg:path><svg:path d="M3.5 12V7.5a5 5 0 1 1 10 0V12"></svg:path><svg:path stroke-linecap="round" d="M14.5 13.404c-.662-2.273-3.2-2.93-6-2.93c-2.727 0-5.27.774-6 2.93"></svg:path></svg:g>`,
})
export class SystemUiconsUserCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUserMaleIcon],svg[system-uicons-user-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path>`,
})
export class SystemUiconsUserMaleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUserMaleCircleIcon],svg[system-uicons-user-male-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="M14.5 13.5c-.662-2.274-3.2-3.025-6-3.025c-2.727 0-5.27.869-6 3.025"></svg:path><svg:path d="M8.5 2.5a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0v-2a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class SystemUiconsUserMaleCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUserRemoveIcon],svg[system-uicons-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m9 4h-4"></svg:path><svg:path d="M17.5 16.5v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class SystemUiconsUserRemoveIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUsersIcon],svg[system-uicons-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path><svg:path fill="currentColor" d="M12.52 2.678A3 3 0 0 1 14.5 5.5v1c0 1.297-.848 2.581-2 3q1.01-1.379 1.01-3.5c0-2.122-.331-2.523-.99-3.322M17.5 17.5h1a1 1 0 0 0 1-1v-.728c0-2.17-1.71-3.83-3.847-4.667c0 0 2.847 2.395 1.847 6.395"></svg:path></svg:g>`,
})
export class SystemUiconsUsersIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVennIcon],svg[system-uicons-venn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="13.5" cy="10.5" r="5"></svg:circle><svg:circle cx="7.5" cy="10.5" r="5"></svg:circle></svg:g>`,
})
export class SystemUiconsVennIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVersionIcon],svg[system-uicons-version-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 12.5l8 4l8.017-4M2.5 8.657l8.008 3.843l8.009-3.843L10.508 4.5z"></svg:path>`,
})
export class SystemUiconsVersionIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVersionsIcon],svg[system-uicons-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 10.5l8 4l8.017-4M2.5 14.5l8 4l8.017-4M2.5 6.657l8.008 3.843l8.009-3.843L10.508 2.5z"></svg:path>`,
})
export class SystemUiconsVersionsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVideoIcon],svg[system-uicons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 6.5h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m8 3l2.4-1.8a1 1 0 0 1 1.6.8v4a1 1 0 0 1-1.6.8l-2.4-1.8z"></svg:path>`,
})
export class SystemUiconsVideoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolume0Icon],svg[system-uicons-volume-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class SystemUiconsVolume0Icon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolumeAddIcon],svg[system-uicons-volume-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 3h4m-2 2v-4z"></svg:path>`,
})
export class SystemUiconsVolumeAddIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolumeDisabledIcon],svg[system-uicons-volume-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 9.5v9l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3L8 6m1.521-1.521L11.5 2.5v5m-6-4l12 12m-4-7v1m2.22 4.208q-.505.713-2.22 1.792m0-4v1m3-.5v-1.5q0-2.742-2.5-4.5"></svg:path>`,
})
export class SystemUiconsVolumeDisabledIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolumeHighIcon],svg[system-uicons-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 8q2-1.5 2-5t-2-5m0 3v4"></svg:path>`,
})
export class SystemUiconsVolumeHighIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolumeLowIcon],svg[system-uicons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 1v4"></svg:path>`,
})
export class SystemUiconsVolumeLowIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolumeMinusIcon],svg[system-uicons-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 3h4"></svg:path>`,
})
export class SystemUiconsVolumeMinusIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsVolumeMutedIcon],svg[system-uicons-volume-muted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 1l4 4m-4 0l4-4z"></svg:path>`,
})
export class SystemUiconsVolumeMutedIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWalletIcon],svg[system-uicons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(3 4)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 2.5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2zm1-2h9a1 1 0 0 1 1 1v1H.5v-1a1 1 0 0 1 1-1"></svg:path><svg:circle cx="11.5" cy="7.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWalletIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWarningCircleIcon],svg[system-uicons-warning-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="10.5" cy="10.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 11.5v-5"></svg:path><svg:circle cx="10.5" cy="14.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWarningCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWarningHexIcon],svg[system-uicons-warning-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(-1 -1)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.517 3.5l4.983 5v6l-4.983 5H8.5l-5-5v-6l5-5zm-3.017 9v-5"></svg:path><svg:circle cx="11.5" cy="15.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWarningHexIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWarningTriangleIcon],svg[system-uicons-warning-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(1 1)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5.5l9 16H.5zm0 10v-5"></svg:path><svg:circle cx="9.5" cy="13.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWarningTriangleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWavesIcon],svg[system-uicons-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5a8 8 0 0 0-8-8m5 8a5 5 0 0 0-5-5m2 5a2 2 0 0 0-2-2"></svg:path>`,
})
export class SystemUiconsWavesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWidthIcon],svg[system-uicons-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.507 14.515l4-4l-4-4.015m-10 8.015l-4-4l4-4.015m13.993 4h-18"></svg:path>`,
})
export class SystemUiconsWidthIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWifiIcon],svg[system-uicons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 6)"><svg:path d="M2.727 5.033c2.781-2.264 6.82-2.264 9.6 0M.287 2.667c4.122-3.554 10.304-3.554 14.427 0m-9.58 4.74a4.17 4.17 0 0 1 4.739 0"></svg:path><svg:circle cx="7.5" cy="9.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWifiIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWifiErrorIcon],svg[system-uicons-wifi-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 4)"><svg:path d="M2.727 7.033A7.5 7.5 0 0 1 5.492 5.61m4.05-.005a7.5 7.5 0 0 1 2.785 1.43M7.5 8.5l.027-8M.286 4.667A11 11 0 0 1 5.511 2.18m4.087.02a11 11 0 0 1 5.116 2.467m-9.58 4.74q.242-.168.5-.298m3.706-.016q.275.135.533.314"></svg:path><svg:circle cx="7.5" cy="11.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWifiErrorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWifiNoneIcon],svg[system-uicons-wifi-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 4)"><svg:path d="M2.727 7.033a7.56 7.56 0 0 1 3.46-1.58m2.495-.031a7.56 7.56 0 0 1 3.645 1.611M.287 4.667a10.9 10.9 0 0 1 3.331-1.969m2.09-.552c3.141-.51 6.465.33 9.006 2.52M1 0l13 13.071M5.134 9.407a4.17 4.17 0 0 1 4.739 0"></svg:path><svg:circle cx="7.5" cy="11.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWifiNoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWindowIcon],svg[system-uicons-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5.5 5.5h10a2 2 0 0 1 2 2v-2c0-1-.895-2-2-2h-10c-1.105 0-2 1-2 2v2a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class SystemUiconsWindowIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWindowCollapseLeftIcon],svg[system-uicons-window-collapse-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 15.5v-10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" d="M5.5 15.5v-10a2 2 0 0 1 2-2h-2c-1 0-2 .895-2 2v10c0 1.105 1 2 2 2h2a2 2 0 0 1-2-2"></svg:path><svg:path d="m10.5 13.5l-3-3l3-3m5 3h-8"></svg:path></svg:g>`,
})
export class SystemUiconsWindowCollapseLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWindowCollapseRightIcon],svg[system-uicons-window-collapse-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 15.5v-10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" d="M15.5 15.5v-10a2 2 0 0 0-2-2h2c1 0 2 .895 2 2v10c0 1.105-1 2-2 2h-2a2 2 0 0 0 2-2"></svg:path><svg:path d="m10.5 13.5l3-3l-3-3m3 3h-8"></svg:path></svg:g>`,
})
export class SystemUiconsWindowCollapseRightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWindowContentIcon],svg[system-uicons-window-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M5.5 5.5h10a2 2 0 0 1 2 2v-2c0-1-.895-2-2-2h-10c-1.105 0-2 1-2 2v2a2 2 0 0 1 2-2"></svg:path><svg:path d="M7.498 10.5h1m-1-2h3.997m-3.997 4h5.997m-5.997 2h3.997"></svg:path></svg:g>`,
})
export class SystemUiconsWindowContentIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWrapBackIcon],svg[system-uicons-wrap-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.499 6.498L3.5 9.5l3 3"></svg:path><svg:path d="M8.5 15.5h5q3 0 3-3c0-3-1-3-3-3h-10"></svg:path></svg:g>`,
})
export class SystemUiconsWrapBackIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWrapForwardIcon],svg[system-uicons-wrap-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.5 12.5l2.998-3.002l-3-3"></svg:path><svg:path d="M12.5 15.5h-5q-3 0-3-3c0-3 1-3 3-3h10"></svg:path></svg:g>`,
})
export class SystemUiconsWrapForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWriteIcon],svg[system-uicons-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 4a2.12 2.12 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zM9.5 17.5h8m-2-11l1 1"></svg:path>`,
})
export class SystemUiconsWriteIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomCancelIcon],svg[system-uicons-zoom-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:path d="m7.5 7.5l-4-4zm-4 0l4-4zm11 7L9.076 9.076"></svg:path></svg:g>`,
})
export class SystemUiconsZoomCancelIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomInIcon],svg[system-uicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:path d="M7.5 5.5h-4zm-2 2v-4zm9 7L9.133 9.133"></svg:path></svg:g>`,
})
export class SystemUiconsZoomInIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomOutIcon],svg[system-uicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><svg:circle cx="5.5" cy="5.5" r="5"></svg:circle><svg:path d="M7.5 5.5h-4zm7.071 9l-5.45-5.381"></svg:path></svg:g>`,
})
export class SystemUiconsZoomOutIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomResetIcon],svg[system-uicons-zoom-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 8.5a5 5 0 1 0 1.057-3.074"></svg:path><svg:path d="M4.5 1.5v4h4m9 12l-5.379-5.379"></svg:path></svg:g>`,
})
export class SystemUiconsZoomResetIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
