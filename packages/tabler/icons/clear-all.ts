import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClearAllIcon],svg[tabler-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h12M6 12h12M4 18h12"></svg:path>`,
})
export class TablerClearAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
