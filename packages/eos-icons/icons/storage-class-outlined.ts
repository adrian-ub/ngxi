import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsStorageClassOutlinedIcon],svg[eos-icons-storage-class-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 18l-2.4 3.2a1.82 1.82 0 0 1-1.6.8h-7a1.003 1.003 0 0 1-1-1v-6a1.003 1.003 0 0 1 1-1h7a2.09 2.09 0 0 1 1.6.8ZM21 6H3V2h18ZM2 1v6h20V1"></svg:path><svg:path fill="currentColor" d="M4 3h2v2H4zM3 14v-4h18v3.33l1 1.337V9H2v6h7v-1z"></svg:path><svg:path fill="currentColor" d="M4 11h2v2H4zm0 8h2v2H4z"></svg:path><svg:path fill="currentColor" d="M3 22v-4h6v-1H2v6h7v-1z"></svg:path>`,
})
export class EosIconsStorageClassOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
