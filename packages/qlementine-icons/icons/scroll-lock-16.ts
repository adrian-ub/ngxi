import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsScrollLock16Icon],svg[qlementine-icons-scroll-lock-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 .5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0zM0 8a1 1 0 0 1 1-1h9.79L8.14 4.35a.5.5 0 0 1 .707-.707l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.707-.707l2.65-2.65H1a1 1 0 0 1-1-1z"></svg:path>`,
})
export class QlementineIconsScrollLock16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
