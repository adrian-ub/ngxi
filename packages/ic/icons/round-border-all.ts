import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBorderAllIcon],svg[ic-round-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m8 14H6c-.55 0-1-.45-1-1v-5h5c.55 0 1 .45 1 1zm-1-8H5V6c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m8 8h-5v-5c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m1-8h-5c-.55 0-1-.45-1-1V5h5c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
