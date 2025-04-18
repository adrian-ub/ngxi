import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackToTabIcon],svg[material-symbols-light-back-to-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.525 12.239L4 6.714v3.902H3V5h5.616v1H4.689l5.55 5.525zM4.615 19q-.69 0-1.153-.462T3 17.384V13h1v4.385q0 .269.173.442t.443.173h7.153v1zM20 12.77V6.615q0-.27-.173-.443T19.385 6H11V5h8.385q.69 0 1.153.463T21 6.616v6.153zm1 2.384V19h-6.846v-3.846z"></svg:path>`,
})
export class MaterialSymbolsLightBackToTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
