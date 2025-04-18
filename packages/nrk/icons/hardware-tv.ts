import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareTvIcon],svg[nrk-hardware-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.991 3H23.01q-.04 8 0 16H.99q.04-8 0-16m2 14h18.02a603 603 0 0 1 0-12H2.99q.06 6 0 12M18 21H6v2h12z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
