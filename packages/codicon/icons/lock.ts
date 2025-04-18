import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLockIcon],svg[codicon-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-1V5a4 4 0 1 0-8 0v2H3L2 8v6l1 1h10l1-1V8zM5 5a3 3 0 1 1 6 0v2H5zm8 9H3V8h10z"></svg:path>`,
})
export class CodiconLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
