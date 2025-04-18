import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMouseIcon],svg[majesticons-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 2.07A7 7 0 0 0 5 9v1h6zM5 12v3a7 7 0 1 0 14 0v-3zm14-2V9a7 7 0 0 0-6-6.93V10z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
