import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusPencilOutlineSharpIcon],svg[material-symbols-light-stylus-pencil-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.923 15.308L11.346 4h1.289l4.423 11.308zm1.458-1H15.6L12 5.128zm0 0H15.6zM5 20l.827-2.308h12.346L19 20z"></svg:path>`,
})
export class MaterialSymbolsLightStylusPencilOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
