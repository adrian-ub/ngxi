import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApprovalsApp48FilledIcon],svg[fluent-approvals-app-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.44 3.44a1.5 1.5 0 0 1 2.12 0l5 5a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 0 1-2.12-2.12L23.877 11C15.65 11.067 9 17.757 9 26c0 8.284 6.716 15 15 15c7.779 0 14.175-5.921 14.926-13.502c.082-.825.746-1.498 1.574-1.498s1.507.674 1.438 1.5C41.176 36.74 33.436 44 24 44c-9.941 0-18-8.059-18-18c0-9.9 7.994-17.935 17.88-18l-2.44-2.44a1.5 1.5 0 0 1 0-2.12m11.12 19.12a1.5 1.5 0 0 0-2.12-2.12l-7.94 7.939l-2.94-2.94a1.5 1.5 0 0 0-2.12 2.122l4 4a1.5 1.5 0 0 0 2.12 0z"></svg:path>`,
})
export class FluentApprovalsApp48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
