import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronRightEnd6Icon],svg[fluent-mdl2-chevron-right-end-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 7l1016 1017L249 2041L7 1799l776-775L7 249zm1799-7v2048h-341V0z"></svg:path>`,
})
export class FluentMdl2ChevronRightEnd6Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
