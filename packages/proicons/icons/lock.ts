import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLockIcon],svg[proicons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14.478" height="12.87" x="4.761" y="8.38" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.217 8.38V5.967A3.217 3.217 0 0 0 12 2.75v0a3.217 3.217 0 0 0-3.217 3.217V8.38"></svg:path><svg:circle cx="12" cy="14.815" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
