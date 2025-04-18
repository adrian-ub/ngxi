import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TimelineMatrixViewIcon],svg[fluent-mdl2-timeline-matrix-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 256v384h1920v128h-384v384h384v128h-384v384h384v128h-384v128h-128v-128H896v128H768v-128H128v128H0V128h2048v128zm640 1408v-384H128v384zm768-384H896v384h640zm0-512H896v384h640zm-1408 0v384h640V768z"></svg:path>`,
})
export class FluentMdl2TimelineMatrixViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
