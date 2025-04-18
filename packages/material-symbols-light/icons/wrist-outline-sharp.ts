import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWristOutlineSharpIcon],svg[material-symbols-light-wrist-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.192 20.708L6.485 16H1.692v-1H6.9l4.123 4.137l.443-.481L9.875 15.5h10.433v1H11.51l1.279 2.533zM1.692 9V8h4.292l1.989-2h11.335v1H8.406L6.4 9zm12.616 4.327v-1h8v1zm0-3.154v-1h7v1zM1.692 13.066"></svg:path>`,
})
export class MaterialSymbolsLightWristOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
