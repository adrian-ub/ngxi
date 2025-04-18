import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOfflineGatewayOutlineIcon],svg[lsicon-offline-gateway-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 7.5h-6v6h11V10m-2-8v2m-7 3.5V2M4 10.5h2m1 0h2m1 0h2m1.203-4.703l-2.406 2.406M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class LsiconOfflineGatewayOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
