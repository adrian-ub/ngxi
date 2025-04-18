import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PaddingTopIcon],svg[fluent-mdl2-padding-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1920h1920v128H0zM128 128H0V0h128zM1920 0v128h-128V0zM512 128H256V0h256zm384 0H640V0h256zm384 0h-256V0h256zm384 0h-256V0h256zM685 813l-90-90l365-365l365 365l-90 90l-211-210v1061H896V603z"></svg:path>`,
})
export class FluentMdl2PaddingTopIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
