import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClosePaneMirroredIcon],svg[fluent-mdl2-close-pane-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384H0v1152h2048zm-128 128v896H640V512zM128 1408V512h384v896zm931-765L742 960l317 317l90-90l-162-163h421V896H987l162-163z"></svg:path>`,
})
export class FluentMdl2ClosePaneMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
