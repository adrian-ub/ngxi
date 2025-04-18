import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnnotationLineIcon],svg[majesticons-annotation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2.172a1 1 0 0 0-.707.293l-2 2a3 3 0 0 1-4.242 0l-2-2A1 1 0 0 0 7.172 18H5a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.172a3 3 0 0 1 2.12.879l2 2a1 1 0 0 0 1.415 0l2-2A3 3 0 0 1 16.828 16H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5zm1 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsAnnotationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
