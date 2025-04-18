import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailLowImportanceIcon],svg[fluent-mdl2-mail-low-importance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1195l-128-128V648l-896 447l-896-447v888h1333l-128 128H0zm143 128l881 441l881-441zm1649 1286l147-147l90 90l-301 301l-301-301l90-90l147 147v-774h128z"></svg:path>`,
})
export class FluentMdl2MailLowImportanceIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
