import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GroupedDescendingIcon],svg[fluent-mdl2-grouped-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1920v-128h1536v128zm0-1792h1536v128H512v1061l293-293l91 91l-448 447L0 1115l91-91l293 293zm640 640V640h896v128zm0 384v-128h896v128zm0 384v-128h896v128z"></svg:path>`,
})
export class FluentMdl2GroupedDescendingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
