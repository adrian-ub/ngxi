import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddRowBelowIcon],svg[material-symbols-light-add-row-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.558V3h16v7.558zM4 19v-7.442h16V19h-3.138q.011-.125.017-.244t.006-.256q0-2.027-1.417-3.456T12 13.616t-3.468 1.428T7.116 18.5q0 .134.015.25t.027.25zm7.5 2v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddRowBelowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
