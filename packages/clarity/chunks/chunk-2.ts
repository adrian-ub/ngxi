import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTickChartLineIcon],svg[clarity-tick-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43c.44.63.02 1.5-.74 1.56L6 26.991Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTickChartLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTickChartOutlineAlertedIcon],svg[clarity-tick-chart-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43c.44.63.02 1.5-.74 1.56L6 26.991Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="m26.854 1.144l-5.72 9.86a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTickChartOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTickChartOutlineBadgedIcon],svg[clarity-tick-chart-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M6 25h2v-3h2v3h3v-3h2v3h3v-3h2v3h3v-3h2v3h2.723c.3.02.57.18.74.43c.44.63.02 1.5-.74 1.56L6 26.991Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTickChartOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTickChartSolidIcon],svg[clarity-tick-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTickChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTickChartSolidAlertedIcon],svg[clarity-tick-chart-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-4.333 7.395c-.83 1.206-.031 2.85 1.439 2.956q.104.009.206.006H34ZM6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="m26.854 1.144l-5.72 9.86a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTickChartSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTickChartSolidBadgedIcon],svg[clarity-tick-chart-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.44 7.44 0 0 0 6.74 8.46l1.01.02A7.45 7.45 0 0 0 34 12.34M6 26.991l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43H25v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3H8v3H6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTickChartSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTimelineLineIcon],svg[clarity-timeline-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18c0-1.3-.8-2.4-2-2.8v-3.4c1.2-.4 2-1.5 2-2.8c0-1.7-1.3-3-3-3S4 7.3 4 9c0 1.3.8 2.4 2 2.8v3.4c-1.2.4-2 1.5-2 2.8s.8 2.4 2 2.8v3.4c-1.2.4-2 1.5-2 2.8c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8v-3.4c1.2-.4 2-1.5 2-2.8m21-8H15c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1m0 9H15c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1m0 9H15c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTimelineLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTimesCircleLineIcon],svg[clarity-times-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.61 18l4.86-4.86a1 1 0 0 0-1.41-1.41l-4.86 4.81l-4.89-4.89a1 1 0 0 0-1.41 1.41L16.78 18L12 22.72a1 1 0 1 0 1.41 1.41l4.77-4.77l4.74 4.74a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTimesCircleLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTimesCircleSolidIcon],svg[clarity-times-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTimesCircleSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTimesLineIcon],svg[clarity-times-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTimesLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityToolsLineIcon],svg[clarity-tools-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-.4 6.6h-3.2v-5.2h3.2Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m33.71 12.38l-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V13.08a1 1 0 0 0-.29-.7M14 6h8v2h-8Zm18 11H22v1.93h10V28H4v-9.07h10V17H4v-3.5L7.5 10h21l3.5 3.5Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityToolsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityToolsSolidIcon],svg[clarity-tools-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 15.4h3.2v5.2h-3.2z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M21 21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H2v9a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9H21Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="m33.71 12.38l-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V17h13v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h13v-3.92a1 1 0 0 0-.29-.7M22 8h-8V6h8Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityToolsSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTrailerLineIcon],svg[clarity-trailer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8m0 10c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M14 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M33 9H2v13.1C2 24.3 3.7 26 5.9 26H7v-2H5.9c-1 0-1.8-.8-1.9-1.9V15h22v7.1c0 1-.8 1.8-1.9 1.9H23v2h1.1c2.1 0 3.8-1.7 3.8-3.9V11h5c.6 0 1-.4 1-1s-.3-1-.9-1m-7 4H4v-2h22z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTrailerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTrailerSolidIcon],svg[clarity-trailer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 9H2v13.1C2 24.3 3.7 26 5.9 26H7v-2H5.9c-1 0-1.8-.8-1.9-1.9V15h22v7.1c0 1-.8 1.8-1.9 1.9H23v2h1.1c2.1 0 3.8-1.7 3.8-3.9V11h5c.6 0 1-.4 1-1s-.3-1-.9-1" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M15 19.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8m1 6.8h-2v-2h2z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTrailerSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTrashLineIcon],svg[clarity-trash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.14 34H8.86A2.93 2.93 0 0 1 6 31V11.23h2V31a.93.93 0 0 0 .86 1h18.28a.93.93 0 0 0 .86-1V11.23h2V31a2.93 2.93 0 0 1-2.86 3" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30.78 9H5a1 1 0 0 1 0-2h25.78a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M21 13h2v15h-2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M13 13h2v15h-2z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M23 5.86h-1.9V4h-6.2v1.86H13V4a2 2 0 0 1 1.9-2h6.2A2 2 0 0 1 23 4Z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTrashLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTrashSolidIcon],svg[clarity-trash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9v22a2.93 2.93 0 0 0 2.86 3h18.23A2.93 2.93 0 0 0 30 31V9Zm9 20h-2V14h2Zm8 0h-2V14h2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M30.73 5H23V4a2 2 0 0 0-2-2h-6.2A2 2 0 0 0 13 4v1H5a1 1 0 1 0 0 2h25.73a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTrashSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTreeLineIcon],svg[clarity-tree-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.6 11.7C29.2 5.8 24 1.7 18 1.7c-7.2 0-13 5.8-13 13c0 6.8 5.3 12.4 12 12.9v5c0 .6.4 1 1 1s1-.4 1-1V18.3l4.7-4.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L19 15.6v-3l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.7 2.7v6.2l-3.8-3.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.2 5.2v3.2c-5.6-.5-10-5.2-10-10.9c0-6.1 4.9-11 11-11s11 4.9 11 11c0 4.9-3.3 9.2-8 10.6v2.1c7-1.7 11.3-8.7 9.6-15.7" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTreeSolidIcon],svg[clarity-tree-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2C10.8 1.7 4.8 7.3 4.5 14.5S9.8 27.7 17 28v-5.2l-5.2-5.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L17 20v-6.2l-2.7-2.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L19 13v3l3.3-3.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L19 18.8V28c7.2-.3 12.8-6.3 12.5-13.5S25.2 1.7 18 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M18 28h-1v5c0 .6.4 1 1 1s1-.4 1-1v-5z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTreeViewLineIcon],svg[clarity-tree-view-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 32h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-3-2h2v-2h-2Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8h6.36a.8.8 0 0 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M4 8h2v2H4Zm10 12h-2v-2h2Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M34 9a1 1 0 0 0-1-1H10v2h23a1 1 0 0 0 1-1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M33 18H18v2h15a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M33 28H18v2h15a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeViewLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTreeViewSolidIcon],svg[clarity-tree-view-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="6" x="10" y="26" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="1" ry="1"></svg:rect><svg:path fill="currentColor" d="M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8H11a.8.8 0 1 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M33 8H10v2h23a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M33 18H18v2h15a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="currentColor" d="M33 28H18v2h15a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeViewSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTruckLineIcon],svg[clarity-truck-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 12h-4V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1V8h20v11.7a6.5 6.5 0 0 1 1.56-.2H26V14h4a2 2 0 0 1 2 2v1h-4v2h4v5h-2.4a4.54 4.54 0 0 0-8.34 0h-6.83a4.5 4.5 0 0 0-4.17-2.76A4.38 4.38 0 1 0 14.72 26H21a4.49 4.49 0 0 0 8.92 0H33a1 1 0 0 0 1-1v-9a4 4 0 0 0-4-4M10.26 28a2.38 2.38 0 1 1 0-4.75a2.38 2.38 0 1 1 0 4.75m15.17 0a2.38 2.38 0 1 1 2.5-2.37a2.44 2.44 0 0 1-2.5 2.37" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTruckLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTruckSolidIcon],svg[clarity-truck-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 12h-4V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1V8h20v13.49A4.45 4.45 0 0 0 21.25 24h-6.82a4.5 4.5 0 0 0-4.17-2.76A4.38 4.38 0 1 0 14.72 26H21a4.48 4.48 0 0 0 8.91 0H34V16a4 4 0 0 0-4-4M10.26 28a2.38 2.38 0 1 1 0-4.75a2.38 2.38 0 1 1 0 4.75m15.17 0a2.38 2.38 0 1 1 2.5-2.37A2.44 2.44 0 0 1 25.42 28ZM32 17h-6v-3h4a2 2 0 0 1 2 2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTruckSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityTwoWayArrowsLineIcon],svg[clarity-two-way-arrows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.43 16.83A1 1 0 0 0 22 18.24L25.72 22H7.83a1 1 0 0 0 0 2h17.89L22 27.7a1 1 0 1 0 1.42 1.41L29.53 23Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M13.24 18.45a1 1 0 0 0 .71-1.71L10.24 13h17.88a1 1 0 0 0 0-2H10.24l3.71-3.73a1 1 0 0 0-1.42-1.41L6.42 12l6.11 6.14a1 1 0 0 0 .71.31" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTwoWayArrowsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnarchiveLineIcon],svg[clarity-unarchive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 32H7V22H5v10a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V22h-2Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M14 24a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-6a1 1 0 0 0-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15 18H6v-4h9v-2H5.5A1.5 1.5 0 0 0 4 13.5V20h11.78a3 3 0 0 1-.78-2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M30.5 12H21v2h9v4h-9a3 3 0 0 1-.78 2H32v-6.5a1.5 1.5 0 0 0-1.5-1.5" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="m13 9.55l4-3.95V18a1 1 0 1 0 2 0V5.6l4 3.95a1 1 0 1 0 1.41-1.42L18 1.78l-6.39 6.35A1 1 0 0 0 13 9.55" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnarchiveLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnarchiveSolidIcon],svg[clarity-unarchive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21a3 3 0 0 1-2.22-1H5v12a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V20H20.21A3 3 0 0 1 18 21m4 3a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M15 12H5.5A1.5 1.5 0 0 0 4 13.5V18h11Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M30.5 12H21v6h11v-4.5a1.5 1.5 0 0 0-1.5-1.5" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="m13 9.55l4-3.95V18a1 1 0 1 0 2 0V5.6l4 3.95a1 1 0 1 0 1.41-1.42L18 1.78l-6.39 6.35A1 1 0 0 0 13 9.55" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnarchiveSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnderlineLineIcon],svg[clarity-underline-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28.17c5.08 0 8.48-3.08 8.48-9V8.54a1.15 1.15 0 1 0-2.3 0v10.8c0 4.44-2.38 6.71-6.13 6.71s-6.21-2.47-6.21-6.85V8.54a1.15 1.15 0 1 0-2.3 0v10.8C9.53 25.09 13 28.17 18 28.17" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M31 30H5a1.11 1.11 0 0 0 0 2.21h26A1.11 1.11 0 0 0 31 30" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnderlineLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUndoLineIcon],svg[clarity-undo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 11.14h-13l5.56-5.49A1 1 0 0 0 12 4.22l-8 7.91L12 20a1 1 0 0 0 1.41-1.42l-5.55-5.44h13a9.08 9.08 0 0 1 9.13 9a9 9 0 0 1-5 8a1 1 0 0 0 .94 1.86a11 11 0 0 0-5.06-20.82Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUndoLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUninstallLineIcon],svg[clarity-uninstall-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 26.72a1 1 0 0 0 1.41 0l5.3-5.23l5.3 5.23a1 1 0 0 0 1.4-1.42l-5.28-5.21l5.28-5.21a1 1 0 0 0-1.41-1.42L18 18.68l-5.3-5.23a1 1 0 0 0-1.41 1.42l5.28 5.21l-5.27 5.22a1 1 0 0 0-.01 1.42" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30.92 8h-4.37a1 1 0 0 0 0 2H31v20H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V10a2 2 0 0 0-2.08-2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUninstallLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUninstallOutlineAlertedIcon],svg[clarity-uninstall-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 26.72a1 1 0 0 0 1.41 0l5.3-5.23l5.3 5.23a1 1 0 0 0 1.4-1.42l-5.28-5.21l4.75-4.69h-1.94a3.7 3.7 0 0 1-.81-.1L18 18.68l-5.3-5.23a1 1 0 0 0-1.41 1.42l5.28 5.21l-5.27 5.22a1 1 0 0 0-.01 1.42" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M31 15.4V30H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUninstallOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUninstallOutlineBadgedIcon],svg[clarity-uninstall-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 26.72a1 1 0 0 0 1.41 0l5.3-5.23l5.3 5.23a1 1 0 0 0 1.4-1.42l-5.28-5.21l5.28-5.21a1 1 0 0 0-1.41-1.42L18 18.68l-5.3-5.23a1 1 0 0 0-1.41 1.42l5.28 5.21l-5.27 5.22a1 1 0 0 0-.01 1.42" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M31 13.43V30H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V12.87a7.5 7.5 0 0 1-2 .56" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUninstallOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnknownStatusLineIcon],svg[clarity-unknown-status-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.58" cy="26.23" r="1.4" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:path fill="currentColor" d="M24.7 13a5.18 5.18 0 0 0-2.16-3.56a7.26 7.26 0 0 0-5.71-1.09A11.34 11.34 0 0 0 12 10.44A1 1 0 1 0 13.26 12a9.3 9.3 0 0 1 3.94-1.72a5.3 5.3 0 0 1 4.16.74a3.2 3.2 0 0 1 1.35 2.19c.33 2.69-3.19 3.75-5.32 4.14l-.82.15v4.36a1 1 0 0 0 2 0v-2.69c6.04-1.38 6.31-4.76 6.13-6.17" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnknownStatusLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnlinkLineIcon],svg[clarity-unlink-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L3.59 6.41l9 9l-4.49 4.38a5.91 5.91 0 0 0 0 8.39a6 6 0 0 0 8.44 0l4.46-4.4l8.63 8.63L31 31Zm10.13 21.76a4 4 0 0 1-5.62 0a3.92 3.92 0 0 1 0-5.55L14 16.79l5.58 5.58Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M21.53 9.22a4 4 0 0 1 5.62 0a3.92 3.92 0 0 1 0 5.55l-4.79 4.76L23.78 21l4.79-4.76a5.92 5.92 0 0 0 0-8.39a6 6 0 0 0-8.44 0l-4.76 4.74L16.78 14Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnlinkLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnlockLineIcon],svg[clarity-unlock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 25.14V28h2v-2.77a2.42 2.42 0 1 0-2-.09" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M26 2a8.2 8.2 0 0 0-8 8.36V15H2v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15h-4v-4.64A6.2 6.2 0 0 1 26 4a6.2 6.2 0 0 1 6 6.36v6.83a1 1 0 0 0 2 0v-6.83A8.2 8.2 0 0 0 26 2m-4 15v15H4V17Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnlockLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUnlockSolidIcon],svg[clarity-unlock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2a8.2 8.2 0 0 0-8 8.36V15H2v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15h-4v-4.64A6.2 6.2 0 0 1 26 4a6.2 6.2 0 0 1 6 6.36v6.83a1 1 0 0 0 2 0v-6.83A8.2 8.2 0 0 0 26 2M14 25.23V28h-2v-2.86a2.4 2.4 0 1 1 2 .09" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUnlockSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUpdateLineIcon],svg[clarity-update-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 28.1h-2.9c-.5 0-.9-.3-1-.8l-.5-1.8l-.4-.2l-1.6.9c-.4.2-.9.2-1.2-.2l-2.1-2.1c-.3-.3-.4-.8-.2-1.2l.9-1.6l-.2-.4l-1.8-.5c-.4-.1-.8-.5-.8-1v-2.9c0-.5.3-.9.8-1l1.8-.5l.2-.4l-.9-1.6c-.2-.4-.2-.9.2-1.2l2.1-2.1c.3-.3.8-.4 1.2-.2l1.6.9l.4-.2l.5-1.8c.1-.4.5-.8 1-.8h2.9c.5 0 .9.3 1 .8L21 10l.4.2l1.6-.9c.4-.2.9-.2 1.2.2l2.1 2.1c.3.3.4.8.2 1.2l-.9 1.6l.2.4l1.8.5c.4.1.8.5.8 1v2.9c0 .5-.3.9-.8 1l-1.8.5l-.2.4l.9 1.6c.2.4.2.9-.2 1.2L24.2 26c-.3.3-.8.4-1.2.2l-1.6-.9l-.4.2l-.5 1.8c-.2.5-.6.8-1 .8m-2.2-2h1.4l.5-2.1l.5-.2c.4-.1.7-.3 1.1-.4l.5-.3l1.9 1.1l1-1l-1.1-1.9l.3-.5c.2-.3.3-.7.4-1.1l.2-.5l2.1-.5v-1.4l-2.1-.5l-.2-.5c-.1-.4-.3-.7-.4-1.1l-.3-.5l1.1-1.9l-1-1l-1.9 1.1l-.5-.3c-.3-.2-.7-.3-1.1-.4l-.5-.2l-.5-2.1h-1.4l-.5 2.1l-.5.2c-.4.1-.7.3-1.1.4l-.5.3l-1.9-1.1l-1 1l1.1 1.9l-.3.5c-.2.3-.3.7-.4 1.1l-.2.5l-2.1.5v1.4l2.1.5l.2.5c.1.4.3.7.4 1.1l.3.5l-1.1 1.9l1 1l1.9-1.1l.5.3c.3.2.7.3 1.1.4l.5.2zm9.8-6.6"></svg:path><svg:path fill="currentColor" d="M18 22.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3m0-6.6c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3s2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M18 2c-.6 0-1 .4-1 1s.4 1 1 1c7.7 0 14 6.3 14 14s-6.3 14-14 14S4 25.7 4 18c0-2.8.8-5.5 2.4-7.8v1.2c0 .6.4 1 1 1s1-.4 1-1v-5h-5c-.6 0-1 .4-1 1s.4 1 1 1h1.8C3.1 11.1 2 14.5 2 18c0 8.8 7.2 16 16 16s16-7.2 16-16S26.8 2 18 2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUpdateLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUploadCloudLineIcon],svg[clarity-upload-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.31 13v-.32a10.26 10.26 0 0 0-10.45-10a10.47 10.47 0 0 0-9.6 6.1A9.74 9.74 0 0 0 1.6 18.4a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75A7.65 7.65 0 0 1 11 10.74h.67l.23-.63a8.43 8.43 0 0 1 8-5.4a8.26 8.26 0 0 1 8.45 8a8 8 0 0 1 0 .8l-.08.72l.65.3A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 3.93-15" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5l-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadCloudLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUploadCloudOutlineAlertedIcon],svg[clarity-upload-cloud-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5l-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M3.6 18.38a7.71 7.71 0 0 1 7.4-7.64h.67l.23-.63a8.43 8.43 0 0 1 8-5.4a8.8 8.8 0 0 1 2 .25l1-1.8a10.8 10.8 0 0 0-3.07-.45a10.47 10.47 0 0 0-9.6 6.1A9.74 9.74 0 0 0 1.6 18.4a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75a7.66 7.66 0 0 1-7.65-7.62" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M32.9 15.4h-2.69A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 6.52-12.6" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadCloudOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUploadCloudOutlineBadgedIcon],svg[clarity-upload-cloud-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5l-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M30.92 13.44a7.1 7.1 0 0 1-2.63-.14v.23l-.08.72l.65.3A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 4.54-14.56" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M3.6 18.38a7.71 7.71 0 0 1 7.4-7.64h.67l.23-.63a8.43 8.43 0 0 1 8-5.4a8.8 8.8 0 0 1 2.68.42a7.5 7.5 0 0 1 .5-1.94a10.8 10.8 0 0 0-3.18-.48a10.47 10.47 0 0 0-9.6 6.1a9.74 9.74 0 0 0-8.7 9.59a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75a7.66 7.66 0 0 1-7.65-7.62" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadCloudOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUploadLineIcon],svg[clarity-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M8.81 15L17 6.83v20.65a1 1 0 0 0 2 0V6.83L27.19 15a1 1 0 0 0 1.41-1.41L18 3L7.39 13.61A1 1 0 1 0 8.81 15" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUploadOutlineAlertedIcon],svg[clarity-upload-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 31H5c-.6 0-1 .4-1 1s.4 1 1 1h26c.6 0 1-.4 1-1s-.4-1-1-1M8.8 15L17 6.8v20.6c0 .6.4 1 1 1s1-.4 1-1V6.8L20.1 8l1-1.8L18 3L7.4 13.6c-.4.4-.5 1-.2 1.4s1 .5 1.4.1c.1 0 .2 0 .2-.1" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M26.9 1.1L21.1 11c-.4.6-.2 1.4.3 1.8c.2.2.5.2.8.2h11.5c.7 0 1.3-.5 1.3-1.2c0-.3-.1-.5-.2-.8l-5.7-9.9C28.7.5 28 .3 27.3.6c-.2.2-.3.4-.4.5" class="clr-i-outline--alerted clr-i-outline-path-1--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUploadOutlineBadgedIcon],svg[clarity-upload-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M8.81 15L17 6.83v20.65a1 1 0 0 0 2 0V6.83L27.19 15a1 1 0 0 0 1.41-1.41L18 3L7.39 13.61A1 1 0 1 0 8.81 15" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsbLineIcon],svg[clarity-usb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.29 11.4a1.49 1.49 0 0 1 1.28-.72h1a2.89 2.89 0 0 0 2.75 2.09a3 3 0 0 0 0-5.91a2.9 2.9 0 0 0-2.67 1.82h-1.08a3.49 3.49 0 0 0-3 1.66l-3 4.83h2.36Zm5-2.94A1.36 1.36 0 1 1 18 9.81a1.32 1.32 0 0 1 1.33-1.35Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m34.3 17.37l-6.11-3.66a.7.7 0 0 0-.7 0a.71.71 0 0 0-.36.61V17H6.92a2.33 2.33 0 0 1 .32 1.17a2.47 2.47 0 1 1-2.47-2.46a2.4 2.4 0 0 1 1.15.3l.93-1.76A4.44 4.44 0 1 0 9.15 19h3.58l4.17 6.65a3.49 3.49 0 0 0 3 1.66h1.66v1.28a.79.79 0 0 0 .8.79h4.49a.79.79 0 0 0 .8-.79v-4.4a.79.79 0 0 0-.8-.8h-4.51a.8.8 0 0 0-.8.8v1.12h-1.66a1.51 1.51 0 0 1-1.28-.72L15.09 19h12v2.66a.69.69 0 0 0 .36.61a.67.67 0 0 0 .34.09a.65.65 0 0 0 .36-.1l6.11-3.66a.69.69 0 0 0 .34-.6a.71.71 0 0 0-.3-.63M23.14 25H26v2.8h-2.86Zm5.39-4.56v-4.89l4 2.42Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsbLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsbSolidIcon],svg[clarity-usb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m34.72 17.37l-5.51-3.31a.71.71 0 0 0-1.07.6V17H11.77l3.52-5.6a1.49 1.49 0 0 1 1.28-.72h1.64a2.41 2.41 0 0 0 2.25 1.61a2.48 2.48 0 0 0 0-4.95a2.38 2.38 0 0 0-2.13 1.34h-1.76a3.49 3.49 0 0 0-3 1.66L9.41 17H8a3.46 3.46 0 1 0 .08 2h5.64l4.15 6.62a3.49 3.49 0 0 0 3 1.66h2.59v.92h4.4v-4.4h-4.4v1.48h-2.58a1.51 1.51 0 0 1-1.28-.72L16.11 19h12v2.28a.7.7 0 0 0 .36.61a.7.7 0 0 0 .34.09a.65.65 0 0 0 .36-.1l5.52-3.31a.7.7 0 0 0 0-1.2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsbSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUserLineIcon],svg[clarity-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUserOutlineAlertedIcon],svg[clarity-user-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M18 17a7 7 0 0 0 4.45-1.6h-.22a3.68 3.68 0 0 1-2.23-.8a5 5 0 1 1 1.24-8.42l1-1.76A7 7 0 1 0 18 17" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUserOutlineBadgedIcon],svg[clarity-user-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M18 17a7 7 0 0 0 6.85-5.56a7.4 7.4 0 0 1-2.24-6.69A7 7 0 1 0 18 17m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUserSolidIcon],svg[clarity-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:circle cx="18" cy="10" r="7" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUserSolidAlertedIcon],svg[clarity-user-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M18 17a7 7 0 0 0 4.45-1.6h-.22A3.68 3.68 0 0 1 19 9.89l3.16-5.47A7 7 0 1 0 18 17" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUserSolidBadgedIcon],svg[clarity-user-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M18 17a7 7 0 0 0 6.85-5.56a7.4 7.4 0 0 1-2.24-6.69A7 7 0 1 0 18 17" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsersLineIcon],svg[clarity-users-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9m-.1-7.7q.15 0 0 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8S15 14 15 12.5c0-1.6 1.3-2.9 2.8-2.9" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M32.7 16.7c-1.9-1.7-4.4-2.6-7-2.5h-.8q-.3 1.2-.9 2.1c.6-.1 1.1-.1 1.7-.1c1.9-.1 3.8.5 5.3 1.6V25h2v-8z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M23.4 7.8c.5-1.2 1.9-1.8 3.2-1.3c1.2.5 1.8 1.9 1.3 3.2c-.4.9-1.3 1.5-2.2 1.5c-.2 0-.5 0-.7-.1c.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1c2.5 0 4.5-2 4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6 0-3 .8-3.8 2.2c.5.3 1 .7 1.4 1.3" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M12 16.4q-.6-.9-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6c.6 0 1.2.1 1.7.2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M10.3 13.1c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4c-.2.1-.5.1-.7.1c-1.3 0-2.4-1.1-2.4-2.4S9 6.3 10.3 6.3c1 0 1.9.6 2.3 1.5c.4-.5 1-1 1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5s-2.8 4-1.5 6.1c.8 1.3 2.2 2.1 3.8 2.1" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="m26.1 22.7l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4c-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4c2.2-.1 4.4.8 6 2.4z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsersLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsersOutlineAlertedIcon],svg[clarity-users-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.09 14.57h.31a6.4 6.4 0 0 1 .09-2a2.09 2.09 0 1 1 1.47-3a6.6 6.6 0 0 1 1.55-1.31a4.09 4.09 0 1 0-3.42 6.33Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M13 18.14a6.5 6.5 0 0 1-1.28-2.2h-.63a8.67 8.67 0 0 0-6.43 2.52l-.24.28v7h2v-6.23a7 7 0 0 1 4.67-1.6a8 8 0 0 1 1.91.23" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M31.35 18.42A8.6 8.6 0 0 0 25 15.91c-.32 0-.6 0-.9.06a6.5 6.5 0 0 1-1.35 2.25a7.9 7.9 0 0 1 2.25-.31a6.94 6.94 0 0 1 4.64 1.58v6.27h2V18.7Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M18.1 19.73a9.7 9.7 0 0 0-7.1 2.74l-.25.28v7.33a1.57 1.57 0 0 0 1.61 1.54h11.47a1.57 1.57 0 0 0 1.61-1.54v-7.35l-.25-.28a9.58 9.58 0 0 0-7.09-2.72m5.33 9.88h-10.7v-6.06a8.08 8.08 0 0 1 5.37-1.82a8 8 0 0 1 5.33 1.8Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M20.28 14.27a2.46 2.46 0 1 1-2.42-2.89a2.4 2.4 0 0 1 1 .24a3.67 3.67 0 0 1 .43-2a4.4 4.4 0 0 0-1.48-.27A4.47 4.47 0 1 0 22.14 15a3.7 3.7 0 0 1-1.86-.73" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"></svg:path><svg:path fill="currentColor" d="m27.18.8l-5.72 9.91a1.28 1.28 0 0 0 1.1 1.91H34a1.28 1.28 0 0 0 1.1-1.91L29.39.8a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsersOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsersOutlineBadgedIcon],svg[clarity-users-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.09 14.57h.31a6.4 6.4 0 0 1 .09-2a2.09 2.09 0 1 1 1.47-3a6.6 6.6 0 0 1 1.55-1.31a4.09 4.09 0 1 0-3.42 6.33Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M13 18.14a6.5 6.5 0 0 1-1.28-2.2h-.63a8.67 8.67 0 0 0-6.43 2.52l-.24.28v7h2v-6.23a7 7 0 0 1 4.67-1.6a8 8 0 0 1 1.91.23" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M31.35 18.42A8.6 8.6 0 0 0 25 15.91c-.32 0-.6 0-.9.06a6.5 6.5 0 0 1-1.35 2.25a7.9 7.9 0 0 1 2.25-.31a6.94 6.94 0 0 1 4.64 1.58v6.27h2V18.7Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M17.86 18.3a4.47 4.47 0 1 0-4.47-4.47a4.47 4.47 0 0 0 4.47 4.47m0-6.93a2.47 2.47 0 1 1-2.47 2.47a2.47 2.47 0 0 1 2.47-2.47" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M18.1 19.73a9.7 9.7 0 0 0-7.1 2.74l-.25.28v7.33a1.57 1.57 0 0 0 1.61 1.54h11.47a1.57 1.57 0 0 0 1.61-1.54v-7.35l-.25-.28a9.58 9.58 0 0 0-7.09-2.72m5.33 9.88h-10.7v-6.06a8.08 8.08 0 0 1 5.37-1.82a8 8 0 0 1 5.33 1.8Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M26.37 12a2 2 0 0 1-2.09.42a6.5 6.5 0 0 1 .15 1.38a7 7 0 0 1 0 .68a4 4 0 0 0 .57.06a4.08 4.08 0 0 0 3.3-1.7a7.5 7.5 0 0 1-1.93-.84" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="M22.95 6.93a4.16 4.16 0 0 0-1.47 1.44A6.6 6.6 0 0 1 23 9.77a2.1 2.1 0 0 1 .59-.83a7.4 7.4 0 0 1-.64-2.01" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:circle cx="30.33" cy="5.67" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsersOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsersSolidIcon],svg[clarity-users-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.6 6.6 0 0 1 12 16.14" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a11 11 0 0 0-1.09.06a6.6 6.6 0 0 1-2 2.45a10.9 10.9 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M24.43 13.44a7 7 0 0 1 0 .69a4 4 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:circle cx="17.87" cy="13.45" r="4.47" fill="currentColor" class="clr-i-solid clr-i-solid-path-5"></svg:circle><svg:path fill="currentColor" d="M18.11 20.3A9.7 9.7 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7" class="clr-i-solid clr-i-solid-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsersSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsersSolidAlertedIcon],svg[clarity-users-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.6 6.6 0 0 1 12 16.14" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a11 11 0 0 0-1.09.06a6.6 6.6 0 0 1-2 2.45a10.9 10.9 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M18.11 20.3A9.7 9.7 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7" class="clr-i-solid--alerted clr-i-solid-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M17.87 17.92a4.46 4.46 0 0 0 4-2.54A3.67 3.67 0 0 1 19 9.89l.35-.61A4.4 4.4 0 0 0 17.87 9a4.47 4.47 0 1 0 0 8.93Z" class="clr-i-solid--alerted clr-i-solid-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-6--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsersSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityUsersSolidBadgedIcon],svg[clarity-users-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.6 6.6 0 0 1 12 16.14" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a11 11 0 0 0-1.09.06a6.6 6.6 0 0 1-2 2.45a10.9 10.9 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:path fill="currentColor" d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"></svg:path><svg:circle cx="17.87" cy="13.45" r="4.47" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-4--badged"></svg:circle><svg:path fill="currentColor" d="M18.11 20.3A9.7 9.7 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7" class="clr-i-solid--badged clr-i-solid-path-5--badged"></svg:path><svg:path fill="currentColor" d="M24.43 13.44a7 7 0 0 1 0 .69a4 4 0 0 0 .58.05h.19a4.05 4.05 0 0 0 2.52-1a7.5 7.5 0 0 1-5.14-6.32A4.1 4.1 0 0 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44" class="clr-i-solid--badged clr-i-solid-path-6--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-7--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUsersSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVideoCameraLineIcon],svg[clarity-video-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 10.34a2.11 2.11 0 0 0-1.16-1.9a2 2 0 0 0-2.13.15L26 11.6V8a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h18a2 2 0 0 0 2-2v-3.6l4.64 3a2.07 2.07 0 0 0 2.2.2A2.11 2.11 0 0 0 34 25.66Zm-2.07 15.43c-.06 0-.11 0-.19-.06L24 20.77V28H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18v7.23l7.8-5a.11.11 0 0 1 .13 0a.11.11 0 0 1 .07.11v15.32a.11.11 0 0 1-.07.11" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVideoCameraLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVideoCameraSolidIcon],svg[clarity-video-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.3 9.35L26 12.9V8a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h18a2 2 0 0 0 2-2v-4.92l6.3 3.55a1.1 1.1 0 0 0 1.7-.86V10.2a1.1 1.1 0 0 0-1.7-.85" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVideoCameraSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVideoGalleryLineIcon],svg[clarity-video-gallery-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10M32 30H4V12h28Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M32.12 7a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M12.82 26.79a1.74 1.74 0 0 0 .93.28a1.7 1.7 0 0 0 .69-.15l9.77-4.36a1.69 1.69 0 0 0 0-3.1l-9.77-4.36a1.7 1.7 0 0 0-2.39 1.55v8.72a1.7 1.7 0 0 0 .77 1.42m.63-10.14a.29.29 0 0 1 .14-.25a.3.3 0 0 1 .16 0a.3.3 0 0 1 .12 0l9.77 4.35a.29.29 0 0 1 .18.28a.28.28 0 0 1-.18.27l-9.77 4.36a.28.28 0 0 1-.28 0a.31.31 0 0 1-.14-.25Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVideoGalleryLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVideoGallerySolidIcon],svg[clarity-video-gallery-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10m-7.94 11.83l-9.77 4.36a1 1 0 0 1-1.41-.91v-8.72a1 1 0 0 1 1.41-.91L24.18 20a1 1 0 0 1 0 1.83" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M32.12 7a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVideoGallerySolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityViewCardsLineIcon],svg[clarity-view-cards-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 8v7h11V8Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M32 17H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M21 8v7h11V8Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 21v7h11v-7Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M32 30H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-11-9v7h11v-7Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityViewCardsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityViewColumnsLineIcon],svg[clarity-view-columns-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 5H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 29H5V7h8Zm10 0h-8V7h8Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityViewColumnsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityViewListLineIcon],svg[clarity-view-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h2v2H2z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M7 10h24a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M2 14h2v2H2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M31 14H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M2 20h2v2H2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M31 20H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M2 26h2v2H2z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M31 26H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityViewListLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmBugInverseLineIcon],svg[clarity-vm-bug-inverse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="36" height="36" rx="3" opacity=".66" fill="currentColor"></svg:rect><svg:path d="M3.79 14.83a1.09 1.09 0 0 0-1.47-.56a1.09 1.09 0 0 0-.54 1.49l2.47 5.4c.39.85.8 1.29 1.57 1.29S7 22 7.39 21.16l2.17-4.77a.33.33 0 0 1 .31-.2a.35.35 0 0 1 .35.35v4.61a1.15 1.15 0 0 0 1.14 1.3a1.17 1.17 0 0 0 1.17-1.3v-3.77a1.15 1.15 0 0 1 1.22-1.2a1.13 1.13 0 0 1 1.18 1.2v3.77a1.17 1.17 0 1 0 2.32 0v-3.77a1.15 1.15 0 0 1 1.22-1.2a1.13 1.13 0 0 1 1.18 1.2v3.77a1.16 1.16 0 1 0 2.31 0v-4.29a2.69 2.69 0 0 0-2.78-2.69a3.57 3.57 0 0 0-2.47 1.05a2.75 2.75 0 0 0-2.38-1.05A3.93 3.93 0 0 0 12 15.22a2.82 2.82 0 0 0-2.08-1.05a2.55 2.55 0 0 0-2.52 1.72l-1.58 3.74l-2-4.8" fill="currentColor"></svg:path><svg:path d="M33 14.18a1.14 1.14 0 0 0-1.1.82l-1.19 3.73l-1.21-3.68a1.18 1.18 0 0 0-1.15-.87h-.1a1.2 1.2 0 0 0-1.15.87l-1.19 3.71l-1.18-3.71a1.15 1.15 0 0 0-1.11-.87a1.08 1.08 0 0 0-1.12 1.07a1.68 1.68 0 0 0 .1.54l2 5.7a1.27 1.27 0 0 0 1.27 1a1.24 1.24 0 0 0 1.2-.93l1.2-3.64l1.2 3.64a1.25 1.25 0 0 0 1.26.93A1.27 1.27 0 0 0 32 21.5l2-5.77a1.77 1.77 0 0 0 .08-.48A1.07 1.07 0 0 0 33 14.18z" fill="currentColor"></svg:path>`,
})
export class ClarityVmBugInverseLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmBugLineIcon],svg[clarity-vm-bug-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="36" height="36" rx="3" fill="currentColor" opacity=".15"></svg:rect><svg:path d="M3.79 14.83a1.09 1.09 0 0 0-1.47-.56a1.09 1.09 0 0 0-.54 1.49l2.47 5.4c.39.85.8 1.29 1.57 1.29S7 22 7.39 21.16l2.17-4.77a.33.33 0 0 1 .31-.2a.35.35 0 0 1 .35.35v4.61a1.15 1.15 0 0 0 1.14 1.3a1.17 1.17 0 0 0 1.17-1.3v-3.77a1.15 1.15 0 0 1 1.22-1.2a1.13 1.13 0 0 1 1.18 1.2v3.77a1.17 1.17 0 1 0 2.32 0v-3.77a1.15 1.15 0 0 1 1.22-1.2a1.13 1.13 0 0 1 1.18 1.2v3.77a1.16 1.16 0 1 0 2.31 0v-4.29a2.69 2.69 0 0 0-2.78-2.69a3.57 3.57 0 0 0-2.47 1.05a2.75 2.75 0 0 0-2.38-1.05A3.93 3.93 0 0 0 12 15.22a2.82 2.82 0 0 0-2.08-1.05a2.55 2.55 0 0 0-2.52 1.72l-1.58 3.74l-2-4.8" fill="currentColor"></svg:path><svg:path d="M33 14.18a1.14 1.14 0 0 0-1.1.82l-1.19 3.73l-1.21-3.68a1.18 1.18 0 0 0-1.15-.87h-.1a1.2 1.2 0 0 0-1.15.87l-1.19 3.71l-1.18-3.71a1.15 1.15 0 0 0-1.11-.87a1.08 1.08 0 0 0-1.12 1.07a1.68 1.68 0 0 0 .1.54l2 5.7a1.27 1.27 0 0 0 1.27 1a1.24 1.24 0 0 0 1.2-.93l1.2-3.64l1.2 3.64a1.25 1.25 0 0 0 1.26.93A1.27 1.27 0 0 0 32 21.5l2-5.77a1.77 1.77 0 0 0 .08-.48A1.07 1.07 0 0 0 33 14.18z" fill="currentColor"></svg:path>`,
})
export class ClarityVmBugLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmLineIcon],svg[clarity-vm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h14v3h2V5a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6.85h2Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30 10H17v2h8v6h2v-6h3v14h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmOutlineAlertedIcon],svg[clarity-vm-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h10.87L23 3H11a2 2 0 0 0-2 2v6.85h2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M25.01 15.4H27V18h-1.99z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M30 15.4V26h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V15.4ZM6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M17 10v2h1.57a3.67 3.67 0 0 1 .43-2Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmOutlineBadgedIcon],svg[clarity-vm-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h11.57a7.5 7.5 0 0 1 .55-2H11a2 2 0 0 0-2 2v6.85h2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M30 13.5V26h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28M6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M17 12h8v6h2v-5.13A7.5 7.5 0 0 1 23.66 10H17Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmSolidIcon],svg[clarity-vm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6H27V5a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v8.4h4.59Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M30 10H17.19a2 2 0 0 0-2 2v1.4H20a3.6 3.6 0 0 1 3.6 3.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmSolidAlertedIcon],svg[clarity-vm-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6h2.72L23 3H11a2 2 0 0 0-2 2v8.4h4.59Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M17.19 10a2 2 0 0 0-2 2v1.4H19a3.68 3.68 0 0 1 0-3.4Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M23.21 15.4a3.55 3.55 0 0 1 .39 1.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmSolidBadgedIcon],svg[clarity-vm-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 12a3.6 3.6 0 0 1 3.6-3.6h5.71a7.45 7.45 0 0 1 .23-5.4H11a2 2 0 0 0-2 2v8.4h4.59Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M30 13.5a7.49 7.49 0 0 1-6.34-3.5h-6.47a2 2 0 0 0-2 2v1.4H20a3.6 3.6 0 0 1 3.6 3.6v8H22v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.4h-4.81a3.6 3.6 0 0 1-3.6-3.6v-6h1.6v6a2 2 0 0 0 2 2H30a2 2 0 0 0 2-2V13.22a7.5 7.5 0 0 1-2 .28" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmwAppLineIcon],svg[clarity-vmw-app-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h2v8h-8v-2h-2v4h12V20h-4z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M14 30H6v-8h2v-2H4v12h12v-4h-2z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M8 14H6V6h8v2h2V4H4v12h4z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M20 4v4h2V6h8v8h-2v2h4V4z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M11 11h6v6h-6z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M19 11h6v6h-6z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M11 19h6v6h-6z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M19 19h6v6h-6z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmwAppLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmwAppOutlineAlertedIcon],svg[clarity-vmw-app-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h2v8h-8v-2h-2v4h12V20h-4z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M14 30H6v-8h2v-2H4v12h12v-4h-2z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M8 14H6V6h8v2h2V4H4v12h4z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M11 11h6v6h-6z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M11 19h6v6h-6z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M19 19h6v6h-6z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"></svg:path><svg:path fill="currentColor" d="M25 15.4h-2.77A3.69 3.69 0 0 1 19 13.56v-.1V17h6Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"></svg:path><svg:path fill="currentColor" d="M22.45 4H20v4h.14z" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"></svg:path><svg:path fill="currentColor" d="M28 15.4h4v.6h-4z" class="clr-i-outline--alerted clr-i-outline-path-9--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-10--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmwAppOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVmwAppOutlineBadgedIcon],svg[clarity-vmw-app-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h2v8h-8v-2h-2v4h12V20h-4z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M14 30H6v-8h2v-2H4v12h12v-4h-2z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M8 14H6V6h8v2h2V4H4v12h4z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M11 11h6v6h-6z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M11 19h6v6h-6z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M19 19h6v6h-6z" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="M22 6h.5a7.5 7.5 0 0 1 .28-2H20v4h2Z" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:path fill="currentColor" d="M30 13.5v.5h-2v2h4v-2.78a7.5 7.5 0 0 1-2 .28" class="clr-i-outline--badged clr-i-outline-path-8--badged"></svg:path><svg:path fill="currentColor" d="M25 11.58a8 8 0 0 1-.58-.58H19v6h6Z" class="clr-i-outline--badged clr-i-outline-path-9--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-10--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVmwAppOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeDownLineIcon],svg[clarity-volume-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.41 25.11a1 1 0 0 1-.54-1.85a6.21 6.21 0 0 0-.19-10.65a1 1 0 1 1 1-1.73A8.21 8.21 0 0 1 23.94 25a1 1 0 0 1-.53.11" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 32a2 2 0 0 1-1.42-.59L9.14 24H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.22l7.33-7.41A2 2 0 0 1 20 6v24a2 2 0 0 1-1.24 1.85A2 2 0 0 1 18 32M4 14v8h5.56a1 1 0 0 1 .71.28L18 30V6l-7.65 7.68a1 1 0 0 1-.71.3Zm14-8" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeDownLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeDownSolidIcon],svg[clarity-volume-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.41 25.11a1 1 0 0 1-.54-1.85a6.21 6.21 0 0 0-.19-10.65a1 1 0 1 1 1-1.73A8.21 8.21 0 0 1 23.94 25a1 1 0 0 1-.53.11" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M18.34 3.87L9 12H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.83l9.51 8.3a1 1 0 0 0 1.66-.75V4.62a1 1 0 0 0-1.66-.75" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeDownSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeLineIcon],svg[clarity-volume-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.88 32H12a4 4 0 0 1-4-4V11.46L2.31 5.77a1 1 0 0 1-.22-1.09A1 1 0 0 1 3 4.06h25.86a1 1 0 0 1 1 1V28a4 4 0 0 1-3.98 4M5.43 6l4.28 4.34a.75.75 0 0 1 .21.63v17A2.13 2.13 0 0 0 12 30h13.88A2.1 2.1 0 0 0 28 28V6Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M33 16a1 1 0 0 1-1-1V6h-3.14a.92.92 0 0 1-1-.9a1 1 0 0 1 1-1H33a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M24 11h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M24 15h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M24 19h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M24 27h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M24 23h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeMuteLineIcon],svg[clarity-volume-mute-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.61 6.41L9.19 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.14l7.41 7.47A2 2 0 0 0 18 32a2 2 0 0 0 .76-.15A2 2 0 0 0 20 30v-7.23l5.89 5.89c-.25.15-.49.29-.75.42a1 1 0 0 0 .9 1.79a14 14 0 0 0 1.31-.75l2.28 2.28L31 31L5 5ZM18 30l-7.73-7.77a1 1 0 0 0-.71-.23H4v-8h5.64a1 1 0 0 0 .71-.3l.26-.26L18 20.81Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M24.89 6.69A12.42 12.42 0 0 1 29 26.1l1.42 1.42a14.42 14.42 0 0 0-4.66-22.64a1 1 0 1 0-.87 1.8Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M22.69 12.62A6.27 6.27 0 0 1 25.8 18a6.17 6.17 0 0 1-1.24 3.71L26 23.13A8.15 8.15 0 0 0 27.8 18a8.28 8.28 0 0 0-4.1-7.11a1 1 0 1 0-1 1.73Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M18 6v9.15l2 2V6a2 2 0 0 0-3.42-1.41L12 9.17l1.41 1.41Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeMuteLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeMuteSolidIcon],svg[clarity-volume-mute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.87 6.69a12.42 12.42 0 0 1 3.88 19.61l1.42 1.42a14.43 14.43 0 0 0-4.43-22.84a1 1 0 0 0-.87 1.8Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="m27.3 27.67l-3.84-3.84l-.57-.57L4.63 5L3.21 6.41L8.8 12H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.83l9.51 8.3a1 1 0 0 0 1.66-.75V23.2l5.59 5.59c-.17.1-.34.2-.51.29a1 1 0 0 0 .9 1.79c.37-.19.72-.4 1.08-.62l2.14 2.14L30.61 31l-3.25-3.25Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M22.69 12.62A6.27 6.27 0 0 1 25.8 18a6.17 6.17 0 0 1-1.42 3.92l1.42 1.42a8.16 8.16 0 0 0 2-5.34a8.28 8.28 0 0 0-4.1-7.11a1 1 0 1 0-1 1.73Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M20 4.62a1 1 0 0 0-1.66-.75l-6.42 5.6L20 17.54Z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeMuteSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeUpLineIcon],svg[clarity-volume-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.41 25.25a1 1 0 0 1-.54-1.85a6.21 6.21 0 0 0-.19-10.65a1 1 0 1 1 1-1.73a8.21 8.21 0 0 1 .24 14.06a1 1 0 0 1-.51.17" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M25.62 31.18a1 1 0 0 1-.45-1.89A12.44 12.44 0 0 0 25 6.89a1 1 0 1 1 .87-1.8a14.44 14.44 0 0 1 .24 26a1 1 0 0 1-.49.09" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18 32.06a2 2 0 0 1-1.42-.59L9.14 24H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.22l7.33-7.39A2 2 0 0 1 20 6v24a2 2 0 0 1-1.24 1.85a2 2 0 0 1-.76.21M4 14v8h5.56a1 1 0 0 1 .71.3L18 30.06V6l-7.65 7.7a1 1 0 0 1-.71.3Zm14-8" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeUpLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityVolumeUpSolidIcon],svg[clarity-volume-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.41 25.25a1 1 0 0 1-.54-1.85a6.21 6.21 0 0 0-.19-10.65a1 1 0 1 1 1-1.73a8.21 8.21 0 0 1 .24 14.06a1 1 0 0 1-.51.17" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M25.62 31.18a1 1 0 0 1-.45-1.89A12.44 12.44 0 0 0 25 6.89a1 1 0 1 1 .87-1.8a14.44 14.44 0 0 1 .24 26a1 1 0 0 1-.49.09" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="m18.33 4l-9.26 8h-6a1 1 0 0 0-1 1v9.92a1 1 0 0 0 1 1h5.81l9.46 8.24a1 1 0 0 0 1.66-.73V4.72A1 1 0 0 0 18.33 4" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVolumeUpSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWalletLineIcon],svg[clarity-wallet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3a3 3 0 0 0 0 .36v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.1 3.1 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:circle cx="23.01" cy="20" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWalletLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWalletSolidIcon],svg[clarity-wallet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.94 14H31V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-1a1 1 0 0 1 1-1h23.6a1 1 0 1 0 0-2H6a2.94 2.94 0 0 0-3 2.88v21A4.13 4.13 0 0 0 7.15 32H30a1 1 0 0 0 1-1v-5h1.94a.93.93 0 0 0 1-.91v-10a1.08 1.08 0 0 0-1-1.09M32 24h-8.58a3.87 3.87 0 0 1-3.73-4a3.87 3.87 0 0 1 3.73-4H32Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:circle cx="24.04" cy="19.92" r="1.5" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWalletSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWandLineIcon],svg[clarity-wand-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m34.1 4l-2.39-2.4a1.83 1.83 0 0 0-1.31-.54a2.05 2.05 0 0 0-1.45.62L1.76 29.23A2 2 0 0 0 1.68 32l2.4 2.43a1.83 1.83 0 0 0 1.31.57a2.05 2.05 0 0 0 1.45-.62L34 6.79A2 2 0 0 0 34.1 4M5.42 32.93l-2.26-2.28L24.11 9.43l2.25 2.28ZM32.61 5.39l-5.12 5.18l-2.25-2.28l5.13-5.2l2.25 2.28Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m32.53 20.47l2.09-2.09a.8.8 0 0 0-1.13-1.13l-2.09 2.09l-2.09-2.09a.8.8 0 0 0-1.13 1.13l2.09 2.09l-2.09 2.09a.8.8 0 0 0 1.13 1.13l2.09-2.09l2.09 2.09a.8.8 0 0 0 1.13-1.13Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M14.78 6.51a.8.8 0 0 0 1.13 0L17.4 5l1.49 1.49A.8.8 0 0 0 20 5.38l-1.46-1.49L20 2.4a.8.8 0 0 0-1.13-1.13L17.4 2.76l-1.49-1.49a.8.8 0 1 0-1.13 1.13l1.49 1.49l-1.49 1.49a.8.8 0 0 0 0 1.13" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M8.33 15.26a.8.8 0 0 0 1.13 0l1.16-1.16l1.16 1.16a.8.8 0 1 0 1.13-1.13L11.76 13l1.16-1.16a.8.8 0 1 0-1.13-1.13l-1.16 1.16l-1.17-1.19a.8.8 0 1 0-1.13 1.13L9.49 13l-1.16 1.13a.8.8 0 0 0 0 1.13" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWandLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWarningLineIcon],svg[clarity-warning-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21.32a1.3 1.3 0 0 0 1.3-1.3V14a1.3 1.3 0 1 0-2.6 0v6a1.3 1.3 0 0 0 1.3 1.32" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:circle cx="17.95" cy="24.27" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"></svg:circle><svg:path fill="currentColor" d="M30.33 25.54L20.59 7.6a3 3 0 0 0-5.27 0L5.57 25.54A3 3 0 0 0 8.21 30h19.48a3 3 0 0 0 2.64-4.43Zm-1.78 1.94a1 1 0 0 1-.86.49H8.21a1 1 0 0 1-.88-1.48l9.74-17.94a1 1 0 0 1 1.76 0l9.74 17.94a1 1 0 0 1-.02.99" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWarningLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWarningSolidIcon],svg[clarity-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.33 25.54L20.59 7.6a3 3 0 0 0-5.27 0L5.57 25.54A3 3 0 0 0 8.21 30h19.48a3 3 0 0 0 2.64-4.43Zm-13.87-12.8a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 26.25a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 26.25" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWarningSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWarningStandardLineIcon],svg[clarity-warning-standard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="26.06" r="1.33" fill="currentColor" class="clr-i-outline clr-i-outline-path-1"></svg:circle><svg:path fill="currentColor" d="M18 22.61a1 1 0 0 1-1-1v-12a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15.062 1.681a3.221 3.221 0 0 1 5.647.002l13.89 25.56A3.22 3.22 0 0 1 31.77 32H4.022a3.22 3.22 0 0 1-2.9-4.759zM2.88 28.198A1.22 1.22 0 0 0 4 30h27.77a1.22 1.22 0 0 0 1.071-1.803L18.954 2.642a1.22 1.22 0 0 0-2.137-.001z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWarningStandardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWarningStandardSolidIcon],svg[clarity-warning-standard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.6 29.21L20.71 3.65a3.22 3.22 0 0 0-5.66 0L1.17 29.21A3.22 3.22 0 0 0 4 34h27.77a3.22 3.22 0 0 0 2.83-4.75ZM16.6 10a1.4 1.4 0 0 1 2.8 0v12a1.4 1.4 0 0 1-2.8 0ZM18 29.85a1.8 1.8 0 1 1 1.8-1.8a1.8 1.8 0 0 1-1.8 1.8" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWarningStandardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWifiLineIcon],svg[clarity-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.55 8.2a28.1 28.1 0 0 0-31.11.08a1 1 0 1 0 1.12 1.66a26.11 26.11 0 0 1 28.89-.07a1 1 0 0 0 1.1-1.67" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18.05 10.72A20.74 20.74 0 0 0 6.23 14.4A1 1 0 0 0 7.36 16a18.85 18.85 0 0 1 21.28 0a1 1 0 0 0 1.12-1.65a20.75 20.75 0 0 0-11.71-3.63" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M18.05 17.9a13.5 13.5 0 0 0-8 2.64a1 1 0 0 0 1.18 1.61a11.56 11.56 0 0 1 13.62-.08A1 1 0 1 0 26 20.46a13.52 13.52 0 0 0-7.95-2.56" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M18 24.42a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWifiLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWifiSolidIcon],svg[clarity-wifi-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="29.54" r="3" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"></svg:circle><svg:path fill="currentColor" d="M32.76 9.38a27.87 27.87 0 0 0-29.57 0a1.51 1.51 0 0 0-.48 2.11l.11.17a1.49 1.49 0 0 0 2 .46a24.68 24.68 0 0 1 26.26 0a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.43-2.11" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M28.82 15.44a20.59 20.59 0 0 0-21.7 0a1.51 1.51 0 0 0-.46 2.1l.11.17a1.49 1.49 0 0 0 2 .46a17.4 17.4 0 0 1 18.36 0a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.42-2.1" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M24.88 21.49a13.41 13.41 0 0 0-13.82 0a1.5 1.5 0 0 0-.46 2.09l.1.16a1.52 1.52 0 0 0 2.06.44a10.27 10.27 0 0 1 10.42 0a1.52 1.52 0 0 0 2.06-.45l.1-.16a1.49 1.49 0 0 0-.46-2.08" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWifiSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWindowCloseLineIcon],svg[clarity-window-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.41 18l7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3l-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29l7.29 7.29a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWindowCloseLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWindowMaxLineIcon],svg[clarity-window-max-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.89 9h-20a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m-20 16V11h20v14Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWindowMaxLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWindowMinLineIcon],svg[clarity-window-min-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 27H9a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWindowMinLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWindowRestoreLineIcon],svg[clarity-window-restore-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8H14a2 2 0 0 0-2 2v2h2v-2h14v10h-2v2h2a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M22 14H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M8 26V16h14v10Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWindowRestoreLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWonLineIcon],svg[clarity-won-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 18h-4.25l.5-2H33a1 1 0 0 0 0-2h-3.26l2.17-8.76A1 1 0 0 0 30 4.76L27.68 14h-6.37L19 4.76a1 1 0 0 0-1.94 0L14.79 14H8.42L6.13 4.76a1 1 0 0 0-1.94.48L6.36 14H3a1 1 0 0 0 0 2h3.85l.5 2H3a1 1 0 0 0 0 2h4.84l2.79 11.24a1 1 0 0 0 1.94 0L15.36 20h5.38l2.79 11.24a1 1 0 0 0 1.94 0L28.25 20H33a1 1 0 0 0 0-2m-5.82-2l-.5 2H22.3l-.5-2ZM18 9.16L19.25 14h-2.4ZM8.91 16h5.38l-.5 2H9.41Zm2.69 10.84L9.91 20h3.39ZM15.85 18l.5-2h3.39l.5 2Zm8.64 8.84L22.8 20h3.39Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWonLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWonSolidIcon],svg[clarity-won-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.74 16l-.52 2h1.63l-.53-2z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M11.94 18h2.69l.53-2h-3.75z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="m13.29 23.1l.81-3.1h-1.63z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M21.44 18h2.69l.53-2h-3.75z" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="currentColor" d="m22.78 23.1l.82-3.1h-1.63z" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m11 18h-2.81L24 28.32a1.25 1.25 0 0 1-2.42 0L19.38 20h-2.69l-2.19 8.32a1.25 1.25 0 0 1-2.42 0L9.88 20H7a1 1 0 0 1 0-2h2.35l-.53-2H7a1 1 0 0 1 0-2h1.3l-1-3.68a1.25 1.25 0 0 1 2.42-.64L10.88 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42 0L20.38 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42.64l-1 3.68H29a1 1 0 0 1 0 2h-1.76l-.53 2H29a1 1 0 0 1 0 2" class="clr-i-solid clr-i-solid-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWonSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWorldLineIcon],svg[clarity-world-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.54 18a19.4 19.4 0 0 0-.43-4h3.6a12 12 0 0 0-.67-1.6h-3.35a19.7 19.7 0 0 0-2.89-5.87a12.3 12.3 0 0 0-2.55-.76a17.8 17.8 0 0 1 3.89 6.59h-5.39V5.6h-1.5v6.77h-5.39a17.8 17.8 0 0 1 3.9-6.6a12.3 12.3 0 0 0-2.54.75a19.7 19.7 0 0 0-2.91 5.85H6.94A12 12 0 0 0 6.26 14h3.63a19.4 19.4 0 0 0-.43 4a19.7 19.7 0 0 0 .5 4.37H6.42A12 12 0 0 0 7.16 24h3.23a19.3 19.3 0 0 0 2.69 5.36a12.3 12.3 0 0 0 2.61.79A17.9 17.9 0 0 1 12 24h5.26v6.34h1.5V24H24a17.9 17.9 0 0 1-3.7 6.15a12.3 12.3 0 0 0 2.62-.81A19.3 19.3 0 0 0 25.61 24h3.2a12 12 0 0 0 .74-1.6H26a19.7 19.7 0 0 0 .54-4.4m-9.29 4.37h-5.74a17.7 17.7 0 0 1-.09-8.4h5.83Zm7.24 0h-5.74V14h5.83a18.2 18.2 0 0 1 .42 4a18 18 0 0 1-.51 4.37" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWorldLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWorldOutlineBadgedIcon],svg[clarity-world-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.12 12.81a7.4 7.4 0 0 1-1.91.58a14.05 14.05 0 1 1-8.6-8.6a7.4 7.4 0 0 1 .58-1.91a16.06 16.06 0 1 0 9.93 9.93" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M20.25 5.77a17.8 17.8 0 0 1 3.89 6.59h-5.39V5.6h-1.5v6.77h-5.39a17.8 17.8 0 0 1 3.9-6.6a12.3 12.3 0 0 0-2.54.75a19.7 19.7 0 0 0-2.91 5.85H6.94A12 12 0 0 0 6.26 14h3.63a19.4 19.4 0 0 0-.43 4a19.7 19.7 0 0 0 .5 4.37H6.42A12 12 0 0 0 7.16 24h3.23a19.3 19.3 0 0 0 2.69 5.36a12.3 12.3 0 0 0 2.61.79A17.9 17.9 0 0 1 12 24h5.26v6.34h1.5V24H24a17.9 17.9 0 0 1-3.7 6.15a12.3 12.3 0 0 0 2.62-.81A19.3 19.3 0 0 0 25.61 24h3.2a12 12 0 0 0 .74-1.6H26a19.7 19.7 0 0 0 .5-4.37a19.4 19.4 0 0 0-.43-4h3.6c-.06-.17-.12-.33-.19-.49a7.45 7.45 0 0 1-3.47-1.11h-.36c0-.11-.08-.21-.11-.32a7.48 7.48 0 0 1-3.06-5.62a12.4 12.4 0 0 0-2.23-.72m-3 16.59h-5.74a17.7 17.7 0 0 1-.09-8.4h5.83ZM25 18a18 18 0 0 1-.55 4.37h-5.7V14h5.83a18.2 18.2 0 0 1 .42 4" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWorldOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWorldSolidIcon],svg[clarity-world-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.05 18a20.5 20.5 0 0 0 .62 4.93h6.48v-9.48h-6.57a20.6 20.6 0 0 0-.53 4.55" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M18.85 13.45v9.48h6.48A20.5 20.5 0 0 0 26 18a20.6 20.6 0 0 0-.52-4.55Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m12.22 22.71H26.6a21.8 21.8 0 0 1-3 6a14 14 0 0 1-3 .92a20.2 20.2 0 0 0 4.18-6.94h-5.92v7.15h-1.69v-7.13h-5.95a20.2 20.2 0 0 0 4.18 6.95a14 14 0 0 1-2.94-.9a21.8 21.8 0 0 1-3-6.05H5.78a14 14 0 0 1-.83-1.81h4a22.2 22.2 0 0 1-.58-4.9a22 22 0 0 1 .48-4.55H4.76a14 14 0 0 1 .76-1.81h3.81A22.3 22.3 0 0 1 12.61 5a14 14 0 0 1 2.87-.84a20.1 20.1 0 0 0-4.4 7.45h6.09V4h1.69v7.64h6.09a20.1 20.1 0 0 0-4.39-7.44a14 14 0 0 1 2.87.8a22.3 22.3 0 0 1 3.27 6.59h3.77a14 14 0 0 1 .76 1.81h-4.06a22 22 0 0 1 .49 4.6a22.2 22.2 0 0 1-.57 4.93h4a14 14 0 0 1-.87 1.78" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWorldSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWorldSolidBadgedIcon],svg[clarity-world-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.05 18a20.5 20.5 0 0 0 .62 4.93h6.48v-9.48h-6.57a20.6 20.6 0 0 0-.53 4.55" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M18.85 22.94h6.48A20.5 20.5 0 0 0 26 18a20.6 20.6 0 0 0-.52-4.55h-6.63Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:path fill="currentColor" d="M33.12 12.81a7.4 7.4 0 0 1-1.9.58H31a6.8 6.8 0 0 1-2.07 0h-1.8a22 22 0 0 1 .53 4.61a22.2 22.2 0 0 1-.57 4.93h4a14 14 0 0 1-.83 1.81H26.6a21.8 21.8 0 0 1-3 6a14 14 0 0 1-3 .92a20.2 20.2 0 0 0 4.18-6.94h-5.92v7.15h-1.69v-7.16h-5.95a20.2 20.2 0 0 0 4.18 6.95a14 14 0 0 1-2.94-.9a21.8 21.8 0 0 1-3-6.05H5.78a14 14 0 0 1-.83-1.81h4a22.2 22.2 0 0 1-.58-4.9a22 22 0 0 1 .48-4.55H4.76a14 14 0 0 1 .76-1.81h3.81A22.3 22.3 0 0 1 12.61 5a14 14 0 0 1 2.87-.84a20.1 20.1 0 0 0-4.4 7.45h6.09V4h1.69v7.64h6.09v-.13a7.47 7.47 0 0 1-2.36-4.76a20.4 20.4 0 0 0-2-2.55a14 14 0 0 1 2.06.56a7.4 7.4 0 0 1 .57-1.86a16.06 16.06 0 1 0 9.93 9.93Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWorldSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWrenchLineIcon],svg[clarity-wrench-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.18 26.11L20.35 13.28A9.28 9.28 0 0 0 7.54 2.79l-1.34.59l5.38 5.38l-2.82 2.83l-5.38-5.38l-.59 1.33a9.27 9.27 0 0 0 10.49 12.81l12.83 12.83a2 2 0 0 0 2.83 0l4.24-4.24a2 2 0 0 0 0-2.83m-5.66 5.66L13.88 18.12l-.57.16a7.27 7.27 0 0 1-9.31-7a7.2 7.2 0 0 1 .15-1.48l4.61 4.61l5.66-5.66l-4.61-4.6a7.27 7.27 0 0 1 8.47 9.16l-.16.57l13.65 13.65Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:circle cx="27.13" cy="27.09" r="1.3" fill="currentColor" class="clr-i-outline clr-i-outline-path-2" transform="rotate(-45 27.132 27.092)"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWrenchLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityWrenchSolidIcon],svg[clarity-wrench-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.73 27.72L19.67 13.66a8.79 8.79 0 0 0-12-10.5L13 8.53L8.53 13L3.16 7.67a8.79 8.79 0 0 0 10.5 12l14.06 14.06a1.07 1.07 0 0 0 1.5 0l4.51-4.51a1.07 1.07 0 0 0 0-1.5M29 29a1.38 1.38 0 1 1 0-2a1.38 1.38 0 0 1 0 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWrenchSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityYenLineIcon],svg[clarity-yen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.34 4.55a1 1 0 1 0-1.67-1.1L18 18.23L8.33 3.45a1 1 0 0 0-1.67 1.1L17 20.35v1.85h-5a.8.8 0 0 0 0 1.6h5v2.4h-5a.8.8 0 0 0 0 1.6h5V32a1 1 0 0 0 2 0v-4.2h5a.8.8 0 0 0 0-1.6h-5v-2.4h5a.8.8 0 0 0 0-1.6h-5v-1.85Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityYenLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityYenSolidIcon],svg[clarity-yen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m8.07 7.91L19.74 20H22a1 1 0 0 1 0 2h-2.75v2H22a1 1 0 0 1 0 2h-2.75v2.75a1.25 1.25 0 0 1-2.5 0V26H14a1 1 0 1 1 0-2h2.75v-2H14a1 1 0 1 1 0-2h2.26L9.93 9.91a1.25 1.25 0 1 1 2.12-1.33l5.95 9.5l5.95-9.49a1.25 1.25 0 1 1 2.12 1.33Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityYenSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityZoomInLineIcon],svg[clarity-zoom-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4m0 21.91A10 10 0 1 1 26 16a10 10 0 0 1-10 9.91" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m31.71 29.69l-5.17-5.17A14 14 0 0 1 25.15 26l5.15 5.15a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityZoomInLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[clarityZoomOutLineIcon],svg[clarity-zoom-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4m0 21.91A10 10 0 1 1 26 16a10 10 0 0 1-10 9.91" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m31.71 29.69l-5.17-5.17A14 14 0 0 1 25.15 26l5.15 5.15a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M20 15h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityZoomOutLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
