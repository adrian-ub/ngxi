import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarpenterOutlineSharpIcon],svg[material-symbols-light-carpenter-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.056 22.008l-3.5-3.514l1.348-1.386l-8.15-11.65L7 2.212l13.439 13.432zm-1.458-5.614l3.614-3.569L7 3.614L5.046 5.567zm1.477 4.193l4.937-4.937l-2.112-2.136l-4.961 4.961zm-1.477-4.193l3.614-3.569z"></svg:path>`,
})
export class MaterialSymbolsLightCarpenterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
