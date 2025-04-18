import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentLegacyIcon],svg[fluent-mdl2-increase-indent-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384h1024v128H1024zm0 1152v-128h1024v128zm0-512V896h1024v128zm768-384v128h-768V640zm0 512v128h-768v-128zM483 733l90-90l317 317l-317 317l-90-90l163-163H0V896h646z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentLegacyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
