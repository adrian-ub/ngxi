import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFiverrIcon],svg[jam-fiverr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.63 5.63 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75z"></svg:path><svg:circle cx="14.375" cy="1.875" r="1.875"></svg:circle></svg:g>`,
})
export class JamFiverrIcon {
  readonly viewBox = input("-2.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
