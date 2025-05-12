import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconAlertIcon],svg[octicon-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" fill="currentColor"></svg:path>`,
})
export class OcticonAlertIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArchiveIcon],svg[octicon-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 2H1v2h12V2zM0 4a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z" fill="currentColor"></svg:path>`,
})
export class OcticonArchiveIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowBothIcon],svg[octicon-arrow-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 8l6-5v3h8V3l6 5l-6 5v-3H6v3L0 8z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowBothIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowDownIcon],svg[octicon-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 7V3H3v4H0l5 6l5-6H7z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowDownIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowLeftIcon],svg[octicon-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowLeftIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowRightIcon],svg[octicon-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 8L4 3v3H0v4h4v3l6-5z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowRightIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowSmallDownIcon],svg[octicon-arrow-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 7V5H2v2H0l3 4l3-4H4z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowSmallDownIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowSmallLeftIcon],svg[octicon-arrow-small-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 7V5L0 8l4 3V9h2V7H4z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowSmallLeftIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowSmallRightIcon],svg[octicon-arrow-small-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 8L2 5v2H0v2h2v2l4-3z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowSmallRightIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowSmallUpIcon],svg[octicon-arrow-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 5L0 9h2v2h2V9h2L3 5z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowSmallUpIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconArrowUpIcon],svg[octicon-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5 3L0 9h3v4h4V9h3L5 3z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowUpIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBeakerIcon],svg[octicon-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z" fill="currentColor"></svg:path>`,
})
export class OcticonBeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBellIcon],svg[octicon-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5c.38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z" fill="currentColor"></svg:path>`,
})
export class OcticonBellIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBoldIcon],svg[octicon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95c0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86c0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69c0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98c0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonBoldIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBookIcon],svg[octicon-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z" fill="currentColor"></svg:path>`,
})
export class OcticonBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBookmarkIcon],svg[octicon-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6L3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16l-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03l.7-2.16h.25l.7 2.16l2.3.03c.23 0 .27.08.09.23h.01z" fill="currentColor"></svg:path>`,
})
export class OcticonBookmarkIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBriefcaseIcon],svg[octicon-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z" fill="currentColor"></svg:path>`,
})
export class OcticonBriefcaseIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBroadcastIcon],svg[octicon-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8c0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91A6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z" fill="currentColor"></svg:path>`,
})
export class OcticonBroadcastIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconBrowserIcon],svg[octicon-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z" fill="currentColor"></svg:path>`,
})
export class OcticonBrowserIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCalendarIcon],svg[octicon-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z" fill="currentColor"></svg:path>`,
})
export class OcticonCalendarIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCheckIcon],svg[octicon-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 5l-8 8l-4-4l1.5-1.5L4 10l6.5-6.5L12 5z" fill="currentColor"></svg:path>`,
})
export class OcticonCheckIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconChecklistIcon],svg[octicon-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 8.5l-6 6l-3-3L8.5 10l1.5 1.5L14.5 7L16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z" fill="currentColor"></svg:path>`,
})
export class OcticonChecklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconChevronDownIcon],svg[octicon-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25L8.5 4.5L10 6l-5 5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronDownIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconChevronLeftIcon],svg[octicon-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5.5 3L7 4.5L3.25 8L7 11.5L5.5 13l-5-5l5-5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronLeftIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconChevronRightIcon],svg[octicon-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5L4.75 8L1 4.5L2.5 3l5 5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronRightIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconChevronUpIcon],svg[octicon-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 10l-1.5 1.5L5 7.75L1.5 11.5L0 10l5-5l5 5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronUpIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCircleSlashIcon],svg[octicon-circle-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47c0 3.14-2.56 5.7-5.7 5.7z" fill="currentColor"></svg:path>`,
})
export class OcticonCircleSlashIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCircuitBoardIcon],svg[octicon-circuit-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm8 0c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1zm0 6c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1zm2-10H5v2.17c.36.19.64.47.83.83h2.34c.42-.78 1.33-1.28 2.34-1.05c.75.19 1.36.8 1.53 1.55c.31 1.38-.72 2.59-2.05 2.59c-.8 0-1.48-.44-1.83-1.09H5.83c-.42.8-1.33 1.28-2.34 1.03c-.73-.17-1.34-.78-1.52-1.52C1.72 4.49 2.2 3.59 3 3.17V1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1l5-5h2.17c.42-.78 1.33-1.28 2.34-1.05c.75.19 1.36.8 1.53 1.55c.31 1.38-.72 2.59-2.05 2.59c-.8 0-1.48-.44-1.83-1.09H6.99L4 15h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonCircuitBoardIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconClippyIcon],svg[octicon-clippy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3l3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7c-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2c1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1s-1 .45-1 1s-.45 1-1 1H3c-.55 0-1 .45-1 1z" fill="currentColor"></svg:path>`,
})
export class OcticonClippyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconClockIcon],svg[octicon-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7z" fill="currentColor"></svg:path>`,
})
export class OcticonClockIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCloudDownloadIcon],svg[octicon-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 12h2l-3 3l-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5C1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7c2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2c0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z" fill="currentColor"></svg:path>`,
})
export class OcticonCloudDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCloudUploadIcon],svg[octicon-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 9H5l3-3l3 3H9v5H7V9zm5-4c0-.44-.91-3-4.5-3C5.08 2 3 3.92 3 6C1.02 6 0 7.52 0 9c0 1.53 1 3 3 3h3v-1.3H3c-1.62 0-1.7-1.42-1.7-1.7c0-.17.05-1.7 1.7-1.7h1.3V6c0-1.39 1.56-2.7 3.2-2.7c2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2c0 2.09-2.25 2.2-2.7 2.2h-2V12h2c2.08 0 4-1.16 4-3.5C16 6.06 14.08 5 12 5z" fill="currentColor"></svg:path>`,
})
export class OcticonCloudUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCodeIcon],svg[octicon-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9.5 3L8 4.5L11.5 8L8 11.5L9.5 13L14 8L9.5 3zm-5 0L0 8l4.5 5L6 11.5L2.5 8L6 4.5L4.5 3z" fill="currentColor"></svg:path>`,
})
export class OcticonCodeIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCommentIcon],svg[octicon-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z" fill="currentColor"></svg:path>`,
})
export class OcticonCommentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCommentDiscussionIcon],svg[octicon-comment-discussion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z" fill="currentColor"></svg:path>`,
})
export class OcticonCommentDiscussionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconCreditCardIcon],svg[octicon-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 9H2V8h10v1zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 3H1v6h14V6zm0-3H1v1h14V3zm-9 7H2v1h4v-1z" fill="currentColor"></svg:path>`,
})
export class OcticonCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDashIcon],svg[octicon-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 7v2h8V7H0z" fill="currentColor"></svg:path>`,
})
export class OcticonDashIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDashboardIcon],svg[octicon-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91c0 3.42-2.78 6.2-6.2 6.2c-3.42 0-6.21-2.78-6.21-6.2c0-3.42 2.78-6.2 6.2-6.2c1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5C1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5c0-1.03-.2-2.02-.59-2.91l-1 1z" fill="currentColor"></svg:path>`,
})
export class OcticonDashboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDatabaseIcon],svg[octicon-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5c.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31c.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19c.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1s4-.45 4-1s-1.79-1-4-1z" fill="currentColor"></svg:path>`,
})
export class OcticonDatabaseIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDesktopDownloadIcon],svg[octicon-desktop-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 6h3V0h2v6h3l-4 4l-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonDesktopDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDeviceCameraVideoIcon],svg[octicon-device-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z" fill="currentColor"></svg:path>`,
})
export class OcticonDeviceCameraVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDeviceDesktopIcon],svg[octicon-device-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z" fill="currentColor"></svg:path>`,
})
export class OcticonDeviceDesktopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDeviceMobileIcon],svg[octicon-device-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3c0-.72.58-1.3 1.3-1.3c.72 0 1.3.58 1.3 1.3c0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z" fill="currentColor"></svg:path>`,
})
export class OcticonDeviceMobileIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDiffIcon],svg[octicon-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffIcon {
  readonly viewBox = input("0 0 13 16")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDiffAddedIcon],svg[octicon-diff-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffAddedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDiffIgnoredIcon],svg[octicon-diff-ignored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-8.5-2H3v-1.5L9.5 4H11v1.5L4.5 12z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffIgnoredIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDiffModifiedIcon],svg[octicon-diff-modified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffModifiedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDiffRemovedIcon],svg[octicon-diff-removed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffRemovedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconDiffRenamedIcon],svg[octicon-diff-renamed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 9H3V7h3V4l5 4l-5 4V9zm8-7v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v12h12V2z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffRenamedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconEllipsisIcon],svg[octicon-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z" fill="currentColor"></svg:path>`,
})
export class OcticonEllipsisIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconEyeIcon],svg[octicon-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z" fill="currentColor"></svg:path>`,
})
export class OcticonEyeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconEyeClosedIcon],svg[octicon-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14.822.854a.5.5 0 1 0-.707-.708l-2.11 2.11C10.89 1.483 9.565.926 8.06.926c-5.06 0-8.06 6-8.06 6s1.162 2.323 3.258 4.078l-2.064 2.065a.5.5 0 1 0 .707.707L14.822.854zM4.86 9.403L6.292 7.97A1.999 1.999 0 0 1 6 6.925c0-1.11.89-2 2-2c.384 0 .741.106 1.045.292l1.433-1.433A3.98 3.98 0 0 0 8 2.925c-2.2 0-4 1.8-4 4c0 .938.321 1.798.859 2.478zm7.005-3.514l1.993-1.992A14.873 14.873 0 0 1 16 6.925s-3 6-7.94 6a6.609 6.609 0 0 1-2.661-.57l1.565-1.566c.33.089.678.136 1.036.136c2.22 0 4-1.78 4-4c0-.358-.047-.705-.136-1.036zM9.338 8.415l.152-.151a1.996 1.996 0 0 1-.152.151z" fill="currentColor"></svg:path>`,
})
export class OcticonEyeClosedIcon {
  readonly viewBox = input("0 0 16 14")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileIcon],svg[octicon-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z" fill="currentColor"></svg:path>`,
})
export class OcticonFileIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileBinaryIcon],svg[octicon-file-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z" fill="currentColor"></svg:path>`,
})
export class OcticonFileBinaryIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileCodeIcon],svg[octicon-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5L5 10l-.5 1L2 8.5L4.5 6l.5.98zM7.5 6L10 8.5L7.5 11l-.5-.98L8.5 8.5L7 7l.5-1z" fill="currentColor"></svg:path>`,
})
export class OcticonFileCodeIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileDirectoryIcon],svg[octicon-file-directory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z" fill="currentColor"></svg:path>`,
})
export class OcticonFileDirectoryIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileMediaIcon],svg[octicon-file-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5l2 4l2-2l3 3V5z" fill="currentColor"></svg:path>`,
})
export class OcticonFileMediaIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFilePdfIcon],svg[octicon-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM1 2h4a.68.68 0 0 0-.31.2a1.08 1.08 0 0 0-.23.47a4.22 4.22 0 0 0-.09 1.47c.06.609.173 1.211.34 1.8A21.78 21.78 0 0 1 3.6 8.6c-.5 1-.8 1.66-.91 1.84a7.156 7.156 0 0 0-.69.3c-.362.165-.699.38-1 .64V2zm4.42 4.8a5.65 5.65 0 0 0 1.17 2.09c.275.237.595.417.94.53c-.64.09-1.23.2-1.81.33c-.618.15-1.223.347-1.81.59s.22-.44.61-1.25c.365-.74.67-1.51.91-2.3l-.01.01zM11 14H1.5a.743.743 0 0 1-.17 0a2.12 2.12 0 0 0 .73-.44a10.14 10.14 0 0 0 1.78-2.38c.31-.13.58-.23.81-.31l.42-.14c.45-.13.94-.23 1.44-.33s1-.16 1.48-.2c.447.216.912.394 1.39.53c.403.11.814.188 1.23.23h.38V14H11zm0-4.86a3.743 3.743 0 0 0-.64-.28a4.221 4.221 0 0 0-.75-.11c-.411.003-.822.03-1.23.08a3 3 0 0 1-1-.64a6.07 6.07 0 0 1-1.29-2.33c.111-.661.178-1.33.2-2c.02-.25.02-.5 0-.75a1.05 1.05 0 0 0-.2-.88a.82.82 0 0 0-.61-.23H8l3 3v4.14z" fill="currentColor"></svg:path>`,
})
export class OcticonFilePdfIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileSubmoduleIcon],svg[octicon-file-submodule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 7H4v7h9c.55 0 1-.45 1-1V8h-4V7zM9 9H5V8h4v1zm4-5H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1h3V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z" fill="currentColor"></svg:path>`,
})
export class OcticonFileSubmoduleIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileSymlinkDirectoryIcon],svg[octicon-file-symlink-directory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM1 3h5v1H1V3zm6 9v-2c-.98-.02-1.84.22-2.55.7c-.71.48-1.19 1.25-1.45 2.3c.02-1.64.39-2.88 1.13-3.73C4.86 8.43 5.82 8 7.01 8V6l4 3l-4 3H7z" fill="currentColor"></svg:path>`,
})
export class OcticonFileSymlinkDirectoryIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileSymlinkFileIcon],svg[octicon-file-symlink-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3l-4 3v-2c-.98-.02-1.84.22-2.55.7c-.71.48-1.19 1.25-1.45 2.3c.02-1.64.39-2.88 1.13-3.73c.73-.84 1.69-1.27 2.88-1.27v-2H6z" fill="currentColor"></svg:path>`,
})
export class OcticonFileSymlinkFileIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFileZipIcon],svg[octicon-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM11 14H1V2h3v1h1V2h3l3 3v9zM5 4V3h1v1H5zM4 4h1v1H4V4zm1 2V5h1v1H5zM4 6h1v1H4V6zm1 2V7h1v1H5zM4 9.28A2 2 0 0 0 3 11v1h4v-1a2 2 0 0 0-2-2V8H4v1.28zM6 10v1H4v-1h2z" fill="currentColor"></svg:path>`,
})
export class OcticonFileZipIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFlameIcon],svg[octicon-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7c-2.2-1.16-2.67-4.52-.3-6.61c-.61 2.03.53 3.33 1.94 2.86c1.39-.47 2.3.53 2.27 1.67c-.02.78-.31 1.44-1.13 1.81c3.42-.59 4.78-3.42 4.78-5.56c0-2.84-2.53-3.22-1.25-5.61c-1.52.13-2.03 1.13-1.89 2.75c.09 1.08-1.02 1.8-1.86 1.33c-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z" fill="currentColor"></svg:path>`,
})
export class OcticonFlameIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFoldIcon],svg[octicon-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3l3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z" fill="currentColor"></svg:path>`,
})
export class OcticonFoldIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFoldDownIcon],svg[octicon-fold-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 11l3 3l3-3H8V5H6v6H4zm-4 0c0 .55.45 1 1 1h2.5l-1-1h-1l2-2H5V8H3.5l-2-2H5V5H1c-.55 0-1 .45-1 1l2.5 2.5L0 11zm10.5-2H9V8h1.5l2-2H9V5h4c.55 0 1 .45 1 1l-2.5 2.5L14 11c0 .55-.45 1-1 1h-2.5l1-1h1l-2-2z" fill="currentColor"></svg:path>`,
})
export class OcticonFoldDownIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconFoldUpIcon],svg[octicon-fold-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 6L7 3L4 6h2v6h2V6h2zm4 0c0-.55-.45-1-1-1h-2.5l1 1h1l-2 2H9v1h1.5l2 2H9v1h4c.55 0 1-.45 1-1l-2.5-2.5L14 6zM3.5 8H5v1H3.5l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 6c0-.55.45-1 1-1h2.5l-1 1h-1l2 2z" fill="currentColor"></svg:path>`,
})
export class OcticonFoldUpIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGearIcon],svg[octicon-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64l-.45-1.09l.88-1.84l-1.13-1.13l-1.81.91l-1.09-.45l-.69-1.92h-1.6l-.63 1.94l-1.11.45l-1.84-.88l-1.13 1.13l.91 1.81l-.45 1.09L0 7.23v1.59l1.94.64l.45 1.09l-.88 1.84l1.13 1.13l1.81-.91l1.09.45l.69 1.92h1.59l.63-1.94l1.11-.45l1.84.88l1.13-1.13l-.92-1.81l.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z" fill="currentColor"></svg:path>`,
})
export class OcticonGearIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGiftIcon],svg[octicon-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 4h-1.38c.19-.33.33-.67.36-.91c.06-.67-.11-1.22-.52-1.61C11.1 1.1 10.65 1 10.1 1h-.11c-.53.02-1.11.25-1.53.58c-.42.33-.73.72-.97 1.2c-.23-.48-.55-.88-.97-1.2c-.42-.32-1-.58-1.53-.58h-.03c-.56 0-1.06.09-1.44.48c-.41.39-.58.94-.52 1.61c.03.23.17.58.36.91H1.98c-.55 0-1 .45-1 1v3h1v5c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8h1V5c0-.55-.45-1-1-1H13zm-4.78-.88c.17-.36.42-.67.75-.92c.3-.23.72-.39 1.05-.41h.09c.45 0 .66.11.8.25s.33.39.3.95c-.05.19-.25.61-.5 1h-2.9l.41-.88v.01zM4.09 2.04c.13-.13.31-.25.91-.25c.31 0 .72.17 1.03.41c.33.25.58.55.75.92L7.2 4H4.3c-.25-.39-.45-.81-.5-1c-.03-.56.16-.81.3-.95l-.01-.01zM7 12.99H3V8h4v5v-.01zm0-6H2V5h5v2v-.01zm5 6H8V8h4v5v-.01zm1-6H8V5h5v2v-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonGiftIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGistIcon],svg[octicon-gist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.5 5L10 7.5L7.5 10l-.75-.75L8.5 7.5L6.75 5.75L7.5 5zm-3 0L2 7.5L4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z" fill="currentColor"></svg:path>`,
})
export class OcticonGistIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGistSecretIcon],svg[octicon-gist-secret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3L5 2L4 5h6L9 2zm4.03 7.75L10 9l1 2l-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3l1-2z" fill="currentColor"></svg:path>`,
})
export class OcticonGistSecretIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGitBranchIcon],svg[octicon-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38c-.4.4-.86.61-1.38.63c-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72c0 1.11.89 2 2 2c1.11 0 2-.89 2-2c0-.53-.2-1-.53-1.36c.09-.06.48-.41.59-.47c.25-.11.56-.17.94-.17c1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z" fill="currentColor"></svg:path>`,
})
export class OcticonGitBranchIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGitCommitIcon],svg[octicon-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3c-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3c1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2c0-1.22.98-2.2 2.2-2.2c1.22 0 2.2.98 2.2 2.2c0 1.22-.98 2.2-2.2 2.2z" fill="currentColor"></svg:path>`,
})
export class OcticonGitCommitIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGitCompareIcon],svg[octicon-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5 12H4c-.27-.02-.48-.11-.69-.31c-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06c.6.59 1.28.91 2.06.94h1v2l3-3l-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06c-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31c.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z" fill="currentColor"></svg:path>`,
})
export class OcticonGitCompareIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGitMergeIcon],svg[octicon-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72c0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69c.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02c1.11 0 2-.89 2-2c0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2c-.65 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z" fill="currentColor"></svg:path>`,
})
export class OcticonGitMergeIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGitPullRequestIcon],svg[octicon-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31c.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2c-.65 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z" fill="currentColor"></svg:path>`,
})
export class OcticonGitPullRequestIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGithubActionIcon],svg[octicon-github-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 2h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H9a1 1 0 1 1-2 0H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6a1 1 0 1 1 2 0zm6 1v10H1V3h14zm-2.5 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" fill="currentColor"></svg:path>`,
})
export class OcticonGithubActionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGlobeIcon],svg[octicon-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14c-.17-.08-.2-.73-.02-1.09c.19-.41.81-1.45.2-1.8c-.61-.35-.44-.5-.81-.91c-.37-.41-.22-.47-.25-.58c-.08-.34.36-.89.39-.94c.02-.06.02-.27 0-.33c0-.08-.27-.22-.34-.23c-.06 0-.11.11-.2.13c-.09.02-.5-.25-.59-.33c-.09-.08-.14-.23-.27-.34c-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66c-.02-.2-.3-.47-.42-.67c-.14-.2-.16-.47-.2-.41c-.04.06.25.78.2.81c-.05.02-.16-.2-.3-.38c-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13c-.19-.3 0-.89-.14-1.11c-.13-.22-.88.25-.88.25c.02-.22.69-.58 1.16-.92c.47-.34.78-.06 1.16.05c.39.13.41.09.28-.05c-.13-.13.06-.17.36-.13c.28.05.38.41.83.36c.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06c.33.22.27.02.5.08c.23.06.91.64.91.64c-.83.44-.31.48-.17.59c.14.11-.28.3-.28.3c-.17-.17-.19.02-.3.08c-.11.06-.02.22-.02.22c-.56.09-.44.69-.42.83c0 .14-.38.36-.47.58c-.09.2.25.64.06.66c-.19.03-.34-.66-1.31-.41c-.3.08-.94.41-.59 1.08c.36.69.92-.19 1.11-.09c.19.1-.06.53-.02.55c.04.02.53.02.56.61c.03.59.77.53.92.55c.17 0 .7-.44.77-.45c.06-.03.38-.28 1.03.09c.66.36.98.31 1.2.47c.22.16.08.47.28.58c.2.11 1.06-.03 1.28.31c.22.34-.88 2.09-1.22 2.28c-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8c3.14-.7 5.48-3.5 5.48-6.84c0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08c-.48-.3-.81-.23-.86-.28c0 0-.05-.11.17-.14c.44-.05.98.41 1.11.41c.13 0 .19-.13.41-.05c.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14c.03-.03.02-.11.05-.14c.11-.11.61-.25.52.03c-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14c.3-.28-.09-.38-.34-.38c-.25-.02-.34-.16-.22-.19c.12-.03.61.02.7.08c.08.06.52.25.55.38c.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52c-.56-.48-.89-.31-1-.41c-.11-.1-.08-.19.11-.34c.19-.15.69.06 1 .09c.3.03.66.27.66.55c.02.25.33.5.19.63h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonGlobeIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGrabberIcon],svg[octicon-grabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" fill="currentColor"></svg:path>`,
})
export class OcticonGrabberIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconGraphIcon],svg[octicon-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z" fill="currentColor"></svg:path>`,
})
export class OcticonGraphIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconHeartIcon],svg[octicon-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1c-.51.58-.78.92-.8 1c-.02-.08-.28-.42-.8-1c-.52-.58-1.17-1-2.2-1c-1.632.086-2.954 1.333-3 3c0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z" fill="currentColor"></svg:path>`,
})
export class OcticonHeartIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconHistoryIcon],svg[octicon-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7z" fill="currentColor"></svg:path>`,
})
export class OcticonHistoryIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconHomeIcon],svg[octicon-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 9l-3-3V2h-2v2L8 1L0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69L8 2.5l5.19 5.19L12 14z" fill="currentColor"></svg:path>`,
})
export class OcticonHomeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconHorizontalRuleIcon],svg[octicon-horizontal-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1 7h2v2h1V3H3v3H1V3H0v6h1V7zm9 2V7H9v2h1zm0-3V4H9v2h1zM7 6V4h2V3H6v6h1V7h2V6H7zm-7 7h10v-2H0v2z" fill="currentColor"></svg:path>`,
})
export class OcticonHorizontalRuleIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconHubotIcon],svg[octicon-hubot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3zm8 1.75L9.75 9h-1.5L7 7.75L5.75 9h-1.5L3 7.75V7h.75L5 8.25L6.25 7h1.5L9 8.25L10.25 7H11v.75zM5 11h4v1H5v-1zm2-9C3.14 2 0 4.91 0 8.5V13c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8.5C14 4.91 10.86 2 7 2zm6 11H1V8.5c0-3.09 2.64-5.59 6-5.59s6 2.5 6 5.59V13z" fill="currentColor"></svg:path>`,
})
export class OcticonHubotIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconInboxIcon],svg[octicon-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z" fill="currentColor"></svg:path>`,
})
export class OcticonInboxIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconInfoIcon],svg[octicon-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7c.19-.18.42-.28.7-.28c.28 0 .52.09.7.28c.18.19.28.42.28.7c0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69c-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31c-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69c.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31c.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68c0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7s-7-3.12-7-7s3.14-7 7-7z" fill="currentColor"></svg:path>`,
})
export class OcticonInfoIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconIssueClosedIcon],svg[octicon-issue-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5l-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7c1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7s7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonIssueClosedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconIssueOpenedIcon],svg[octicon-issue-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" fill="currentColor"></svg:path>`,
})
export class OcticonIssueOpenedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconIssueReopenedIcon],svg[octicon-issue-reopened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 9H6V4h2v5zm-2 3h2v-2H6v2zm6.33-2H10l1.5 1.5c-1.05 1.33-2.67 2.2-4.5 2.2A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7c2.19 0 4.13-1.02 5.41-2.59L14 14v-4h-1.67zM1.67 6H4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7c0 .34-.03.67-.09 1h1.31c.05-.33.08-.66.08-1c0-3.86-3.14-7-7-7c-2.19 0-4.13 1.02-5.41 2.59L0 2v4h1.67z" fill="currentColor"></svg:path>`,
})
export class OcticonIssueReopenedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconItalicIcon],svg[octicon-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3c.56 0 1.13.38 1.13 1.03c0 .75-.59 1.3-1.33 1.3c-.58 0-1.13-.38-1.13-1.03z" fill="currentColor"></svg:path>`,
})
export class OcticonItalicIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconJerseyIcon],svg[octicon-jersey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4.5 6l-.5.5v5l.5.5h2l.5-.5v-5L6.5 6h-2zM6 11H5V7h1v4zm6.27-7.25C12.05 2.37 11.96 1.12 12 0H9.02c0 .27-.13.48-.39.69c-.25.2-.63.3-1.13.3c-.5 0-.88-.09-1.13-.3c-.23-.2-.36-.42-.36-.69H3c.05 1.13-.03 2.38-.25 3.75C2.55 5.13 1.95 5.88 1 6v9c.02.27.11.48.31.69c.2.21.42.3.69.31h11c.27-.02.48-.11.69-.31c.21-.2.3-.42.31-.69V6c-.95-.13-1.53-.88-1.75-2.25h.02zM13 15H2V7c.89-.5 1.48-1.25 1.72-2.25S4.03 2.5 4 1h1c-.02.78.16 1.47.52 2.06c.36.58 1.02.89 2 .94c.98-.02 1.64-.33 2-.94c.36-.59.5-1.28.48-2.06h1c.02 1.42.13 2.55.33 3.38c.2.81.69 2 1.67 2.63v8V15zM8.5 6l-.5.5v5l.5.5h2l.5-.5v-5l-.5-.5h-2zm1.5 5H9V7h1v4z" fill="currentColor"></svg:path>`,
})
export class OcticonJerseyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconKebabHorizontalIcon],svg[octicon-kebab-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" fill="currentColor"></svg:path>`,
})
export class OcticonKebabHorizontalIcon {
  readonly viewBox = input("0 0 13 16")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconKebabVerticalIcon],svg[octicon-kebab-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z" fill="currentColor"></svg:path>`,
})
export class OcticonKebabVerticalIcon {
  readonly viewBox = input("0 0 3 16")
  readonly width = input("0.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconKeyIcon],svg[octicon-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12.83 2.17C12.08 1.42 11.14 1.03 10 1c-1.13.03-2.08.42-2.83 1.17S6.04 3.86 6.01 5c0 .3.03.59.09.89L0 12v1l1 1h2l1-1v-1h1v-1h1v-1h2l1.09-1.11c.3.08.59.11.91.11c1.14-.03 2.08-.42 2.83-1.17S13.97 6.14 14 5c-.03-1.14-.42-2.08-1.17-2.83zM11 5.38c-.77 0-1.38-.61-1.38-1.38c0-.77.61-1.38 1.38-1.38c.77 0 1.38.61 1.38 1.38c0 .77-.61 1.38-1.38 1.38z" fill="currentColor"></svg:path>`,
})
export class OcticonKeyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconKeyboardIcon],svg[octicon-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 5H9V4h1v1zM3 6H2v1h1V6zm5-2H7v1h1V4zM4 4H2v1h2V4zm8 7h2v-1h-2v1zM8 7h1V6H8v1zm-4 3H2v1h2v-1zm8-6h-1v1h1V4zm2 0h-1v1h1V4zm-2 5h2V6h-2v3zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 0H1v9h14V3zM6 7h1V6H6v1zm0-3H5v1h1V4zM4 7h1V6H4v1zm1 4h6v-1H5v1zm5-4h1V6h-1v1zM3 8H2v1h1V8zm5 0v1h1V8H8zM6 8v1h1V8H6zM5 8H4v1h1V8zm5 1h1V8h-1v1z" fill="currentColor"></svg:path>`,
})
export class OcticonKeyboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconLawIcon],svg[octicon-law-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3l-1.5 3h3z" fill="currentColor"></svg:path>`,
})
export class OcticonLawIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconLightBulbIcon],svg[octicon-light-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3c1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4c.45-.75 1-2.08 1-3c0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11c-.86 1.41-1.25 2.06-1.45 3.23c-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17c-.2-1.17-.59-1.83-1.45-3.23c-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4c1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z" fill="currentColor"></svg:path>`,
})
export class OcticonLightBulbIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconLinkIcon],svg[octicon-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5c0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5c0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor"></svg:path>`,
})
export class OcticonLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconLinkExternalIcon],svg[octicon-link-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5L6.5 9l3.25-3.25L12 8V2H6z" fill="currentColor"></svg:path>`,
})
export class OcticonLinkExternalIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconListOrderedIcon],svg[octicon-list-ordered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12.01 13c0 .59 0 1-.59 1H4.6c-.59 0-.59-.41-.59-1c0-.59 0-1 .59-1h6.81c.59 0 .59.41.59 1h.01zM4.6 4h6.81C12 4 12 3.59 12 3c0-.59 0-1-.59-1H4.6c-.59 0-.59.41-.59 1c0 .59 0 1 .59 1zm6.81 3H4.6c-.59 0-.59.41-.59 1c0 .59 0 1 .59 1h6.81C12 9 12 8.59 12 8c0-.59 0-1-.59-1zm-9.4-6h-.72c-.3.19-.58.25-1.03.34V2h.75v2.14H.17V5h2.84v-.86h-1V1zm.392 8.12c-.129 0-.592.04-.802.07c.53-.56 1.14-1.25 1.14-1.89C2.72 6.52 2.18 6 1.38 6c-.59 0-.97.2-1.38.64l.58.58c.19-.19.38-.38.64-.38c.28 0 .48.16.48.52c0 .53-.77 1.2-1.7 2.06V10h3v-.88h-.598zm-.222 3.79v-.03c.44-.19.64-.47.64-.86c0-.7-.56-1.11-1.44-1.11c-.48 0-.89.19-1.28.52l.55.64c.25-.2.44-.31.69-.31c.27 0 .42.13.42.36c0 .27-.2.44-.86.44v.75c.83 0 .98.17.98.47c0 .25-.23.38-.58.38c-.28 0-.56-.14-.81-.38l-.48.66c.3.36.77.56 1.41.56c.83 0 1.53-.41 1.53-1.16c0-.5-.31-.81-.77-.94v.01z" fill="currentColor"></svg:path>`,
})
export class OcticonListOrderedIcon {
  readonly viewBox = input("0 0 13 16")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconListUnorderedIcon],svg[octicon-list-unordered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1c0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1c0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1c0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1c0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1c0-.59 0-1-.59-1h.01z" fill="currentColor"></svg:path>`,
})
export class OcticonListUnorderedIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconLocationIcon],svg[octicon-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5C0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5C1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36c.92.86 1.44 1.97 1.44 3.14c0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z" fill="currentColor"></svg:path>`,
})
export class OcticonLocationIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconLockIcon],svg[octicon-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2c-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z" fill="currentColor"></svg:path>`,
})
export class OcticonLockIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMailIcon],svg[octicon-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9L1 4h12zM1 5.5l4 3l-4 3v-6zM2 12l3.5-3L7 10.5L8.5 9l3.5 3H2zm11-.5l-4-3l4-3v6z" fill="currentColor"></svg:path>`,
})
export class OcticonMailIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMailReadIcon],svg[octicon-mail-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3l-4.5-3v6zm11 .5l-5-3l-5 3h10zm1-6.5l-4.5 3l4.5 3v-6z" fill="currentColor"></svg:path>`,
})
export class OcticonMailReadIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMegaphoneIcon],svg[octicon-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31c.16.09.34.14.52.14c.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1c-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31c.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z" fill="currentColor"></svg:path>`,
})
export class OcticonMegaphoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMentionIcon],svg[octicon-mention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83c-3.23 0-5.64-2.08-5.64-5.72c0-4.37 3.23-7.18 6.58-7.18c3.45 0 5.22 2.19 5.22 5.2c0 2.39-1.34 3.86-2.5 3.86c-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83c-2.19 0-3.66 2.39-3.66 4.38c0 1.67.94 2.61 2.3 2.61c.84 0 1.67-.53 2.3-1.25c.11.94.94 1.45 1.98 1.45c1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0C3.66 0 0 3.33 0 8.33C0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67c0-1.45.94-3.22 2.41-3.22c.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z" fill="currentColor"></svg:path>`,
})
export class OcticonMentionIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMilestoneIcon],svg[octicon-milestone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 2H6V0h2v2zm4 5H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10l2 2l-2 2zM8 4H6v2h2V4zM6 16h2V8H6v8z" fill="currentColor"></svg:path>`,
})
export class OcticonMilestoneIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMirrorIcon],svg[octicon-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.5 4.7L8.5 0l-7 4.7c-.3.19-.5.45-.5.8V16l7.5-4l7.5 4V5.5c0-.34-.2-.61-.5-.8zm-.5 9.8l-6-3.25V10H8v1.25L2 14.5v-9l6-4V6h1V1.5l6 4v9zM6 7h5V5l3 3l-3 3V9H6v2L3 8l3-3v2z" fill="currentColor"></svg:path>`,
})
export class OcticonMirrorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMortarBoardIcon],svg[octicon-mortar-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.11 2.8a.34.34 0 0 0-.2 0L.27 5.18a.35.35 0 0 0 0 .67L2 6.4v1.77c-.3.17-.5.5-.5.86c0 .19.05.36.14.5c-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5c.08-.14.14-.31.14-.5c0-.38-.2-.69-.5-.86V6.72l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67L8.1 2.81l.01-.01zM4 8l3.83 1.19h-.02c.13.03.25.03.36 0L12 8v2.5c0 1-1.8 1.5-4 1.5s-4-.5-4-1.5V8zm3.02-2.5c0 .28.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5s-1 .22-1 .5z" fill="currentColor"></svg:path>`,
})
export class OcticonMortarBoardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMuteIcon],svg[octicon-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06l-1.97 1.97l-1.97-1.97l-1.06 1.06L11.44 8L9.47 9.97l1.06 1.06l1.97-1.97l1.97 1.97l1.06-1.06L13.56 8l1.97-1.97z" fill="currentColor"></svg:path>`,
})
export class OcticonMuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoNewlineIcon],svg[octicon-no-newline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 5v3c0 .55-.45 1-1 1h-3v2L9 8l3-3v2h2V5h2zM8 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4zM1.5 9.66L5.66 5.5C5.18 5.19 4.61 5 4 5C2.34 5 1 6.34 1 8c0 .61.19 1.17.5 1.66zM7 8c0-.61-.19-1.17-.5-1.66L2.34 10.5c.48.31 1.05.5 1.66.5c1.66 0 3-1.34 3-3z" fill="currentColor"></svg:path>`,
})
export class OcticonNoNewlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoteIcon],svg[octicon-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z" fill="currentColor"></svg:path>`,
})
export class OcticonNoteIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOctofaceIcon],svg[octicon-octoface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31c0 0-1.05-.33-3.44 1.3c-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3c-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69C0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35c0-.76.38-1.48 1.02-2.07c1.07-.98 2.9-.46 4.96-.46c2.07 0 3.88-.52 4.96.46c.65.59 1.02 1.3 1.02 2.07c0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" fill="currentColor"></svg:path>`,
})
export class OcticonOctofaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOrganizationIcon],svg[octicon-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1c0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3c.058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3c-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3c.058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3c-.229.59 0 1 0 1s3.005 1.366 3.005 4z" fill="currentColor"></svg:path>`,
})
export class OcticonOrganizationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackageIcon],svg[octicon-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z" fill="currentColor"></svg:path>`,
})
export class OcticonPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaintcanIcon],svg[octicon-paintcan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 0C2.69 0 0 2.69 0 6v1c0 .55.45 1 1 1v5c0 1.1 2.24 2 5 2s5-.9 5-2V8c.55 0 1-.45 1-1V6c0-3.31-2.69-6-6-6zm3 10v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-1c-.55 0-1-.45-1-1V7.2c.91.49 2.36.8 4 .8c1.64 0 3.09-.31 4-.8V9c0 .55-.45 1-1 1zM6 7c-1.68 0-3.12-.41-3.71-1C2.88 5.41 4.32 5 6 5c1.68 0 3.12.41 3.71 1c-.59.59-2.03 1-3.71 1zm0-3c-2.76 0-5 .89-5 2c0-2.76 2.24-5 5-5s5 2.24 5 5c0-1.1-2.24-2-5-2z" fill="currentColor"></svg:path>`,
})
export class OcticonPaintcanIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPencilIcon],svg[octicon-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z" fill="currentColor"></svg:path>`,
})
export class OcticonPencilIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPersonIcon],svg[octicon-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4c.173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4c-.229.59 0 1 0 1s4 1.367 4 4v1.002z" fill="currentColor"></svg:path>`,
})
export class OcticonPersonIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPinIcon],svg[octicon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5l5-4l3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5l1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z" fill="currentColor"></svg:path>`,
})
export class OcticonPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlayIcon],svg[octicon-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z" fill="currentColor"></svg:path>`,
})
export class OcticonPlayIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlugIcon],svg[octicon-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 6V5h-4V3H8v1H6c-1.03 0-1.77.81-2 2L3 7c-1.66 0-3 1.34-3 3v2h1v-2c0-1.11.89-2 2-2l1 1c.25 1.16.98 2 2 2h2v1h2v-2h4V9h-4V6h4z" fill="currentColor"></svg:path>`,
})
export class OcticonPlugIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlusIcon],svg[octicon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" fill="currentColor"></svg:path>`,
})
export class OcticonPlusIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlusSmallIcon],svg[octicon-plus-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z" fill="currentColor"></svg:path>`,
})
export class OcticonPlusSmallIcon {
  readonly viewBox = input("0 0 7 16")
  readonly width = input("0.44em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPrimitiveDotIcon],svg[octicon-primitive-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4z" fill="currentColor"></svg:path>`,
})
export class OcticonPrimitiveDotIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPrimitiveSquareIcon],svg[octicon-primitive-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 12H0V4h8v8z" fill="currentColor"></svg:path>`,
})
export class OcticonPrimitiveSquareIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectIcon],svg[octicon-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonProjectIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPulseIcon],svg[octicon-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.5 8L8.8 5.4L6.6 8.5L5.5 1.6L2.38 8H0v2h3.6l.9-1.8l.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z" fill="currentColor"></svg:path>`,
})
export class OcticonPulseIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuestionIcon],svg[octicon-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7z" fill="currentColor"></svg:path>`,
})
export class OcticonQuestionIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuoteIcon],svg[octicon-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonQuoteIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRadioTowerIcon],svg[octicon-radio-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4.79 6.11c.25-.25.25-.67 0-.92c-.32-.33-.48-.76-.48-1.19c0-.43.16-.86.48-1.19c.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19c-.57.58-.85 1.35-.85 2.11c0 .76.29 1.53.85 2.11c.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48c.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54c0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94c.68.7 1.02 1.62 1.02 2.54c0 .92-.34 1.83-1.02 2.54c-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92c.32.33.48.76.48 1.19c0 .43-.16.86-.48 1.19c-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11c0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z" fill="currentColor"></svg:path>`,
})
export class OcticonRadioTowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReplyIcon],svg[octicon-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10c-2.312-5.062-4.75-6-8-6V11L.5 5.5L6 0v3.5z" fill="currentColor"></svg:path>`,
})
export class OcticonReplyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoIcon],svg[octicon-repo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoForcePushIcon],svg[octicon-repo-force-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 9H8v7H6V9H4l2.25-3H4l3-4l3 4H7.75L10 9zm1-9H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9v9H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoForcePushIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoForkedIcon],svg[octicon-repo-forked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8L3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoForkedIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPushIcon],svg[octicon-repo-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoPushIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReportIcon],svg[octicon-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 4v-4H1a1 1 0 0 1-1-1V2zm1 0h14v9H6.5L4 13.5V11H1V2zm6 6h2v2H7V8zm0-5h2v4H7V3z" fill="currentColor"></svg:path>`,
})
export class OcticonReportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRequestChangesIcon],svg[octicon-request-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.5L4 15.5V12H1a1 1 0 0 1-1-1V1zm1 0v10h4v2l2-2h8V1H1zm7.5 3h2v1h-2v2h-1V5h-2V4h2V2h1v2zm2 5h-5V8h5v1z" fill="currentColor"></svg:path>`,
})
export class OcticonRequestChangesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRocketIcon],svg[octicon-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12.17 3.83c-.27-.27-.47-.55-.63-.88c-.16-.31-.27-.66-.34-1.02c-.58.33-1.16.7-1.73 1.13c-.58.44-1.14.94-1.69 1.48c-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78c.55-.55 1.05-1.13 1.47-1.7c.44-.58.81-1.16 1.14-1.72c-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63zM16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66c-.7-.08-1.27-.33-1.66-.72c-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28C15.62.08 16 0 16 0z" fill="currentColor"></svg:path>`,
})
export class OcticonRocketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRssIcon],svg[octicon-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z" fill="currentColor"></svg:path>`,
})
export class OcticonRssIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRubyIcon],svg[octicon-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 6l-5 5V4h3l2 2zm3 0l-8 8l-8-8l4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z" fill="currentColor"></svg:path>`,
})
export class OcticonRubyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenFullIcon],svg[octicon-screen-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 10h1v3c0 .547-.453 1-1 1h-3v-1h3v-3zM1 10H0v3c0 .547.453 1 1 1h3v-1H1v-3zm0-7h3V2H1c-.547 0-1 .453-1 1v3h1V3zm1 1h10v8H2V4zm2 6h6V6H4v4zm6-8v1h3v3h1V3c0-.547-.453-1-1-1h-3z" fill="currentColor"></svg:path>`,
})
export class OcticonScreenFullIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenNormalIcon],svg[octicon-screen-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2 4H0V3h2V1h1v2c0 .547-.453 1-1 1zm0 8H0v1h2v2h1v-2c0-.547-.453-1-1-1zm9-2c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1V6c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v4zM9 7H5v2h4V7zm2 6v2h1v-2h2v-1h-2c-.547 0-1 .453-1 1zm1-10V1h-1v2c0 .547.453 1 1 1h2V3h-2z" fill="currentColor"></svg:path>`,
})
export class OcticonScreenNormalIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSearchIcon],svg[octicon-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3c.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7c0-2.59 2.11-4.7 4.7-4.7c2.59 0 4.7 2.11 4.7 4.7c0 2.59-2.11 4.7-4.7 4.7z" fill="currentColor"></svg:path>`,
})
export class OcticonSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconServerIcon],svg[octicon-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 6H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM2 9H1V7h1v2zm2 0H3V7h1v2zm2 0H5V7h1v2zm2 0H7V7h1v2zm3-8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2 4H1V2h1v2zm2 0H3V2h1v2zm2 0H5V2h1v2zm2 0H7V2h1v2zm3-1h-1V2h1v1zm0 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-9 3H1v-2h1v2zm2 0H3v-2h1v2zm2 0H5v-2h1v2zm2 0H7v-2h1v2z" fill="currentColor"></svg:path>`,
})
export class OcticonServerIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSettingsIcon],svg[octicon-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonSettingsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldIcon],svg[octicon-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61c-.19.13-.3.36-.25.59L9 11H5z" fill="currentColor"></svg:path>`,
})
export class OcticonShieldIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignInIcon],svg[octicon-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 6.75V12h4V8h1v4c0 .55-.45 1-1 1H7v3l-5.45-2.72c-.33-.17-.55-.52-.55-.91V1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v3h-1V1H3l4 2v2.25L10 3v2h4v2h-4v2L7 6.75z" fill="currentColor"></svg:path>`,
})
export class OcticonSignInIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignOutIcon],svg[octicon-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3l-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z" fill="currentColor"></svg:path>`,
})
export class OcticonSignOutIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSmileyIcon],svg[octicon-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53c-.92 0-1.81-.17-2.64-.53c-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64c.34-.81.83-1.55 1.45-2.17c.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53c.81.34 1.55.83 2.17 1.45c.62.62 1.11 1.36 1.45 2.17c.36.83.53 1.72.53 2.64c0 .92-.17 1.81-.53 2.64c-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z" fill="currentColor"></svg:path>`,
})
export class OcticonSmileyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquirrelIcon],svg[octicon-squirrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08c0-4.5-2.77-6.34-4-6.34c.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43c.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47c0-.85-.43-1.79-1-2.53c-1.11-1.46.23-2.68 1-2c.77.68 3 1 3-2c0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5z" fill="currentColor"></svg:path>`,
})
export class OcticonSquirrelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStarIcon],svg[octicon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1L4.9 5.36L0 6l3.6 3.26L2.67 14L7 11.67L11.33 14l-.93-4.74L14 6z" fill="currentColor"></svg:path>`,
})
export class OcticonStarIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStopIcon],svg[octicon-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z" fill="currentColor"></svg:path>`,
})
export class OcticonStopIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSyncIcon],svg[octicon-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6a4.346 4.346 0 0 1-5.41.54L4.8 10.4L.5 9.8l.6 4.2l1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6l-.6-4.2l-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z" fill="currentColor"></svg:path>`,
})
export class OcticonSyncIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTagIcon],svg[octicon-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13l-4.73 4.73l-6.13-6.15zM3.01 3h2v2H3V3h.01z" fill="currentColor"></svg:path>`,
})
export class OcticonTagIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTasklistIcon],svg[octicon-tasklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2L7.09 0L8.5 1.41L3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z" fill="currentColor"></svg:path>`,
})
export class OcticonTasklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTelescopeIcon],svg[octicon-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5l2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66l-1.16-2l-1.27.86l.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03l-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83l1.84 3.2l1.33-.64c.27-.13.36-.44.22-.7z" fill="currentColor"></svg:path>`,
})
export class OcticonTelescopeIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTerminalIcon],svg[octicon-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 10h4v1H7v-1zm-3 1l3-3l-3-3l-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z" fill="currentColor"></svg:path>`,
})
export class OcticonTerminalIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTextSizeIcon],svg[octicon-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonTextSizeIcon {
  readonly viewBox = input("0 0 18 16")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThreeBarsIcon],svg[octicon-three-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" fill="currentColor"></svg:path>`,
})
export class OcticonThreeBarsIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsdownIcon],svg[octicon-thumbsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.98 7.83l-.97-5.95C14.84.5 13.13 0 12 0H5.69c-.2 0-.38.05-.53.14L3.72 1H2C.94 1 0 1.94 0 3v4c0 1.06.94 2.02 2 2h2c.91 0 1.39.45 2.39 1.55c.91 1 .88 1.8.63 3.27c-.08.5.06 1 .42 1.42c.39.47.98.76 1.56.76c1.83 0 3-3.71 3-5.01l-.02-.98h2.04c1.16 0 1.95-.8 1.98-1.97c0-.11-.02-.21-.02-.21zm-1.97 1.19h-1.99c-.7 0-1.03.28-1.03.97l.03 1.03c0 1.27-1.17 4-2 4c-.5 0-1.08-.5-1-1c.25-1.58.34-2.78-.89-4.14C6.11 8.75 5.36 8 4 8V2l1.67-1H12c.73 0 1.95.31 2 1l.02.02l1 6c-.03.64-.38 1-1 1h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonThumbsdownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsupIcon],svg[octicon-thumbsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.98 8.17l-.97 5.95C14.84 15.5 13.13 16 12 16H5.69c-.2 0-.38-.05-.53-.14L3.72 15H2c-1.06 0-2-.94-2-2V9c0-1.06.94-2.02 2-2h2c.91 0 1.39-.45 2.39-1.55c.91-1 .88-1.8.63-3.27c-.08-.5.06-1 .42-1.42C7.83.29 8.42 0 9 0c1.83 0 3 3.71 3 5.01l-.02.98h2.04c1.16 0 1.95.8 1.98 1.97c0 .11-.02.21-.02.21zm-1.97-1.19h-1.99c-.7 0-1.03-.28-1.03-.97l.03-1.03c0-1.27-1.17-4-2-4c-.5 0-1.08.5-1 1c.25 1.58.34 2.78-.89 4.14C6.11 7.25 5.36 8 4 8v6l1.67 1H12c.73 0 1.95-.31 2-1l.02-.02l1-6c-.03-.64-.38-1-1-1h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonThumbsupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconToolsIcon],svg[octicon-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z" fill="currentColor"></svg:path>`,
})
export class OcticonToolsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrashcanIcon],svg[octicon-trashcan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z" fill="currentColor"></svg:path>`,
})
export class OcticonTrashcanIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleDownIcon],svg[octicon-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 5l6 6l6-6H0z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleDownIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleLeftIcon],svg[octicon-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 2L0 8l6 6V2z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleLeftIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleRightIcon],svg[octicon-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 14l6-6l-6-6v12z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleRightIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleUpIcon],svg[octicon-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 11L6 5l-6 6h12z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleUpIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnfoldIcon],svg[octicon-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0L4 3h2v3zm2 3H6v3H4l3 3l3-3H8V9z" fill="currentColor"></svg:path>`,
})
export class OcticonUnfoldIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnmuteIcon],svg[octicon-unmute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16c0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z" fill="currentColor"></svg:path>`,
})
export class OcticonUnmuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnverifiedIcon],svg[octicon-unverified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM9 11.5c0 .28-.22.5-.5.5h-1c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.89c-.06.17-.17.33-.3.47c-.13.16-.14.19-.33.38c-.16.17-.31.3-.52.45c-.11.09-.2.19-.28.27c-.08.08-.14.17-.19.27c-.05.1-.08.19-.11.3c-.03.11-.03.13-.03.25H7.13c0-.22 0-.31.03-.48c.03-.19.08-.36.14-.52c.06-.14.14-.28.25-.42c.11-.13.23-.25.41-.38c.27-.19.36-.3.48-.52c.12-.22.2-.38.2-.59c0-.27-.06-.45-.2-.58c-.13-.13-.31-.19-.58-.19c-.09 0-.19.02-.3.05c-.11.03-.17.09-.25.16c-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28h-2c0-.38.13-.56.27-.83c.16-.27.36-.5.61-.67c.25-.17.55-.3.88-.38c.33-.08.7-.13 1.09-.13c.44 0 .83.05 1.17.13c.34.09.63.22.88.39c.23.17.41.38.55.63c.13.25.19.55.19.88c0 .22 0 .42-.08.59l-.02-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonUnverifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVerifiedIcon],svg[octicon-verified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5l2 2l5-5L13 5.56l-6.5 6.45z" fill="currentColor"></svg:path>`,
})
export class OcticonVerifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVersionsIcon],svg[octicon-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonVersionsIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconWatchIcon],svg[octicon-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 8h2v1H5V5h1v3zm6 0c0 2.22-1.2 4.16-3 5.19V15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.81C1.2 12.16 0 10.22 0 8s1.2-4.16 3-5.19V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.81c1.8 1.03 3 2.97 3 5.19zm-1 0c0-2.77-2.23-5-5-5S1 5.23 1 8s2.23 5 5 5s5-2.23 5-5z" fill="currentColor"></svg:path>`,
})
export class OcticonWatchIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXIcon],svg[octicon-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.48 8l3.75 3.75l-1.48 1.48L6 9.48l-3.75 3.75l-1.48-1.48L4.52 8L.77 4.25l1.48-1.48L6 6.52l3.75-3.75l1.48 1.48L7.48 8z" fill="currentColor"></svg:path>`,
})
export class OcticonXIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZapIcon],svg[octicon-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 7H6l3-7l-9 9h4l-3 7l9-9z" fill="currentColor"></svg:path>`,
})
export class OcticonZapIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
