import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderAllIcon],svg[material-symbols-light-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 20v-7.5H20V20zm0-8.5V4H20v7.5zm-8.5 0V4h7.5v7.5zM4 20v-7.5h7.5V20z"></svg:path>`,
})
export class MaterialSymbolsLightBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
