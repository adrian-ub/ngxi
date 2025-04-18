import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileOffOutlineSharpIcon],svg[material-symbols-mobile-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L.7 3.5l1.4-1.4l19.8 19.8zM5 6.425l2 2V18h9.6l2.4 2.4V23H5zM7 20v1h10v-1zM8.825 6L6.85 4H17V3H5.85l-.7-.7V1H19v15.15l-2-2V6zm2.6-2"></svg:path>`,
})
export class MaterialSymbolsMobileOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
