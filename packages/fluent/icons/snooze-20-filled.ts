import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSnooze20FilledIcon],svg[fluent-snooze-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 4a.75.75 0 0 0 0 1.5h3.883l-4.455 5.265A.75.75 0 0 0 10.75 12h5.5a.75.75 0 0 0 0-1.5h-3.883l4.456-5.266A.75.75 0 0 0 16.25 4zm-7 6a.75.75 0 0 0 0 1.5h1.967l-2.559 3.29A.75.75 0 0 0 3.75 16h3.5a.75.75 0 0 0 0-1.5H5.283l2.559-3.29A.75.75 0 0 0 7.25 10z"></svg:path>`,
})
export class FluentSnooze20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
