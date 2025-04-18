import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpotlightIcon],svg[pixelarticons-spotlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h16v20H3V2zm14 18V4H5v16zM13 6H7v2h6zm-6 4h10v8H7z"></svg:path>`,
})
export class PixelarticonsSpotlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
