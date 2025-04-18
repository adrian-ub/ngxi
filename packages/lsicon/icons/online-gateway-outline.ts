import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOnlineGatewayOutlineIcon],svg[lsicon-online-gateway-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11.5 7.5h2v6h-11v-6h2m7 0V2m0 5.5h-7m0 0V2M4 10.5h2m1 0h2m1 0h2"></svg:path>`,
})
export class LsiconOnlineGatewayOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
