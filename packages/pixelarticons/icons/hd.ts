import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHdIcon],svg[pixelarticons-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h2v4h4V7h2v10H9v-4H5v4H3zm10 8V7h6v2h-4v6h4v2h-6zm6 0V9h2v6z"></svg:path>`,
})
export class PixelarticonsHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
