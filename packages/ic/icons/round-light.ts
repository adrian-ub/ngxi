import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLightIcon],svg[ic-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.06V4c0-.55-.45-1-1-1s-1 .45-1 1v2.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01c0-4.62-3.5-8.43-8-8.93M12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7z"></svg:path>`,
})
export class IcRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
