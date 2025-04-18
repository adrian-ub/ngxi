import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenxIcon],svg[whh-pigpenx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.79 385q53 0 90.5 37.5t37.5 91t-37.5 91t-90.5 37.5t-90.5-37.5t-37.5-91t37.5-91t90.5-37.5m842 212l-808 416q-38 20-81 9.5t-65.5-45t-11-72.5t50.5-58l646-333l-646-334q-39-19-50.5-57.5t11-73t65.5-45t81 9.5l808 416l2 2l2 1q23 13 36 33q22 34 10.5 72.5t-50.5 58.5"></svg:path>`,
})
export class WhhPigpenxIcon {
  readonly viewBox = input("0 0 1026 1027")
  readonly width = input("1em")
  readonly height = input("1em")
}
