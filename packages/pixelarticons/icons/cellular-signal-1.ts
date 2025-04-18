import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignal1Icon],svg[pixelarticons-cellular-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v16h6V4zm2 2h2v12h-2zm-9 4v10h6V10zm2 8v-6h2v6zm-3-4H2v6h6z"></svg:path>`,
})
export class PixelarticonsCellularSignal1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
