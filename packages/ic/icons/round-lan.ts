import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLanIcon],svg[ic-round-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-1v-2c0-1.1-.9-2-2-2h-3V9h1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H8c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H8v-2h8v2h-1c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2"></svg:path>`,
})
export class IcRoundLanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
