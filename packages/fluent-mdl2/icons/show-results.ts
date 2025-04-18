import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShowResultsIcon],svg[fluent-mdl2-show-results-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1792v-128h1664v128zM0 384V256h128v128zm0 1024v-128h128v128zm384 0v-128h1664v128zm0-1152h1664v128H384zm0 512V640h1664v128z"></svg:path>`,
})
export class FluentMdl2ShowResultsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
