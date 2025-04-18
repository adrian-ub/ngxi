import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMailReplyIcon],svg[gg-mail-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.362 15.529l-1.414 1.414l-4.95-4.95l4.95-4.95l1.414 1.415l-2.498 2.498h8.138a4 4 0 0 1 4 4v2h-2v-2a2 2 0 0 0-2-2H7.79z"></svg:path>`,
})
export class GgMailReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
