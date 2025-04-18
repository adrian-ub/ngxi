import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVertical24RegularIcon],svg[fluent-data-bar-vertical-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3a2.25 2.25 0 0 1 2.248 2.25v13.5a2.25 2.25 0 1 1-4.498 0V5.25A2.25 2.25 0 0 1 5.75 3m6.5 4a2.25 2.25 0 0 1 2.248 2.25v9.5a2.25 2.25 0 1 1-4.498 0v-9.5A2.25 2.25 0 0 1 12.25 7m6.5 4a2.25 2.25 0 0 1 2.248 2.25v5.5a2.25 2.25 0 1 1-4.498 0v-5.5A2.25 2.25 0 0 1 18.75 11m-13-6.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 1.498 0V5.25a.75.75 0 0 0-.749-.75m6.5 4a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 1.498 0v-9.5a.75.75 0 0 0-.749-.75m6.5 4a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.498 0v-5.5a.75.75 0 0 0-.749-.75"></svg:path>`,
})
export class FluentDataBarVertical24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
