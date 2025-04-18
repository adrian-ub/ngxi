import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShieldProhibited20FilledIcon],svg[fluent-shield-prohibited-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.277 2.084a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0l.072-.028A5.5 5.5 0 1 1 17 9.257V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421m.42 13.512l4.9-4.9a3.5 3.5 0 0 0-4.9 4.9m.707.707a3.5 3.5 0 0 0 4.9-4.9zM13.5 18a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9"></svg:path>`,
})
export class FluentShieldProhibited20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
