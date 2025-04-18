import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleLightIcon],svg[ph-stack-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 109.21l112 64a6 6 0 0 0 6 0l112-64a6 6 0 0 0 0-10.42l-112-64a6 6 0 0 0-6 0l-112 64a6 6 0 0 0 0 10.42m115-62.3L227.91 104L128 161.09L28.09 104ZM245.21 141a6 6 0 0 1-2.23 8.19l-112 64a6 6 0 0 1-6 0l-112-64a6 6 0 0 1 6-10.42l109 62.3l109-62.3a6 6 0 0 1 8.23 2.23"></svg:path>`,
})
export class PhStackSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
