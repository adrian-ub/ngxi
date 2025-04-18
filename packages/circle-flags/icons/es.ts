import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEsIcon],svg[circle-flags-es-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEs0)"><svg:path fill="#ffda44" d="m0 128l256-32l256 32v256l-256 32L0 384Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v128H0zm0 384h512v128H0z"></svg:path><svg:g fill="#eee"><svg:path d="M144 304h-16v-80h16zm128 0h16v-80h-16z"></svg:path><svg:ellipse cx="208" cy="296" rx="48" ry="32"></svg:ellipse></svg:g><svg:g fill="#d80027"><svg:rect width="16" height="24" x="128" y="192" rx="8"></svg:rect><svg:rect width="16" height="24" x="272" y="192" rx="8"></svg:rect><svg:path d="M208 272v24a24 24 0 0 0 24 24a24 24 0 0 0 24-24v-24h-24z"></svg:path></svg:g><svg:rect width="32" height="16" x="120" y="208" fill="#ff9811" ry="8"></svg:rect><svg:rect width="32" height="16" x="264" y="208" fill="#ff9811" ry="8"></svg:rect><svg:rect width="32" height="16" x="120" y="304" fill="#ff9811" rx="8"></svg:rect><svg:rect width="32" height="16" x="264" y="304" fill="#ff9811" rx="8"></svg:rect><svg:path fill="#ff9811" d="M160 272v24c0 8 4 14 9 19l5-6l5 10a21 21 0 0 0 10 0l5-10l5 6c6-5 9-11 9-19v-24h-9l-5 8l-5-8h-10l-5 8l-5-8z"></svg:path><svg:path fill="#d80027" d="M122 248a4 4 0 0 0-4 4a4 4 0 0 0 4 4h172a4 4 0 0 0 4-4a4 4 0 0 0-4-4zm0 24a4 4 0 0 0-4 4a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4a4 4 0 0 0-4-4zm144 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#eee" d="M196 168c-7 0-13 5-15 11l-5-1c-9 0-16 7-16 16s7 16 16 16c7 0 13-4 15-11a16 16 0 0 0 17-4a16 16 0 0 0 17 4a16 16 0 1 0 10-20a16 16 0 0 0-27-5q-4.5-6-12-6m0 8c5 0 8 4 8 8c0 5-3 8-8 8c-4 0-8-3-8-8c0-4 4-8 8-8m24 0c5 0 8 4 8 8c0 5-3 8-8 8c-4 0-8-3-8-8c0-4 4-8 8-8m-44 10l4 1l4 8c0 4-4 7-8 7s-8-3-8-8c0-4 4-8 8-8m64 0c5 0 8 4 8 8c0 5-3 8-8 8c-4 0-8-3-8-7l4-8z"></svg:path><svg:path fill="none" d="M220 284v12c0 7 5 12 12 12s12-5 12-12v-12z"></svg:path><svg:path fill="#ff9811" d="M200 160h16v32h-16z"></svg:path><svg:path fill="#eee" d="M208 224h48v48h-48z"></svg:path><svg:path fill="#d80027" d="m248 208l-8 8h-64l-8-8c0-13 18-24 40-24s40 11 40 24m-88 16h48v48h-48z"></svg:path><svg:rect width="20" height="32" x="222" y="232" fill="#d80027" rx="10" ry="10"></svg:rect><svg:path fill="#ff9811" d="M168 232v8h8v16h-8v8h32v-8h-8v-16h8v-8zm8-16h64v8h-64z"></svg:path><svg:g fill="#ffda44"><svg:circle cx="186" cy="202" r="6"></svg:circle><svg:circle cx="208" cy="202" r="6"></svg:circle><svg:circle cx="230" cy="202" r="6"></svg:circle></svg:g><svg:path fill="#d80027" d="M169 272v43a24 24 0 0 0 10 4v-47zm20 0v47a24 24 0 0 0 10-4v-43z"></svg:path><svg:g fill="#338af3"><svg:circle cx="208" cy="272" r="16"></svg:circle><svg:rect width="32" height="16" x="264" y="320" ry="8"></svg:rect><svg:rect width="32" height="16" x="120" y="320" ry="8"></svg:rect></svg:g></svg:g>`,
})
export class CircleFlagsEsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
