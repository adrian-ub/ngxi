import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AspectRatioIcon],svg[fluent-mdl2-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h128v128H0zm0 256h128v128H0zm0 256h128v128H0zm0 256h128v128H0zm0 512h128v128H0zM256 256h128v128H256zm0 1280h128v128H256zm1664 0h128v128h-128zM0 1280h128v128H0zm1920 0h128v128h-128zm0-256h128v128h-128zm0-256h128v128h-128zm0-256h128v128h-128zm128-256v128h-128V256zm-384 1280h128v128h-128zm0-1280h128v128h-128zm-1152 0h1024v1408H512zm128 1280h768V384H640z"></svg:path>`,
})
export class FluentMdl2AspectRatioIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
