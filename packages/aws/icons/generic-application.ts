import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsGenericApplicationIcon],svg[aws-generic-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#232F3D" fill-rule="evenodd" d="M37,35 L46,35 L46,37 L37,37 L37,46 L35,46 L35,37 L26,37 L26,35 L35,35 L35,26 L37,26 L37,35 Z M4,44 L20,44 L20,28 L4,28 L4,44 Z M21,26 L3,26 C2.447,26 2,26.448 2,27 L2,45 C2,45.552 2.447,46 3,46 L21,46 C21.553,46 22,45.552 22,45 L22,27 C22,26.448 21.553,26 21,26 L21,26 Z M28,20 L44,20 L44,4 L28,4 L28,20 Z M45,2 L27,2 C26.447,2 26,2.448 26,3 L26,21 C26,21.552 26.447,22 27,22 L45,22 C45.553,22 46,21.552 46,21 L46,3 C46,2.448 45.553,2 45,2 L45,2 Z M4,20 L20,20 L20,4 L4,4 L4,20 Z M21,2 L3,2 C2.447,2 2,2.448 2,3 L2,21 C2,21.552 2.447,22 3,22 L21,22 C21.553,22 22,21.552 22,21 L22,3 C22,2.448 21.553,2 21,2 L21,2 Z"></svg:path>`,
})
export class AwsGenericApplicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
