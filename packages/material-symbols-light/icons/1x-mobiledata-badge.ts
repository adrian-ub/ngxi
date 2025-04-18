import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight1xMobiledataBadgeIcon],svg[material-symbols-light-1x-mobiledata-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zM7.5 16.5h1v-9h-3v1h2zm4.462 0h1.077l2.211-3.752l2.212 3.752h1.115l-2.77-4.73l2.5-4.27h-1.076l-1.962 3.348L13.308 7.5h-1.116l2.52 4.308z"></svg:path>`,
})
export class MaterialSymbolsLight1xMobiledataBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
