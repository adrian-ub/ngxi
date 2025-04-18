import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCircleArrowUpIcon],svg[el-circle-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1200 600c0 331.359-268.641 600-600 600S0 931.359 0 600S268.641 0 600 0s600 268.641 600 600m-297.141 66.633L600 212.32L297.141 666.633h163.184v321.023h279.352V666.633z"></svg:path>`,
})
export class ElCircleArrowUpIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
