import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BorderDashIcon],svg[fluent-mdl2-border-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128H0V0h256zm384 0H384V0h256zm384 0H768V0h256zm384 0h-256V0h256zm384 0h-256V0h256zM0 256h128v256H0zm0 384h128v256H0zm0 384h128v256H0zm0 384h128v256H0zm0 384h128v256H0zm1792 128h256v128h-256zm-384 0h256v128h-256zm-384 0h256v128h-256zm-384 0h256v128H640zm-384 0h256v128H256zm1664-384h128v256h-128zm0-384h128v256h-128zm0-384h128v256h-128zm0-384h128v256h-128zM2048 0v256h-128V0z"></svg:path>`,
})
export class FluentMdl2BorderDashIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
