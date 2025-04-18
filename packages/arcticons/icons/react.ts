import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReactIcon],svg[arcticons-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.44 24.76c21.734 0 11.732 18.335 23.027 18.335c3.876 0 5.24-2.934 5.24-2.934M11.44 4.5v39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.293 4.5h16.011c6.054 0 10.96 4.535 10.96 10.13q0 0 0 0c0 5.594-4.906 10.13-10.96 10.13H11.46M8.293 43.5h6.293"></svg:path>`,
})
export class ArcticonsReactIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
