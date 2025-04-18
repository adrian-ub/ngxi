import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSortAscendingSmallBigIcon],svg[tabler-sort-ascending-small-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 15l3 3l3-3M7 6v12m7-12.333c0-.369.298-.667.667-.667h2.666c.369 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667h-2.666A.667.667 0 0 1 14 8.333zm0 7.5c0-.645.522-1.167 1.167-1.167h4.666c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167h-4.666A1.167 1.167 0 0 1 14 17.833z"></svg:path>`,
})
export class TablerSortAscendingSmallBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
