import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusPencilSharpIcon],svg[material-symbols-light-stylus-pencil-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.923 15.308L11.346 4h1.289l4.423 11.308zM5 20l.827-2.308h12.346L19 20z"></svg:path>`,
})
export class MaterialSymbolsLightStylusPencilSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
