import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudDirectLink2ConnectIcon],svg[carbon-ibm-cloud-direct-link-2-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.2 13c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H5c-1.1 0-2 .9-2 2v6H0v2h3v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V13zm2.8-2c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"></svg:path><svg:path fill="currentColor" d="M29 11V5c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v4h2V5h14v14H14.8c-.4-1.2-1.5-2-2.8-2c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H27c1.1 0 2-.9 2-2v-6h3v-2zM12 21c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class CarbonIbmCloudDirectLink2ConnectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
