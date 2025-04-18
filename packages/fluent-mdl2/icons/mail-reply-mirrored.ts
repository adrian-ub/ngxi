import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailReplyMirroredIcon],svg[fluent-mdl2-mail-reply-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v1082q29-23 61-39t67-29V583l896 449l896-449v953H896v128h1152V384zm1024 504L271 512h1506zm-475 648q-50 0-110-2t-122 0t-118 14t-101 40t-71 78t-27 126q0 53 20 99t55 81t82 55t99 21v-128q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10h293l-162 163l90 90l317-317l-317-317l-90 90z"></svg:path>`,
})
export class FluentMdl2MailReplyMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
