import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailForwardIcon],svg[fluent-mdl2-mail-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1024l-128-128V583l-896 449l-896-449v953h1024v128H0zm1024 504l753-376H271zm611 485l90-90l317 317l-317 317l-90-90l163-163h-518v-128h518z"></svg:path>`,
})
export class FluentMdl2MailForwardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
