import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riThunderstormsLineIcon],svg[ri-thunderstorms-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505z"></svg:path>`,
})
export class RiThunderstormsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
