import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCoinEuroIcon],svg[tabler-coin-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M14.401 8c-.669-.628-1.5-1-2.401-1c-2.21 0-4 2.239-4 5s1.79 5 4 5c.9 0 1.731-.372 2.4-1M7 10.5h4m-4 3h4"></svg:path></svg:g>`,
})
export class TablerCoinEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
