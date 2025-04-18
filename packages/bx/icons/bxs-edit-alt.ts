import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsEditAltIcon],svg[bx-bxs-edit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287l-3-3zm0 6h16v2H4z" fill="currentColor"></svg:path>`,
})
export class BxBxsEditAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
