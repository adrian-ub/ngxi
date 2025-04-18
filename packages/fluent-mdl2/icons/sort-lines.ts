import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SortLinesIcon],svg[fluent-mdl2-sort-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m384 1638l163-163l90 90l-317 318L3 1565l90-90l163 163V128h128zm384-358v-128h512v128zm0-384V768h896v128zm0-512h1280v128H768z"></svg:path>`,
})
export class FluentMdl2SortLinesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
