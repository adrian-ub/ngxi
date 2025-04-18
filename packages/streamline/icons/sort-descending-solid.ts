import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSortDescendingSolidIcon],svg[streamline-sort-descending-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 .75A.75.75 0 0 1 .75 0h6.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 .75M3.25 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm2 3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm5.5-6a1 1 0 0 1 1 1v9h1.5a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5A.75.75 0 0 1 8.25 10h1.5V1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSortDescendingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
