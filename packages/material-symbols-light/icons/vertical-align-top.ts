import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVerticalAlignTopIcon],svg[material-symbols-light-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V4h14v1zm6.5 15V9.608l-3.1 3.1L7.692 12L12 7.692L16.308 12l-.708.708l-3.1-3.1V20z"></svg:path>`,
})
export class MaterialSymbolsLightVerticalAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
