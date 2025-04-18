import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoChat32FilledIcon],svg[fluent-video-chat-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.5A4.5 4.5 0 0 1 6.5 6h10a4.5 4.5 0 0 1 4.5 4.5v11a4.5 4.5 0 0 1-4.202 4.49A9 9 0 0 0 2 16.275zm27.996-.746c0-1.814-2.036-2.882-3.529-1.852l-3.967 2.74v10.716l3.968 2.74c1.492 1.03 3.528-.038 3.528-1.852zM8.5 30a7.5 7.5 0 1 0-6.629-3.988l-.853 3.37a.5.5 0 0 0 .608.607l3.365-.859A7.5 7.5 0 0 0 8.5 30M5 21.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M5.75 25a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class FluentVideoChat32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
