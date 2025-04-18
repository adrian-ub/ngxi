import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSort09Icon],svg[tabler-sort-0-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 12h2m-9-2v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0m12 5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"></svg:path>`,
})
export class TablerSort09Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
