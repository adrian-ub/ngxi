import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle516FilledIcon],svg[fluent-number-circle-5-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m6.443-2H9.25a.5.5 0 0 0 0-1H7a.5.5 0 0 0-.496.438l-.25 2A.5.5 0 0 0 6.758 8h.003a38 38 0 0 1 1.144 0l.188.006c.708.034 1.248.719 1.15 1.418a1.25 1.25 0 0 1-2.313.464a.5.5 0 0 0-.86.51a2.25 2.25 0 1 0 2.248-3.377c-.161-.022-.582-.025-.906-.025h-.094z"></svg:path>`,
})
export class FluentNumberCircle516FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
