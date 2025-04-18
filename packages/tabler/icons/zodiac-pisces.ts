import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacPiscesIcon],svg[tabler-zodiac-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3a21 21 0 0 1 0 18M19 3a21 21 0 0 0 0 18M5 12h14"></svg:path>`,
})
export class TablerZodiacPiscesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
