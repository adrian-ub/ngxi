import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoreOutlineSharpIcon],svg[material-symbols-more-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 20l-6-8l6-8h14v16zm-3.5-8L9 18h11V6H9zM9 13h2v-2H9zm3.5 0h2v-2h-2zm3.5 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsMoreOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
