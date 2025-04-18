import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPercentLineIcon],svg[majesticons-percent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 18L18 6"></svg:path><svg:circle cx="16.5" cy="16.5" r="2.5"></svg:circle><svg:circle cx="7.5" cy="7.5" r="2.5"></svg:circle></svg:g>`,
})
export class MajesticonsPercentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
