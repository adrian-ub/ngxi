import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowToRightIcon],svg[bx-arrow-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h2v12h-2zM4 13h8.586l-4.293 4.293l1.414 1.414L16.414 12L9.707 5.293L8.293 6.707L12.586 11H4z"></svg:path>`,
})
export class BxArrowToRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
