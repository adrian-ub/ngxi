import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlipToBackSharpIcon],svg[material-symbols-light-flip-to-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V7.692h1V19h11.308v1zm3.692-3.692v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm0-3.692v-1.23h1.231v1.23zm0-3.692V4h1.231v1.23zm3.692 11.077v-1.231h1.231v1.23zm0-11.077V4h1.232v1.23zm3.693 0V4h1.23v1.23zm0 11.077v-1.231h1.23v1.23zM18.769 5.23V4H20v1.23zm0 11.077v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightFlipToBackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
