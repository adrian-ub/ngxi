import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatCheckedIcon],svg[tdesign-chat-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zm14.157 3.586l-7.071 7.07l-4.243-4.242L7.757 9l2.829 2.828l5.657-5.657z"></svg:path>`,
})
export class TdesignChatCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
