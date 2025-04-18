import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabDuplicateSharpIcon],svg[material-symbols-light-tab-duplicate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.712 17.308V3H21v14.308zM6.692 21v-1.23h1.231V21zM4.231 6.23H3V5h1.23zM10.385 21v-1.23h1.23V21zm3.692 0v-1.23h1.23V21zM3 21v-1.23h1.23V21zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm14.77 9.846H19V21h-1.23zM13.384 7.192H20V4h-6.615z"></svg:path>`,
})
export class MaterialSymbolsLightTabDuplicateSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
