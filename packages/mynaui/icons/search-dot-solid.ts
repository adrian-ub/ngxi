import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchDotSolidIcon],svg[mynaui-search-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 11.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M3.25 11.5a8.25 8.25 0 0 0 13.515 6.352l2.678 2.678a.75.75 0 0 0 1.06-1.06l-2.675-2.676A8.25 8.25 0 1 0 3.25 11.5m8.25-2.75a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"></svg:path></svg:g>`,
})
export class MynauiSearchDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
