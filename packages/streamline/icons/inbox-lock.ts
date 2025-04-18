import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxLockIcon],svg[streamline-inbox-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 9.5h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M8 9.5h5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5m.5 0v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path></svg:g>`,
})
export class StreamlineInboxLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
