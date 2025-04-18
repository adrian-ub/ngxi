import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlockOutlineIcon],svg[lsicon-unlock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 5V4a2.5 2.5 0 0 0-5 0v3M8 10v2.5M8 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM3.5 7.5h9v7h-9z"></svg:path>`,
})
export class LsiconUnlockOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
