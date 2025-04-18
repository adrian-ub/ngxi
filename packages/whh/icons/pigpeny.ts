import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenyIcon],svg[whh-pigpeny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 642q-53 0-90.5-37.5t-37.5-91t37.5-91T897 385t90.5 37.5t37.5 91t-37.5 91T897 642m73-462L324 514l646 333q39 20 50.5 58t-11 72.5t-65.5 45t-81-9.5L55 597q-39-20-50.5-58.5T15 466q13-20 36-33q1 0 2-1l2-2L863 14q38-20 81-9.5t65.5 45t11 73T970 180"></svg:path>`,
})
export class WhhPigpenyIcon {
  readonly viewBox = input("0 0 1025 1027")
  readonly width = input("1em")
  readonly height = input("1em")
}
