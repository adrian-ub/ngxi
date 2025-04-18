import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShape3Icon],svg[tabler-shape-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0-14a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h10M5 7v10M19 7v10"></svg:path>`,
})
export class TablerShape3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
