import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSnapdealIcon],svg[arcticons-snapdeal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.612 6.664H33.29l9.164 15.552l-10.577-.028l-3.84-6.517H20.92z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.953 7.773l9.76 17.106H42.5L30.567 41.336H13.856L5.5 27.155z"></svg:path>`,
})
export class ArcticonsSnapdealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
