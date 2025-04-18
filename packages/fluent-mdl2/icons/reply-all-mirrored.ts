import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReplyAllMirroredIcon],svg[fluent-mdl2-reply-all-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M742 640q-128 0-245 48T289 827t-139 208t-48 245q0 133 50 249t137 204t203 137t250 50v-128q-106 0-199-40t-162-110t-110-163t-41-199t40-199t110-162t163-110t199-41h549l-402 403l90 90l557-557l-557-557l-90 90l402 403zm1126 64l-467 467l90 90l557-557l-557-557l-90 90z"></svg:path>`,
})
export class FluentMdl2ReplyAllMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
