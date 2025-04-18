import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailUnreadIcon],svg[pixelarticons-mail-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-6v6h6zM4 4h10v2H4v12h16v-8h2v10H2V4zm4 4H6v2h2v2h2v2h4v-2h2v-2h-2v2h-4v-2H8z"></svg:path>`,
})
export class PixelarticonsMailUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
