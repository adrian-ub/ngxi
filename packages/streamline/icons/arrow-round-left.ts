import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundLeftIcon],svg[streamline-arrow-round-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75.5L2.25 3l2.5 2.5"></svg:path><svg:path d="M1.75 8.25A5.25 5.25 0 1 0 7 3H2.25"></svg:path></svg:g>`,
})
export class StreamlineArrowRoundLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
