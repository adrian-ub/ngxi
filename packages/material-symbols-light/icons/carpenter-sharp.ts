import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCarpenterSharpIcon],svg[material-symbols-light-carpenter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.056 22.008l-3.5-3.514l1.348-1.386l-8.15-11.65L7 2.212l13.439 13.432zm.019-1.421l4.937-4.937l-2.112-2.136l-4.961 4.961z"></svg:path>`,
})
export class MaterialSymbolsLightCarpenterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
