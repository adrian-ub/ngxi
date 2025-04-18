import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsCloudfrontStreamingDistributionIcon],svg[aws-cloudfront-streaming-distribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8C4FFF" fill-rule="evenodd" d="M31.1309,28.5088 L32.5449,29.9228 L24.6799,37.7868 C24.4849,37.9828 24.2289,38.0798 23.9729,38.0798 C23.7169,38.0798 23.4609,37.9828 23.2659,37.7868 L15.4019,29.9228 L16.8159,28.5088 L22.9729,34.6658 L22.9729,9.1168 L24.9729,9.1168 L24.9729,34.6658 L31.1309,28.5088 Z M23.9729,43.9448 C12.9599,43.9448 3.9999,34.9858 3.9999,23.9728 C3.9999,12.9598 12.9599,3.9998 23.9729,3.9998 C34.9849,3.9998 43.9449,12.9598 43.9449,23.9728 C43.9449,34.9858 34.9849,43.9448 23.9729,43.9448 L23.9729,43.9448 Z M23.9729,1.9998 C11.8569,1.9998 1.9999,11.8568 1.9999,23.9728 C1.9999,36.0878 11.8569,45.9448 23.9729,45.9448 C36.0889,45.9448 45.9449,36.0878 45.9449,23.9728 C45.9449,11.8568 36.0889,1.9998 23.9729,1.9998 L23.9729,1.9998 Z"></svg:path>`,
})
export class AwsCloudfrontStreamingDistributionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
