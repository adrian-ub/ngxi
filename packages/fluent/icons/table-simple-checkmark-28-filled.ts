import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleCheckmark28FilledIcon],svg[fluent-table-simple-checkmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3h6.5v10.25H3v-6.5A3.75 3.75 0 0 1 6.75 3M3 14.75h10.25V25h-6.5A3.75 3.75 0 0 1 3 21.25zm11.75 0V25h6.5A3.75 3.75 0 0 0 25 21.25v-6.5zm0-11.75v10.25H25v-6.5A3.75 3.75 0 0 0 21.25 3zm8.028 15.78l-3 3a.75.75 0 0 1-1.06 0l-1.498-1.498a.75.75 0 0 1 1.06-1.06l.968.967l2.47-2.47a.75.75 0 0 1 1.06 1.061"></svg:path>`,
})
export class FluentTableSimpleCheckmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
