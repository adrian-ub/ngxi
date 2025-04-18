import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsArrowFromTopIcon],svg[bx-bxs-arrow-from-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 4h12v2H6zm5 4v6H6l6 6l6-6h-5V8z" fill="currentColor"></svg:path>`,
})
export class BxBxsArrowFromTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
