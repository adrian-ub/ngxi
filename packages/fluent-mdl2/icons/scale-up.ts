import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ScaleUpIcon],svg[fluent-mdl2-scale-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1536V512h1536v1024zm128-896v768h1280V640zm1280-384h384v384h-128V384h-256zM128 384v256H0V256h384v128zm1792 1280v-256h128v384h-384v-128zM128 1408v256h256v128H0v-384z"></svg:path>`,
})
export class FluentMdl2ScaleUpIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
