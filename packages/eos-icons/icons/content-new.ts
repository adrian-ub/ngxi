import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsContentNewIcon],svg[eos-icons-content-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3Zm-3 14H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-6h-2Z"></svg:path>`,
})
export class EosIconsContentNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
