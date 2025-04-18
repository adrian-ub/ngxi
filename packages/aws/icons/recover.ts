import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsRecoverIcon],svg[aws-recover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#232F3D" fill-rule="evenodd" d="M45,24 C45,35.58 35.58,45 24,45 C12.42,45 3,35.58 3,24 C3,16.674 6.9,9.783 13.181,6 L5,6 L5,4 L16,4 C16.552,4 17,4.448 17,5 L17,16 L15,16 L15,7.279 C14.75,7.414 14.496,7.541 14.253,7.687 C8.546,11.104 5,17.355 5,24 C5,34.477 13.523,43 24,43 C34.477,43 43,34.477 43,24 C43,13.523 34.477,5 24,5 L24,3 C35.58,3 45,12.42 45,24"></svg:path>`,
})
export class AwsRecoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
