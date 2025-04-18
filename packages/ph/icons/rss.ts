import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRssIcon],svg[ph-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.91 149.09A71.53 71.53 0 0 1 128 200a8 8 0 0 1-16 0a56 56 0 0 0-56-56a8 8 0 0 1 0-16a71.53 71.53 0 0 1 50.91 21.09M56 80a8 8 0 0 0 0 16a104 104 0 0 1 104 104a8 8 0 0 0 16 0A120 120 0 0 0 56 80m118.79 1.21A166.9 166.9 0 0 0 56 32a8 8 0 0 0 0 16a151 151 0 0 1 107.48 44.52A151 151 0 0 1 208 200a8 8 0 0 0 16 0a166.9 166.9 0 0 0-49.21-118.79M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhRssIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
