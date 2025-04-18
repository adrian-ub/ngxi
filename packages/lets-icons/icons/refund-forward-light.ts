import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefundForwardLightIcon],svg[lets-icons-refund-forward-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 8l.354.354l.353-.354l-.353-.354zm-5 11.5a.5.5 0 0 0 0-1zm.354-6.146l5-5l-.708-.708l-5 5zm5-5.708l-5-5l-.708.708l5 5zM20 7.5H9.5v1H20zm-10.5 12H15v-1H9.5zm-6-6a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5zm6-6a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5z"></svg:path>`,
})
export class LetsIconsRefundForwardLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
