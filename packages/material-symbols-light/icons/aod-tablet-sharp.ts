import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAodTabletSharpIcon],svg[material-symbols-light-aod-tablet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14zm3.5-1h13V6h-13zm3-6.808v-.884h7v.884zm1 3v-.884h5v.884z"></svg:path>`,
})
export class MaterialSymbolsLightAodTabletSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
