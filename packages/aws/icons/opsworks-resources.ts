import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsOpsworksResourcesIcon],svg[aws-opsworks-resources-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E7157B" fill-rule="evenodd" d="M25.2278,43.3628 L25.2278,25.0668 L41.4558,15.6978 L41.4558,33.9938 L25.2278,43.3628 Z M6.9998,15.6978 L23.2278,25.0668 L23.2278,43.3628 L6.9998,33.9938 L6.9998,15.6978 Z M24.2278,4.1538 L40.8368,13.7448 L24.2278,23.3358 L7.6178,13.7448 L24.2278,4.1538 Z M42.9558,12.6578 L24.7278,2.1338 C24.4188,1.9558 24.0368,1.9558 23.7278,2.1338 L5.4998,12.6578 C5.1908,12.8368 4.9998,13.1668 4.9998,13.5238 L4.9998,34.5708 C4.9998,34.9278 5.1908,35.2588 5.4998,35.4368 L23.7278,45.9608 C23.8818,46.0498 24.0548,46.0938 24.2278,46.0938 C24.4008,46.0938 24.5738,46.0498 24.7278,45.9608 L42.9558,35.4368 C43.2648,35.2588 43.4558,34.9278 43.4558,34.5708 L43.4558,13.5238 C43.4558,13.1668 43.2648,12.8368 42.9558,12.6578 L42.9558,12.6578 Z"></svg:path>`,
})
export class AwsOpsworksResourcesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
