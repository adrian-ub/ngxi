import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsFoldersDarkIcon],svg[aws-folders-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" fill-rule="evenodd" d="M46,14 L46,43 C46,43.552 45.553,44 45,44 L10,44 C9.447,44 9,43.552 9,43 L9,40.002 L11,40.002 L11,42 L44,42 L44,15 L42.004,15 L42.004,13 L45,13 C45.553,13 46,13.448 46,14 L46,14 Z M4,36 L38.001,36 L38.001,14 L4,14 L4,36 Z M14.586,6 L17.294,8.708 C17.481,8.896 17.735,9.001 18.001,9.001 L38.001,9.001 L38.001,12 L4,12 L4,6 L14.586,6 Z M40.001,8.001 C40.001,7.449 39.554,7.001 39.001,7.001 L18.415,7.001 L15.707,4.293 C15.52,4.105 15.266,4 15,4 L3,4 C2.447,4 2,4.448 2,5 L2,37 C2,37.552 2.447,38 3,38 L39.001,38 C39.554,38 40.001,37.552 40.001,37 L40.001,8.001 Z"></svg:path>`,
})
export class AwsFoldersDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
