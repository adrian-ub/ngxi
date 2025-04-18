import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingPavilionIcon],svg[tabler-building-pavilion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9m12 9v-9M6 12h12a3 3 0 0 0 3-3a9 8 0 0 1-9-6a9 8 0 0 1-9 6a3 3 0 0 0 3 3"></svg:path>`,
})
export class TablerBuildingPavilionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
