import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStyleOutlineSharpIcon],svg[material-symbols-light-style-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.321 20.3l-2.027-.946l2.027-4.389zm2.77-4.377l2.144 5.962H7.09zm4.923 5.408L6.837 7.127l9.446-3.439l5.196 14.185zM11.167 10q.425 0 .713-.288T12.167 9t-.287-.712T11.167 8t-.712.288t-.288.712t.288.713t.712.287m1.45 10l7.55-2.75L15.717 5l-7.55 2.75zM8.167 7.75L15.717 5z"></svg:path>`,
})
export class MaterialSymbolsLightStyleOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
