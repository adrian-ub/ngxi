import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKitchenOutlineSharpIcon],svg[material-symbols-kitchen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V5h2v3zm0 9v-5h2v5zm-4 5V2h16v20zm2-2h12v-9H6zM6 9h12V4H6z"></svg:path>`,
})
export class MaterialSymbolsKitchenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
