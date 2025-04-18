import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsHorizontalLineIcon],svg[majesticons-dots-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm4 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm7-2a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0z"></svg:path></svg:g>`,
})
export class MajesticonsDotsHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
