import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronUpEnd6Icon],svg[fluent-mdl2-chevron-up-end-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 783l1017 1016l-242 242l-775-776l-775 776L7 1799zM2048 0v341H0V0z"></svg:path>`,
})
export class FluentMdl2ChevronUpEnd6Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
