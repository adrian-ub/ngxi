import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeElixirIcon],svg[material-icon-theme-elixir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9575cd" d="M12.173 22.681c-3.86 0-6.99-3.64-6.99-8.13c0-3.678 2.773-8.172 4.916-10.91c1.014-1.296 2.93-2.322 2.93-2.322s-.982 5.239 1.683 7.319c2.366 1.847 4.106 4.25 4.106 6.363c0 4.232-2.784 7.68-6.645 7.68"></svg:path>`,
})
export class MaterialIconThemeElixirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
