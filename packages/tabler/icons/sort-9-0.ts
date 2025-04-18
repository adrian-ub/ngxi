import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSort90Icon],svg[tabler-sort-9-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3m8-2v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0m-5 2h2"></svg:path>`,
})
export class TablerSort90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
