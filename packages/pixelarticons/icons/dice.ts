import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDiceIcon],svg[pixelarticons-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18V3zm14 2v14H5V5zM9 7H7v2h2zm6 0h2v2h-2zm-6 8H7v2h2zm6 0h2v2h-2zm-2-4h-2v2h2z"></svg:path>`,
})
export class PixelarticonsDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
