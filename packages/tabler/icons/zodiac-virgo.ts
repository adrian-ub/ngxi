import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacVirgoIcon],svg[tabler-zodiac-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a2 2 0 0 1 2 2v9m0-9a2 2 0 0 1 4 0v9m0-9a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5"></svg:path><svg:path d="M12 21a7 5 0 0 0 7-5v-2a3 3 0 0 0-6 0"></svg:path></svg:g>`,
})
export class TablerZodiacVirgoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
