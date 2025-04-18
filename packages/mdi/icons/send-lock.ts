import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSendLockIcon],svg[mdi-send-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v-.5a2.5 2.5 0 0 0-2.5-2.5a2.5 2.5 0 0 0-2.5 2.5v.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-1 0h-3v-.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5zm1-6L2 21v-7l15-2l-15-2V3z"></svg:path>`,
})
export class MdiSendLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
