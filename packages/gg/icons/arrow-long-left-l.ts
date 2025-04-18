import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftLIcon],svg[gg-arrow-long-left-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.208 7.757L.97 12.003l4.246 4.24l1.413-1.416l-1.819-1.815l16.214.018l-.004 2l2 .004l.012-6l-2-.004l-.006 2.989l.001-.99l-16.24-.018l1.838-1.84z"></svg:path>`,
})
export class GgArrowLongLeftLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
