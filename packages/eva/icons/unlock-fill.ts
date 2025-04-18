import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaUnlockFillIcon],svg[eva-unlock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 8h-7V6a2 2 0 0 1 4 0a1 1 0 0 0 2 0a4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-5 10a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaUnlockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
