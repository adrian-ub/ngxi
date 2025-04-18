import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSpeakerGroupIcon],svg[ic-sharp-speaker-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1H8v17.99h12zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2s-2-.89-2-2s.9-2 2-2m0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path><svg:circle cx="14" cy="12.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 5H4v18h12v-2H6z"></svg:path>`,
})
export class IcSharpSpeakerGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
