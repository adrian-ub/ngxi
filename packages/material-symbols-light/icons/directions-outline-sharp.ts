import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDirectionsOutlineSharpIcon],svg[material-symbols-light-directions-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5h1v-3H14v1.789L16.288 11L14 8.692V10.5H8.5zm3.5 6.877L2.623 12L12 2.623L21.377 12zM12 20l8-8l-8-8l-8 8zm0-8"></svg:path>`,
})
export class MaterialSymbolsLightDirectionsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
