import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleBoldIcon],svg[ph-rss-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 192a12 12 0 0 1-24 0c0-77.2-62.8-140-140-140a12 12 0 0 1 0-24c90.43 0 164 73.57 164 164M64 100a12 12 0 0 0 0 24a68.07 68.07 0 0 1 68 68a12 12 0 0 0 24 0a92.1 92.1 0 0 0-92-92m4 72a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhRssSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
