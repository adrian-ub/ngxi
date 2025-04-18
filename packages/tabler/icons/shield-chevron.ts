import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShieldChevronIcon],svg[tabler-shield-chevron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3"></svg:path><svg:path d="m4 14l8-3l8 3"></svg:path></svg:g>`,
})
export class TablerShieldChevronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
