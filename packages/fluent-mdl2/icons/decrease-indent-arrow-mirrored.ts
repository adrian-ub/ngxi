import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DecreaseIndentArrowMirroredIcon],svg[fluent-mdl2-decrease-indent-arrow-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1731 643l317 317l-317 317l-90-90l163-163h-646V896h646l-163-163z"></svg:path>`,
})
export class FluentMdl2DecreaseIndentArrowMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
