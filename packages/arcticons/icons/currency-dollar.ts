import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyDollarIcon],svg[arcticons-currency-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.52 30.877c1.08 1.404 2.432 1.928 4.314 1.928h2.605a4.394 4.394 0 0 0 4.389-4.399h0a4.394 4.394 0 0 0-4.39-4.398h-2.877a4.394 4.394 0 0 1-4.39-4.399h0a4.394 4.394 0 0 1 4.39-4.398h2.605c1.882 0 3.235.523 4.313 1.927M24 34.996V13.004"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyDollarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
