import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextureSharpIcon],svg[material-symbols-texture-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.075 20.925v-1.4l16.45-16.45h1.425v1.4L4.475 20.925zM3 14.7v-2.8L11.9 3h2.8zM3 7V3h4zm14 14l4-4v4zm-7.7 0L21 9.3v2.8L12.1 21z"></svg:path>`,
})
export class MaterialSymbolsTextureSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
