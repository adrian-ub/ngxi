import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilSmallArrowRightIcon],svg[il-small-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 44q10 0 16 6l163 162q7 8 7 17t-7 16L39 407q-7 7-16 7t-16-7t-7-16t7-16l146-146L7 83q-7-7-7-17t6.5-16T23 44"></svg:path>`,
})
export class IlSmallArrowRightIcon {
  readonly viewBox = input("0 0 210 700")
  readonly width = input("0.3em")
  readonly height = input("1em")
}
