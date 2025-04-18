import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biArrowCounterclockwiseIcon],svg[bi-arrow-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914a.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"></svg:path><svg:path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"></svg:path></svg:g>`,
})
export class BiArrowCounterclockwiseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
