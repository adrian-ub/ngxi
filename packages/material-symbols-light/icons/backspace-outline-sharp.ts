import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackspaceOutlineSharpIcon],svg[material-symbols-light-backspace-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.054 15.308l2.6-2.6l2.6 2.6l.707-.708l-2.6-2.6l2.6-2.6l-.707-.708l-2.6 2.6l-2.6-2.6l-.708.708l2.6 2.6l-2.6 2.6zM8.366 19L3 12l5.366-7H21v14zM4.25 12l4.616 6H20V6H8.866zm7.885 0"></svg:path>`,
})
export class MaterialSymbolsLightBackspaceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
