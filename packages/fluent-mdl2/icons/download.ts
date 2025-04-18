import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DownloadIcon],svg[fluent-mdl2-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 2048v-128h1152v128zm1197-979l-621 626l-621-626l90-90l467 470V0h128v1449l467-470z"></svg:path>`,
})
export class FluentMdl2DownloadIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
