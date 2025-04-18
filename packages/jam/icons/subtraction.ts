import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSubtractionIcon],svg[jam-subtraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0a7 7 0 1 1-3 13.326A7 7 0 1 1 10 .673A7 7 0 0 1 13 0M7 2a5 5 0 1 0 1.002 9.9A6.97 6.97 0 0 1 6 7c0-1.907.763-3.637 2-4.9A5 5 0 0 0 7 2m6 0a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class JamSubtractionIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}
