import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMessagesLineIcon],svg[majesticons-messages-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v3a1 1 0 0 1-1.707.707L12.586 18H7a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V5zm16 3v3a3 3 0 0 1-3 3h-3.586l-2 2H13a1 1 0 0 1 .707.293L16 18.586V17a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1zM8 14.586l2.293-2.293A1 1 0 0 1 11 12h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v1.586z"></svg:path></svg:g>`,
})
export class MajesticonsMessagesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
