import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSortAscendingLettersIcon],svg[tabler-sort-ascending-letters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10V5c0-1.38.62-2 2-2s2 .62 2 2v5m0-3h-4m4 14h-4l4-7h-4M4 15l3 3l3-3M7 6v12"></svg:path>`,
})
export class TablerSortAscendingLettersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
