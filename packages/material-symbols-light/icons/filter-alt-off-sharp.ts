import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterAltOffSharpIcon],svg[material-symbols-light-filter-alt-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.089 11.264L7.825 5H19.05zm5.744 9.99L13 14.42V19h-2v-6.579L2.746 4.167l.708-.713l17.092 17.092z"></svg:path>`,
})
export class MaterialSymbolsLightFilterAltOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
