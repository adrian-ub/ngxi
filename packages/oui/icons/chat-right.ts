import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiChatRightIcon],svg[oui-chat-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.54 14.923a1 1 0 0 0 .614-.923v-1.619H13a2 2 0 0 0 2-2v-7.38a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v7.38a2 2 0 0 0 2 2h5.09l2.362 2.331a1 1 0 0 0 1.088.211m-.386-2.542a1 1 0 0 1 1-1H13a1 1 0 0 0 1-1v-7.38a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7.38a1 1 0 0 0 1 1h5.09a1 1 0 0 1 .702.289L11.154 14z" clip-rule="evenodd"></svg:path>`,
})
export class OuiChatRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
