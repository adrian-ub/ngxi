import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRMobiledataSharpIcon],svg[material-symbols-light-r-mobiledata-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V3h6v4.277H7.723L8.885 10H7.846l-1.15-2.65H4V10zm1-3.65h4V4H4z"></svg:path>`,
})
export class MaterialSymbolsLightRMobiledataSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
