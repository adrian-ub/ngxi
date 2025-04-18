import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenuIcon],svg[whh-pigpenu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M971 181L324 514l647 334q39 19 50.5 57.5t-11 73t-65.5 45t-82-9.5L55 597q-39-19-50.5-57.5T15 466q13-20 36-33q1 0 2-1t2-1L863 14q39-20 82-9.5t65.5 45t11 73T971 181"></svg:path>`,
})
export class WhhPigpenuIcon {
  readonly viewBox = input("0 0 1026 1028")
  readonly width = input("1em")
  readonly height = input("1em")
}
