import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUserFriendsIcon],svg[la-user-friends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7c-3.3 0-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6 6 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.06 8.06 0 0 0 16 21.125a8.06 8.06 0 0 0-3.469-3.281A6 6 0 0 0 15 13c0-3.3-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4m14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"></svg:path>`,
})
export class LaUserFriendsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
