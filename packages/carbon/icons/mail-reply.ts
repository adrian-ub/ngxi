import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMailReplyIcon],svg[carbon-mail-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 18l-1.414 1.414L26.167 22H18a4 4 0 0 0 0 8h2v-2h-2a2 2 0 0 1 0-4h8.167l-2.583 2.587L25 28l5-5Z"></svg:path><svg:path fill="currentColor" d="M10 22H4L3.997 6.906l11.434 7.916a1 1 0 0 0 1.138 0L28 6.91V16h2V6a2.003 2.003 0 0 0-2-2H4a2 2 0 0 0-2 1.997V22a2.003 2.003 0 0 0 2 2h6ZM25.799 6L16 12.784L6.201 6Z"></svg:path>`,
})
export class CarbonMailReplyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
