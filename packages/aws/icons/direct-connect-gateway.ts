import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsDirectConnectGatewayIcon],svg[aws-direct-connect-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:polygon fill="#8C4FFF" fill-rule="evenodd" points="24.279 2 5.779 12.68 6.778 14.413 23.278 4.886 23.278 22.938 7.328 22.938 11.485 18.781 10.072 17.367 3 24.437 10.072 31.507 11.485 30.094 6.328 24.937 23.278 24.937 23.278 42.992 6.778 33.466 5.779 35.198 24.279 45.879 42.778 35.198 41.779 33.466 25.279 42.992 25.279 24.937 41.999 24.937 37.402 29.536 38.816 30.949 45.886 23.879 38.816 16.808 37.402 18.222 42.116 22.938 25.279 22.938 25.279 4.886 41.779 14.413 42.778 12.68"></svg:polygon>`,
})
export class AwsDirectConnectGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
