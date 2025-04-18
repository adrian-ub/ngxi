import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferLongDownLightIcon],svg[lets-icons-transfer-long-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 2v12H6.435a.2.2 0 0 0-.152.33L12 21l5.717-6.67a.2.2 0 0 0-.152-.33H14V2"></svg:path>`,
})
export class LetsIconsTransferLongDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
