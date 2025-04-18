import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDirectionsAltOffSharpIcon],svg[material-symbols-directions-alt-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.475 23.3L16 18.8l-4 4L1.2 12l4-4L.675 3.5L2.1 2.075l19.8 19.8zm-8.8-8.8L10.6 15.6L12 17l1.1-1.1zm7.175 1.45l-2.9-2.9L17 12l-5-5l-1.05 1.05l-2.9-2.9L12 1.2L22.8 12zM7 11v2h3.175l-2-2z"></svg:path>`,
})
export class MaterialSymbolsDirectionsAltOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
