import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCircleArrowDownIcon],svg[el-circle-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1200 600C1200 268.641 931.359 0 600 0S0 268.641 0 600s268.641 600 600 600s600-268.641 600-600m-297.141-66.656L600 987.656L297.141 533.344h163.184V212.32h279.352v321.023z"></svg:path>`,
})
export class ElCircleArrowDownIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
