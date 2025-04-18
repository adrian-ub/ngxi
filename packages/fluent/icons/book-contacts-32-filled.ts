import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookContacts32FilledIcon],svg[fluent-book-contacts-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 30h17a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2h18.25A1.75 1.75 0 0 0 27 24.25V6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4m10-19.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.5 6.75c0 1.868-1.571 3.75-5.5 3.75s-5.5-1.875-5.5-3.75v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"></svg:path>`,
})
export class FluentBookContacts32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
