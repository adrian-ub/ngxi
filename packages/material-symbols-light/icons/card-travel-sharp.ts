import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardTravelSharpIcon],svg[material-symbols-light-card-travel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V7h5V3.77h8V7h5v13zM9 7h6V4.77H9zm-5 9.577h16v-2.154H4z"></svg:path>`,
})
export class MaterialSymbolsLightCardTravelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
