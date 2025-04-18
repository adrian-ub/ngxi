import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSquareIcon],svg[streamline-rss-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M4 10.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5-4a3 3 0 0 1 3 3m-3-6a6 6 0 0 1 6 6"></svg:path></svg:g>`,
})
export class StreamlineRssSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
