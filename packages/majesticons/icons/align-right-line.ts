import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignRightLineIcon],svg[majesticons-align-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 3v18"></svg:path><svg:rect width="13" height="4" x="4" y="6" rx="2"></svg:rect><svg:rect width="9" height="4" x="8" y="14" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsAlignRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
