import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSimCardDownloadIcon],svg[ic-sharp-sim-card-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H10L4 8v14h16zm-8 15l-4-4h3V9.02L13 9v4h3z"></svg:path>`,
})
export class IcSharpSimCardDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
