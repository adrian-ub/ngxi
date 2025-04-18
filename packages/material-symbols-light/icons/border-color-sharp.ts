import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderColorSharpIcon],svg[material-symbols-light-border-color-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24v-2h20v2zm3-6.173v-2.5L16.952 3.381l2.488 2.505L7.5 17.828zM16.58 7.319l1.44-1.438l-1.074-1.073l-1.438 1.438z"></svg:path>`,
})
export class MaterialSymbolsLightBorderColorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
