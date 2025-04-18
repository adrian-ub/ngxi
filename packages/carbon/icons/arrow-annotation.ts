import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrowAnnotationIcon],svg[carbon-arrow-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.71 12.29L7.42 6H14V4H4v9.99l2 .02v-6.6l6.29 6.29l1.42-1.41z" fill="currentColor"></svg:path><svg:path d="M28 10H18v2h10v16H12V18h-2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M19 25h2v-7h3v-2h-8v2h3v7z" fill="currentColor"></svg:path>`,
})
export class CarbonArrowAnnotationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
