import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronUp8Icon],svg[fluent-mdl2-double-chevron-up-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 1099l762 762l-181 181l-581-581l-581 581l-181-181zm-581-81L262 837l762-762l762 762l-181 181l-581-581z"></svg:path>`,
})
export class FluentMdl2DoubleChevronUp8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
