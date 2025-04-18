import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlashlightFilledIcon],svg[tdesign-flashlight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h16v3H4zm0 5h16v2.414l-3 3V24H7V10.414l-3-3zm9.004 5H11v2.004h2.004z"></svg:path>`,
})
export class TdesignFlashlightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
