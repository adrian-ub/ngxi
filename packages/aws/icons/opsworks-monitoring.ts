import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsOpsworksMonitoringIcon],svg[aws-opsworks-monitoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E7157B" fill-rule="evenodd" d="M44.0359,38.6515 L3.9999,38.6515 L3.9999,28.6175 L13.7169,16.4705 L23.4639,22.9675 C23.8849,23.2485 24.4449,23.1715 24.7739,22.7915 L35.4879,10.4285 L44.0359,18.2005 L44.0359,38.6515 Z M45.7089,17.0175 L36.0759,8.2595 C35.8769,8.0785 35.6259,7.9845 35.3439,8.0025 C35.0749,8.0175 34.8239,8.1415 34.6469,8.3445 L23.8399,20.8145 L14.0629,14.2975 C13.6299,14.0095 13.0519,14.1015 12.7269,14.5055 L2.2189,27.6415 C2.0769,27.8195 1.9999,28.0395 1.9999,28.2665 L1.9999,39.6515 C1.9999,40.2045 2.4469,40.6515 2.9999,40.6515 L45.0359,40.6515 C45.5889,40.6515 46.0359,40.2045 46.0359,39.6515 L46.0359,17.7575 C46.0359,17.4765 45.9169,17.2075 45.7089,17.0175 L45.7089,17.0175 Z"></svg:path>`,
})
export class AwsOpsworksMonitoringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
