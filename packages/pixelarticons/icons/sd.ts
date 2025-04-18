import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSdIcon],svg[pixelarticons-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h2v20H4V6h2v14h12V4H8V2zM8 4H6v2h2zm6 2h2v4h-2zm-2 0h-2v4h2z"></svg:path>`,
})
export class PixelarticonsSdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
