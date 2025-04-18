import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumLockIcon],svg[circum-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.44 9.33h-1.1V6.4a4.34 4.34 0 0 0-8.68 0v2.93h-1.1a2.5 2.5 0 0 0-2.5 2.5v7.61a2.507 2.507 0 0 0 2.5 2.5h10.88a2.507 2.507 0 0 0 2.5-2.5v-7.61a2.5 2.5 0 0 0-2.5-2.5M8.66 6.4a3.34 3.34 0 0 1 6.68 0v2.93H8.66Zm10.28 13.04a1.51 1.51 0 0 1-1.5 1.5H6.56a1.51 1.51 0 0 1-1.5-1.5v-7.61a1.5 1.5 0 0 1 1.5-1.5h10.88a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path><svg:path fill="currentColor" d="M13 14.95a.98.98 0 0 1-.5.86v1.5a.5.5 0 0 1-1 0v-1.5a.98.98 0 0 1-.5-.86a1 1 0 0 1 2 0"></svg:path>`,
})
export class CircumLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
