import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignLeftLineIcon],svg[majesticons-align-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 3v18"></svg:path><svg:rect width="13" height="4" x="7" y="6" rx="2"></svg:rect><svg:rect width="9" height="4" x="7" y="14" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsAlignLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
