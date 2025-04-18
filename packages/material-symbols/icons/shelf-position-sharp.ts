import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShelfPositionSharpIcon],svg[material-symbols-shelf-position-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-5h18v5zm13.5-7V3H21v11zM3 14V3h4.5v11zm6.5 0V3h5v11z"></svg:path>`,
})
export class MaterialSymbolsShelfPositionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
