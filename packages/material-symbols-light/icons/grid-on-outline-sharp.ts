import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGridOnOutlineSharpIcon],svg[material-symbols-light-grid-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h3.998v-3.998H5zm4.998 0h4.004v-3.998H9.998zm5.004 0H19v-3.998h-3.998zM5 14.002h3.998V9.998H5zm4.998 0h4.004V9.998H9.998zm5.004 0H19V9.998h-3.998zM5 8.998h3.998V5H5zm4.998 0h4.004V5H9.998zm5.004 0H19V5h-3.998z"></svg:path>`,
})
export class MaterialSymbolsLightGridOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
