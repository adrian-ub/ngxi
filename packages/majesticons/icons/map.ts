import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapIcon],svg[majesticons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M21.472 3.118A1 1 0 0 1 22 4v12a1 1 0 0 1-.445.832L16 20.535V6.131l4.445-2.963a1 1 0 0 1 1.027-.05zM14 6.131l-4-2.666v14.404l4 2.666V6.131zM8 17.87l-4.445 2.963A1 1 0 0 1 2 20V8a1 1 0 0 1 .445-.832L8 3.465v14.404z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
