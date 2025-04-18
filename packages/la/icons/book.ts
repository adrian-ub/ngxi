import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBookIcon],svg[la-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a3 3 0 0 0-1 .188V7c0-.566.434-1 1-1m2 3v2h11V9zM9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaBookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
