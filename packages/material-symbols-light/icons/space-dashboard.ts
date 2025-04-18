import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpaceDashboardIcon],svg[material-symbols-light-space-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4H11.5v16zm6.884 0v-8H20v6.385q0 .69-.462 1.152T18.384 20zm0-9V4h5.885q.69 0 1.152.463T20 5.616V11z"></svg:path>`,
})
export class MaterialSymbolsLightSpaceDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
