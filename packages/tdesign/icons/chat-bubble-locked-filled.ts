import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatBubbleLockedFilledIcon],svg[tdesign-chat-bubble-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 9.75a1.25 1.25 0 1 0-2.5 0v.75h2.5z"></svg:path><svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12c0 2.662.946 5.104 2.52 7.006L1.3 23H12c6.075 0 11-4.925 11-11S18.075 1 12 1m3.25 8.75v.75h1.248V17h-9v-6.5H8.75v-.75a3.25 3.25 0 0 1 6.5 0"></svg:path>`,
})
export class TdesignChatBubbleLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
