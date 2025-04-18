import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsSimpleStorageServiceObjectIcon],svg[aws-simple-storage-service-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7AA116" fill-rule="evenodd" d="M23.971,43.9414 C12.959,43.9414 4,34.9824 4,23.9704 C4,12.9594 12.959,4.0004 23.971,4.0004 C34.983,4.0004 43.942,12.9594 43.942,23.9704 C43.942,34.9824 34.983,43.9414 23.971,43.9414 M23.971,2.0004 C11.857,2.0004 2,11.8564 2,23.9704 C2,36.0854 11.857,45.9414 23.971,45.9414 C36.085,45.9414 45.942,36.0854 45.942,23.9704 C45.942,11.8564 36.085,2.0004 23.971,2.0004"></svg:path>`,
})
export class AwsSimpleStorageServiceObjectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
