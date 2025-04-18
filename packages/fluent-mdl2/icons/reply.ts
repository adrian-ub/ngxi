import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReplyIcon],svg[fluent-mdl2-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 640q128 0 245 48t208 139t139 208t48 245q0 133-50 249t-137 204t-203 137t-250 50v-128q106 0 199-40t162-110t110-163t41-199t-40-199t-110-162t-163-110t-199-41H475l402 403l-90 90l-557-557l557-557l90 90l-402 403z"></svg:path>`,
})
export class FluentMdl2ReplyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
