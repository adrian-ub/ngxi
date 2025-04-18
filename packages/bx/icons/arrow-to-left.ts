import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowToLeftIcon],svg[bx-arrow-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707l1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z"></svg:path>`,
})
export class BxArrowToLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
