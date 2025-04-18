import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCodesandboxIconIcon],svg[logos-codesandbox-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 0v256H0V0zm-26.182 26.182H26.182v203.636h203.636z"></svg:path>`,
})
export class LogosCodesandboxIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
