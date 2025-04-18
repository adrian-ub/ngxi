import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRss16Icon],svg[qlementine-icons-rss-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0 0 2a9 9 0 0 1 9 9a1 1 0 0 0 2 0C14 6.92 9.08 2 3 2"></svg:path><svg:path fill="currentColor" d="M2 7a1 1 0 0 1 1-1c3.87 0 7 3.13 7 7a1 1 0 0 1-2 0c0-2.76-2.24-5-5-5a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" d="M6 12a2 2 0 1 1-4.001.001A2 2 0 0 1 6 12"></svg:path>`,
})
export class QlementineIconsRss16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
