import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMinusIcon],svg[bx-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h14v2H5z"></svg:path>`,
})
export class BxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
