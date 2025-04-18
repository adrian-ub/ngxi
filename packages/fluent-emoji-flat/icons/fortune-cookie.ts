import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFortuneCookieIcon],svg[fluent-emoji-flat-fortune-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="m28.958 23.305l-.44-.43a23.1 23.1 0 0 0-11.45-6.05l-1.24-.25l-3.59 6.79l1.24.25c4.31.88 8.29 2.98 11.45 6.05l.08.09c.42.4 1.1.29 1.37-.22l2.74-5.2a.88.88 0 0 0-.16-1.03"></svg:path><svg:path fill="#D3883E" d="M17.578 23.055c1.43 1.43 3.84 1.06 4.77-.73c2.75-5.24 1.92-11.86-2.48-16.26S8.848.835 3.607 3.585c-1.79.94-2.16 3.35-.73 4.77z"></svg:path><svg:path fill="#F9C23C" d="M3.158 23.635c-1.43 1.43-1.06 3.84.73 4.77c5.24 2.75 11.86 1.92 16.26-2.48c5.36-5.36 5.42-14.02.17-19.45z"></svg:path><svg:path fill="#FFB02E" d="M3.158 23.635c-1.43 1.43-1.06 3.84.73 4.77c5.24 2.75 11.86 1.92 16.26-2.48c5.36-5.36 5.42-14.02.17-19.45z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFortuneCookieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
