import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsInboxAllIcon],svg[pixelarticons-inbox-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v20H3zm2 2v4h4v2h6V8h4V4zm14 6h-2v2H7v-2H5v4h14zm0 6h-2v2H7v-2H5v4h14z"></svg:path>`,
})
export class PixelarticonsInboxAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
