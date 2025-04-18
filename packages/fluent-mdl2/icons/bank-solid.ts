import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BankSolidIcon],svg[fluent-mdl2-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 640v128H0V640l960-480zM256 896v512H128V896zm256 0v512H384V896zm256 0v512H640V896zm256 0v512H896V896zm256 0v512h-128V896zm256 0v512h-128V896zm256 512h-128V896h128zm0 128l128 384H0l128-384z"></svg:path>`,
})
export class FluentMdl2BankSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
