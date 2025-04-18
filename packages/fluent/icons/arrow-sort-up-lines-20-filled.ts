import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSortUpLines20FilledIcon],svg[fluent-arrow-sort-up-lines-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17.25a.75.75 0 0 1-1.5 0V4.678l-1.447 1.579a.75.75 0 0 1-1.106-1.014l2.75-3a.75.75 0 0 1 1.106 0l2.75 3a.75.75 0 0 1-1.106 1.014L15 4.678zM2.75 16.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zM5 12.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75m3.75-2.25a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class FluentArrowSortUpLines20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
