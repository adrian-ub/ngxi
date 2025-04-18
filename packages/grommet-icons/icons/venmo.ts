import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVenmoIcon],svg[grommet-icons-venmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#grommetIconsVenmo0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.628-5.372 12-12 12c-6.627 0-12-5.372-12-12C0 5.373 5.373 0 12 0c6.628 0 12 5.373 12 12m-5.982-3.571c0-1-.21-1.79-.677-2.558l-4.035.814c.256.535.42 1.185.42 2.14c0 1.744-1.237 4.303-2.24 5.93L10.413 6.15l-4.431.42l2.03 12.094h5.06c2.216-2.907 4.946-7.047 4.946-10.234Z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="grommetIconsVenmo0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GrommetIconsVenmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
