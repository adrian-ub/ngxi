import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatSettingIcon],svg[tdesign-chat-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v9h-2V4h-17v14.296L6.124 16H13v2H6.876L1.5 22.704zM20 12.5v1.14a3.5 3.5 0 0 1 1.405.814l.99-.571l1 1.732l-.99.571a3.5 3.5 0 0 1 0 1.623l.99.572l-1 1.732l-.993-.573a3.5 3.5 0 0 1-1.403.81v1.145h-2V20.35a3.5 3.5 0 0 1-1.403-.81l-.992.573l-1-1.732l.99-.572a3.5 3.5 0 0 1 0-1.623l-.99-.571l1-1.732l.989.57a3.5 3.5 0 0 1 1.406-.813V12.5zm-1 2.995a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignChatSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
