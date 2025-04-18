import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSettingsLineIcon],svg[ri-chat-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7.855 7.071a4 4 0 0 1 0-2.142l-.975-.563l1-1.732l.976.563A4 4 0 0 1 17 14.127V13h2v1.126c.715.184 1.352.56 1.854 1.072l.976-.564l1 1.732l-.975.563a4 4 0 0 1 0 2.142l.975.563l-1 1.732l-.976-.564A4 4 0 0 1 19 21.874V23h-2v-1.126a4 4 0 0 1-1.854-1.072l-.976.564l-1-1.732zM18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiChatSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
