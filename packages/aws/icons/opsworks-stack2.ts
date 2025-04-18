import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsOpsworksStack2Icon],svg[aws-opsworks-stack2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E7157B" fill-rule="evenodd" d="M4,43.953 L43.953,43.953 L43.953,4 L4,4 L4,43.953 Z M44.953,2 L3,2 C2.448,2 2,2.447 2,3 L2,44.953 C2,45.506 2.448,45.953 3,45.953 L44.953,45.953 C45.506,45.953 45.953,45.506 45.953,44.953 L45.953,3 C45.953,2.447 45.506,2 44.953,2 L44.953,2 Z"></svg:path>`,
})
export class AwsOpsworksStack2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
