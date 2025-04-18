import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlugConnected20FilledIcon],svg[fluent-plug-connected-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.446 2.445a4.04 4.04 0 0 0-5.128.481l-.3.3a1.49 1.49 0 0 0 0 2.108l3.6 3.6a1.49 1.49 0 0 0 2.107 0l.3-.3a4.04 4.04 0 0 0 .482-5.128zM7.554 8.846a1.49 1.49 0 0 0-2.107 0l-.3.3a4.04 4.04 0 0 0-.481 5.128L2.22 16.72a.75.75 0 1 0 1.06 1.06l2.446-2.446a4.04 4.04 0 0 0 5.128-.48l.3-.3a1.49 1.49 0 0 0 0-2.108z"></svg:path>`,
})
export class FluentPlugConnected20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
