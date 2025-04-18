import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserLineIcon],svg[majesticons-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="8" r="5"></svg:circle><svg:path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0"></svg:path></svg:g>`,
})
export class MajesticonsUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
