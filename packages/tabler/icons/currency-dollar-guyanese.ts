import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyDollarGuyaneseIcon],svg[tabler-currency-dollar-guyanese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4M10 6H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3v-6H8m9 8v-2m1-12V4"></svg:path>`,
})
export class TablerCurrencyDollarGuyaneseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
