import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLockIcon],svg[la-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.844 0-7 3.156-7 7v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7m0 2c2.754 0 5 2.246 5 5v3H11v-3c0-2.754 2.246-5 5-5M8 15h16v12H8z"></svg:path>`,
})
export class LaLockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
