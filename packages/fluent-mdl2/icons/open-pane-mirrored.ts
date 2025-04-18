import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenPaneMirroredIcon],svg[fluent-mdl2-open-pane-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384H0v1152h2048zm-128 128v896H640V512zM128 1408V512h384v896zm640-512v128h421l-162 163l90 90l317-317l-317-317l-90 90l162 163z"></svg:path>`,
})
export class FluentMdl2OpenPaneMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
