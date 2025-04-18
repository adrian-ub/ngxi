import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biArrowClockwiseIcon],svg[bi-arrow-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914a.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"></svg:path><svg:path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"></svg:path></svg:g>`,
})
export class BiArrowClockwiseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
