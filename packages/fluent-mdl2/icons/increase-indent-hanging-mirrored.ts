import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentHangingMirroredIcon],svg[fluent-mdl2-increase-indent-hanging-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v128H128V128zM128 1792v-128h768v128zm0-1024V640h768v128zm0 512v-128h768v128zm1920-384v128h-646l163 163l-90 90l-317-317l317-317l90 90l-163 163z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentHangingMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
