import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsReplyAllIcon],svg[zondicons-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v-2.99A4 4 0 0 0 14 10h-3v5L5 9l6-6v5h3a6 6 0 0 1 6 6v3zM6 6V3L0 9l6 6v-3L3 9z"></svg:path>`,
})
export class ZondiconsReplyAllIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
