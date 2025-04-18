import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundRightIcon],svg[streamline-arrow-round-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.25.5l2.5 2.5l-2.5 2.5"></svg:path><svg:path d="M12.25 8.25A5.25 5.25 0 1 1 7 3h4.75"></svg:path></svg:g>`,
})
export class StreamlineArrowRoundRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
