import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSecurityUpdateGoodSharpIcon],svg[material-symbols-light-security-update-good-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.05 14.308L8.942 12.2l.708-.708l1.4 1.4l3.55-3.55l.708.708zM6 22V2h12v20zm1-3.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightSecurityUpdateGoodSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
