import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMangaworldIcon],svg[arcticons-mangaworld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="14.835" cy="19.459" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.335" ry="5.051"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.502 19.356V36.1c1.24 5.274 16.499 7.705 20.667.193V19.374"></svg:path><svg:ellipse cx="14.854" cy="19.604" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.465" ry="2.73"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.588 17.445c-1.377 2.01-4.801.92-7.192 2.01m8.872-.269c-2.276 1.39-6.274.866-7.97 2.068M41.16 6.96L25.169 27.162M43.5 14.175L19.905 37.848"></svg:path>`,
})
export class ArcticonsMangaworldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
