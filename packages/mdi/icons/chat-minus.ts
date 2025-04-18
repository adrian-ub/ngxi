import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChatMinusIcon],svg[mdi-chat-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17v2h-8v-2zM12 3c5.5 0 10 3.58 10 8c0 .58-.08 1.14-.22 1.68A6.005 6.005 0 0 0 13 18l.08.95L12 19c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.14 2 11c0-4.42 4.5-8 10-8"></svg:path>`,
})
export class MdiChatMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
