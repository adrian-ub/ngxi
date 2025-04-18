import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLyfpayIcon],svg[arcticons-lyfpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.764" cy="28.537" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 14.408v14.343h7.171m8.891-3.586v4.84a3.586 3.586 0 0 1-3.586 3.586h0c-.99 0-1.886-.4-2.535-1.05"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.062 19.249v5.916a3.586 3.586 0 0 1-3.586 3.586h0a3.586 3.586 0 0 1-3.585-3.586V19.25m12.064 9.501V16.918a2.51 2.51 0 0 1 2.51-2.51h0c1.235 0 2.006.366 2.535 1.05m-7.171 3.791h5.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsLyfpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
