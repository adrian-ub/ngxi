import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailUnread32LightIcon],svg[fluent-mail-unread-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8M6.5 5h15.375a5.5 5.5 0 0 0-.284 1H6.5A3.5 3.5 0 0 0 3 9.5v.706l13 7.222l9.332-5.185c.505.16 1.041.25 1.597.257l-10.687 5.937a.5.5 0 0 1-.486 0L3 11.35V22.5A3.5 3.5 0 0 0 6.5 26h19a3.5 3.5 0 0 0 3.5-3.5V12.125q.53-.207 1-.514V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"></svg:path>`,
})
export class FluentMailUnread32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
