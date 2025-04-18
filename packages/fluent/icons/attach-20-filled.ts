import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAttach20FilledIcon],svg[fluent-attach-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.28 10.609l5.304-5.304a2.75 2.75 0 1 1 3.889 3.89l-6.364 6.364A1.25 1.25 0 1 1 6.34 13.79l5.657-5.657a.75.75 0 0 0-1.06-1.06L5.28 12.73a2.75 2.75 0 0 0 3.89 3.89l6.363-6.365a4.25 4.25 0 0 0-6.01-6.01L4.22 9.548a.75.75 0 0 0 1.06 1.06"></svg:path>`,
})
export class FluentAttach20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
