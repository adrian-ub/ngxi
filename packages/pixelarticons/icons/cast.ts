import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCastIcon],svg[pixelarticons-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h18v18h-8v-2h6V5H4v4H2V3zm0 16H2v2h2zm-2-4h4v2H2zm8-4H2v2h8v8h2V11zm-4 4h2v6H6z"></svg:path>`,
})
export class PixelarticonsCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
