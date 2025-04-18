import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVerticalAlignCenterIcon],svg[material-symbols-light-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21v-5.2l-2.1 2.1l-.708-.708L12 13.885l3.308 3.307l-.708.708l-2.1-2.1V21zM5 12.5v-1h14v1zm7-2.384L8.692 6.808L9.4 6.1l2.1 2.1V3h1v5.2l2.1-2.1l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
