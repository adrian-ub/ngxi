import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityDashboardSolidBadgedIcon],svg[clarity-dashboard-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.58 13a7.46 7.46 0 0 1-10-8.12A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35a16.45 16.45 0 0 0 2-18.36ZM17 6.29h1c.37 0 .7 0 1 .05v3.5h-2ZM7 21.91H3.56c0-.39-.05-.77-.05-1.17v-.83H7Zm2.51-8.16L7 11.29a15 15 0 0 1 1.43-1.42l2.46 2.46Zm10.62 9.19a3 3 0 1 1-.82-4.81l5.91-5.81l1.41 1.41l-5.92 5.81a3 3 0 0 1-.62 3.39Zm12.35-1h-3.56v-2h3.53v.83c0 .28.02.75-.01 1.14Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityDashboardSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
