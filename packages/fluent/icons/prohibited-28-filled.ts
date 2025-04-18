import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited28FilledIcon],svg[fluent-prohibited-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.329 6.257c-3.928-3.219-9.734-2.995-13.4.672c-3.667 3.666-3.89 9.472-.672 13.4zm1.414 1.414L7.671 21.743c3.928 3.219 9.734 2.995 13.4-.672s3.89-9.472.672-13.4M5.515 5.515c4.686-4.687 12.284-4.687 16.97 0c4.687 4.686 4.687 12.284 0 16.97c-4.686 4.687-12.284 4.687-16.97 0c-4.687-4.686-4.687-12.284 0-16.97"></svg:path>`,
})
export class FluentProhibited28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
