import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes12FilledIcon],svg[fluent-arrow-up-right-dashes-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7.25a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h3.69L6.97 3.97a.75.75 0 0 0 1.06 1.06L9.5 3.56zm-3.22-.47a.75.75 0 0 0-1.06-1.06L3.97 6.97a.75.75 0 0 0 1.06 1.06zm-3 3a.75.75 0 0 0-1.06-1.06L.97 9.97a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentArrowUpRightDashes12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
