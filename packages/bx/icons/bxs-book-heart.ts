import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsBookHeartIcon],svg[bx-bxs-book-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273c.112-.576.584-.717.988-.727zM8.648 7.642a2.224 2.224 0 0 1 3.125 0l.224.219l.223-.219a2.225 2.225 0 0 1 3.126 0a2.129 2.129 0 0 1 0 3.069L11.998 14l-3.349-3.289a2.128 2.128 0 0 1-.001-3.069z" fill="currentColor"></svg:path>`,
})
export class BxBxsBookHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
