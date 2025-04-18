import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMakeByKbankIcon],svg[arcticons-make-by-kbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.5 29.5v-3.75c0-6.075-4.925-11-11-11s-11 4.925-11 11v7.5m22-7.5a8.5 8.5 0 0 1 17 0v7.5"></svg:path>`,
})
export class ArcticonsMakeByKbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
