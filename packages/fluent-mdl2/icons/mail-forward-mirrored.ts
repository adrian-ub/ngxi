import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailForwardMirroredIcon],svg[fluent-mdl2-mail-forward-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384H0v1024l128-128V583l896 449l896-449v953H896v128h1152zM1024 888L271 512h1506zm-611 485l-90-90L6 1600l317 317l90-90l-163-163h518v-128H250z"></svg:path>`,
})
export class FluentMdl2MailForwardMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
