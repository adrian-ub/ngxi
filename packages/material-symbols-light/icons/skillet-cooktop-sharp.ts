import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSkilletCooktopSharpIcon],svg[material-symbols-light-skillet-cooktop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14.346V9h12V7.371l5.848-1.975l.318.939L17 8.07v6.275zM10 20v-2.884H3v-1h8V20zm3 0v-3.884h8v1h-7V20z"></svg:path>`,
})
export class MaterialSymbolsLightSkilletCooktopSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
