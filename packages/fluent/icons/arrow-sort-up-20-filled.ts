import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSortUp20FilledIcon],svg[fluent-arrow-sort-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 3c.235 0 .452.108.59.278l2.94 2.945a.75.75 0 0 1 0 1.061a.75.75 0 0 1-1.058 0L10.5 5.566V16.25a.75.75 0 0 1-1.5 0V5.556L7.278 7.289a.75.75 0 0 1-1.059 0a.75.75 0 0 1 0-1.061L9.223 3.22A.73.73 0 0 1 9.75 3"></svg:path>`,
})
export class FluentArrowSortUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
