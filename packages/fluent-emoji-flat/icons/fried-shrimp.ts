import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFriedShrimpIcon],svg[fluent-emoji-flat-fried-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF6723" d="M13.88 28.89V20.7c-1.56.6-3.65-.16-3.76-2.36c-.01-.1-.01-.2-.01-.31V5C8.87 5 7.86 6.01 7.86 7.25v4.44c0 .17-.14.31-.31.31s-.31-.14-.31-.31V7.25C7.25 6.01 6.24 5 5 5v12.93c0 7.21 3.99 10.43 9.23 11c-.11-.01-.23-.02-.35-.04"></svg:path><svg:path fill="#FFB02E" d="M18.59 2a7.08 7.08 0 0 0-7.08 7.08v1.1a5.97 5.97 0 0 0 2.81 5.07c.79.49 1.25 1.37 1.25 2.3v.63c0 1.32-.74 2.17-1.68 2.53v8.2c.67.09 1.37.13 2.08.14c6.07.02 11.02-4.92 11.02-10.99V10.4c-.01-4.64-3.77-8.4-8.4-8.4"></svg:path><svg:path fill="#FF822D" d="M17.52 7.36a1.71 1.71 0 1 1-3.42 0a1.71 1.71 0 0 1 3.42 0m-3.42 4.47a.88.88 0 1 0 0-1.76a.88.88 0 0 0 0 1.76m3.69.48a1.12 1.12 0 1 0 0-2.24a1.12 1.12 0 0 0 0 2.24"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFriedShrimpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
