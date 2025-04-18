import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilRssInterfaceIcon],svg[uil-rss-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14a1 1 0 0 0 0 2a3 3 0 0 1 3 3a1 1 0 0 0 2 0a5 5 0 0 0-5-5m-.71 4.29a1 1 0 1 0 1.42 0a1 1 0 0 0-1.42 0M19 4H5a3 3 0 0 0-3 3a1 1 0 0 0 2 0a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M3 10a1 1 0 0 0 0 2a7 7 0 0 1 7 7a1 1 0 0 0 2 0a9 9 0 0 0-9-9"></svg:path>`,
})
export class UilRssInterfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
