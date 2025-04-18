import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsAwsManagementConsoleDarkIcon],svg[aws-aws-management-console-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" fill-rule="evenodd" d="M10.001,41 L44,41 L44,14 L10.001,14 L10.001,41 Z M4,41 L8.001,41 L8.001,14 L4,14 L4,41 Z M4,12 L44,12 L44,6 L4,6 L4,12 Z M46,5 L46,42 C46,42.552 45.553,43 45,43 L3,43 C2.447,43 2,42.552 2,42 L2,5 C2,4.448 2.447,4 3,4 L45,4 C45.553,4 46,4.448 46,5 L46,5 Z M35,32.409 L35,23.866 L28,28.533 L28,36.298 L35,32.409 Z M19,32.409 L26,36.298 L26,28.533 L19,23.866 L19,32.409 Z M19.919,22.075 L27,26.796 L34.081,22.075 L27,18.142 L19.919,22.075 Z M37,21.998 L37,32.998 C37,33.361 36.803,33.695 36.485,33.872 L27.485,38.872 C27.335,38.956 27.167,38.998 27,38.998 C26.833,38.998 26.665,38.956 26.515,38.872 L17.515,33.872 C17.197,33.695 17,33.361 17,32.998 L17,21.998 C17,21.634 17.197,21.3 17.515,21.124 L26.515,16.124 C26.815,15.956 27.185,15.956 27.485,16.124 L36.485,21.124 C36.803,21.3 37,21.634 37,21.998 L37,21.998 Z M14.001,10 L16.001,10 L16.001,8 L14.001,8 L14.001,10 Z M10.001,10 L12.001,10 L12.001,8 L10.001,8 L10.001,10 Z M6.001,10 L8.001,10 L8.001,8 L6.001,8 L6.001,10 Z"></svg:path>`,
})
export class AwsAwsManagementConsoleDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
