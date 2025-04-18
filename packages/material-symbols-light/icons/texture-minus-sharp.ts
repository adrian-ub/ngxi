import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextureMinusSharpIcon],svg[material-symbols-light-texture-minus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.708 20H4v-.708L19.292 4h.714v.708zm5.765 0l1.143-1.142V20zM14 17.616v-1h7v1zM4 13.527v-1.415L12.111 4h1.416zm12.242.704L20 10.473v1.416l-2.342 2.342zM4 6.346V4h2.346z"></svg:path>`,
})
export class MaterialSymbolsLightTextureMinusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
