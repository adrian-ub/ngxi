import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaSharpIcon],svg[material-symbols-sports-mma-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm2-6h6V7H8z"></svg:path>`,
})
export class MaterialSymbolsSportsMmaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
