import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowMenuCloseIcon],svg[material-symbols-light-arrow-menu-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.616 15.635v-7.25L7.135 12zM13 20h1V4h-1z"></svg:path>`,
})
export class MaterialSymbolsLightArrowMenuCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
