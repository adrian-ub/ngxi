import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyShekelIcon],svg[tabler-currency-shekel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 18V6h4a4 4 0 0 1 4 4v4"></svg:path><svg:path d="M18 6v12h-4a4 4 0 0 1-4-4v-4"></svg:path></svg:g>`,
})
export class TablerCurrencyShekelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
