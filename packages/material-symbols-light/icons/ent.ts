import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEntIcon],svg[material-symbols-light-ent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-3.762q-1.425-1.3-2.212-2.922T4 10.986q0-3.327 2.333-5.657T12 3q2.702 0 4.884 1.645t2.83 4.25l1.036 4.103q.1.38-.142.692q-.242.31-.646.31H18v3.385q0 .666-.475 1.14t-1.14.475H14v2h-3.304l.568-5.5H14.5v-1h-3.133l.26-2.408q.05-.586.474-.974q.423-.387 1.001-.387h3.475v-1h-3.45q-.98 0-1.687.648q-.709.648-.813 1.61L9.697 21z"></svg:path>`,
})
export class MaterialSymbolsLightEntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
