import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentArrowMirroredIcon],svg[fluent-mdl2-increase-indent-arrow-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 896v128h-646l163 163l-90 90l-317-317l317-317l90 90l-163 163z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentArrowMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
