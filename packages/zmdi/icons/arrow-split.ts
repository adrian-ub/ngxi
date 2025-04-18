import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowSplitIcon],svg[zmdi-arrow-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 21h128v128l-49-49l-61 62l-30-30l61-62zm-85 0L79 70l113 113v180h-43V201L49 100L0 149V21z"></svg:path>`,
})
export class ZmdiArrowSplitIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
