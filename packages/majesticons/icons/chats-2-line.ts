import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChats2LineIcon],svg[majesticons-chats-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18.72C6.339 20.134 4.82 21 2 21c1-1 2.27-2.35 2.801-4.447C3.067 15.114 2 13.157 2 11c0-4.418 4.477-8 10-8c5.1 0 9.308 3.054 9.923 7"></svg:path><svg:path d="M16 19.889c-3.314 0-6-1.99-6-4.445S12.686 11 16 11s6 1.99 6 4.444c0 1.199-.64 2.286-1.68 3.085c.317 1.165 1.08 1.915 1.68 2.471c-1.8 0-2.716-.544-3.792-1.422c-.684.2-1.428.31-2.208.31z"></svg:path></svg:g>`,
})
export class MajesticonsChats2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
