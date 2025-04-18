import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbudLeftOutlineIcon],svg[material-symbols-light-earbud-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.404 21q-.69 0-1.153-.462t-.462-1.153v-7.712H5.615q-.69 0-1.153-.462T4 10.058V6.616q0-.691.463-1.153T5.616 5h8.692v1H5.616q-.27 0-.443.173T5 6.616v3.442q0 .269.173.442t.443.173h2.173v8.712q0 .269.173.442t.442.173h1.538q.27 0 .443-.173t.173-.443v-8.711h3.75v1h-2.75v7.712q0 .69-.463 1.153T9.942 21zm5.904-7.327V3h.73q2.116 0 3.539 1.577T20 8.327t-1.423 3.76t-3.539 1.586zm1-.99q1.638-.1 2.665-1.377T19 8.327t-1.027-2.979t-2.665-1.357zm0-4.356"></svg:path>`,
})
export class MaterialSymbolsLightEarbudLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
