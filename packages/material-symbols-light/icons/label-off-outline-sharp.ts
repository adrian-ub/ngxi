import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelOffOutlineSharpIcon],svg[material-symbols-light-label-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.733 16.248l-.714-.713L19.75 12l-4.615-6H7.6l-1-1h9.035L21 12zM4 18h11.2L4 6.8zm16.5 5.3L16.2 19H3V5.8L.7 3.5l.708-.708l19.8 19.8zM9.6 12.4"></svg:path>`,
})
export class MaterialSymbolsLightLabelOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
