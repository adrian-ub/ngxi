import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DecreaseIndentTextIcon],svg[fluent-mdl2-decrease-indent-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 640v128h-768V640zm0 512v128h-768v-128zm-768-768h1024v128H1024zm0 640V896h1024v128zm0 512v-128h1024v128z"></svg:path>`,
})
export class FluentMdl2DecreaseIndentTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
