import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMissedCallIcon],svg[streamline-missed-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.143 12.696a2.76 2.76 0 0 1-3.464-.381l-.39-.381a.935.935 0 0 1 0-1.308L3.944 8.99a.926.926 0 0 1 1.3 0v0a.935.935 0 0 0 1.306 0l2.598-2.597a.92.92 0 0 0 0-1.308v0a.926.926 0 0 1 0-1.299l1.645-1.645a.935.935 0 0 1 1.307 0l.381.39a2.76 2.76 0 0 1 .381 3.463a25.1 25.1 0 0 1-6.718 6.702v0Zm.791-11.539L3.67 4.421a1 1 0 0 1-1.415 0l-1.44-1.44"></svg:path><svg:path d="M4.62 1.157h2.314v2.314"></svg:path></svg:g>`,
})
export class StreamlineMissedCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
