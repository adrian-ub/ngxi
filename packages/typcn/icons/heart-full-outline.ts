import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnHeartFullOutlineIcon],svg[typcn-heart-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 9.4c0 1.3.2 3.3 2 5.1c1.6 1.6 6.9 5.2 7.1 5.4c.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4c1.8-1.8 2-3.8 2-5.1c0-3-2.4-5.4-5.4-5.4c-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4C4.7 4 2.2 6.4 2.2 9.4"></svg:path>`,
})
export class TypcnHeartFullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
