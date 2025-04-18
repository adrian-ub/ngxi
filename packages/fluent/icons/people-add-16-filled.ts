import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleAdd16FilledIcon],svg[fluent-people-add-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M11.5 6a5.5 5.5 0 0 0-1.578.23a2 2 0 1 1 3.155 0A5.5 5.5 0 0 0 11.5 6M3 8h4.257A5.48 5.48 0 0 0 6 11.5q0 .501.087.977q-.279.023-.587.023c-4 0-4-2.925-4-2.925V9.5A1.5 1.5 0 0 1 3 8m13 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z"></svg:path>`,
})
export class FluentPeopleAdd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
