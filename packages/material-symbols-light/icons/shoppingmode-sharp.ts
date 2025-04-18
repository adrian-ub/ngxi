import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShoppingmodeSharpIcon],svg[material-symbols-light-shoppingmode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.667 21.671L3 13.004L12.992 3h8.693v8.692zm6.46-14.113q.425 0 .722-.292t.297-.708q0-.425-.295-.722t-.716-.297t-.715.295t-.293.716t.292.715t.708.293"></svg:path>`,
})
export class MaterialSymbolsLightShoppingmodeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
