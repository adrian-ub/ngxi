import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsIotActionIcon],svg[aws-iot-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7AA116" fill-rule="evenodd" d="M32.5463,23.2744 C32.9063,23.6594 32.9063,24.2564 32.5463,24.6414 L19.4483,38.6124 L17.9893,37.2454 L30.4453,23.9584 L17.9893,10.6704 L19.4483,9.3024 L32.5463,23.2744 Z M4.0003,23.9584 C4.0003,12.9534 12.9533,4.0004 23.9583,4.0004 C34.9623,4.0004 43.9153,12.9534 43.9153,23.9584 C43.9153,34.9624 34.9623,43.9154 23.9583,43.9154 C12.9533,43.9154 4.0003,34.9624 4.0003,23.9584 Z M2.0003,23.9584 C2.0003,36.0654 11.8513,45.9154 23.9583,45.9154 C36.0663,45.9154 45.9153,36.0654 45.9153,23.9584 C45.9153,11.8504 36.0663,2.0004 23.9583,2.0004 C11.8513,2.0004 2.0003,11.8504 2.0003,23.9584 Z"></svg:path>`,
})
export class AwsIotActionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
