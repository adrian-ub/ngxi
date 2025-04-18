import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyGrumpyIcon],svg[streamline-smiley-grumpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4 9.5c.448-1.428 2.15-2.3 3.85-1.904A3.07 3.07 0 0 1 10 9.5m-6-5h1.5V5m3-.5H10V5"></svg:path></svg:g>`,
})
export class StreamlineSmileyGrumpyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
