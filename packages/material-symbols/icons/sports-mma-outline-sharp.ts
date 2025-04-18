import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaOutlineSharpIcon],svg[material-symbols-sports-mma-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm1.65-2h8.7l.65-3.4V10h-2V5H7v5.6zM8 10h6V7H8zm4-.5"></svg:path>`,
})
export class MaterialSymbolsSportsMmaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
