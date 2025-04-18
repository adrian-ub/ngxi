import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelOffSharpIcon],svg[material-symbols-light-label-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.733 16.248L6.6 5h9.035L21 12zM20.5 23.3L16.2 19H3V5.8L.7 3.5l.708-.708l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsLightLabelOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
