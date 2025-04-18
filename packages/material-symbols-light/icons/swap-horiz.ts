import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwapHorizIcon],svg[material-symbols-light-swap-horiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.308 18.98L3 14.674l4.308-4.307l.708.713l-3.095 3.094h7.387v1H4.92l3.095 3.094zm9.384-5.365l-.707-.713l3.094-3.094h-7.387v-1h7.387l-3.094-3.094l.707-.714L21 9.308z"></svg:path>`,
})
export class MaterialSymbolsLightSwapHorizIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
