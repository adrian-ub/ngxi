import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMPesaAltIcon],svg[arcticons-m-pesa-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.401 31.79S23.24 26.3 28.426 14.752c2.696 1.66 15.074 7.745 15.074 7.745c-3.527 6.361-22.68 16.042-39 7.191c4.979-1.66 10.096-7.537 10.096-7.537c1.521 2.558 3.758 4.458 3.758 4.458"></svg:path>`,
})
export class ArcticonsMPesaAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
