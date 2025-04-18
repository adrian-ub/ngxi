import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAirplaneIcon],svg[si-glyph-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m9.264 10.32l3.52 5.48a.8.8 0 0 0 .51.199a.74.74 0 0 0 .531-.207c.389-.581-.561-4.316-1.861-8.172z"></svg:path><svg:path d="M15.613.42c-.584-.586-1.328-.525-1.828-.027l-4.08 4.064c-2.437-.776-6.846-2.275-8.51-2.275c-.232 0-.334.026-.369.037a.76.76 0 0 0-.014 1.012l6.107 4l-3.032 3.02s-2.339-.482-2.681-.527c-.477-.062-1.027.356-.002.879c1.197.609 2.599 1.317 2.599 1.317s.863 1.679 1.39 2.604c.671 1.119 1.065.576.985 0l-.348-2.515l2.884-2.992l2.829-2.819l4.026-4.011c.501-.498.626-1.183.044-1.767"></svg:path></svg:g>`,
})
export class SiGlyphAirplaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
