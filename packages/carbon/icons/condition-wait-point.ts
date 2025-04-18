import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConditionWaitPointIcon],svg[carbon-condition-wait-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 16l8-8l8 8l-8 8z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class CarbonConditionWaitPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
