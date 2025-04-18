import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLockFilledIcon],svg[lsicon-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3v3H3v8h10V7h-2V4a3 3 0 0 0-3-3M6 4a2 2 0 1 1 4 0v3H6zm2 5.5a1 1 0 0 0-.5 1.866V12.5h1v-1.134A1 1 0 0 0 8 9.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLockFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
