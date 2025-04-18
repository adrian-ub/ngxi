import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSplit20RegularIcon],svg[fluent-arrow-split-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a.5.5 0 0 1 .5.5V8H13a2 2 0 0 1 2 2v5.293l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L14 15.293V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5.293l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L5 15.293V10a2 2 0 0 1 2-2h2.5V3.5A.5.5 0 0 1 10 3"></svg:path>`,
})
export class FluentArrowSplit20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
