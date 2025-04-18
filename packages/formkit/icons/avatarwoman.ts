import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitAvatarwomanIcon],svg[formkit-avatarwoman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10h5c1.66 0 3 1.34 3 3v2H1v-2c0-1.66 1.34-3 3-3m0-6h5v2.5a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path fill="currentColor" d="M9.5 3.93V3.5c0-1.1-.9-2-2-2L7 1H5.5c-1.1 0-2 .9-2 2v.93c0 1.33-.53 2.6-1.46 3.54l-.54.54l.74.37c.76.38 1.67.23 2.26-.37h4c.6.6 1.51.75 2.26.37l.74-.37l-.54-.54A5 5 0 0 1 9.5 3.93"></svg:path><svg:path fill="currentColor" d="M7 1s.5 0 .5.5H7z"></svg:path>`,
})
export class FormkitAvatarwomanIcon {
  readonly viewBox = input("0 0 13 16")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
