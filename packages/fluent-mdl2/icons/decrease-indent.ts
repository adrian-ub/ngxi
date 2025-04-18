import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DecreaseIndentIcon],svg[fluent-mdl2-decrease-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h1792v128H128zm0 1664v-128h1792v128zM1152 768V640h768v128zm0 512v-128h768v128zM317 643l90 90l-163 163h646v128H244l163 163l-90 90L0 960z"></svg:path>`,
})
export class FluentMdl2DecreaseIndentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
