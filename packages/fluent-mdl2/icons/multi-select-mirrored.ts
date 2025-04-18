import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MultiSelectMirroredIcon],svg[fluent-mdl2-multi-select-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1294 384v128H14V384zm0 512H14V768h1280zm0 384H14v-128h1280zm0 384H14v-128h1280zm400-388l286-286l68 68l-354 354l-178-178l68-68zm0-768l286-286l68 68l-354 354l-178-178l68-68z"></svg:path>`,
})
export class FluentMdl2MultiSelectMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
