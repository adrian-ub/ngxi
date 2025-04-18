import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAdjustmentsIcon],svg[majesticons-adjustments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M20 7a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20zm0 6a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20zm0 6a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsAdjustmentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
