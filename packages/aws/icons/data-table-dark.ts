import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsDataTableDarkIcon],svg[aws-data-table-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" fill-rule="evenodd" d="M13,15 L44,15 L44,10 L13,10 L13,15 Z M35,21 L44,21 L44,17 L35,17 L35,21 Z M35,27 L44,27 L44,23 L35,23 L35,27 Z M35,33 L44,33 L44,29 L35,29 L35,33 Z M35,39 L44,39 L44,35 L35,35 L35,39 Z M13,21 L22,21 L22,17 L13,17 L13,21 Z M24,21 L33,21 L33,17 L24,17 L24,21 Z M24,27 L33,27 L33,23 L24,23 L24,27 Z M24,33 L33,33 L33,29 L24,29 L24,33 Z M24,39 L33,39 L33,35 L24,35 L24,39 Z M13,39 L22,39 L22,35 L13,35 L13,39 Z M13,27 L22,27 L22,23 L13,23 L13,27 Z M13,33 L22,33 L22,29 L13,29 L13,33 Z M4,39 L11,39 L11,17 L4,17 L4,39 Z M4,15 L11,15 L11,10 L4,10 L4,15 Z M45,8 L3,8 C2.447,8 2,8.448 2,9 L2,40 C2,40.552 2.447,41 3,41 L45,41 C45.553,41 46,40.552 46,40 L46,9 C46,8.448 45.553,8 45,8 L45,8 Z"></svg:path>`,
})
export class AwsDataTableDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
