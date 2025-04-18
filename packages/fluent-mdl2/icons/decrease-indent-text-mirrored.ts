import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DecreaseIndentTextMirroredIcon],svg[fluent-mdl2-decrease-indent-text-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1280v-128h768v128zM0 1536v-128h1024v128zM0 384h1024v128H0zm0 640V896h1024v128zm256-256V640h768v128z"></svg:path>`,
})
export class FluentMdl2DecreaseIndentTextMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
