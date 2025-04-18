import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsVolumeBindingIcon],svg[eos-icons-volume-binding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19a6 6 0 0 1 6-6h4V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.001A2 2 0 0 0 4 21h2.349A6 6 0 0 1 6 19m8-17a1 1 0 1 1-1 1a1 1 0 0 1 1-1M9 3a5 5 0 1 1-2 9.578V10H4.422A4.99 4.99 0 0 1 9 3M4 2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 18a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:circle cx="9" cy="8" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 18h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M18 15h-2v2h2a2 2 0 0 1 0 4h-2v2h2a4 4 0 0 0 0-8m-4 6h-2a2 2 0 0 1 0-4h2v-2h-2a4 4 0 0 0 0 8h2Z"></svg:path>`,
})
export class EosIconsVolumeBindingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
