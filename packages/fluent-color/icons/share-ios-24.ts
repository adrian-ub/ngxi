import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShareIos24Icon],svg[fluent-color-share-ios-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShareIos240)" d="M12.707 2.293a1 1 0 0 0-1.414 0l-5.25 5.25a1 1 0 0 0 1.414 1.414L11 5.414V15a1 1 0 1 0 2 0V5.414l3.543 3.543a1 1 0 1 0 1.414-1.414zM4 11a1 1 0 0 1 1 1v5.5A1.5 1.5 0 0 0 6.5 19h11a1.5 1.5 0 0 0 1.5-1.5V12a1 1 0 1 1 2 0v5.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5V12a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:radialgradient id="fluentColorShareIos240" cx="0" cy="0" r="1" gradientTransform="matrix(20.09406 25.43364 -21.40842 16.9139 .906 -3.246)" gradientUnits="userSpaceOnUse"><svg:stop offset=".283" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorShareIos24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
