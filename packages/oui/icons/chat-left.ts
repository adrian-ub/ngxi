import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiChatLeftIcon],svg[oui-chat-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.46 14.923A1 1 0 0 1 3.846 14v-1.619H3a2 2 0 0 1-2-2v-7.38a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.38a2 2 0 0 1-2 2H7.91l-2.36 2.331a1 1 0 0 1-1.089.211m.386-2.542a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1v-7.38a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.38a1 1 0 0 1-1 1H7.91a1 1 0 0 0-.702.289L4.846 14z" clip-rule="evenodd"></svg:path>`,
})
export class OuiChatLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
