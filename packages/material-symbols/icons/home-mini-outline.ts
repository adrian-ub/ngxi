import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeMiniOutlineIcon],svg[material-symbols-home-mini-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19q-2.9 0-4.95-2.05T2 12q0-.95.463-2.15t1.612-2.287T7.15 5.738T12 5t4.85.738t3.075 1.824t1.613 2.288T22 12q0 2.9-2.05 4.95T15 19zm.15-2h5.7q1.575 0 2.863-.837T19.6 14H4.4q.6 1.325 1.888 2.163T9.15 17M4 12h16q0-.75-.4-1.625T18.262 8.75T15.789 7.5T12 7t-3.775.5t-2.463 1.25t-1.35 1.625T4 12m8 0"></svg:path>`,
})
export class MaterialSymbolsHomeMiniOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
