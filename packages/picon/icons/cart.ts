import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCartIcon],svg[picon-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 6l1 1l-1 1l-1-1M2 7l1-1l1 1l-1 1M0 1V0h2l1 1h5L6 4H3v1h4l1 1H1l1-2l-1-3"></svg:path>`,
})
export class PiconCartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
