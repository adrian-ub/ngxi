import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnnotationIcon],svg[majesticons-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2.172a1 1 0 0 0-.707.293l-2 2a3 3 0 0 1-4.242 0l-2-2A1 1 0 0 0 7.172 18H5a3 3 0 0 1-3-3V6zm5 1a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsAnnotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
