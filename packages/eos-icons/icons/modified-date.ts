import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsModifiedDateIcon],svg[eos-icons-modified-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3h-1V1h-2v2H7V1H5v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7.53 21H4v-3.53l9.41-9.41l3.53 3.53ZM19.72 8.81l-1.84 1.84l-3.53-3.53l1.85-1.84a.92.92 0 0 1 1.32 0l2.2 2.2a.94.94 0 0 1 0 1.33"></svg:path>`,
})
export class EosIconsModifiedDateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
