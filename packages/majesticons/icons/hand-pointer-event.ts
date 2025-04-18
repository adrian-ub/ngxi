import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerEventIcon],svg[majesticons-hand-pointer-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M15 15h1a4 4 0 0 1 4 4a2 2 0 0 1-2 2H8.132a2 2 0 0 1-1.715-.971l-2.194-3.657A1.566 1.566 0 0 1 5.566 14H6a2 2 0 0 1 1.6.8L10 18V9a2 2 0 1 1 4 0v5a1 1 0 0 0 1 1"></svg:path><svg:path d="M12 4V3m6 7h1M5 10h1m1.343-4.657l-.707-.707m10.021.707l.707-.707"></svg:path></svg:g>`,
})
export class MajesticonsHandPointerEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
