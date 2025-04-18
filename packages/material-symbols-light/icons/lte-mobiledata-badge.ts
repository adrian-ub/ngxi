import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLteMobiledataBadgeIcon],svg[material-symbols-light-lte-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zm1.538-4.5h4v-1h-3v-6h-1zm5.577 0h1v-6h2v-1h-5v1h2zm4.769 0h4v-1h-3v-2h2v-1h-2v-2h3v-1h-4z"></svg:path>`,
})
export class MaterialSymbolsLightLteMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
