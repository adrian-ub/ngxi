import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareappIcon],svg[whh-squareapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.955 1024h-640q-80 0-136-56.5T.955 832V192q0-80 56-136t136-56h640q79 0 135.5 56t56.5 136v640q0 79-56.5 135.5t-135.5 56.5m0-800q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5v576q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5zm-224 416h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhSquareappIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
