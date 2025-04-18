import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCabinetIcon],svg[bx-bxs-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v7h18V4zm-5 4H8V5h2v1h4V5h2v3zM5 22h14c1.103 0 2-.897 2-2v-7H3v7c0 1.103.897 2 2 2zm3-6h2v1h4v-1h2v3H8v-3z" fill="currentColor"></svg:path>`,
})
export class BxBxsCabinetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
