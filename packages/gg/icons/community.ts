import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCommunityIcon],svg[gg-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 17.456a6 6 0 1 1 0-10.912a6 6 0 1 1 0 10.912m-2-1.487a4 4 0 1 1 0-7.938A5.98 5.98 0 0 0 8.5 12a5.98 5.98 0 0 0 1.5 3.969m4-7.938q.245-.03.5-.031a4 4 0 1 1-.5 7.969A5.98 5.98 0 0 0 15.5 12A5.98 5.98 0 0 0 14 8.031m-2 .846c.915.733 1.5 1.86 1.5 3.123s-.585 2.39-1.5 3.123A4 4 0 0 1 10.5 12c0-1.263.585-2.39 1.5-3.123" clip-rule="evenodd"></svg:path>`,
})
export class GgCommunityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
