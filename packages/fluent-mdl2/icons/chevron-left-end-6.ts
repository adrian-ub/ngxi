import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronLeftEnd6Icon],svg[fluent-mdl2-chevron-left-end-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1265 1024l776 775l-242 242L783 1024L1799 7l242 242zM0 0h341v2048H0z"></svg:path>`,
})
export class FluentMdl2ChevronLeftEnd6Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
