import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwDuotoneIcon],svg[ph-currency-krw-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M50 136h52l-26 64Zm52 0h52l-26-64Zm52 0l26 64l26-64Z" opacity=".2"></svg:path><svg:path d="M240 128h-22.11l21.52-53a8 8 0 1 0-14.82-6l-24 59h-41.21l-24-59a8 8 0 0 0-14.82 0l-24 59H55.38l-24-59a8 8 0 0 0-14.82 6l21.52 53H16a8 8 0 0 0 0 16h28.61l24 59a8 8 0 0 0 14.82 0l24-59h41.24l24 59a8 8 0 0 0 14.82 0l24-59H240a8 8 0 0 0 0-16M76 178.75L61.88 144h28.24ZM113.88 128L128 93.26L142.12 128ZM180 178.75L165.88 144h28.24Z"></svg:path></svg:g>`,
})
export class PhCurrencyKrwDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
