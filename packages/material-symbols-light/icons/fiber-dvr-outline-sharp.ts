import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFiberDvrOutlineSharpIcon],svg[material-symbols-light-fiber-dvr-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.462 14.692H8.25l.596-.615V9.904l-.596-.596H4.462zm.884-.884v-3.616h2.616v3.616zm6.139.884h1.038l1.673-5.384h-.846l-1.346 4.258l-1.346-4.258h-.846zm3.823 0h.884v-2h1.574l.85 2h.923l-.862-2.061h1.015V9.308h-4.384zm.884-2.884v-1.616h2.616v1.616zM2 19V5h20v14zm1-1h18V6H3zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightFiberDvrOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
