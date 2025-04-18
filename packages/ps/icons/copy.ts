import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCopyIcon],svg[ps-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155 304H48V176h64q27 0 45.5-19t18.5-45V48h64v85l43-42V27q0-8-7-15t-15-7H114L5 112v213q0 8 7 15t15 7h128zM133 48v64q0 8-6.5 14.5T112 133H48zm320 85H306l-23 22l-43 42l-43 43v213q0 8 7 15t15 7h234q8 0 15-7t7-15V155q0-8-7-15t-15-7m-170 86l42-43v64q0 8-6.5 14.5T304 261h-64zm149 213H240V304h64q27 0 45.5-19t18.5-45v-64h64z"></svg:path>`,
})
export class PsCopyIcon {
  readonly viewBox = input("0 0 480 496")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
