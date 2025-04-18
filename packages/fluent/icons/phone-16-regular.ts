import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhone16RegularIcon],svg[fluent-phone-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM5.75 1A1.75 1.75 0 0 0 4 2.75v10.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 12 13.25V2.75A1.75 1.75 0 0 0 10.25 1zM5 2.75A.75.75 0 0 1 5.75 2h4.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentPhone16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
