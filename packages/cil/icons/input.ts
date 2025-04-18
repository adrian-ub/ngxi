import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilInputIcon],svg[cil-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 96H40a24.03 24.03 0 0 0-24 24v80h32v-72h416v256H48v-72H16v80a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V120a24.03 24.03 0 0 0-24-24"></svg:path><svg:path fill="currentColor" d="m212.687 323.078l22.626 22.627l90.511-90.509l-90.511-90.51l-22.626 22.628l51.881 51.882H16v31.999h248.569z"></svg:path>`,
})
export class CilInputIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
