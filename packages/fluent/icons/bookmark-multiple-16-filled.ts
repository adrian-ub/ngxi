import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkMultiple16FilledIcon],svg[fluent-bookmark-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.654 2H10.9c1.16 0 2.1.94 2.1 2.1v8.98a1.8 1.8 0 0 0 1-1.613V4.1A3.1 3.1 0 0 0 10.9 1H6.267a1.8 1.8 0 0 0-1.613 1M4.8 3A1.8 1.8 0 0 0 3 4.8v9.7a.5.5 0 0 0 .724.446L7.5 13.06l3.777 1.887A.5.5 0 0 0 12 14.5V4.8A1.8 1.8 0 0 0 10.2 3z"></svg:path>`,
})
export class FluentBookmarkMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
