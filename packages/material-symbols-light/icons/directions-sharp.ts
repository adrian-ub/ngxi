import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDirectionsSharpIcon],svg[material-symbols-light-directions-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5h1v-3H14v1.789L16.288 11L14 8.692V10.5H8.5zm3.5 6.877L2.623 12L12 2.623L21.377 12z"></svg:path>`,
})
export class MaterialSymbolsLightDirectionsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
