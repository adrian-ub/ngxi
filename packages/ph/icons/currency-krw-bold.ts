import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwBoldIcon],svg[ph-currency-krw-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-16.17l19.29-47.48a12 12 0 0 0-22.24-9l-23 56.51h-35.8l-23-56.51a12 12 0 0 0-22.24 0L93.92 124H58.08l-23-56.51a12 12 0 0 0-22.24 9L32.17 124H16a12 12 0 0 0 0 24h25.92l23 56.52a12 12 0 0 0 22.24 0l23-56.52H146l23 56.52a12 12 0 0 0 22.24 0l23-56.52H240a12 12 0 0 0 0-24M76 168.12L67.83 148h16.34ZM119.83 124l8.17-20.11l8.17 20.11ZM180 168.12L171.83 148h16.34Z"></svg:path>`,
})
export class PhCurrencyKrwBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
