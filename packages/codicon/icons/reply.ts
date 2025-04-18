import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconReplyIcon],svg[codicon-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.306 2.146l-4.02 4.02v.708l4.02 4.02l.708-.707L3.807 6.98H5.69c2.813 0 4.605.605 5.705 1.729c1.102 1.125 1.615 2.877 1.615 5.421v.35h1v-.35c0-2.646-.527-4.72-1.9-6.121C10.735 6.605 8.617 5.98 5.69 5.98H3.887l3.127-3.126z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconReplyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
