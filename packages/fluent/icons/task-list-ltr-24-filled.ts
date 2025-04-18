import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTaskListLtr24FilledIcon],svg[fluent-task-list-ltr-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 3.293a1 1 0 0 0-1.414 0L4 4.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414m14.296 13.7H10L9.883 17A1 1 0 0 0 10 18.993h11.003l.117-.006a1 1 0 0 0-.117-1.994m0-5.993H10l-.117.007A1 1 0 0 0 10 13h11.003l.117-.007A1 1 0 0 0 21.003 11m0-6H10l-.117.007A1 1 0 0 0 10 7h11.003l.117-.007A1 1 0 0 0 21.003 5M6.707 16.293a1 1 0 0 0-1.414 0L4 17.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414m-1.414-6.5a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414l.293.293z"></svg:path>`,
})
export class FluentTaskListLtr24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
