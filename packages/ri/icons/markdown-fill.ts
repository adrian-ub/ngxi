import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMarkdownFillIcon],svg[ri-markdown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 12.5v-4l2 2l2-2v4h2v-7h-2l-2 2l-2-2H5v7zm11-3v-4h-2v4h-2l3 3l3-3z"></svg:path>`,
})
export class RiMarkdownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
