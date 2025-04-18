import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLockOutlineIcon],svg[lsicon-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 7V4a2.5 2.5 0 0 0-5 0v3M8 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Zm0 0v2.5m-4.5-5h9v7h-9z"></svg:path>`,
})
export class LsiconLockOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
