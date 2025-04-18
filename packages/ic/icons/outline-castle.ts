import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineCastleIcon],svg[ic-outline-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4z"></svg:path><svg:path fill="currentColor" d="M9 9h2v3H9zm4 0h2v3h-2z"></svg:path>`,
})
export class IcOutlineCastleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
