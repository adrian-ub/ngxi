import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTornadoIcon],svg[material-symbols-light-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 4h18.54l-2.612 4.5H5.342zm3.186 5.5h12.169l-2.327 4H8.242zm2.9 5h6.368L12 20z"></svg:path>`,
})
export class MaterialSymbolsLightTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
