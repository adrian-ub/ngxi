import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCreditCardIcon],svg[cil-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 72H40a24.03 24.03 0 0 0-24 24v320a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V96a24.03 24.03 0 0 0-24-24m-8 32v64H48v-64ZM48 408V232h416v176Z"></svg:path><svg:path fill="currentColor" d="M88 312h64v32H88zm96 0h64v32h-64z"></svg:path>`,
})
export class CilCreditCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
