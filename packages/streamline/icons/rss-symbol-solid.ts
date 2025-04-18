import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSymbolSolidIcon],svg[streamline-rss-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.857 1.052a1 1 0 0 1 1-1a12.09 12.09 0 0 1 12.091 12.091a1 1 0 0 1-2 0A10.09 10.09 0 0 0 1.858 2.052a1 1 0 0 1-1-1Zm1.245 8.883a1.972 1.972 0 1 0 0 3.945a1.972 1.972 0 0 0 0-3.945m-.245-5.173a1 1 0 1 0 0 2a5.38 5.38 0 0 1 5.38 5.381a1 1 0 0 0 2 0a7.38 7.38 0 0 0-7.38-7.38Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRssSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
