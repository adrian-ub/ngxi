import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextureAddSharpIcon],svg[material-symbols-light-texture-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.708 20H4v-.708L19.292 4h.714v.708zM4 13.527v-1.415L12.111 4h1.416zm0-7.18V4h2.346zm16 4.126v1.416l-.167.167q-.25-.115-.515-.205t-.557-.14zM10.473 20l1.7-1.7q.05.292.14.557t.204.514L11.89 20zM17 17.538h-3v-1h3v-3h1v3h3v1h-3v3h-1z"></svg:path>`,
})
export class MaterialSymbolsLightTextureAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
