import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConditionPointIcon],svg[carbon-condition-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 16l8-8l8 8l-8 8z"></svg:path><svg:path fill="currentColor" d="M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946M16 28.036L3.965 16L16 3.964L28.036 16Z"></svg:path>`,
})
export class CarbonConditionPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
