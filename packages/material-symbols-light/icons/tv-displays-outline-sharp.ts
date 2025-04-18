import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvDisplaysOutlineSharpIcon],svg[material-symbols-light-tv-displays-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.327V3h14.27v1H4v11.327zM11.52 21v-2H6.77V6.77h15.25V19h-4.77v2zm-3.75-3h13.25V7.77H7.77zm6.634-5.116"></svg:path>`,
})
export class MaterialSymbolsLightTvDisplaysOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
