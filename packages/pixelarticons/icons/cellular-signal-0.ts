import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCellularSignal0Icon],svg[pixelarticons-cellular-signal-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v16h-6V4zm-2 2h-2v12h2zm-5 4v10H9V10zm-2 8v-6h-2v6zm-5-4v6H2v-6zm-2 4v-2H4v2z"></svg:path>`,
})
export class PixelarticonsCellularSignal0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
