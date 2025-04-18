import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAirbrakeIcon],svg[simple-icons-airbrake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.815.576L24 23.424h-6.072L10.679.576Zm-6.456 0l1.872 5.929l-2.447 7.751c1.038.183 2.09.28 3.144.288c.576 0 1.175-.048 1.824-.096l1.151 3.912a29 29 0 0 1-2.951.169a26.6 26.6 0 0 1-4.32-.361L5.88 23.424H0L8.181.576Z"></svg:path>`,
})
export class SimpleIconsAirbrakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
