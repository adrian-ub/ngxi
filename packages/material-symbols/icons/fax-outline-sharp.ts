import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaxOutlineSharpIcon],svg[material-symbols-fax-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V8h6v1v-5h10v5h4v11H8v1zm2-2h2v-9H4zm6-10h6V6h-6zm-2 9h12v-7H8zm1-1h4v-5H9zm-1 1v-7zm6-4h2v-2h-2zm3 0h2v-2h-2zm-3 3h2v-2h-2zm3 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsFaxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
