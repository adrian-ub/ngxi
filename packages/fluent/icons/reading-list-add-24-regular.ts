import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReadingListAdd24RegularIcon],svg[fluent-reading-list-add-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2l-.09.007a.5.5 0 0 0-.402.402L17 14.5V17h-2.502l-.09.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008l.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zm-6.481 4q.061.78.294 1.5H7a.75.75 0 0 1-.102-1.493L7 18zm.479-3q-.298.714-.422 1.5H4a.75.75 0 0 1-.102-1.493L4 15zm2.537-3a6.5 6.5 0 0 0-1.659 1.5H7a.75.75 0 0 1-.102-1.493L7 12zM6 5a2.75 2.75 0 0 1 2.55 1.717a.75.75 0 0 1-1.346.655l-.045-.091A1.25 1.25 0 1 0 6 9h11.5a.75.75 0 0 1 .102 1.493l-.102.007H6A2.75 2.75 0 0 1 6 5m14 1a.75.75 0 0 1 .102 1.493L20 7.5h-9a.75.75 0 0 1-.102-1.493L11 6z"></svg:path>`,
})
export class FluentReadingListAdd24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
