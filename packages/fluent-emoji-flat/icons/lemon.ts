import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLemonIcon],svg[fluent-emoji-flat-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#86D72F" d="M7 2.5L2 5c.82 2.32 3.617 3.814 6.117 2.814l6-2.5C13.297 2.984 9.802 1.27 7 2.5"></svg:path><svg:path fill="#FCD53F" d="M14.924 4.6C9.52 6.507 6.69 12.45 8.592 17.87l1.253 3.558a10.38 10.38 0 0 0 8.929 6.908c.742.059 1.438.384 1.994.884c.8.721 1.948.989 3.027.605a3.04 3.04 0 0 0 1.983-2.372a3.4 3.4 0 0 1 .997-1.943c2.864-2.744 4.035-7.013 2.632-11.002l-1.252-3.558c-1.902-5.432-7.828-8.27-13.231-6.35"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLemonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
