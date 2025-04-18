import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoffeeIcon],svg[arcticons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 6.6h29.09v22.09a7 7 0 0 1-7 7H12.5a7 7 0 0 1-7-7zm29.09 0h5.91a2 2 0 0 1 2 2v5.7a2 2 0 0 1-2 2h-5.91h0zM5.5 41.4h29.09"></svg:path>`,
})
export class ArcticonsCoffeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
