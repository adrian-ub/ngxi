import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMediaVideoIcon],svg[dashicons-media-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4v12H4V2zm0 4h3l-3-3zm-1 8v-3c0-.27-.1-.51-.29-.71c-.2-.19-.44-.29-.71-.29H7c-.27 0-.51.1-.71.29c-.19.2-.29.44-.29.71v3c0 .27.1.51.29.71c.2.19.44.29.71.29h3c.27 0 .51-.1.71-.29c.19-.2.29-.44.29-.71m3 1v-5l-2 2v1z"></svg:path>`,
})
export class DashiconsMediaVideoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
