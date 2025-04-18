import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdGroupOffSharpIcon],svg[material-symbols-light-ad-group-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.423 21.839L15.585 17H6.5V7.916L2.162 3.577l.707-.708l18.262 18.262zM3.5 20V6.616h1V19h12.385v1zm16.142-3.183L8.825 6H19.5V4H7.52v.694l-.837-.836V3H20.5v13.817z"></svg:path>`,
})
export class MaterialSymbolsLightAdGroupOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
