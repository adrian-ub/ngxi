import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOfflineGatewayFilledIcon],svg[lsicon-offline-gateway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h2V2h1v5h3.5v1H3v5h10v-3h1v4H2zm9-5v2h1V2z"></svg:path><svg:path fill="currentColor" d="M12 4.5a2.5 2.5 0 0 0-2.086 3.879l3.465-3.465A2.5 2.5 0 0 0 12 4.5m2.086 1.121L10.62 9.086a2.5 2.5 0 0 0 3.465-3.464M6 11v-1H4v1zm1 0h2v-1H7zm5 0v-1h-2v1z"></svg:path>`,
})
export class LsiconOfflineGatewayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
