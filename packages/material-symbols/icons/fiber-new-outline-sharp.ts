import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberNewOutlineSharpIcon],svg[material-symbols-fiber-new-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V4h22v16zm2-2h18V6H3zm.5-3h1.25v-3.5L7.3 15h1.2V9H7.25v3.5L4.75 9H3.5zm6 0h4v-1.25H11v-1.1h2.5V11.4H11v-1.15h2.5V9h-4zm5 0h6V9h-1.25v4.5h-1.1V10H16.9v3.5h-1.15V9H14.5zM3 18V6z"></svg:path>`,
})
export class MaterialSymbolsFiberNewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
