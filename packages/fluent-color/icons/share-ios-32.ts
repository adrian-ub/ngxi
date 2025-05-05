import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShareIos32Icon],svg[fluent-color-share-ios-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShareIos320)" d="M16.884 2.366a1.25 1.25 0 0 0-1.768 0l-7.75 7.75a1.25 1.25 0 0 0 1.768 1.768l5.616-5.616V20.75a1.25 1.25 0 1 0 2.5 0V6.268l5.616 5.616a1.25 1.25 0 0 0 1.768-1.768zM5.5 16.25a1.25 1.25 0 1 0-2.5 0v8.25A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-8.25a1.25 1.25 0 1 0-2.5 0v8.25a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2z"></svg:path><svg:defs><svg:radialgradient id="fluentColorShareIos320" cx="0" cy="0" r="1" gradientTransform="rotate(51.233 5.676 -2.753)scale(46.3543 39.1607)" gradientUnits="userSpaceOnUse"><svg:stop offset=".283" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShareIos32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
