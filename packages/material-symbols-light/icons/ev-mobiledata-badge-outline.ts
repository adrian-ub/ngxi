import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEvMobiledataBadgeOutlineIcon],svg[material-symbols-light-ev-mobiledata-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zm0-1h16.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T20.385 5H3.615q-.23 0-.423.192T3 5.616v12.769q0 .23.192.423t.423.192M3 19V5zm2.885-2.5h4.884v-1H6.885v-3h2.884v-1H6.885v-3h3.884v-1H5.885zm9 0h1.076l2.693-9h-1.039l-2.192 7.23l-2.192-7.23h-1.039z"></svg:path>`,
})
export class MaterialSymbolsLightEvMobiledataBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
