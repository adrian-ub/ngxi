import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentTextIcon],svg[fluent-mdl2-increase-indent-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 640v128h-768V640zm-768-256h1024v128H1024zm768 768v128h-768v-128zm-768 384v-128h1024v128zm0-512V896h1024v128z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
