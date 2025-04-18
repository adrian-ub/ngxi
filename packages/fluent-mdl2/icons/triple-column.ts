import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TripleColumnIcon],svg[fluent-mdl2-triple-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1792V256h512v1536zM256 384v1280h256V384zm512 1408V256h512v1536zM896 384v1280h256V384zm512-128h512v1536h-512zm384 1408V384h-256v1280z"></svg:path>`,
})
export class FluentMdl2TripleColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
