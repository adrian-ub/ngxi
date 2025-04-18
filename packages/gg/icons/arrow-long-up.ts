import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpIcon],svg[gg-arrow-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.032 1.017l-4.274 4.21L9.16 6.653l1.859-1.83l-.056 18.155l2 .006l.056-18.113l1.798 1.825l1.425-1.403z"></svg:path>`,
})
export class GgArrowLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
