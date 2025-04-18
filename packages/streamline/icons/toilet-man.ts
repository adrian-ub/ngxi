import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineToiletManIcon],svg[streamline-toilet-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.65A1.886 1.886 0 1 0 7 .88a1.886 1.886 0 0 0 0 3.77"></svg:path><svg:path d="M10.3 7.952a3.3 3.3 0 0 0-6.6 0v1.414h1.414l.471 3.772h2.83l.471-3.772h1.415V7.952Z"></svg:path></svg:g>`,
})
export class StreamlineToiletManIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
