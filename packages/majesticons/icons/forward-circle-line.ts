import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardCircleLineIcon],svg[majesticons-forward-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 15V9l5 3zm6 0V9l5 3z"></svg:path></svg:g>`,
})
export class MajesticonsForwardCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
