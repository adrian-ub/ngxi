import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronLeft8Icon],svg[fluent-mdl2-double-chevron-left-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1461 1024l581 581l-181 181l-762-762l762-762l181 181zm-443-581l-581 581l581 581l-181 181l-762-762l762-762z"></svg:path>`,
})
export class FluentMdl2DoubleChevronLeft8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
