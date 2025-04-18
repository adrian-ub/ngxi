import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMessagePlusAltIcon],svg[ci-message-plus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-2V7h-3V5h3V2h2v3h3v2h-3v3Z"></svg:path><svg:path fill="currentColor" d="M21 12h-2v3H8.334a1.984 1.984 0 0 0-1.2.4L5 17V5h7V3H5a2 2 0 0 0-2 2v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 0 0 2-2v-3Z"></svg:path>`,
})
export class CiMessagePlusAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
