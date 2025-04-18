import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAsanaIcon],svg[tabler-brand-asana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path>`,
})
export class TablerBrandAsanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
