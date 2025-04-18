import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneJoystickIcon],svg[emojione-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#242a33" d="M56.9 48.1c-.7-3-3.2-9-4.8-11.8c-2.3-4.1-38-4.1-40.3 0c-1.6 2.8-4.1 8.8-4.8 11.8c-.4 1.6 1.1 9.3 1.1 9.3c.5 2.5 2.9 4.6 5.5 4.6h36.8c2.5 0 5-2.1 5.4-4.6c0 0 1.5-7.5 1.1-9.3"></svg:path><svg:path fill="#a1acb3" d="M56.1 46.4c-.5.8-1.2 1.5-2.2 2c-.5.2-1.1.3-1.6.4l-1.6.1c-2.1.1-4.2.2-6.2.2c-4.2.1-8.3.2-12.5.2s-8.3 0-12.5-.2c-2.1-.1-4.2-.1-6.2-.2l-1.6-.1c-.5 0-1.1-.2-1.6-.4c-1-.4-1.8-1.2-2.2-2c.6.7 1.5 1.3 2.4 1.6c.5.1.9.2 1.4.2l1.6-.1c2.1-.1 4.2-.2 6.2-.2c4.2-.1 8.3-.2 12.5-.2s8.3.1 12.5.2c2.1.1 4.2.1 6.2.2l1.6.1c.5 0 1 0 1.4-.2c.9-.3 1.8-.9 2.4-1.6"></svg:path><svg:path fill="#6b7278" d="M7.8 53.4c.5-.8 1.2-1.5 2.2-2c.5-.2 1.1-.3 1.6-.4l1.6-.1c2.1-.1 4.2-.2 6.2-.2c4.2-.1 8.3-.2 12.5-.2s8.3 0 12.5.2c2.1.1 4.2.1 6.2.2l1.6.1c.5 0 1.1.2 1.6.4c1 .4 1.8 1.2 2.2 2c-.6-.7-1.5-1.3-2.4-1.6c-.5-.1-.9-.2-1.4-.2l-1.6.1c-2.1.1-4.2.2-6.2.2c-4.2.1-8.3.2-12.5.2s-8.3-.1-12.5-.2c-2.1-.1-4.2-.1-6.2-.2l-1.6-.1c-.5 0-1 0-1.4.2c-.9.3-1.7.9-2.4 1.6"></svg:path><svg:ellipse cx="36" cy="40.9" fill="#53585b" rx="11.9" ry="4.5"></svg:ellipse><svg:ellipse cx="36" cy="37.9" fill="#676e72" rx="10.6" ry="3.5"></svg:ellipse><svg:ellipse cx="36" cy="35.5" fill="#53585b" rx="9.4" ry="3.1"></svg:ellipse><svg:path fill="#d2cfcf" d="M39.8 17.1h-7.6V34c0 1.9 7.6 1.9 7.6 0z"></svg:path><svg:ellipse cx="36" cy="12.4" fill="#ed4c5c" rx="10.5" ry="10.4"></svg:ellipse><svg:path fill="#a5000c" d="M24.1 35.1H14v2.2c1.8 2.2 8.4 2.2 10.2 0c-.1 0-.1-2.2-.1-2.2"></svg:path><svg:ellipse cx="19" cy="35.1" fill="#ed4c5c" rx="5.1" ry="2.2"></svg:ellipse>`,
})
export class EmojioneJoystickIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
