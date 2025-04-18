import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestWakeOnPressOutlineSharpIcon],svg[material-symbols-light-nest-wake-on-press-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.23 11.962V5H21v6.962zM7.413 20l-4.835-4.833l1.067-1.078l3.645.792V5.5q0-.63.434-1.065T8.786 4t1.066.435t.436 1.065v5.116h1.081l4.99 2.201L15.116 20zm.427-1h6.428l.964-5.584l-4.192-1.876H9.29V5.496q0-.22-.138-.357T8.788 5t-.362.138t-.138.362v10.6l-4.29-.933zm0 0h6.37z"></svg:path>`,
})
export class MaterialSymbolsLightNestWakeOnPressOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
