import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMobageIcon],svg[ls-mobage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M654 252C769 110 632 0 632 0s34 107-55 147c-61-57-144-91-234-91C154 56 0 209 0 397c0 190 154 343 343 343c190 0 344-153 344-343c0-51-12-101-33-145m-98 206c-27 92-111 159-213 159c-121 0-220-98-220-220c0-99 66-182 157-210c-6 20-9 40-9 62c0 121 98 219 220 219c22 0 44-3 65-10"></svg:path>`,
})
export class LsMobageIcon {
  readonly viewBox = input("0 0 700 740")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
