import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneAdd20FilledIcon],svg[fluent-phone-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.5 5.5 0 0 1-1.235-3H7.5a.5.5 0 0 1 0-1h1.522A5.5 5.5 0 0 1 14 9.022V3.5A1.5 1.5 0 0 0 12.5 2zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></svg:path>`,
})
export class FluentPhoneAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
