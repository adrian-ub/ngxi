import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineTheatersIcon],svg[ic-outline-theaters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm6 10h-4V5h4zm4-2h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class IcOutlineTheatersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
