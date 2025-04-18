import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsArrowToTopIcon],svg[bx-bxs-arrow-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6l-6 6z" fill="currentColor"></svg:path>`,
})
export class BxBxsArrowToTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
