import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomAppBarIcon],svg[material-symbols-light-bottom-app-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM12 15.385q.598 0 .991-.394t.394-.991t-.394-.991t-.991-.393t-.991.393t-.393.991t.393.991t.991.394M5 14.5h4.692q-.269-1.096.443-1.99q.711-.895 1.865-.895t1.866.894t.442 1.991H19V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616z"></svg:path>`,
})
export class MaterialSymbolsLightBottomAppBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
