import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EmbedIcon],svg[fluent-mdl2-embed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m467 595l90 90l-338 339l338 339l-90 90l-430-429zm1114 0l430 429l-430 429l-90-90l338-339l-338-339zM701 1792l512-1536h134L835 1792z"></svg:path>`,
})
export class FluentMdl2EmbedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
