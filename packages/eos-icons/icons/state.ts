import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsStateIcon],svg[eos-icons-state-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v12h5V6Zm4 7h-3V7h3Zm5-12H6a2 2 0 0 0-2 2v18a2.005 2.005 0 0 0 2 2h13a2 2 0 0 0 2-2V3a2.006 2.006 0 0 0-2-2m0 20H6V3h13Z"></svg:path>`,
})
export class EosIconsStateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
