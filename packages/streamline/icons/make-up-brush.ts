import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMakeUpBrushIcon],svg[streamline-make-up-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.956 5.241l3.77 3.77l-3.616 3.617a2.666 2.666 0 0 1-3.77 0v0a2.666 2.666 0 0 1 0-3.77L4.955 5.24ZM3.494 6.703l3.77 3.77M4.956 5.241l3.77 3.77l3.9-1.82a1 1 0 0 0 .285-1.613L8.39 1.056a1 1 0 0 0-1.613.285l-1.82 3.9Zm4.458-3.163L8.221 3.963m3.502.424L9.837 5.579"></svg:path>`,
})
export class StreamlineMakeUpBrushIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
