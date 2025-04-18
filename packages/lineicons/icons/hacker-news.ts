import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHackerNewsIcon],svg[lineicons-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.61 10.103v4.036h-1.278v-4.123L8.14 6.832h1.48c2.12 3.92 1.975 4.094 2.381 5.023c.493-1.103.203-.987 2.468-5.023h1.393z"></svg:path>`,
})
export class LineiconsHackerNewsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
