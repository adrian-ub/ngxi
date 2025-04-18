import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FiveTileGridIcon],svg[fluent-mdl2-five-tile-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h2048v1408H0zm1024 128v512h384V384zM896 1536V384H128v1152zm512 0v-512h-384v512zm512 0v-512h-384v512zm-384-640h384V384h-384z"></svg:path>`,
})
export class FluentMdl2FiveTileGridIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
