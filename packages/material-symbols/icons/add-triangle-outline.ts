import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddTriangleOutlineIcon],svg[material-symbols-add-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21L12 2l11 19zm3.475-2h15.05L12 6zM11 18h2v-2h2v-2h-2v-2h-2v2H9v2h2zm1-3"></svg:path>`,
})
export class MaterialSymbolsAddTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
