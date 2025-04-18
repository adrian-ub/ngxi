import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOnlineGatewayFilledIcon],svg[lsicon-online-gateway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 7H4V2h1v5h6V2h1v5h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5M6 10v1H4v-1zm3 1H7v-1h2zm3 0v-1h-2v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOnlineGatewayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
