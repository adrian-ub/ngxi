import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVitalSignsSharpIcon],svg[material-symbols-light-vital-signs-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.039 12.5v-1h5.238l2.146 5.446l5.154-12.613l2.892 7.167H22v1h-5.238l-2.185-5.466l-5.173 12.614L6.569 12.5z"></svg:path>`,
})
export class MaterialSymbolsLightVitalSignsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
