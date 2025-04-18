import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignRight16RegularIcon],svg[fluent-align-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-3.75.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 7h-6.5A1.75 1.75 0 0 1 2 5.25v-1.5C2 2.784 2.784 2 3.75 2zM11 3.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75zM10.25 9c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 14h-4.5A1.75 1.75 0 0 1 4 12.25v-1.5C4 9.784 4.784 9 5.75 9zm.75 1.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class FluentAlignRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
