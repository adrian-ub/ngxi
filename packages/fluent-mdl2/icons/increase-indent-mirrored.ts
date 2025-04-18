import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentMirroredIcon],svg[fluent-mdl2-increase-indent-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v128H128V128zM128 1792v-128h1792v128zM896 640v128H128V640zm0 512v128H128v-128zm506-256h646v128h-646l163 163l-90 90l-317-317l317-317l90 90z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
