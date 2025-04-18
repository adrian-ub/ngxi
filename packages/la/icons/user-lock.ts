import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUserLockIcon],svg[la-user-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-3.9 0-7 3.1-7 7a6.96 6.96 0 0 0 3.07 5.813C8.51 19.346 6 22.892 6 27h2c0-4.4 3.6-8 8-8c1.2 0 2.4.3 3.4.8c.3-.6.6-1.2 1.1-1.7c-.199-.1-.404-.179-.607-.266A6.96 6.96 0 0 0 23 12c0-3.9-3.1-7-7-7m0 2c2.8 0 5 2.2 5 5s-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5m9 11c-2.2 0-4 1.8-4 4v2h-3v8h14v-8h-3v-2c0-2.2-1.8-4-4-4m0 2c1.1 0 2 .9 2 2v2h-4v-2c0-1.1.9-2 2-2m-5 6h10v4H20z"></svg:path>`,
})
export class LaUserLockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
