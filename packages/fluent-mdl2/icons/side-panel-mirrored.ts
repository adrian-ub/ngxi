import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SidePanelMirroredIcon],svg[fluent-mdl2-side-panel-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1408H0V256zm-128 384h-384v896h384zM128 1536h1280V640H128zM1920 512V384H128v128z"></svg:path>`,
})
export class FluentMdl2SidePanelMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
