import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAdGroupOutlineSharpIcon],svg[material-symbols-ad-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h12V6H8zm-2 2V2h16v16zm-4 4V6h2v14h14v2zm6-6V4z"></svg:path>`,
})
export class MaterialSymbolsAdGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
