import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGoogleCircleIcon],svg[jam-google-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.188 9.034a2.97 2.97 0 0 0 .028 2.01a2.973 2.973 0 0 0 4.285 1.522a2.98 2.98 0 0 0 1.283-1.522H10.11V9.066h4.803a5 5 0 0 1-1.783 4.833A5 5 0 1 1 10 5a4.98 4.98 0 0 1 3.191 1.152l-1.62 1.326a2.974 2.974 0 0 0-4.384 1.557z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamGoogleCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
