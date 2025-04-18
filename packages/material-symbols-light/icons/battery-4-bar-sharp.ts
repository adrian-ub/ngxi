import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBattery4BarSharpIcon],svg[material-symbols-light-battery-4-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 12h6.23V5.462h-6.23zm-1 9V4.48h2.423V3h3.384v1.48h2.424V21z"></svg:path>`,
})
export class MaterialSymbolsLightBattery4BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
