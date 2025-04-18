import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlantOffIcon],svg[tabler-plant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h8m-3.1-7.092a6 6 0 0 0-4.79-4.806M3 3v2a6 6 0 0 0 6 6h2m1.531-2.472A6 6 0 0 1 18 5h3v1a6 6 0 0 1-5.037 5.923M12 15v-3M3 3l18 18"></svg:path>`,
})
export class TablerPlantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
