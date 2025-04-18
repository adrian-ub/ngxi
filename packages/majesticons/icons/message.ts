import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMessageIcon],svg[majesticons-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3a1 1 0 0 1 1 1v.97c0 1.659 1.904 2.596 3.22 1.584l4.35-3.347a1 1 0 0 1 .61-.207H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
