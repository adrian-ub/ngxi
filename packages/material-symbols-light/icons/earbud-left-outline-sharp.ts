import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbudLeftOutlineSharpIcon],svg[material-symbols-light-earbud-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.789 21v-9.327H4V5h10.308v1H5v4.673h2.789V20h2.769v-9.327h3.75v1h-2.75V21zm7.519-7.327V3h.73q2.116 0 3.539 1.577T20 8.327t-1.423 3.76t-3.539 1.586zm1-.99q1.638-.1 2.665-1.377T19 8.327t-1.027-2.979t-2.665-1.357zm0-4.356"></svg:path>`,
})
export class MaterialSymbolsLightEarbudLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
