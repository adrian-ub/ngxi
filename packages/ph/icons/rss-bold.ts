import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRssBoldIcon],svg[ph-rss-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M109.74 146.26A75.53 75.53 0 0 1 132 200a12 12 0 0 1-24 0a52 52 0 0 0-52-52a12 12 0 0 1 0-24a75.5 75.5 0 0 1 53.74 22.26M56 76a12 12 0 0 0 0 24a100 100 0 0 1 100 100a12 12 0 0 0 24 0A124 124 0 0 0 56 76m121.62 2.38A170.85 170.85 0 0 0 56 28a12 12 0 0 0 0 24a147 147 0 0 1 104.65 43.35A147 147 0 0 1 204 200a12 12 0 0 0 24 0a170.85 170.85 0 0 0-50.38-121.62M60 180a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhRssBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
