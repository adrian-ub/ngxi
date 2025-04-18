import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsOpsworksLayersIcon],svg[aws-opsworks-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E7157B" fill-rule="evenodd" d="M4,43.92 L43.92,43.92 L43.92,30.199 L4,30.199 L4,43.92 Z M44.92,28.199 L3,28.199 C2.448,28.199 2,28.647 2,29.199 L2,44.92 C2,45.473 2.448,45.92 3,45.92 L44.92,45.92 C45.473,45.92 45.92,45.473 45.92,44.92 L45.92,29.199 C45.92,28.647 45.473,28.199 44.92,28.199 L44.92,28.199 Z M4,17.72 L43.92,17.72 L43.92,4 L4,4 L4,17.72 Z M44.92,2 L3,2 C2.448,2 2,2.447 2,3 L2,18.72 C2,19.273 2.448,19.72 3,19.72 L44.92,19.72 C45.473,19.72 45.92,19.273 45.92,18.72 L45.92,3 C45.92,2.447 45.473,2 44.92,2 L44.92,2 Z"></svg:path>`,
})
export class AwsOpsworksLayersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
