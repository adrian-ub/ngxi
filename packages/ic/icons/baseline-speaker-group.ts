import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSpeakerGroupIcon],svg[ic-baseline-speaker-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8M14 3c1.1 0 2 .89 2 2s-.9 2-2 2s-2-.89-2-2s.9-2 2-2m0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path><svg:circle cx="14" cy="12.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 5H4v16a2 2 0 0 0 2 2h10v-2H6z"></svg:path>`,
})
export class IcBaselineSpeakerGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
