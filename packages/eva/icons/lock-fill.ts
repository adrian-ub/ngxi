import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaLockFillIcon],svg[eva-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4ZM12 18a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
