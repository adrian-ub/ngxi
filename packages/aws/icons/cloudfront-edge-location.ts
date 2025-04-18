import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsCloudfrontEdgeLocationIcon],svg[aws-cloudfront-edge-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8C4FFF" fill-rule="evenodd" d="M4,43.889 L4,29.036 C7.767,27.035 11.783,25.622 15.963,24.829 L15.963,31.926 L31.926,31.926 L31.926,24.829 C36.105,25.622 40.121,27.035 43.889,29.036 L43.889,43.889 L4,43.889 Z M17.963,29.926 L29.926,29.926 L29.926,17.963 L17.963,17.963 L17.963,29.926 Z M43.889,4 L43.889,26.781 C40.104,24.883 36.091,23.55 31.926,22.797 L31.926,15.963 L15.963,15.963 L15.963,22.797 C11.798,23.55 7.784,24.883 4,26.781 L4,4 L43.889,4 Z M2,45.889 L45.889,45.889 L45.889,2 L2,2 L2,45.889 Z"></svg:path>`,
})
export class AwsCloudfrontEdgeLocationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
