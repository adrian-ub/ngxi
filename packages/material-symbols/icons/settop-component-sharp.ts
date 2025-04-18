import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettopComponentSharpIcon],svg[material-symbols-settop-component-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17V7h20v10zm3-4h6v-2H5zm8 0h2v-2h-2zm3 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsSettopComponentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
