import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewCozyOutlineSharpIcon],svg[material-symbols-view-cozy-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.5V3h7.5v7.5zm2-2h3.5V5H5zM3 21v-7.5h7.5V21zm2-2h3.5v-3.5H5zm8.5-8.5V3H21v7.5zm2-2H19V5h-3.5zm-2 12.5v-7.5H21V21zm2-2H19v-3.5h-3.5zm0-3.5"></svg:path>`,
})
export class MaterialSymbolsViewCozyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
