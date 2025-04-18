import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLinkCircleLineIcon],svg[majesticons-link-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="9"></svg:rect><svg:path d="M10 9c-1 0-3 .6-3 3s2 3 3 3m4-6c1 0 3 .6 3 3s-2 3-3 3m-4-3h4"></svg:path></svg:g>`,
})
export class MajesticonsLinkCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
