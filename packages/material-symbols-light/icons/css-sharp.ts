import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCssSharpIcon],svg[material-symbols-light-css-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.827 14.692V13h.885v.808h2.615v-1.5h-3.5v-3h4.385V11h-.885v-.808h-2.615v1.5h3.5v3zm6.404 0V13h.884v.808h2.616v-1.5h-3.5v-3h4.384V11h-.884v-.808h-2.616v1.5h3.5v3zm-12.808 0V9.308h4.385V11h-.885v-.808H4.308v3.616h2.615V13h.885v1.692z"></svg:path>`,
})
export class MaterialSymbolsLightCssSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
