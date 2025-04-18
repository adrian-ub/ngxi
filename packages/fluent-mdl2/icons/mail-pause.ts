import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailPauseIcon],svg[fluent-mdl2-mail-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v768h-128V648l-896 447l-896-447v888h1280v128H0zm143 128l881 441l881-441zm1649 1536v-768h128v768zm-256 0v-768h128v768z"></svg:path>`,
})
export class FluentMdl2MailPauseIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
