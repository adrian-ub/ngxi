import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLockFillIcon],svg[ri-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zm-2 0V9A5 5 0 0 0 7 9v1zm-6 4v4h2v-4z"></svg:path>`,
})
export class RiLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
