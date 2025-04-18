import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacScorpioIcon],svg[mdi-zodiac-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.71 15.29l-1.42 1.42l1.3 1.29H16a2 2 0 0 1-2-2V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78a2.997 2.997 0 0 0-4 0C4.45 3.28 3.74 3 3 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10a4 4 0 0 0 4 4h1.59l-1.3 1.29l1.42 1.42l3.7-3.71z"></svg:path>`,
})
export class MdiZodiacScorpioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
