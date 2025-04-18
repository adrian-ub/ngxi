import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrillIcon],svg[tabler-grill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zm-2 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-2-6l1 2m-7-2l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4"></svg:path>`,
})
export class TablerGrillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
