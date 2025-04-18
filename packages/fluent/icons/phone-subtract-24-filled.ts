import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneSubtract24FilledIcon],svg[fluent-phone-subtract-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2A2.25 2.25 0 0 1 16 4.25v6.924a6.5 6.5 0 0 0-5 6.326H8.75a.75.75 0 0 0 0 1.5h2.424a6.5 6.5 0 0 0 1.636 3H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm3.75 10a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3.092 5.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008h6.007l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008h-6.006z"></svg:path>`,
})
export class FluentPhoneSubtract24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
