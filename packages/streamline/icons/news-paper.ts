import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNewsPaperIcon],svg[streamline-news-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 4.5V11a1.25 1.25 0 0 1-2.5 0V2.25a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0-.5.5v9a1 1 0 0 0 1 1h10.75"></svg:path><svg:path d="M8 4.25H3.5v2.5H8zm-4.5 5.5H8"></svg:path></svg:g>`,
})
export class StreamlineNewsPaperIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
