import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndSquareOutlineIcon],svg[material-symbols-light-line-end-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.577 14.923h5.846V9.077h-5.846zm-1 1V12.5h-9.5v-1h9.5V8.077h7.846v7.846zM16.5 12"></svg:path>`,
})
export class MaterialSymbolsLightLineEndSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
