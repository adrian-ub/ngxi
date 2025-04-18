import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudTransitGatewayIcon],svg[carbon-ibm-cloud-transit-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 7.5l-1.4-1.4l3.5-3.5c.8-.8 2.1-.8 2.8 0l3.5 3.5l-1.4 1.4L16 4zm7 17l1.4 1.4l-3.5 3.5c-.8.8-2.1.8-2.8 0l-3.5-3.5l1.4-1.4L16 28zm5-12l1.4-1.4l3.5 3.5c.8.8.8 2.1 0 2.8l-3.5 3.5l-1.4-1.4L28 16zm-17 7l-1.4 1.4l-3.5-3.5c-.8-.8-.8-2.1 0-2.8l3.5-3.5l1.4 1.4L4 16z"></svg:path><svg:path fill="currentColor" d="M26 24c-.2 0-.3 0-.5.1L19.4 18c.8-1.2.8-2.8 0-4l6.1-6.1c.2.1.3.1.5.1c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2c0 .2 0 .3.1.5L18 12.6c-1.2-.8-2.8-.8-4 0L7.9 6.5c.1-.2.1-.3.1-.5c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2c.2 0 .3 0 .5-.1l6.1 6.1c-.8 1.2-.8 2.8 0 4l-6.1 6.1c-.2-.1-.3-.1-.5-.1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c0-.2 0-.3-.1-.5l6.1-6.1c1.2.8 2.8.8 4 0l6.1 6.1c0 .2-.1.3-.1.5c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2m-10-6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class CarbonIbmCloudTransitGatewayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
