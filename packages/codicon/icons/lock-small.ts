import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLockSmallIcon],svg[codicon-lock-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 8l1-1h8l1 1v5l-1 1H4l-1-1zm1 0v5h8V8zm7-1V5a3 3 0 0 0-6 0v2h1V5a2 2 0 1 1 4 0v2z"></svg:path>`,
})
export class CodiconLockSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
