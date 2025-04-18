import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward24RegularIcon],svg[fluent-slash-forward-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.499 2.042a.75.75 0 0 1 .459.957l-6.5 18.5A.75.75 0 0 1 8.043 21l6.5-18.5a.75.75 0 0 1 .956-.459"></svg:path>`,
})
export class FluentSlashForward24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
