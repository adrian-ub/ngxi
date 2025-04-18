import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronDownEnd6Icon],svg[fluent-mdl2-chevron-down-end-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1265L7 249L249 7l775 776L1799 7l242 242zm1024 442v341H0v-341z"></svg:path>`,
})
export class FluentMdl2ChevronDownEnd6Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
