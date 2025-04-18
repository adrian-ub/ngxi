import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefundDownLightIcon],svg[lets-icons-refund-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 20l-.354.354l.354.353l.354-.353zM4.5 15a.5.5 0 0 0 1 0zm6.146.354l5 5l.708-.708l-5-5zm5.708 5l5-5l-.708-.708l-5 5zM16.5 20V9.5h-1V20zM4.5 9.5V15h1V9.5zm6-6a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5zm6 6a6 6 0 0 0-6-6v1a5 5 0 0 1 5 5z"></svg:path>`,
})
export class LetsIconsRefundDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
