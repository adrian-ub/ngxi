import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLockClosedOutlineIcon],svg[famicons-lock-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 208v-95a80 80 0 0 0-160 0v95"></svg:path><svg:rect width="320" height="272" x="96" y="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class FamiconsLockClosedOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
