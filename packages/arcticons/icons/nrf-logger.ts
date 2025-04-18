import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNrfLoggerIcon],svg[arcticons-nrf-logger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20.072" cy="20.471" r="14.572" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.601 14.914h18.68M5.5 21.338h19.781M7.455 27.763h17.826m6.781.989l9.531 9.184c2.46 2.37-.6 5.715-3.07 3.363l-9.665-9.202"></svg:path>`,
})
export class ArcticonsNrfLoggerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
