import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStayCurrentLandscapeIcon],svg[material-symbols-light-stay-current-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 18q-.691 0-1.153-.462T2 16.384V7.616q0-.691.463-1.153T3.616 6h16.769q.69 0 1.153.463T22 7.616v8.769q0 .69-.462 1.153T20.385 18zM5.5 17h13V7h-13z"></svg:path>`,
})
export class MaterialSymbolsLightStayCurrentLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
