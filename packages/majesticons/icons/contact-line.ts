import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsContactLineIcon],svg[majesticons-contact-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5zM4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7zm11 1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1z"></svg:path><svg:path d="M9 10a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path><svg:path d="M9 14c-.99 0-1.707.65-2.106 1.447a1 1 0 1 1-1.788-.894C5.707 13.349 6.99 12 9 12c2.01 0 3.293 1.35 3.894 2.553a1 1 0 1 1-1.788.894C10.707 14.651 9.99 14 9 14z"></svg:path></svg:g>`,
})
export class MajesticonsContactLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
