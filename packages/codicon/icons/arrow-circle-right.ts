import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowCircleRightIcon],svg[codicon-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m8.08 5.369l2.14 2.14H4.468v1h5.68L8.08 10.574l.707.707l2.956-2.957v-.707L8.788 4.662z"></svg:path><svg:path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12m0-1A5 5 0 1 0 8 3a5 5 0 0 0 0 10"></svg:path></svg:g>`,
})
export class CodiconArrowCircleRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
