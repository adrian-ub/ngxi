import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSortAscendingShapesIcon],svg[tabler-sort-ascending-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 15l3 3l3-3M7 6v12m7-13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3 9l-3.5 6h7z"></svg:path>`,
})
export class TablerSortAscendingShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
