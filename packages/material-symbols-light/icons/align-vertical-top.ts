import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignVerticalTopIcon],svg[material-symbols-light-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.692 20.5V7.058h2.039V20.5zm6.577-6V7.058h2.039V14.5zM3 4.48v-1h18v1z"></svg:path>`,
})
export class MaterialSymbolsLightAlignVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
