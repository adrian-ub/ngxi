import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVitalSignsSharpIcon],svg[material-symbols-vital-signs-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13v-2h5.7L9 17.1l6-15.825L18.7 11H23v2h-5.7L15 6.9L9 22.725L5.3 13z"></svg:path>`,
})
export class MaterialSymbolsVitalSignsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
