import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle20RegularIcon],svg[fluent-image-circle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a7 7 0 0 0-5.288 11.587l4.236-4.168a1.5 1.5 0 0 1 2.104 0l4.236 4.168A7 7 0 0 0 10 3m0 14a6.97 6.97 0 0 0 4.58-1.706l-4.23-4.163a.5.5 0 0 0-.7 0l-4.23 4.163A6.97 6.97 0 0 0 10 17m-8-7a8 8 0 1 1 16 0a8 8 0 0 1-16 0m11-2.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m1 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentImageCircle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
