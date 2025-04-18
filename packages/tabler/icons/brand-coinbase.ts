import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCoinbaseIcon],svg[tabler-brand-coinbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.95 22c-4.503 0-8.445-3.04-9.61-7.413s.737-8.988 4.638-11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0-7.354.013a5.25 5.25 0 0 0 0 7.393a5.185 5.185 0 0 0 7.354.013L20 19.088A9.9 9.9 0 0 1 12.95 22"></svg:path>`,
})
export class TablerBrandCoinbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
