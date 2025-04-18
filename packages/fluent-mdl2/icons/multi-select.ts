import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MultiSelectIcon],svg[fluent-mdl2-multi-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384v128H768V384zM768 768h1280v128H768zm0 384h1280v128H768zm0 384h1280v128H768zM478 990l68 68l-354 354l-178-178l68-68l110 110zm0-768l68 68l-354 354L14 466l68-68l110 110z"></svg:path>`,
})
export class FluentMdl2MultiSelectIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
