import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsEmailDarkIcon],svg[aws-email-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" fill-rule="evenodd" d="M31.4824,23.5332 L44.0004,13.2252 L44.0004,33.9642 L31.4824,23.5332 Z M18.0884,24.8272 L24.0004,29.6952 L29.9114,24.8272 L42.3584,35.2002 L5.6424,35.2002 L18.0884,24.8272 Z M16.5174,23.5332 L4.0004,33.9652 L4.0004,13.2242 L16.5174,23.5332 Z M24.0004,27.1042 L5.6594,12.0002 L42.3404,12.0002 L24.0004,27.1042 Z M2.0004,10.6462 L2.0004,36.5532 C2.0004,36.9102 2.2894,37.2002 2.6464,37.2002 L45.3534,37.2002 C45.7114,37.2002 46.0004,36.9102 46.0004,36.5532 L46.0004,10.6462 C46.0004,10.2892 45.7114,10.0002 45.3534,10.0002 L2.6464,10.0002 C2.2894,10.0002 2.0004,10.2892 2.0004,10.6462 L2.0004,10.6462 Z"></svg:path>`,
})
export class AwsEmailDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
