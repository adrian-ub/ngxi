import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundScreenSearchDesktopIcon],svg[ic-round-screen-search-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2m4.59-9.95a3.497 3.497 0 0 1 5.38-.52c1.18 1.18 1.34 3 .47 4.36L16 13.44c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.55-1.55c-1.57 1-3.76.64-4.87-1.11c-.73-1.14-.69-2.67.07-3.79"></svg:path><svg:circle cx="11.5" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class IcRoundScreenSearchDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
