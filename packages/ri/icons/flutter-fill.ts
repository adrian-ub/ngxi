import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlutterFillIcon],svg[ri-flutter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.504 2.001l-10 10l3.083 3.083l13.08-13.083zm-.005 9.198l-5.376 5.42L13.496 22h6.188l-5.387-5.4l5.389-5.4z"></svg:path>`,
})
export class RiFlutterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
