import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReplyAllAltIcon],svg[fluent-mdl2-reply-all-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 896v128H859l402 403l-90 90l-557-557l557-557l90 90l-402 403zM749 493L282 960l467 467l-90 90l-557-557l557-557z"></svg:path>`,
})
export class FluentMdl2ReplyAllAltIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
