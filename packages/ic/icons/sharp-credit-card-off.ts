import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCreditCardOffIcon],svg[ic-sharp-credit-card-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H22v15.17L14.83 12H20V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM9.17 12l-4-4H4v4z"></svg:path>`,
})
export class IcSharpCreditCardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
