import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheckDoubleIcon],svg[bx-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.394 13.742l4.743 3.62l7.616-8.704l-1.506-1.316l-6.384 7.296l-3.257-2.486zm19.359-5.084l-1.506-1.316l-6.369 7.279l-.753-.602l-1.25 1.562l2.247 1.798z"></svg:path>`,
})
export class BxCheckDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
