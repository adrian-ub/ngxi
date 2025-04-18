import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentTextMirroredIcon],svg[fluent-mdl2-increase-indent-text-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V896h1024v128zm0 512v-128h1024v128zm256-256v-128h768v128zm0-512V640h768v128zM0 384h1024v128H0z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentTextMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
