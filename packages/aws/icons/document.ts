import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsDocumentIcon],svg[aws-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#232F3D" fill-rule="evenodd" d="M15,20 L28,20 L28,18 L15,18 L15,20 Z M15,34 L28,34 L28,32 L15,32 L15,34 Z M15,27 L32,27 L32,25 L15,25 L15,27 Z M10,44 L10.007,4 L28,4 L28,13 C28,13.552 28.447,14 29,14 L38,14 L38.025,44 L10,44 Z M30,5.414 L36.586,12 L30,12 L30,5.414 Z M39.707,12.293 L29.707,2.293 C29.52,2.105 29.266,2 29,2 L10,2 C8.822,2 8,2.822 8,4 L8,44 C8,45.14 8.859,46 10,46 L38.025,46 C39.151,46 40,45.14 40,44 L40,13 C40,12.735 39.895,12.48 39.707,12.293 L39.707,12.293 Z"></svg:path>`,
})
export class AwsDocumentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
