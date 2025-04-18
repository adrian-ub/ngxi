import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHazeMoonIcon],svg[tabler-haze-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16h18M3 20h18M8.296 16c-2.268-1.4-3.598-4.087-3.237-6.916c.443-3.48 3.308-6.083 6.698-6.084v.006h.296c-1.991 1.916-2.377 5.03-.918 7.405s4.346 3.33 6.865 2.275A6.9 6.9 0 0 1 15.223 16"></svg:path>`,
})
export class TablerHazeMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
