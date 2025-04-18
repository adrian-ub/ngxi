import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPanoramaOutlineSharpIcon],svg[material-symbols-panorama-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h16V6H4zm2-2h12l-3.75-5l-3 4L9 12zm-2 2V6z"></svg:path>`,
})
export class MaterialSymbolsPanoramaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
