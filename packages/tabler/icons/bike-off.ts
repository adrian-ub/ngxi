import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBikeOffIcon],svg[tabler-bike-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m14.437-1.56a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3m-7 4v-4l-3-3l1.665-1.332m2.215-1.772L14 8l2 3h3m-3-6a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 3l18 18"></svg:path>`,
})
export class TablerBikeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
