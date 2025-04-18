import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferLongTopLightIcon],svg[lets-icons-transfer-long-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 22V10H6.435a.2.2 0 0 1-.152-.33L12 3l5.717 6.67a.2.2 0 0 1-.152.33H14v12"></svg:path>`,
})
export class LetsIconsTransferLongTopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
