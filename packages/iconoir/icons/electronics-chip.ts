import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirElectronicsChipIcon],svg[iconoir-electronics-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 19.4V4.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6m7 .6v2.5M10 20v2.5M14 4V1.5M10 4V1.5M7 12H4.5m15 0H17M7 6.5H4.5m15 0H17m-10 11H4.5m15 0H17"></svg:path>`,
})
export class IconoirElectronicsChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
