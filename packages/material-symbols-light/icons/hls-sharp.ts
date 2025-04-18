import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHlsSharpIcon],svg[material-symbols-light-hls-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.308 14.692V9.308h.884v2h2.616v-2h.884v5.384h-.884v-2.5H4.192v2.5zm6.923 0V9.308h.885v4.5h2.73v.884zm5.577 0V13h.884v.808h2.616v-1.5h-3.5v-3h4.384V11h-.884v-.808h-2.616v1.5h3.5v3z"></svg:path>`,
})
export class MaterialSymbolsLightHlsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
