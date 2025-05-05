import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShareIos28Icon],svg[fluent-color-share-ios-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShareIos280)" d="M14.707 2.293a1 1 0 0 0-1.414 0l-6.75 6.75a1 1 0 0 0 1.414 1.414L13 5.414V18a1 1 0 1 0 2 0V5.414l5.043 5.043a1 1 0 0 0 1.414-1.414zM4 13a1 1 0 0 1 1 1v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a1 1 0 1 1 2 0v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:radialgradient id="fluentColorShareIos280" cx="0" cy="0" r="1" gradientTransform="matrix(24.5594 30.78805 -25.97201 20.71768 .44 -4.35)" gradientUnits="userSpaceOnUse"><svg:stop offset=".283" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShareIos28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
