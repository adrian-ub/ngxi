import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoCameraBackSharpIcon],svg[material-symbols-light-photo-camera-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm4.5-3.384h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoCameraBackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
