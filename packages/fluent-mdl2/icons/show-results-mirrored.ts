import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShowResultsMirroredIcon],svg[fluent-mdl2-show-results-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1792v-128H0v128zm384-1408V256h-128v128zm0 1024v-128h-128v128zm-384 0v-128H0v128zm0-1152H0v128h1664zm0 512V640H0v128z"></svg:path>`,
})
export class FluentMdl2ShowResultsMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
