import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoCameraFrontOutlineSharpIcon],svg[material-symbols-light-photo-camera-front-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm1-1h16V7h-4.011l-1.845-2H9.856L8.012 7H4zm4.692-2.884h6.616v-.166q0-.875-.88-1.355q-.878-.48-2.428-.48t-2.429.48t-.879 1.355zM12 12.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 9.5t-1.066.434Q10.5 10.367 10.5 11t.434 1.066T12 12.5"></svg:path>`,
})
export class MaterialSymbolsLightPhotoCameraFrontOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
