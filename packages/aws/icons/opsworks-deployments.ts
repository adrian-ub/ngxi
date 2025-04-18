import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsOpsworksDeploymentsIcon],svg[aws-opsworks-deployments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E7157B" fill-rule="evenodd" d="M42.5066,38.6768 L35.4876,45.6958 C35.2926,45.8908 35.0366,45.9888 34.7806,45.9888 C34.5256,45.9888 34.2696,45.8908 34.0736,45.6958 L27.0556,38.6768 L28.4696,37.2628 L33.7806,42.5738 L33.7806,25.9338 C33.7806,25.7268 33.6686,25.5308 33.4736,25.3998 L24.2526,19.1808 L15.0326,25.3998 C14.8406,25.5298 14.7256,25.7298 14.7256,25.9338 L14.7256,42.5738 L20.0366,37.2628 L21.4506,38.6768 L14.4326,45.6958 C14.2366,45.8908 13.9816,45.9888 13.7256,45.9888 C13.4696,45.9888 13.2136,45.8908 13.0186,45.6958 L5.9996,38.6768 L7.4136,37.2628 L12.7256,42.5738 L12.7256,25.9338 C12.7256,25.0638 13.1696,24.2438 13.9136,23.7418 L23.2526,17.4438 L23.2526,1.9998 L25.2526,1.9998 L25.2526,17.4428 L34.5916,23.7408 C35.3356,24.2428 35.7806,25.0638 35.7806,25.9338 L35.7806,42.5738 L41.0926,37.2628 L42.5066,38.6768 Z"></svg:path>`,
})
export class AwsOpsworksDeploymentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
