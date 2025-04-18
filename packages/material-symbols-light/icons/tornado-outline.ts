import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTornadoOutlineIcon],svg[material-symbols-light-tornado-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 4h18.54L12 20zm1.745 1l2.033 3.5h10.984L19.525 5zm2.612 4.5l2.302 4h5.223l2.301-4zm2.88 5L12 18l2.033-3.5z"></svg:path>`,
})
export class MaterialSymbolsLightTornadoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
