import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudDirectLink1ConnectIcon],svg[carbon-ibm-cloud-direct-link-1-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 29H13c-1.1 0-2-.9-2-2v-4h2v4h14V13h-4v-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M20 17c-.5 0-.9.1-1.3.3l-4-4c.2-.4.3-.8.3-1.3c0-1.7-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3c.5 0 .9-.1 1.3-.3l4 4c-.2.4-.3.8-.3 1.3c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m-9-5c0-.6.4-1 1-1s1 .4 1 1s-.4 1-1 1s-1-.4-1-1m9 9c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path><svg:path fill="currentColor" d="M5 3h14c1.1 0 2 .9 2 2v4h-2V5H5v14h4v2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2"></svg:path>`,
})
export class CarbonIbmCloudDirectLink1ConnectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
