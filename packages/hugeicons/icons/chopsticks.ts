import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChopsticksIcon],svg[hugeicons-chopsticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.922 21.751c-.44 0-.89-.17-1.23-.51c-.71-.71-.71-1.8-.05-2.47l9.48-9.48s.03-.04.05-.05c.02-.02.04-.04.06-.05l2.67-2.67c.31-.32.74-.5 1.2-.5s.9.18 1.23.51l.66.66c.34.33.53.8.51 1.27c-.01.47-.22.91-.56 1.22l-12.88 11.63c-.33.29-.73.44-1.14.44m8.78-10.92l-9 9a.22.22 0 0 0 .01.31c.12.12.26.13.34.05l9.47-8.55l-.82-.82zm1.06-1.06l.87.87l2.3-2.08c.05-.05.07-.11.07-.15s0-.11-.07-.17l-.66-.66a.23.23 0 0 0-.16-.07c0 .02-.09 0-.14.05l-2.2 2.2zm-13.99 8.84c-.44 0-.88-.17-1.23-.51c-.69-.69-.72-1.74-.1-2.41l11.63-12.88c.32-.35.75-.55 1.22-.56c.46-.02.94.17 1.27.51l.65.66a1.71 1.71 0 0 1 0 2.44l-2.68 2.68s-.02.02-.03.04s-.02.02-.04.03l-9.49 9.5c-.34.33-.77.5-1.21.5zm8.33-11.38l-8.55 9.47c-.08.09-.07.22.01.31c.12.12.26.13.35.04l9-9l-.81-.81zm1.01-1.12l.87.87l2.19-2.19a.22.22 0 0 0-.01-.31l-.65-.66a.24.24 0 0 0-.17-.07c-.04 0-.1.01-.15.07l-2.07 2.3z" color="currentColor"></svg:path>`,
})
export class HugeiconsChopsticksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
