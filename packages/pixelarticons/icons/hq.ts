import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHqIcon],svg[pixelarticons-hq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v4h4V7h2v10H9v-4H5v4H3zm10 2h2v6h-2zm6 6h-4v2h8v-2h-2V9h-2V7h-4v2h4z"></svg:path>`,
})
export class PixelarticonsHqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
