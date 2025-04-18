import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPositionBottomLeftOutlineSharpIcon],svg[material-symbols-light-position-bottom-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 16.808h8v-2h-8zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightPositionBottomLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
