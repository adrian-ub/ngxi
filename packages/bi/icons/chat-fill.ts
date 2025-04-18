import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biChatFillIcon],svg[bi-chat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7s-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6c-.097 1.016-.417 2.13-.771 2.966c-.079.186.074.394.273.362c2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"></svg:path>`,
})
export class BiChatFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
