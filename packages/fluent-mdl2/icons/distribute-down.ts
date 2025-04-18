import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DistributeDownIcon],svg[fluent-mdl2-distribute-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1747 1587l90 90l-365 365l-365-365l90-90l211 211v-774H512v774l211-211l90 90l-365 365l-365-365l90-90l211 211V896h512V0h128v896h512v902z"></svg:path>`,
})
export class FluentMdl2DistributeDownIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
