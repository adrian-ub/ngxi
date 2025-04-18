import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SixPointStarIcon],svg[fluent-mdl2-six-point-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1648 1024l307 512h-615l-316 514l-316-514H93l306-511L76 512h632L1024-2l316 514h615zm-149 0l230-384h-460l-245-398l-245 398H308l242 383l-231 385h460l245 398l245-398h460z"></svg:path>`,
})
export class FluentMdl2SixPointStarIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
