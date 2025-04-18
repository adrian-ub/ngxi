import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMegaphone02Icon],svg[hugeicons-megaphone-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.926 4.411L8.274 7.605a2.43 2.43 0 0 1-1.617.182a8 8 0 0 0-.695-.14C4.137 7.44 3 8.884 3 10.545v.912c0 1.66 1.137 3.105 2.962 2.896a7 7 0 0 0 .695-.139a2.43 2.43 0 0 1 1.617.183l6.652 3.193c1.527.733 2.291 1.1 3.142.814c.852-.286 1.144-.899 1.728-2.125a12.17 12.17 0 0 0 0-10.556c-.584-1.226-.876-1.84-1.728-2.125c-.851-.286-1.615.08-3.142.814"></svg:path><svg:path d="M13 17v.5c0 1.284 0 1.926-.224 2.289a1.5 1.5 0 0 1-1.41.705c-.425-.038-.939-.424-1.966-1.194l-1.2-.9C7.223 17.667 7 17.222 7 16v-1.5m.5-.5V8"></svg:path></svg:g>`,
})
export class HugeiconsMegaphone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
