import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasReplyIcon],svg[pajamas-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.84 9.72a.75.75 0 1 1-1.06 1.06L2.53 7.53L2 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L4.87 6.25h4.378a4.75 4.75 0 0 1 4.75 4.75v3.25a.75.75 0 0 1-1.5 0V11a3.25 3.25 0 0 0-3.25-3.25H4.871l1.97 1.97Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasReplyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
