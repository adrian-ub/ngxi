import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLegendToggleIcon],svg[ic-round-legend-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1m0 2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m-4-6l4.58-3.25c.26-.19.42-.49.42-.81c0-.81-.92-1.29-1.58-.82L15 8.55L10 5L4.48 8.36c-.3.19-.48.51-.48.86c0 .78.85 1.26 1.52.85l4.4-2.68z"></svg:path>`,
})
export class IcRoundLegendToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
