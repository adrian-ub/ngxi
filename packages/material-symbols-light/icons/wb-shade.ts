import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWbShadeIcon],svg[material-symbols-light-wb-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.25 19.23l-5.308-5.307v-1.346l6.654 6.654zm-5.308 0V17l2.231 2.23zm-9.23 0V9.617H3.404l4.538-4.539l4.539 4.539h-1.308v9.615zm1.692-4.691H9.48V9.615H6.404z"></svg:path>`,
})
export class MaterialSymbolsLightWbShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
