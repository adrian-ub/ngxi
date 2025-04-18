import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathSymbolsIcon],svg[tabler-math-symbols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18m-9-9v18m4.5-16.5l3 3m0-3l-3 3M6 4v4M4 6h4m10 10h.01M18 20h.01M4 18h4"></svg:path>`,
})
export class TablerMathSymbolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
