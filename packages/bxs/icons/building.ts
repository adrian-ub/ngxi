import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBuildingIcon],svg[bxs-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a2 2 0 0 0-2 2v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2m-6 14H8v-2h3zm0-4H8v-2h3zm0-4H8V6h3zm5 8h-3v-2h3zm0-4h-3v-2h3zm0-4h-3V6h3z"></svg:path>`,
})
export class BxsBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
