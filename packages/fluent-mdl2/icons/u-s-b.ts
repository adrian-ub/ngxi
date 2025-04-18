import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2USBIcon],svg[fluent-mdl2-u-s-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 256h128v128H768zm384 0v128h-128V256zm256 256q27 0 50 10t40 27t28 41t10 50v1280q0 27-10 50t-27 40t-41 28t-50 10H512q-27 0-50-10t-40-27t-28-41t-10-50V640q0-27 10-50t27-40t41-28t50-10V0h896zm-768 0h640V128H640zm768 128H512v1280h896z"></svg:path>`,
})
export class FluentMdl2USBIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
