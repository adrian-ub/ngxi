import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailCheckFillIcon],svg[ri-mail-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513zM19 22l-3.536-3.535l1.415-1.415L19 19.172l3.535-3.536l1.415 1.414z"></svg:path>`,
})
export class RiMailCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
