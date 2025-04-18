import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCommentDollarIcon],svg[la-comment-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.586L16 29.414L19.414 26H29V6zm2 2h22v16h-8.414L16 26.586L13.414 24H5zm10 2v1.188c-1.156.417-2 1.521-2 2.814c0 1.645 1.355 3 3 3c.566 0 1 .434 1 1s-.434 1-1 1s-1-.434-1-1h-2c0 1.293.844 2.394 2 2.812V22h2v-1.188c1.156-.418 2-1.521 2-2.814c0-1.645-1.355-3-3-3c-.566 0-1-.434-1-1s.434-1 1-1s1 .434 1 1h2c0-1.293-.844-2.394-2-2.812V10z"></svg:path>`,
})
export class LaCommentDollarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
