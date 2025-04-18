import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookHeartIcon],svg[bx-book-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3zm3-4h13v12H5V5c0-.806.55-.988 1-1"></svg:path><svg:path fill="currentColor" d="m11.997 14l3.35-3.289a2.13 2.13 0 0 0 0-3.069a2.225 2.225 0 0 0-3.126 0l-.224.218l-.224-.219a2.224 2.224 0 0 0-3.125 0a2.13 2.13 0 0 0 0 3.069z"></svg:path>`,
})
export class BxBookHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
