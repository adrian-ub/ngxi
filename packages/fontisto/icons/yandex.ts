import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoYandexIcon],svg[fontisto-yandex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.083 14.8L2.985 24H-.001l4.5-9.834C2.385 13.092.974 11.148.974 7.552C.969 2.518 4.159.001 7.953.001h3.858v24H9.229v-9.2H7.083zM9.23 2.18H7.852c-2.08 0-4.097 1.378-4.097 5.372c0 3.858 1.847 5.1 4.097 5.1H9.23z"></svg:path>`,
})
export class FontistoYandexIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
