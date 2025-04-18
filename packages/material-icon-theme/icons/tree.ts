import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTreeIcon],svg[material-icon-theme-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7cb342" d="M4 4h10v6H4zm16 10h10v6H20zm0 8h10v6H20zm-4-4v-2h-6v-4H8v14h8v-2h-6v-6z"></svg:path>`,
})
export class MaterialIconThemeTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
