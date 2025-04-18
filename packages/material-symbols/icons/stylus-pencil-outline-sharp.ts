import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStylusPencilOutlineSharpIcon],svg[material-symbols-stylus-pencil-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 16l5-13h2l5 13zm2.9-2h6.2L12 5.975zm0 0h6.2zM4 21l1-3h14l1 3z"></svg:path>`,
})
export class MaterialSymbolsStylusPencilOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
