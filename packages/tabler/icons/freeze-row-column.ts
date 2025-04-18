import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFreezeRowColumnIcon],svg[tabler-freeze-row-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12-2L3 15M9.5 3l-6 6M20 3.5L14.5 9M9 15l-5 5"></svg:path><svg:path d="M21 9H9v12"></svg:path></svg:g>`,
})
export class TablerFreezeRowColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
