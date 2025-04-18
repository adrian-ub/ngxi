import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderColorIcon],svg[material-symbols-light-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24v-2h20v2zm3-6.173v-2.5L16.22 4.113q.159-.16.348-.232t.378-.073q.208 0 .39.073t.349.238l1.029 1.035q.165.16.235.342t.07.39q0 .183-.07.373q-.07.189-.236.354L7.5 17.827zM16.58 7.319l1.44-1.438l-1.074-1.073l-1.438 1.438z"></svg:path>`,
})
export class MaterialSymbolsLightBorderColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
