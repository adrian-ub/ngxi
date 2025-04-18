import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBalanceIcon],svg[arcticons-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.748 4.5v39h12.797c6.466 0 11.707-5.241 11.707-11.706h0c0-2.994-1.124-5.726-2.973-7.796c-4.169 0-6.23-3.91-9.7-3.91c-4.534 0-6.394 3.72-11.83 3.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.748 4.5h12.797c6.466 0 11.707 5.241 11.707 11.706h0c0 6.466-5.241 11.707-11.707 11.707c-5.74 0-9.012-4.105-12.797-4.105"></svg:path>`,
})
export class ArcticonsBalanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
