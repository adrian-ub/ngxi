import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsProgrammingLanguageIcon],svg[aws-programming-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#232F3D" fill-rule="evenodd" d="M18.0586,38 L19.9416,38.673 L29.9416,10.673 L28.0586,10 L18.0586,38 Z M45.6316,23.539 L34.6316,14.562 L33.3686,16.111 L43.4206,24.316 L33.3666,32.563 L34.6336,34.109 L45.6336,25.087 C45.8666,24.897 45.9996,24.613 45.9996,24.313 C45.9996,24.013 45.8646,23.729 45.6316,23.539 L45.6316,23.539 Z M4.5796,24.316 L14.6336,32.563 L13.3666,34.109 L2.3666,25.087 C2.1336,24.897 1.9996,24.613 1.9996,24.313 C1.9996,24.013 2.1356,23.729 2.3686,23.539 L13.3686,14.562 L14.6316,16.111 L4.5796,24.316 Z"></svg:path>`,
})
export class AwsProgrammingLanguageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
