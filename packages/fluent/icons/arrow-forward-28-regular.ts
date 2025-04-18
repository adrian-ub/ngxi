import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward28RegularIcon],svg[fluent-arrow-forward-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.97 6.53a.75.75 0 0 1 1.06-1.06l5.75 5.75a.75.75 0 0 1 0 1.06l-5.75 5.75a.75.75 0 1 1-1.06-1.06l4.47-4.47h-8.69a9.25 9.25 0 0 0-9.25 9.25a.75.75 0 0 1-1.5 0C3 15.813 7.813 11 13.75 11h8.69z"></svg:path>`,
})
export class FluentArrowForward28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
