import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DecreaseIndentMirroredIcon],svg[fluent-mdl2-decrease-indent-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v128H128V128zM128 1792v-128h1792v128zM896 640v128H128V640zm0 512v128H128v-128zm835 125l-90-90l163-163h-646V896h646l-163-163l90-90l317 317z"></svg:path>`,
})
export class FluentMdl2DecreaseIndentMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
