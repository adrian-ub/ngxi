import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextureAddSharpIcon],svg[material-symbols-texture-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 21H3v-1.4L19.6 3h1.425v1.4zM3 14.7v-2.8L11.9 3h2.8zM3 7V3h4zm18 2.3v2.8l-.475.475q-.5-.25-1.062-.387T18.3 12zM9.3 21l2.7-2.7q.05.6.188 1.163t.387 1.062L12.1 21zm7.7-2h-3v-2h3v-3h2v3h3v2h-3v3h-2z"></svg:path>`,
})
export class MaterialSymbolsTextureAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
