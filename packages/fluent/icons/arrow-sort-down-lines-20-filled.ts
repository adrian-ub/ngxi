import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSortDownLines20FilledIcon],svg[fluent-arrow-sort-down-lines-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2.75a.75.75 0 0 0-1.5 0v12.572l-1.447-1.579a.75.75 0 0 0-1.106 1.014l2.75 3a.75.75 0 0 0 1.106 0l2.75-3a.75.75 0 0 0-1.106-1.014L15 15.322zM2.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM5 7.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 7.25M8.75 9.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArrowSortDownLines20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
