import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableOutlineSharpIcon],svg[material-symbols-light-table-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm7.5-5.596H5V19h6.5zm1 0V19H19v-4.596zm-1-1V8.769H5v4.635zm1 0H19V8.769h-6.5zM5 7.769h14V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightTableOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
