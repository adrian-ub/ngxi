import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeReplyIcon],svg[icomoon-free-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.119V16l-6-6l6-6v3.966c6.98.164 6.681-4.747 4.904-7.966C16.29 4.741 15.359 12.337 7 12.119"></svg:path>`,
})
export class IcomoonFreeReplyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
