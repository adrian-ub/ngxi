import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUnlinkIcon],svg[pixelarticons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2v16h2zM4 6h5v2H4v8h5v2H2V6zm11 0h7v12h-7v-2h5V8h-5z"></svg:path>`,
})
export class PixelarticonsUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
