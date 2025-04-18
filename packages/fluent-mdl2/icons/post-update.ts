import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PostUpdateIcon],svg[fluent-mdl2-post-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 384h1408v1152H640zm1280 1024V512H768v896zM128 1024V896h384v128zM0 768V640h512v128zm256 512v-128h256v128zm1536-640v128H896V640zm-384 640V896h384v384zm128-256v128h128v-128zm-256 128v128H896v-128zm0-256v128H896V896z"></svg:path>`,
})
export class FluentMdl2PostUpdateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
