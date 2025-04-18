import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShieldUpIcon],svg[tabler-shield-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.442 20.876A13 13 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 .119 6.336M19 22v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerShieldUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
