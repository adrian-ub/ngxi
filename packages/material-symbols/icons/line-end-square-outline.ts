import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndSquareOutlineIcon],svg[material-symbols-line-end-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.5h7v-7h-7zm-2 2V13H2v-2h9V6.5h11v11zm5.5-5.5"></svg:path>`,
})
export class MaterialSymbolsLineEndSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
