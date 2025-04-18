import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BookmarkReportIcon],svg[fluent-mdl2-bookmark-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1664v-640h384v640zM1920 384v384h-384V384zM1408 0v768h-256v896h-128V0zM512 1664V384h384v1280zm768-768h768v1152l-384-256l-384 256zm640 128h-512v785q65-43 128-85t128-86q65 42 128 85t128 86z"></svg:path>`,
})
export class FluentMdl2BookmarkReportIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
