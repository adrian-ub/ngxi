import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneAddNewApp24RegularIcon],svg[fluent-phone-add-new-app-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zM13.75 2A2.25 2.25 0 0 1 16 4.25v6.924a6.455 6.455 0 0 0-1.5.558V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75l5.483.001c.287.551.651 1.056 1.077 1.5L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h7.5zm3.75 12l-.09.007a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008l.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14zm-8.751 3.504L11 17.499c0 .517.06 1.02.174 1.5l-2.423.005a.75.75 0 0 1-.002-1.5z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentPhoneAddNewApp24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
