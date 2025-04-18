import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBinanceIcon],svg[arcticons-binance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 24L24 3.5L44.498 24l-20.5 20.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.503 24l6.83-6.83L17.165 24l-6.83 6.831zm13.667.007l6.83-6.83l6.83 6.83l-6.83 6.83zm13.66-.001l6.83-6.83l6.83 6.83l-6.83 6.83z"></svg:path>`,
})
export class ArcticonsBinanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
