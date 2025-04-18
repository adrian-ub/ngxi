import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileOffSharpIcon],svg[material-symbols-mobile-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L.7 3.5l1.4-1.4l19.8 19.8zM5 6.425l2 2V18h9.6l2.4 2.4V23H5zM8.825 6L5.15 2.3V1H19v15.15l-2-2V6z"></svg:path>`,
})
export class MaterialSymbolsMobileOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
