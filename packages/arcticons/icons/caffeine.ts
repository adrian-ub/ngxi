import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCaffeineIcon],svg[arcticons-caffeine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.765 7.132h26.117v21.765a7.62 7.62 0 0 1-7.617 7.618H13.118A7.62 7.62 0 0 1 5.5 28.897v-18.5a3.266 3.266 0 0 1 3.265-3.265"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.882 7.132h4.353a3.265 3.265 0 0 1 3.265 3.265v6.53a3.265 3.265 0 0 1-3.265 3.264h-4.353M5.5 40.868h37"></svg:path>`,
})
export class ArcticonsCaffeineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
