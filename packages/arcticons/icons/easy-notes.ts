import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEasyNotesIcon],svg[arcticons-easy-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.075 40.182l-4.017 2.16c-.947.508-2.07-.278-1.916-1.342l.655-4.513a6 6 0 0 1 1.019-2.57l14.254-20.36a1.41 1.41 0 0 1 1.967-.346l4.011 2.809c.64.447.794 1.328.347 1.967L18.141 38.346a6 6 0 0 1-2.066 1.836"></svg:path><svg:rect width="7.722" height="6.277" x="29.603" y="6.592" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.412" ry="1.412" transform="rotate(-145 33.464 9.731)"></svg:rect>`,
})
export class ArcticonsEasyNotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
