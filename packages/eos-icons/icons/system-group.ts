import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSystemGroupIcon],svg[eos-icons-system-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H3a2 2 0 0 0-2 2v9h2V3h14Z"></svg:path><svg:path fill="currentColor" d="M21 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5.53v1.53H11V22h6v-1.48h-1.52V19H21a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 12H7V7h14Z"></svg:path>`,
})
export class EosIconsSystemGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
