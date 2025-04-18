import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSortAscendingNumbersIcon],svg[tabler-sort-ascending-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 15l3 3l3-3M7 6v12M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2m-2 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M19 16v3a2 2 0 0 1-2 2h-1.5"></svg:path></svg:g>`,
})
export class TablerSortAscendingNumbersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
