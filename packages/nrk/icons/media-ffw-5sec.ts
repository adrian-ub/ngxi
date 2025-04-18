import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaFfw5secIcon],svg[nrk-media-ffw-5sec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.99 5.85l-1.21 1.62a8 8 0 0 1 .796 10.085a8 8 0 0 1-9.72 2.801a8 8 0 0 1-4.694-8.96A8 8 0 0 1 12 5h1.58l-2.1 3h2.44l2.8-4l-2.8-4h-2.44l2.1 3H12a10 10 0 1 0 6.99 2.85"></svg:path><svg:path d="M10 15.11c.54.14 1.02.22 1.51.22c.93 0 1.43-.27 1.43-1.06c0-.75-.56-1.02-2.8-1.06l.31-3.34h3.7l-.19 1.04h-2.54l-.12 1.38c2.22.13 2.97.69 2.97 1.92c0 1.31-.91 2.12-2.73 2.12c-.51 0-.9-.06-1.42-.18z"></svg:path></svg:g>`,
})
export class NrkMediaFfw5secIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
