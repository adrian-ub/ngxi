import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilterAdd20FilledIcon],svg[fluent-filter-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9.242a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 3.5V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.146-.354M9.022 5a5.6 5.6 0 0 0 .069 1.5H3.75a.75.75 0 0 1 0-1.5zm1.455 4.25a5.5 5.5 0 0 0 2.379 1.5H5.75a.75.75 0 0 1 0-1.5zm1.773 4.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentFilterAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
