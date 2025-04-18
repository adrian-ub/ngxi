import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlipSharpIcon],svg[material-symbols-light-flip-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.077 5.23V4h1.23v1.23zm0 14.77v-1.23h1.23V20zm3.692-14.77V4H20v1.23zm0 14.77v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zM8.923 20H4V4h4.923v1H5v14h3.923zm2.577 3V1.385h1V23z"></svg:path>`,
})
export class MaterialSymbolsLightFlipSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
