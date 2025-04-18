import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineStartArrowOutlineIcon],svg[material-symbols-line-start-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12"></svg:path>`,
})
export class MaterialSymbolsLineStartArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
