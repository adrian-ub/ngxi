import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsLockDuplicateIcon],svg[dashicons-lock-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-1V6c0-2.2-1.8-4-4-4S6 3.8 6 6v3H5c-.5 0-1 .5-1 1v7c0 .5.5 1 1 1h10c.5 0 1-.5 1-1v-7c0-.5-.5-1-1-1m-4 7H9l.4-2.2c-.5-.2-.9-.8-.9-1.3c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .6-.3 1.1-.9 1.3zm1-7H8V6c0-1.1.9-2 2-2s2 .9 2 2z"></svg:path>`,
})
export class DashiconsLockDuplicateIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
