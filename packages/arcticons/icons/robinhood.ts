import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRobinhoodIcon],svg[arcticons-robinhood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.848 43.5c1.697-9.276 15.676-27.632 19.498-31.128l-11.7 2.531l-7.046 9.236s.842 4.986 2.546 10.935"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.647 14.903l8.346-8.962s7.414-3.242 10.741 0c2.668 2.6.753 7.867.753 7.867c-4.173 4.858-9.236 11.7-12.041 18.54l-12.709 3.518m16.609-23.494l-1.307 14.672m-7.656 9.546l-5.766 1.644"></svg:path>`,
})
export class ArcticonsRobinhoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
