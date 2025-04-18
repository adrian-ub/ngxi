import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBattery6BarSharpIcon],svg[material-symbols-light-battery-6-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 21V4.48h2.423V3h3.384v1.48h2.424V21zm1-13.192h6.23V5.46h-6.23z"></svg:path>`,
})
export class MaterialSymbolsLightBattery6BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
