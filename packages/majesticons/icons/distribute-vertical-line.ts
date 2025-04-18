import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDistributeVerticalLineIcon],svg[majesticons-distribute-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h16M4 19h16"></svg:path><svg:rect width="10" height="4" x="7" y="10" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsDistributeVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
