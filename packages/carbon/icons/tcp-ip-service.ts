import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTcpIpServiceIcon],svg[carbon-tcp-ip-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28h14v2H16zm11-2h-8c-1.103 0-2-.897-2-2v-5c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v5c0 1.103-.897 2-2 2m-8-7v5h8v-5zm-4 4h-5c-1.103 0-2-.897-2-2v-4h2v4h5zM2 13h14v2H2zm11-2H5c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v5c0 1.103-.897 2-2 2M5 4v5h8V4z"></svg:path>`,
})
export class CarbonTcpIpServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
