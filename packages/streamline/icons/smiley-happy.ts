import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyHappyIcon],svg[streamline-smiley-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.75 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 11a3.5 3.5 0 0 0 3.5-3.5h-7A3.5 3.5 0 0 0 7 11"></svg:path></svg:g>`,
})
export class StreamlineSmileyHappyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
