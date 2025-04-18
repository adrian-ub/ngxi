import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderColorOutlineSharpIcon],svg[material-symbols-light-border-color-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24v-2h20v2zm4-7.173h1.073l8.8-8.794l-.532-.552l-.547-.527L6 15.754zm-1 1v-2.5L16.952 3.381l2.488 2.505L7.5 17.828zM18.02 5.881l-1.074-1.073zm-2.147 2.152l-.533-.552l-.546-.527z"></svg:path>`,
})
export class MaterialSymbolsLightBorderColorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
