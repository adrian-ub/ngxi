import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTrashLineIcon],svg[majesticons-trash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a1 1 0 0 1-1-1zm3 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H7z"></svg:path><svg:path d="M11 5a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2zm-1 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsTrashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
