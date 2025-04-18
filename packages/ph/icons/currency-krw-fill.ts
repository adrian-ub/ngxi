import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwFillIcon],svg[ph-currency-krw-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m72 120h-18.58l-14 35a8 8 0 0 1-14.86 0L128 117.54L103.43 179a8 8 0 0 1-14.86 0l-14-35H56a8 8 0 0 1 0-16h12.18L56.57 99a8 8 0 1 1 14.86-6L96 154.46L120.57 93a8 8 0 0 1 14.86 0L160 154.46L184.57 93a8 8 0 1 1 14.86 6l-11.61 29H200a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyKrwFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
