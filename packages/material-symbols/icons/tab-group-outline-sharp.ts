import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabGroupOutlineSharpIcon],svg[material-symbols-tab-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18V2h16v16zm2-2h12V8h-7V4H8zm-6 6V6h2v14h14v2zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsTabGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
