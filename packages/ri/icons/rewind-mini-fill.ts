import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRewindMiniFillIcon],svg[ri-rewind-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.035a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409zm1.079-4.626a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiRewindMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
