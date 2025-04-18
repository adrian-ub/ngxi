import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHackerNewsSquareIcon],svg[la-hacker-news-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3l4 7v5h2v-5l4-7h-2l-3 5.25L13 10z"></svg:path>`,
})
export class LaHackerNewsSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
