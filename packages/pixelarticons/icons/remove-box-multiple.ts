import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRemoveBoxMultipleIcon],svg[pixelarticons-remove-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v14h14V3zm10 2v10H5V5zm4 2v12H7v2h14V7zm-6 2H7v2h6z"></svg:path>`,
})
export class PixelarticonsRemoveBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
