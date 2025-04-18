import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFiberPinIcon],svg[ic-sharp-fiber-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 10.5h2v1h-2zM22 4H2v16h20zM9 13H5.5v2H4V9h5zm3.5 2H11V9h1.5zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20z"></svg:path>`,
})
export class IcSharpFiberPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
