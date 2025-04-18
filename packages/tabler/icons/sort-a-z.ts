import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSortAZIcon],svg[tabler-sort-a-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8h4l-4 8h4M4 16v-6a2 2 0 1 1 4 0v6m-4-3h4m3-1h2"></svg:path>`,
})
export class TablerSortAZIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
