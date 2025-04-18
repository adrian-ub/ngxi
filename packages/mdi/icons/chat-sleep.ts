import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChatSleepIcon],svg[mdi-chat-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C6.5 3 2 6.58 2 11c0 2.13 1.05 4.07 2.75 5.5c-.05.6-.42 2.17-2.75 4.5c0 0 3.55 0 6.47-2.5c1.1.32 2.29.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m3 6.3L11.76 13H15v2H9v-2.3L12.24 9H9V7h6z"></svg:path>`,
})
export class MdiChatSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
