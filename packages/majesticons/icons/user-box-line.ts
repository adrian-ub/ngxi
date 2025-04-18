import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserBoxLineIcon],svg[majesticons-user-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="M17 17c0-2.21-2.239-4-5-4s-5 1.79-5 4"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="3"></svg:rect></svg:g>`,
})
export class MajesticonsUserBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
