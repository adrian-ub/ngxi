import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignalOffIcon],svg[pixelarticons-cellular-signal-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v2h2v2H2v2h2V6h2v2h2V6H6V4h2V2H6v2H4zm12 2v16h6V4zm2 2h2v12h-2zm-9 4v10h6V10zm2 8v-6h2v6zm-3-4v6H2v-6zm-2 4v-2H4v2z"></svg:path>`,
})
export class PixelarticonsCellularSignalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
