import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileRssIcon],svg[tabler-file-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"></svg:path><svg:path d="M12 17a3 3 0 0 0-3-3m6 3a6 6 0 0 0-6-6m0 6h.01"></svg:path></svg:g>`,
})
export class TablerFileRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
