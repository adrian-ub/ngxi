import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsNotificationOffIcon],svg[pixelarticons-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v2h5v2h-8V2zM5 16h9v2h2v4h-6v-2h4v-2h-4v4H8v-4H3v-6h2v-2h2v4H5zm16-2h-2v-2h-2V6h2v6h2zM5 2H3v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2V8H9V6H7V4H5z"></svg:path>`,
})
export class PixelarticonsNotificationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
