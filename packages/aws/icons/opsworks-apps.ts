import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsOpsworksAppsIcon],svg[aws-opsworks-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E7157B" fill-rule="evenodd" d="M45.8967,3 C45.8967,2.447 45.4497,2 44.8967,2 L3.0007,2 C2.4477,2 2.0007,2.447 2.0007,3 L2.0007,14.348 L4.0007,14.348 L4.0007,4 L43.8967,4 L43.8967,14.348 L45.8967,14.348 L45.8967,3 Z M4.0007,43.896 L43.8967,43.896 L43.8967,17.965 L4.0007,17.965 L4.0007,43.896 Z M44.8967,45.896 L3.0007,45.896 C2.4477,45.896 2.0007,45.449 2.0007,44.896 L2.0007,16.966 C2.0007,16.413 2.4477,15.966 3.0007,15.966 L44.8967,15.966 C45.4497,15.966 45.8967,16.413 45.8967,16.966 L45.8967,44.896 C45.8967,45.449 45.4497,45.896 44.8967,45.896 L44.8967,45.896 Z"></svg:path>`,
})
export class AwsOpsworksAppsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
