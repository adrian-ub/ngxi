import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiTransferIcon],svg[oi-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0v1H0v1h6v1l2-1.5zM2 4L0 5.5L2 7V6h6V5H2z"></svg:path>`,
})
export class OiTransferIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
