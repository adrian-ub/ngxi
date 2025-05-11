import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSuitcaseBagIcon],svg[marketeq-suitcase-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 6.25h8.334a6.25 6.25 0 0 1 6.25 6.25v2.083H14.583V12.5a6.25 6.25 0 0 1 6.25-6.25M22.917 25h4.166"></svg:path><svg:path stroke="#306CFE" d="m41.313 29.98l-1.5 11.937a2.084 2.084 0 0 1-2.084 1.833H12.25a2.084 2.084 0 0 1-2.083-1.833l-1.5-11.938"></svg:path><svg:path stroke="#306CFE" d="m42.333 29.646l-9.437 3.146a25 25 0 0 1-15.792 0l-9.437-3.146a2.084 2.084 0 0 1-1.417-2.084V14.584h37.5v13.084a2.08 2.08 0 0 1-1.417 1.979"></svg:path></svg:g>`,
})
export class MarketeqSuitcaseBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSuspensionIcon],svg[marketeq-suspension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75a4.167 4.167 0 1 1 0-8.334a4.167 4.167 0 0 1 0 8.334m0-8.333v-25zM27.083 6.25h-4.166v4.167h4.166z"></svg:path><svg:path stroke="#344054" d="m20.833 17.708l8.334-2.083m-8.334 8.333l8.334-2.083zm0 6.25l8.334-2.083z"></svg:path></svg:g>`,
})
export class MarketeqSuspensionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSuspension2Icon],svg[marketeq-suspension-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M20.833 39.583a4.166 4.166 0 1 1 8.332 0a4.166 4.166 0 0 1-8.332 0M25 10.417v25zm-2.083 0h4.166V6.25h-4.166z"></svg:path><svg:path stroke="#344054" d="m20.833 15.625l8.334 2.083m-8.334 4.167l8.334 2.083zm0 6.25l8.334 2.083z"></svg:path></svg:g>`,
})
export class MarketeqSuspension2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSwissArmyKnifeIcon],svg[marketeq-swiss-army-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m22.917 23.896l4.875 4.896a8.334 8.334 0 0 0 11.791 0L22.917 12.125q.015.188 0 .375z"></svg:path><svg:path stroke="#306CFE" d="M22.917 12.5a6.25 6.25 0 1 0-12.5 0v25a6.25 6.25 0 1 0 12.5 0z"></svg:path></svg:g>`,
})
export class MarketeqSwissArmyKnifeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSwitchDoubleIcon],svg[marketeq-switch-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M29.167 13.542a7.17 7.17 0 0 0 2.208 5.208H11.458a5.209 5.209 0 0 1 0-10.417h19.917a7.17 7.17 0 0 0-2.208 5.209"></svg:path><svg:path stroke="#344054" d="M43.75 12.917a7.27 7.27 0 0 0-12.375-4.584a7.292 7.292 0 0 0 5.083 12.5a7.27 7.27 0 0 0 7.292-6.666q.03-.313 0-.625q.03-.313 0-.625"></svg:path><svg:path stroke="#306CFE" d="M20.833 36.458a7.17 7.17 0 0 0-2.208-5.208h19.917a5.208 5.208 0 1 1 0 10.417H18.625a7.17 7.17 0 0 0 2.208-5.209"></svg:path><svg:path stroke="#344054" d="M6.25 37.083a7.27 7.27 0 0 0 12.375 4.584a7.291 7.291 0 0 0-5.083-12.5a7.27 7.27 0 0 0-7.292 6.666a4.7 4.7 0 0 0 0 1.25"></svg:path></svg:g>`,
})
export class MarketeqSwitchDoubleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSwitchLeftIcon],svg[marketeq-switch-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M19.792 30.208a5.208 5.208 0 1 0 0-10.416a5.208 5.208 0 0 0 0 10.416"></svg:path><svg:path stroke="#306CFE" d="M31.25 37.5c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5h-12.5c-6.904 0-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5z"></svg:path></svg:g>`,
})
export class MarketeqSwitchLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSwitchRightIcon],svg[marketeq-switch-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M30.208 30.208a5.208 5.208 0 1 0 0-10.416a5.208 5.208 0 0 0 0 10.416"></svg:path><svg:path stroke="#306CFE" d="M31.25 12.5h-12.5c-6.904 0-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5h12.5c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5"></svg:path></svg:g>`,
})
export class MarketeqSwitchRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTableLampIcon],svg[marketeq-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 31.25v12.5m-6.25 0h12.5z"></svg:path><svg:path stroke="#344054" d="M37.5 31.25L34.188 8.042a2.084 2.084 0 0 0-2.084-1.792H17.875a2.08 2.08 0 0 0-2.083 1.792L12.5 31.25z"></svg:path></svg:g>`,
})
export class MarketeqTableLampIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTabletLaptopIcon],svg[marketeq-tablet-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M18.75 31.25H6.25v2.083a2.083 2.083 0 0 0 2.083 2.084H18.75zm0-14.583a2.083 2.083 0 0 1 2.083-2.084h20.834v-6.25a2.083 2.083 0 0 0-2.084-2.083H10.417a2.083 2.083 0 0 0-2.084 2.083V31.25H18.75z"></svg:path><svg:path stroke="#344054" d="M41.667 14.583H20.833c-1.15 0-2.083.933-2.083 2.084v25c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083v-25c0-1.15-.933-2.084-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqTabletLaptopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTakeOffIcon],svg[marketeq-take-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 43.75h37.5"></svg:path><svg:path stroke="#306CFE" d="m42.604 14.333l-9.646 4.604a2.08 2.08 0 0 0-1.062 1.125l-2.5 6.417c-.151.398-.42.74-.771.98l-5.708 3.79l.937-7.978l-7.562 3.604a2.29 2.29 0 0 1-2.605-.48L6.25 18.209l3.77-2.354a2.23 2.23 0 0 1 2.48.063l2.708 1.875L31.5 7.604a8.33 8.33 0 0 1 4.563-1.354a7.67 7.67 0 0 1 7.062 4.5l.48 1.167a1.875 1.875 0 0 1-1 2.416"></svg:path></svg:g>`,
})
export class MarketeqTakeOffIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTaxIcon],svg[marketeq-tax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M43.75 12.5L31.25 25m-2.083 10.417H14.583zm-6.25-8.334h-8.334z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M32.188 13.542h.208m10.208 10.416h.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M37.5 33.333v8.334a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h14.584"></svg:path></svg:g>`,
})
export class MarketeqTaxIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTelescopeIcon],svg[marketeq-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m27.083 25l6.25 18.75M27.083 25l-6.25 18.75z"></svg:path><svg:path stroke="#306CFE" d="M43.75 22.354L39.438 6.25m3.77 14.083l-22.125 5.938a2.08 2.08 0 0 1-2.562-1.48l-2.146-8.124a2.083 2.083 0 0 1 1.458-2.563l22.146-5.77zM8.333 27.5l10.105-2.708l-2.063-8.125L6.25 19.458z"></svg:path></svg:g>`,
})
export class MarketeqTelescopeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTentIcon],svg[marketeq-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m26.938 27.75l6.395 16H16.667l6.395-16a2.082 2.082 0 0 1 3.875 0"></svg:path><svg:path stroke="#306CFE" d="M25 6.25a42 42 0 0 1-14.583 11.208L8.52 41.5a2.083 2.083 0 0 0 2.083 2.25h28.813A2.085 2.085 0 0 0 41.5 41.5l-1.917-24.042A42 42 0 0 1 25 6.25"></svg:path><svg:path stroke="#344054" d="M6.25 18.75C16.667 16.667 25 6.25 25 6.25s8.333 10.417 18.75 12.5"></svg:path></svg:g>`,
})
export class MarketeqTentIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTicketIcon],svg[marketeq-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 27.083v-4.166m0-12.5v4.166zm0 25v4.166z"></svg:path><svg:path stroke="#306CFE" d="M37.5 25a6.25 6.25 0 0 0 6.25 6.25v6.25a2.083 2.083 0 0 1-2.083 2.083H8.333A2.083 2.083 0 0 1 6.25 37.5v-6.25a6.25 6.25 0 0 0 0-12.5V12.5a2.083 2.083 0 0 1 2.083-2.083h33.334A2.083 2.083 0 0 1 43.75 12.5v6.25A6.25 6.25 0 0 0 37.5 25"></svg:path></svg:g>`,
})
export class MarketeqTicketIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTimeClockIcon],svg[marketeq-time-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583V25h-8.333"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqTimeClockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTimer5SecondIcon],svg[marketeq-timer-5-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 20.833v8.334l2.917 3.27M18.75 6.25h12.5m4.792 10.833l3.125-3.125zm-22.084 0l-3.125-3.125zM25 12.5V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqTimer5SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTimerErrorIcon],svg[marketeq-timer-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 34.375h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M18.75 6.25h12.5M25 25v-4.167zm0-12.5V6.25z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m36.042 17.083l3.125-3.125zm-22.084 0l-3.125-3.125zM9.375 28.125a15.625 15.625 0 1 0 31.25 0a15.625 15.625 0 0 0-31.25 0"></svg:path></svg:g>`,
})
export class MarketeqTimerErrorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToasterIcon],svg[marketeq-toaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 35.417h-4.167M12.5 6.25h20.833a4.167 4.167 0 1 1 0 8.333v8.334H12.5v-8.334a4.167 4.167 0 1 1 0-8.333"></svg:path><svg:path stroke="#306CFE" d="M39.583 29.167h4.167zm0 12.5V25a2.083 2.083 0 0 0-2.083-2.083H8.333A2.083 2.083 0 0 0 6.25 25v16.667a2.083 2.083 0 0 0 2.083 2.083H37.5a2.083 2.083 0 0 0 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqToasterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToaster2Icon],svg[marketeq-toaster-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 35.417h4.167m6.25-25a4.167 4.167 0 0 1-4.167 4.166v8.334H16.667v-8.334a4.167 4.167 0 1 1 0-8.333H37.5a4.167 4.167 0 0 1 4.167 4.167"></svg:path><svg:path stroke="#306CFE" d="M10.417 29.167H6.25M12.5 43.75h29.167a2.083 2.083 0 0 0 2.083-2.083V25a2.083 2.083 0 0 0-2.083-2.083H12.5A2.083 2.083 0 0 0 10.417 25v16.667A2.083 2.083 0 0 0 12.5 43.75"></svg:path></svg:g>`,
})
export class MarketeqToaster2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToiletIcon],svg[marketeq-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m20.833 22.917l12.5-10.417"></svg:path><svg:path stroke="#306CFE" d="M33.333 31.25H16.667l-2.084 12.5h20.834zm-12.5-8.333H12.5V8.333a2.083 2.083 0 0 1 2.083-2.083h4.167a2.083 2.083 0 0 1 2.083 2.083zM37.5 27.083v-4.166h-25v4.166a4.167 4.167 0 0 0 4.167 4.167h16.666a4.167 4.167 0 0 0 4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqToiletIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToilet2Icon],svg[marketeq-toilet-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 22.917H14.583V6.25h20.834zm2.083 4.166v-4.166h-25v4.166a4.167 4.167 0 0 0 4.167 4.167h16.666a4.167 4.167 0 0 0 4.167-4.167m-4.167 4.167H16.667l-2.084 12.5h20.834z"></svg:path><svg:path stroke="#344054" d="M10.417 22.917h29.166M12.5 6.25h25z"></svg:path></svg:g>`,
})
export class MarketeqToilet2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToiletPaperIcon],svg[marketeq-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M14.583 18.854v-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M14.583 29.167h8.334zm0-20.834C9.98 8.333 6.25 13 6.25 18.75s3.73 10.417 8.333 10.417c4.605 0 8.334-4.667 8.334-10.417s-3.73-10.417-8.334-10.417"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M22.917 18.75v22.917H43.75V18.75c0-5.75-3.73-10.417-8.333-10.417H14.583"></svg:path></svg:g>`,
})
export class MarketeqToiletPaperIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToiletPaper7Icon],svg[marketeq-toilet-paper-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M18.854 14.583h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M29.167 14.583v8.334zM18.75 22.917c5.75 0 10.417-3.73 10.417-8.334S24.5 6.25 18.75 6.25S8.333 9.98 8.333 14.583c0 4.605 4.667 8.334 10.417 8.334"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M18.75 22.917h22.917l-2.084 3.479l2.084 3.479l-2.084 3.458l2.084 3.459l-2.084 3.479l2.084 3.479H18.75c-5.75 0-10.417-3.73-10.417-8.333V14.583"></svg:path></svg:g>`,
})
export class MarketeqToiletPaper7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqToiletPaper9Icon],svg[marketeq-toilet-paper-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 14.583h-8.334m8.334 12.5V43.75l-3.48-2.083l-3.479 2.083L25 41.667l-3.458 2.083l-3.5-2.083l-3.459 2.083V27.083zm-16.667-12.5h-4.167z"></svg:path><svg:path stroke="#306CFE" d="M43.75 25V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083V25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqToiletPaper9Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTopCircleIcon],svg[marketeq-top-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333V16.667m-5.208 5.208L25 16.667l5.208 5.208"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqTopCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTouchidIcon],svg[marketeq-touchid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 22.917a33.2 33.2 0 0 1-6.25 20.833m-14.229-7.98c1.73-1.77 3.813-9.29 3.813-12.853A8.333 8.333 0 0 1 25 14.583a8.1 8.1 0 0 1 4.167 1.125"></svg:path><svg:path stroke="#306CFE" d="M18.75 7.458A16.9 16.9 0 0 1 25 6.25a16.666 16.666 0 0 1 16.667 16.667c0 2.333 0 10.416-4.167 16.666M6.958 29.167a19.7 19.7 0 0 0 1.375-6.25A16.67 16.67 0 0 1 12.5 11.896M25 22.917c0 4.166-2.083 16.666-8.333 20.833"></svg:path></svg:g>`,
})
export class MarketeqTouchidIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTranslateIcon],svg[marketeq-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 22.917a16.96 16.96 0 0 0 8.334 6.25"></svg:path><svg:path stroke="#344054" d="M20.833 29.167c8.334-2.084 8.334-12.5 8.334-12.5M25 14.583v2.084m-8.333 0h16.666z"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v25a2.083 2.083 0 0 1-2.083 2.084h-8.334L25 43.75l-8.333-8.333H8.333a2.083 2.083 0 0 1-2.083-2.084v-25A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqTranslateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTree2Icon],svg[marketeq-tree-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M34.875 25.354c.352.882.535 1.822.542 2.771a7.29 7.29 0 0 1-7.292 7.292a7.2 7.2 0 0 1-3.125-.73a7.2 7.2 0 0 1-3.125.73a7.29 7.29 0 0 1-7.292-7.292c.007-.95.19-1.889.542-2.77a7.25 7.25 0 0 1 1.688-12.21a8.333 8.333 0 0 1 16.375 0a7.25 7.25 0 0 1 1.687 12.21"></svg:path><svg:path stroke="#344054" d="M20.833 43.75h8.334m-4.167 0V22.917z"></svg:path></svg:g>`,
})
export class MarketeqTree2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTriangleRulerPencilIcon],svg[marketeq-triangle-ruler-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m30.604 6.854l-2.916 2.917a2.083 2.083 0 0 0 0 2.916l10.229 10.23h5.833v-5.834L33.52 6.854a2.083 2.083 0 0 0-2.916 0"></svg:path><svg:path stroke="#306CFE" d="M39.583 43.75H6.25V10.417z"></svg:path></svg:g>`,
})
export class MarketeqTriangleRulerPencilIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTrophyIcon],svg[marketeq-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 12.5v4.167A8.333 8.333 0 0 1 35.854 25c.187-.681.305-1.379.354-2.083l.813-10.417zm-30 9.98l-.77-9.98H6.25v4.167A8.334 8.334 0 0 0 14.23 25a11.3 11.3 0 0 1-.48-2.52"></svg:path><svg:path stroke="#306CFE" d="M29.375 32.438a11.2 11.2 0 0 1-5.604.833a10.4 10.4 0 0 1-3.125-.834L18.75 43.75h12.5zM14.75 6.25h20.5a2.084 2.084 0 0 1 2.083 2.25l-1.125 14.417a11.25 11.25 0 0 1-12.5 10.416A11.58 11.58 0 0 1 13.75 22.48L12.667 8.5a2.085 2.085 0 0 1 2.083-2.25"></svg:path><svg:path stroke="#344054" d="M35.417 43.75H14.583"></svg:path></svg:g>`,
})
export class MarketeqTrophyIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTrowel3Icon],svg[marketeq-trowel-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.813 26.188l-6.021 6.041"></svg:path><svg:path stroke="#306CFE" d="M7.48 42.52a4.167 4.167 0 0 1 0-5.874l5.874-5.896a2.08 2.08 0 0 1 2.959 0l2.937 2.938a2.083 2.083 0 0 1 0 2.958l-5.896 5.875a4.167 4.167 0 0 1-5.875 0m22.916-9.708a2.083 2.083 0 0 0 2.979 0c3.667-3.833 12.458-14.458 9.958-26.145c-11.687-2.5-22.312 6.291-26.125 10a2.083 2.083 0 0 0 0 2.979z"></svg:path></svg:g>`,
})
export class MarketeqTrowel3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTruckLiftIcon],svg[marketeq-truck-lift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 22.917H31.25m8.333 12.5V6.25zM10.417 6.25v29.167zm0 16.667h8.333z"></svg:path><svg:path stroke="#344054" d="M43.75 43.75H6.25V37.5a2.083 2.083 0 0 1 2.083-2.083h33.334A2.083 2.083 0 0 1 43.75 37.5z"></svg:path></svg:g>`,
})
export class MarketeqTruckLiftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundDownDirectionIcon],svg[marketeq-turn-around-down-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 41.667V15.625a9.355 9.355 0 0 1 9.375-9.375v0a9.354 9.354 0 0 1 9.375 9.375V43.75"></svg:path><svg:path stroke="#344054" d="m37.5 37.5l-6.25 6.25L25 37.5"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundDownDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundLeftTopDirection2Icon],svg[marketeq-turn-around-left-top-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 18.75h28.125a9.355 9.355 0 0 1 9.375 9.375v0a9.356 9.356 0 0 1-9.375 9.375h-7.292"></svg:path><svg:path stroke="#344054" d="m12.5 25l-6.25-6.25l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundLeftTopDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundRightDirection2Icon],svg[marketeq-turn-around-right-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M22.917 37.5h-7.292a9.353 9.353 0 0 1-9.375-9.375a9.354 9.354 0 0 1 9.375-9.375H43.75"></svg:path><svg:path stroke="#344054" d="m37.5 12.5l6.25 6.25L37.5 25"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundRightDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnAroundUpDirectionIcon],svg[marketeq-turn-around-up-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 8.333v26.042a9.353 9.353 0 0 1-9.375 9.375v0a9.356 9.356 0 0 1-9.375-9.375V6.25"></svg:path><svg:path stroke="#344054" d="m12.5 12.5l6.25-6.25L25 12.5"></svg:path></svg:g>`,
})
export class MarketeqTurnAroundUpDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnLeftSignIcon],svg[marketeq-turn-left-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M18.75 20.833h14.583a2.083 2.083 0 0 1 2.084 2.084v18.75A2.083 2.083 0 0 0 37.5 43.75h4.167a2.083 2.083 0 0 0 2.083-2.083V20.833a8.333 8.333 0 0 0-8.333-8.333H18.75"></svg:path><svg:path stroke="#344054" d="M18.75 12.5V6.25L8.167 15.063a2.083 2.083 0 0 0 0 3.208l10.583 8.812v-6.25"></svg:path></svg:g>`,
})
export class MarketeqTurnLeftSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTurnRightSignIcon],svg[marketeq-turn-right-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 20.833H16.667a2.083 2.083 0 0 0-2.084 2.084v18.75A2.083 2.083 0 0 1 12.5 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833a8.333 8.333 0 0 1 8.333-8.333H31.25"></svg:path><svg:path stroke="#344054" d="M31.25 12.5V6.25l10.583 8.813a2.083 2.083 0 0 1 0 3.208L31.25 27.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqTurnRightSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTvStandIcon],svg[marketeq-tv-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m29.167 22.917l2.083 8.333zM18.75 31.25l2.083-8.333zm18.75-8.333h-25a2.083 2.083 0 0 1-2.083-2.084v-12.5A2.083 2.083 0 0 1 12.5 6.25h25a2.083 2.083 0 0 1 2.083 2.083v12.5a2.083 2.083 0 0 1-2.083 2.084"></svg:path><svg:path stroke="#344054" d="M39.583 39.583v4.167M6.25 39.583h37.5V31.25H6.25zm0 0H25V31.25H6.25zm4.167 0v4.167z"></svg:path></svg:g>`,
})
export class MarketeqTvStandIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqTvStand2Icon],svg[marketeq-tv-stand-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m18.75 35.417l2.083-8.334m18.75 0H10.417A2.083 2.083 0 0 1 8.333 25V8.333a2.083 2.083 0 0 1 2.084-2.083h29.166a2.083 2.083 0 0 1 2.084 2.083V25a2.083 2.083 0 0 1-2.084 2.083m-10.416 0l2.083 8.334z"></svg:path><svg:path stroke="#344054" d="M6.25 43.75h37.5v-8.333H6.25zm0 0H25v-8.333H6.25z"></svg:path></svg:g>`,
})
export class MarketeqTvStand2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUnicycle2Icon],svg[marketeq-unicycle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M16.667 6.25h1.229c1.883.001 3.69.75 5.02 2.083v0a7.1 7.1 0 0 0 5.022 2.084h3.312"></svg:path><svg:path stroke="#344054" d="M25 43.75c5.753 0 10.417-4.664 10.417-10.417S30.753 22.917 25 22.917S14.583 27.58 14.583 33.333S19.247 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M25 33.333V10.417M6.25 39.583a39.3 39.3 0 0 0 17.646 4.167h2.208a39.3 39.3 0 0 0 17.646-4.167"></svg:path></svg:g>`,
})
export class MarketeqUnicycle2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUnlockIcon],svg[marketeq-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 18.75v-4.167A8.333 8.333 0 0 1 25 6.25v0a8.33 8.33 0 0 1 7.208 4.167"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.932-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqUnlockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUnlock1Icon],svg[marketeq-unlock-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 35.417v-2.084"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 31.25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 20.833H14.583v-4.166A10.417 10.417 0 0 1 25 6.25v0a10.42 10.42 0 0 1 9.02 5.188m5.563 11.479v5.645A14.98 14.98 0 0 1 25.438 43.75a14.583 14.583 0 0 1-15.021-14.583v-6.25a2.084 2.084 0 0 1 2.083-2.084h25a2.083 2.083 0 0 1 2.083 2.084"></svg:path></svg:g>`,
})
export class MarketeqUnlock1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpAltIcon],svg[marketeq-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 25v16.667a2.083 2.083 0 0 1-2.083 2.083h-8.334a2.083 2.083 0 0 1-2.083-2.083V25"></svg:path><svg:path stroke="#306CFE" d="m18.75 25l-4.604 3.083a2.083 2.083 0 0 1-2.834-.5L7.48 22.48a2.083 2.083 0 0 1 .396-2.896L23.729 7.25a2.08 2.08 0 0 1 2.542 0l15.854 12.333a2.083 2.083 0 0 1 .396 2.896l-3.834 5.104a2.083 2.083 0 0 1-2.833.5L31.25 25"></svg:path></svg:g>`,
})
export class MarketeqUpAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpArrowIcon],svg[marketeq-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75V6.25"></svg:path><svg:path stroke="#344054" d="M31.25 12.5L25 6.25l-6.25 6.25"></svg:path></svg:g>`,
})
export class MarketeqUpArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpDirection2Icon],svg[marketeq-up-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.854 36.896L25 24.042L12.146 36.896"></svg:path><svg:path stroke="#306CFE" d="M12.146 36.896L6.25 31.02l17.27-17.292a2.08 2.08 0 0 1 2.96 0L43.75 31l-5.896 5.896"></svg:path></svg:g>`,
})
export class MarketeqUpDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpDownArrowIcon],svg[marketeq-up-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 41.667V8.333m6.25 6.25l-6.25-6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="m27.083 35.417l6.25 6.25l6.25-6.25m-6.25-27.084v33.334"></svg:path></svg:g>`,
})
export class MarketeqUpDownArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpDownArrow2Icon],svg[marketeq-up-down-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 6.25v37.5"></svg:path><svg:path stroke="#344054" d="M18.75 12.5L25 6.25l6.25 6.25m0 25L25 43.75l-6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqUpDownArrow2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpJunctionSignIcon],svg[marketeq-up-junction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 43.75h16.666m8.334-8.333h2.083zm0 8.333h2.083zM8.333 35.417H6.25zm0 8.333H6.25z"></svg:path><svg:path stroke="#306CFE" d="M33.333 35.417h-4.166V18.75h6.25L26.604 8.167a2.083 2.083 0 0 0-3.208 0L14.583 18.75h6.25v16.667h-4.166"></svg:path></svg:g>`,
})
export class MarketeqUpJunctionSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpOctagonIcon],svg[marketeq-up-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333V16.667m-5.208 5.208L25 16.667l5.208 5.208"></svg:path><svg:path stroke="#306CFE" d="M43.75 17.23v15.54L32.77 43.75H17.23L6.25 32.77V17.23L17.23 6.25h15.54z"></svg:path></svg:g>`,
})
export class MarketeqUpOctagonIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpTrendIcon],svg[marketeq-up-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 12.5L29.167 27.083l-6.25-6.25L6.25 37.5"></svg:path><svg:path stroke="#344054" d="M43.75 20.833V12.5h-8.333"></svg:path></svg:g>`,
})
export class MarketeqUpTrendIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpdateIcon],svg[marketeq-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M8.333 25a16.667 16.667 0 0 1 31.105-8.333M41.667 25a16.667 16.667 0 0 1-31.104 8.333"></svg:path><svg:path stroke="#344054" d="M29.167 16.667h10.416V6.25m-18.75 27.083H10.417V43.75"></svg:path></svg:g>`,
})
export class MarketeqUpdateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUpload5Icon],svg[marketeq-upload-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 12.5L25 6.25l6.25 6.25M25 6.25v29.167"></svg:path><svg:path stroke="#306CFE" d="M41.667 35.417v6.25a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqUpload5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUploadAlt4Icon],svg[marketeq-upload-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 22.917V6.25m6.25 6.25L25 6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083L37.5 8.333M6.25 27.083l6.25-18.75m31.25 18.75v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V27.083h10.417a8.333 8.333 0 1 0 16.666 0z"></svg:path></svg:g>`,
})
export class MarketeqUploadAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUploadNewIcon],svg[marketeq-upload-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 25v18.75m6.479-14.625L24.854 22.5l-6.334 6.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 31.48a13.73 13.73 0 1 1 20.833-15.084a9.6 9.6 0 0 1 1.73-.167A8.73 8.73 0 0 1 37.5 33.333"></svg:path></svg:g>`,
})
export class MarketeqUploadNewIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUserIcon],svg[marketeq-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 31.25h12.5a10.417 10.417 0 0 1 10.417 10.417a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083A10.417 10.417 0 0 1 18.75 31.25"></svg:path><svg:path stroke="#306CFE" d="M25 22.917A8.333 8.333 0 1 0 25 6.25a8.333 8.333 0 0 0 0 16.667"></svg:path></svg:g>`,
})
export class MarketeqUserIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUser6Icon],svg[marketeq-user-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 27.083h4.166a14.583 14.583 0 0 1 14.584 14.584a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083a14.583 14.583 0 0 1 14.584-14.584"></svg:path><svg:path stroke="#306CFE" d="M25 27.083c5.753 0 10.417-4.663 10.417-10.416S30.753 6.25 25 6.25s-10.417 4.664-10.417 10.417S19.247 27.083 25 27.083"></svg:path></svg:g>`,
})
export class MarketeqUser6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUser7Icon],svg[marketeq-user-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 28.542a14.58 14.58 0 0 0-8.334 13.125a2.083 2.083 0 0 0 2.084 2.083h29.166a2.084 2.084 0 0 0 2.084-2.083a14.58 14.58 0 0 0-8.334-13.188"></svg:path><svg:path stroke="#306CFE" d="M25 31.25c6.904 0 12.5-5.596 12.5-12.5S31.904 6.25 25 6.25s-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqUser7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUserAlertIcon],svg[marketeq-user-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M37.604 42.708h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M37.5 27.083v6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M27.083 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083a14.59 14.59 0 0 1 6.375-12.021l.166-.104a2.084 2.084 0 0 0 .417-2.917a12.35 12.35 0 0 1-2.792-7.875a12.5 12.5 0 0 1 24.834-2.083c.12.687.176 1.385.166 2.083"></svg:path></svg:g>`,
})
export class MarketeqUserAlertIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqUserCircle2Icon],svg[marketeq-user-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a8.333 8.333 0 1 0 0-16.667a8.333 8.333 0 0 0 0 16.667"></svg:path><svg:path stroke="#344054" d="M29.52 29.896a8.23 8.23 0 0 1-9.04 0a14.58 14.58 0 0 0-8.917 8.166a18.75 18.75 0 0 0 26.687.188l.188-.188a14.6 14.6 0 0 0-8.917-8.166"></svg:path><svg:path stroke="#306CFE" d="M43.75 25c0-10.355-8.395-18.75-18.75-18.75S6.25 14.645 6.25 25S14.645 43.75 25 43.75S43.75 35.355 43.75 25"></svg:path></svg:g>`,
})
export class MarketeqUserCircle2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqVase2Icon],svg[marketeq-vase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M32.063 21.52a10.2 10.2 0 0 1 3.354 7.25a48.7 48.7 0 0 1-1.646 13.418a2.08 2.08 0 0 1-2.084 1.562H18.272a2.08 2.08 0 0 1-2.084-1.562a48.7 48.7 0 0 1-1.604-13.417a10.2 10.2 0 0 1 3.334-7.25a8.33 8.33 0 0 0 2.916-6.125V6.25h8.334v9.146a8.33 8.33 0 0 0 2.895 6.125"></svg:path><svg:path stroke="#344054" d="M31.25 6.25h-12.5"></svg:path></svg:g>`,
})
export class MarketeqVase2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqVest2Icon],svg[marketeq-vest-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M21.042 39.583h7.916m3.792-31.25h-15.5"></svg:path><svg:path stroke="#306CFE" d="M43.75 20.833v20.834a2.083 2.083 0 0 1-2.083 2.083h-12.5V27.083L33 7.917a2.08 2.08 0 0 1 2.083-1.667H37.5a2.083 2.083 0 0 1 2.083 2.083v8.334a4.167 4.167 0 0 0 4.167 4.166m-33.333-4.166V8.333A2.083 2.083 0 0 1 12.5 6.25h2.458a2.084 2.084 0 0 1 2.084 1.667l3.791 19.166V43.75h-12.5a2.083 2.083 0 0 1-2.083-2.083V20.833a4.167 4.167 0 0 0 4.167-4.166"></svg:path></svg:g>`,
})
export class MarketeqVest2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqVibrateIcon],svg[marketeq-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 16.667v16.666m37.5-16.666v16.666z"></svg:path><svg:path stroke="#306CFE" d="M33.333 41.667H16.667a2.083 2.083 0 0 1-2.084-2.084V10.417a2.083 2.083 0 0 1 2.084-2.084h16.666a2.083 2.083 0 0 1 2.084 2.084v29.166a2.083 2.083 0 0 1-2.084 2.084M29.167 8.333h-8.334l1.042 4.167h6.25z"></svg:path></svg:g>`,
})
export class MarketeqVibrateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqVideoIcon],svg[marketeq-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m35.417 30.458l5.312 2.646a2.083 2.083 0 0 0 3.021-1.854v-12.5a2.084 2.084 0 0 0-3.02-1.854l-5.313 2.645zM22.917 25l-4.167-3.125v6.25z"></svg:path><svg:path stroke="#306CFE" d="M33.333 12.5h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h25c1.15 0 2.084-.933 2.084-2.083V14.583c0-1.15-.933-2.083-2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqVideoIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqVisionIcon],svg[marketeq-vision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 29.167a4.167 4.167 0 1 0 0-8.334a4.167 4.167 0 0 0 0 8.334"></svg:path><svg:path stroke="#306CFE" d="M43.75 25S37.5 37.5 25 37.5S6.25 25 6.25 25S12.5 12.5 25 12.5S43.75 25 43.75 25"></svg:path></svg:g>`,
})
export class MarketeqVisionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqVoiceIcon],svg[marketeq-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.25 25h2.083a4.167 4.167 0 0 1 4.167 4.167v2.083a4.167 4.167 0 1 0 8.333 0v-12.5a4.167 4.167 0 0 1 8.334 0v12.5a4.167 4.167 0 1 0 8.333 0v-2.083A4.167 4.167 0 0 1 41.667 25h2.083"></svg:path>`,
})
export class MarketeqVoiceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletIcon],svg[marketeq-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 8.333H10.417A4.167 4.167 0 0 0 6.25 12.5v0a4.167 4.167 0 0 0 4.167 4.167H43.75"></svg:path><svg:path stroke="#306CFE" d="M43.75 16.667v22.916a2.083 2.083 0 0 1-2.083 2.084H8.333a2.083 2.083 0 0 1-2.083-2.084V12.5a4.167 4.167 0 0 0 4.167 4.167z"></svg:path><svg:path stroke="#344054" d="M33.333 25H43.75v8.333H33.333a2.083 2.083 0 0 1-2.083-2.083v-4.167A2.083 2.083 0 0 1 33.333 25"></svg:path></svg:g>`,
})
export class MarketeqWalletIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletAltIcon],svg[marketeq-wallet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m12.5 14.583l16.938-7.52a2.083 2.083 0 0 1 2.708.958l3.27 6.562"></svg:path><svg:path stroke="#306CFE" d="M41.667 33.333v8.334a2.083 2.083 0 0 1-2.084 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083v-25a2.083 2.083 0 0 1 2.083-2.084h31.25a2.083 2.083 0 0 1 2.084 2.084V25"></svg:path><svg:path stroke="#344054" d="M41.667 25h-6.25c-1.15 0-2.084.933-2.084 2.083v4.167c0 1.15.933 2.083 2.084 2.083h6.25c1.15 0 2.083-.932 2.083-2.083v-4.167c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqWalletAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletAlt2Icon],svg[marketeq-wallet-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 33.333v8.334a2.083 2.083 0 0 1-2.084 2.083H10.417a4.167 4.167 0 0 1-4.167-4.167V11.208"></svg:path><svg:path stroke="#306CFE" d="M41.667 25v-8.333a2.083 2.083 0 0 0-2.084-2.084H10.417A4.167 4.167 0 0 1 6.25 9.708a4.31 4.31 0 0 1 4.396-3.458h22.687a2.083 2.083 0 0 1 2.084 2.083v6.25"></svg:path><svg:path stroke="#344054" d="M41.667 25h-6.25c-1.15 0-2.084.933-2.084 2.083v4.167c0 1.15.933 2.083 2.084 2.083h6.25c1.15 0 2.083-.932 2.083-2.083v-4.167c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqWalletAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletMoneyIcon],svg[marketeq-wallet-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m35.854 18.75l3.73-5.333l-10.23-7.167l-8.77 12.5zM18.938 8.333L11.625 18.75h8.958L25 12.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 18.75H8.333c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.933-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" d="M33.333 27.083H43.75v8.334H33.333a2.083 2.083 0 0 1-2.083-2.084v-4.166a2.084 2.084 0 0 1 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqWalletMoneyIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletMoney3Icon],svg[marketeq-wallet-money-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.313 31.25h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="m35.854 18.75l3.73-5.333l-10.23-7.167l-8.77 12.5zM18.938 6.25l-8.771 12.5h10.416l5.334-7.604z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 18.75H8.333c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqWalletMoney3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWarningAltIcon],svg[marketeq-warning-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 18.75v8.333"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 35.417h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M21.354 8.73L5.48 37.5a4.166 4.166 0 0 0 3.646 6.25h31.75a4.167 4.167 0 0 0 3.646-6.25L28.646 8.73a4.166 4.166 0 0 0-7.292 0"></svg:path></svg:g>`,
})
export class MarketeqWarningAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWarningAlt3Icon],svg[marketeq-warning-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 14.583v12.5"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 35.417h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m36.417 7.292l9.625 16.666a2.08 2.08 0 0 1 0 2.084l-9.625 16.666a2.08 2.08 0 0 1-1.792 1.042h-19.25a2.08 2.08 0 0 1-1.792-1.042L3.958 26.042a2.08 2.08 0 0 1 0-2.084l9.625-16.666a2.08 2.08 0 0 1 1.792-1.042h19.25a2.08 2.08 0 0 1 1.792 1.042"></svg:path></svg:g>`,
})
export class MarketeqWarningAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWashbasin4Icon],svg[marketeq-washbasin-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 27.083h-4.166m-8.334-8.333v-8.333a4.167 4.167 0 1 1 8.334 0"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h33.334v-25H8.333zm-2.083-25h37.5zm2.083 25h12.5v-25h-12.5z"></svg:path></svg:g>`,
})
export class MarketeqWashbasin4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWaterBottleIcon],svg[marketeq-water-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 10.417h10.417a4.167 4.167 0 0 1 4.166 4.166V25a4.167 4.167 0 0 1-4.166 4.167H31.25"></svg:path><svg:path stroke="#306CFE" d="M25 8.333a2.083 2.083 0 0 0-2.083-2.083H18.75a2.083 2.083 0 0 0-2.083 2.083v6.25H25zm2.083 6.25h-12.5a4.167 4.167 0 0 0-4.166 4.167v22.917A2.083 2.083 0 0 0 12.5 43.75h16.667a2.083 2.083 0 0 0 2.083-2.083V18.75a4.167 4.167 0 0 0-4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqWaterBottleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWaterCan2Icon],svg[marketeq-water-can-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m32.333 24.5l7.605-4.167l3.812 3.813l-10.5 10.5m-20.02-7.688a8.334 8.334 0 1 1 9.312-10.687"></svg:path><svg:path stroke="#306CFE" d="M14.77 39.583h16.293a2.083 2.083 0 0 0 2.083-2.27l-1.709-18.75a2.083 2.083 0 0 0-2.083-1.896H16.48a2.083 2.083 0 0 0-2.083 1.896l-1.709 18.75a2.08 2.08 0 0 0 2.084 2.27"></svg:path></svg:g>`,
})
export class MarketeqWaterCan2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWaterTapIcon],svg[marketeq-water-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 10.417v8m-6.25-8h12.5z"></svg:path><svg:path stroke="#306CFE" d="M6.25 18.75v16.667m29.167-12.5h-4.959a2.08 2.08 0 0 1-1.875-1.146l-.916-1.875a2.08 2.08 0 0 0-1.875-1.146h-5.75a2.08 2.08 0 0 0-1.875 1.146l-.917 1.875a2.08 2.08 0 0 1-1.875 1.146H6.25v8.333h27.083a2.083 2.083 0 0 1 2.084 2.083V37.5a2.083 2.083 0 0 0 2.083 2.083h4.167A2.083 2.083 0 0 0 43.75 37.5v-6.25a8.333 8.333 0 0 0-8.333-8.333"></svg:path></svg:g>`,
})
export class MarketeqWaterTapIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWhiteBoardIcon],svg[marketeq-white-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 31.25L12.5 43.75m20.833-12.5l4.167 12.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqWhiteBoardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWifiIcon],svg[marketeq-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 37.5a4.167 4.167 0 1 0 8.334 0a4.167 4.167 0 0 0-8.334 0"></svg:path><svg:path stroke="#306CFE" d="M6.25 15.208a29.17 29.17 0 0 1 37.5 0"></svg:path><svg:path stroke="#306CFE" d="M38.438 21.583a20.83 20.83 0 0 0-26.876 0m21.501 6.355a12.5 12.5 0 0 0-16.126 0"></svg:path></svg:g>`,
})
export class MarketeqWifiIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWindowIcon],svg[marketeq-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 25H10.417M25 6.25v37.5z"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5zm33.333 0H10.417V8.333A2.083 2.083 0 0 1 12.5 6.25h25a2.083 2.083 0 0 1 2.083 2.083z"></svg:path></svg:g>`,
})
export class MarketeqWindowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWindow5Icon],svg[marketeq-window-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 39.583H10.417V6.25H22.02"></svg:path><svg:path stroke="#306CFE" d="M30.708 27.646C25 32.687 25 43.75 25 43.75h12.5a2.083 2.083 0 0 0 2.083-2.083V8.333A2.083 2.083 0 0 0 37.5 6.25H22.02a28.895 28.895 0 0 0 17.563 27.083"></svg:path></svg:g>`,
})
export class MarketeqWindow5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWindow6Icon],svg[marketeq-window-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 22.917v8.333zm8.334-8.334H8.333v8.334h33.334z"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25h37.5m-2.083 0H8.333v37.5h33.334zM6.25 43.75h37.5z"></svg:path></svg:g>`,
})
export class MarketeqWindow6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWorkIcon],svg[marketeq-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.333 8.333A2.083 2.083 0 0 0 31.25 6.25h-12.5a2.083 2.083 0 0 0-2.083 2.083v6.25h16.666zM43.75 41.667v-25a2.083 2.083 0 0 0-2.083-2.084H8.333a2.083 2.083 0 0 0-2.083 2.084v25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083"></svg:path><svg:path stroke="#344054" d="M22.917 29.167H18a8.33 8.33 0 0 1-7.583-5.042l-3.792-8.646a2.08 2.08 0 0 1 1.708-.896h33.334a2.08 2.08 0 0 1 1.708.896l-3.792 8.646A8.33 8.33 0 0 1 32 29.167h-4.917"></svg:path><svg:path stroke="#306CFE" d="M27.083 27.083h-4.166v4.167h4.166z"></svg:path></svg:g>`,
})
export class MarketeqWorkIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqWorkAgendaIcon],svg[marketeq-work-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 33.333h4.167m-2.084 8.334V8.333a2.083 2.083 0 0 1 2.084-2.083h31.25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-31.25a2.083 2.083 0 0 1-2.084-2.083m-2.083-25h4.167zm0 8.333h4.167z"></svg:path><svg:path stroke="#344054" d="M41.667 43.75h-6.25V6.25h6.25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqWorkAgendaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqZigZagLeftRightArrowIcon],svg[marketeq-zig-zag-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 37.5h-25a6.25 6.25 0 0 1-6.25-6.25v0A6.25 6.25 0 0 1 18.75 25h12.5a6.25 6.25 0 0 0 0-12.5h-25"></svg:path><svg:path stroke="#344054" d="M39.583 41.667L43.75 37.5l-4.167-4.167m-29.166-25L6.25 12.5l4.167 4.167"></svg:path></svg:g>`,
})
export class MarketeqZigZagLeftRightArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqZigZagLeftUpArrowIcon],svg[marketeq-zig-zag-left-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 43.75v-25a6.25 6.25 0 1 0-12.5 0V37.5a6.25 6.25 0 1 1-12.5 0V6.25"></svg:path><svg:path stroke="#344054" d="M18.75 10.417L14.583 6.25l-4.166 4.167"></svg:path></svg:g>`,
})
export class MarketeqZigZagLeftUpArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqZigZagRightUpArrowIcon],svg[marketeq-zig-zag-right-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 6.25V37.5a6.25 6.25 0 0 1-6.25 6.25v0a6.25 6.25 0 0 1-6.25-6.25V18.75a6.25 6.25 0 0 0-12.5 0v25"></svg:path><svg:path stroke="#344054" d="M39.583 10.417L35.417 6.25l-4.167 4.167"></svg:path></svg:g>`,
})
export class MarketeqZigZagRightUpArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAgendaLeftIcon],svg[marketeq-agenda-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 25v14.583l-4.166 4.167l-4.167-4.167V25a2.083 2.083 0 0 1 2.083-2.083H12.5A2.083 2.083 0 0 1 14.583 25"></svg:path><svg:path stroke="#306CFE" d="M43.75 33.333h-4.167m4.167-16.666h-4.167zm0 8.333h-4.167zM22.917 43.75h16.666a2.084 2.084 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v6.25"></svg:path></svg:g>`,
})
export class MarketeqAgendaLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAimIcon],svg[marketeq-aim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m35.417 43.75l-3.625-12.5zm-20.834 0l3.625-12.5zM25 8.333V6.25zm4.167 12.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#344054" d="M25 33.333c6.904 0 12.5-5.596 12.5-12.5c0-6.903-5.596-12.5-12.5-12.5s-12.5 5.597-12.5 12.5c0 6.904 5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqAimIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAlphaCircleIcon],svg[marketeq-alpha-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.417 19.646S28.937 31.25 22.292 31.25c-4 0-5.98-2.292-5.521-5.333c.5-3.438 3.354-7.167 6.791-7.167c6.459 0 3.709 12.5 9.771 12.5"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqAlphaCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
