import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTumblrCircleIcon],svg[jam-tumblr-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.441 12.953s-.307.34-.89.34c-.584 0-.845-.34-.845-.845V9.59h1.887V7.857h-1.887V5H9.285C9.062 6.282 8.187 7.35 7 7.874V9.59h1.386v3.291c0 .457.446 2.119 2.72 2.119c1.335 0 1.888-.83 1.888-.83z"></svg:path><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class JamTumblrCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
