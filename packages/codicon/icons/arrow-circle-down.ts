import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowCircleDownIcon],svg[codicon-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m5.369 8.08l2.14 2.14V4.468h1v5.68l2.066-2.067l.707.707l-2.957 2.956h-.707L4.662 8.788z"></svg:path><svg:path d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0m-1 0A5 5 0 1 1 3 8a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class CodiconArrowCircleDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
