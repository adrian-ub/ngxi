import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApparelSharpIcon],svg[material-symbols-light-apparel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 9.277l-2.452 1.352l-1.975-3.45L7.981 4h1.827v.808q0 .883.655 1.537T12 7t1.538-.655t.654-1.537V4h1.827l5.408 3.179l-1.97 3.438L17 9.283V20H7z"></svg:path>`,
})
export class MaterialSymbolsLightApparelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
