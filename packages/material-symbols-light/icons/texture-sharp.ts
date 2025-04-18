import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextureSharpIcon],svg[material-symbols-light-texture-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.19 19.81v-.708L19.103 4.19h.714v.708L4.898 19.81zM4 13.526v-1.415L12.111 4h1.416zm0-7.18V4h2.346zM17.654 20L20 17.654V20zm-7.181 0L20 10.473v1.416L11.889 20z"></svg:path>`,
})
export class MaterialSymbolsLightTextureSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
