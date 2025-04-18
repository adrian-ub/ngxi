import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBedFlatIcon],svg[tabler-bed-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 2h11v-2a3 3 0 0 0-3-3h-8zm-7 3h18"></svg:path>`,
})
export class TablerBedFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
