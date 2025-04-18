import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightToolsPhillipsOutlineIcon],svg[material-symbols-light-tools-phillips-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-1h8v1zm0-2V9.327L11.25 5h1.5L16 9.327V18zm1-1h6v-2.886l-3-3l-3 3zm0-4.288l2.5-2.5V6.327L9 9.675zm6 0V9.675l-2.5-3.348v3.885zM15 17H9z"></svg:path>`,
})
export class MaterialSymbolsLightToolsPhillipsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
