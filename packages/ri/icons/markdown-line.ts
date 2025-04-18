import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMarkdownLineIcon],svg[ri-markdown-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 10.5H5v-7h2l2 2l2-2h2v7h-2v-4l-2 2l-2-2zm11-3h2l-3 3l-3-3h2v-4h2z"></svg:path>`,
})
export class RiMarkdownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
