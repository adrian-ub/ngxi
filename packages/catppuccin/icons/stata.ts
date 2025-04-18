import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinStataIcon],svg[catppuccin-stata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x="1.5" y="1.5" fill="none" stroke="#7dc4e4" rx=".722" ry=".722"></svg:rect><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M3.5 12.5h6v-9h3v6h-9v-3h9v-3h-6v9zv-3"></svg:path>`,
})
export class CatppuccinStataIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
