import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkOverlayIcon],svg[carbon-network-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 23h-8.17l2.58-2.59L15 19l-5 5l5 5l1.41-1.41L13.83 25H22zM11 13h8.17l-2.58-2.59L18 9l5 5l-5 5l-1.41-1.41L19.17 15H11z"></svg:path><svg:path fill="currentColor" d="M24.5 25H24v-2h.5a5.496 5.496 0 0 0 .377-10.98l-.836-.056l-.09-.834a7.998 7.998 0 0 0-15.902 0l-.09.834l-.836.057A5.496 5.496 0 0 0 7.5 23H8v2h-.5a7.496 7.496 0 0 1-1.322-14.876a10 10 0 0 1 19.644 0A7.496 7.496 0 0 1 24.5 25"></svg:path>`,
})
export class CarbonNetworkOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
