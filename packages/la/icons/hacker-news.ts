import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHackerNewsIcon],svg[la-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4.5 4l3.5 6v5h2v-5l3.5-6h-2L16 15.281L13.5 11z"></svg:path>`,
})
export class LaHackerNewsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
