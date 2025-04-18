import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRss24Icon],svg[qlementine-icons-rss-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3a1.5 1.5 0 0 0 0 3C11.96 6 18 12.04 18 19.5a1.5 1.5 0 0 0 3 0C21 10.39 13.61 3 4.5 3"></svg:path><svg:path fill="currentColor" d="M3 10.5A1.5 1.5 0 0 1 4.5 9C10.3 9 15 13.7 15 19.5a1.5 1.5 0 0 1-3 0c0-4.14-3.36-7.5-7.5-7.5A1.5 1.5 0 0 1 3 10.5"></svg:path><svg:path fill="currentColor" d="M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3"></svg:path>`,
})
export class QlementineIconsRss24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
