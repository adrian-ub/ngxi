import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartSquareOutlineIcon],svg[material-symbols-light-line-start-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.577 14.923h5.846V9.077H4.577zm6.846 1H3.577V8.077h7.846V11.5h9.5v1h-9.5zM7.5 12"></svg:path>`,
})
export class MaterialSymbolsLightLineStartSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
