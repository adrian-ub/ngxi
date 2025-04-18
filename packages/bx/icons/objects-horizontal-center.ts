import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxObjectsHorizontalCenterIcon],svg[bx-objects-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h6v2h2v-2h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6v-2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4V2h-2v2H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4v2H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1M8 6h8v3H8zm-2 9h12v3H6z"></svg:path>`,
})
export class BxObjectsHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
