import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignTopIcon],svg[majesticons-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4h18"></svg:path><svg:rect width="13" height="4" x="6" y="20" fill="currentColor" rx="2" transform="rotate(-90 6 20)"></svg:rect><svg:rect width="9" height="4" x="14" y="16" fill="currentColor" rx="2" transform="rotate(-90 14 16)"></svg:rect></svg:g>`,
})
export class MajesticonsAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
