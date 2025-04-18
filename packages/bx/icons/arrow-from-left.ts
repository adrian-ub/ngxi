import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowFromLeftIcon],svg[bx-arrow-from-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v12H4zm4 7h8.586l-4.293 4.293l1.414 1.414L20.414 12l-6.707-6.707l-1.414 1.414L16.586 11H8z"></svg:path>`,
})
export class BxArrowFromLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
