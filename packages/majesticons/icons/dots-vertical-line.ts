import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsVerticalLineIcon],svg[majesticons-dots-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm-1-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0zm1 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm-1-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0z"></svg:path></svg:g>`,
})
export class MajesticonsDotsVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
