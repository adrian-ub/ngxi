import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsArrowFromLeftIcon],svg[bxs-arrow-from-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v12H4zm10 5H8v2h6v5l6-6l-6-6z"></svg:path>`,
})
export class BxsArrowFromLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
