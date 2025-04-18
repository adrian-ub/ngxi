import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSwipeDown24FilledIcon],svg[fluent-swipe-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v11.585l1.293-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094l-3 3a1 1 0 0 1-1.32.083l-.094-.083l-3-3a1 1 0 0 1 1.32-1.497l.094.083L11 18.585V7a1 1 0 0 1 1-1m0-4a5 5 0 0 1 2 9.584V9.872a3.5 3.5 0 1 0-4 0v1.712A5.001 5.001 0 0 1 12 2"></svg:path>`,
})
export class FluentSwipeDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
