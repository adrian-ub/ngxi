import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangLgIcon],svg[circle-flags-lang-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangLg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangLg0)"><svg:path fill="#ffda44" d="M0 85v342l256 31l256-31V85L256 53Z"></svg:path><svg:path fill="#333" d="M0 0h512v85H0z"></svg:path><svg:path fill="#d80027" d="M0 171h512v85l-256 31L0 256Z"></svg:path><svg:path fill="#333" d="M0 256h512v85H0z"></svg:path><svg:path fill="#d80027" d="M0 427h512v85H0z"></svg:path><svg:circle cx="256" cy="256" r="85.3" fill="#eee"></svg:circle><svg:path fill="#333" d="m287 260l-31-13l8-26a17 17 0 0 0-5-16l8-8a28 28 0 0 0-19-8a28 28 0 0 0-20 8l8 8a17 17 0 0 0-5 12l1 5l-12 12h21s-9 13-14 24c-4 11 0 25 12 30l6 2l11 10v12l-11 11h22v-23l10-10h21a22 22 0 0 0-11-30"></svg:path></svg:g>`,
})
export class CircleFlagsLangLgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
