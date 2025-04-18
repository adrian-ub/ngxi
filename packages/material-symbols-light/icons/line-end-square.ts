import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndSquareIcon],svg[material-symbols-light-line-end-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.577 15.923V12.5h-9.5v-1h9.5V8.077h7.846v7.846z"></svg:path>`,
})
export class MaterialSymbolsLightLineEndSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
