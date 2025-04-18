import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlFlutterIcon],svg[bx-bxl-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.9 2.01L3.9 12l3.09 3.09l2.71-2.7L20.09 2l-6.19.01zm.82 14.6l5.39-5.38h-5.93c-.11 0-.26 0-.34.07l-2.23 2.23l-3.09 3.07l3.09 3.1l2.15 2.15c.07.07.14.17.26.15h6.07z" fill="currentColor"></svg:path>`,
})
export class BxBxlFlutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
