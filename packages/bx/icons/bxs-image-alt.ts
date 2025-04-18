import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsImageAltIcon],svg[bx-bxs-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm3-7l2.363 2.363L14 11l5 7H5l3-4z" fill="currentColor"></svg:path>`,
})
export class BxBxsImageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
