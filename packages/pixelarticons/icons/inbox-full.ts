import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInboxFullIcon],svg[pixelarticons-inbox-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v20H3zm2 2v10h4v2h6v-2h4V4zm14 12h-2v2H7v-2H5v4h14zM7 6h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class PixelarticonsInboxFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
