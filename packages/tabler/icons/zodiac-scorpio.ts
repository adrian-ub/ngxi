import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacScorpioIcon],svg[tabler-zodiac-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a2 2 0 0 1 2 2v9m0-9a2 2 0 0 1 4 0v9m0-9a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3-3m0 6l3-3"></svg:path>`,
})
export class TablerZodiacScorpioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
