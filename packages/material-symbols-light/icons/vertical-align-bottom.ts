import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVerticalAlignBottomIcon],svg[material-symbols-light-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zm7-3.692L7.692 12l.708-.708l3.1 3.1V4h1v10.392l3.1-3.1l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
