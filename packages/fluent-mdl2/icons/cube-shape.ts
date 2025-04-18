import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CubeShapeIcon],svg[fluent-mdl2-cube-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 569v1038l-832 417l-832-417V569l832-417zM960 296L335 608l625 312l625-312zM256 1528l640 321v-817L256 711zm1408 0V711l-640 321v817z"></svg:path>`,
})
export class FluentMdl2CubeShapeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
