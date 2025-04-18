import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomNavigationOutlineIcon],svg[material-symbols-light-bottom-navigation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM5 15.385h14v-9.77q0-.23-.192-.423T18.384 5H5.616q-.231 0-.424.192T5 5.616zm0 1v2q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-2zm0 0V19z"></svg:path>`,
})
export class MaterialSymbolsLightBottomNavigationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
