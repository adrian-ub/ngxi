import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabInPrivate16RegularIcon],svg[fluent-tab-in-private-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM3 4a1 1 0 0 1 1-1h2.293L3 6.293zm0 3.707L7.707 3h2.586L3 10.293zM11.707 3H12a1 1 0 0 1 1 1v.293L4.293 13H4a1 1 0 0 1-1-1v-.293zM13 5.707v2.586L8.293 13H5.707zm0 4V12a1 1 0 0 1-1 1H9.707z"></svg:path>`,
})
export class FluentTabInPrivate16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
