import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PlanViewIcon],svg[fluent-mdl2-plan-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 256v384h1920v128H128v1152H0V128h2048v128zm128 640h128v128H256zm256 0h128v128H512zm256 0h128v128H768zm256 0h128v128h-128zm256 0h128v128h-128zm256 0h128v128h-128zm256 0h128v128h-128zM256 1408h128v128H256zm256 0h128v128H512zm256 0h128v128H768zm256 0h128v128h-128zm256 0h128v128h-128zm256 0h128v128h-128zm256 0h128v128h-128zM256 1152h128v128H256zm256 0h128v128H512zm256 0h128v128H768zm256 0h128v128h-128zm256 0h128v128h-128zm256 0h128v128h-128zm256 0h128v128h-128zM256 1664h128v128H256zm256 0h128v128H512zm256 0h128v128H768zm256 0h128v128h-128zm256 0h128v128h-128z"></svg:path>`,
})
export class FluentMdl2PlanViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
