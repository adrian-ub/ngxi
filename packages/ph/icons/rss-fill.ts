import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRssFillIcon],svg[ph-rss-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a8 8 0 0 1-8-8a40 40 0 0 0-40-40a8 8 0 0 1 0-16a56.06 56.06 0 0 1 56 56a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8a72.08 72.08 0 0 0-72-72a8 8 0 0 1 0-16a88.1 88.1 0 0 1 88 88a8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8A104.11 104.11 0 0 0 72 80a8 8 0 0 1 0-16a120.13 120.13 0 0 1 120 120a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhRssFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
